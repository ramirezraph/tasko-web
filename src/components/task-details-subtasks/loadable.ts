import { lazyLoad } from 'utils/loadable';

export const TaskDetailsSubtasks = lazyLoad(
   () => import('./index'),
   (module) => module.TaskDetailsSubtasks
);
