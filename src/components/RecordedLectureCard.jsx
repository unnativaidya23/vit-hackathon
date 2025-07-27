import React from 'react';
import { FileText, PlayCircle, MessageSquareText, Sparkles } from 'lucide-react';

const RecordedLectureCard = ({ title, date, onViewNotes, onSummarize, onAskAI }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <PlayCircle className="text-indigo-500 w-6 h-6" />
        <div>
          <p className="font-medium">{title}</p>
          <p className="text-sm text-gray-500">{date}</p>
        </div>
      </div>
      <div className="flex gap-2 mt-2">
        <button
          onClick={onViewNotes}
          className="flex items-center gap-1 px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded"
        >
          <FileText className="w-4 h-4" /> Notes
        </button>
        <button
          onClick={onSummarize}
          className="flex items-center gap-1 px-3 py-1 text-sm bg-purple-100 text-purple-800 rounded"
        >
          <Sparkles className="w-4 h-4" /> Summarize
        </button>
        <button
          onClick={onAskAI}
          className="flex items-center gap-1 px-3 py-1 text-sm bg-green-100 text-green-800 rounded"
        >
          <MessageSquareText className="w-4 h-4" /> Ask AI
        </button>
      </div>
    </div>
  );
};

export default RecordedLectureCard;
