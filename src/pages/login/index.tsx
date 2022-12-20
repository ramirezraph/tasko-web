import { Button } from 'components/button/loadable';

import image from 'assets/images/undraw_engineering_team.png';

import './index.css';
import { Link } from 'react-router-dom';

export function Login() {
   return (
      <div className="page">
         <img src={image} />
         <h1 className="welcome-text">
            Welcome to <span className="text-primary">Tasko</span>
         </h1>
         <p className="mt-3">Please login to continue.</p>

         <div className="buttons">
            <Link to="/tasks">
               <Button text="Login" icon="login" />
            </Link>
            <Button text="Create an account" icon="userPlus" />
         </div>
      </div>
   );
}
