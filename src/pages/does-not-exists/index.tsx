import { useNavigate } from 'react-router-dom';

export function PageDoesNotExists() {
   const navigate = useNavigate();

   const goToHomePage = () => {
      navigate('/');
   };

   return (
      <div className="flex h-screen w-screen flex-col items-center justify-center space-y-2 text-center">
         <p>
            Oops! The page you are looking for <br /> doesn't exists
         </p>
         <button onClick={goToHomePage} className="text-primary">
            Go to home page
         </button>
      </div>
   );
}
