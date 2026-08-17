import { aptitudeQuestions } from '@/data/aptitudeQuestions';
import AptitudeStudyCard from '@/components/AptitudeStudyCard';
import { PenTool } from 'lucide-react';

export default function AptitudeStudyPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <header style={{ textAlign: 'center', marginBottom: '16px' }}>
        <div style={{ 
          width: '64px', height: '64px', borderRadius: '16px', 
          background: 'rgba(59, 130, 246, 0.1)', color: 'var(--accent-color)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px'
        }}>
          <PenTool size={32} />
        </div>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '12px' }}>Aptitude Question Bank</h1>
        <p style={{ color: 'var(--text-secondary)' }}>
          Study our curated list of logical reasoning, quantitative, and UI/UX problem solving questions. Try to answer them yourself before revealing the explanation.
        </p>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {aptitudeQuestions.map((q, idx) => (
          <AptitudeStudyCard key={q.id} q={q} index={idx + 1} />
        ))}
      </div>
    </div>
  );
}
