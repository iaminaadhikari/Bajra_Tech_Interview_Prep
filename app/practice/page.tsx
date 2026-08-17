import Link from 'next/link';
import { Timer, CheckCircle, ArrowRight } from 'lucide-react';
import styles from './practice.module.css';

export default function Practice() {
  const sets = [
    { id: 1, name: "Model Set 1", difficulty: "Beginner", questions: 20 },
    { id: 2, name: "Model Set 2", difficulty: "Intermediate", questions: 20 },
    { id: 3, name: "Model Set 3", difficulty: "Intermediate", questions: 20 },
    { id: 4, name: "Model Set 4", difficulty: "Advanced", questions: 20 },
    { id: 5, name: "Model Set 5", difficulty: "Advanced", questions: 20 },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.iconWrapper}><Timer size={32} /></div>
        <h1>Practice Simulator</h1>
        <p>1-Hour simulated tests covering logical reasoning, quantitative aptitude, and UI/UX problem-solving.</p>
      </header>

      <div className={styles.instructions}>
        <h3><CheckCircle size={18} /> Instructions</h3>
        <ul>
          <li>You have <strong>60 minutes</strong> to complete each set.</li>
          <li>Each set contains randomly selected questions from the question bank.</li>
          <li>Once submitted, you will receive a score and explanations for each answer.</li>
          <li>Do not refresh the page during the exam or your progress will be lost.</li>
        </ul>
      </div>

      <div className={styles.setsGrid}>
        {sets.map(set => (
          <div key={set.id} className={`glass-panel ${styles.setCard}`}>
            <div className={styles.setCardContent}>
              <h2>{set.name}</h2>
              <div className={styles.meta}>
                <span className={styles.badge}>{set.difficulty}</span>
                <span>{set.questions} Questions</span>
              </div>
              <Link href={`/practice/${set.id}`} className="btn-primary" style={{ width: '100%' }}>
                Start Test <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
