import { lazyLoad } from 'utils/loadable';

export const Projects = lazyLoad(
   () => import('./index'),
   (module) => module.Projects
);
