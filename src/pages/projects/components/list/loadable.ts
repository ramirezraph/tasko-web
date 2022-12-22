import { lazyLoad } from 'utils/loadable';

export const ProjectList = lazyLoad(
   () => import('./index'),
   (module) => module.ProjectList
);
