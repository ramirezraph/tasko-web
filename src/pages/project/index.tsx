import { useState } from 'react';
import { ProjectFooterBar } from './components/footer/loadable';
import { ProjectHeaderBar } from './components/header/loadable';
import { TasksBoard } from './components/tasks-board/loadable';

export enum TaskStatus {
   TODO = 'to do',
   ON_HOLD = 'on hold',
   IN_PROGRESS = 'in progress',
   REVIEW = 'review',
   DONE = 'done',
}

export interface Task {
   title: string;
   description?: string;
   dueDate: string;
   progressPercentage: number;
   status: TaskStatus;
}

export function Project() {
   const [tasks, setTasks] = useState<Task[]>([
      {
         title: 'Sign Up Page UI',
         description:
            'Nisl nunc mi ipsum faucibus vitae aliquet. Lectus quam id leo in vitae turpis massa sed elementum.',
         dueDate: 'Wed, 12 Aug 2022',
         progressPercentage: 0,
         status: TaskStatus.TODO,
      },
      {
         title: 'Main Page UI',
         description:
            'Nisl nunc mi ipsum faucibus vitae aliquet. Lectus quam id leo in vitae turpis massa sed elementum.',
         dueDate: 'Tue, 18 Aug 2022',
         progressPercentage: 0,
         status: TaskStatus.TODO,
      },
      {
         title: 'Login Page UI',
         description:
            'Nisl nunc mi ipsum faucibus vitae aliquet. Lectus quam id leo in vitae turpis massa sed elementum.',
         dueDate: 'Wed, 5 Aug 2022',
         progressPercentage: 75,
         status: TaskStatus.IN_PROGRESS,
      },
      {
         title: 'Project Setup',
         description:
            'Nisl nunc mi ipsum faucibus vitae aliquet. Lectus quam id leo in vitae turpis massa sed elementum.',
         dueDate: 'Wed, 5 Aug 2022',
         progressPercentage: 100,
         status: TaskStatus.DONE,
      },
   ]);

   return (
      <div className="flex h-full w-full flex-col space-y-4">
         <ProjectHeaderBar className="mt-4" />
         <TasksBoard tasks={tasks} className="flex-1" />
         <ProjectFooterBar />
      </div>
   );
}
