import { describe, expect, it } from 'vitest';
import { Link } from '../src/bookmarker/models/link';

describe('Link', () => {
  it('A link when edited with a new link, has its url updated to that of the new one', () => {
    const link = new Link('https://github.com/');
    const editedLink = new Link('https://github.com/');
    link.edit(editedLink);
    expect(link.url).toBe(editedLink.url);
  });
});
