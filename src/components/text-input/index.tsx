import { IconTypes } from 'components/icon/icons';
import { Icon } from 'components/icon/loadable';

type IntrinsicDivProps = React.HTMLAttributes<HTMLDivElement>;

interface TextInputProps {
   icon?: IconTypes;
   placeholder?: string;
}

type Props = TextInputProps & IntrinsicDivProps;

export function TextInput(props: Props) {
   const { icon, placeholder, className, ...rest } = props;
   return (
      <div
         className={`flex w-full items-center space-x-3 rounded-md bg-secondary p-4 ${className}`}
         {...rest}
      >
         {icon ? <Icon icon={icon} width={20} height={20} /> : null}
         <input
            type="text"
            placeholder={placeholder}
            className="h-full w-full bg-transparent text-base focus:outline-none"
         />
      </div>
   );
}
