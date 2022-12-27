import { useEffect, useMemo, useState } from 'react';
import { ProjectFooterBar } from './components/footer/loadable';
import { ProjectHeaderBar } from './components/header/loadable';
import { TasksBoard } from './components/tasks-board/loadable';

import tasksJson from 'data/tasks.json';
import columnsJson from 'data/columns.json';
import { Column, Task, TaskStatus } from 'data/models';

export function Project() {
   const [columns, setColumns] = useState<Column[]>([]);
   const [tasks, setTasks] = useState<Task[]>([]);

   useEffect(() => {
      const parsedColumns: Column[] = columnsJson.map((column) => {
         return {
            ...column,
            title: column.title as TaskStatus,
         };
      });
      setColumns(parsedColumns);
   }, [columnsJson]);

   useEffect(() => {
      const parsedTasks: Task[] = tasksJson.map((task) => {
         return {
            ...task,
            status: task.status as TaskStatus,
         };
      });
      setTasks(parsedTasks);
   }, [tasksJson]);

   return (
      <div className="flex h-full w-full flex-col space-y-4">
         <ProjectHeaderBar className="mt-4" />
         <TasksBoard
            columns={columns}
            tasks={tasks}
            setColumns={setColumns}
            setTasks={setTasks}
            className="flex-1"
         />
         <ProjectFooterBar />
      </div>
   );
}
