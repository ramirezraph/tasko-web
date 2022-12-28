import { TaskStatus } from './enums/taskStatus';

export class Task {
   id: string;
   projectId: string;
   title: string;
   description: string;
   dueDate: string;
   progressPercentage: number;
   status: TaskStatus;

   constructor(
      id: string,
      projectId: string,
      title: string,
      description: string,
      dueDate: string,
      progressPercentage: number,
      status: TaskStatus
   ) {
      this.id = id;
      this.projectId = projectId;
      this.title = title;
      this.description = description;
      this.dueDate = dueDate;
      this.progressPercentage = progressPercentage;
      this.status = status;
   }
}
