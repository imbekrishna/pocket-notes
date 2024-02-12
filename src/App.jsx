import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
  createHashRouter,
} from 'react-router-dom';
import './App.css';
import GroupNotes from './pages/GroupNotes';
import HomePage from './pages/HomePage';
import { getGroups } from './utils/helpers';
import React, { useState } from 'react';

export const GroupContext = React.createContext();

function NoRouteHere() {
  return <Navigate to="/" replace={true} />;
}

function App() {
  const routes = [
    {
      path: '/',
      Component: HomePage,
      children: [
        {
          path: ':id',
          Component: GroupNotes,
        },
      ],
    },
    {
      path: '*',
      Component: NoRouteHere,
    },
  ];

  // To support routing on github pages
  const router =
    import.meta.env.VITE_HASH_ROUTER === 'true'
      ? createHashRouter(routes)
      : createBrowserRouter(routes);

  const [groups, setGroups] = useState(getGroups());

  return (
    <GroupContext.Provider value={{ groups, setGroups }}>
      <RouterProvider router={router} />
    </GroupContext.Provider>
  );
}

export default App;
