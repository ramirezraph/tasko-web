import { TasksContainer } from 'components/tasks-container/loadable';
import { Task, TaskStatus } from 'pages/project';
import { useMemo } from 'react';

type IntrinsicDivProps = React.HTMLAttributes<HTMLDivElement>;

type Props = {
   tasks: Array<Task>;
} & IntrinsicDivProps;

export function TasksBoard(props: Props) {
   const { tasks, className } = props;

   const onTodos = useMemo(() => {
      return tasks.filter((t) => t.status === TaskStatus.TODO);
   }, [tasks]);

   const onHolds = useMemo(() => {
      return tasks.filter((t) => t.status === TaskStatus.ON_HOLD);
   }, [tasks]);

   const OnInProgress = useMemo(() => {
      return tasks.filter((t) => t.status === TaskStatus.IN_PROGRESS);
   }, [tasks]);

   const onReviews = useMemo(() => {
      return tasks.filter((t) => t.status === TaskStatus.REVIEW);
   }, [tasks]);

   const onDones = useMemo(() => {
      return tasks.filter((t) => t.status === TaskStatus.DONE);
   }, [tasks]);

   return (
      <div
         className={`"flex min-h-[500px] overflow-x-scroll xl:overflow-x-auto ${className}`}
      >
         <div className="flex h-full w-[1400px] snap-x space-x-4  2xl:w-full">
            <TasksContainer tasks={onTodos} title="To Do" />
            <TasksContainer tasks={onHolds} title="On Hold" />
            <TasksContainer tasks={OnInProgress} title="In Progress" />
            <TasksContainer tasks={onReviews} title="Review" />
            <TasksContainer tasks={onDones} title="Done" />
         </div>
      </div>
   );
}
