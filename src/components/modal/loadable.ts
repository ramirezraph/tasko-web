import { lazyLoad } from 'utils/loadable';

export const Modal = lazyLoad(
   () => import('./index'),
   (module) => module.Modal
);
