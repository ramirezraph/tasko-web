import { Draggable } from '@hello-pangea/dnd';
import { TaskAssignees } from 'components/task-card-assignees/loadable';
import { TaskProgress } from 'components/task-progress/loadable';
import { Task } from 'data/models';
import format from 'date-fns/format';
import { useLocation, useNavigate } from 'react-router-dom';

interface TaskCardProps {
   index: number;
   task: Task;
}

export function TaskCard(props: TaskCardProps) {
   const { index, task } = props;

   const location = useLocation();
   const navigate = useNavigate();

   const {
      id,
      title,
      timeEstimate,
      progressPercentage,
      assigneeIds,
      subtasks,
   } = task;

   const onCardClick = () => {
      navigate(
         {
            pathname: `/task/${task.id}`,
         },
         {
            state: {
               backgroundLocation: location,
            },
         }
      );
   };

   return (
      <Draggable draggableId={id} index={index}>
         {(provided) => (
            <div
               className="mb-2 rounded-md bg-background p-4 hover:bg-background/70"
               ref={provided.innerRef}
               {...provided.draggableProps}
               {...provided.dragHandleProps}
               onClick={onCardClick}
            >
               <div className="flex items-start justify-between">
                  <div className="flex flex-col space-y-1">
                     <p className="text-sm text-primary">{title}</p>
                     <p className="text-xs text-text">
                        {format(new Date(timeEstimate), 'eee, d MMM yyyy')}
                     </p>
                  </div>
                  <TaskAssignees assigneeIds={assigneeIds} />
               </div>
               {subtasks.length > 0 ? (
                  <TaskProgress
                     progressPercentage={progressPercentage}
                     className="mt-7"
                  />
               ) : null}
            </div>
         )}
      </Draggable>
   );
}
