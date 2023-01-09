import { Subheading } from 'components/subheading/loadable';
import { Subtask } from 'data/models';
import { FormEvent, useState } from 'react';

interface AddSubtaskPopoverProps {
   onCreate: (subtask: Subtask) => void;
   onCancel: () => void;
}

export function AddSubtaskPopover(props: AddSubtaskPopoverProps) {
   const [title, setTitle] = useState('');

   const onSubmitCreate = (e: FormEvent) => {
      e.preventDefault();

      const newSubtask: Subtask = {
         title: title,
         isDone: false,
      };

      props.onCreate?.(newSubtask);
   };

   return (
      <div className="flex w-[350px] flex-col rounded-md bg-secondary p-4 shadow-md">
         <Subheading>Add new subtask</Subheading>
         <form action="" onSubmit={onSubmitCreate}>
            <input
               value={title}
               onChange={(e) => setTitle(e.target.value)}
               type="text"
               className="mt-3 w-full border-b-[1px] border-text/50 bg-transparent pb-1 text-sm text-whitesmoke focus:outline-none"
            />
            <div className="mt-3 flex space-x-2 text-sm">
               <button
                  type="submit"
                  className="rounded-md bg-primary py-1 px-10 text-background transition-colors duration-300 ease-in-out disabled:bg-primary/30"
                  disabled={title.trim().length < 3}
               >
                  Create
               </button>
               <button
                  type="reset"
                  onClick={props.onCancel}
                  className="rounded-md py-1 px-3"
               >
                  Cancel
               </button>
            </div>
         </form>
      </div>
   );
}
