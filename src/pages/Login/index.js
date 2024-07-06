import React from "react";
import { useSearchParams } from "react-router-dom";
import { FormTemplate } from "../../components/templates/FormTemplate";
import { LOGIN_FORM } from "../../components/templates/FormTemplate/constants";
import {
  email_validation,
  password_validation,
} from "../../utils/inputValidations";
import "./index.css";
import { localStorage } from "../../utils/localStorageUtils";
import { signInHandler } from "../../utils/loginUtils";

function Login() {
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className="login-container">
      <FormTemplate
        header={LOGIN_FORM.header}
        subheader={LOGIN_FORM.subHeader}
        ctaText={LOGIN_FORM.ctaText}
        onCtaSubmit={signInHandler}
        onLinkClick={() => setSearchParams({ register: "true" })}
        fields={[email_validation, password_validation]}
        linkText={LOGIN_FORM.linkText}
        linkSubText={LOGIN_FORM.linkSubText}
      />
    </div>
  );
}

export default Login;
