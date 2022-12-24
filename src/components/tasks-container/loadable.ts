import { lazyLoad } from 'utils/loadable';

export const TasksContainer = lazyLoad(
   () => import('./index'),
   (module) => module.TasksContainer
);
