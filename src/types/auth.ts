export interface LoginFormData {
  email: string;
  password: string;
  userType: 'student' | 'instructor';
}

export interface SignupFormData {
  name: string;
  dateOfBirth: string;
  phoneNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
  examinationTopic: string;
}

export interface Student {
  id: string;
  name: string;
  dateOfBirth: string;
  phoneNumber: string;
  email: string;
  password: string;
  course: string;
  college?: string;
  internshipDomain?: string;
}