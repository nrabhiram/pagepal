import { describe, expect, it } from 'vitest';
import { Label } from '../src/bookmarker/models/label';

describe('Label', () => {
  it('A label when left with a blank name, has its name updated to “Untitled”', () => {
    const label = new Label('');
    expect(label.name).toBe('Untitled');
  });

  it('A label when edited with a new label, has its name updated to that of the new one', () => {
    const label = new Label('Initial Label');
    const editedLabel = new Label('Edited Label');
    label.edit(editedLabel);
    expect(label.name).toBe(editedLabel.name);
  });
});
