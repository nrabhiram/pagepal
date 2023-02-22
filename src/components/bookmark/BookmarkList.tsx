import styles from './BookmarkList.module.css';
import { Bookmark } from './Bookmark';

export const BookmarkList = () => {
  return (
    <div className={styles['container']}>
      <div className="mx-1">
        <Bookmark />
        <Bookmark />
        <Bookmark />
        <Bookmark />
        <Bookmark />
        <Bookmark />
      </div>
    </div>
  );
};
