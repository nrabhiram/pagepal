import { describe, expect, it } from 'vitest';
import { BookmarkList } from '../src/bookmarker/models/bookmarkList';
import { Bookmark } from '../src/bookmarker/models/bookmark';
import { Link } from '../src/bookmarker/models/link';
import { Label } from '../src/bookmarker/models/label';

describe('Bookmark List', () => {
  it('A bookmark list with 0 bookmarks, upon adding a new bookmark, has 1 bookmark', () => {
    const bookmarkList = new BookmarkList();
    bookmarkList.add(new Link('https://test.com/'), new Label('Label'));
    expect(bookmarkList.bookmarks.length).toBe(1);
  });

  it('A bookmark list with 1 bookmark, upon adding a new bookmark, has it as the 2nd one in the list', () => {
    const bookmarkList = new BookmarkList();
    bookmarkList.add(new Link('https://test1.com/'), new Label('Bookmark 1'));
    bookmarkList.add(new Link('https://test2.com/'), new Label('Bookmark 2'));
    const bookmark2 = new Bookmark(new Link('https://test2.com/'), new Label('Bookmark 2'), 1);
    expect(bookmarkList.bookmarks[1]).toEqual(bookmark2);
  });

  it('A bookmark list with a single bookmark, upon editing it, has a single bookmark with it being the edited one', () => {
    const bookmarkList = new BookmarkList();
    bookmarkList.add(new Link('https://test.com/'), new Label('Bookmark'));
    bookmarkList.edit(
      bookmarkList.bookmarks[0],
      new Bookmark(new Link('https://editedtest.com/'), new Label('Edited Bookmark')),
    );
    const editedBookmark = new Bookmark(new Link('https://editedtest.com/'), new Label('Edited Bookmark'), 0);
    expect(bookmarkList.bookmarks[0]).toEqual(editedBookmark);
  });

  it('A bookmark list with 2 bookmarks, upon editing the 2nd one, has a list of 2 bookmarks, with the 2nd one being the edited bookmark', () => {
    const bookmarkList = new BookmarkList();
    bookmarkList.add(new Link('https://test1.com/'), new Label('Bookmark 1'));
    bookmarkList.add(new Link('https://test2.com/'), new Label('Bookmark 2'));
    bookmarkList.edit(
      bookmarkList.bookmarks[1],
      new Bookmark(new Link('https://editedtest.com/'), new Label('Edited Bookmark')),
    );
    const editedBookmark = new Bookmark(new Link('https://editedtest.com/'), new Label('Edited Bookmark'), 1);
    expect(bookmarkList.bookmarks[1]).toEqual(editedBookmark);
  });

  it('A bookmark list with 3 bookmarks, upon editing the 2nd one, has a list of 3 bookmarks, with the 2nd one being the edited bookmark', () => {
    const bookmarkList = new BookmarkList();
    bookmarkList.add(new Link('https://test1.com/'), new Label('Bookmark 1'));
    bookmarkList.add(new Link('https://test2.com/'), new Label('Bookmark 2'));
    bookmarkList.add(new Link('https://test3.com/'), new Label('Bookmark 3'));
    bookmarkList.edit(
      bookmarkList.bookmarks[1],
      new Bookmark(new Link('https://editedtest.com/'), new Label('Edited Bookmark')),
    );
    const editedBookmark = new Bookmark(new Link('https://editedtest.com/'), new Label('Edited Bookmark'), 1);
    expect(bookmarkList.bookmarks[1]).toEqual(editedBookmark);
  });

  it('A bookmark list with a list of 2 bookmarks, does not change anything if a bookmark that does not exist in the list is edited', () => {
    const bookmarkList = new BookmarkList();
    bookmarkList.add(new Link('https://test1.com/'), new Label('Bookmark 1'));
    bookmarkList.add(new Link('https://test2.com/'), new Label('Bookmark 2'));
    const fakeBookmark = new Bookmark(new Link('https://test2.com/'), new Label('Bookmark 2'));
    bookmarkList.edit(fakeBookmark, new Bookmark(new Link('https://editedtest.com/'), new Label('Edited Bookmark')));
    const editedBookmark = new Bookmark(new Link('https://editedtest.com/'), new Label('Edited Bookmark'), 1);
    expect(bookmarkList.bookmarks[1]).not.toEqual(editedBookmark);
  });

  it('A bookmark list with a single bookmark, upon deleting it, has no bookmarks left', () => {
    const bookmarkList = new BookmarkList();
    const bookmark = bookmarkList.add(new Link('https://test1.com/'), new Label('Bookmark 1'));
    bookmarkList.delete(bookmark);
    expect(bookmarkList.bookmarks.length).toBe(0);
  });

  it('A bookmark list with a list of 2 bookmarks, upon deleting the 2nd one, has only the 1st bookmark left', () => {
    const bookmarkList = new BookmarkList();
    const bookmark1 = bookmarkList.add(new Link('https://test1.com/'), new Label('Bookmark 1'));
    const bookmark2 = bookmarkList.add(new Link('https://test2.com/'), new Label('Bookmark 2'));
    bookmarkList.delete(bookmark2);
    expect(bookmarkList.bookmarks[0]).toEqual(bookmark1);
  });
  it('A bookmark list with a list of 2 bookmarks, upon deleting the 2nd one, has only the 1st bookmark left', () => {
    const bookmarkList = new BookmarkList();
    const bookmark1 = bookmarkList.add(new Link('https://test1.com/'), new Label('Bookmark 1'));
    const bookmark2 = bookmarkList.add(new Link('https://test2.com/'), new Label('Bookmark 2'));
    const bookmark3 = bookmarkList.add(new Link('https://test3.com/'), new Label('Bookmark 3'));
    bookmarkList.delete(bookmark2);
    expect(bookmarkList.bookmarks).toEqual([bookmark1, bookmark3]);
  });
});
