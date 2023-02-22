import styles from './SearchBar.module.css';

export const SearchBar: React.FC<{ query: string; onQueryChanged: (query: string) => void }> = (props) => {
  return (
    <div className={styles['container']}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={styles['icon']}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
      <input
        type="text"
        value={props.query}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          props.onQueryChanged(e.target.value);
        }}
        className={styles['input']}
        placeholder="Search for a bookmark..."
      />
    </div>
  );
};
