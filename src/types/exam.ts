export interface ExamFormData {
  name: string;
  totalMarks: string;
  numberOfQuestions: string;
  meetLink: string;
}

export interface Exam {
  id: string;
  code: string;
  name: string;
  totalMarks: number;
  numberOfQuestions: number;
  meetLink: string;
  questions?: Question[];
}

export interface Question {
  id: string;
  examId: string;
  text: string;
  marks: number;
}