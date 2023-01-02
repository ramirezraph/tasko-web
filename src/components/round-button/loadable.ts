import { lazyLoad } from 'utils/loadable';

export const RoundButton = lazyLoad(
   () => import('./index'),
   (module) => module.RoundButton
);
