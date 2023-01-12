import { lazyLoad } from 'utils/loadable';

export const AddAssigneePopover = lazyLoad(
   () => import('./index'),
   (module) => module.AddAssigneePopover
);
