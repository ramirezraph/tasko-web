import { lazyLoad } from 'utils/loadable';

export const ActionIcon = lazyLoad(
   () => import('./index'),
   (module) => module.ActionIcon
);
