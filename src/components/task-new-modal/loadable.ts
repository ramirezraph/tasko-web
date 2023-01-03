import { lazyLoad } from 'utils/loadable';

export const TaskNewModal = lazyLoad(
   () => import('./index'),
   (module) => module.TaskNewModal
);
