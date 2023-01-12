import { useEffect, useRef, useState } from 'react';
import { usePopper } from 'react-popper';

import './arrow.css';

interface PopoverProps {
   isOpen: boolean;
   target: React.ReactNode;
   children: React.ReactNode;
   onClickOutside?: () => void;
}

export function Popover(props: PopoverProps) {
   const { target, children, isOpen, onClickOutside } = props;

   const [referenceElement, setReferenceElement] =
      useState<HTMLDivElement | null>(null);
   const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
      null
   );
   const popperWrapperRef = useRef<HTMLDivElement | null>(null);

   const { styles, attributes } = usePopper(referenceElement, popperElement, {
      placement: 'bottom-start',
      strategy: 'absolute',
      modifiers: [
         {
            name: 'offset',
            options: {
               offset: [0, 8],
            },
         },
      ],
   });

   useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event: MouseEvent) {
         if (!popperWrapperRef) return;

         const target = event.target as HTMLElement;

         if (
            popperWrapperRef.current &&
            !popperWrapperRef.current.contains(target)
         ) {
            onClickOutside?.();
         }
      }
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
         document.removeEventListener('mousedown', handleClickOutside);
      };
   }, [popperElement]);

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
               <div ref={popperWrapperRef}>{children}</div>
            </div>
         ) : null}
      </div>
   );
}
