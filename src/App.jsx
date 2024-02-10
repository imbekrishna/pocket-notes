import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import GroupNotes from './pages/GroupNotes';
import HomePage from './pages/HomePage';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      Component: HomePage,
      children: [
        {
          path: 'group/:id',
          Component: GroupNotes,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
