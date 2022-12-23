import { lazyLoad } from 'utils/loadable';

export const IssueContainer = lazyLoad(
   () => import('./index'),
   (module) => module.IssueContainer
);
