import { Column, Task, UserProfile } from 'data/models';

export interface ProjectState {
   projectId: string;
   projectTitle: string;
   projectMembers: UserProfile[];

   columns: Column[];
   tasks: Task[];
}
