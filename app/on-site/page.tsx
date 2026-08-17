import { onSiteQuestions } from '@/data/interviewQuestions';
import FlashCard from '@/components/FlashCard';
import { MonitorPlay } from 'lucide-react';

export default function OnSiteStudyPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <header style={{ textAlign: 'center', marginBottom: '16px' }}>
        <div style={{ 
          width: '64px', height: '64px', borderRadius: '16px', 
          background: 'rgba(139, 92, 246, 0.1)', color: '#8b5cf6',
          display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px'
        }}>
          <MonitorPlay size={32} />
        </div>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '12px' }}>On-Site Technical Prep</h1>
        <p style={{ color: 'var(--text-secondary)' }}>
          Deep dive into UI/UX fundamentals, design processes, wireframing, and problem-solving scenarios expected during the on-site rounds.
        </p>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {onSiteQuestions.map((q, idx) => (
          <FlashCard key={q.id} question={q.question} answer={q.guidance} index={idx + 1} />
        ))}
      </div>
    </div>
  );
}
