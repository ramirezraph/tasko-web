import { lazyLoad } from 'utils/loadable';

export const SideModal = lazyLoad(
   () => import('./index'),
   (module) => module.SideModal
);
