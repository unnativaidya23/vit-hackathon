import React from 'react';
import { LineChart, Video, ClipboardList } from 'lucide-react';

const enrolledCourses = [
  {
    title: 'Web Development',
    progress: 75,
    recordedLectures: 10,
    pendingTests: 2,
  },
  {
    title: 'Machine Learning',
    progress: 40,
    recordedLectures: 5,
    pendingTests: 3,
  },
];

const Courses = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">📚 Enrolled Courses</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {enrolledCourses.map((course, idx) => (
          <div key={idx} className="bg-white shadow-md rounded-xl p-6 space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">{course.title}</h3>

            {/* Progress bar */}
            <div>
              <p className="text-sm text-gray-600 mb-1">Progress: {course.progress}%</p>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-indigo-600 h-3 rounded-full"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
            </div>

            {/* Stats */}
            <div className="flex justify-between text-sm text-gray-600 mt-4">
              <p className="flex items-center gap-1"><Video className="w-4 h-4 text-purple-500" /> {course.recordedLectures} Lectures</p>
              <p className="flex items-center gap-1"><ClipboardList className="w-4 h-4 text-rose-500" /> {course.pendingTests} Tests</p>
            </div>

            <button className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg text-sm">
              Continue Learning
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
