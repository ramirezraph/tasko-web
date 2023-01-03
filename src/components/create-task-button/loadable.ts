import { lazyLoad } from 'utils/loadable';

export const CreateTaskButton = lazyLoad(
   () => import('./index'),
   (module) => module.CreateTaskButton
);
