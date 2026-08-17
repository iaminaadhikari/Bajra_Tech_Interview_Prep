import Link from 'next/link';
import { ArrowRight, Book, MonitorPlay, MessageSquare, PenTool } from 'lucide-react';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.hero}>
        <div className={styles.heroBadge}>UI/UX Design Traineeship</div>
        <h1 className={styles.title}>Your journey to becoming a <span className="highlight">Bajra Being</span> starts here.</h1>
        <p className={styles.subtitle}>
          Master the aptitude test, ace the UI/UX problem-solving rounds, and prepare for the behavioral interviews with our curated study material.
        </p>
        <div className={styles.actions}>
          <Link href="/practice" className="btn-primary">
            Start Practice Test <ArrowRight size={18} />
          </Link>
        </div>
      </header>

      <section className={styles.grid}>
        <div className="glass-panel">
          <div className={styles.cardContent}>
            <div className={styles.iconWrapper}><Book size={24} /></div>
            <h2>Study Topics</h2>
            <p>Review core concepts like Syllogisms, Gestalt Principles, and UI/UX terminology.</p>
            <Link href="/topics" className={styles.cardLink}>Read Topics &rarr;</Link>
          </div>
        </div>

        <div className="glass-panel">
          <div className={styles.cardContent}>
            <div className={styles.iconWrapper}><PenTool size={24} /></div>
            <h2>Aptitude Mastery</h2>
            <p>50 logical, quantitative, and spatial reasoning questions mirroring the real 1-hour Bajra Aptitude Test (BAT).</p>
            <Link href="/aptitude" className={styles.cardLink}>Study Questions &rarr;</Link>
          </div>
        </div>

        <div className="glass-panel">
          <div className={styles.cardContent}>
            <div className={styles.iconWrapper}><MonitorPlay size={24} /></div>
            <h2>On-Site Technical</h2>
            <p>Deep dive into UI/UX fundamentals, design processes, wireframing, and problem-solving scenarios.</p>
            <Link href="/on-site" className={styles.cardLink}>View Technical &rarr;</Link>
          </div>
        </div>

        <div className="glass-panel">
          <div className={styles.cardContent}>
            <div className={styles.iconWrapper}><MessageSquare size={24} /></div>
            <h2>HR & Behavioral</h2>
            <p>Prepare for the final cultural fit interview. Master the STAR method and align with Bajra's core values.</p>
            <Link href="/hr" className={styles.cardLink}>View HR Questions &rarr;</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
