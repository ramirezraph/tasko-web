import { lazyLoad } from 'utils/loadable';

export const ProjectStatus = lazyLoad(
   () => import('./index'),
   (module) => module.ProjectStatus
);
