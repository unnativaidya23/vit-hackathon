import React, { useState } from 'react';
import {
  BookOpen,
  Video,
  ClipboardList,
  ActivitySquare,
  LineChart,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const cards = [
    {
      title: 'Courses',
      count: 2,
      subtitle: 'Enrolled courses',
      icon: <BookOpen className="text-blue-600" />,
      action: () => navigate('/courses'),
      actionLabel: 'View Courses',
    },
    {
      title: 'Live Lectures',
      count: 1,
      subtitle: 'Scheduled today',
      icon: <Video className="text-purple-600" />,
      action: () => navigate('/live'),
      actionLabel: 'Join Class',
    },
    {
      title: 'Tests',
      count: 2,
      subtitle: 'Pending assessments',
      icon: <ClipboardList className="text-rose-500" />,
      action: () => navigate('/tests'),
      actionLabel: 'Start Test',
    },
    {
      title: 'Improvements',
      count: 3,
      subtitle: 'Topics recommended',
      icon: <ActivitySquare className="text-yellow-600" />,
      action: () => navigate('/improvements'),
      actionLabel: 'Work on Topics',
    },
    {
      title: 'Progress',
      count: '📊',
      subtitle: 'Your learning analytics',
      icon: <LineChart className="text-green-500" />,
      action: () => navigate('/progress'),
      actionLabel: 'View Progress',
    },
  ];

  const initialTodos = [
    { text: 'Join React Lecture at 7 PM', done: false },
    { text: 'Complete Test on HTML & CSS', done: false },
    { text: 'Revise Flexbox from AI Summary', done: false },
  ];
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (index) => {
    const updated = [...todos];
    updated[index].done = !updated[index].done;
    setTodos(updated);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-8">
      {/* Header */}
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800">🎓 Student Dashboard</h1>
        <p className="text-sm text-gray-500">Welcome back, Unnati ✨</p>
      </header>

      {/* Cards Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-5 transition hover:shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gray-100 rounded-lg">{card.icon}</div>
              <h2 className="text-lg font-semibold text-gray-800">{card.title}</h2>
            </div>
            <p className="text-2xl font-bold text-gray-700">{card.count}</p>
            <p className="text-sm text-gray-500 mb-4">{card.subtitle}</p>
            <button
              onClick={card.action}
              className="text-sm px-4 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md"
            >
              {card.actionLabel}
            </button>
          </div>
        ))}
      </div>

      {/* To-do List */}
      <div className="bg-white rounded-xl shadow-md p-6 mt-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-800">📅 Today’s Targets</h3>
          <span className="text-sm text-gray-500">{new Date().toDateString()}</span>
        </div>
        <ul className="space-y-3">
          {todos.map((todo, idx) => (
            <li key={idx} className="flex items-center justify-between">
              <span className={`text-gray-800 ${todo.done ? 'line-through text-gray-400' : ''}`}>
                {todo.text}
              </span>
              <button
                onClick={() => toggleTodo(idx)}
                className={`text-xs px-3 py-1 rounded ${
                  todo.done
                    ? 'bg-green-100 text-green-600'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                {todo.done ? '✓ Done' : 'Mark Done'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
