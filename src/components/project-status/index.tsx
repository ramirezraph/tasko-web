import { useMemo } from 'react';

interface ProjectStatusProps {
   status: string;
   textClassName?: string;
}

export function ProjectStatus(props: ProjectStatusProps) {
   const { status, textClassName } = props;

   const statusColor = useMemo(() => {
      switch (status) {
         case 'completed':
            return '#69FFA5';
         default:
            return '#FFD369';
      }
   }, [status]);

   return (
      <div className="flex items-center space-x-2">
         <div
            className="h-2 w-2"
            style={{
               backgroundColor: statusColor,
            }}
         ></div>
         <span className={`capitalize ${textClassName}`}>{status}</span>
      </div>
   );
}
