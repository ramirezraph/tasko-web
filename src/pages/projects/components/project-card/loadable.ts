import { lazyLoad } from 'utils/loadable';

export const ProjectCard = lazyLoad(
   () => import('./index'),
   (module) => module.ProjectCard
);
