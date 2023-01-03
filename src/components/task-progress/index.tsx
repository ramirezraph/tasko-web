import { useMemo } from 'react';

type IntrinsicDivProps = React.HtmlHTMLAttributes<HTMLDivElement>;

interface TaskProgressProps {
   progressPercentage: number;
}

type Props = TaskProgressProps & IntrinsicDivProps;

export function TaskProgress(props: Props) {
   const { progressPercentage, className, ...rest } = props;

   const progressText = useMemo(() => {
      return `${progressPercentage}%`;
   }, [progressPercentage]);

   const progressWidth = useMemo(() => {
      return progressPercentage === 0 ? '2%' : `${progressPercentage}%`;
   }, [progressPercentage]);

   const progressColor = useMemo(() => {
      if (progressPercentage >= 0 && progressPercentage <= 10) {
         return '#FF6969';
      } else if (progressPercentage >= 11 && progressPercentage <= 29) {
         return '#FFB169';
      } else if (progressPercentage >= 30 && progressPercentage <= 49) {
         return '#FFF969';
      } else if (progressPercentage >= 50 && progressPercentage <= 74) {
         return '#69B7FF';
      } else if (progressPercentage >= 75 && progressPercentage <= 99) {
         return '#69FFD2';
      } else if (progressPercentage === 100) {
         return '#69FF8A';
      }
   }, [progressPercentage]);

   return (
      <div
         className={`flex items-center justify-between space-x-2 2xl:space-x-3 ${className}`}
         {...rest}
      >
         <div
            className="h-1"
            style={{
               width: progressWidth,
               backgroundColor: progressColor,
            }}
         />
         <span>{progressText}</span>
      </div>
   );
}
