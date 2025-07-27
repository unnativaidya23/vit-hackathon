export default function LiveLectures() {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Live Lectures</h2>
      <p>Join scheduled classes here. Eye tracking UI placeholder below:</p>
      <div className="mt-4 border p-4 rounded-lg bg-white shadow">
        <p className="text-green-600">Eye Gaze Status: 👁 Focused</p>
        <button className="mt-2 bg-blue-600 text-white px-4 py-1 rounded">Join Live Class</button>
      </div>
    </div>
  );
}
