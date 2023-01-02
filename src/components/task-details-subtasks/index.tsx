import { AddSubtaskButton } from 'components/add-subtasks-button/loadable';
import { Subheading } from 'components/subheading/loadable';
import { Subtask } from 'components/subtask/loadable';
import { Subtask as ISubtask } from 'data/models/task';

interface TaskDetailsSubtasksProps {
   subtasks: ISubtask[];
}

export function TaskDetailsSubtasks(props: TaskDetailsSubtasksProps) {
   const { subtasks } = props;

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

            <AddSubtaskButton />
         </div>
      </>
   );
}
