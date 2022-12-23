interface ProjectStatusProps {
   status: string;
   textClassName?: string;
}

export function ProjectStatus(props: ProjectStatusProps) {
   const { status, textClassName } = props;
   return (
      <div className="flex items-center space-x-2">
         <div className="h-2 w-2 bg-primary"></div>
         <span className={textClassName}>{status}</span>
      </div>
   );
}
