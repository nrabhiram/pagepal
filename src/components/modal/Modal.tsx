import styles from './Modal.module.css';

export const Modal: React.FC<React.PropsWithChildren<{ open: boolean; onClose: () => void }>> = (props) => {
  const closeModal = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).matches('#modal-content-overlay')) {
      props.onClose();
    }
  };
  return (
    <>
      {props.open && (
        <div className={styles['modal-container']} aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className={styles['overlay']}></div>
          <div className={styles['modal-content']}>
            <div
              className={styles['content-container']}
              id="modal-content-overlay"
              onClick={closeModal}
              onKeyDown={props.onClose}
              role="presentation"
            >
              <div className={styles['content-card']}>{props.children}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
