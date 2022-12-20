type IntrinsicDivProps = React.HTMLAttributes<HTMLDivElement>;

export function Page(props: IntrinsicDivProps) {
   const { children, className, ...rest } = props;

   return (
      <div
         className={`flex h-screen w-screen flex-col bg-background p-6 ${className}`}
         {...rest}
      >
         {children}
      </div>
   );
}
