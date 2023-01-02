import { AddAssigneeButton } from 'components/add-assignee-button/loadable';
import { Subheading } from 'components/subheading/loadable';
import { TaskAssignee } from 'components/task-assignee/loadable';
import { UserProfile } from 'data/models';
import { useMemo } from 'react';

import usersJson from 'data/users.json';

interface TaskDetailsAssigneesProps {
   assigneeIds: string[];
}

export function TaskDetailsAssignees(props: TaskDetailsAssigneesProps) {
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
      <>
         <Subheading>Assignee/s</Subheading>
         <div className="mt-4 flex flex-col space-y-6">
            {assignees.map((assignee) => (
               <TaskAssignee key={assignee.id} assignee={assignee} />
            ))}
            <AddAssigneeButton />
         </div>
      </>
   );
}
