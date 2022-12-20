import { lazyLoad } from 'utils/loadable';

export const Page = lazyLoad(
   () => import('./index'),
   (module) => module.Page
);
