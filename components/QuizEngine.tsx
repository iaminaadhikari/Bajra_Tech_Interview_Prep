"use client";

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Clock, CheckCircle, XCircle, AlertTriangle, Maximize } from 'lucide-react';
import { Question } from '@/data/aptitudeQuestions';
import AIInvigilator from './AIInvigilator';
import styles from './QuizEngine.module.css';

interface QuizEngineProps {
  questions: Question[];
  setId: string;
}

export default function QuizEngine({ questions, setId }: QuizEngineProps) {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [timeLeft, setTimeLeft] = useState(60 * 60);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  
  // Invigilator States
  const [hasStarted, setHasStarted] = useState(false);
  const [warnings, setWarnings] = useState<{ time: Date, reason: string }[]>([]);
  const [isDisqualified, setIsDisqualified] = useState(false);

  // Handle Fullscreen & Visibility
  useEffect(() => {
    if (!hasStarted || isSubmitted || isDisqualified) return;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        handleWarning("Tab switched or browser minimized");
      }
    };

    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        handleWarning("Exited fullscreen mode");
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, [hasStarted, isSubmitted, isDisqualified]);

  // Timer effect
  useEffect(() => {
    if (!hasStarted || isSubmitted || isDisqualified || timeLeft <= 0) {
      if (timeLeft <= 0 && !isSubmitted && !isDisqualified) {
        handleSubmit();
      }
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isSubmitted, isDisqualified, hasStarted]);

  const handleWarning = (reason: string) => {
    setWarnings(prev => {
      const newWarnings = [...prev, { time: new Date(), reason }];
      if (newWarnings.length >= 3) {
        setIsDisqualified(true);
      }
      return newWarnings;
    });
  };

  const startTest = async () => {
    if (containerRef.current) {
      try {
        await containerRef.current.requestFullscreen();
        setHasStarted(true);
      } catch (err) {
        alert("You must allow fullscreen to start the test.");
      }
    }
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleSelectAnswer = (option: string) => {
    if (isSubmitted || isDisqualified) return;
    setAnswers({
      ...answers,
      [questions[currentQuestionIdx].id]: option
    });
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
    let newScore = 0;
    questions.forEach(q => {
      if (answers[q.id] === q.correctAnswer) {
        newScore++;
      }
    });
    setScore(newScore);
  };

  if (isDisqualified) {
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    }
    return (
      <div className={styles.resultsContainer}>
        <div className={`glass-panel ${styles.scoreCard}`} style={{ borderLeft: '4px solid var(--error-color)' }}>
          <h2>Test Terminated</h2>
          <AlertTriangle size={64} color="var(--error-color)" />
          <h3 style={{ color: 'var(--error-color)' }}>Disqualified by AI Invigilator</h3>
          <p>You have accumulated 3 or more warnings for breaking the testing environment rules.</p>
          
          <div style={{ textAlign: 'left', background: 'rgba(239,68,68,0.1)', padding: '16px', borderRadius: '8px', width: '100%', marginTop: '16px' }}>
            <h4>Warning Log:</h4>
            <ul style={{ paddingLeft: '24px', marginTop: '8px', color: 'var(--text-secondary)' }}>
              {warnings.map((w, i) => (
                <li key={i}>{w.time.toLocaleTimeString()}: {w.reason}</li>
              ))}
            </ul>
          </div>

          <button className="btn-primary" onClick={() => router.push('/practice')}>
            Return to Practice Sets
          </button>
        </div>
      </div>
    );
  }

  if (isSubmitted) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className={styles.resultsContainer}>
        <div className={`glass-panel ${styles.scoreCard}`}>
          <h2>Test Completed: Model Set {setId}</h2>
          <div className={styles.scoreCircle}>
            <span className={styles.scoreText}>{score}/{questions.length}</span>
            <span className={styles.percentageText}>{percentage}%</span>
          </div>
          {warnings.length > 0 && (
             <div style={{ color: 'var(--text-secondary)' }}>
                You received {warnings.length} warning(s) during this test.
             </div>
          )}
          <p>{percentage >= 70 ? 'Great job! You are well prepared.' : 'Keep practicing to improve your score.'}</p>
          <button className="btn-primary" onClick={() => router.push('/practice')}>
            Return to Practice Sets
          </button>
        </div>

        <div className={styles.reviewSection}>
          <h3>Review Your Answers</h3>
          {questions.map((q, idx) => {
            const userAnswer = answers[q.id];
            const isCorrect = userAnswer === q.correctAnswer;
            
            return (
              <div key={q.id} className={`glass-panel ${styles.reviewCard} ${isCorrect ? styles.correctCard : styles.incorrectCard}`}>
                <div className={styles.reviewHeader}>
                  <span className={styles.qNum}>Question {idx + 1}</span>
                  {isCorrect ? <CheckCircle color="var(--success-color)" /> : <XCircle color="var(--error-color)" />}
                </div>
                <p className={styles.reviewQuestion}>{q.question}</p>
                <div className={styles.reviewAnswers}>
                  <div className={styles.yourAnswer}>
                    <strong>Your Answer:</strong> {userAnswer || 'Not answered'}
                  </div>
                  {!isCorrect && (
                    <div className={styles.correctAnswer}>
                      <strong>Correct Answer:</strong> {q.correctAnswer}
                    </div>
                  )}
                </div>
                <div className={styles.explanation}>
                  <strong>Explanation:</strong> {q.explanation}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  if (!hasStarted) {
    return (
      <div className={styles.resultsContainer}>
        <div className={`glass-panel ${styles.scoreCard}`}>
          <h2>Ready to Begin?</h2>
          <p>This test simulates the Bajra Technologies proctored environment. You must grant camera and microphone access, and the test will run in fullscreen mode.</p>
          <ul style={{ textAlign: 'left', color: 'var(--text-secondary)', padding: '0 24px', margin: '16px 0', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <li>🔴 Switching tabs will trigger a warning.</li>
            <li>🔴 Exiting fullscreen will trigger a warning.</li>
            <li>🔴 Loud background noise will trigger a warning.</li>
            <li>⚠️ 3 warnings will result in immediate disqualification.</li>
          </ul>
          <button className="btn-primary" onClick={startTest}>
            <Maximize size={18} /> Enter Fullscreen & Start Test
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIdx];

  return (
    <div ref={containerRef} className={styles.fullscreenWrapper}>
      <AIInvigilator isActive={hasStarted && !isSubmitted && !isDisqualified} onWarning={handleWarning} />
      
      <div className={styles.engineContainer}>
        {warnings.length > 0 && (
          <div className={styles.warningBanner}>
            <AlertTriangle size={18} />
            Warning {warnings.length}/3: {warnings[warnings.length - 1].reason}
          </div>
        )}

        <div className={styles.header}>
          <h2>Model Set {setId}</h2>
          <div className={`${styles.timer} ${timeLeft < 300 ? styles.timerWarning : ''}`}>
            <Clock size={20} />
            <span>{formatTime(timeLeft)}</span>
          </div>
        </div>

        <div className={styles.progressContainer}>
          <div 
            className={styles.progressBar} 
            style={{ width: `${((currentQuestionIdx + 1) / questions.length) * 100}%` }}
          />
        </div>

        <div className={`glass-panel ${styles.questionCard}`}>
          <div className={styles.categoryBadge}>{currentQuestion.category}</div>
          <h3 className={styles.questionText}>
            <span className={styles.qNum}>Q{currentQuestionIdx + 1}.</span> {currentQuestion.question}
          </h3>

          <div className={styles.optionsList}>
            {currentQuestion.options.map((option, idx) => {
              const isSelected = answers[currentQuestion.id] === option;
              return (
                <button
                  key={idx}
                  className={`${styles.optionBtn} ${isSelected ? styles.selectedOption : ''}`}
                  onClick={() => handleSelectAnswer(option)}
                >
                  <div className={styles.optionMarker}>{String.fromCharCode(65 + idx)}</div>
                  <div className={styles.optionText}>{option}</div>
                </button>
              );
            })}
          </div>
        </div>

        <div className={styles.navigation}>
          <button 
            className="btn-outline" 
            disabled={currentQuestionIdx === 0}
            onClick={() => setCurrentQuestionIdx(prev => prev - 1)}
          >
            Previous
          </button>

          {currentQuestionIdx < questions.length - 1 ? (
            <button 
              className="btn-primary" 
              onClick={() => setCurrentQuestionIdx(prev => prev + 1)}
            >
              Next Question
            </button>
          ) : (
            <button 
              className="btn-primary" 
              style={{ background: 'var(--success-color)' }}
              onClick={handleSubmit}
            >
              Submit Test
            </button>
          )}
        </div>

        <div className={styles.questionNav}>
          {questions.map((q, idx) => (
            <button
              key={q.id}
              className={`
                ${styles.navDot} 
                ${idx === currentQuestionIdx ? styles.activeDot : ''} 
                ${answers[q.id] ? styles.answeredDot : ''}
              `}
              onClick={() => setCurrentQuestionIdx(idx)}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
