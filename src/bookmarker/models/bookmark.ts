import { Link } from './link';
import { Label } from './label';

export class Bookmark {
  link: Link;
  label: Label;
  id: number;

  constructor(link: Link, label: Label, id?: number) {
    this.link = link;
    this.label = label;
    if (id || id === 0) {
      this.id = id;
    } else {
      this.id = -1;
    }
  }

  edit(bookmark: Bookmark) {
    this.link = bookmark.link;
    this.label = bookmark.label;
  }
}
