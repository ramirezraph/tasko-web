import { RoundButton } from 'components/round-button/loadable';
import { useNavigate } from 'react-router-dom';
import { ProjectList } from './components/list/loadable';
import { NoProject } from './components/no-project/loadable';
import { useProjectsSlice } from './slice';

export function Projects() {
   let navigate = useNavigate();

   const { slice } = useProjectsSlice();

   const onCreateProject = () => {
      navigate('/projects/create');
   };

   return (
      <div className="flex h-full w-full flex-col items-center justify-center">
         {slice.projects.length === 0 ? (
            <NoProject />
         ) : (
            <ProjectList projects={slice.projects} />
         )}
         <div className="mt-16 flex space-x-3 ">
            <RoundButton
               onClick={onCreateProject}
               icon="plus"
               text="Create new project"
            />
            <RoundButton icon="invite" text="Join" />
         </div>
      </div>
   );
}
