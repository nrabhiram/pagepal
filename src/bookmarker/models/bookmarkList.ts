import { Bookmark } from './bookmark';
import { Label } from './label';
import { Link } from './link';

export class BookmarkList {
  bookmarks: Bookmark[];
  count: number;

  constructor(bookmarks?: Bookmark[]) {
    if (bookmarks) {
      this.bookmarks = bookmarks;
    } else {
      this.bookmarks = [];
    }
    this.count = 0;
  }

  add(link: Link, label: Label) {
    const bookmark = new Bookmark(link, label, this.count);
    this.bookmarks.push(bookmark);
    this.count++;
    return bookmark;
  }

  edit(bookmark: Bookmark, editedBookmark: Bookmark) {
    bookmark.edit(editedBookmark);
  }

  delete(bookmark: Bookmark) {
    const newBookmarks: Bookmark[] = [];
    for (let i = 0; i < this.bookmarks.length; i++) {
      if (!bookmark.equals(this.bookmarks[i])) {
        newBookmarks.push(this.bookmarks[i]);
      }
    }
    this.bookmarks = newBookmarks;
  }
}
