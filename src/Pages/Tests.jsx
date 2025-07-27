import React, { useState, useEffect } from 'react';

// Dummy quiz data
const quizData = [
  {
    question: 'What does HTML stand for?',
    options: [
      'Hyperlinks and Text Markup Language',
      'Home Tool Markup Language',
      'Hyper Text Markup Language',
      'Hyper Tool Multi Language',
    ],
    answer: 'Hyper Text Markup Language',
  },
  {
    question: 'Which CSS property is used to change text color?',
    options: ['font-color', 'text-color', 'color', 'background-color'],
    answer: 'color',
  },
  {
    question: 'Which language is used to style web pages?',
    options: ['HTML', 'JQuery', 'CSS', 'XML'],
    answer: 'CSS',
  },
  {
    question: 'Inside which HTML element do we put JavaScript?',
    options: ['<js>', '<scripting>', '<script>', '<javascript>'],
    answer: '<script>',
  },
  {
    question: 'Which is a JavaScript data type?',
    options: ['float', 'decimal', 'number', 'real'],
    answer: 'number',
  },
  {
    question: 'Which symbol is used for comments in CSS?',
    options: ['//', '<!-- -->', '#', '/* */'],
    answer: '/* */',
  },
  {
    question: 'React is a...',
    options: ['Framework', 'Library', 'Language', 'Compiler'],
    answer: 'Library',
  },
  {
    question: 'Which hook is used for state in React?',
    options: ['useRef()', 'useState()', 'useEffect()', 'useMemo()'],
    answer: 'useState()',
  },
  {
    question: 'Which tool bundles JavaScript files for usage in a browser?',
    options: ['npm', 'Node.js', 'Webpack', 'Babel'],
    answer: 'Webpack',
  },
  {
    question: 'Tailwind CSS is a?',
    options: [
      'UI Library',
      'Utility-first CSS Framework',
      'Component Library',
      'Preprocessor',
    ],
    answer: 'Utility-first CSS Framework',
  },
];

export default function Tests() {
  const [answers, setAnswers] = useState(Array(quizData.length).fill(null));
  const [submitted, setSubmitted] = useState(false);
  const [started, setStarted] = useState(false);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('testHistory')) || [];
    setHistory(stored);
  }, []);

  const handleOptionChange = (index, selected) => {
    const newAnswers = [...answers];
    newAnswers[index] = selected;
    setAnswers(newAnswers);
  };

  const handleSubmit = () => {
    const score = answers.reduce(
      (total, ans, index) =>
        ans === quizData[index].answer ? total + 1 : total,
      0
    );

    const newEntry = {
      date: new Date().toLocaleString(),
      score,
    };

    const updatedHistory = [newEntry, ...history];
    setHistory(updatedHistory);
    localStorage.setItem('testHistory', JSON.stringify(updatedHistory));
    setSubmitted(true);
  };

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <h2 className="text-3xl font-bold mb-4">Test Portal</h2>

      {!started && !submitted && (
        <>
          <div className="bg-white p-6 rounded shadow-md mb-6 max-w-xl">
            <h3 className="text-xl font-semibold mb-2">
              Start Test for <span className="text-indigo-600">Frontend Basics</span>
            </h3>
            <p className="text-gray-600 mb-4">
              This is a short quiz to evaluate your understanding of basic frontend concepts.
            </p>
            <button
              onClick={() => setStarted(true)}
              className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700"
            >
              Start Test
            </button>
          </div>

          {history.length > 0 && (
            <div className="bg-white p-6 rounded shadow max-w-xl">
              <h3 className="text-lg font-semibold mb-4">📜 Previous Attempts</h3>
              <ul className="list-disc ml-6 space-y-2">
                {history.map((entry, idx) => (
                  <li key={idx} className="text-gray-700">
                    <strong>{entry.date}</strong> – Score: {entry.score}/10
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      )}

      {started && !submitted && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          {quizData.map((q, idx) => (
            <div key={idx} className="mb-6 bg-white p-4 rounded shadow">
              <p className="font-medium mb-2">
                {idx + 1}. {q.question}
              </p>
              {q.options.map((opt, optIdx) => (
                <label key={optIdx} className="block mb-1">
                  <input
                    type="radio"
                    name={`question-${idx}`}
                    value={opt}
                    checked={answers[idx] === opt}
                    onChange={() => handleOptionChange(idx, opt)}
                    className="mr-2"
                  />
                  {opt}
                </label>
              ))}
            </div>
          ))}
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
          >
            Submit Quiz
          </button>
        </form>
      )}

      {submitted && (
        <div className="bg-white p-6 rounded shadow max-w-xl">
          <h3 className="text-xl font-semibold mb-4">
            🎉 Your Score: {history[0]?.score} / {quizData.length}
          </h3>
          <p className="text-gray-600 mb-4">
            Based on your result, head over to <strong>Improvements</strong> to work on weak areas.
          </p>
          <button
            onClick={() => {
              setStarted(false);
              setSubmitted(false);
              setAnswers(Array(quizData.length).fill(null));
            }}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            Retake Test
          </button>
        </div>
      )}
    </div>
  );
}
