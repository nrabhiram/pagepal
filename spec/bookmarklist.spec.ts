import { describe, expect, it } from 'vitest';
import { BookmarkList } from '../src/bookmarker/models/bookmarkList';
import { Bookmark } from '../src/bookmarker/models/bookmark';
import { Link } from '../src/bookmarker/models/link';
import { Label } from '../src/bookmarker/models/label';

describe('Bookmark List', () => {
  it('A bookmark list with 0 bookmarks, upon adding a new bookmark, has 1 bookmark', () => {
    const bookmarkList = new BookmarkList();
    const bookmark = new Bookmark(new Link('https://test.com/'), new Label('Label'));
    bookmarkList.add(bookmark);
    expect(bookmarkList.bookmarks.length).toBe(1);
  });

  it('A bookmark list with 1 bookmark, upon adding a new bookmark, has it as the 2nd one in the list', () => {
    const bookmarkList = new BookmarkList([new Bookmark(new Link('https://test1.com/'), new Label('Bookmark 1'))]);
    const bookmark2 = new Bookmark(new Link('https://test2.com/'), new Label('Bookmark 2'));
    bookmarkList.add(bookmark2);
    expect(bookmarkList.bookmarks[1]).toEqual(bookmark2);
  });

  it('A bookmark list with a single bookmark, upon editing it, has a single bookmark with it being the edited one', () => {
    const bookmarkList = new BookmarkList();
    const bookmark = new Bookmark(new Link('https://test.com/'), new Label('Bookmark'));
    bookmarkList.add(bookmark);
    const editedBookmark = new Bookmark(new Link('https://editedtest.com/'), new Label('Edited Bookmark'));
    bookmarkList.edit(bookmark, editedBookmark);
    expect(bookmarkList.bookmarks[0]).toEqual(editedBookmark);
  });
});
