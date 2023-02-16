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
  }

  edit(bookmark: Bookmark, editedBookmark: Bookmark) {
    bookmark.edit(editedBookmark);
  }
}
