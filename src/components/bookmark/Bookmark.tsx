import { useState } from 'react';
import styles from './Bookmark.module.css';
import { Modal } from '../modal/Modal';
import { Button } from '../button/Button';
import { BookmarkForm } from '../form/BookmarkForm';
import { Message } from '../message/Message';
import { Spacer } from '../spacer/Spacer';

export const Bookmark = () => {
  const [editing, setEditing] = useState(false);
  const [deleting, setDeleting] = useState(false);

  const editBookmark = (formData: { link: string; label: string }) => {
    setEditing(false);
  };

  const deleteBookmark = () => {
    setDeleting(false);
  };

  const removeDeleteBookmarkMessage = () => {
    setDeleting(false);
  };

  return (
    <>
      {editing && (
        <Modal
          open={editing}
          onClose={() => {
            setEditing(false);
          }}
        >
          <div className={styles['delete-msg-card']}>
            <BookmarkForm
              formHeading="Edit the bookmark"
              label="Bookmark Label State"
              link="Bookmark Link State"
              CTAText="Edit"
              submitAction={editBookmark}
            />
          </div>
        </Modal>
      )}
      <Modal open={deleting} onClose={removeDeleteBookmarkMessage}>
        <Message
          heading="Delete Bookmark"
          message="Are you sure you want to delete this bookmark? Its data will be permanently removed. This action cannot be undone."
          primaryCTAText="Delete"
          secondaryCTAText="Cancel"
          primaryAction={deleteBookmark}
          secondaryAction={removeDeleteBookmarkMessage}
        />
      </Modal>
      <div className={styles['card']}>
        <div className={styles['content']}>
          <div>
            <h2 className={styles['label']}>Bookmark Label</h2>
            <a className={styles['url']} href="https://github.com" rel="noreferrer" target="_blank">
              https://github.com
            </a>
          </div>
          <Spacer />
          <div className={styles['btn-container']}>
            <Button
              level="tertiary"
              clickHandler={() => {
                setEditing(true);
              }}
            >
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
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                />
              </svg>
            </Button>
            <div className={styles['btn-spacer']}></div>
            <Button
              level="tertiary"
              clickHandler={() => {
                setDeleting(true);
              }}
            >
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
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
