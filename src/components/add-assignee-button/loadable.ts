import { lazyLoad } from 'utils/loadable';

export const AddAssigneeButton = lazyLoad(
   () => import('./index'),
   (module) => module.AddAssigneeButton
);
