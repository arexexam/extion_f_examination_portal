import { Question } from '../types/exam';

interface QuestionListProps {
  questions: Question[];
}

export function QuestionList({ questions }: QuestionListProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Added Questions</h3>
      {questions.map((question, index) => (
        <div key={question.id} className="p-4 border rounded-lg">
          <div className="flex justify-between items-start">
            <div>
              <span className="font-medium">Question {index + 1}:</span>
              <p className="mt-1">{question.text}</p>
            </div>
            <span className="px-3 py-1 bg-primary-light text-white rounded-full">
              {question.marks} marks
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}