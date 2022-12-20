import { lazyLoad } from 'utils/loadable';

export const Avatar = lazyLoad(
   () => import('./index'),
   (module) => module.Avatar
);
