import { Avatars } from 'components/avatars/loadable';
import { Subheading } from 'components/subheading/loadable';
import { UserProfile } from 'data/models';
import { useProjectSlice } from 'pages/project/slice';
import { useEffect, useMemo, useState } from 'react';

interface AddAssigneePopoverProps {
   assigneeIds: string[];
   onMemberAvatarClick?: (userId: string) => void;
}

export function AddAssigneePopover(props: AddAssigneePopoverProps) {
   const { assigneeIds, onMemberAvatarClick } = props;

   const { slice } = useProjectSlice();

   const selection: UserProfile[] = useMemo(() => {
      return slice.projectMembers.filter((member) =>
         assigneeIds.includes(member.id)
      );
   }, [slice.projectMembers, assigneeIds]);

   return (
      <div className="flex w-[350px] flex-col justify-start space-y-4 rounded-md bg-secondary p-4 shadow-md">
         <Subheading>Select to assign</Subheading>

         <Avatars
            users={slice.projectMembers}
            onItemClick={onMemberAvatarClick}
            className="!-space-x-2"
            selectedUsers={selection}
         />
      </div>
   );
}
