import style from "../UiInput.module.css";
const FormInputView = ({
  label,
  value,
  customFormInputContainer,
  customFormInputLabel,
  customFormInput,
}) => {
  return (
    <div
      className={style.form_read_input_container}
      style={customFormInputContainer}
    >
      <label
        className={style.form_read_input_label}
        style={customFormInputLabel}
      >
        {label}
      </label>
      <h6 className={style.form_read_input} style={customFormInput}>
        {value}
      </h6>
    </div>
  );
};

export default FormInputView;
