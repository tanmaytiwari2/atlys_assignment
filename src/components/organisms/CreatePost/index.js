import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { FEEDS_PAGE } from "../../../pages/Feeds/constants";
import { post_validation } from "../../../utils/inputValidations";
import { localStorage } from "../../../utils/localStorageUtils";
import Card from "../../atoms/Card";
import { InputField } from "../../atoms/InputField";
import "./index.css";

function CreatePost() {
  const methods = useForm();
  let [searchParams, setSearchParams] = useSearchParams();

  const onSubmit = methods.handleSubmit((data) => {
    const feeds = localStorage.get("posts") || [];
    const loggedInUser = localStorage.get("loggedInUser");
    if (!loggedInUser) {
      setSearchParams({ login: "true" });
    }
    localStorage.set("posts", [
      { text: data.post, userName: loggedInUser },
      ...feeds,
    ]);
    methods.reset();
  });
  return (
    <Card>
      <FormProvider {...methods}>
        <div className="create-post-header">Create Post</div>
        <form
          onSubmit={(e) => e.preventDefault()}
          noValidate
          autoComplete="off"
          className="post-form-container"
        >
          <InputField multiline {...post_validation} />
          <button className="post-button" onClick={onSubmit}>
            {FEEDS_PAGE.BUTTON_CTA}
          </button>
        </form>
      </FormProvider>
    </Card>
  );
}

export default CreatePost;
