import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const JoinClass = () => {
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const navigate = useNavigate();
  const [cameraAccess, setCameraAccess] = useState(true);

  useEffect(() => {
    const getCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        streamRef.current = stream;
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error('Camera access denied:', err);
        setCameraAccess(false);
      }
    };

    getCamera();

    return () => {
      stopCamera(); // clean up when component unmounts
    };
  }, []);

  const stopCamera = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach((track) => track.stop());
      streamRef.current = null;
    }
  };

  const handleLeave = () => {
    stopCamera();
    navigate('/live');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold mb-4">Live Class – React Basics</h2>
      <p className="mb-6 text-gray-300">Camera is mandatory. Lecture is in progress.</p>

      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-6">
        {/* Camera Window - Left Side */}
        <div className="flex-1 bg-gray-800 p-4 rounded-lg border border-indigo-500">
          <h3 className="text-lg font-semibold mb-2">Your Camera</h3>
          {cameraAccess ? (
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="rounded w-full h-64 object-cover border-2 border-yellow-400"
            />
          ) : (
            <p className="text-red-400">Camera not accessible. Please enable it and refresh.</p>
          )}
        </div>

        {/* Lecture Window - Right Side */}
        <div className="flex-1 bg-gray-800 p-4 rounded-lg border border-indigo-500">
          <h3 className="text-lg font-semibold mb-2">Lecture Window</h3>
          <div className="w-full h-64 bg-black rounded flex items-center justify-center text-gray-400 border border-gray-700">
            <span>📽️ Lecture in Progress (Simulated)</span>
          </div>
        </div>
      </div>

      <button
        onClick={handleLeave}
        className="mt-8 bg-red-600 px-6 py-2 rounded hover:bg-red-700"
      >
        Leave Class
      </button>
    </div>
  );
};

export default JoinClass;
