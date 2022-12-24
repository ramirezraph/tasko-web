import { lazyLoad } from 'utils/loadable';

export const TaskCard = lazyLoad(
   () => import('./index'),
   (module) => module.TaskCard
);
