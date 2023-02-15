import { describe, expect, it } from 'vitest';
import { Bookmark } from '../src/bookmarker/models/bookmark';
import { Utils } from '../src/bookmarker/utils';

describe('Bookmark', () => {
  it('A bookmark when edited with a new label, has its label updated to the edited one', () => {
    const bookmark = new Bookmark(Utils.buildLink('https://github.com/'), Utils.buildLabel('GitHub'));
    const editedBookmark = new Bookmark(Utils.buildLink('https://github.com/'), Utils.buildLabel('Github'));
    bookmark.edit(editedBookmark);
    expect(bookmark).toEqual(editedBookmark);
  });
});
