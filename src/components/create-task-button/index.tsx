import { RoundButton } from 'components/round-button/loadable';

interface CreateTaskButtonProps {
   onClick?: () => void;
}

export function CreateTaskButton(props: CreateTaskButtonProps) {
   return (
      <RoundButton
         onClick={props.onClick}
         className="!bg-primary hover:!bg-[#FFDA81]"
         textClassName="text-background"
         text={'Submit & Create'}
      />
   );
}
