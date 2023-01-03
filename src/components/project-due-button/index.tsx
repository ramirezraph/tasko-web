import { CalendarTime } from 'tabler-icons-react';

interface ProjectDueButtonProps {
   due: string;
}

export function ProjectDueButton(props: ProjectDueButtonProps) {
   return (
      <button className="flex items-center space-x-3 rounded-md px-4 py-2 text-text/70 transition-colors duration-300 ease-in-out hover:bg-secondary hover:text-text">
         <CalendarTime size={22} />
         <span className="font-light">{props.due}</span>
      </button>
   );
}
