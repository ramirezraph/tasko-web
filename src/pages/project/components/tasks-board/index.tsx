import { IssueContainer } from 'components/issue-container/loadable';

type IntrinsicDivProps = React.HTMLAttributes<HTMLDivElement>;

export function TasksBoard(props: IntrinsicDivProps) {
   const { className } = props;

   return (
      <div
         className={`"flex min-h-[500px] overflow-x-scroll xl:overflow-x-auto ${className}`}
      >
         <div className="flex h-full w-[1400px] snap-x space-x-4  2xl:w-full">
            <IssueContainer title="To Do" />
            <IssueContainer title="On Hold" />
            <IssueContainer title="In Progress" />
            <IssueContainer title="Review" />
            <IssueContainer title="Done" />
         </div>
      </div>
   );
}
