import React, { useEffect, useState } from "react";
import style from "./component.module.css";
import { Notfication } from "../../../../validation/Snackbar";
import verifyUserNameSpaces from "../../../verifyUserNameSpaces";
import Crop from "../../../../ImageCrop/Crop";
import { Dialog } from "@mui/material";
import SigninHeader from "../../../Login/Components/SigninHeader";
import ButtonWithAction from "../../../../Custom/Button/ButtonWithAction";
import { useUserSignup } from "./use-user-signup";
import { useTranslation } from "react-i18next";
import ButtonWithTypeSubmit from "../../../../Custom/Button/ButtonWithTypeSubmit";

const BUTTON_WRAPPER_STYLES = {
  position: "relative",
  // zIndex: 1,
};

const MODAL_STYLES = {
  position: "absolute",
  left: "0",
  top: "3.2vw",
  zIndex: 10,
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,

  zIndex: 10,
};

function Options({ open, onClose, setFormData, formData }) {
  const { t } = useTranslation();
  if (!open) return null;
  return (
    <>
      <div onClick={onClose} style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES} className={style.options}>
        <div
          className={style.option}
          onClick={() => {
            setFormData({
              ...formData,
              gender: "male",
            });
            onClose();
          }}
        >
          {t("male")}
        </div>
        <div
          className={style.option}
          onClick={() => {
            setFormData({
              ...formData,
              gender: "female",
            });
            onClose();
          }}
        >
          {t("female")}
        </div>
        <div
          className={style.option}
          onClick={() => {
            setFormData({
              ...formData,
              gender: "other",
            });
            onClose();
          }}
        >
          {t("other")}
        </div>
      </div>
    </>
  );
}

