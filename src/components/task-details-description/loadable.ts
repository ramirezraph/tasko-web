import { lazyLoad } from 'utils/loadable';

export const TaskDetailsDescription = lazyLoad(
   () => import('./index'),
   (module) => module.TaskDetailsDescription
);
