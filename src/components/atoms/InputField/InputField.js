import cn from "classnames";
import { useFormContext } from "react-hook-form";
import { MdError } from "react-icons/md";
import { findInputError, isFormInvalid } from "../../../utils";
import "./InputField.css";
export const InputField = ({
  name,
  label,
  type,
  id,
  placeholder,
  validation,
  multiline,
  className,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputErrors = findInputError(errors, name);
  const isInvalid = isFormInvalid(inputErrors);

  return (
    <div className={cn(className)}>
      <div>
        <label htmlFor={id} className="label-text">
          {label}
        </label>
        {isInvalid && (
          <InputError
            message={inputErrors.error.message}
            key={inputErrors.error.message}
          />
        )}
      </div>
      {multiline ? (
        <textarea
          id={id}
          type={type}
          className={cn("input-field")}
          placeholder={placeholder}
          {...register(name, validation)}
        ></textarea>
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
    <>
      <MdError />
      {message}
    </>
  );
};
