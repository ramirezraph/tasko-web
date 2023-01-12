import { ActionIcon } from 'components/action-icon/loadable';
import { useEffect } from 'react';

type IntrinsicDivProps = React.HTMLAttributes<HTMLDivElement>;

interface ModalProps {
   visible: boolean;
   onClose: () => void;
   closeOnClickOutside?: boolean;
}

type Props = ModalProps & IntrinsicDivProps;

export function SideModal(props: Props) {
   const {
      visible,
      closeOnClickOutside = true,
      onClose,
      className,
      children,
      ...rest
   } = props;

   if (!visible) {
      return null;
   }

   const onModalClose = () => {
      onClose();
   };

   const onClickOutside = () => {
      if (!closeOnClickOutside) return;

      onModalClose();
   };

   useEffect(() => {
      const closeOnEscapeKey = (e: KeyboardEvent) => {
         e.key === 'Escape' ? onModalClose() : null;
      };
      document.body.addEventListener('keydown', closeOnEscapeKey);
      return () => {
         document.body.removeEventListener('keydown', closeOnEscapeKey);
      };
   }, [onClose]);

   return (
      <div className="fixed top-0 left-0 z-[900] flex h-screen w-screen">
         <div className="flex-1 bg-black/30" onClick={onClickOutside}></div>
         <div
            className={`z-[999] flex max-h-full w-[400px] flex-col space-y-4 overflow-y-auto bg-background/80 py-12 px-8 ring-1 ring-primary/10 backdrop-blur-[2px] ${className}`}
            {...rest}
         >
            {children}
            <ActionIcon
               className="absolute top-4 -left-[41px] h-10 w-10 bg-primary/10 p-2"
               icon={'doubleArrowRight'}
               onClick={onModalClose}
            />
         </div>
      </div>
   );
}
