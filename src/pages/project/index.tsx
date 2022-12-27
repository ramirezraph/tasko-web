import { useState } from 'react';
import { ProjectFooterBar } from './components/footer/loadable';
import { ProjectHeaderBar } from './components/header/loadable';
import { TasksBoard } from './components/tasks-board/loadable';
import { v4 as uuidv4 } from 'uuid';

export enum TaskStatus {
   TODO = 'to do',
   ON_HOLD = 'on hold',
   IN_PROGRESS = 'in progress',
   REVIEW = 'review',
   DONE = 'done',
}

export interface Column {
   id: string;
   projectId: string;
   title: TaskStatus;
   taskIds: Array<string>;
}

export interface Task {
   id: string;
   title: string;
   description?: string;
   dueDate: string;
   progressPercentage: number;
   status: TaskStatus;
}

export function Project() {
   const [columns, setColumns] = useState([
      {
         id: '11f55020-b64a-4051-8595-5d7f0a547fd3',
         projectId: 'lorem-ipsum-project',
         title: TaskStatus.TODO,
         taskIds: [
            'e31ec348-9e2d-4bb0-943b-5e1aac919f74',
            'c18ca362-3868-4080-a910-7d3607d15c28',
         ],
      },
      {
         id: '99829ec6-969c-414d-a4bb-2e8b24af9e9f',
         projectId: 'lorem-ipsum-project',
         title: TaskStatus.ON_HOLD,
         taskIds: [],
      },
      {
         id: '9d61bf37-b364-41e3-982c-c83a468d26a7',
         projectId: 'lorem-ipsum-project',
         title: TaskStatus.IN_PROGRESS,
         taskIds: ['f560abd2-41dc-460a-9da1-cc4d5b213fc8'],
      },
      {
         id: '434b09ee-5f79-47b7-bd7c-5cded33b5b09',
         projectId: 'lorem-ipsum-project',
         title: TaskStatus.REVIEW,
         taskIds: [],
      },
      {
         id: 'dc197a2b-d1a1-4f9a-b743-2f23b8944297',
         projectId: 'lorem-ipsum-project',
         title: TaskStatus.DONE,
         taskIds: ['587111ab-2798-4ae5-abe7-907b8d9d9266'],
      },
   ]);

   const [tasks, setTasks] = useState<Task[]>([
      {
         id: 'e31ec348-9e2d-4bb0-943b-5e1aac919f74',
         title: 'Sign Up Page UI',
         description:
            'Nisl nunc mi ipsum faucibus vitae aliquet. Lectus quam id leo in vitae turpis massa sed elementum.',
         dueDate: 'Wed, 12 Aug 2022',
         progressPercentage: 0,
         status: TaskStatus.TODO,
      },
      {
         id: 'c18ca362-3868-4080-a910-7d3607d15c28',
         title: 'Main Page UI',
         description:
            'Nisl nunc mi ipsum faucibus vitae aliquet. Lectus quam id leo in vitae turpis massa sed elementum.',
         dueDate: 'Tue, 18 Aug 2022',
         progressPercentage: 0,
         status: TaskStatus.TODO,
      },
      {
         id: 'f560abd2-41dc-460a-9da1-cc4d5b213fc8',
         title: 'Login Page UI',
         description:
            'Nisl nunc mi ipsum faucibus vitae aliquet. Lectus quam id leo in vitae turpis massa sed elementum.',
         dueDate: 'Wed, 5 Aug 2022',
         progressPercentage: 75,
         status: TaskStatus.IN_PROGRESS,
      },
      {
         id: '587111ab-2798-4ae5-abe7-907b8d9d9266',
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
