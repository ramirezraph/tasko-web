import { Draggable } from '@hello-pangea/dnd';
import { Avatar } from 'components/avatar/loadable';
import { Task } from 'data/models';
import { useMemo } from 'react';

interface TaskCardProps {
   index: number;
   task: Task;
}

export function TaskCard(props: TaskCardProps) {
   const { index, task } = props;

   const { id, title, dueDate, progressPercentage, status, description } = task;

   const progress = useMemo(() => {
      return `${progressPercentage}%`;
   }, [progressPercentage]);

   const progressWidth = useMemo(() => {
      return progressPercentage === 0 ? '2%' : `${progressPercentage}%`;
   }, [progressPercentage]);

   const progressColor = useMemo(() => {
      if (progressPercentage >= 0 && progressPercentage <= 25) {
         return '#FF6969';
      } else if (progressPercentage >= 26 && progressPercentage <= 50) {
         return '#FFCC69';
      } else if (progressPercentage >= 51 && progressPercentage <= 75) {
         return '#FCFF69';
      } else if (progressPercentage >= 76 && progressPercentage <= 99) {
         return '#B4FF69';
      } else if (progressPercentage === 100) {
         return '#69FF81';
      }
   }, [progressPercentage]);

   return (
      <Draggable draggableId={id} index={index}>
         {(provided, snapshot) => (
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
                  <div>
                     <Avatar
                        userId={''}
                        firstName={'Raphael'}
                        lastName={'Ramirez'}
                        color="bg-primary"
                        className="h-8 w-8"
                        textClassName="text-xs"
                     />
                  </div>
               </div>
               <div className="mt-7 flex items-center justify-between space-x-2 2xl:space-x-3">
                  <div
                     className="h-1"
                     style={{
                        width: progressWidth,
                        backgroundColor: progressColor,
                     }}
                  />
                  <span>{progress}</span>
               </div>
            </div>
         )}
      </Draggable>
   );
}
