import { Avatar } from 'components/avatar/loadable';
import { UserProfile } from 'data/models';

interface ItemStyles {
   className?: string;
   textClassName?: string;
}

interface AvatarsProps {
   users: UserProfile[];
   itemStyles?: ItemStyles;
   className?: string;

   onItemClick?: (userId: string) => void;
   selectedUsers?: UserProfile[];
}

type Props = AvatarsProps;

export function Avatars(props: Props) {
   const { users, itemStyles, className, onItemClick, selectedUsers } = props;

   return (
      <div className={`flex -space-x-4 ${className}`}>
         {users.map((member) => (
            <Avatar
               key={member.id}
               className={`p-1 ${itemStyles?.className}`}
               textClassName={itemStyles?.textClassName}
               user={member}
               onAvatarClick={onItemClick}
               isSelected={selectedUsers?.includes(member)}
            />
         ))}
      </div>
   );
}
