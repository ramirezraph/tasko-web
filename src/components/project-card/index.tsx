import { Icon } from 'components/icon/loadable';
import { ProjectMembers } from 'components/project-members/loadable';
import { ProjectStatus } from 'components/project-status/loadable';
import { Project, UserProfile } from 'data/models';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import usersJson from 'data/users.json';

interface ProjectCardProps {
   project: Project;
   onClick?: () => void;
}

export function ProjectCard(props: ProjectCardProps) {
   const { project } = props;

   const { title, dateCreated, status, memberIds } = project;

   const navigate = useNavigate();

   const onCardClicked = () => {
      navigate(project.id);
   };

   const members: UserProfile[] = useMemo(() => {
      return usersJson
         .filter((user) => memberIds.includes(user.id))
         .map((user) => {
            return {
               id: user.id,
               firstName: user.firstName,
               middleName: user.middleName,
               lastName: user.lastName,
               avatarColor: user.avatarColor,
            };
         });
   }, [usersJson, memberIds]);

   return (
      <button
         onClick={onCardClicked}
         className="rounded-md p-4 transition-colors duration-300 ease-in-out hover:bg-[#272D36]"
      >
         <div className="flex justify-between">
            <h2 className="text-xl font-semibold text-primary">{title}</h2>
            <Icon icon="arrowRight" />
         </div>
         <div className="mt-4 flex items-center justify-between">
            <ProjectMembers members={members} />
            <div className="flex space-x-6">
               <span className="hidden md:inline">{dateCreated}</span>
               <ProjectStatus status={status} />
            </div>
         </div>
      </button>
   );
}
