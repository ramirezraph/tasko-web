import { lazyLoad } from 'utils/loadable';

export const AddTaskButton = lazyLoad(
   () => import('./index'),
   (module) => module.AddTaskButton
);
