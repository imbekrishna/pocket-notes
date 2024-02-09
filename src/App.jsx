import { Route, Routes } from 'react-router-dom';
import './App.css';
import GroupNotes from './pages/GroupNotes';
import HomePage from './pages/HomePage';
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/group/:id" element={<GroupNotes />} />
    </Routes>
  );
}

export default App;
