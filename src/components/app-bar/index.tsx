import { ActionIcon } from 'components/action-icon/loadable';
import { Avatar } from 'components/avatar/loadable';
import { Link } from 'react-router-dom';

function AvatarWithUserName() {
   return (
      <div className="flex items-center space-x-3">
         <Avatar />
         <span className="text-sm text-whitesmoke">Raphael Ramirez</span>
      </div>
   );
}

export function AppBar() {
   return (
      <div className="flex items-center justify-between">
         <Link to="/tasks">
            <span className="text-3xl font-semibold text-primary">Tasko</span>
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