import { TaskStatus } from './enums/taskStatus';

export interface Task {
   id: string;
   projectId: string;
   title: string;
   description: string;
   dueDate: string;
   progressPercentage: number;
   status: TaskStatus;
   assigneeIds: string[];
}
