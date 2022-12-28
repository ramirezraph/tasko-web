import { UserProfile } from 'data/models';
import { useMemo } from 'react';

type IntrinsicDivProps = React.HtmlHTMLAttributes<HTMLDivElement>;

interface AvatarProps {
   user: UserProfile;
   textClassName?: string;
   onAvatarClick?: (userId: string) => void;
}

type Props = AvatarProps & IntrinsicDivProps;

export function Avatar(props: Props) {
   const { user, className, textClassName, onAvatarClick, ...rest } = props;

   const { id, firstName, lastName, avatarColor } = user;

   const userInitials = useMemo(() => {
      return firstName.charAt(0) + lastName.charAt(0);
   }, [firstName, lastName]);

   const clickableAvatarClassName =
      'cursor-pointer hover:ring-1 hover:ring-whitesmoke transition-all duration-300 ease-in-out';

   return (
      <div
         onClick={() => onAvatarClick?.(id)}
         className={`flex h-10 w-10 items-center justify-center rounded-full bg-primary ${className} ${
            onAvatarClick ? clickableAvatarClassName : ''
         }`}
         style={{
            backgroundColor: avatarColor,
         }}
         {...rest}
      >
         <span className={`text-background ${textClassName}`}>
            {userInitials}
         </span>
      </div>
   );
}
