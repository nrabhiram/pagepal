import styles from './Message.module.css';
import { Button } from '../button/Button';

export const Message: React.FC<{
  heading: string;
  message: string;
  primaryCTAText: string;
  secondaryCTAText: string;
  primaryAction: () => void;
  secondaryAction: () => void;
}> = (props) => {
  return (
    <>
      <div className={styles['card']}>
        <div className={styles['info-container']}>
          <div className={styles['icon-container']}>
            <svg
              className={styles['delete-icon']}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
              />
            </svg>
          </div>
          <div className={styles['msg-container']}>
            <h3 className={styles['heading']}>{props.heading}</h3>
            <div className={styles['text-container']}>
              <p className={styles['text']}>{props.message}</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['cta-container']}>
        <Button level="primary" clickHandler={props.primaryAction} fullWidth={true}>
          {props.primaryCTAText}
        </Button>
        <div className={styles['spacer']}></div>
        <Button level="secondary" clickHandler={props.secondaryAction} fullWidth={true}>
          {props.secondaryCTAText}
        </Button>
      </div>
    </>
  );
};
