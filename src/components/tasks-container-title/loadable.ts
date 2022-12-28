import { lazyLoad } from 'utils/loadable';

export const TasksContainerTitle = lazyLoad(
   () => import('./index'),
   (module) => module.TasksContainerTitle
);
