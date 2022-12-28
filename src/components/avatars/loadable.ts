import { lazyLoad } from 'utils/loadable';

export const Avatars = lazyLoad(
   () => import('./index'),
   (module) => module.Avatars
);
