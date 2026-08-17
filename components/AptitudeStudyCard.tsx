"use client";

import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Question } from '@/data/aptitudeQuestions';

export default function AptitudeStudyCard({ q, index }: { q: Question, index: number }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="glass-panel" style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ 
          background: 'rgba(255, 255, 255, 0.1)', padding: '4px 12px', 
          borderRadius: '100px', fontSize: '0.75rem', textTransform: 'uppercase', 
          letterSpacing: '0.5px', color: 'var(--text-secondary)'
        }}>
          {q.category}
        </span>
      </div>
      
      <h3 style={{ fontSize: '1.2rem', lineHeight: '1.5' }}>
        <span style={{ color: 'var(--accent-color)', marginRight: '8px' }}>Q{index}.</span>
        {q.question}
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {q.options.map((opt, i) => (
          <div key={i} style={{
            padding: '12px 16px', background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid var(--border-color)', borderRadius: '8px',
            borderColor: showAnswer && opt === q.correctAnswer ? 'var(--success-color)' : 'var(--border-color)',
            backgroundColor: showAnswer && opt === q.correctAnswer ? 'rgba(16, 185, 129, 0.1)' : 'rgba(255, 255, 255, 0.03)'
          }}>
            {String.fromCharCode(65 + i)}. {opt}
          </div>
        ))}
      </div>

      <div style={{ marginTop: '8px' }}>
        <button 
          onClick={() => setShowAnswer(!showAnswer)}
          className="btn-outline"
          style={{ width: '100%', justifyContent: 'center' }}
        >
          {showAnswer ? <><EyeOff size={18} /> Hide Answer</> : <><Eye size={18} /> Reveal Answer & Explanation</>}
        </button>
      </div>

      {showAnswer && (
        <div style={{ 
          marginTop: '8px', padding: '16px', background: 'rgba(59, 130, 246, 0.05)', 
          borderLeft: '4px solid var(--accent-color)', borderRadius: '0 8px 8px 0',
          color: 'var(--text-secondary)', lineHeight: '1.5'
        }}>
          <strong>Explanation:</strong> {q.explanation}
        </div>
      )}
    </div>
  );
}
