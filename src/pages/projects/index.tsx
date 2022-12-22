import { Button } from 'components/button/loadable';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ProjectList } from './components/list/loadable';
import { NoProject } from './components/no-project/loadable';

export interface Project {
   title: string;
   description: string;
   dateCreated: string;
   lead: string;
   status: string;
   members: string[];
}

export function Projects() {
   let navigate = useNavigate();

   const [projects, setProjects] = useState<Project[]>([
      {
         title: 'Lorem Ipsum Project',
         description:
            'Nisl nunc mi ipsum faucibus vitae aliquet. Lectus quam id leo in vitae turpis massa sed elementum. ',
         dateCreated: '05/17/2022',
         lead: 'Raphael Ramirez',
         status: 'In Progress',
         members: ['Raphael Ramirez', 'Georg Guy', 'Donata Ana'],
      },
      {
         title: 'Capstone Project',
         description:
            'Nisl nunc mi ipsum faucibus vitae aliquet. Lectus quam id leo in vitae turpis massa sed elementum. ',
         dateCreated: '03/12/2022',
         lead: 'Raphael Ramirez',
         status: 'In Progress',
         members: ['Raphael Ramirez', 'Georg Guy', 'Donata Ana'],
      },
      {
         title: 'Tasko',
         description:
            'Nisl nunc mi ipsum faucibus vitae aliquet. Lectus quam id leo in vitae turpis massa sed elementum. ',
         dateCreated: '02/05/2022',
         lead: 'Raphael Ramirez',
         status: 'Completed',
         members: ['Raphael Ramirez', 'Georg Guy', 'Donata Ana'],
      },
   ]);

   const onCreateProject = () => {
      navigate('/projects/create');
   };

   return (
      <div className="flex h-full w-full flex-col items-center justify-center">
         {projects.length === 0 ? (
            <NoProject />
         ) : (
            <ProjectList projects={projects} />
         )}
         <div className="mt-16 flex space-x-3 ">
            <Button
               onClick={onCreateProject}
               icon="plus"
               text="Create new project"
            />
            <Button icon="invite" text="Join" />
         </div>
      </div>
   );
}
