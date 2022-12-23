import { lazyLoad } from 'utils/loadable';

export const TasksBoard = lazyLoad(
   () => import('./index'),
   (module) => module.TasksBoard
);
