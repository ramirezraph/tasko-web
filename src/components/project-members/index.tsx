import { Avatar } from 'components/avatar/loadable';
import { Avatars } from 'components/avatars/loadable';
import { UserProfile } from 'data/models';

interface Props {
   members: UserProfile[];
   onClick?: (memberId: string) => void;
}

export function ProjectMembers(props: Props) {
   const { members, onClick } = props;

   return (
      <div className="flex -space-x-4">
         <Avatars
            users={members}
            onItemClick={(userId) => {
               console.log(userId);
            }}
         />
      </div>
   );
}
