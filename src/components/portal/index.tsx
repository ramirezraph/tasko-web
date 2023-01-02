import { useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
   children: React.ReactNode;
   wrapperId?: string;
}

export function Portal(props: PortalProps) {
   const { children, wrapperId = 'portal' } = props;

   const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(
      null
   );

   function createWrapperAndAppendToBody(wrapperId: string) {
      const wrapperElement = document.createElement('div');
      wrapperElement.setAttribute('id', wrapperId);
      document.body.appendChild(wrapperElement);
      return wrapperElement;
   }

   useLayoutEffect(() => {
      let element = document.getElementById(wrapperId);
      let systemCreated = false;

      if (!element) {
         systemCreated = true;
         element = createWrapperAndAppendToBody(wrapperId);
      }
      setWrapperElement(element);

      return () => {
         // delete the programatically created element
         if (systemCreated && element?.parentNode) {
            element.parentNode.removeChild(element);
         }
      };
   }, [wrapperId]);

   if (wrapperElement === null) return null;

   return createPortal(children, wrapperElement);
}
