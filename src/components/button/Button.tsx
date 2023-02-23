import styles from './Button.module.css';

export const Button: React.FC<
  React.PropsWithChildren<{
    level: 'primary' | 'secondary' | 'tertiary';
    type?: 'submit';
    clickHandler?: () => void;
    fullWidth?: boolean;
  }>
> = (props) => {
  if (props.level === 'primary') {
    return (
      <button
        type={props.type}
        className={`${styles['primary']} ${props.fullWidth ? styles['full-width'] : ''}`}
        onClick={props.clickHandler}
        onKeyDown={props.clickHandler}
      >
        {props.children}
      </button>
    );
  } else if (props.level === 'secondary') {
    return (
      <div
        className={styles['outline']}
        onClick={props.clickHandler}
        onKeyDown={props.clickHandler}
        role="presentation"
      >
        <button type={props.type} className={`${styles['secondary']} ${props.fullWidth ? styles['full-width'] : ''}`}>
          {props.children}
        </button>
      </div>
    );
  } else {
    return (
      <div
        className={styles['outline']}
        onClick={props.clickHandler}
        onKeyDown={props.clickHandler}
        role="presentation"
      >
        <button type={props.type} className={styles['tertiary']}>
          {props.children}
        </button>
      </div>
    );
  }
};
