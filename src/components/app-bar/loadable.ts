import { lazyLoad } from 'utils/loadable';

export const AppBar = lazyLoad(
   () => import('./index'),
   (module) => module.AppBar
);
