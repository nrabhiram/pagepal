import { describe, expect, it } from 'vitest';
import { Bookmark } from '../src/bookmarker/models/bookmark';
import { Utils } from '../src/bookmarker/utils';
import { Label } from '../src/bookmarker/models/label';

describe('Bookmark', () => {
  it('A bookmark when edited with a new label, has its label updated to the edited one', () => {
    const bookmark = new Bookmark(Utils.buildLink('https://github.com/'), new Label('GitHub'));
    const editedBookmark = new Bookmark(Utils.buildLink('https://github.com/'), new Label('GitHub Edit'));
    bookmark.edit(editedBookmark);
    expect(bookmark.label).toEqual(editedBookmark.label);
  });

  it('A bookmark when edited with a new link, has its link updated to the edited one', () => {
    const bookmark = new Bookmark(Utils.buildLink('https://github.com/'), new Label('Label'));
    const editedBookmark = new Bookmark(Utils.buildLink('https://twitter.com/'), new Label('Label'));
    bookmark.edit(editedBookmark);
    expect(bookmark.link).toEqual(editedBookmark.link);
  });
});
