import { RenderedBookmark } from './controller';
import { Bookmark } from './models/bookmark';
import { BookmarkList } from './models/bookmarkList';
import { Label } from './models/label';
import { Link } from './models/link';

export class Renderer {
  label(label: Label) {
    return label.name;
  }

  link(link: Link) {
    return link.url;
  }

  bookmark(bookmark: Bookmark) {
    return {
      link: this.link(bookmark.link),
      label: this.label(bookmark.label),
      id: bookmark.id,
    };
  }

  bookmarkList(bookmarks: BookmarkList) {
    const renderedBookmarkArr: RenderedBookmark[] = [];
    for (let i = 0; i < bookmarks.bookmarks.length; i++) {
      const bookmark = this.bookmark(bookmarks.bookmarks[i]);
      renderedBookmarkArr.push(bookmark);
    }
    return renderedBookmarkArr;
  }
}
