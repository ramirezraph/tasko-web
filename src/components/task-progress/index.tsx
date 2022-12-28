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
