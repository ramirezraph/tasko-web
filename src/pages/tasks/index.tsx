import { AppBar } from 'components/app-bar/loadable';
import { Page } from 'components/page/loadable';
import { NoProject } from './components/no-project/loadable';

export function Tasks() {
   return (
      <Page>
         <AppBar />
         <div className="flex h-full w-full flex-col items-center justify-center">
            <NoProject />
         </div>
      </Page>
   );
}
