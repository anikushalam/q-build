import { useTranslation } from "react-i18next";
import React, { useState, useRef, useEffect, useCallback } from "react";
import GetPinArray from "../GetPinArray";
import style from "./component.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import verifyUserNameSpaces from "../../../verifyUserNameSpaces";
import SigninHeader from "../../../Login/Components/SigninHeader";
import { useInstituteSignup } from "./use-institute-signup";
import ButtonWithTypeSubmit from "../../../../Custom/Button/ButtonWithTypeSubmit";
import ButtonWithAction from "../../../../Custom/Button/ButtonWithAction";
import { debounce } from "lodash";

function RegisterIns({ instituteData, setInstituteId, setActiveTab }) {
  const { registerAccount, verifyUsername, verifyEmail, validInput } =
    useInstituteSignup();
  const { t } = useTranslation();
  const [count, setCount] = useState(1);
  const [pinDistrict, setPinDistrict] = useState([]);
  const [pinState, setPinState] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [formErrors1, setFormErrors1] = useState({});
  const [formErrors2, setFormErrors2] = useState({});
  const [formErrors3, setFormErrors3] = useState({});
  const [submitIndex, setSubmitIndex] = useState(null);
  const [formData, setFormData] = useState({
    insName: "",
    name: "",
    insEmail: "",
    insMode: instituteData?.mode,
    insType: instituteData?.type,
    insAddress: "",
    insState: "",
    insDistrict: "",
    insPincode: "",
    insAbout: "",
    insPhoneNumber: instituteData?.phoneNumber,
    insMobileStatus: instituteData?.mobileStatus,
    userId: "",
  });

  React.useEffect(() => {
    setFormData((pre) => ({
      ...pre,
      insPhoneNumber: instituteData?.phoneNumber,
      insMobileStatus: instituteData?.mobileStatus,
      insMode: instituteData?.mode,
      insType: instituteData?.type,
    }));
  }, [
    instituteData?.phoneNumber,
    instituteData?.type,
    instituteData?.mode,
    instituteData?.mobileStatus,
  ]);
  const validateS1 = (values) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    // /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const errors = {};

    const resp = verifyUserNameSpaces(formData && formData.name);

    if (!values.insName) {
      errors.insName = "Institute name is required!";
    }
    if (!values.name) {
      errors.name = "Institute user name is required!";
    } else if (resp) {
      errors.name = "Special Character not allowed";
    }

    if (!values.insEmail) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.insEmail)) {
      errors.email = "This is not a valid email format!";
    }

    return errors;
  };

  const validateS2 = (values) => {
    const errors = {};

    if (!values.insAddress) {
      errors.address = "Address is required!";
    }
    if (!values.insPincode) {
      errors.pincode = "Pincode is required!";
    }

    // if (!values.insState) {
    //   errors.state = "State is required!";
    // }

    // if (!values.insDistrict) {
    //   errors.district = "District is required!";
    // }

    return errors;
  };

  const count1Click = () => {
    if (validInput.email === "valid" && validInput.username === "valid") {
      setFormErrors1(validateS1(formData));
      setSubmitIndex(1);
    }
  };

  const count3Click = (e) => {
    e.preventDefault();

    setFormErrors3(validateS2(formData));
    setSubmitIndex(3);
  };

  const click2One = () => {
    if (count === 3) {
      setCount(1);
      step3Ref.current.style.display = "none";
      step1Ref.current.style.display = "block";
      step2Ref.current.style.display = "none";
    } else if (count === 2) {
      setCount(1);
      step2Ref.current.style.display = "none";
      step1Ref.current.style.display = "block";
      step3Ref.current.style.display = "none";
    }
  };

  const step1Ref = useRef(null);
  const step2Ref = useRef(null);
  const step3Ref = useRef(null);

  const handleFormSubmit = async () => {
    setDisabled((pre) => !pre);
    const data = await registerAccount(formData);
    if (data?._id) {
      setInstituteId(data?._id);
      setActiveTab("CREATE_PASSWORD");
      setDisabled((pre) => !pre);
    }
  };

  useEffect(() => {
    if (Object.keys(formErrors1).length === 0 && submitIndex === 1) {
      setCount(2);
      step1Ref.current.style.display = "none";
      step2Ref.current.style.display = "block";
    }
    if (Object.keys(formErrors2).length === 0 && submitIndex === 3) {
      handleFormSubmit();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formErrors1, formErrors2, formErrors3]);

  const debouncUsernameSearch = useCallback(
    debounce((val) => verifyUsername(val), 500),
    []
  );
  const searchHandler = (val) => {
    debouncUsernameSearch(val);
    setFormData({ ...formData, name: val });
  };

  const debouncEmailSearch = useCallback(
    debounce((val) => verifyEmail(val), 500),
    []
  );
  const searchEmailHandler = (val) => {
    debouncEmailSearch(val);
    setFormData({ ...formData, insEmail: val });
  };

  return (
    <>
      <div className={style.modalContainerr}>
        <div className={style.loginLogo} style={{ marginTop: "15px" }}>
          {count === 1 && (
            <img
              className={style.backText}
              src="/images/back-text.svg"
              alt="not found"
              onClick={() => setActiveTab("INSTITUTE_MODE")}
            />
          )}
          {count === 2 && (
            <img
              className={style.backText}
              src="/images/back-text.svg"
              alt="not found"
              onClick={() => {
                click2One();
              }}
            />
          )}

          {/* <SigninHeader status="login" /> */}
        </div>

        <div className={`${style.form} ${style.forggotPassForm}`}>
          <form onSubmit={count3Click} encType="multipart/form-data" noValidate>
            <h3>{t("register-institute")}</h3>

            <p>{t("enter_ins_details")}</p>

            <div ref={step1Ref} className={style.step1}>
              <div className={style.userNamecontainer}>
                <img
                  className={style.regIcon}
                  src="/images/ins-mode-icon.svg"
                  alt="not found"
                />
                <input
                  type="text"
                  required
                  name="insName"
                  placeholder={t("institute_name")}
                  value={formData.insName}
                  onChange={(e) =>
                    setFormData({ ...formData, insName: e.target.value })
                  }
                />
                <span className={style.errorspan}>{formErrors1?.insName}</span>
              </div>
              <div className={style.userNamecontainer}>
                <img
                  className={style.regIcon}
                  src="/images/user-name-icon.svg"
                  alt="not found"
                />

                <input
                  required
                  type="text"
                  name="name"
                  placeholder={t("user_name")}
                  value={formData.name}
                  onChange={(e) => searchHandler(e.target.value)}
                />
                <span className={style.errorspan}>{formErrors1?.name}</span>
                {!["valid", ""]?.includes(validInput?.username) && (
                  <span className={style.errorspan}>
                    {t("username_is_already_exits")}
                  </span>
                )}
                {!formErrors1?.name && (
                  <div className={style.usernamerule}>
                    <span className={style.usernamespan}>
                      {t("uname_desc")}
                    </span>
                    <span className={style.usernamespan}>
                      {t("uname_desc2")}
                    </span>
                  </div>
                )}
              </div>
              <div
                className={`${style.userNamecontainer} ${style.userNameRuleBottom}`}
              >
                <img
                  style={{ top: "14px" }}
                  className={style.regIcon}
                  src="/images/mail-icon.svg"
                  alt="not found"
                />
                <input
                  required
                  type="email"
                  placeholder={t("email")}
                  name="insEmail"
                  value={formData.insEmail}
                  onChange={(e) => searchEmailHandler(e.target.value)}
                />
                <span className={style.errorspan}>{formErrors1?.email}</span>
                {!["valid", ""]?.includes(validInput?.email) && (
                  <span className={style.errorspan}>
                    {t("email_is_already_exits")}
                  </span>
                )}
              </div>
            </div>

            <div ref={step2Ref} className={style.step2}>
              <div className={style.userNamecontainer}>
                <img
                  alt="not found"
                  className={style.username}
                  src="/images/location-icon.svg"
                />
                <input
                  required
                  type="text"
                  placeholder={t("address")}
                  name="insAddress"
                  value={formData.insAddress}
                  onChange={(e) =>
                    setFormData({ ...formData, insAddress: e.target.value })
                  }
                />
                <span className={style.errorspan}>{formErrors2?.address}</span>
              </div>
              <div className={style.userNamecontainer}>
                <img
                  className={style.regIcon}
                  src="/images/pin-code-icon.svg"
                  alt="not found"
                />
                <input
                  required
                  type="tel"
                  maxLength="6"
                  minLength="6"
                  placeholder={t("pincode")}
                  name="insPincode"
                  value={formData.insPincode}
                  onChange={(e) => {
                    setFormData({ ...formData, insPincode: e.target.value });
                    // GetPinArray(e.target.value, setPinDistrict, setPinState);
                  }}
                />
                <span className={style.errorspan}>{formErrors2?.pincode}</span>
              </div>
              <div className={style.userNamecontainer}>
                <img
                  className={style.regIcon}
                  src="/images/state-icon.svg"
                  alt="not found"
                />
                <select
                  id="select1"
                  // required
                  aria-label="Default select example"
                  name="insState"
                  // value={formData.insstate}
                  onChange={(e) =>
                    setFormData({ ...formData, insState: e.target.value })
                  }
                >
                  <option disabled selected>
                    {t("select_state")}
                  </option>
                  <option>{pinState && pinState}</option>
                </select>
                <span className={style.errorspan}>{formErrors2?.state}</span>
              </div>
              <div className={style.userNamecontainer}>
                <img
                  className={style.regIcon}
                  src="/images/district-icon.svg"
                  alt="not found"
                />
                <select
                  id="select2"
                  // required
                  aria-label="Default select example"
                  name="insDistrict"
                  // value={formData.insDistrict}
                  onChange={(e) =>
                    setFormData({ ...formData, insDistrict: e.target.value })
                  }
                >
                  <option disabled selected>
                    {t("select_district")}
                  </option>
                  {pinDistrict &&
                    pinDistrict.map((pt) => <option key={pt}>{pt}</option>)}
                </select>
                <span className={style.errorspan}>{formErrors3?.district}</span>
              </div>
            </div>

            <div ref={step3Ref} className={style.step3}>
              <div className={style.userNamecontainer}>
                <img
                  className={style.regIcon}
                  src="/images/district-icon.svg"
                  alt="not found"
                />
                <select
                  id="select2"
                  required
                  aria-label="Default select example"
                  name="insDistrict"
                  // value={formData.insDistrict}
                  onChange={(e) =>
                    setFormData({ ...formData, insDistrict: e.target.value })
                  }
                >
                  <option disabled selected>
                    {t("select_district")}
                  </option>
                  {pinDistrict &&
                    pinDistrict.map((pt) => <option key={pt}>{pt}</option>)}
                </select>
                <span className={style.errorspan}>{formErrors3?.district}</span>
              </div>

              <div className={style.userNamecontainer}>
                <img
                  className={style.regIcon}
                  src="/images/about-ins-icon.svg"
                  alt="not found"
                />

                <input
                  type="text"
                  placeholder={t("enter_username_of_user")}
                  name="userId"
                  value={formData.userId}
                  onChange={(e) =>
                    setFormData({ ...formData, userId: e.target.value })
                  }
                />
              </div>
            </div>
            <div>
              {count === 2 &&
                formData.insAddress !== "" &&
                formData.insPincode !== "" && (
                  // &&
                  // formData.insState !== "" &&
                  // formData.insDistrict !== ""
                  <ButtonWithTypeSubmit
                    buttonText={t("submit")}
                    type="submit"
                    disabled={disabled}
                    shwoLoader={true}
                    customStyleButton={{
                      marginTop: "2vw",
                      minHeight: "2.3rem",
                      backgroundColor: "#575caa",
                    }}
                  />
                )}

              {count === 2 &&
                (formData.insAddress === "" || formData.insPincode === "") && (
                  //  ||
                  // formData.insState === "" ||
                  // formData.insDistrict === ""
                  <ButtonWithAction
                    buttonText={t("submit")}
                    disabled={true}
                    shwoLoader={false}
                    customStyleButton={{
                      marginTop: "2vw",
                      minHeight: "2.3rem",
                      backgroundColor: "#575caa",
                      color: "rgba(18, 18, 18, 0.6)",
                    }}
                  />
                )}

              {count === 1 &&
                formData.insName !== "" &&
                formData.name !== "" &&
                formData.insEmail !== "" &&
                validInput.email === "valid" &&
                validInput.username === "valid" && (
                  <div
                    className={`${style.submitbtn} mt-4`}
                    style={{ minHeight: "2.3rem", backgroundColor: "#575caa" }}
                    onClick={count1Click}
                  >
                    <p>{t("next")}</p>
                  </div>
                )}

              {count === 1 &&
                (formData.insName === "" ||
                  formData.name === "" ||
                  formData.insEmail === "" ||
                  validInput.email === "invalid" ||
                  validInput.username === "invalid") && (
                  <div
                    className={`${style.submitbtn} ${style.submitDisable} mt-4`}
                    onClick={count1Click}
                  >
                    <p>{t("next")}</p>
                  </div>
                )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default RegisterIns;
