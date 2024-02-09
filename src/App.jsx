import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import GroupNotes from './pages/GroupNotes';
import RootLayout from './components/RootLayout';
import Sidebar from './components/Sidebar';
// import HomePage from './pages/HomePage';
function App() {
  const router = createBrowserRouter([
    {
      Component: RootLayout,
      children: [
        {
          path: '/',
          Component: Sidebar,
          children: [
            {
              path: 'group/:id',
              Component: GroupNotes,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
