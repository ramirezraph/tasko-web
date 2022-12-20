import { Login, Tasks } from 'pages';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

const router = createBrowserRouter([
   {
      path: '/',
      element: <Login />,
   },
   {
      path: '/tasks',
      element: <Tasks />,
   },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
   <React.StrictMode>
      <RouterProvider router={router} fallbackElement={<div>Not found</div>} />
   </React.StrictMode>
);
