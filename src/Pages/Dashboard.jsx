import {
  BookOpen,
  Video,
  FileText,
  TrendingUp,
  BarChart3,
} from 'lucide-react';
import Graph from '../components/Graph';
import TodoList from '../components/TodoList';

const tasks = [
  { task: 'Join Math Live Lecture', time: '10:00 AM', completed: false },
  { task: 'Revise Algebra', time: '3:00 PM', completed: true },
];

export default function Dashboard() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">Student Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <Card icon={<BookOpen className="text-blue-500" />} title="Courses" value="2" />
        <Card icon={<Video className="text-red-500" />} title="Live Lectures" value="5" />
        <Card icon={<FileText className="text-yellow-500" />} title="Tests" value="3" />
        <Card icon={<TrendingUp className="text-pink-500" />} title="Improvements" value="4" />
        <div className="bg-white rounded-xl shadow-md p-4 col-span-1 md:col-span-3 lg:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <BarChart3 className="text-green-500" />
            <h2 className="text-lg font-semibold">Progress</h2>
          </div>
          <Graph />
        </div>
      </div>

      <TodoList tasks={tasks} />
    </div>
  );
}

function Card({ icon, title, value }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}

