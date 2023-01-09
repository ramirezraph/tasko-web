import { lazyLoad } from 'utils/loadable';

export const AddSubtaskPopover = lazyLoad(
   () => import('./index'),
   (module) => module.AddSubtaskPopover
);
