import { useState } from 'react';
import styles from './BookmarkForm.module.css';
import { Button } from '../button/Button';
import { Input } from '../input/Input';

export const BookmarkForm: React.FC<{
  formHeading: string;
  label: string;
  link: string;
  CTAText: string;
  submitAction: (formData: { label: string; link: string }) => void;
}> = (props) => {
  const [label, setLabel] = useState(props.label);
  const [link, setLink] = useState(props.link);

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    props.submitAction({ label, link });
  };
  return (
    <form onSubmit={onSubmitHandler} className={styles['container']}>
      <h3 className={styles['heading']}>{props.formHeading}</h3>
      <Input
        label="Bookmark Label"
        inputName="bookmark-label"
        value={label}
        placeholder="Label Name"
        inputChange={(input: string) => {
          setLabel(input);
        }}
      />
      <Input
        label="Link"
        inputName="bookmark-link"
        value={link}
        placeholder="https://link.com"
        inputChange={(input: string) => {
          setLink(input);
        }}
      />
      <Button level="primary" type="submit">
        {props.CTAText}
      </Button>
    </form>
  );
};
