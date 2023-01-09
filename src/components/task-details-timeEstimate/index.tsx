import { DateTimePicker } from 'components/date-time-pciker/loadable';
import { Subheading } from 'components/subheading/loadable';
import { Task } from 'data/models';

interface TaskDetailsTimeEstimateProps {
   timeEstimate: string;
   setTask?: React.Dispatch<React.SetStateAction<Task>>;
}

export function TaskDetailsTimeEstimate(props: TaskDetailsTimeEstimateProps) {
   const onDateSelect = (date: Date | null) => {
      if (!date) return;

      props.setTask?.((task) => ({
         ...task,
         timeEstimate: date.toISOString(),
      }));
   };

   return (
      <>
         <Subheading>Time Estimate</Subheading>
         <DateTimePicker
            value={new Date(props.timeEstimate)}
            onChange={onDateSelect}
         />
      </>
   );
}
