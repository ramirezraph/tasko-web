import { AppBar } from 'components/app-bar/loadable';
import { Page } from 'components/page/loadable';
import { Outlet } from 'react-router-dom';

export function Main() {
   return (
      <Page>
         <AppBar />
         <Outlet />
      </Page>
   );
}
