import { ActionIcon } from 'components/action-icon/loadable';
import { Avatar } from 'components/avatar/loadable';
import { Link } from 'react-router-dom';

function AvatarWithUserName() {
   return (
      <div className="flex items-center space-x-3">
         <Avatar initials={'RR'} backgroundColor="#FFD369" />
         <span className="hidden text-sm text-whitesmoke sm:inline">
            Raphael Ramirez
         </span>
      </div>
   );
}

export function AppBar() {
   return (
      <div className="flex items-center justify-between">
         <Link
            to="/"
            className="transition-color text-3xl font-semibold  text-primary duration-300 ease-in-out hover:text-[#FFDA81]"
         >
            Tasko
         </Link>
         <div className="flex space-x-6">
            <AvatarWithUserName />
            <ActionIcon icon="magnify" onPress={() => console.log('Search.')} />
            <ActionIcon
               icon="bell"
               onPress={() => console.log('Notification.')}
            />
         </div>
      </div>
   );
}
