import GetStarted from "@/Auth/GetStarted";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import style from "../../Auth.module.css";
import { assestsFeedUrl } from "@/Services/UrlConfig/AssestsBaseUrl";
import FormInput from "@/Ui/Input/FormInput";
import { useLocation, useNavigate } from "react-router-dom";
import ButtonWithTypeSubmit from "@/Ui/Button/ButtonWithTypeSubmit";
import CustomSelectKey from "@/Ui/Select/CustomSelectKey";
import { genderOption } from "@/Constant/constant_value";
import FormCalendarInput from "@/Ui/Input/FormCalendarInput";
import ImageCrop from "@/Utils/Functions/ImageCorp/ImageCrop";
import {
  existingRequiredField,
  requiredField,
} from "@/Validation/functions/checkingRequiredField";
import { invalidateAuthUsername } from "@/Validation/Auth/invalidateAuthUsername";
import { useAuthUserCreateAccount } from "@/Hooks/ApiHooks/Auth/auth-api";
import { dateOfBirthValidate } from "@/Utils/Functions/calendarValidate";
import { slashDateFormat, yearMonthDay } from "@/Utils/Functions/dateUtility";
import NotifyEvent from "@/Utils/Snackbar/NotifyEvent";
import { decryption } from "@/Services/Encryption/decrypt";

const UserCreateAccount = () => {
  const { t } = useTranslation();
  const getQuery = useLocation();
  const navigate = useNavigate();
  const [state, setState] = useState({
    username: "",
    userLegalName: "",
    userDateOfBirth: "",
    userGender: "",
  });

  const [file, setFile] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [cropOpen, setCropOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [errorField, setErrorField] = useState("");
  const [snackbar, setSnackbar] = useState({
    open: false,
    msg: "",
    variant: "error",
  });
  const [authUserCreateAccount] = useAuthUserCreateAccount();

  const onInputChange = (e) => {
    setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const onGenderSelect = (value) => {
    setState((prev) => ({
      ...prev,
      userGender: value,
    }));
  };
  const onDateChoose = (value) => {
    if (dateOfBirthValidate(value)) {
      setState((prev) => ({
        ...prev,
        userDateOfBirth: slashDateFormat(value),
      }));
    } else {
      setSnackbar({
        msg: "Date of birth is not for upcoming date",
        open: true,
        variant: "error",
      });
    }
  };
  const onFileChoose = (e) => {
    if (e.target.files?.length > 0) {
      const image = URL.createObjectURL(e.target.files[0]);
      setFile(e.target.files[0]);
      setFileUrl(image);
      setCropOpen(true);
    }
  };

  const onFileBlob = (blob) => {
    setFile(blob);
    setCropOpen(false);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    let validation = requiredField(state, ["userDateOfBirth"]);
    if (existingRequiredField(validation) && getQuery.state?.phoneNumber) {
      setDisabled((pre) => !pre);
      if (invalidateAuthUsername(state?.username))
        setSnackbar({
          msg: "Special Character not allowed in username.",
          open: true,
          variant: "error",
        });
      else {
        const formData = new FormData();
        for (let obj in state) {
          if (obj === "userDateOfBirth")
            formData.append(obj, yearMonthDay(state[obj]));
          else formData.append(obj, state[obj]);
        }
        if (file) formData.append("file", file);
        authUserCreateAccount({
          userPhoneNumber: getQuery.state?.phoneNumber,
          profileCreation: formData,
        })
          .then((res) => {
            const response = decryption(res?.data?.encrypt);
            if (response?.user?._id) {
              navigate("/user/create/account/password", {
                state: {
                  uid: response?.user?._id,
                },
              });
            } else {
              setSnackbar({
                msg: "user profile is not created",
                open: true,
                variant: "error",
              });
            }
            setDisabled((pre) => !pre);
          })
          .catch((err) => {
            setSnackbar({
              msg: `Time out of request with reason ${err}`,
              open: true,
              variant: "error",
            });
            setDisabled((pre) => !pre);
          });
      }
    } else {
      setErrorField(validation);
    }
  };
  return (
    <>
      <GetStarted>
        <div className={style.auth_card_wrapper}>
          <div className={style.auth_create_container}>
            <div>
              <h6
                className={style.auth_card_title}
                style={{
                  fontSize: "1rem",
                }}
              >
                {t("create_profile")}
              </h6>
              <h6
                className={style.auth_card_subtitle}
                style={{
                  fontSize: "0.7rem",
                }}
              >
                {t("create_profile_note")}
              </h6>
            </div>

            <label htmlFor="profile" className={style.create_profile_label}>
              <img
                src={
                  fileUrl ? fileUrl : `${assestsFeedUrl}/feed-user-avatar.svg`
                }
                alt="profile icon"
              />
            </label>
            <input
              type="file"
              accept="image/*"
              id="profile"
              style={{ display: "none" }}
              onChange={onFileChoose}
            />
          </div>
          <div
            className={style.auth_login_form}
            style={{
              marginTop: "0",
            }}
          >
            {" "}
            <form onSubmit={onSubmitHandler}>
              <FormInput
                label={t("name")}
                placeholder={t("name_placeholder")}
                name={"userLegalName"}
                value={state.userLegalName}
                type={"text"}
                onChange={onInputChange}
                errorShow={errorField["userLegalName"]}
              />
              <FormInput
                label={t("username")}
                placeholder={t("username_placeholder")}
                name={"username"}
                value={state.username}
                type={"text"}
                onChange={onInputChange}
                errorShow={errorField["username"]}
              />
              <FormCalendarInput
                label={t("date_of_birth")}
                placeholder="dd/mm/yyyy"
                name={"userDateOfBirth"}
                value={state.userDateOfBirth}
                onChange={onDateChoose}
              />
              <CustomSelectKey
                selectLabel={t("gender")}
                name="userGender"
                selectedValue={t("please_select_your_gender")}
                options={genderOption}
                defalutValue={state.userGender}
                onClick={onGenderSelect}
                errorShow={errorField["userGender"]}
              />
              <ButtonWithTypeSubmit
                type="submit"
                buttonText={t("continue_to_proceed")}
                disabled={disabled}
                customStyleButton={{
                  marginTop: "1.5rem",
                }}
              />
            </form>
          </div>
        </div>
      </GetStarted>
      {cropOpen && (
        <ImageCrop
          widthRatio={1}
          heightRatio={1}
          fileUrl={fileUrl}
          setFileUrl={setFileUrl}
          onFileBlob={onFileBlob}
          onClose={setCropOpen}
        />
      )}
      <NotifyEvent eventState={snackbar} eventStateHandler={setSnackbar} />
    </>
  );
};

export default UserCreateAccount;
