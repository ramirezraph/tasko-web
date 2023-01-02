import { lazyLoad } from 'utils/loadable';

export const AddSubtaskButton = lazyLoad(
   () => import('./index'),
   (module) => module.AddSubtaskButton
);
