import { TaskStatus } from './enums/taskStatus';

export interface Column {
   id: string;
   projectId: string;
   title: TaskStatus;
   taskIds: Array<string>;
}
