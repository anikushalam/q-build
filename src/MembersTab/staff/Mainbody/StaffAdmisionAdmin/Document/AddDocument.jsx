import React, { useEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useFileUpload } from "../../../../../hooks/authentication-api";
import { useAddDocumentByAdmission } from "../../../../../hooks/member_tab/admission-api";
import JoinFormFile from "../../../../../JoiningForm/Student/Form/JoinFormFile";
import JoinFormInput from "../../../../../JoiningForm/Student/Form/JoinFormInput";
import JoinFormTextArea from "../../../../../JoiningForm/Student/Form/JoinFormTextArea";
import QLoader from "../../../../../Loader/QLoader";
import PopupWrapper from "../../FinanceManager/FeesStructure/PopupWrapper";
import style from "./Document.module.css";

const AddDocument = ({
  setOpenDocument,
  admissionId,
  onRefetch,
  viewAs,
  editDocument,
  onEdit,
}) => {
  const { t } = useTranslation();
  const [document, setDocument] = useState({
    doc_name: "",
    doc_key: "",
    applicable_to: "",
  });
  const [filled, setFilled] = useState("");
  const [oneFileUpload] = useFileUpload();
  const [disabled, setDisabled] = useState(false);
  const [file, setFile] = useState("");
  const [addDocumentByAdmission] = useAddDocumentByAdmission();
  useEffect(() => {
    if (viewAs === "EDIT") {
      setDocument({
        doc_name: editDocument?.document_name ?? "",
        doc_key: editDocument?.document_key ?? "",
        applicable_to: editDocument?.applicable_to ?? "",
      });
      setFile({
        originalName: "document preview",
      });
    }
  }, [viewAs]);

  const onBackWithArrowLeft = () => {
    setOpenDocument((pre) => !pre);
  };
  const onInputChange = (e) => {
    setDocument((prev) => ({
      ...prev,
      doc_name: e.target.value,
    }));
  };

  const onInputApplicableChange = (e) => {
    setDocument((prev) => ({
      ...prev,
      applicable_to: e.target.value,
    }));
  };
  const onFileUpload = (e) => {
    setDisabled((pre) => !pre);
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    oneFileUpload({
      fileUpload: formData,
    })
      .then((res) => {
        setFile({
          originalName: e.target.files[0]?.name,
          key: res.data?.imageKey,
          type: e.target.files[0]?.type,
        });
        setDocument((prev) => ({
          ...prev,
          doc_key: res.data?.imageKey,
        }));

        setDisabled((pre) => !pre);
      })
      .catch({});
  };
  const onValidation = (collectPayment) => {
    const errors = {};
    for (let obj in collectPayment) {
      if (obj === "doc_key" || obj === "applicable_to") {
      } else {
        if (!collectPayment[obj]) {
          errors[obj] = `${obj} is required!`;
        }
      }
    }
    return errors;
  };

  const onAddDocument = () => {
    const validation = onValidation(document);
    let flag = false;
    for (let errField in validation) {
      flag = true;
      break;
    }
    if (flag) {
      setFilled(validation);
    } else {
      if (viewAs === "EDIT") {
        onEdit(document);
      } else {
        setDisabled((pre) => !pre);
        addDocumentByAdmission({
          aid: admissionId,
          document,
        })
          .then(() => {
            onRefetch();
            setOpenDocument((prev) => !prev);
            setDisabled((pre) => !pre);
          })
          .catch({});
      }
    }
  };
  return (
    <PopupWrapper>
      <div className={style.document_modal}>
        <section className={style.add_document_modal_title_left}>
          <img
            src="/images/arrow-left-fees-icon.svg"
            onClick={onBackWithArrowLeft}
            alt=""
          />
          <h6>
            {viewAs === "EDIT" ? t("update_document") : t("add_new_document")}
          </h6>
        </section>
        <JoinFormInput
          labelText={t("document_name")}
          placeholder={t("document_nape_placeholder")}
          name={"documentName"}
          value={document?.doc_name}
          type={"text"}
          onChange={onInputChange}
          errorShow={filled["name"]}
        />

        <JoinFormTextArea
          labelText={t("document_applicable_to")}
          placeholder={t("document_applicable_to_placeholder")}
          name={"applicable_to"}
          value={document?.applicable_to}
          type={"text"}
          onChange={onInputApplicableChange}
        />
        <JoinFormFile
          labelText={t("sample_documnt")}
          name={"document"}
          value={file}
          onChange={onFileUpload}
        />

        <button className={style.create_btn} onClick={onAddDocument}>
          {viewAs === "EDIT" ? t("update") : t("create")}
        </button>
        {disabled && <QLoader />}
      </div>
    </PopupWrapper>
  );
};

export default AddDocument;
