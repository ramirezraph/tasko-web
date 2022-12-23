interface IssueContainerProps {
   title: string;
}

export function IssueContainer(props: IssueContainerProps) {
   const { title } = props;

   return (
      <div className="flex w-96 flex-col space-y-2 rounded-lg bg-secondary/30 p-4 2xl:flex-1">
         <span className="select-none text-xs font-light uppercase text-whitesmoke/40">
            {title}
         </span>
      </div>
   );
}
