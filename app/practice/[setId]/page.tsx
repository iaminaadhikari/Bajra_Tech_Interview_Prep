import { notFound } from 'next/navigation';
import QuizEngine from '@/components/QuizEngine';
import { getQuestionsForTest } from '@/data/aptitudeQuestions';

export default async function PracticeTest({ params }: { params: Promise<{ setId: string }> }) {
  const resolvedParams = await params;
  const setId = resolvedParams.setId;
  
  if (!['1', '2', '3', '4', '5'].includes(setId)) {
    notFound();
  }

  // Generate 20 questions for this test session
  const testQuestions = getQuestionsForTest(20);

  return (
    <div>
      <QuizEngine questions={testQuestions} setId={setId} />
    </div>
  );
}
