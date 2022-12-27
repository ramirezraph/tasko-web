import { Avatar } from 'components/avatar/loadable';
import { UserProfile } from 'data/models';

interface Props {
   members: UserProfile[];
}

export function ProjectMembers(props: Props) {
   const { members } = props;

   const getInitials = (firstName: string, lastName: string) => {
      return firstName[0] + lastName[0];
   };

   return (
      <div className="flex -space-x-4">
         {members.map((member) => (
            <Avatar
               key={member.id}
               initials={getInitials(member.firstName, member.lastName)}
               className="p-1"
               backgroundColor={member.avatarColor}
            />
         ))}
      </div>
   );
}
