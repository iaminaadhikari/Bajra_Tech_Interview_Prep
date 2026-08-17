"use client";

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import styles from './FlashCard.module.css';

interface FlashCardProps {
  question: string;
  answer: string;
  index: number;
}

export default function FlashCard({ question, answer, index }: FlashCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`glass-panel ${styles.card}`} onClick={() => setIsOpen(!isOpen)}>
      <div className={styles.header}>
        <div className={styles.questionSection}>
          <span className={styles.qNum}>Q{index}.</span>
          <h3 className={styles.questionText}>{question}</h3>
        </div>
        <button className={styles.toggleBtn}>
          {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </button>
      </div>
      
      {isOpen && (
        <div className={styles.answerSection}>
          <div className={styles.answerLabel}>Guidance / Answer:</div>
          <p className={styles.answerText}>{answer}</p>
        </div>
      )}
    </div>
  );
}
