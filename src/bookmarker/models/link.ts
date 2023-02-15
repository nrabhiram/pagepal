export class Link {
  url: string;

  constructor(url: string) {
    this.url = url;
  }

  edit(editedLink: Link) {
    this.url = editedLink.url;
  }
}
