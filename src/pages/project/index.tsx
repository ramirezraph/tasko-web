import { useEffect, useMemo, useState } from 'react';
import { ProjectFooterBar } from './components/footer/loadable';
import { ProjectHeaderBar } from './components/header/loadable';
import { TasksBoard } from './components/tasks-board/loadable';
import { Column, Project as IProject, Task, TaskStatus } from 'data/models';
import { useParams } from 'react-router-dom';
import { PageDoesNotExists } from 'pages';

import columnsJson from 'data/columns.json';
import projectsJson from 'data/projects.json';
import tasksJson from 'data/tasks.json';

export function Project() {
   const { projectId } = useParams();

   const [columns, setColumns] = useState<Column[]>([]);
   const [tasks, setTasks] = useState<Task[]>([]);

   const project: IProject | undefined = useMemo(() => {
      return projectsJson.find((project) => project.id === projectId);
   }, [projectId]);

   useEffect(() => {
      if (!project) {
         return;
      }

      const parsedColumns: Column[] = columnsJson
         .filter((column) => column.projectId === project.id)
         .map((column) => {
            return Object.assign(column, {
               title: column.title as TaskStatus,
            });
         });
      setColumns(parsedColumns);
   }, [columnsJson, project]);

   useEffect(() => {
      if (!project) {
         return;
      }

      const parsedTasks: Task[] = tasksJson
         .filter((task) => task.projectId === project.id)
         .map((task) => {
            return Object.assign(task, {
               status: task.status as TaskStatus,
            });
         });

      setTasks(parsedTasks);
   }, [tasksJson, project]);

   if (!project) {
      return <PageDoesNotExists />;
   }

   return (
      <div className="flex h-full w-full flex-col space-y-4">
         <ProjectHeaderBar
            className="mt-4"
            projectTitle={project.title}
            projectDue={project.dateCreated}
            projectStatus={project.status}
         />
         <TasksBoard
            columns={columns}
            tasks={tasks}
            setColumns={setColumns}
            setTasks={setTasks}
            className="flex-1"
         />
         <ProjectFooterBar project={project} />
      </div>
   );
}
