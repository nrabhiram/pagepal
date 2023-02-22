import styles from './BookmarkList.module.css';
import { Bookmark } from './Bookmark';
import { BookmarkContext } from '../../context/bookmark-context';
import { useContext } from 'react';
import { SearchContext } from '../../context/search-context';

export const BookmarkList = () => {
  const bookmarkContext = useContext(BookmarkContext);
  const searchContext = useContext(SearchContext);

  const bookmarks = bookmarkContext.bookmarks.filter((bookmark) => {
    return bookmark.label.includes(searchContext.query) || bookmark.link.includes(searchContext.query);
  });

  return (
    <div className={styles['container']}>
      <div className="mx-1">
        {bookmarks.length === 0 && (
          <div className="mx-auto text-center text-cyan-600 text-sm">Oops...no bookmarks exist!</div>
        )}
        {bookmarks.map((bookmark) => (
          <Bookmark
            bookmark={bookmark}
            editHandler={bookmarkContext.editBookmark}
            deleteHandler={bookmarkContext.deleteBookmark}
            key={bookmark.id}
          />
        ))}
      </div>
    </div>
  );
};
