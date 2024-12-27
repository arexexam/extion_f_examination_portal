import { Student } from '../types/auth';

interface StudentProfileProps {
  student: Student;
  onUpdateProfile: (data: Partial<Student>) => void;
}

export function StudentProfile({ student, onUpdateProfile }: StudentProfileProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    onUpdateProfile({
      college: formData.get('college') as string,
      internshipDomain: formData.get('internshipDomain') as string
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Student Profile</h2>
      <div className="space-y-4 mb-6">
        <p><span className="font-medium">Name:</span> {student.name}</p>
        <p><span className="font-medium">Email:</span> {student.email}</p>
        <p><span className="font-medium">Phone:</span> {student.phoneNumber}</p>
        <p><span className="font-medium">Course:</span> {student.course}</p>
      </div>

      {!student.college && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="college" className="block text-sm font-medium text-gray-700">
              College Name
            </label>
            <input
              type="text"
              id="college"
              name="college"
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#d041f4]"
              required
            />
          </div>
          <div>
            <label htmlFor="internshipDomain" className="block text-sm font-medium text-gray-700">
              Internship Domain
            </label>
            <select
              id="internshipDomain"
              name="internshipDomain"
              className="mt-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-[#d041f4]"
              required
            >
              <option value="">Select Domain</option>
              <option value="Cybersecurity">Cybersecurity</option>
              <option value="Web Development">Web Development</option>
              <option value="Mobile Development">Mobile Development</option>
              <option value="Data Science">Data Science</option>
              <option value="Cloud Computing">Cloud Computing</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-[#d041f4] text-white rounded-lg hover:bg-[#b835d8] transition-colors"
          >
            Update Profile
          </button>
        </form>
      )}
    </div>
  );
}