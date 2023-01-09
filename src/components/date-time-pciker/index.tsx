import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

import './index.css';
import { format } from 'date-fns';
import { Calendar } from 'tabler-icons-react';

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
      <div>
         <DatePicker
            selected={value}
            onChange={onChange}
            minDate={new Date()}
            showTimeSelect={!dateOnly}
            timeIntervals={15}
            showDisabledMonthNavigation
            customInput={
               <div className="flex items-center space-x-3 focus-within:outline-none focus-within:outline-offset-4 focus-within:outline-whitesmoke/30">
                  <input
                     type="text"
                     value={format(value, 'MMMM d, yyyy h:mm a')}
                     readOnly
                     className="w-full bg-transparent focus:outline-none"
                  />
                  <Calendar size={21} className="text-whitesmoke/70" />
               </div>
            }
            dateFormat="MMMM d, yyyy h:mm aa"
            placeholderText="(None)"
            calendarClassName="!bg-background"
            className="group mt-1 w-full bg-transparent text-sm text-whitesmoke focus:bg-red-500"
         />
      </div>
   );
}
