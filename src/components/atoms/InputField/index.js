import cn from "classnames";
import { useFormContext } from "react-hook-form";
import { MdError } from "react-icons/md";
import emoji from "../../../assets/icons/emoji.png";
import { findInputError, isFormInvalid } from "../../../utils";
import "./index.css";

export const InputField = ({
  name,
  label,
  type,
  id,
  placeholder,
  validation,
  multiline = false,
  className,
}) => {
  const { register = () => {}, formState = {} } = useFormContext() || {};
  const { errors = {} } = formState;

  const inputErrors = findInputError(errors, name);
  const isInvalid = isFormInvalid(inputErrors);

  return (
    <div className={cn(className)}>
      <div className="label-container">
        {label && (
          <label htmlFor={id} className="label-text">
            {label}
          </label>
        )}
        {isInvalid && (
          <InputError
            message={inputErrors.error.message}
            key={inputErrors.error.message}
          />
        )}
      </div>
      {multiline ? (
        <div className="multiline-container">
          <div className="emoji">
            <img src={emoji} />
          </div>
          <textarea
            id={id}
            type={type}
            className={cn("multiline")}
            placeholder={placeholder}
            {...register(name, validation)}
          />
        </div>
      ) : (
        <input
          id={id}
          type={type}
          className="input-field"
          placeholder={placeholder}
          {...register(name, validation)}
        />
      )}
    </div>
  );
};

const InputError = ({ message }) => {
  return (
    <div className="error-container">
      <MdError color="red" />
      <span className="error-message">{message}</span>
    </div>
  );
};
