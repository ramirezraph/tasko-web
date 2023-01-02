import { lazyLoad } from 'utils/loadable';

export const Subheading = lazyLoad(
   () => import('./index'),
   (module) => module.Subheading
);
