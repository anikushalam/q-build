import React from "react";
import {
  applyFormLabelOtherPersonalInfo,
  applyFormLabelIdentityDetails,
  applyFormLabelAddressInfo,
  applyFormLabelBanksInfo,
  applyFormLabelPreviousSchoolAndDocument,
} from "../../constant/constant_value";
import style from "../Student/Form/JoinForm.module.css";
import { useTranslation } from "react-i18next";
import BorderBottom from "../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import JoinFormInputView from "../Student/Form/JoinFormInputView";
import JoinFormFileView from "../Student/Form/JoinFormFileView";
import ButtonWithTypeSubmit from "../../Custom/Button/ButtonWithTypeSubmit";
function StaffDetails({
  staffForm,
  dynamicForm,
  formData,
  dynamicFormDocument,
  dynamicDocument,
  fileUrl,
  formSetting,
  onApplyStaffForm,
  location,
  staffPhoneNumberAdd,
  showingExistingUser,
  selectedUser,
}) {
  const { t } = useTranslation();

  const onFormSubmit = (e) => {
    e.preventDefault();
    onApplyStaffForm();
  };
  return (
    <>
      <form onSubmit={onFormSubmit}>
        <div className={style.form_container}>
          {location?.openAs === "INSTITUTE_SIDE" && (
            <>
              <div className={style.form_other_field}>
                <JoinFormInputView
                  labelText={t("form_mobile_no_label")}
                  value={staffPhoneNumberAdd}
                  customStyleContainer={{
                    width: "49.5%",
                  }}
                  customStyleLabel={{
                    marginRight: "0",
                  }}
                />
                {showingExistingUser?.map((usr) =>
                  usr?._id === selectedUser ? (
                    <JoinFormInputView
                      labelText={t("existing_account")}
                      value={`${usr?.userLegalName} - (${usr?.username})`}
                      customStyleContainer={{
                        width: "49.5%",
                      }}
                    />
                  ) : (
                    ""
                  )
                )}
              </div>

              <BorderBottom
                customStyle={{
                  width: "104.5%",
                  marginTop: "15px",
                  marginLeft: "-24px",
                }}
              />
            </>
          )}
          <h4>{t("form_personal_info_label")}:</h4>
          <div className={style.form_container_profile}>
            <div
              style={{
                width: "86%",
              }}
            >
              <JoinFormInputView
                labelText={t("form_name_label")}
                value={`${formData?.staffFirstName} ${
                  formData?.staffMiddleName ? formData?.staffMiddleName : ""
                } ${formData?.staffLastName}`}
                customStyleContainer={{
                  width: "100%",
                }}
              />
              <div
                style={{
                  width: "100%",
                  display: "flex",
                }}
              >
                <JoinFormInputView
                  labelText={t("form_gender_label")}
                  value={formData.staffGender}
                  customStyleContainer={{
                    width: "49.5%",
                  }}
                />
                <JoinFormInputView
                  labelText={t("form_date_of_birth_label")}
                  value={formData.staffDOB}
                  customStyleContainer={{
                    width: "49.5%",
                  }}
                />
              </div>
            </div>

            <div className={style.form_container_profile_image}>
              <label
                htmlFor="profile"
                className={style.form_container_profile_image_label}
              >
                <img
                  className={style.form_container_profile_photo}
                  src={fileUrl ? fileUrl : "/images/ins_default_profile.svg"}
                  alt="staff avatar"
                />
              </label>
            </div>
          </div>
          <div className={style.form_profile_info}>
            <JoinFormInputView
              labelText={t("form_mother_name_label")}
              value={formData.staffMotherName}
            />
          </div>
          <BorderBottom
            customStyle={{
              width: "104.5%",
              marginTop: "15px",
              marginLeft: "-24px",
            }}
          />
          {formSetting?.otherPersonalInfo && (
            <>
              <h4>{t("form_other_personal_info_label")}:</h4>
              <div className={style.form_other_field}>
                {dynamicForm?.map((formField) =>
                  applyFormLabelOtherPersonalInfo.map(
                    (exitingLabel) =>
                      exitingLabel?.lists?.includes(formField) &&
                      (exitingLabel?.type ? (
                        <JoinFormInputView
                          key={exitingLabel?.id}
                          labelText={t(exitingLabel?.label)}
                          value={staffForm[formField]}
                          customStyleContainer={{
                            width: "49.5%",
                          }}
                        />
                      ) : (
                        <JoinFormInputView
                          key={exitingLabel?.id}
                          labelText={t(exitingLabel?.label)}
                          value={staffForm[formField]}
                          customStyleContainer={{
                            width: "49.5%",
                          }}
                        />
                      ))
                  )
                )}
              </div>
              <BorderBottom
                customStyle={{
                  width: "104.5%",
                  marginTop: "15px",
                  marginLeft: "-24px",
                }}
              />
            </>
          )}
          {formSetting?.identityDetails && (
            <>
              <h4>{t("form_identity_details_label")}:</h4>
              <div className={style.form_other_field}>
                {dynamicForm?.map((formField) =>
                  applyFormLabelIdentityDetails.map(
                    (exitingLabel) =>
                      exitingLabel?.lists?.includes(formField) &&
                      (exitingLabel?.type ? (
                        <JoinFormInputView
                          key={exitingLabel?.id}
                          labelText={t(exitingLabel?.label)}
                          value={staffForm[formField]}
                          customStyleContainer={{
                            width: "49.5%",
                          }}
                        />
                      ) : (
                        <JoinFormInputView
                          key={exitingLabel?.id}
                          labelText={t(exitingLabel?.label)}
                          value={staffForm[formField]}
                          customStyleContainer={{
                            width: "49.5%",
                          }}
                        />
                      ))
                  )
                )}
              </div>
              <BorderBottom
                customStyle={{
                  width: "104.5%",
                  marginTop: "15px",
                  marginLeft: "-24px",
                }}
              />
            </>
          )}
          {formSetting?.addressInfo && (
            <>
              <h4>{t("form_address_info_label")}:</h4>
              <div className={style.form_other_field}>
                {dynamicForm?.map((formField) =>
                  applyFormLabelAddressInfo.map(
                    (exitingLabel) =>
                      exitingLabel?.lists?.includes(formField) &&
                      (exitingLabel?.type ? (
                        <JoinFormInputView
                          key={exitingLabel?.id}
                          labelText={t(exitingLabel?.label)}
                          value={staffForm[formField]}
                          customStyleContainer={{
                            width: "49.5%",
                          }}
                          // viewAs="TEXTAREA"
                        />
                      ) : exitingLabel?.checkbox ? (
                        ""
                      ) : (
                        <JoinFormInputView
                          key={exitingLabel?.id}
                          labelText={t(exitingLabel?.label)}
                          value={staffForm[formField]}
                          customStyleContainer={{
                            width: "49.5%",
                          }}
                        />
                      ))
                  )
                )}
              </div>
              <BorderBottom
                customStyle={{
                  width: "104.5%",
                  marginTop: "15px",
                  marginLeft: "-24px",
                }}
              />
            </>
          )}
          {formSetting?.previousSchoolAndDocument?.previousSchoolDocument && (
            <>
              <h4>{t("form_previous_school_document_label")}:</h4>
              <div className={style.form_other_field}>
                {dynamicFormDocument?.map((formField) =>
                  applyFormLabelPreviousSchoolAndDocument.map(
                    (exitingLabel) =>
                      exitingLabel?.lists?.includes(formField) &&
                      (exitingLabel?.fileType ? (
                        <JoinFormFileView
                          key={exitingLabel?.id}
                          labelText={t(exitingLabel?.label)}
                          value={dynamicDocument[formField]}
                          customStyleContainer={{
                            width: "49.5%",
                          }}
                        />
                      ) : exitingLabel?.checkbox ? (
                        ""
                      ) : (
                        !dynamicDocument?.previousSchoolDocument && (
                          <JoinFormInputView
                            key={exitingLabel?.id}
                            labelText={t(exitingLabel?.label)}
                            value={dynamicDocument[formField]}
                            customStyleContainer={{
                              width: "49.5%",
                            }}
                          />
                        )
                      ))
                  )
                )}
              </div>
              <BorderBottom
                customStyle={{
                  width: "104.5%",
                  marginTop: "15px",
                  marginLeft: "-24px",
                }}
              />
            </>
          )}
          {formSetting?.bankDetails && (
            <>
              <h4>{t("form_staff_bank_details_label")}:</h4>
              <div className={style.form_other_field}>
                {dynamicForm?.map((formField) =>
                  applyFormLabelBanksInfo.map(
                    (exitingLabel) =>
                      exitingLabel?.lists?.includes(formField) &&
                      (exitingLabel?.fileType ? (
                        <JoinFormFileView
                          key={exitingLabel?.id}
                          labelText={t(exitingLabel?.label)}
                          value={staffForm[formField]}
                          customStyleContainer={{
                            width: "49.5%",
                          }}
                        />
                      ) : (
                        <JoinFormInputView
                          key={exitingLabel?.id}
                          labelText={t(exitingLabel?.label)}
                          value={staffForm[formField]}
                          customStyleContainer={{
                            width: "49.5%",
                          }}
                        />
                      ))
                  )
                )}
              </div>
            </>
          )}
          <ButtonWithTypeSubmit
            type={"submit"}
            buttonText={t("submit")}
            customStyleButton={{ marginTop: "1.5vw" }}
          />
        </div>
      </form>
    </>
  );
}

export default StaffDetails;
