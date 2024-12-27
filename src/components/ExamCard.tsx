import { Edit2, Trash2, Copy, FileText } from 'lucide-react';
import { Exam } from '../types/exam';
import toast from 'react-hot-toast';

interface ExamCardProps {
  exam: Exam;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onFrameQuestions: (id: string) => void;
}

export function ExamCard({ exam, onEdit, onDelete, onFrameQuestions }: ExamCardProps) {
  const handleCopyCode = () => {
    navigator.clipboard.writeText(exam.code);
    toast.success('Code copied to clipboard!');
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-2">{exam.name}</h3>
      <div className="space-y-2 text-gray-600 mb-4">
        <p>Total Marks: {exam.totalMarks}</p>
        <p>Questions: {exam.numberOfQuestions}</p>
        <p>Join Code: <span className="font-mono bg-gray-100 px-2 py-1 rounded">{exam.code}</span></p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => onEdit(exam.id)}
          className="flex items-center gap-1 px-3 py-1.5 bg-[#d041f4] text-white rounded-lg"
        >
          <Edit2 className="w-4 h-4" />
          Edit
        </button>
        <button
          onClick={() => onDelete(exam.id)}
          className="flex items-center gap-1 px-3 py-1.5 bg-red-500 text-white rounded-lg"
        >
          <Trash2 className="w-4 h-4" />
          Delete
        </button>
        <button
          onClick={handleCopyCode}
          className="flex items-center gap-1 px-3 py-1.5 bg-gray-500 text-white rounded-lg"
        >
          <Copy className="w-4 h-4" />
          Copy Code
        </button>
        <button
          onClick={() => onFrameQuestions(exam.id)}
          className="flex items-center gap-1 px-3 py-1.5 bg-[#d041f4] text-white rounded-lg"
        >
          <FileText className="w-4 h-4" />
          Frame Questions
        </button>
      </div>
    </div>
  );
}