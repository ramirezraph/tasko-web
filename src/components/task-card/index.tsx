import { Avatar } from 'components/avatar/loadable';
import { useEffect, useMemo } from 'react';

interface TaskCardProps {
   title: string;
   due: string;
   progressPercentage: number;
}

export function TaskCard(props: TaskCardProps) {
   const { title, due, progressPercentage } = props;

   const progress = useMemo(() => {
      return `${progressPercentage}%`;
   }, [progressPercentage]);

   const progressWidth = useMemo(() => {
      return progressPercentage === 0 ? '2%' : `${progressPercentage}%`;
   }, [progressPercentage]);

   const progressColor = useMemo(() => {
      if (progressPercentage >= 0 && progressPercentage <= 25) {
         return '#FF6969';
      } else if (progressPercentage >= 26 && progressPercentage <= 50) {
         return '#FFCC69';
      } else if (progressPercentage >= 51 && progressPercentage <= 75) {
         return '#FCFF69';
      } else if (progressPercentage >= 76 && progressPercentage <= 99) {
         return '#B4FF69';
      } else if (progressPercentage === 100) {
         return '#69FF81';
      }
   }, [progressPercentage]);

   return (
      <div className="rounded-md bg-background p-4">
         <div className="flex items-start justify-between">
            <div className="flex flex-col space-y-1">
               <p className="text-sm text-primary">{title}</p>
               <p className="text-xs text-text">{due}</p>
            </div>
            <div>
               <Avatar
                  initials={'RR'}
                  color="bg-primary"
                  className="h-8 w-8"
                  textClassName="text-xs"
               />
            </div>
         </div>
         <div className="mt-7 flex items-center justify-between space-x-2 2xl:space-x-3">
            <div
               className="h-1"
               style={{
                  width: progressWidth,
                  backgroundColor: progressColor,
               }}
            />
            <span>{progress}</span>
         </div>
      </div>
   );
}
