import { useMemo } from 'react';
import { Avatars } from 'components/avatars/loadable';
import { UserProfile } from 'data/models';
import usersJson from 'data/users.json';

interface TaskAssigneesProps {
   assigneeIds: string[];
}

export function TaskAssignees(props: TaskAssigneesProps) {
   const { assigneeIds } = props;

   const assignees: UserProfile[] = useMemo(() => {
      return usersJson
         .filter((user) => assigneeIds.includes(user.id))
         .map((user) => {
            return {
               id: user.id,
               firstName: user.firstName,
               middleName: user.middleName,
               lastName: user.lastName,
               avatarColor: user.avatarColor,
            };
         });
   }, [usersJson, assigneeIds]);

   return (
      <Avatars
         users={assignees}
         itemStyles={{
            className: 'h-8 w-8',
            textClassName: 'text-xs',
         }}
      />
   );
}
