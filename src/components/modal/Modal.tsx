import { useRef } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

export const Modal: React.FC<React.PropsWithChildren<{ open: boolean; onClose: () => void }>> = (props) => {
  const modalOverlayRef = useRef<HTMLDivElement>(null);

  const closeModal = (e: React.MouseEvent) => {
    if (e.target === modalOverlayRef.current) {
      props.onClose();
    }
  };

  return (
    <>
      {props.open &&
        createPortal(
          <div className={styles['modal-container']} aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div className={styles['overlay']}></div>
            <div className={styles['modal-content']}>
              <div
                className={styles['content-container']}
                ref={modalOverlayRef}
                onClick={closeModal}
                role="presentation"
              >
                <div className={styles['content-card']}>{props.children}</div>
              </div>
            </div>
          </div>,
          document.getElementById('modal') as Element,
        )}
    </>
  );
};
