import { useMemo } from 'react';

type IntrinsicDivProps = React.HtmlHTMLAttributes<HTMLDivElement>;

type Hex = string;

interface AvatarProps {
   userId: string;
   firstName: string;
   lastName: string;
   textClassName?: string;
   backgroundColor?: Hex;
   onClick?: (userId: string) => void;
}

type Props = AvatarProps & IntrinsicDivProps;

export function Avatar(props: Props) {
   const {
      userId,
      firstName,
      lastName,
      className,
      textClassName,
      onClick,
      backgroundColor,
      ...rest
   } = props;

   const userInitials = useMemo(() => {
      return firstName.charAt(0) + lastName.charAt(0);
   }, [firstName, lastName]);

   const clickableAvatarClassName =
      'cursor-pointer hover:ring-1 hover:ring-whitesmoke transition-all duration-300 ease-in-out';

   return (
      <div
         onClick={() => onClick?.(userId)}
         className={`flex h-10 w-10 items-center justify-center rounded-full bg-primary ${className} ${
            onClick ? clickableAvatarClassName : ''
         }`}
         style={{
            backgroundColor: backgroundColor,
         }}
         {...rest}
      >
         <span className={`text-background ${textClassName}`}>
            {userInitials}
         </span>
      </div>
   );
}
