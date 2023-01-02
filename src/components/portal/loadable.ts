import { lazyLoad } from 'utils/loadable';

export const Portal = lazyLoad(
   () => import('./index'),
   (module) => module.Portal
);
