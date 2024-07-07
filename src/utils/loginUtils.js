import { localStorage } from "./localStorageUtils";

export const signInHandler = (data) => {
  console.log("sign in data", data);
  const users = localStorage.get("users") || [];
  const username = users.find(
    (user) =>
      (user.email === data.email || user.email === data.username) &&
      user.password === data.password
  )?.username;
  if (username) {
    console.log("Logged In Successfully");
    localStorage.set("loggedInUser", username);
  } else {
    console.log("Wrong password");
  }
};

export const signUpHandler = (data) => {
  const users = localStorage.get("users") || [];
  if (
    users?.length &&
    users.find(
      (user) => user.email === data.email || user.username === data.username
    )?.email
  ) {
    console.log("User with email or username already exists!!");
  } else {
    localStorage.set("users", [...users, data]);
  }
};
