import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import JoinFormFile from "../../../../../JoiningForm/Student/Form/JoinFormFile";
import JoinFormInput from "../../../../../JoiningForm/Student/Form/JoinFormInput";
import JoinFormTextArea from "../../../../../JoiningForm/Student/Form/JoinFormTextArea";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import PopupWrapper from "../../FinanceManager/FeesStructure/PopupWrapper";
import style from "./AdmissionScholarship.module.css";
import Switch from "@mui/material/Switch";
import { useFileUpload } from "../../../../../hooks/authentication-api";
import QLoader from "../../../../../Loader/QLoader";
import { useAddScholarshipAdmission } from "../../../../../hooks/member_tab/admission-api";
import SelectCategory from "./SelectCategory";
import ScholarshipPreview from "./ScholarshipPreview";
const label = { inputProps: { "aria-label": "Switch demo" } };

const AddScholarship = ({
  onClose,
  financeId,
  admissionId,
  onRefetchWhenAdd,
}) => {
  const { t } = useTranslation();
  const [isLink, setIsLink] = useState(false);
  const [oneFileUpload] = useFileUpload();
  const [addScholarshipAdmission] = useAddScholarshipAdmission();
  const [disabled, setDisabled] = useState(false);
  const [openCategory, setOpenCategory] = useState(false);
  const [openPreview, setOpenPreview] = useState(false);
  const [openCategoryName, setOpenCategoryName] = useState(false);
  const [filled, setFilled] = useState(false);
  const [scholar, setScholar] = useState({
    scholarship_name: "",
    scholarship_about: "",
    scholarship_notification: {
      flow: "",
      notification: "",
    },
    scholarship_apply: {
      flow: "",
      apply: "",
    },
    category_array: [],
  });
  const [file, setFile] = useState("");
  const onInputChange = (e) => {
    setScholar((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
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
        if (res.data?.imageKey) {
          setScholar((prev) => ({
            ...prev,
            scholarship_notification: {
              flow: "Input",
              notification: res.data?.imageKey,
            },
            scholarship_apply: {
              flow: "",
              apply: "",
            },
          }));
          setFile({
            originalName: e.target.files[0].name,
          });
          setDisabled((pre) => !pre);
        } else {
          setDisabled((pre) => !pre);
        }
      })
      .catch({});
  };

  const onLinkInput = (e) => {
    setScholar((prev) => ({
      ...prev,
      scholarship_notification: {
        flow: "",
        notification: "",
      },
      scholarship_apply: {
        flow: "Link",
        apply: e.target.value,
      },
    }));
  };
  const onValidation = (catName, catList) => {
    const errors = {};
    if (!catName) errors["scholarship_name"] = `is required!`;
    if (!catList?.length) errors["applicable_to"] = `is required!`;
    return errors;
  };

  const onPreview = () => {
    const validation = onValidation(
      scholar.scholarship_name,
      scholar.category_array
    );
    let flag = false;
    for (let errField in validation) {
      if (errField) {
        flag = true;
        break;
      }
    }
    if (flag) {
      setFilled(validation);
    } else {
      setOpenPreview(true);
    }
  };

  const onCreate = () => {
    setOpenPreview(false);
    setDisabled((pre) => !pre);
    addScholarshipAdmission({
      aid: admissionId,
      addScholarship: scholar,
    })
      .then(() => {
        onRefetchWhenAdd();
        setDisabled((pre) => !pre);
        onClose();
      })
      .catch({});
  };
  return (
    <>
      {openCategory ? (
        <SelectCategory
          financeId={financeId}
          onClose={() => setOpenCategory(false)}
          setOpenCategoryName={setOpenCategoryName}
          setScholar={setScholar}
        />
      ) : openPreview ? (
        <ScholarshipPreview
          onClose={() => setOpenPreview(false)}
          openCategoryName={openCategoryName}
          scholar={scholar}
          onCreate={onCreate}
        />
      ) : (
        <PopupWrapper onClose={onClose}>
          <div className={style.assign_role_container}>
            <section className={style.assign_role_title}>
              <img
                src="/images/arrow-left-fees-icon.svg"
                onClick={onClose}
                alt="back icon"
              />

              <h6>{t("add_new_scholarship")}</h6>
            </section>
            <BorderBottom
              customStyle={{
                width: "100%",
              }}
            />
            <section
              style={{
                padding: "0.8rem",
              }}
            >
              <JoinFormTextArea
                labelText={t("scholarship_name")}
                placeholder={t("scholarship_name_placeholder")}
                name={"scholarship_name"}
                value={scholar.scholarship_name}
                onChange={onInputChange}
                errorShow={filled["scholarship_name"]}
              />
              <JoinFormTextArea
                labelText={t("scholarship_description")}
                placeholder={t("scholarship_description_placeholder")}
                name={"scholarship_about"}
                value={scholar.scholarship_about}
                onChange={onInputChange}
              />

              <button
                className={style.applicable_to_btn}
                onClick={() => setOpenCategory(true)}
                style={{
                  marginTop: "1rem",
                }}
              >
                <div>{t("applicable_to")}</div>
                <img src="/images/forward-right-icon.svg" alt="next step" />
              </button>
              {filled["applicable_to"] && (
                <div
                  style={{
                    color: "red",
                  }}
                >
                  * Required
                </div>
              )}

              {!isLink && (
                <div
                  style={{
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      right: "3%",
                      top: "7%",
                    }}
                    onClick={() => setIsLink((prev) => !prev)}
                  >
                    <span>{t("it_is_link")}</span>
                    <Switch {...label} checked={isLink} />
                  </div>
                  <JoinFormFile
                    labelText={t("scholarship_notification")}
                    name="notificationfile"
                    value={file}
                    onChange={onFileUpload}
                  />
                </div>
              )}

              {isLink && (
                <div
                  style={{
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      right: "3%",
                      top: "7%",
                    }}
                    onClick={() => setIsLink((prev) => !prev)}
                  >
                    <span>{t("it_is_link")}</span>
                    <Switch {...label} checked={isLink} />
                  </div>
                  <JoinFormInput
                    labelText={t("scholarship_apply_now")}
                    placeholder={t("scholarship_apply_now_placeholder")}
                    value={scholar.scholarship_apply.apply}
                    onChange={onLinkInput}
                  />
                </div>
              )}

              <button
                className={style.applicable_to_btn}
                style={{
                  justifyContent: "center",
                  marginTop: "1rem",
                }}
                onClick={onPreview}
              >
                {t("preview")}
              </button>
            </section>
            {disabled && <QLoader />}
          </div>
        </PopupWrapper>
      )}
    </>
  );
};

export default AddScholarship;
