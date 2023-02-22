import styles from './Input.module.css';

export const Input: React.FC<{
  label: string;
  inputName: string;
  value: string;
  placeholder?: string;
  inputChange: (input: string) => void;
  invalid: boolean;
  errorMessage: string;
}> = (props) => {
  return (
    <div className={styles['container']}>
      <label htmlFor={props.inputName} className={styles['label']}>
        {props.label}
      </label>
      <input
        type="text"
        name={props.inputName}
        className={`${styles['input']} ${props.invalid ? styles['input-error-border'] : styles['input-border']}`}
        value={props.value}
        placeholder={props.placeholder ? props.placeholder : ''}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          props.inputChange(e.target.value);
        }}
      />
      {props.invalid && <span className={styles['error-msg']}>{props.errorMessage}</span>}
    </div>
  );
};
