import { RenderedBookmark, RenderedBookmarkList } from './controller';
import { Bookmark } from './models/bookmark';
import { BookmarkList } from './models/bookmarkList';
import { Label } from './models/label';
import { Link } from './models/link';

export class Parser {
  label(name: string) {
    return new Label(name);
  }

  link(url: string) {
    return new Link(url);
  }

  bookmark(bookmark: RenderedBookmark) {
    const link = this.link(bookmark.link);
    const label = this.label(bookmark.label);
    const id = bookmark.id;
    return new Bookmark(link, label, id);
  }

  bookmarkList(bookmarks: RenderedBookmarkList) {
    const bookmarkListArr: Bookmark[] = [];
    for (let i = 0; i < bookmarks.length; i++) {
      const bookmark = this.bookmark(bookmarks[i]);
      bookmarkListArr.push(bookmark);
    }
    return new BookmarkList(bookmarkListArr);
  }
}
