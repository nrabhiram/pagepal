import styles from './Container.module.css';

export const Container: React.FC<React.PropsWithChildren> = (props) => {
  return <div className={styles['container']}>{props.children}</div>;
};
