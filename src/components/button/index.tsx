import { IconTypes } from 'components/icon/icons';
import { Icon } from 'components/icon/loadable';
import { Link } from 'react-router-dom';
import './index.css';

type IntrinsicButtonProps = React.DetailedHTMLProps<
   React.ButtonHTMLAttributes<HTMLButtonElement>,
   HTMLButtonElement
>;

interface ButtonProps {
   icon?: IconTypes;
   text: string;
}

export function Button(props: ButtonProps & IntrinsicButtonProps) {
   const { icon, text, ...rest } = props;

   return (
      <button className="button" {...rest}>
         {icon ? <Icon icon={icon} className="mr-2" /> : null}
         <span className="button-text">{text}</span>
      </button>
   );
}
