import { Subheading } from 'components/subheading/loadable';
import { Task } from 'data/models';

interface TaskDetailsDescriptionProps {
   description: string;
   setTask?: React.Dispatch<React.SetStateAction<Task>>;
}

export function TaskDetailsDescription(props: TaskDetailsDescriptionProps) {
   const { description, setTask } = props;

   const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setTask?.((task) => ({
         ...task,
         description: e.target.value,
      }));
   };

   return (
      <>
         <Subheading>Description</Subheading>
         <textarea
            value={description}
            onChange={onChange}
            name="task-description"
            id="task-description"
            className="mt-1 bg-transparent text-sm text-whitesmoke focus:outline-none focus:outline-offset-4 focus:outline-whitesmoke/30"
            placeholder="(none)"
            rows={3}
         />
      </>
   );
}
