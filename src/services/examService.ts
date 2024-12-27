import { Exam, Question } from '../types/exam';

// In-memory storage for exams and questions
const examStorage = new Map<string, Exam>();
const questionStorage = new Map<string, Question[]>();

export const examService = {
  createExam(exam: Exam) {
    examStorage.set(exam.id, exam);
    questionStorage.set(exam.id, []);
    return exam;
  },

  updateExam(exam: Exam) {
    if (examStorage.has(exam.id)) {
      examStorage.set(exam.id, exam);
      return exam;
    }
    return null;
  },

  deleteExam(id: string) {
    examStorage.delete(id);
    questionStorage.delete(id);
  },

  getExam(id: string) {
    return examStorage.get(id);
  },

  getExamByCode(code: string) {
    return Array.from(examStorage.values()).find(exam => exam.code === code);
  },

  addQuestion(examId: string, question: Question) {
    const questions = questionStorage.get(examId) || [];
    questions.push(question);
    questionStorage.set(examId, questions);
    return question;
  },

  getQuestions(examId: string) {
    return questionStorage.get(examId) || [];
  }
};