import { lazyLoad } from 'utils/loadable';

export const TaskAssignee = lazyLoad(
   () => import('./index'),
   (module) => module.TaskAssignee
);
