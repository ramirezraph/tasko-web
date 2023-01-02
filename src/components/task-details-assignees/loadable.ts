import { lazyLoad } from 'utils/loadable';

export const TaskDetailsAssignees = lazyLoad(
   () => import('./index'),
   (module) => module.TaskDetailsAssignees
);
