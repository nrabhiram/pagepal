import { Label } from './label';

export class Bookmark {
  link: string;
  label: Label;

  constructor(link: string, label: Label) {
    this.link = link;
    this.label = label;
  }

  edit(bookmark: Bookmark) {
    this.link = bookmark.link;
    this.label = bookmark.label;
  }
}
