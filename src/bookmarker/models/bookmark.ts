import { Link } from './link';
import { Label } from './label';

export class Bookmark {
  link: Link;
  label: Label;

  constructor(link: Link, label: Label) {
    this.link = link;
    this.label = label;
  }

  edit(bookmark: Bookmark) {
    this.link = bookmark.link;
    this.label = bookmark.label;
  }
}
