import { TasksContainer } from 'components/tasks-container/loadable';
import { Column, Task, TaskStatus } from 'pages/project';
import {
   DragDropContext,
   DropResult,
   ResponderProvided,
} from '@hello-pangea/dnd';

type IntrinsicDivProps = React.HTMLAttributes<HTMLDivElement>;

type Props = {
   columns: Column[];
   setColumns: React.Dispatch<React.SetStateAction<Column[]>>;
   tasks: Task[];
   setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
} & IntrinsicDivProps;

export function TasksBoard(props: Props) {
   const { columns, tasks, className, setColumns, setTasks } = props;

   const onDragEnd = (result: DropResult, provided: ResponderProvided) => {
      const { source, destination, draggableId } = result;

      if (!destination) return;

      if (
         destination.droppableId === source.droppableId &&
         destination.index === source.index
      ) {
         return;
      }

      removeTaskIdFromSource(source.droppableId, source.index);

      insertTaskIdFromDestination(
         destination.droppableId,
         destination.index,
         draggableId
      );
   };

   const removeTaskIdFromSource = (sourceId: string, sourceIndex: number) => {
      const sourceColumn = columns.find((c) => c.id === sourceId);
      if (!sourceColumn) return;

      const sourceTaskIds = sourceColumn.taskIds;
      sourceTaskIds.splice(sourceIndex, 1);

      setColumns((currentColumns) =>
         currentColumns.map((column) => {
            if (column.id === sourceId) {
               return { ...column, taskIds: sourceTaskIds };
            }

            return column;
         })
      );
   };

   const insertTaskIdFromDestination = (
      destinationId: string,
      destinationIndex: number,
      taskId: string
   ) => {
      const destinationColumn = columns.find((c) => c.id === destinationId);
      if (!destinationColumn) return;

      const destinationTaskIds = destinationColumn.taskIds;
      destinationTaskIds.splice(destinationIndex, 0, taskId);

      setColumns((currentColumns) =>
         currentColumns.map((column) => {
            if (column.id === destinationId) {
               return { ...column, taskIds: destinationTaskIds };
            }

            return column;
         })
      );

      updateTaskStatus(taskId, destinationColumn.title);
   };

   const updateTaskStatus = (taskId: string, newStatus: TaskStatus) => {
      setTasks((currentTasks) =>
         currentTasks.map((task) => {
            if (task.id === taskId) {
               return { ...task, status: newStatus };
            }

            return task;
         })
      );
   };

   return (
      <DragDropContext onDragEnd={onDragEnd}>
         <div
            className={`"flex min-h-[500px] overflow-x-scroll xl:overflow-x-auto ${className}`}
         >
            <div className="flex h-full w-[1400px] snap-x space-x-4  2xl:w-full">
               {columns.map((column) => (
                  <TasksContainer
                     key={column.id}
                     id={column.id}
                     taskIds={column.taskIds}
                     tasks={tasks}
                     title={column.title}
                  />
               ))}
            </div>
         </div>
      </DragDropContext>
   );
}
