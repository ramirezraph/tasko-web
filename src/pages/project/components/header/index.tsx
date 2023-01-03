import { ActionIcon } from 'components/action-icon/loadable';
import { AddTaskButton } from 'components/add-task-button/loadable';
import { ProjectDueButton } from 'components/project-due-button/loadable';
import { ProjectStatus } from 'components/project-status/loadable';
import { useLocation, useNavigate } from 'react-router-dom';
import { CalendarTime, Plus } from 'tabler-icons-react';

type IntrinsicDivProps = React.HTMLAttributes<HTMLDivElement>;

interface ProjectHeaderBarProps {
   projectTitle: string;
   projectDue: string;
   projectStatus: string;
}

type Props = ProjectHeaderBarProps & IntrinsicDivProps;

export function ProjectHeaderBar(props: Props) {
   const { projectTitle, projectDue, projectStatus, className, ...rest } =
      props;

   const navigate = useNavigate();
   const location = useLocation();
   const onAddTaskButtonClicked = () => {
      navigate(
         {
            pathname: `/task/new`,
         },
         {
            state: {
               backgroundLocation: location,
            },
         }
      );
   };

   return (
      <div
         className={`flex items-center justify-between ${className}`}
         {...rest}
      >
         <div className="flex items-end space-x-4">
            <div className="flex flex-col">
               <span className="text-xs font-light text-text">Tasks Board</span>
               <span className="text-2xl text-primary">{projectTitle}</span>
            </div>
            <AddTaskButton onClick={onAddTaskButtonClicked} />
         </div>
         <div className="flex h-full items-center space-x-3">
            <ProjectDueButton due={projectDue} />
            <button className="group rounded-md px-4 py-2 text-text/70 transition-colors duration-300 ease-in-out hover:bg-secondary hover:text-text">
               <ProjectStatus status={projectStatus} />
            </button>
            <ActionIcon icon="usersGear" />
         </div>
      </div>
   );
}
