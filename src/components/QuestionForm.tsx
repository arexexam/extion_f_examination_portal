import { useState } from 'react';
import { Send, Upload } from 'lucide-react';
import { Question } from '../types/exam';
import { QuestionList } from './QuestionList';

interface QuestionFormProps {
  examId: string;
  onSubmitQuestion: (question: Question) => void;
  onFinish: () => void;
  questions: Question[];
}

export function QuestionForm({ examId, onSubmitQuestion, onFinish, questions }: QuestionFormProps) {
  const [question, setQuestion] = useState('');
  const [marks, setMarks] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmitQuestion({
      id: Date.now().toString(),
      examId,
      text: question,
      marks: parseInt(marks, 10)
    });
    setQuestion('');
    setMarks('');
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Frame Questions</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-4">
          <textarea
            placeholder="Enter question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:border-[#d041f4]"
            required
          />
          <input
            type="number"
            placeholder="Marks"
            value={marks}
            onChange={(e) => setMarks(e.target.value)}
            className="w-24 px-4 py-2 border rounded-lg focus:outline-none focus:border-[#d041f4]"
            required
          />
        </div>
        <div className="flex gap-4">
          <button
            type="submit"
            className="flex-1 flex items-center justify-center gap-2 px-6 py-2 bg-[#d041f4] text-white rounded-lg"
          >
            <Send className="w-4 h-4" />
            Submit Question
          </button>
          <button
            type="button"
            onClick={onFinish}
            className="flex-1 flex items-center justify-center gap-2 px-6 py-2 bg-[#d041f4] text-white rounded-lg"
          >
            <Upload className="w-4 h-4" />
            Upload Questions
          </button>
        </div>
      </form>

      {questions.length > 0 && (
        <div className="mt-8">
          <QuestionList questions={questions} />
        </div>
      )}
    </div>
  );
}