export type TaskStatus =
   | 'to do'
   | 'on hold'
   | 'in progress'
   | 'review'
   | 'done';

export interface Subtask {
   title: string;
   isDone: boolean;
}

export interface Task {
   id: string;
   projectId: string;
   title: string;
   description: string;
   timeEstimate: string;
   progressPercentage: number;
   status: TaskStatus;
   assigneeIds: string[];
   subtasks: Subtask[];
}
