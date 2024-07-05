import React, { useEffect, useState } from "react";
import { Outlet, useSearchParams } from "react-router-dom";
import {
  email_validation,
  password_validation,
} from "../../../utils/inputValidations";
import Modal from "../../atoms/Modal";
import { FormTemplate } from "../../templates/FormTemplate";
import { LOGIN_FORM } from "../../templates/FormTemplate/constants";

function RootLayout() {
  let [searchParams, setSearchParams] = useSearchParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (content) => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSearchParams({});
  };

  useEffect(() => {
    if (searchParams.get("login") === "true") {
      if (window.location.pathname !== "/") {
        openModal();
      } else {
        closeModal();
      }
    }
  }, [searchParams]);

  return (
    <>
      <Outlet />
      <section>
        <Modal isModalOpen={isModalOpen} onClose={closeModal}>
          <FormTemplate
            header={LOGIN_FORM.HEADER}
            subheader={LOGIN_FORM.SUB_HEADER}
            ctaText={LOGIN_FORM.CTA_TEXT}
            onCtaSubmit={() => {}}
            fields={[email_validation, password_validation]}
          />
        </Modal>
      </section>
    </>
  );
}

export default RootLayout;
