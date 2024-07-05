import React, { useEffect, useState } from "react";
import { Outlet, useSearchParams } from "react-router-dom";
import {
  email_validation,
  password_validation,
  username_validation,
} from "../../../utils/inputValidations";
import Modal from "../../atoms/Modal";
import { FormTemplate } from "../../templates/FormTemplate";
import {
  LOGIN_FORM,
  SIGN_UP_FORM,
} from "../../templates/FormTemplate/constants";

function RootLayout() {
  let [searchParams, setSearchParams] = useSearchParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modelContent, setModalContent] = useState(null);
  const openModal = (content) => {
    setIsModalOpen(true);
    setModalContent(
      content === "login"
        ? {
            ...LOGIN_FORM,
            fields: [email_validation, password_validation],
            onLinkClick: () => setSearchParams({ register: "true" }),
          }
        : {
            ...SIGN_UP_FORM,
            fields: [
              email_validation,
              username_validation,
              password_validation,
            ],
            onLinkClick: () => setSearchParams({ login: "true" }),
          }
    );
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSearchParams({});
  };

  useEffect(() => {
    if (searchParams.get("login") === "true") {
      if (window.location.pathname !== "/") {
        openModal("login");
      } else {
        closeModal();
      }
    } else if (searchParams.get("register") === "true") {
      openModal("register");
    }
  }, [searchParams]);

  return (
    <>
      <Outlet />
      <section>
        <Modal isModalOpen={isModalOpen} onClose={closeModal}>
          <FormTemplate
            header={modelContent?.header}
            subheader={modelContent?.subHeader}
            ctaText={modelContent?.ctaText}
            onCtaSubmit={() => {}}
            fields={modelContent?.fields}
            linkText={modelContent?.linkText}
            linkSubText={modelContent?.linkSubText}
            onLinkClick={modelContent?.onLinkClick}
          />
        </Modal>
      </section>
    </>
  );
}

export default RootLayout;
