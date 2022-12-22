import { lazyLoad } from 'utils/loadable';

export const TextArea = lazyLoad(
   () => import('./index'),
   (module) => module.TextArea
);
