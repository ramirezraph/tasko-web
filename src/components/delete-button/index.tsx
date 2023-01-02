import { Icon } from 'components/icon/loadable';

type IntrinsicButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

interface AddSubtaskButtonProps {
   text: string;
}

type Props = AddSubtaskButtonProps & IntrinsicButtonProps;

export function DeleteButton(props: Props) {
   const { text, className, onClick, ...rest } = props;
   return (
      <button
         onClick={onClick}
         className={`flex items-center space-x-4 ${className}`}
         {...rest}
      >
         <Icon className="h-6 w-6" icon={'trash'} />
         <span className="text-xs font-light text-error">{text}</span>
      </button>
   );
}
