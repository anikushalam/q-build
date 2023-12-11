import React from "react";
import {
  applyFormLabelOtherPersonalInfo,
  applyFormLabelIdentityDetails,
  applyFormLabelParentsInfo,
  applyFormLabelAddressInfo,
  applyFormLabelBanksInfo,
  applyFormLabelPreviousSchoolAndDocument,
  applyFormLabelGateDegreeInfo,
  applyFormLabelGateInfo,
  applyFormLabelHostelInfo,
} from "../../constant/constant_value";
import style from "./Form/JoinForm.module.css";
import { useTranslation } from "react-i18next";
import BorderBottom from "../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import JoinFormInputView from "./Form/JoinFormInputView";
import JoinFormFileView from "./Form/JoinFormFileView";
import ButtonWithTypeSubmit from "../../Custom/Button/ButtonWithTypeSubmit";
function StudentDetails({
  studentForm,
  dynamicForm,
  formData,
  dynamicFormDocument,
  dynamicDocument,
  fileUrl,
  formSetting,
  onApplyStudentForm,
  location,
  studentPhoneNumber,
  subjects,
  optinalSubject,
  studentAdmission,
  showingExistingUser,
  selectedUser,
  studentNewField,
  openFeesQuery,
}) {
  const { t } = useTranslation();

  const onFormSubmit = (e) => {
    e.preventDefault();
    onApplyStudentForm();
  };
  return (
    <>
      <form onSubmit={onFormSubmit}>
        <div className={style.form_container}>
          {/* {location?.openAs === "INSTITUTE_SIDE" && (
            <>
              <h4>{t("form_mobile_no_label")}:</h4>
              <JoinFormInputView
                labelText={""}
                value={studentPhoneNumber}
                customStyleContainer={{
                  width: "49.5%",
                }}
                customStyleLabel={{
                  marginRight: "0",
                }}
              />
              <BorderBottom
                customStyle={{
                  width: "104.5%",
                  marginTop: "15px",
                  marginLeft: "-24px",
                }}
              />
            </>
          )} */}
          {(location?.openAs === "ADMISSION_ADMIN_SIDE" ||
            location?.openAs === "INSTITUTE_SIDE") && (
            <>
              <div className={style.form_other_field}>
                <JoinFormInputView
                  labelText={t("form_mobile_no_label")}
                  value={studentPhoneNumber}
                  customStyleContainer={{
                    width: "49.5%",
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
              {studentNewField?.student_prn_enroll_number ? (
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                  }}
                >
                  <JoinFormInputView
                    labelText={t("form_name_label")}
                    value={`${formData?.studentFirstName} ${
                      formData?.studentMiddleName
                        ? formData?.studentMiddleName
                        : ""
                    } ${formData?.studentLastName}`}
                    customStyleContainer={{
                      width: "50%",
                    }}
                  />
                  <JoinFormInputView
                    labelText={t(
                      location?.openAs === "ADMISSION_ADMIN_SIDE" ||
                        location?.openAs === "INSTITUTE_SIDE"
                        ? "form_prn_enr_label"
                        : "form_prn_enr_student_label"
                    )}
                    value={studentNewField?.student_prn_enroll_number ?? ""}
                    customStyleContainer={{
                      width: "50%",
                    }}
                  />
                </div>
              ) : (
                <JoinFormInputView
                  labelText={t("form_name_label")}
                  value={`${formData?.studentFirstName} ${
                    formData?.studentMiddleName
                      ? formData?.studentMiddleName
                      : ""
                  } ${formData?.studentLastName}`}
                  customStyleContainer={{
                    width: "86%",
                  }}
                />
              )}

              <div
                style={{
                  width: "100%",
                  display: "flex",
                }}
              >
                <JoinFormInputView
                  labelText={t("form_gender_label")}
                  value={formData.studentGender}
                  customStyleContainer={{
                    width: "50%",
                  }}
                />
                <JoinFormInputView
                  labelText={t("form_date_of_birth_label")}
                  value={formData.studentDOB}
                  customStyleContainer={{
                    width: "50%",
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
                  alt="student avatar"
                />
              </label>
            </div>
          </div>
          <div className={style.form_profile_info}>
            <JoinFormInputView
              labelText={t("form_mother_name_label")}
              value={formData.studentMotherName}
            />
          </div>
          <BorderBottom
            customStyle={{
              width: "104.5%",
              marginTop: "15px",
              marginLeft: "-24px",
            }}
          />

          {location?.openAs === "ADMISSION_ADMIN_SIDE" && (
            <>
              <h4>{t("form_admission_fees_details")}:</h4>
              <div className={style.form_other_field}>
                <JoinFormInputView
                  labelText={t("selected_fee_structure")}
                  value={openFeesQuery?.unique_structure_name ?? ""}
                  customStyleContainer={{
                    width: "49.5%",
                  }}
                />
                <JoinFormInputView
                  labelText={t("payment_type")}
                  value={studentAdmission.fee_payment_mode}
                  customStyleContainer={{
                    width: "49.5%",
                  }}
                />
              </div>
              <div className={style.form_other_field}>
                <JoinFormInputView
                  labelText={t("amount")}
                  value={studentAdmission.fee_payment_amount}
                  customStyleContainer={{
                    width: "49.5%",
                  }}
                />
                <JoinFormInputView
                  labelText={t("select_date_of_transaction")}
                  value={studentAdmission.transaction_date}
                  customStyleContainer={{
                    width: "49.5%",
                  }}
                />
              </div>
              <div className={style.form_other_field}>
                <JoinFormInputView
                  labelText={t("bank_name_collect")}
                  value={studentAdmission.fee_bank_name}
                  customStyleContainer={{
                    width: "49.5%",
                  }}
                />
                <JoinFormInputView
                  labelText={t("banke_holder_name")}
                  value={studentAdmission.fee_bank_holder}
                  customStyleContainer={{
                    width: "49.5%",
                  }}
                />
              </div>
              <div className={style.form_other_field}>
                <JoinFormInputView
                  labelText={t("cheque_dd_neft")}
                  value={studentAdmission.fee_utr_reference}
                  customStyleContainer={{
                    width: "49.5%",
                  }}
                />
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

          {subjects?.length ? (
            <>
              <h4>{t("form_optional_subjects_label")}:</h4>

              <div className={style.form_profile_info}>
                {subjects?.map((sub) =>
                  optinalSubject[sub?._id] !== "" ? (
                    <JoinFormInputView
                      key={sub?._id}
                      value={sub.subjectName}
                      customStyleLabel={{ marginRight: "0" }}
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
          ) : (
            ""
          )}

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
                          value={studentForm[formField]}
                          customStyleContainer={{
                            width: "49.5%",
                          }}
                        />
                      ) : (
                        <JoinFormInputView
                          key={exitingLabel?.id}
                          labelText={t(exitingLabel?.label)}
                          value={studentForm[formField]}
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
                          value={studentForm[formField]}
                          customStyleContainer={{
                            width: "49.5%",
                          }}
                        />
                      ) : (
                        <JoinFormInputView
                          key={exitingLabel?.id}
                          labelText={t(exitingLabel?.label)}
                          value={studentForm[formField]}
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
                          value={studentForm[formField]}
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
                          value={studentForm[formField]}
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

          {formSetting?.parentsInfo && (
            <>
              <h4>{t("form_parent_guardian_info_label")}:</h4>
              <div className={style.form_other_field}>
                {dynamicForm?.map((formField) =>
                  applyFormLabelParentsInfo.map(
                    (exitingLabel) =>
                      exitingLabel?.lists?.includes(formField) &&
                      (exitingLabel?.type ? (
                        <JoinFormInputView
                          key={exitingLabel?.id}
                          labelText={t(exitingLabel?.label)}
                          value={studentForm[formField]}
                          customStyleContainer={{
                            width: "49.5%",
                          }}
                        />
                      ) : (
                        <JoinFormInputView
                          key={exitingLabel?.id}
                          labelText={t(exitingLabel?.label)}
                          value={studentForm[formField]}
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
              <h4>{t("form_student_bank_details_label")}:</h4>
              <div className={style.form_other_field}>
                {dynamicForm?.map((formField) =>
                  applyFormLabelBanksInfo.map(
                    (exitingLabel) =>
                      exitingLabel?.lists?.includes(formField) &&
                      (exitingLabel?.fileType ? (
                        <JoinFormFileView
                          key={exitingLabel?.id}
                          labelText={t(exitingLabel?.label)}
                          value={studentForm[formField]}
                          customStyleContainer={{
                            width: "49.5%",
                          }}
                        />
                      ) : (
                        <JoinFormInputView
                          key={exitingLabel?.id}
                          labelText={t(exitingLabel?.label)}
                          value={studentForm[formField]}
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
          {formSetting?.cpi && (
            <>
              <h4>{t("form_student_hostel_cpi")}:</h4>
              <div className={style.form_other_field}>
                {dynamicForm?.map((formField) =>
                  applyFormLabelHostelInfo.map(
                    (exitingLabel) =>
                      exitingLabel?.lists?.includes(formField) && (
                        <JoinFormInputView
                          key={exitingLabel?.id}
                          labelText={t(exitingLabel?.label)}
                          value={studentForm[formField]}
                          customStyleContainer={{
                            width: "49.5%",
                          }}
                        />
                      )
                  )
                )}
              </div>
            </>
          )}

          {(formSetting?.gate_score || formSetting?.marks_and_degree_score) && (
            <>
              <h4>{t("form_student_pg_details_label")}:</h4>
              {formSetting?.gate_score && (
                <div className={style.form_other_field}>
                  {dynamicForm?.map((formField) =>
                    applyFormLabelGateInfo.map(
                      (exitingLabel) =>
                        exitingLabel?.lists?.includes(formField) && (
                          <JoinFormInputView
                            key={exitingLabel?.id}
                            labelText={t(exitingLabel?.label)}
                            value={studentForm[formField]}
                            customStyleContainer={{
                              width: "49.5%",
                            }}
                          />
                        )
                    )
                  )}
                </div>
              )}
              {formSetting?.marks_and_degree_score && (
                <div className={style.form_other_field}>
                  {dynamicForm?.map((formField) =>
                    applyFormLabelGateDegreeInfo.map(
                      (exitingLabel) =>
                        exitingLabel?.lists?.includes(formField) && (
                          <JoinFormInputView
                            key={exitingLabel?.id}
                            labelText={t(exitingLabel?.label)}
                            value={studentForm[formField]}
                            customStyleContainer={{
                              width: "49.5%",
                            }}
                          />
                        )
                    )
                  )}
                </div>
              )}
            </>
          )}

          <ButtonWithTypeSubmit
            type={"submit"}
            buttonText={
              location?.openAs === "ADMISSION_DIRECT_APPLY"
                ? `${t("submit_and_pay")}  (${t("rs")}. ${
                    location?.first_install
                  })`
                : t("submit")
            }
            customStyleButton={{ marginTop: "1.5vw" }}
          />
        </div>
      </form>
    </>
  );
}

export default StudentDetails;
