"use client";

import { useEffect, useRef, useState } from 'react';
import { Camera, Mic, AlertTriangle } from 'lucide-react';
import styles from './AIInvigilator.module.css';

interface AIInvigilatorProps {
  onWarning: (reason: string) => void;
  isActive: boolean;
}

export default function AIInvigilator({ onWarning, isActive }: AIInvigilatorProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const dataArrayRef = useRef<Uint8Array | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const [hasPermissions, setHasPermissions] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoud, setIsLoud] = useState(false);

  // Noise threshold constants
  const NOISE_THRESHOLD = 50; // Adjust between 0-255 based on sensitivity
  const WARNING_COOLDOWN = 3000; // MS to wait before throwing another audio warning
  const lastWarningTimeRef = useRef<number>(0);

  useEffect(() => {
    if (!isActive) return;

    let animationFrameId: number;

    const startMonitoring = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
        streamRef.current = stream;
        setHasPermissions(true);

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }

        // Setup Audio Monitoring
        const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
        audioContextRef.current = audioCtx;
        
        const analyser = audioCtx.createAnalyser();
        analyser.fftSize = 256;
        analyserRef.current = analyser;
        
        const microphone = audioCtx.createMediaStreamSource(stream);
        microphone.connect(analyser);
        
        const bufferLength = analyser.frequencyBinCount;
        dataArrayRef.current = new Uint8Array(bufferLength);

        monitorAudio();

      } catch (err) {
        console.error("Permission denied or error accessing media", err);
        setError("Camera and Microphone access required for proctoring.");
      }
    };

    const monitorAudio = () => {
      if (!analyserRef.current || !dataArrayRef.current) return;
      
      analyserRef.current.getByteFrequencyData(dataArrayRef.current);
      
      // Calculate average volume
      let sum = 0;
      for(let i = 0; i < dataArrayRef.current.length; i++) {
        sum += dataArrayRef.current[i];
      }
      const average = sum / dataArrayRef.current.length;

      if (average > NOISE_THRESHOLD) {
        setIsLoud(true);
        const now = Date.now();
        if (now - lastWarningTimeRef.current > WARNING_COOLDOWN) {
          onWarning("Background noise detected");
          lastWarningTimeRef.current = now;
        }
      } else {
        setIsLoud(false);
      }

      animationFrameId = requestAnimationFrame(monitorAudio);
    };

    startMonitoring();

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, [isActive, onWarning]);

  if (!isActive) return null;

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.pulseIndicator}></span>
        AI Invigilator Active
      </div>
      
      {error ? (
        <div className={styles.errorBox}>
          <AlertTriangle size={24} color="var(--error-color)" />
          <p>{error}</p>
        </div>
      ) : (
        <div className={`${styles.videoContainer} ${isLoud ? styles.videoLoud : ''}`}>
          <video 
            ref={videoRef} 
            autoPlay 
            playsInline 
            muted 
            className={styles.video}
          />
          <div className={styles.statusIcons}>
            <Camera size={16} color="var(--success-color)" />
            <Mic size={16} color={isLoud ? "var(--error-color)" : "var(--success-color)"} />
          </div>
        </div>
      )}
    </div>
  );
}
