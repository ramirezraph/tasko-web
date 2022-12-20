import { IconTypes } from 'components/icon/icons';
import { Icon } from 'components/icon/loadable';

type IntrinsicButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

interface ActionIconProps {
   icon: IconTypes;
   onPress?: () => void;
   iconClassName?: string;
}

type Props = ActionIconProps & IntrinsicButtonProps;

export function ActionIcon(props: Props) {
   const { icon, onPress, className, iconClassName } = props;

   return (
      <button onClick={onPress} className={`${className}`}>
         <Icon icon={icon} className={iconClassName} />
      </button>
   );
}
