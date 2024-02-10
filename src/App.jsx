import {
  RouterProvider,
  createBrowserRouter,
  createHashRouter,
} from 'react-router-dom';
import './App.css';
import GroupNotes from './pages/GroupNotes';
import HomePage from './pages/HomePage';
function App() {
  const routes = [
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
  ];

  // To support routing on github pages
  const router =
    import.meta.env.VITE_HASH_ROUTER === 'true'
      ? createHashRouter(routes)
      : createBrowserRouter(routes);
      
  return <RouterProvider router={router} />;
}

export default App;
