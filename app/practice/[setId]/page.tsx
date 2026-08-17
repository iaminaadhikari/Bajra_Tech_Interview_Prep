import { notFound } from 'next/navigation';
import QuizEngine from '@/components/QuizEngine';
import { getQuestionsForTest } from '@/data/aptitudeQuestions';
import { getUIUXQuestionsForTest } from '@/data/uiuxQuestions';

export default async function PracticeTest({ params }: { params: Promise<{ setId: string }> }) {
  const resolvedParams = await params;
  const setId = resolvedParams.setId;
  const idNum = parseInt(setId);
  
  if (isNaN(idNum) || idNum < 1 || idNum > 10) {
    notFound();
  }

  // IDs 1-5 use Aptitude questions, IDs 6-10 use UI/UX questions
  const testQuestions = idNum <= 5 
    ? getQuestionsForTest(20) 
    : getUIUXQuestionsForTest(20);

  return (
    <div>
      <QuizEngine questions={testQuestions} setId={setId} />
    </div>
  );
}
