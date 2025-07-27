import React, { useState } from 'react';
import { Clock, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import RecordedLectureCard from '../components/RecordedLectureCard';

const LiveLectures = () => {
  const navigate = useNavigate();
  const [modalContent, setModalContent] = useState(null);
  const [modalTitle, setModalTitle] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const recordedLectures = [
    {
      title: 'HTML & CSS Introduction',
      date: 'July 25, 2025',
      notes: [
        'HTML stands for HyperText Markup Language',
        'CSS stands for Cascading Style Sheets',
        'HTML is used to structure content on the web',
        'CSS is used to style the HTML elements',
      ],
      summary:
        'This lecture introduced HTML and CSS basics. It covered semantic tags, how to structure content using divs and sections, and how to apply inline, internal, and external CSS styles.',
      aiQA: [
        { q: 'What is the purpose of <head> tag?', a: 'It contains meta information like title, charset, and linked files.' },
        { q: 'Difference between id and class in CSS?', a: 'ID is unique, used for single elements. Class can be reused for multiple.' },
      ],
    },
    {
      title: 'Flexbox & Grid Layouts',
      date: 'July 24, 2025',
      notes: [
        'Flexbox is one-dimensional layout system',
        'Grid is two-dimensional for rows and columns',
        'Use justify-content & align-items in Flexbox',
      ],
      summary:
        'Learned how to align items efficiently using Flexbox and how to design complex layouts with CSS Grid. Examples included product cards and navbars.',
      aiQA: [
        { q: 'When to use Grid over Flexbox?', a: 'Use Grid for full page layouts; Flexbox for alignment inside a component.' },
      ],
    },
  ];

  const openModal = (title, content) => {
    setModalTitle(title);
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
    setModalTitle('');
  };

  const scheduledLecture = {
    title: 'Web Development - React Basics',
    time: '7:00 PM',
    course: 'Web Dev',
    link: '/join-class',
  };

  return (
    <div className="p-6 min-h-screen bg-gray-50 relative">
      <h2 className="text-3xl font-bold mb-6">Live Lectures</h2>

      {/* Live Lecture Card */}
      <div className="bg-white p-6 rounded-xl shadow mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold mb-1">{scheduledLecture.title}</h3>
            <p className="text-gray-600 flex items-center gap-2">
              <Clock className="w-4 h-4" /> {scheduledLecture.time} Today
            </p>
            <p className="text-sm text-gray-500">Course: {scheduledLecture.course}</p>
          </div>
          <button
            onClick={() => navigate(scheduledLecture.link)}
            className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
          >
            Join Class
          </button>
        </div>
      </div>

      {/* Recorded Lectures */}
      <h4 className="text-xl font-semibold mb-4">📼 Recorded Lectures</h4>
      <div className="grid gap-4 md:grid-cols-2">
        {recordedLectures.map((rec, idx) => (
          <RecordedLectureCard
            key={idx}
            title={rec.title}
            date={rec.date}
            onViewNotes={() =>
              openModal(`Notes - ${rec.title}`, (
                <ul className="list-disc list-inside">
                  {rec.notes.map((n, i) => (
                    <li key={i} className="mb-1">{n}</li>
                  ))}
                </ul>
              ))
            }
            onSummarize={() =>
              openModal(`Summary - ${rec.title}`, (
                <p className="text-gray-700">{rec.summary}</p>
              ))
            }
            onAskAI={() =>
              openModal(`Ask AI - ${rec.title}`, (
                <div className="space-y-3">
                  {rec.aiQA.map((pair, i) => (
                    <div key={i}>
                      <p className="font-semibold text-indigo-600">Q: {pair.q}</p>
                      <p className="ml-4 text-gray-800">A: {pair.a}</p>
                    </div>
                  ))}
                </div>
              ))
            }
          />
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg relative shadow-lg">
            <button onClick={closeModal} className="absolute top-3 right-3 text-gray-500 hover:text-black">
              <X />
            </button>
            <h3 className="text-xl font-semibold mb-4">{modalTitle}</h3>
            <div className="text-sm">{modalContent}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LiveLectures;
