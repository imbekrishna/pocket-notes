import { Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './components/Sidebar';
import GroupNotes from './pages/GroupNotes';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Sidebar />} />
      <Route path="/group/:id" element={<GroupNotes />} />
    </Routes>
  );
}

export default App;
