export const username_validation = {
  name: "name",
  label: "Username",
  type: "text",
  id: "name",
  placeholder: "Choose a preferred username",
  validation: {
    required: {
      value: true,
      message: "required",
    },
    maxLength: {
      value: 30,
      message: "30 characters max",
    },
  },
};

export const password_validation = {
  name: "password",
  label: "Password",
  type: "password",
  id: "Password",
  placeholder: "Enter your password",
  validation: {
    required: {
      value: true,
      message: "required",
    },
    minLength: {
      value: 6,
      message: "Minimum 6 characters",
    },
  },
};

export const email_validation = {
  name: "email",
  label: "Email or username",
  type: "email",
  id: "email",
  placeholder: "Enter your email or username",
  validation: {
    required: {
      value: true,
      message: "required",
    },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: "Email not valid",
    },
  },
};
