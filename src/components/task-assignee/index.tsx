import { Avatar } from 'components/avatar/loadable';
import { UserProfile } from 'data/models';

interface TaskAssigneeProps {
   assignee: UserProfile;
}

export function TaskAssignee(props: TaskAssigneeProps) {
   const { assignee } = props;

   return (
      <div className="flex items-center space-x-4 text-whitesmoke">
         <Avatar user={assignee} className="h-8 w-8" textClassName="text-xs" />
         <span className="text-xs font-semibold">
            {assignee.firstName} {assignee.lastName}
         </span>
      </div>
   );
}
