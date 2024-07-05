import React from "react";
import { FormTemplate } from "../../components/templates/FormTemplate";
import { LOGIN_FORM } from "../../components/templates/FormTemplate/constants";
import {
  email_validation,
  password_validation,
} from "../../utils/inputValidations";
import "./index.css";

function LoginForm() {
  return (
    <div className="login-container">
      <FormTemplate
        header={LOGIN_FORM.HEADER}
        subheader={LOGIN_FORM.SUB_HEADER}
        ctaText={LOGIN_FORM.CTA_TEXT}
        onCtaSubmit={() => {}}
        fields={[email_validation, password_validation]}
      />
    </div>
  );
}

export default LoginForm;
