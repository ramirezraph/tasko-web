import { lazyLoad } from 'utils/loadable';

export const Subtask = lazyLoad(
   () => import('./index'),
   (module) => module.Subtask
);