function RegisterUser({ userData, setUserId, setActiveTab }) {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    userName: "",
    name: "",
    dob: "",
    gender: "",
    phoneNumber: "",
  });
  const [file, setFile] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [openCrop, setOpenCrop] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [notificationState, setNotificationState] = useState({
    msg: "",
    run: false,
  });
  const { registerAccount } = useUserSignup();

  if (false) {
    setProfilePhoto(profilePhoto);
  }

  const removeImg = () => {
    setFile("");
  };

  const validation = (val) => {
    const resp = verifyUserNameSpaces(val && val?.userName);
    const errors = {};

    if (!val.name) {
      errors.name = "Name is required!";
    }
    if (!val.userName) {
      errors.username = "User name is required!";
    } else if (resp) {
      errors.username = "Special Character not allowed";
    }

    if (!file) {
      setNotificationState({
        msg: "Please Select Image",
        run: true,
      });
    }

    return errors;
  };

  const submitClick = (e) => {
    e.preventDefault();
    setFormErrors(validation(formData));
    setIsSubmit(true);
  };

  const handleFormSubmit = async () => {
    setDisabled((pre) => !pre);
    const resp = verifyUserNameSpaces(formData?.name);
    if (resp) {
      setNotificationState({
        msg: "Special Character not allowed...",
        run: true,
      });
    } else {
      const data = await registerAccount({
        id: userData.phoneNumber,
        file: file,
        userLegalName: formData.name,
        username: formData.userName,
        userGender: formData.gender,
        userDateOfBirth: formData.dob,
      });
      if (data?.msg) {
        setNotificationState({
          msg: data?.msg,
          run: true,
        });
        setDisabled((pre) => !pre);
      } else {
        setUserId(data?._id);
        setActiveTab("CREATE_PASSWORD");
        setDisabled((pre) => !pre);
      }
    }
  };

  const profileImgChange = (e) => {
    const image = URL.createObjectURL(e.target.files[0]);
    setFile(e.target.files[0]);
    setProfilePhoto(image);
    setPhotoURL(image);
    setOpenCrop(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      handleFormSubmit();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formErrors]);

  console.info(formErrors);

  return (
    <>
      {notificationState.run && (
        <Notfication
          msg={notificationState.msg}
          run={notificationState.run}
          setRun={() => setNotificationState({ msg: "", run: false })}
          postiton="bottom"
          type="error"
        />
      )}
      <div className={` ${style.container}`}>
        <div className={style.loginLogo}>
          <a href="/">
            <img src="/images/career/newLogo.svg" alt="not found" />
          </a>
          <SigninHeader status="login" />
        </div>

        <div
          className={style.loginLogoProfileImg}
          style={{ marginTop: "15px" }}
        >
          {file !== "" && (
            <div>
              <label htmlFor="img" style={{ cursor: "pointer" }}>
                <img
                  className={style.userLogo}
                  src="/images/userLogo-image.svg"
                  alt=""
                />
              </label>
              <input
                className={style.upload}
                id="img"
                name="file"
                multiple
                onChange={profileImgChange}
                type="file"
                accept="image/gif, image/jpeg, image/png"
              />
            </div>
          )}

          {file !== "" && (
            <div className={style.userLogoContainer}>
              <img
                className={style.userLogo}
                src={URL.createObjectURL(file)}
                alt="Avatar"
              />
              <img
                onClick={removeImg}
                className={style.cloose}
                src="/images/user_signup/close.svg"
                alt="Avatar"
              />
            </div>
          )}
        </div>

        <div className={style.form}>
          <form encType="multipart/form-data" noValidate onSubmit={submitClick}>
            <h3>{t("Create_profile")}</h3>
            <p className={style.enterdetails}>{t("enter_details")}</p>

            <div className={style.userNamecontainer}>
              <img
                className={style.regIcon}
                src="/images/user_signup/name.svg"
                alt="not found"
              />
              <input
                type="text"
                required
                name="name"
                placeholder={t("name")}
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <span className={style.errorspan}>{formErrors?.name}</span>
            </div>

            <div className={style.userNamecontainer}>
              <img
                className={style.regIcon}
                src="/images/user_signup/username.svg"
                alt="not found"
              />

              <input
                required
                type="text"
                name="userName"
                placeholder={t("username")}
                value={formData.userName}
                onChange={(e) =>
                  setFormData({ ...formData, userName: e.target.value })
                }
              />
              <span className={style.errorspan}>{formErrors?.username}</span>
            </div>

            <div className={style.userNamecontainer}>
              <img
                className={style.regIcon}
                src="/images/user_signup/dob.svg"
                alt="not found"
              />

              <input
                required
                type="date"
                name="dob"
                placeholder={t("dob")}
                value={formData.dob}
                onChange={(e) =>
                  setFormData({ ...formData, dob: e.target.value })
                }
              />
            </div>

            <div
              className={`${style.userNamecontainer} ${style.containerMargin}`}
              style={BUTTON_WRAPPER_STYLES}
            >
              <img
                className={style.regIcon}
                src="/images/user_signup/gender.svg"
                alt="not found"
              />
              <div
                className={style.formselect}
                onClick={() => setIsOpen(!isOpen)}
              >
                {formData.gender === "male" ? (
                  <h6 onClick={() => setIsOpen(true)}>{t("male")}</h6>
                ) : formData.gender === "female" ? (
                  <h6 onClick={() => setIsOpen(true)}>{t("female")}</h6>
                ) : formData.gender === "other" ? (
                  <h6 onClick={() => setIsOpen(true)}>{t("other")}</h6>
                ) : (
                  <h6 onClick={() => setIsOpen(true)}>{t("gender")}</h6>
                )}
                {isOpen ? (
                  <img
                    className={style.up}
                    src="/images/up-triangle-icon.svg"
                    alt=""
                  />
                ) : (
                  <img
                    className={style.down}
                    src="/images/downn-icon.svg"
                    alt=""
                  />
                )}
              </div>

              <Options
                open={isOpen}
                onClose={() => setIsOpen(false)}
                setFormData={setFormData}
                formData={formData}
              />
            </div>

            {formData.userName !== "" &&
            formData.name !== "" &&
            formData.dob !== "" &&
            formData.gender !== "" &&
            file !== "" ? (
              <ButtonWithTypeSubmit
                buttonText={t("submit")}
                type="submit"
                disabled={disabled}
                shwoLoader={true}
                customStyleButton={{
                  marginTop: "2vw",
                }}
              />
            ) : (
              <ButtonWithAction
                buttonText={t("submit")}
                disabled={true}
                shwoLoader={false}
                customStyleButton={{
                  marginTop: "2vw",
                  background: "#dfdbdb",
                  color: "rgba(18, 18, 18, 0.6)",
                }}
              />
            )}
          </form>
        </div>
      </div>
      {openCrop && (
        <Dialog open={openCrop}>
          <Crop
            setPhotoURL={setPhotoURL}
            photoURL={photoURL}
            setFile={setFile}
            setOpenCrop={setOpenCrop}
            setProfilePhoto={setProfilePhoto}
            first={1}
            second={1}
          />
        </Dialog>
      )}
    </>
  );
}

export default RegisterUser;
