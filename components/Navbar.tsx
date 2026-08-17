import Link from 'next/link';
import { BookOpen, PenTool, Users, Timer, LayoutTemplate } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>
        <Link href="/">BajraPrep</Link>
      </div>
      <div className={styles.links}>
        <Link href="/topics" className={styles.link}>
          <BookOpen size={18} /> Topics
        </Link>
        <Link href="/aptitude" className={styles.link}>
          <PenTool size={18} /> Aptitude
        </Link>
        <Link href="/uiux-bank" className={styles.link}>
          <LayoutTemplate size={18} /> UI/UX Bank
        </Link>
        <Link href="/on-site" className={styles.link}>
          <BookOpen size={18} /> On-Site
        </Link>
        <Link href="/hr" className={styles.link}>
          <Users size={18} /> HR
        </Link>
        <Link href="/practice" className={styles.cta}>
          <Timer size={18} /> Take Practice Test
        </Link>
      </div>
    </nav>
  );
}
