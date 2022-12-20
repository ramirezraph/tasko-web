type IntrinsicDivProps = React.HtmlHTMLAttributes<HTMLDivElement>;

interface AvatarProps {}

type Props = AvatarProps & IntrinsicDivProps;

export function Avatar(props: Props) {
   const {} = props;

   return (
      <div className="rounded-full bg-primary p-1.5">
         <span className="text-base text-background">RR</span>
      </div>
   );
}
