import { Task, TaskStatus } from 'data/models';
import { ChevronDown } from 'tabler-icons-react';

interface TaskDetailsTitlebarProps {
   title: string;
   status: TaskStatus;
   setTask?: React.Dispatch<React.SetStateAction<Task>>;
}

export function TaskDetailsTitlebar(props: TaskDetailsTitlebarProps) {
   const { title, status, setTask } = props;

   const onTitleEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
      setTask?.((task) => ({
         ...task,
         title: e.target.value,
      }));
   };

   return (
      <div className="flex flex-nowrap items-start justify-between space-x-4">
         <input
            type="text"
            name="task-title"
            id="task-title"
            value={title}
            onChange={onTitleEdit}
            className="w-full flex-1 bg-transparent text-2xl text-primary focus:outline-none focus:outline-offset-4 focus:outline-primary"
         />
         <button className="flex items-center space-x-2 rounded-md bg-transparent p-2 text-sm font-semibold uppercase text-text/50 transition-colors duration-300 ease-in-out hover:bg-secondary hover:text-text">
            <p>{status}</p>
            <ChevronDown size={18} />
         </button>
      </div>
   );
}
