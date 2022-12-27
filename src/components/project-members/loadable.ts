import { lazyLoad } from 'utils/loadable';

export const ProjectMembers = lazyLoad(
   () => import('./index'),
   (module) => module.ProjectMembers
);
