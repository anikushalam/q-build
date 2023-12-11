import React, { useCallback } from "react";
import style from "../../../Home/components/Header/NewHeader/HeaderIns.module.css";
import { useState } from "react";
import verifyUserNameSpaces from "../../verifyUserNameSpaces";
import { TextInput } from "../InputWithoutIcon/InputWithoutIcon";
import Crop from "../../../ImageCrop/Crop";
import { Dialog } from "@mui/material";
import { useTranslation } from "react-i18next";
import { InputDateWithoutIcon } from "../../../Custom/Input/InputDateField";
import SelectOptions from "./SelectOptions";
import ButtonWithAction from "../../../Custom/Button/ButtonWithAction";
import { useUserSignup } from "../../Signup/UserSignUp/components/use-user-signup";
import { Notfication } from "../../../validation/Snackbar";
import ButtonWithTypeSubmit from "../../../Custom/Button/ButtonWithTypeSubmit";
import { useEffect } from "react";
import { imageShowUrl2 } from "../../../services/BaseUrl";
import { debounce } from "lodash";
import { withCurrentDate } from "../../../Functions/timeComparison/timeComparison";

function SignUpForm({ userData, setUserId, setStatus }) {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const [formData, setFormData] = useState({
    userName: "",
    name: "",
    gender: "",
  });
  const [file, setFile] = useState("");
  const [dateInput, setDateInput] = useState();
  const [isOpen, setIsOpen] = useState(false);
  const [openCrop, setOpenCrop] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [notificationState, setNotificationState] = useState({
    msg: "",
    run: false,
  });
  const { registerAccount, validInput, verifyUsername } = useUserSignup();
  const profileImgChange = (e) => {
    const image = URL.createObjectURL(e.target.files[0]);
    setFile(e.target.files[0]);
    setProfilePhoto(image);
    setPhotoURL(image);
    setOpenCrop(true);
  };
  const removeImg = () => {
    setFile("");
  };

  useEffect(() => {
    if (formData.userName) {
      const resp = verifyUserNameSpaces(formData.userName);
      if (resp) {
        setNotificationState({
          msg: t("special_char"),
          run: true,
        });
      }
    }
  }, [formData.userName]);

  const debouncUsernameSearch = useCallback(
    debounce((val) => verifyUsername(val), 500),
    []
  );
  const searchHandler = (val) => {
    debouncUsernameSearch(val);
    setFormData({ ...formData, userName: val });
  };

  const onDateFunction = (val) => {
    const dobCorrect = withCurrentDate(val);
    if (dobCorrect) {
      let splitDate = val?.split("/");
      let dob = `${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`;
      setDateInput(dob);
    } else {
      setNotificationState({
        msg: "You cannot select upcoming date",
        run: true,
      });
    }
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setDisabled((pre) => !pre);
    const resp = verifyUserNameSpaces(formData?.name);
    if (resp) {
      setNotificationState({
        msg: t("special_char"),
        run: true,
      });
      setDisabled((pre) => !pre);
    } else {
      const data = await registerAccount({
        id: userData.phoneNumber,
        file: file,
        userLegalName: formData.name,
        username: formData.userName,
        userGender: formData.gender,
        userDateOfBirth: dateInput,
      });
      if (data?.msg) {
        setNotificationState({
          msg: data?.msg,
          run: true,
        });
        setDisabled((pre) => !pre);
      } else {
        setUserId(data?._id);
        setStatus("CREATE_PASSWORD");
        setDisabled((pre) => !pre);
      }
    }
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <div className={`${style.card} ${style.cardposition}`}>
        <h6 className={style.cardhdark}>{t("create_profile")}</h6>
        <p className={`${style.pusername} ${style.ptoc}`}>
          {t("enter_ur_detail")}
        </p>

        {file === "" && (
          <div className={style.logo_Container}>
            <label htmlFor="img" style={{ cursor: "pointer" }}>
              <img
                className={style.userLogo}
                src={`${imageShowUrl2}/userLogo-image.svg`}
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
          <div className={style.logo_Container}>
            <div className={style.userLogoContainer}>
              <img className={style.userLogo} src={photoURL} alt="Avatar" />
              <img
                onClick={removeImg}
                className={style.cloose}
                src={`${imageShowUrl2}/user_signup/close.svg`}
                alt="Avatar"
              />
            </div>
          </div>
        )}

        <div className={style.inputs_container}>
          <TextInput
            label={t("name")}
            placeholder={t("please_enter_full_name")}
            value={formData.name}
            handleChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            customStyleInput={{
              width: "100%",
              padding: "0.6rem",
              marginBottom: "0.75rem",
            }}
          />

          <TextInput
            label={t("username")}
            labelsmall={t("example_username")}
            placeholder={t("create_username")}
            value={formData.userName}
            handleChange={(e) => searchHandler(e.target.value)}
            customStyleInput={{
              width: "100%",
              padding: "0.6rem",
            }}
          />
          {!["valid", ""]?.includes(validInput?.username) && (
            <span className={style.errorspan}>
              {t("username_is_already_exits")}
            </span>
          )}

          <p className={style.specialChar}>
            {t("uname_desc")} . {t("uname_desc2")}
          </p>

          <InputDateWithoutIcon
            customStyleInput={{
              width: "100%",
              height: "2.2rem",
              padding: "1rem 0.5rem",
            }}
            datePickerPosition={{
              top: "-17rem",
              left: "1rem",
              borderRadius: "0.375rem",
              paddingBottom: "0",
            }}
            dateItemStyle={{
              padding: "0.25rem",
            }}
            range={false}
            label={t("dob")}
            dateInput={dateInput}
            setDateInput={onDateFunction}
          />
          <h3 className={style.input_label}>{t("gender")}</h3>
          <div
            className={
              isOpen
                ? `${style.formselectactive} ${style.formselect}`
                : style.formselect
            }
            onClick={() => setIsOpen(!isOpen)}
          >
            {formData.gender === "male" ? (
              <h6 className={style.genderh} onClick={() => setIsOpen(true)}>
                {t("male")}
              </h6>
            ) : formData.gender === "female" ? (
              <h6 className={style.genderh} onClick={() => setIsOpen(true)}>
                {t("female")}
              </h6>
            ) : formData.gender === "other" ? (
              <h6 className={style.genderh} onClick={() => setIsOpen(true)}>
                {t("other")}
              </h6>
            ) : (
              <h6
                className={`${style.genderplaceholder} ${style.genderh}`}
                onClick={() => setIsOpen(true)}
              >
                {t("gender_details")}
              </h6>
            )}

            {isOpen ? (
              <img
                className={`${style.updownIcon} ${style.downIcon}`}
                src={`${imageShowUrl2}/up-triangle-icon.svg`}
                alt=""
              />
            ) : (
              <img
                className={style.upIcon}
                src={`${imageShowUrl2}/downn-icon.svg`}
                alt=""
              />
            )}
            <SelectOptions
              open={isOpen}
              onClose={() => setIsOpen(false)}
              setFormData={setFormData}
              formData={formData}
            />
          </div>
        </div>

        <div className={style.btn_container}>
          {formData.userName !== "" &&
          formData.name !== "" &&
          dateInput !== "" &&
          formData.gender !== "" &&
          file !== "" &&
          ["valid", ""]?.includes(validInput?.username) ? (
            <ButtonWithTypeSubmit
              buttonText={t("continue_proceed")}
              type="submit"
              disabled={disabled}
              shwoLoader={true}
              customStyleButton={{
                minHeight: "2.3rem",
                marginTop: "1rem",
                marginBottom: "1rem",
              }}
              customStyleButtonText={{
                fontSize: "1rem",
              }}
            />
          ) : (
            <ButtonWithAction
              buttonText={t("continue_proceed")}
              disabled={true}
              shwoLoader={false}
              customStyleButton={{
                minHeight: "2.3rem",
                marginTop: "1rem",
                marginBottom: "1rem",
                background: "#dfdbdb",
              }}
              customStyleButtonText={{
                fontSize: "1rem",
                color: "rgba(18, 18, 18, 0.6)",
              }}
            />
          )}
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
        {notificationState.run && (
          <Notfication
            msg={notificationState.msg}
            run={notificationState.run}
            setRun={() => setNotificationState({ msg: "", run: false })}
            postiton="bottom"
            type="error"
          />
        )}
      </div>
    </form>
  );
}

export default SignUpForm;
