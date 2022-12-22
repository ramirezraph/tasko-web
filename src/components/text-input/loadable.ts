import { lazyLoad } from 'utils/loadable';

export const TextInput = lazyLoad(
   () => import('./index'),
   (module) => module.TextInput
);
