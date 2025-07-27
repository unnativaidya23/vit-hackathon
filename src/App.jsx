import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Dashboard from './Pages/Dashboard';
import LiveLectures from './Pages/LiveLectures';
import Tests from './Pages/Tests';
import Improvements from './Pages/Improvements';
import Progress from './Pages/Progress';
import Profile from './Pages/Profile';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/live" element={<LiveLectures />} />
        <Route path="/tests" element={<Tests />} />
        <Route path="/improvements" element={<Improvements />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;