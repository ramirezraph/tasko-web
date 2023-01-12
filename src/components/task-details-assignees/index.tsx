import { AddAssigneeButton } from 'components/add-assignee-button/loadable';
import { Subheading } from 'components/subheading/loadable';
import { TaskAssignee } from 'components/task-assignee/loadable';
import { Task, UserProfile } from 'data/models';
import { useMemo, useState } from 'react';

import usersJson from 'data/users.json';
import { Popover } from 'components/popover/loadable';
import { AddAssigneePopover } from 'components/add-assignee-popover/loadable';
import { useProjectSlice } from 'pages/project/slice';

interface TaskDetailsAssigneesProps {
   assigneeIds: string[];
   setTask?: React.Dispatch<React.SetStateAction<Task>>;
}

export function TaskDetailsAssignees(props: TaskDetailsAssigneesProps) {
   const { assigneeIds, setTask } = props;

   const { slice } = useProjectSlice();

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

   const onMemberAvatarClick = (userId: string) => {
      if (assigneeIds.includes(userId)) {
         // Removes from selection
         const newAssigneeIds = assigneeIds.filter((id) => id !== userId);
         setTask?.((task) => ({
            ...task,
            assigneeIds: newAssigneeIds,
         }));
      } else {
         setTask?.((task) => ({
            ...task,
            assigneeIds: [...task.assigneeIds, userId],
         }));
      }
   };

   const onClose = () => {
      setOpen(false);
   };

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
               children={
                  <AddAssigneePopover
                     assigneeIds={assigneeIds}
                     onMemberAvatarClick={onMemberAvatarClick}
                  />
               }
               onClickOutside={onClose}
            />
         </div>
      </>
   );
}
