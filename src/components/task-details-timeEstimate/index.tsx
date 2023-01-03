import { DateTimePicker } from 'components/date-time-pciker/loadable';
import { Subheading } from 'components/subheading/loadable';

interface TaskDetailsTimeEstimateProps {
   timeEstimate: string;
}

export function TaskDetailsTimeEstimate(props: TaskDetailsTimeEstimateProps) {
   return (
      <>
         <Subheading>Time Estimate</Subheading>
         <DateTimePicker
            value={new Date(props.timeEstimate)}
            onChange={(date) => console.log(date?.toISOString())}
         />
      </>
   );
}
