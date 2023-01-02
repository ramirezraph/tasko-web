import { ActionIcon } from 'components/action-icon/loadable';
import { ProjectStatus } from 'components/project-status/loadable';

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
         <div className="flex h-full items-center space-x-4 ">
            <span className="text-xs font-light">Due: {projectDue}</span>
            <button className="rounded-md bg-secondary px-4 py-2">
               <ProjectStatus
                  status={projectStatus}
                  textClassName="text-whitesmoke"
               />
            </button>
            <ActionIcon icon="usersGear" />
         </div>
      </div>
   );
}
