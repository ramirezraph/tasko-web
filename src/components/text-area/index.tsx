import { IconTypes } from 'components/icon/icons';
import { Icon } from 'components/icon/loadable';

type IntrinsicDivProps = React.HTMLAttributes<HTMLDivElement>;

interface TextAreaProps {
   icon?: IconTypes;
   placeholder?: string;
   rows?: number;
}

type Props = TextAreaProps & IntrinsicDivProps;

export function TextArea(props: Props) {
   const { icon, placeholder, rows, className, ...rest } = props;

   const DEFAULTS = {
      rows: 2,
   };

   return (
      <div
         className={`flex w-full items-start space-x-3 rounded-md bg-secondary p-4 ${className}`}
         {...rest}
      >
         {icon ? <Icon icon={icon} width={20} height={20} /> : null}
         <textarea
            placeholder={placeholder}
            className="h-full w-full bg-transparent text-base focus:outline-none"
            rows={rows ? rows : DEFAULTS.rows}
         />
      </div>
   );
}
