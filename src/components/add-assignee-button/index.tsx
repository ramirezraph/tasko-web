import { Icon } from 'components/icon/loadable';

interface AddSubtaskButtonProps {}

export function AddAssigneeButton(props: AddSubtaskButtonProps) {
   const {} = props;
   return (
      <button className="flex items-center space-x-4">
         <Icon className="h-6 w-6" icon={'plus'} />
         <span className="text-xs font-light text-whitesmoke">
            Add assignee
         </span>
      </button>
   );
}
