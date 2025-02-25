import { useEffect, useRef } from 'react';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
};

export function ModalDelete({ isOpen, onClose, onDelete }: Props) {
  const modalDialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (isOpen) {
      modalDialog.current?.showModal();
    } else {
      modalDialog.current?.close();
    }
  }, [isOpen]);

  return (
    <>
      <dialog ref={modalDialog} onClose={onClose}>
        <p>
          <strong>Are you sure you want to delete this entry?</strong>
        </p>
        <div className="modal-actions">
          <button type="button" className="cancel-modal" onClick={onClose}>
            CANCEL
          </button>
          <button type="button" className="confirm-modal" onClick={onDelete}>
            CONFIRM
          </button>
        </div>
      </dialog>
    </>
  );
}

//   import { ReactNode, useEffect, useRef } from 'react';
// type Props = {
//   children: ReactNode;
//   isOpen: boolean;
//   onClose: () => void;
// };
// export function Modal({ children, isOpen, onClose }: Props) {
//   const modal = useRef<HTMLDialogElement>(null);
//   useEffect(() => {
//     isOpen ? modal.current?.showModal() : modal.current?.close();
//   }, [isOpen]);
//   return (
//     <dialog ref={modal} onClose={onClose}>
//       {children}
//     </dialog>
//   );
// }
