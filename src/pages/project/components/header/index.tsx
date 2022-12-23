import { ActionIcon } from 'components/action-icon/loadable';
import { Button } from 'components/button/loadable';
import { ProjectStatus } from 'components/project-status/loadable';

type IntrinsicDivProps = React.HTMLAttributes<HTMLDivElement>;

export function ProjectHeaderBar(props: IntrinsicDivProps) {
   const { className, ...rest } = props;

   return (
      <div
         className={`flex items-center justify-between ${className}`}
         {...rest}
      >
         <div className="flex flex-col">
            <span className="text-xs font-light text-text">Tasks Board</span>
            <span className="text-2xl text-primary">Lorem Ipsum Project</span>
         </div>
         <div className="flex h-full items-center space-x-4 ">
            <span className="text-xs font-light">Due: December 23, 2022</span>
            <button className="rounded-md bg-secondary px-4 py-2">
               <ProjectStatus
                  status={'In Progress'}
                  textClassName="text-whitesmoke"
               />
            </button>
            <ActionIcon icon="usersGear" />
         </div>
      </div>
   );
}
