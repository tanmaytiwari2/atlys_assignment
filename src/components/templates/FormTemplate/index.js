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
}) => {
  const methods = useForm();

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
    onCtaSubmit();
    methods.reset();
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={(e) => e.preventDefault()} noValidate autoComplete="off">
        <div className="header-container">
          <div className="header">{header}</div>
          <div className="sub-header">{subheader}</div>
        </div>
        <div className="">
          {fields.map((field) => (
            <InputField {...field} />
          ))}
        </div>
        <button onClick={onSubmit} className="submit-button">
          {ctaText}
        </button>
        <div className="link-container">
          <span className="link-prefix">Not registerd yet?</span>
          <span className="link">
            <span className="link-text">Register</span>
            <div className="link-icon">
              <GoArrowRight color="white" size={16} />
            </div>
          </span>
        </div>
      </form>
    </FormProvider>
  );
};
