import { TaskDetailsModal } from 'components/task-details-modal/loadable';
import {
   CreateProject,
   Login,
   Main,
   PageDoesNotExists,
   Project,
   Projects,
} from 'pages';
import { Route, Routes, useLocation } from 'react-router-dom';

export function App() {
   let location = useLocation();

   let state = location.state as { backgroundLocation?: Location };

   return (
      <>
         <Routes location={state?.backgroundLocation || location}>
            <Route path="/login" element={<Login />} />
            <Route
               path="/"
               element={<Main />}
               errorElement={<PageDoesNotExists />}
            >
               <Route index element={<Projects />} />
               <Route path="/projects" element={<Projects />} />
               <Route path="/projects/create" element={<CreateProject />} />
               <Route path="/:projectId" element={<Project />} />
            </Route>
         </Routes>
         {state?.backgroundLocation && (
            <Routes>
               <Route path="/task/:taskId" element={<TaskDetailsModal />} />
            </Routes>
         )}
      </>
   );
}
