import { Droppable } from '@hello-pangea/dnd';
import { TaskCard } from 'components/task-card/loadable';
import { TasksContainerTitle } from 'components/tasks-container-title/loadable';
import { Task, TaskStatus } from 'data/models';

interface TasksContainerProps {
   id: string;
   title: string;
   taskIds: string[];
   tasks: Task[];
}

export function TasksContainer(props: TasksContainerProps) {
   const { id, title, taskIds, tasks } = props;

   return (
      <div className="flex w-96 flex-col space-y-2 rounded-lg bg-secondary/30 p-4 2xl:flex-1">
         <TasksContainerTitle>{title}</TasksContainerTitle>
         <Droppable droppableId={id}>
            {(provided) => (
               <div
                  className="h-full w-full"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
               >
                  {taskIds.map((taskId, index) => {
                     const task = tasks.find((t) => t.id === taskId);

                     if (!task) {
                        return null;
                     }

                     return (
                        <TaskCard key={task.id} index={index} task={task} />
                     );
                  })}
                  {provided.placeholder}
               </div>
            )}
         </Droppable>
      </div>
   );
}
