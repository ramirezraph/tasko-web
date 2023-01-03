import { ActionIcon } from 'components/action-icon/loadable';
import { ProjectStatus } from 'components/project-status/loadable';
import { CalendarTime } from 'tabler-icons-react';

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

   return (
      <div
         className={`flex items-center justify-between ${className}`}
         {...rest}
      >
         <div className="flex flex-col">
            <span className="text-xs font-light text-text">Tasks Board</span>
            <span className="text-2xl text-primary">{projectTitle}</span>
         </div>
         <div className="flex h-full items-center space-x-3">
            <button className="flex items-center space-x-3 rounded-md px-4 py-2 text-text/70 transition-colors duration-300 ease-in-out hover:bg-secondary hover:text-text">
               <CalendarTime size={22} />
               <span className="font-light">{projectDue}</span>
            </button>
            <button className="group rounded-md px-4 py-2 text-text/70 transition-colors duration-300 ease-in-out hover:bg-secondary hover:text-text">
               <ProjectStatus status={projectStatus} />
            </button>
            <ActionIcon icon="usersGear" />
         </div>
      </div>
   );
}
