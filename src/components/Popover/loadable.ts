import { lazyLoad } from 'utils/loadable';

export const Popover = lazyLoad(
   () => import('./index'),
   (module) => module.Popover
);
