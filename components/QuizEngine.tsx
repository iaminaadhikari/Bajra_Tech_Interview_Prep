"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Clock, AlertCircle, CheckCircle, XCircle } from 'lucide-react';
import { Question } from '@/data/aptitudeQuestions';
import styles from './QuizEngine.module.css';

interface QuizEngineProps {
  questions: Question[];
  setId: string;
}

export default function QuizEngine({ questions, setId }: QuizEngineProps) {
  const router = useRouter();
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [timeLeft, setTimeLeft] = useState(60 * 60); // 60 minutes in seconds
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  // Timer effect
  useEffect(() => {
    if (isSubmitted || timeLeft <= 0) {
      if (timeLeft <= 0 && !isSubmitted) {
        handleSubmit();
      }
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isSubmitted]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleSelectAnswer = (option: string) => {
    if (isSubmitted) return;
    setAnswers({
      ...answers,
      [questions[currentQuestionIdx].id]: option
    });
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    let newScore = 0;
    questions.forEach(q => {
      if (answers[q.id] === q.correctAnswer) {
        newScore++;
      }
    });
    setScore(newScore);
  };

  const currentQuestion = questions[currentQuestionIdx];

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

  return (
    <div className={styles.engineContainer}>
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
  );
}
