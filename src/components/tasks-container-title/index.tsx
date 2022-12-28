interface TasksContainerTitleProps {
   children: React.ReactNode;
}

export function TasksContainerTitle(props: TasksContainerTitleProps) {
   return (
      <span className="select-none text-xs font-light uppercase text-whitesmoke/40">
         {props.children}
      </span>
   );
}
