import React, { useState } from 'react';
import { Mail, Lock, User } from 'lucide-react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { LoginFormData } from '../types/auth';
import { instructors } from '../data/instructors';
import { students } from '../data/students';

export function LoginForm() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'student' | 'instructor'>('student');
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
    userType: 'student',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (activeTab === 'student') {
      const student = students.find(s => s.email === formData.email && s.password === formData.password);
      if (student) {
        toast.success('Login successful');
        navigate('/student-dashboard', { state: { student } });
      } else {
        toast.error('User not found, signup now!');
        navigate('/signup');
      }
    } else {
      const instructor = instructors.find(i => i.id === formData.email && i.password === formData.password);
      if (instructor) {
        toast.success('Login successful');
        navigate('/instructor-dashboard', { state: { instructor } });
      } else {
        toast.error('Invalid credentials');
      }
    }
  };

  return (
    <div className="w-full max-w-md p-8 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg">
      <div className="flex justify-center mb-6">
        <div className="flex space-x-4">
          <button
            className={`px-4 py-2 rounded-full ${
              activeTab === 'student'
                ? 'bg-[#d041f4] text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => {
              setActiveTab('student');
              setFormData(prev => ({ ...prev, userType: 'student' }));
            }}
          >
            Student Login
          </button>
          <button
            className={`px-4 py-2 rounded-full ${
              activeTab === 'instructor'
                ? 'bg-[#d041f4] text-white'
                : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => {
              setActiveTab('instructor');
              setFormData(prev => ({ ...prev, userType: 'instructor' }));
            }}
          >
            Instructor Login
          </button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div className="relative">
            {activeTab === 'instructor' ? (
              <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            ) : (
              <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            )}
            <input
              type={activeTab === 'student' ? 'email' : 'text'}
              placeholder={activeTab === 'student' ? 'Email' : 'User ID'}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-[#d041f4]"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              required
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-[#d041f4]"
              value={formData.password}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, password: e.target.value }))
              }
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-[#d041f4] text-white rounded-lg hover:bg-[#b835d8] transition-colors"
        >
          Login
        </button>

        {activeTab === 'student' && (
          <div className="text-center space-y-2">
            <a
              href="/signup"
              className="block text-[#d041f4] hover:underline"
            >
              Don't have an account? Sign up now!
            </a>
            <a
              href="#"
              className="block text-[#d041f4] hover:underline"
            >
              Forgot Password?
            </a>
          </div>
        )}
      </form>
    </div>
  );
}