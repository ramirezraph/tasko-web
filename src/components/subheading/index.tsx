type IntrinsicPProps = React.HTMLAttributes<HTMLParagraphElement>;

export function Subheading(props: IntrinsicPProps) {
   const { className, children, ...rest } = props;
   return (
      <p className={`text-xs text-text/70 ${className}`} {...rest}>
         {children}
      </p>
   );
}
