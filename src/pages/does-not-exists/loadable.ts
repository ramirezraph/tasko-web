import { lazyLoad } from 'utils/loadable';

export const PageDoesNotExists = lazyLoad(
   () => import('./index'),
   (module) => module.PageDoesNotExists
);
