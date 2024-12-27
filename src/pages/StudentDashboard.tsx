import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { StudentProfile } from '../components/StudentProfile';
import { Student } from '../types/auth';
import { studentService } from '../services/studentService';
import { featuredExams } from '../data/featuredExams';

export function StudentDashboard() {
  const location = useLocation();
  const navigate = useNavigate();
  const [examCode, setExamCode] = useState('');
  const [meetLink, setMeetLink] = useState('');
  const [currentStudent, setCurrentStudent] = useState<Student>(location.state?.student);

  if (!currentStudent) {
    navigate('/login');
    return null;
  }

  const handleUpdateProfile = (data: Partial<Student>) => {
    const updatedStudent = studentService.updateProfile(currentStudent.id, data);
    if (updatedStudent) {
      setCurrentStudent(updatedStudent);
      toast.success('Profile updated successfully!');
    }
  };

  const handleJoinExam = () => {
    if (!examCode.trim()) return;
    // Implement exam joining logic
  };

  const handleJoinMeeting = () => {
    if (!meetLink.trim()) return;
    window.open(meetLink, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header userInitial={currentStudent.name[0]} />
      
      <main className="flex-grow container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <StudentProfile 
              student={currentStudent} 
              onUpdateProfile={handleUpdateProfile} 
            />
          </div>

          <div className="md:col-span-2 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4">Join Examination</h3>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter exam code"
                    value={examCode}
                    onChange={(e) => setExamCode(e.target.value)}
                    className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:border-[#d041f4]"
                  />
                  <button
                    onClick={handleJoinExam}
                    className="px-4 py-2 bg-[#d041f4] text-white rounded-lg"
                  >
                    Join
                  </button>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4">Join Meeting</h3>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Enter Google Meet link/code"
                    value={meetLink}
                    onChange={(e) => setMeetLink(e.target.value)}
                    className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:border-[#d041f4]"
                  />
                  <button
                    onClick={handleJoinMeeting}
                    className="px-4 py-2 bg-[#d041f4] text-white rounded-lg"
                  >
                    Join
                  </button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredExams.map((exam) => (
                <div key={exam.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src={exam.image}
                    alt={exam.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-2">{exam.title}</h3>
                    <p className="text-gray-600 mb-4">{exam.description}</p>
                    <button
                      className={`w-full py-2 px-4 rounded-lg ${
                        currentStudent.college
                          ? 'bg-[#d041f4] text-white'
                          : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                      }`}
                      disabled={!currentStudent.college}
                    >
                      {currentStudent.college ? 'Attempt Now' : 'Complete Profile First'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}