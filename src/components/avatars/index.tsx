import { Avatar } from 'components/avatar/loadable';
import { UserProfile } from 'data/models';

interface AvatarsProps {
   users: UserProfile[];
   onItemClick?: (userId: string) => void;
}

type Props = AvatarsProps;

export function Avatars(props: Props) {
   const { users, onItemClick } = props;

   return (
      <div className="flex -space-x-4">
         {users.map((member) => (
            <Avatar
               key={member.id}
               className="p-1"
               user={member}
               onAvatarClick={onItemClick}
            />
         ))}
      </div>
   );
}
