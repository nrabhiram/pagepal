export class Label {
  name: string;

  constructor(name: string) {
    if (name.trim().length > 0) {
      this.name = name;
    } else {
      this.name = 'Untitled';
    }
  }

  edit(editedLabel: Label) {
    this.name = editedLabel.name;
  }
}
