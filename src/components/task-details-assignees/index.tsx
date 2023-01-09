import { AddAssigneeButton } from 'components/add-assignee-button/loadable';
import { Subheading } from 'components/subheading/loadable';
import { TaskAssignee } from 'components/task-assignee/loadable';
import { UserProfile } from 'data/models';
import { useMemo, useState } from 'react';

import usersJson from 'data/users.json';
import { Popover } from 'components/Popover/loadable';

interface TaskDetailsAssigneesProps {
   assigneeIds: string[];
}

export function TaskDetailsAssignees(props: TaskDetailsAssigneesProps) {
   const { assigneeIds } = props;

   const [isOpen, setOpen] = useState(false);

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
            {assignees.length > 0 ? (
               assignees.map((assignee) => (
                  <TaskAssignee key={assignee.id} assignee={assignee} />
               ))
            ) : (
               <span className="text-sm font-light italic">
                  No assignee for this task.
               </span>
            )}

            <Popover
               isOpen={isOpen}
               target={<AddAssigneeButton onClick={() => setOpen((v) => !v)} />}
               children={<div>Hello this is popover!</div>}
            />
         </div>
      </>
   );
}
