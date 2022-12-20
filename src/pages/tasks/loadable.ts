import { lazyLoad } from 'utils/loadable';

export const Tasks = lazyLoad(
   () => import('./index'),
   (module) => module.Tasks
);
