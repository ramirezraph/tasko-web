import { Avatar } from 'components/avatar/loadable';
import { UserProfile } from 'data/models';

interface Props {
   members: UserProfile[];
   onClick?: (memberId: string) => void;
}

export function ProjectMembers(props: Props) {
   const { members, onClick } = props;

   return (
      <div className="flex -space-x-4">
         {members.map((member) => (
            <Avatar
               onClick={(userId) => onClick?.(userId.toString())}
               key={member.id}
               userId={member.id}
               firstName={member.firstName}
               lastName={member.lastName}
               className="p-1"
               backgroundColor={member.avatarColor}
            />
         ))}
      </div>
   );
}
