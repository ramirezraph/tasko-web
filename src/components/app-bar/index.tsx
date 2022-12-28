import { ActionIcon } from 'components/action-icon/loadable';
import { Avatar } from 'components/avatar/loadable';
import { Link } from 'react-router-dom';

function AvatarWithUserName() {
   return (
      <div className="flex items-center space-x-3">
         <Avatar
            user={{
               id: '35ea8588-7ce8-4d79-83bd-130173a97012',
               firstName: 'Raphael',
               middleName: 'Legaspi',
               lastName: 'Ramirez',
               avatarColor: '#FFD369',
            }}
            onAvatarClick={(userId) => {
               console.log(userId);
            }}
         />
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
