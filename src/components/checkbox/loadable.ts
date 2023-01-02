import { lazyLoad } from 'utils/loadable';

export const Checkbox = lazyLoad(
   () => import('./index'),
   (module) => module.Checkbox
);
