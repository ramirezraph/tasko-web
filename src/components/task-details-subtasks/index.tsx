import { AddSubtaskPopover } from 'components/add-subtask-popover/loadable';
import { AddSubtaskButton } from 'components/add-subtasks-button/loadable';
import { Popover } from 'components/Popover/loadable';
import { Subheading } from 'components/subheading/loadable';
import { Subtask } from 'components/subtask/loadable';
import { Task, Subtask as ISubtask } from 'data/models';
import { useState } from 'react';

interface TaskDetailsSubtasksProps {
   subtasks: ISubtask[];
   setTask?: React.Dispatch<React.SetStateAction<Task>>;
}

export function TaskDetailsSubtasks(props: TaskDetailsSubtasksProps) {
   const { subtasks, setTask } = props;

   const [isOpen, setOpen] = useState(false);

   const onCreate = (newSubtask: ISubtask) => {
      setTask?.((task) => ({
         ...task,
         subtasks: [...task.subtasks, newSubtask],
      }));
      setOpen(false);
   };

   const onCancel = () => {
      setOpen(false);
   };

   return (
      <>
         <Subheading>Subtasks</Subheading>
         <div className="mt-4 flex flex-col space-y-6">
            {subtasks.length > 0 ? (
               subtasks.map((subtask, index) => (
                  <Subtask
                     id={`${index}-${subtask.title}`}
                     isDone={subtask.isDone}
                     key={index}
                     title={subtask.title}
                  />
               ))
            ) : (
               <span className="text-sm font-light italic">
                  No subtask for this task.
               </span>
            )}

            <Popover
               isOpen={isOpen}
               target={<AddSubtaskButton onClick={() => setOpen((v) => !v)} />}
               children={
                  <AddSubtaskPopover onCreate={onCreate} onCancel={onCancel} />
               }
            />
         </div>
      </>
   );
}
