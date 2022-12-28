import { Avatar } from 'components/avatar/loadable';
import { Button } from 'components/button/loadable';
import { ProjectMembers } from 'components/project-members/loadable';
import { Project, UserProfile } from 'data/models';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import usersJson from 'data/users.json';

interface ProjectFooterBarProps {
   project: Project;
}

export function ProjectFooterBar(props: ProjectFooterBarProps) {
   const navigate = useNavigate();

   const { project } = props;

   const { title, memberIds } = project;

   const goToProjectList = () => {
      navigate('/');
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

   const onButtonHoverClassNames =
      'transition-colors duration-300 ease-in-out hover:text-whitesmoke/80';

   return (
      <div className="flex justify-between">
         <div className="flex items-center space-x-4">
            <ProjectMembers
               members={members}
               onClick={(memberIds) => console.log(memberIds)}
            />
            <button className={onButtonHoverClassNames}>Clear filters</button>
         </div>
         <div className="flex items-center space-x-4">
            <button
               onClick={goToProjectList}
               className={onButtonHoverClassNames}
            >
               Go to project list
            </button>
            <Button icon="boxList" text={title} />
         </div>
      </div>
   );
}
