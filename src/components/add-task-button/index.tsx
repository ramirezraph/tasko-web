import { Plus } from 'tabler-icons-react';

interface AddTaskButtonProps {
   onClick?: () => void;
}

export function AddTaskButton(props: AddTaskButtonProps) {
   return (
      <button
         onClick={props.onClick}
         className="flex space-x-2 rounded-md p-2 text-text transition-colors duration-300 ease-in-out hover:bg-primary hover:text-background"
      >
         <Plus size={24} />
         <span>Add new task</span>
      </button>
   );
}
