import { Bookmark } from './bookmark';

export class BookmarkList {
  bookmarks: Bookmark[];

  constructor(bookmarks?: Bookmark[]) {
    if (bookmarks) {
      this.bookmarks = bookmarks;
    } else {
      this.bookmarks = [];
    }
  }

  add(bookmark: Bookmark) {
    this.bookmarks.push(bookmark);
  }

  edit(bookmark: Bookmark, editedBookmark: Bookmark) {
    bookmark.edit(editedBookmark);
  }
}
