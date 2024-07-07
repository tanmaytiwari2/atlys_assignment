import cn from "classnames";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { MdError } from "react-icons/md";
import emoji from "../../../assets/icons/emoji.png";
import eye from "../../../assets/icons/eye.png";
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
  const [inputType, setInputType] = useState(type);
  const { register = () => {}, formState = {} } = useFormContext() || {};
  const { errors = {} } = formState;

  const inputErrors = findInputError(errors, name);
  const isInvalid = isFormInvalid(inputErrors);

  const toggleType = () => {
    setInputType((prevType) => (prevType === "password" ? "text" : "password"));
  };

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
        <div className="input-container">
          <input
            id={id}
            type={inputType}
            className="input-field"
            placeholder={placeholder}
            readOnly
            onFocus={(event) => {
              event.target.readOnly = false;
            }}
            {...register(name, validation)}
          />
          {type === "password" && (
            <div className="eye-icon">
              <img src={eye} onClick={() => toggleType()} />
            </div>
          )}
        </div>
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
