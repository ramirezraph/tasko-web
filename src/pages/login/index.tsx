import image from 'assets/images/undraw_engineering_team.png';

import { Link } from 'react-router-dom';
import { Page } from 'components/page/loadable';
import { Button } from 'components/button/loadable';

export function Login() {
   return (
      <Page className="flex flex-col items-center justify-center">
         <img src={image} />
         <h1 className="mt-6 text-3xl text-whitesmoke">
            Welcome to <span className="text-primary">Tasko</span>
         </h1>
         <p className="mt-3">Please login to continue.</p>

         <div className="mt-16 flex space-x-3">
            <Link to="/tasks">
               <Button text="Login" icon="login" />
            </Link>
            <Button text="Create an account" icon="userPlus" />
         </div>
      </Page>
   );
}
