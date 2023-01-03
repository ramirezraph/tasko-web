interface CheckboxProps {
   id: string;
   name: string;
   value: boolean;
   text?: string;
   className?: string;
   labelClassName?: string;
}

export function Checkbox(props: CheckboxProps) {
   const { id, name, value, text, className, labelClassName } = props;
   return (
      <div className="flex cursor-pointer items-center space-x-5">
         <input
            checked={value}
            type="checkbox"
            name={name}
            id={id}
            className={`form-checkbox h-5 w-5 cursor-pointer rounded-md border-2 border-whitesmoke/70 bg-transparent text-primary ring-0 checked:border-primary  checked:bg-transparent ${className}`}
            readOnly
         />
         {text ? (
            <label
               htmlFor={id}
               className={`cursor-pointer text-sm text-whitesmoke ${labelClassName}`}
            >
               {text}
            </label>
         ) : null}
      </div>
   );
}
