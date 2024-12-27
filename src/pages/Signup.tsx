import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User, Calendar, Phone, BookOpen, Lock, Mail } from 'lucide-react';
import toast from 'react-hot-toast';
import { Logo } from '../components/Logo';
import { SignupFormData } from '../types/auth';
import { students } from '../data/students';

const courses = [
  'Cybersecurity',
  'Web Development',
  'Mobile App Development',
  'Data Science',
  'Cloud Computing',
  'Digital Marketing'
];

export function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<SignupFormData>({
    name: '',
    dateOfBirth: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
    examinationTopic: courses[0]
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match!');
      return;
    }

    if (!formData.email.endsWith('@gmail.com')) {
      toast.error('Please use a Gmail address!');
      return;
    }

    const newStudent = {
      id: Date.now().toString(),
      name: formData.name,
      dateOfBirth: formData.dateOfBirth,
      phoneNumber: formData.phoneNumber,
      email: formData.email,
      password: formData.password,
      course: formData.examinationTopic
    };

    students.push(newStudent);
    toast.success('Signup successful!');
    navigate('/login');
  };

  return (
    <div 
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center p-4"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80")',
      }}
    >
      <div className="text-center mb-8">
        <Logo />
        <h1 className="mt-4 text-2xl font-bold text-white">
          Extion Examination Portal: Signup
        </h1>
      </div>

      <div className="w-full max-w-md p-8 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Student Name"
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-[#d041f4]"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                required
              />
            </div>

            <div className="relative">
              <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="date"
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-[#d041f4]"
                value={formData.dateOfBirth}
                onChange={(e) => setFormData(prev => ({ ...prev, dateOfBirth: e.target.value }))}
                required
              />
            </div>

            <div className="flex gap-2">
              <div className="relative w-24">
                <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="+91"
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-[#d041f4]"
                  maxLength={3}
                  defaultValue="+91"
                />
              </div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:border-[#d041f4]"
                value={formData.phoneNumber}
                onChange={(e) => setFormData(prev => ({ ...prev, phoneNumber: e.target.value }))}
                required
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="email"
                placeholder="Email (@gmail.com)"
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-[#d041f4]"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                required
              />
            </div>

            <div className="relative">
              <BookOpen className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <select
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-[#d041f4]"
                value={formData.examinationTopic}
                onChange={(e) => setFormData(prev => ({ ...prev, examinationTopic: e.target.value }))}
                required
              >
                {courses.map(course => (
                  <option key={course} value={course}>{course}</option>
                ))}
              </select>
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="password"
                placeholder="Password"
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-[#d041f4]"
                value={formData.password}
                onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                required
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-[#d041f4]"
                value={formData.confirmPassword}
                onChange={(e) => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#d041f4] text-white rounded-lg hover:bg-[#b835d8] transition-colors"
          >
            Sign Up
          </button>

          <div className="text-center">
            <a
              href="/login"
              className="text-[#d041f4] hover:underline"
            >
              Already have an account? Login
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}