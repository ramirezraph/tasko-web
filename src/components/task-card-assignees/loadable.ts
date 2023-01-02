import { lazyLoad } from 'utils/loadable';

export const TaskAssignees = lazyLoad(
   () => import('./index'),
   (module) => module.TaskAssignees
);
