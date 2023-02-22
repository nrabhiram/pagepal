import React, { useEffect, useState } from 'react';
import { RenderedBookmark, Controller } from '../bookmarker/controller';

export const BookmarkContext = React.createContext<{
  bookmarks: RenderedBookmark[];
  addBookmark: (url: string, name: string) => void;
  editBookmark: (bookmark: RenderedBookmark, editedUrl: string, editedName: string) => void;
  deleteBookmark: (bookmark: RenderedBookmark) => void;
}>({
  bookmarks: [],
  addBookmark: (url: string, name: string) => {},
  editBookmark: (bookmark: RenderedBookmark, editedUrl: string, editedName: string) => {},
  deleteBookmark: (bookmark: RenderedBookmark) => {},
});

export const BookmarkContextProvider: React.FC<React.PropsWithChildren> = (props) => {
  const [bookmarks, setBookmarks] = useState<RenderedBookmark[]>([]);

  useEffect(() => {
    const bookmarkAPI = new Controller();
    const bookmarks = bookmarkAPI.bookmarks();
    setBookmarks(bookmarks);
  }, []);

  const addBookmark = (url: string, name: string) => {
    const bookmarkAPI = new Controller();
    const newBookmark = bookmarkAPI.add(url, name);
    setBookmarks((prevBookmarks) => {
      return [...prevBookmarks, newBookmark];
    });
  };

  const editBookmark = (bookmark: RenderedBookmark, editedUrl: string, editedName: string) => {
    const bookmarkAPI = new Controller();
    bookmarkAPI.edit(bookmark, editedUrl, editedName);
    setBookmarks((prevBookmarks) => {
      const newBookmarks = prevBookmarks.map((prevBookmark) => {
        if (bookmark.id === prevBookmark.id) {
          return {
            link: editedUrl,
            label: editedName,
            id: bookmark.id,
          };
        } else {
          return prevBookmark;
        }
      });
      return newBookmarks;
    });
  };

  const deleteBookmark = (bookmark: RenderedBookmark) => {
    const bookmarkAPI = new Controller();
    bookmarkAPI.delete(bookmark);
    setBookmarks((prevBookmarks) => {
      const newBookmarks = prevBookmarks.filter((prevBookmark) => {
        return prevBookmark.id !== bookmark.id;
      });
      return newBookmarks;
    });
  };

  return (
    <BookmarkContext.Provider
      value={{
        bookmarks: bookmarks,
        addBookmark: addBookmark,
        editBookmark: editBookmark,
        deleteBookmark: deleteBookmark,
      }}
    >
      {props.children}
    </BookmarkContext.Provider>
  );
};
