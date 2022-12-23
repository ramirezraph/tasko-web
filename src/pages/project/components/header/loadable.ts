import { lazyLoad } from 'utils/loadable';

export const ProjectHeaderBar = lazyLoad(
   () => import('./index'),
   (module) => module.ProjectHeaderBar
);
