import { lazyLoad } from 'utils/loadable';

export const Icon = lazyLoad(
   () => import('./icon'),
   (module) => module.Icon
);
