import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FormTemplate } from "../../components/templates/FormTemplate";
import { LOGIN_FORM } from "../../components/templates/FormTemplate/constants";
import {
  email_validation,
  password_validation,
} from "../../utils/inputValidations";
import { signInHandler } from "../../utils/loginUtils";
import "./index.css";

function Login() {
  let [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  return (
    <div className="login-container">
      <FormTemplate
        header={LOGIN_FORM.header}
        subheader={LOGIN_FORM.subHeader}
        ctaText={LOGIN_FORM.ctaText}
        onCtaSubmit={(data) => {
          signInHandler(data);
          navigate("/feeds");
        }}
        onLinkClick={() => setSearchParams({ register: "true" })}
        fields={[email_validation, password_validation]}
        linkText={LOGIN_FORM.linkText}
        linkSubText={LOGIN_FORM.linkSubText}
      />
    </div>
  );
}

export default Login;
