import { lazyLoad } from 'utils/loadable';

export const TaskDetailsTimeEstimate = lazyLoad(
   () => import('./index'),
   (module) => module.TaskDetailsTimeEstimate
);
