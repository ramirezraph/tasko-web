type IntrinsicDivProps = React.HtmlHTMLAttributes<HTMLDivElement>;

type Hex = string;

interface AvatarProps {
   initials: string;
   textClassName?: string;
   backgroundColor?: Hex;
}

type Props = AvatarProps & IntrinsicDivProps;

export function Avatar(props: Props) {
   const { initials, className, textClassName, backgroundColor } = props;

   return (
      <div
         className={`flex h-10 w-10 items-center justify-center rounded-full bg-primary ${className}`}
         style={{
            backgroundColor: backgroundColor,
         }}
      >
         <span className={`text-background ${textClassName}`}>{initials}</span>
      </div>
   );
}
