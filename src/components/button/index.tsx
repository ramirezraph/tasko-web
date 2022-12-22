import { IconTypes } from 'components/icon/icons';
import { Icon } from 'components/icon/loadable';

type IntrinsicButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

interface ButtonProps {
   icon?: IconTypes;
   text: string;
   textClassName?: string;
}

export function Button(props: ButtonProps & IntrinsicButtonProps) {
   const { icon, text, className, textClassName, ...rest } = props;

   return (
      <button
         className={`flex flex-row items-center rounded-full bg-secondary px-4 py-3 text-sm transition-colors duration-300 ease-in-out hover:bg-[#41464e] ${className}`}
         {...rest}
      >
         {icon ? <Icon icon={icon} className="mr-2" /> : null}
         <span className={`w-full text-base text-whitesmoke ${textClassName}`}>
            {text}
         </span>
      </button>
   );
}
