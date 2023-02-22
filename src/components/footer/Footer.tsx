import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles['footer']}>
      <span>
        Made by{' '}
        <a href="https://github.com/nrabhiram/pagepal" rel="noreferrer" target="_blank" className={styles['link']}>
          Abhiram Reddy
        </a>
      </span>
      <br />
      <span>With Vite, React, TypeScript, and Tailwind</span>
    </footer>
  );
};
