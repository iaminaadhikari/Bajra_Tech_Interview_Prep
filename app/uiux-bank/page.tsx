import { uiuxQuestions } from '@/data/uiuxQuestions';
import AptitudeStudyCard from '@/components/AptitudeStudyCard';
import { LayoutTemplate } from 'lucide-react';

// Re-using AptitudeStudyCard since it takes a generic Question structure (id, category, question, options, correctAnswer, explanation)

export default function UIUXBankPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <header style={{ textAlign: 'center', marginBottom: '16px' }}>
        <div style={{ 
          width: '64px', height: '64px', borderRadius: '16px', 
          background: 'rgba(16, 185, 129, 0.1)', color: 'var(--success-color)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px'
        }}>
          <LayoutTemplate size={32} />
        </div>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '12px' }}>UI/UX Specific Question Bank</h1>
        <p style={{ color: 'var(--text-secondary)' }}>
          Study 50 specific UI/UX multiple choice questions covering topics like Usability Testing, Visual Design, Information Architecture, and more. Try to answer them yourself before revealing the explanation.
        </p>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {uiuxQuestions.map((q, idx) => (
          <AptitudeStudyCard key={q.id} q={q as any} index={idx + 1} />
        ))}
      </div>
    </div>
  );
}
