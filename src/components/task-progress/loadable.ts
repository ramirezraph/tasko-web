import { lazyLoad } from 'utils/loadable';

export const TaskProgress = lazyLoad(
   () => import('./index'),
   (module) => module.TaskProgress
);
