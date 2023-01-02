import { IconTypes } from 'components/icon/icons';
import { Icon } from 'components/icon/loadable';

type IntrinsicButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

interface ActionIconProps {
   icon: IconTypes;
   onClick?: () => void;
   iconClassName?: string;
}

type Props = ActionIconProps & IntrinsicButtonProps;

export function ActionIcon(props: Props) {
   const { icon, onClick, className, iconClassName } = props;

   return (
      <button onClick={onClick} className={`group  ${className}`}>
         <Icon
            icon={icon}
            className={`transition-transform duration-300 ease-in-out group-hover:scale-110 ${iconClassName}`}
         />
      </button>
   );
}
