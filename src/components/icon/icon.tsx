import { icons, IconTypes } from './icons';

type IntrinsicIconProps = React.DetailedHTMLProps<
   React.ImgHTMLAttributes<HTMLImageElement>,
   HTMLImageElement
>;

interface IconProps {
   icon: IconTypes;
}

export function Icon(props: IconProps & IntrinsicIconProps) {
   const { icon, ...rest } = props;

   return <img src={icons[icon]} {...rest} />;
}
