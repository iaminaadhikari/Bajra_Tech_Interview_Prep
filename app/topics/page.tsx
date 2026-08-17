import { studyTopics } from '@/data/studyTopics';
import { BookOpen } from 'lucide-react';

export default function TopicsPage() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <header style={{ textAlign: 'center', marginBottom: '16px' }}>
        <div style={{ 
          width: '64px', height: '64px', borderRadius: '16px', 
          background: 'rgba(59, 130, 246, 0.1)', color: 'var(--accent-color)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px'
        }}>
          <BookOpen size={32} />
        </div>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '12px' }}>Study Topics</h1>
        <p style={{ color: 'var(--text-secondary)' }}>
          Review these core concepts and terminology before diving into the aptitude and technical questions.
        </p>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {studyTopics.map((topic) => (
          <div key={topic.id} className="glass-panel" style={{ padding: '24px' }}>
            <div style={{ 
              background: 'rgba(255, 255, 255, 0.1)', padding: '4px 12px', 
              borderRadius: '100px', fontSize: '0.75rem', textTransform: 'uppercase', 
              letterSpacing: '0.5px', color: 'var(--text-secondary)', display: 'inline-block',
              marginBottom: '12px'
            }}>
              {topic.category}
            </div>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '16px', color: 'var(--text-primary)' }}>
              {topic.title}
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', whiteSpace: 'pre-wrap' }}>
              {topic.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
