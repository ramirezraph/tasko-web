import { useState } from 'react';
import { usePopper } from 'react-popper';

import './arrow.css';

interface PopoverProps {
   isOpen: boolean;
   target: React.ReactNode;
   children: React.ReactNode;
}

export function Popover(props: PopoverProps) {
   const { target, children, isOpen } = props;

   const [referenceElement, setReferenceElement] =
      useState<HTMLDivElement | null>(null);
   const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
      null
   );
   const { styles, attributes } = usePopper(referenceElement, popperElement, {
      placement: 'bottom-start',
      modifiers: [
         {
            name: 'offset',
            options: {
               offset: [0, 8],
            },
         },
      ],
   });
   return (
      <div>
         <div ref={setReferenceElement} className="w-fit">
            {target}
         </div>

         {isOpen ? (
            <div
               id="popper"
               ref={setPopperElement}
               style={styles.popper}
               {...attributes.popper}
            >
               {children}
            </div>
         ) : null}
      </div>
   );
}
