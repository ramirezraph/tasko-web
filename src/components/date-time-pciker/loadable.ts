import { lazyLoad } from 'utils/loadable';

export const DateTimePicker = lazyLoad(
   () => import('./index'),
   (module) => module.DateTimePicker
);
