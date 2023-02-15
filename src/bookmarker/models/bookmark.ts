export class Bookmark {
  link: string;
  label: string;

  constructor(link: string, label: string) {
    this.link = link;
    this.label = label;
  }

  edit(bookmark: Bookmark) {
    this.link = bookmark.link;
    this.label = bookmark.label;
  }
}
