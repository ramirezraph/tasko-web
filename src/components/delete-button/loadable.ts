import { lazyLoad } from 'utils/loadable';

export const DeleteButton = lazyLoad(
   () => import('./index'),
   (module) => module.DeleteButton
);
