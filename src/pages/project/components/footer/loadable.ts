import { lazyLoad } from 'utils/loadable';

export const ProjectFooterBar = lazyLoad(
   () => import('./index'),
   (module) => module.ProjectFooterBar
);
