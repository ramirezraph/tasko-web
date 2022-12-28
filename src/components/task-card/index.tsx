import { Draggable } from '@hello-pangea/dnd';
import { TaskAssignees } from 'components/task-assignees/loadable';
import { TaskProgress } from 'components/task-progress/loadable';
import { Task } from 'data/models';

interface TaskCardProps {
   index: number;
   task: Task;
}

export function TaskCard(props: TaskCardProps) {
   const { index, task } = props;

   const { id, title, dueDate, progressPercentage, assigneeIds } = task;

   return (
      <Draggable draggableId={id} index={index}>
         {(provided) => (
            <div
               className="mb-2 rounded-md bg-background p-4 hover:bg-background/70"
               ref={provided.innerRef}
               {...provided.draggableProps}
               {...provided.dragHandleProps}
               onClick={() => console.log('Task Clicked', task)}
            >
               <div className="flex items-start justify-between">
                  <div className="flex flex-col space-y-1">
                     <p className="text-sm text-primary">{title}</p>
                     <p className="text-xs text-text">{dueDate}</p>
                  </div>
                  <TaskAssignees assigneeIds={assigneeIds} />
               </div>
               <TaskProgress
                  progressPercentage={progressPercentage}
                  className="mt-7"
               />
            </div>
         )}
      </Draggable>
   );
}
