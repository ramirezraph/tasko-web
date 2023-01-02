import { lazyLoad } from 'utils/loadable';

export const TaskDetailsModal = lazyLoad(
   () => import('./index'),
   (module) => module.TaskDetailsModal
);
