import Link from 'next/link';
import { Timer, CheckCircle, ArrowRight, LayoutTemplate } from 'lucide-react';
import styles from './practice.module.css';

export default function Practice() {
  const aptitudeSets = [
    { id: 1, name: "Aptitude Set 1", difficulty: "Beginner", questions: 20 },
    { id: 2, name: "Aptitude Set 2", difficulty: "Intermediate", questions: 20 },
    { id: 3, name: "Aptitude Set 3", difficulty: "Intermediate", questions: 20 },
    { id: 4, name: "Aptitude Set 4", difficulty: "Advanced", questions: 20 },
    { id: 5, name: "Aptitude Set 5", difficulty: "Advanced", questions: 20 },
  ];

  const uiuxSets = [
    { id: 6, name: "UI/UX Mock 1", difficulty: "Beginner", questions: 20 },
    { id: 7, name: "UI/UX Mock 2", difficulty: "Intermediate", questions: 20 },
    { id: 8, name: "UI/UX Mock 3", difficulty: "Intermediate", questions: 20 },
    { id: 9, name: "UI/UX Mock 4", difficulty: "Advanced", questions: 20 },
    { id: 10, name: "UI/UX Mock 5", difficulty: "Advanced", questions: 20 },
  ];

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.iconWrapper}><Timer size={32} /></div>
        <h1>Practice Simulator</h1>
        <p>1-Hour simulated tests with our strict AI Invigilator environment.</p>
      </header>

      <div className={styles.instructions}>
        <h3><CheckCircle size={18} /> Instructions</h3>
        <ul>
          <li>You have <strong>60 minutes</strong> to complete each set.</li>
          <li>Ensure camera and microphone permissions are granted.</li>
          <li>Do not refresh the page, minimize the browser, or exit fullscreen.</li>
        </ul>
      </div>

      <div>
        <h2 style={{ marginBottom: '24px', fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Timer size={24} color="var(--accent-color)"/> General Aptitude Sets
        </h2>
        <div className={styles.setsGrid}>
          {aptitudeSets.map(set => (
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

      <div style={{ marginTop: '40px' }}>
        <h2 style={{ marginBottom: '24px', fontSize: '1.5rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <LayoutTemplate size={24} color="var(--success-color)"/> UI/UX Specific Sets
        </h2>
        <div className={styles.setsGrid}>
          {uiuxSets.map(set => (
            <div key={set.id} className={`glass-panel ${styles.setCard}`}>
              <div className={styles.setCardContent}>
                <h2>{set.name}</h2>
                <div className={styles.meta}>
                  <span className={styles.badge} style={{ background: 'rgba(16, 185, 129, 0.1)', color: 'var(--success-color)' }}>{set.difficulty}</span>
                  <span>{set.questions} Questions</span>
                </div>
                <Link href={`/practice/${set.id}`} className="btn-primary" style={{ width: '100%', background: 'var(--success-color)' }}>
                  Start Test <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
