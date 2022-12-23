import { Avatar } from 'components/avatar/loadable';
import { Button } from 'components/button/loadable';
import { useNavigate } from 'react-router-dom';

export function ProjectFooterBar() {
   const navigate = useNavigate();

   const goToProjectList = () => {
      navigate('/');
   };

   return (
      <div className="flex justify-between">
         <div className="flex items-center space-x-4">
            <div className="flex -space-x-2">
               <Avatar
                  initials="GG"
                  className="p-1"
                  backgroundColor="#6CFF69"
               />
               <Avatar
                  initials="RR"
                  className="p-1"
                  backgroundColor="#FFD369"
               />
               <Avatar
                  initials="DA"
                  className="p-1"
                  backgroundColor="#698AFF"
               />
               <Avatar initials="+" className="p-1" backgroundColor="#FAFAFA" />
            </div>
            <button>Clear filters</button>
         </div>
         <div className="flex items-center space-x-4">
            <button onClick={goToProjectList}>Go to projects list</button>
            <Button icon="boxList" text="Lorem Ipsum Project" />
         </div>
      </div>
   );
}
