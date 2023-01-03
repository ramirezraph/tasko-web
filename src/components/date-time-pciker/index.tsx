import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

import './index.css';

interface DateTimePickerProps {
   value?: Date;
   onChange: (
      date: Date | null,
      event: React.SyntheticEvent<any, Event> | undefined
   ) => void;
   dateOnly?: boolean;
}

export function DateTimePicker(props: DateTimePickerProps) {
   const { value = new Date(), onChange, dateOnly } = props;

   return (
      <DatePicker
         selected={value}
         onChange={onChange}
         minDate={new Date()}
         showTimeSelect={!dateOnly}
         timeIntervals={15}
         showDisabledMonthNavigation
         dateFormat="MMMM d, yyyy h:mm aa"
         placeholderText="(None)"
         calendarClassName="!bg-background"
         className="mt-1 bg-transparent text-sm text-whitesmoke focus:outline-none focus:outline-offset-4 focus:outline-whitesmoke/30"
      />
   );
}
