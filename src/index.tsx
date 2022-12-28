import {
   CreateProject,
   Login,
   Main,
   Projects,
   Project,
   PageDoesNotExists,
} from 'pages';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
   createBrowserRouter,
   createRoutesFromElements,
   Route,
   RouterProvider,
} from 'react-router-dom';
import './index.css';

const router = createBrowserRouter(
   createRoutesFromElements([
      <Route path="/" element={<Main />} errorElement={<PageDoesNotExists />}>
         <Route index element={<Projects />} />
         <Route path="/projects" element={<Projects />} />
         <Route path="/projects/create" element={<CreateProject />} />
         <Route path="/:projectId" element={<Project />} />
      </Route>,
      <Route path="/login" element={<Login />} />,
   ])
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
   <React.StrictMode>
      <RouterProvider router={router} fallbackElement={<div>Not found</div>} />
   </React.StrictMode>
);
