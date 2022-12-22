import { lazyLoad } from 'utils/loadable';

export const NoProject = lazyLoad(
   () => import('./index'),
   (module) => module.NoProject
);
