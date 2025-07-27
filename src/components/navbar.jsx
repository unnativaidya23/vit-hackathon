import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="flex justify-between items-center">
        <div className="text-xl font-bold text-indigo-600">CloudLectures</div>
        <div className="space-x-4">
          <Link to="/" className="text-gray-700 hover:text-indigo-600">Dashboard</Link>
          <Link to="/courses" className="text-gray-700 hover:text-indigo-600">Courses</Link>
          <Link to="/live" className="text-gray-700 hover:text-indigo-600">Live</Link>
          <Link to="/tests" className="text-gray-700 hover:text-indigo-600">Tests</Link>
          <Link to="/improvements" className="text-gray-700 hover:text-indigo-600">Improvements</Link>
          <Link to="/progress" className="text-gray-700 hover:text-indigo-600">Progress</Link>
          <Link to="/profile" className="text-gray-700 hover:text-indigo-600">Profile</Link>
        </div>
      </div>
    </nav>
  );
}
