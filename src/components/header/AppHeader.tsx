import { useContext, useState } from 'react';
import { Button } from '../button/Button';
import { SearchBar } from '../searchbar/SearchBar';
import styles from './AppHeader.module.css';
import { Modal } from '../modal/Modal';
import { BookmarkForm } from '../form/BookmarkForm';
import { BookmarkContext } from '../../context/bookmark-context';
import { SearchContext } from '../../context/search-context';

export const AppHeader = () => {
  const [adding, setAdding] = useState(false);
  const bookmarkContext = useContext(BookmarkContext);
  const searchContext = useContext(SearchContext);

  return (
    <>
      <Modal
        open={adding}
        onClose={() => {
          setAdding(false);
        }}
      >
        <BookmarkForm
          formHeading="Add a new bookmark"
          label=""
          link=""
          CTAText="Add"
          submitAction={(formData: { link: string; label: string }) => {
            bookmarkContext.addBookmark(formData.link, formData.label);
            setAdding(false);
          }}
        />
      </Modal>
      <div className={styles['header']}>
        <h1 className={styles['title']}>🔖pagepal</h1>
        <div className={styles['search-bar']}>
          <SearchBar query={searchContext.query} onQueryChanged={searchContext.updateQuery} />
        </div>
        <div className={styles['btn']}>
          <Button
            level="primary"
            clickHandler={() => {
              setAdding(true);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={styles['btn-icon']}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
              />
            </svg>
            <span className={styles['btn-text']}>Create Bookmark</span>
          </Button>
        </div>
      </div>
    </>
  );
};
