import { Checkbox } from 'components/checkbox/loadable';

interface SubtaskProps {
   id: string;
   title: string;
   isDone: boolean;
}

export function Subtask(props: SubtaskProps) {
   const { id, title, isDone } = props;

   return (
      <Checkbox
         id={id}
         value={isDone}
         name={`subtask-${id}`}
         text={title}
         labelClassName="font-semibold text-xs"
      />
   );
}
