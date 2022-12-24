import { TaskCard } from 'components/task-card/loadable';
import { Task } from 'pages/project';

interface TasksContainerProps {
   title: string;
   tasks: Array<Task>;
}

export function TasksContainer(props: TasksContainerProps) {
   const { title, tasks } = props;

   return (
      <div className="flex w-96 flex-col space-y-2 rounded-lg bg-secondary/30 p-4 2xl:flex-1">
         <span className="select-none text-xs font-light uppercase text-whitesmoke/40">
            {title}
         </span>
         {tasks.map((item, index) => (
            <TaskCard
               key={index}
               title={item.title}
               due={item.dueDate}
               progressPercentage={item.progressPercentage}
            />
         ))}
      </div>
   );
}
