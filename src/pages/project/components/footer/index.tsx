import { RoundButton } from 'components/round-button/loadable';
import { ProjectMembers } from 'components/project-members/loadable';
import { useNavigate } from 'react-router-dom';
import { useProjectSlice } from 'pages/project/slice';

interface ProjectFooterBarProps {
   projectTitle: string;
}

export function ProjectFooterBar(props: ProjectFooterBarProps) {
   const navigate = useNavigate();

   const { projectTitle } = props;

   const { slice } = useProjectSlice();

   const goToProjectList = () => {
      navigate('/');
   };

   const onButtonHoverClassNames =
      'transition-colors duration-300 ease-in-out hover:text-whitesmoke/80';

   return (
      <div className="flex justify-between">
         <div className="flex items-center space-x-4">
            <ProjectMembers
               members={slice.projectMembers}
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
            <RoundButton icon="boxList" text={projectTitle} />
         </div>
      </div>
   );
}
