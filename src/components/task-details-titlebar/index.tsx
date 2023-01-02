import { TaskStatus } from 'data/models';
import { ChevronDown } from 'tabler-icons-react';

interface TaskDetailsTitlebarProps {
   title: string;
   status: TaskStatus;
}

export function TaskDetailsTitlebar(props: TaskDetailsTitlebarProps) {
   return (
      <div className="flex items-start justify-between space-x-4">
         <h1 className="flex-1 text-2xl text-primary">{props.title}</h1>
         <button className="flex items-center space-x-2 rounded-md bg-transparent p-2 text-sm font-semibold uppercase text-text/50 transition-colors duration-300 ease-in-out hover:bg-secondary hover:text-text">
            <span>{props.status}</span>
            <ChevronDown size={18} />
         </button>
      </div>
   );
}
