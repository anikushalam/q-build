import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import AssignStaffModal from "../../../../Department/Institute/AssignStaff/AssignStaffModal";
import { useFileUpload } from "../../../../hooks/authentication-api";
import { useWebsiteLookUpdateByInstitute } from "../../../../hooks/setting-api";
import JoinFormFileEdit from "../../../../JoiningForm/Student/Form/JoinFormFileEdit";
import JoinFormInput from "../../../../JoiningForm/Student/Form/JoinFormInput";
import JoinFormTextArea from "../../../../JoiningForm/Student/Form/JoinFormTextArea";
import QLoader from "../../../../Loader/QLoader";
import { imageShowUrl } from "../../../../services/BaseUrl";
import style from "./SiteEdit.module.css";

const SiteLandingPage = ({ instituteId, websiteLooks }) => {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const [assignHead, setAssignHead] = useState(false);
  const [assignHeadStaff, setAssignHeadStaff] = useState("");
  const [lookInfo, setLookInfo] = useState({
    logo: websiteLooks?.logo ?? "",
    background_image: websiteLooks?.background_image ?? "",
    vision: websiteLooks?.vision ?? "",
    mission: websiteLooks?.mission ?? "",
    about: websiteLooks?.about ?? "",
    color: websiteLooks?.color ?? "",
    leading_person: websiteLooks?.leading_person ?? "",
    leading_person_position: websiteLooks?.leading_person_position ?? "",
    leading_person_message: websiteLooks?.leading_person_message ?? "",
    linkedin_link: websiteLooks?.linkedin_link ?? "",
    instagram_link: websiteLooks?.instagram_link ?? "",
    twitter_link: websiteLooks?.twitter_link ?? "",
    qviple_link: websiteLooks?.qviple_link ?? "",
  });
  const [oneFileUpload] = useFileUpload();
  const [filled, setFilled] = useState("");
  const [websiteLookUpdateByInstitute] = useWebsiteLookUpdateByInstitute();

  useEffect(() => {
    setLookInfo({
      logo: websiteLooks?.logo ?? "",
      background_image: websiteLooks?.background_image ?? "",
      vision: websiteLooks?.vision ?? "",
      mission: websiteLooks?.mission ?? "",
      about: websiteLooks?.about ?? "",
      color: websiteLooks?.color ?? "",
      leading_person: websiteLooks?.leading_person?._id ?? "",
      leading_person_position: websiteLooks?.leading_person_position ?? "",
      leading_person_message: websiteLooks?.leading_person_message ?? "",
      linkedin_link: websiteLooks?.linkedin_link ?? "",
      instagram_link: websiteLooks?.instagram_link ?? "",
      twitter_link: websiteLooks?.twitter_link ?? "",
      qviple_link: websiteLooks?.qviple_link ?? "",
    });
    setAssignHeadStaff(websiteLooks?.leading_person);
  }, [websiteLooks]);
  // console.info(websiteLooks?.leading_person);
  const onSelectLeading = (assing) => {
    setAssignHeadStaff(assing?.user);
    setLookInfo((prev) => ({
      ...prev,
      leading_person: assing?.user._id,
    }));
  };

  const onInputChange = (e) => {
    setLookInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const onChooseTheme = (val) => {
    setLookInfo((prev) => ({
      ...prev,
      color: val,
    }));
  };
  const onFileUpload = (e) => {
    if (e.target.files?.length) {
      setDisabled((pre) => !pre);
      const formData = new FormData();
      formData.append("file", e.target.files[0]);
      oneFileUpload({
        fileUpload: formData,
      })
        .then((res) => {
          if (res.data?.imageKey) {
            setLookInfo((prev) => ({
              ...prev,
              [e.target.name]: res.data?.imageKey,
            }));
          }
          setDisabled((pre) => !pre);
        })
        .catch({});
    }
  };
  const onValidation = (lpos, lid) => {
    const errors = {};
    if (!lpos)
      errors[
        "leading_person_position"
      ] = `leading_person_position is required!`;
    if (!lid) errors["leading_person"] = `leading_person is required!`;
    return errors;
  };

  const onUpdateInfo = () => {
    const validation = onValidation(
      lookInfo.leading_person_position,
      lookInfo.leading_person
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
      if (instituteId) {
        setDisabled((pre) => !pre);
        websiteLookUpdateByInstitute({
          id: instituteId,
          updateLooks: {
            website_looks: lookInfo,
          },
        })
          .then(() => {
            setDisabled((pre) => !pre);
          })
          .catch({});
      }
    }
  };
  return (
    <>
      <div className={style.show_field}>
        <JoinFormFileEdit
          labelText={t("institute_logo")}
          name={"logo"}
          value={lookInfo.logo}
          onChange={onFileUpload}
          customStyleContainer={{
            width: "49.5%",
          }}
        />
        <JoinFormFileEdit
          labelText={t("institute_backgroud")}
          name={"background_image"}
          value={lookInfo.background_image}
          onChange={onFileUpload}
          customStyleContainer={{
            width: "49.5%",
          }}
        />
      </div>
      <JoinFormTextArea
        labelText={t("vision")}
        placeholder={t("vision_placeholder")}
        name={"vision"}
        value={lookInfo.vision}
        type={"text"}
        onChange={onInputChange}
        customStyleContainer={{
          width: "100%",
        }}
      />
      <JoinFormTextArea
        labelText={t("mission")}
        placeholder={t("mission_placeholder")}
        name={"mission"}
        value={lookInfo.mission}
        type={"text"}
        onChange={onInputChange}
        customStyleContainer={{
          width: "100%",
        }}
      />
      <JoinFormTextArea
        labelText={t("about")}
        placeholder={t("about_placeholder")}
        name={"about"}
        value={lookInfo.about}
        type={"text"}
        onChange={onInputChange}
        customStyleContainer={{
          width: "100%",
        }}
      />

      <div className={style.show_field}>
        <JoinFormInput
          labelText={t("leading_person")}
          placeholder={t("leading_person_placeholder")}
          name={"leading_person_position"}
          value={lookInfo.leading_person_position}
          type={"text"}
          onChange={onInputChange}
          customStyleContainer={{
            width: "49.5%",
          }}
          errorShow={filled["leading_person_position"]}
        />

        <div
          className={style.leading_person_container}
          onClick={() => setAssignHead(true)}
        >
          <img
            src={
              assignHeadStaff?.profilePhoto
                ? `${imageShowUrl}/${assignHeadStaff.profilePhoto}`
                : "/images/user-icon.svg"
            }
            alt="avatar"
          />
          <div className={style.leading_person_text}>
            <h6>
              {assignHeadStaff
                ? assignHeadStaff?.userLegalName
                : t("select_leading_person")}
            </h6>
            <p>
              {t("search_joined_list")}{" "}
              {filled["leading_person"] && (
                <span style={{ color: "red", marginLeft: "15px" }}>
                  * {t("form_require_label")}
                </span>
              )}
            </p>
          </div>
        </div>
      </div>
      <JoinFormTextArea
        labelText={t("above_person_desk_message")}
        placeholder={t("above_person_desk_message_placeholder")}
        name={"leading_person_message"}
        value={lookInfo.leading_person_message}
        type={"text"}
        onChange={onInputChange}
        customStyleContainer={{
          width: "100%",
        }}
      />
      <section className={style.site_theme}>
        <h6 className={style.site_theme_header}>{t("choose_site_theme")}</h6>
        <div className={style.site_theme_container}>
          <div
            className={style.site_theme_icon}
            onClick={() => onChooseTheme("#010d31")}
            style={{
              backgroundColor: "#010e31",
              boxShadow:
                lookInfo.color === "#010d31" ? `1px 3px 6px 0 #010d31` : "none",
            }}
          ></div>
          <div
            className={style.site_theme_icon}
            onClick={() => onChooseTheme("#0A2647")}
            style={{
              backgroundColor: "#0A2647",
              boxShadow:
                lookInfo.color === "#0A2647" ? `1px 3px 6px 0 #0A2647` : "none",
            }}
          ></div>
          <div
            className={style.site_theme_icon}
            onClick={() => onChooseTheme("#2C3333")}
            style={{
              backgroundColor: "#2C3333",
              boxShadow:
                lookInfo.color === "#2C3333" ? `1px 3px 6px 0 #2C3333` : "none",
            }}
          ></div>
          <div
            className={style.site_theme_icon}
            onClick={() => onChooseTheme("#2E4F4F")}
            style={{
              backgroundColor: "#2E4F4F",
              boxShadow:
                lookInfo.color === "#2E4F4F" ? `1px 3px 6px 0 #2E4F4F` : "none",
            }}
          ></div>
          <div
            className={style.site_theme_icon}
            onClick={() => onChooseTheme("#0E8388")}
            style={{
              backgroundColor: "#0E8388",
              boxShadow:
                lookInfo.color === "#0E8388" ? `1px 3px 6px 0 #0E8388` : "none",
            }}
          ></div>
          <div
            className={style.site_theme_icon}
            onClick={() => onChooseTheme("#2F58CD")}
            style={{
              backgroundColor: "#2F58CD",
              boxShadow:
                lookInfo.color === "#2F58CD" ? `1px 3px 6px 0 #2F58CD` : "none",
            }}
          ></div>
          <div
            className={style.site_theme_icon}
            onClick={() => onChooseTheme("#4E31AA")}
            style={{
              backgroundColor: "#4E31AA",
              boxShadow:
                lookInfo.color === "#4E31AA" ? `1px 3px 6px 0 #4E31AA` : "none",
            }}
          ></div>
          <div
            className={style.site_theme_icon}
            onClick={() => onChooseTheme("#3A1078")}
            style={{
              backgroundColor: "#3A1078",
              boxShadow:
                lookInfo.color === "#3A1078" ? `1px 3px 6px 0 #3A1078` : "none",
            }}
          ></div>
          <div
            className={style.site_theme_icon}
            onClick={() => onChooseTheme("#2B3467")}
            style={{
              backgroundColor: "#2B3467",
              boxShadow:
                lookInfo.color === "#2B3467" ? `1px 3px 6px 0 #2B3467` : "none",
            }}
          ></div>
          <div
            className={style.site_theme_icon}
            onClick={() => onChooseTheme("#205E61")}
            style={{
              backgroundColor: "#205E61",
              boxShadow:
                lookInfo.color === "#205E61" ? `1px 3px 6px 0 #205E61` : "none",
            }}
          ></div>
          <div
            className={style.site_theme_icon}
            onClick={() => onChooseTheme("#F2921D")}
            style={{
              backgroundColor: "#F2921D",
              boxShadow:
                lookInfo.color === "#F2921D" ? `1px 3px 6px 0 #F2921D` : "none",
            }}
          ></div>
          <div
            className={style.site_theme_icon}
            onClick={() => onChooseTheme("#A61F69")}
            style={{
              backgroundColor: "#A61F69",
              boxShadow:
                lookInfo.color === "#A61F69" ? `1px 3px 6px 0 #A61F69` : "none",
            }}
          ></div>
          <div
            className={style.site_theme_icon}
            onClick={() => onChooseTheme("#400E32")}
            style={{
              backgroundColor: "#400E32",
              boxShadow:
                lookInfo.color === "#400E32" ? `1px 3px 6px 0 #400E32` : "none",
            }}
          ></div>
          <div
            className={style.site_theme_icon}
            onClick={() => onChooseTheme("#00425A")}
            style={{
              backgroundColor: "#00425A",
              boxShadow:
                lookInfo.color === "#00425A" ? `1px 3px 6px 0 #00425A` : "none",
            }}
          ></div>
          <div
            className={style.site_theme_icon}
            onClick={() => onChooseTheme("#1F8A70")}
            style={{
              backgroundColor: "#1F8A70",
              boxShadow:
                lookInfo.color === "#1F8A70" ? `1px 3px 6px 0 #1F8A70` : "none",
            }}
          ></div>
          <div
            className={style.site_theme_icon}
            onClick={() => onChooseTheme("#000000")}
            style={{
              backgroundColor: "#000000",
              boxShadow:
                lookInfo.color === "#000000" ? `1px 3px 6px 0 #000000` : "none",
            }}
          ></div>
        </div>
      </section>
      <div className={style.show_field}>
        <JoinFormInput
          labelText={t("site_linkedin")}
          placeholder={t("site_linkedin_placeholder")}
          name={"linkedin_link"}
          value={lookInfo.linkedin_link}
          type={"text"}
          onChange={onInputChange}
          customStyleContainer={{
            width: "49.5%",
          }}
        />
        <JoinFormInput
          labelText={t("site_instagram")}
          placeholder={t("site_instagram_placeholder")}
          name={"instagram_link"}
          value={lookInfo.instagram_link}
          type={"text"}
          onChange={onInputChange}
          customStyleContainer={{
            width: "49.5%",
          }}
        />
      </div>
      <div className={style.show_field}>
        <JoinFormInput
          labelText={t("site_twitter")}
          placeholder={t("site_twitter_placeholder")}
          name={"twitter_link"}
          value={lookInfo.twitter_link}
          type={"text"}
          onChange={onInputChange}
          customStyleContainer={{
            width: "49.5%",
          }}
        />
        <JoinFormInput
          labelText={t("site_qviple_profile")}
          placeholder={t("site_qviple_profile_placeholder")}
          name={"qviple_link"}
          value={lookInfo.qviple_link}
          type={"text"}
          onChange={onInputChange}
          customStyleContainer={{
            width: "49.5%",
          }}
        />
      </div>
      <button className={style.update_btn} onClick={onUpdateInfo}>
        {t("update")}
      </button>
      {disabled && <QLoader />}
      {assignHead && (
        <AssignStaffModal
          assignHead={assignHead}
          headSelect={onSelectLeading}
          title={t("select_leading_person")}
          onClose={() => setAssignHead((pre) => !pre)}
        />
      )}
    </>
  );
};

export default SiteLandingPage;
