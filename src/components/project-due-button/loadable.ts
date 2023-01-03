import { lazyLoad } from 'utils/loadable';

export const ProjectDueButton = lazyLoad(
   () => import('./index'),
   (module) => module.ProjectDueButton
);
