import { Bookmark } from './models/bookmark';
import { BookmarkList } from './models/bookmarkList';
import { Parser } from './parser';
import { Renderer } from './renderer';

export interface RenderedBookmark {
  link: string;
  label: string;
  id: number;
}

export type RenderedBookmarkList = RenderedBookmark[];

export class Controller {
  add(url: string, name: string) {
    const bookmarkList = this.bookmarks();
    const parser = new Parser();
    const link = parser.link(url);
    const label = parser.label(name);
    bookmarkList.add(link, label);
    this.write(bookmarkList);
  }

  edit(bookmark: RenderedBookmark, editedUrl: string, editedName: string) {
    const bookmarkList = this.bookmarks();
    const parser = new Parser();
    const originalBookmark = parser.bookmark(bookmark);
    const editedLink = parser.link(editedUrl);
    const editedLabel = parser.label(editedName);
    const editedBookmark = new Bookmark(editedLink, editedLabel);
    bookmarkList.edit(originalBookmark, editedBookmark);
    this.write(bookmarkList);
  }

  delete(bookmark: RenderedBookmark) {
    const bookmarkList = this.bookmarks();
    const parser = new Parser();
    const bookmarkToBeDeleted = parser.bookmark(bookmark);
    bookmarkList.delete(bookmarkToBeDeleted);
    this.write(bookmarkList);
  }

  bookmarks() {
    const JSONParsedBookmarks = JSON.parse(localStorage.getItem('bookmarks') as string);
    const parser = new Parser();
    let bookmarks: BookmarkList;
    if (JSONParsedBookmarks) {
      bookmarks = parser.bookmarkList(JSONParsedBookmarks);
    } else {
      bookmarks = new BookmarkList();
    }
    return bookmarks;
  }

  private write(bookmarks: BookmarkList) {
    const renderer = new Renderer();
    const renderedBookmarkList = renderer.bookmarkList(bookmarks);
    localStorage.setItem('bookmarks', JSON.stringify(renderedBookmarkList));
  }
}
