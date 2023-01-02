import { lazyLoad } from 'utils/loadable';

export const TaskDetailsTitlebar = lazyLoad(
   () => import('./index'),
   (module) => module.TaskDetailsTitlebar
);
