import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { BsFillCheckSquareFill } from "react-icons/bs";
import {
  email_validation,
  password_validation,
} from "../../../utils/inputValidations";
import { InputField } from "../../atoms/InputField/InputField";
import "./LoginForm.css";
import { LOGIN_FORM } from "./constants";
import { GoArrowRight } from "react-icons/go";

export const LoginForm = () => {
  const methods = useForm();

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
    methods.reset();
  });

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={(e) => e.preventDefault()}
        noValidate
        autoComplete="off"
        className="login-container"
      >
        <div className="header-container">
          <div className="header">{LOGIN_FORM.HEADER}</div>
          <div className="sub-header">{LOGIN_FORM.SUB_HEADER}</div>
        </div>
        <div className="">
          <InputField {...email_validation} />
          <InputField {...password_validation} />
        </div>
        <button onClick={onSubmit} className="submit-button">
          Login now
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
