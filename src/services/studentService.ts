import { Student } from '../types/auth';
import { students } from '../data/students';

export const studentService = {
  updateProfile(studentId: string, data: Partial<Student>): Student | null {
    const index = students.findIndex(s => s.id === studentId);
    if (index !== -1) {
      students[index] = { ...students[index], ...data };
      return students[index];
    }
    return null;
  },

  getStudent(id: string): Student | undefined {
    return students.find(s => s.id === id);
  }
};