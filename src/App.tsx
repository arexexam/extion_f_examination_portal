import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { InstructorDashboard } from './pages/InstructorDashboard';
import { StudentDashboard } from './pages/StudentDashboard';

function App() {
  return (
    <Router>
      <div 
        className="min-h-screen" 
        onContextMenu={(e) => e.preventDefault()}
      >
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/instructor-dashboard" element={<InstructorDashboard />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
        </Routes>
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}

export default App;