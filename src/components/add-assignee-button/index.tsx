import { Icon } from 'components/icon/loadable';

interface AddSubtaskButtonProps {
   onClick?: () => void;
}

export function AddAssigneeButton(props: AddSubtaskButtonProps) {
   return (
      <button onClick={props.onClick} className="flex items-center space-x-4">
         <Icon className="h-6 w-6" icon={'plus'} />
         <span className="text-xs font-light text-whitesmoke">
            Add assignee
         </span>
      </button>
   );
}
