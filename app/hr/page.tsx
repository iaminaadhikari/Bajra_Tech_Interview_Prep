import { hrQuestions } from '@/data/interviewQuestions';
import FlashCard from '@/components/FlashCard';
import { Users } from 'lucide-react';

export default function HRStudyPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <header style={{ textAlign: 'center', marginBottom: '16px' }}>
        <div style={{ 
          width: '64px', height: '64px', borderRadius: '16px', 
          background: 'rgba(16, 185, 129, 0.1)', color: 'var(--success-color)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px'
        }}>
          <Users size={32} />
        </div>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '12px' }}>HR & Behavioral Prep</h1>
        <p style={{ color: 'var(--text-secondary)' }}>
          Master the STAR method and prepare for the final cultural fit interview. These questions focus on your background, teamwork, and alignment with Bajra's values.
        </p>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {hrQuestions.map((q, idx) => (
          <FlashCard key={q.id} question={q.question} answer={q.guidance} index={idx + 1} />
        ))}
      </div>
    </div>
  );
}
