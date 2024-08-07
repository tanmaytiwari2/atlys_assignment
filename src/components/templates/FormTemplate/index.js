import { FormProvider, useForm } from "react-hook-form";
import { GoArrowRight } from "react-icons/go";
import { InputField } from "../../atoms/InputField";
import "./index.css";

export const FormTemplate = ({
  header,
  subheader,
  fields,
  ctaText,
  onCtaSubmit,
  linkText,
  linkSubText,
  onLinkClick,
}) => {
  const methods = useForm();

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
    onCtaSubmit(data);
    methods.reset();
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={(e) => e.preventDefault()} noValidate autoComplete="off">
        <div className="header-container">
          {header && <div className="header">{header}</div>}
          {subheader && <div className="sub-header">{subheader}</div>}
        </div>
        <div className="">
          {fields.map((field, index) => (
            <InputField key={index} {...field} />
          ))}
        </div>
        <button onClick={onSubmit} className="submit-button">
          {ctaText}
        </button>
        <div className="link-container">
          <span className="link-prefix">{linkSubText}</span>
          <span className="link" onClick={onLinkClick}>
            <span className="link-text">{linkText}</span>
            <div className="link-icon">
              <GoArrowRight color="white" size={16} />
            </div>
          </span>
        </div>
      </form>
    </FormProvider>
  );
};
