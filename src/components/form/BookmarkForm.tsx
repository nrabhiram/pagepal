import { useEffect, useReducer, useState } from 'react';
import styles from './BookmarkForm.module.css';
import { Button } from '../button/Button';
import { Input } from '../input/Input';

interface InputState {
  value: string;
  valid: boolean;
  displayMessage: boolean;
}

enum InputActionType {
  CHANGE = 'CHANGE',
  SUBMIT = 'SUBMIT',
}

interface InputAction {
  type: InputActionType;
  value: string;
}

const labelReducer = (state: InputState, action: InputAction) => {
  if (action.type === InputActionType.CHANGE) {
    return { value: action.value, valid: action.value.trim().length > 0, displayMessage: false };
  } else if (action.type === InputActionType.SUBMIT) {
    return { value: state.value, valid: state.value.trim().length > 0, displayMessage: true };
  } else {
    return { value: '', valid: false, displayMessage: false };
  }
};

const linkReducer = (state: InputState, action: InputAction) => {
  const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
  const regex = new RegExp(expression);
  if (action.type === InputActionType.CHANGE) {
    return { value: action.value, valid: regex.test(action.value), displayMessage: false };
  } else if (action.type === InputActionType.SUBMIT) {
    return { value: state.value, valid: regex.test(state.value), displayMessage: true };
  } else {
    return { value: '', valid: false, displayMessage: false };
  }
};

export const BookmarkForm: React.FC<{
  formHeading: string;
  label: string;
  link: string;
  CTAText: string;
  submitAction: (formData: { label: string; link: string }) => void;
}> = (props) => {
  const [labelState, dispatchLabel] = useReducer(labelReducer, {
    value: props.label,
    valid: false,
    displayMessage: false,
  });
  const [linkState, dispatchLink] = useReducer(linkReducer, { value: props.link, valid: false, displayMessage: false });
  const [formIsValid, setFormIsValid] = useState(true);

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(labelState.valid && linkState.valid);
    }, 100);

    return () => {
      clearTimeout(identifier);
    };
  }, [labelState.valid, linkState.valid]);

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (formIsValid) {
      props.submitAction({ label: labelState.value, link: linkState.value });
    } else {
      dispatchLabel({ type: InputActionType.SUBMIT, value: labelState.value });
      dispatchLink({ type: InputActionType.SUBMIT, value: linkState.value });
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className={styles['container']}>
      <h3 className={styles['heading']}>{props.formHeading}</h3>
      <Input
        label="Bookmark Label"
        inputName="bookmark-label"
        value={labelState.value}
        placeholder="Label Name"
        inputChange={(input: string) => {
          dispatchLabel({ type: InputActionType.CHANGE, value: input });
        }}
        invalid={!labelState.valid && labelState.displayMessage}
        errorMessage="The Label cannot be empty"
      />
      <Input
        label="Link"
        inputName="bookmark-link"
        value={linkState.value}
        placeholder="https://link.com"
        inputChange={(input: string) => {
          dispatchLink({ type: InputActionType.CHANGE, value: input });
        }}
        invalid={!linkState.valid && linkState.displayMessage}
        errorMessage="Please enter a valid URL"
      />
      <Button level="primary" type="submit">
        {props.CTAText}
      </Button>
    </form>
  );
};
