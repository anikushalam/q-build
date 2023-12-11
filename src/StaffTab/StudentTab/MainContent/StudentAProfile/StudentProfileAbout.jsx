import React, { useEffect, useState } from "react";
import BorderBottom from "../../../components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import EachField from "../../../components/DividerTab/MainContent/StaffAProfile/EachField";
import { useTranslation } from "react-i18next";
import StaffProfileEachInfo from "../../../components/DividerTab/MainContent/StaffAProfile/StaffProfileEachInfo";

const StudentProfileAbout = ({ student, viewAs }) => {
  const { t } = useTranslation();
  const [document, setDocument] = useState("");
  useEffect(() => {
    if (student?.studentDocuments?.length) {
      let obj = {};
      for (let doc of student?.studentDocuments) {
        obj[doc?.documentName] = doc?.documentKey;
      }
      setDocument(obj);
    }
  }, [student?.studentDocuments]);

  return (
    <>
      <StaffProfileEachInfo labelTag={t("personal_info")}>
        <EachField
          labelText1={t("name")}
          labelValue1={`${student?.studentFirstName || ""} ${
            student?.studentMiddleName ? student?.studentMiddleName : ""
          } ${student?.studentLastName || ""}`}
          labelText2={t("form_prn_enr_student_label")}
          labelValue2={student?.student_prn_enroll_number || ""}
          customStyleContainer={viewAs ? { width: "1140px" } : ""}
          customStyleEachField={viewAs ? { width: "45%" } : ""}
        />
        <EachField
          labelText1={t("dob")}
          labelValue1={student?.studentDOB || ""}
          labelText2={t("gender")}
          labelValue2={student?.studentGender || ""}
          customStyleContainer={viewAs ? { width: "1140px" } : ""}
          customStyleEachField={viewAs ? { width: "45%" } : ""}
        />
        <EachField
          labelText1={t("mother_name")}
          labelValue1={student?.studentMotherName || ""}
          howManyField={1}
          customStyleContainer={viewAs ? { width: "1140px" } : ""}
          customStyleEachField={viewAs ? { width: "45%" } : ""}
        />
      </StaffProfileEachInfo>
      <BorderBottom
        customStyle={
          viewAs
            ? {
                width: "100%",
              }
            : ""
        }
      />
      <StaffProfileEachInfo labelTag={t("other_personal")}>
        <EachField
          labelText1={t("birth_place")}
          labelValue1={student?.studentBirthPlace || ""}
          labelText2={t("student_mobile")}
          labelValue2={student?.studentPhoneNumber || ""}
          customStyleContainer={viewAs ? { width: "1140px" } : ""}
          customStyleEachField={viewAs ? { width: "45%" } : ""}
        />
        <EachField
          labelText1={t("ration_card")}
          labelValue1={student?.studentFatherRationCardColor || ""}
          labelText2={t("aadhar_number")}
          labelValue2={student?.studentAadharNumber || ""}
          customStyleContainer={viewAs ? { width: "1140px" } : ""}
          customStyleEachField={viewAs ? { width: "45%" } : ""}
        />
        <EachField
          labelText1={t("email")}
          labelValue1={student?.studentEmail || ""}
          labelText2={t("blood_group")}
          labelValue2={student?.student_blood_group || ""}
          customStyleContainer={viewAs ? { width: "1140px" } : ""}
          customStyleEachField={viewAs ? { width: "45%" } : ""}
        />
        {/* <EachField
          labelText1={t("email")}
          labelValue1={student?.studentEmail || ""}
          howManyField={1}
          customStyleContainer={viewAs ? { width: "1140px" } : ""}
          customStyleEachField={viewAs ? { width: "45%" } : ""}
        /> */}
      </StaffProfileEachInfo>
      <BorderBottom
        customStyle={
          viewAs
            ? {
                width: "100%",
              }
            : ""
        }
      />
      <StaffProfileEachInfo labelTag={t("i_details")}>
        <EachField
          labelText1={t("nationality")}
          labelValue1={student?.studentNationality || ""}
          labelText2={t("cast_category")}
          labelValue2={student?.studentCastCategory || ""}
          customStyleContainer={viewAs ? { width: "1140px" } : ""}
          customStyleEachField={viewAs ? { width: "45%" } : ""}
        />
        <EachField
          labelText1={t("religion")}
          labelValue1={student?.studentReligion || ""}
          labelText2={t("mother_tongue")}
          labelValue2={student?.studentMTongue || ""}
          customStyleContainer={viewAs ? { width: "1140px" } : ""}
          customStyleEachField={viewAs ? { width: "45%" } : ""}
        />
        <EachField
          labelText1={t("cast")}
          labelValue1={student?.studentCast || ""}
          howManyField={1}
          customStyleContainer={viewAs ? { width: "1140px" } : ""}
          customStyleEachField={viewAs ? { width: "45%" } : ""}
        />
      </StaffProfileEachInfo>
      <BorderBottom
        customStyle={
          viewAs
            ? {
                width: "100%",
              }
            : ""
        }
      />
      <StaffProfileEachInfo labelTag={t("address_")}>
        <EachField
          labelText1={t("c_add")}
          labelValue1={`${student?.studentCurrentAddress || ""}${
            student?.studentCurrentPincode ? " , " : ""
          }${student?.studentCurrentPincode || ""}`}
          labelText2={t("p_add")}
          labelValue2={`${student?.studentAddress || ""}${
            student?.studentCurrentPincode ? " , " : ""
          }${student?.studentPincode || ""}`}
          customStyleContainer={viewAs ? { width: "1140px" } : ""}
          customStyleEachField={viewAs ? { width: "45%" } : ""}
        />
      </StaffProfileEachInfo>
      <BorderBottom
        customStyle={
          viewAs
            ? {
                width: "100%",
              }
            : ""
        }
      />
      <StaffProfileEachInfo labelTag={t("parent_info")}>
        <EachField
          labelText1={t("name")}
          labelValue1={student?.studentParentsName || ""}
          labelText2={t("mobile_bumber")}
          labelValue2={student?.studentParentsPhoneNumber || ""}
          customStyleContainer={viewAs ? { width: "1140px" } : ""}
          customStyleEachField={viewAs ? { width: "45%" } : ""}
        />
        <EachField
          labelText1={t("occupation")}
          labelValue1={student?.studentParentsOccupation || ""}
          labelText2={t("annual_income")}
          labelValue2={student?.studentParentsAnnualIncom || ""}
          customStyleContainer={viewAs ? { width: "1140px" } : ""}
          customStyleEachField={viewAs ? { width: "45%" } : ""}
        />
      </StaffProfileEachInfo>
      <BorderBottom
        customStyle={
          viewAs
            ? {
                width: "100%",
              }
            : ""
        }
      />
      <StaffProfileEachInfo labelTag={t("prev_school_and_document")}>
        <EachField
          labelText1={t("prev_school")}
          labelValue1={student?.studentPreviousSchool || ""}
          labelText2={t("aadhar_back")}
          labelValue2={student?.studentAadharBackCard}
          labelFile2={true}
          customStyleContainer={viewAs ? { width: "1140px" } : ""}
          customStyleEachField={viewAs ? { width: "45%" } : ""}
        />
        <EachField
          labelText1={t("aadhar_front")}
          labelValue1={student?.studentAadharFrontCard}
          labelFile1={true}
          labelText2={t("caste_")}
          labelValue2={student?.studentCasteCertificatePhoto}
          labelFile2={true}
          customStyleContainer={viewAs ? { width: "1140px" } : ""}
          customStyleEachField={viewAs ? { width: "45%" } : ""}
        />

        <EachField
          labelText1={t("form_identity_view_label")}
          labelValue1={document?.identityDocument}
          labelFile1={true}
          labelText2={t("form_joining_transfer_letter_view_label")}
          labelValue2={document?.joiningTransferLetter}
          labelFile2={true}
          customStyleContainer={viewAs ? { width: "1140px" } : ""}
          customStyleEachField={viewAs ? { width: "45%" } : ""}
        />
        <EachField
          labelText1={t("form_leaving_transfer_letter_view_label")}
          labelValue1={document?.leavingTransferCertificate}
          labelFile1={true}
          labelText2={t("form_income_certificate_view_label")}
          labelValue2={document?.incomeCertificate}
          labelFile2={true}
          customStyleContainer={viewAs ? { width: "1140px" } : ""}
          customStyleEachField={viewAs ? { width: "45%" } : ""}
        />
        <EachField
          labelText1={t("form_last_year_marksheet_view_label")}
          labelValue1={document?.lastYearMarksheet}
          labelFile1={true}
          labelText2={t("form_nationality_certificate_view_label")}
          labelValue2={document?.nationalityCertificate}
          labelFile2={true}
          customStyleContainer={viewAs ? { width: "1140px" } : ""}
          customStyleEachField={viewAs ? { width: "45%" } : ""}
        />
        <EachField
          labelText1={t("form_domicile_certificate_view_label")}
          labelValue1={document?.domicileCertificate}
          labelFile1={true}
          labelText2={t("form_non_creamy_layer_view_label")}
          labelValue2={document?.nonCreamyLayerCertificate}
          labelFile2={true}
          customStyleContainer={viewAs ? { width: "1140px" } : ""}
          customStyleEachField={viewAs ? { width: "45%" } : ""}
        />
      </StaffProfileEachInfo>
      <BorderBottom
        customStyle={
          viewAs
            ? {
                width: "100%",
              }
            : ""
        }
      />
      <StaffProfileEachInfo labelTag={t("bank_details")}>
        <EachField
          labelText1={t("form_bank_name_label")}
          labelValue1={student?.studentBankName || ""}
          labelText2={t("form_ifsc_code_label")}
          labelValue2={student?.studentBankIfsc || ""}
          customStyleContainer={viewAs ? { width: "1140px" } : ""}
          customStyleEachField={viewAs ? { width: "45%" } : ""}
        />
        <EachField
          labelText1={t("acnt_holder")}
          labelValue1={student?.studentBankAccountHolderName || ""}
          labelText2={t("bank_passbook")}
          labelValue2={student?.studentBankPassbook}
          labelFile2={true}
          customStyleContainer={viewAs ? { width: "1140px" } : ""}
          customStyleEachField={viewAs ? { width: "45%" } : ""}
        />
        <EachField
          labelText1={t("account_holder")}
          labelValue1={student?.studentBankAccount || ""}
          howManyField={1}
          customStyleContainer={viewAs ? { width: "1140px" } : ""}
          customStyleEachField={viewAs ? { width: "45%" } : ""}
        />
      </StaffProfileEachInfo>
      <BorderBottom
        customStyle={
          viewAs
            ? {
                width: "100%",
              }
            : ""
        }
      />

      <StaffProfileEachInfo labelTag={t("id_card_details")}>
        <EachField
          labelText1={t("id_card_front")}
          labelValue1={document?.student_id_card_front || ""}
          labelFile1={true}
          labelText2={t("id_card_back")}
          labelValue2={document?.student_id_card_back}
          labelFile2={true}
          customStyleContainer={viewAs ? { width: "1140px" } : ""}
          customStyleEachField={viewAs ? { width: "45%" } : ""}
        />
      </StaffProfileEachInfo>
      <BorderBottom
        customStyle={
          viewAs
            ? {
                width: "100%",
              }
            : ""
        }
      />

      <StaffProfileEachInfo labelTag={t("anti_ragging_details")}>
        <EachField
          howManyField={1}
          labelText1={t("anti_ragging")}
          labelValue1={document?.student_anti_ragging}
          labelFile1={true}
          customStyleContainer={viewAs ? { width: "1140px" } : ""}
          customStyleEachField={viewAs ? { width: "45%" } : ""}
        />
      </StaffProfileEachInfo>
      <BorderBottom
        customStyle={
          viewAs
            ? {
                width: "100%",
              }
            : ""
        }
      />

      {(student?.student_gate_score || student?.student_degree_institute) && (
        <>
          <StaffProfileEachInfo labelTag={t("form_student_pg_details_label")}>
            <EachField
              labelText1={t("form_gate_score_label")}
              labelValue1={student?.student_gate_score || ""}
              labelText2={t("form_gate_year_label")}
              labelValue2={student?.student_gate_year || ""}
              customStyleContainer={viewAs ? { width: "1140px" } : ""}
              customStyleEachField={viewAs ? { width: "45%" } : ""}
            />
            <EachField
              labelText1={t("form_degree_institute_label")}
              labelValue1={student?.student_degree_institute || ""}
              howManyField={1}
              customStyleContainer={viewAs ? { width: "1140px" } : ""}
              customStyleEachField={{ width: "100%" }}
            />
            <EachField
              labelText1={t("form_degree_year_label")}
              labelValue1={student?.student_degree_year || ""}
              howManyField={1}
              customStyleContainer={viewAs ? { width: "1140px" } : ""}
              customStyleEachField={viewAs ? { width: "100%" } : ""}
            />
            <EachField
              labelText1={t("form_marks_obtained_total_credits_label")}
              labelValue1={student?.student_pre_sem_obtained_points || ""}
              labelText2={t("form_grand_total_total_grade_point_label")}
              labelValue2={student?.student_pre_sem_total_points || ""}
              customStyleContainer={viewAs ? { width: "1140px" } : ""}
              customStyleEachField={viewAs ? { width: "45%" } : ""}
            />
            <EachField
              labelText1={t("form_marks_obtained_total_credits_label")}
              labelValue1={student?.student_final_sem_obtained_points || ""}
              labelText2={t("form_grand_total_total_grade_point_label")}
              labelValue2={student?.student_final_sem_total_points || ""}
              customStyleContainer={viewAs ? { width: "1140px" } : ""}
              customStyleEachField={viewAs ? { width: "45%" } : ""}
            />
            <EachField
              labelText1={t("form_class_api_label")}
              labelValue1={student?.student_percentage_cpi || ""}
              howManyField={1}
              customStyleContainer={viewAs ? { width: "1140px" } : ""}
              customStyleEachField={viewAs ? { width: "45%" } : ""}
            />
          </StaffProfileEachInfo>
          <BorderBottom
            customStyle={
              viewAs
                ? {
                    width: "100%",
                  }
                : ""
            }
          />
        </>
      )}
      {student?.student_hostel_cpi && (
        <>
          <StaffProfileEachInfo labelTag={t("hostel_cpi")}>
            <EachField
              labelText1={t("form_student_programme_label")}
              labelValue1={student?.student_programme || ""}
              labelText2={t("form_student_branch_label")}
              labelValue2={student?.student_branch || ""}
              customStyleContainer={viewAs ? { width: "1140px" } : ""}
              customStyleEachField={viewAs ? { width: "45%" } : ""}
            />
            <EachField
              labelText1={t("form_student_year_label")}
              labelValue1={student?.student_year || ""}
              labelText2={t("form_hostel_cpi_label")}
              labelValue2={student?.student_hostel_cpi || ""}
              customStyleContainer={viewAs ? { width: "1140px" } : ""}
              customStyleEachField={viewAs ? { width: "45%" } : ""}
            />
            <EachField
              labelText1={t("form_student_single_seater_room_label")}
              labelValue1={student?.student_single_seater_room || ""}
              labelText2={t("form_student_ph_label")}
              labelValue2={student?.student_ph || ""}
              customStyleContainer={viewAs ? { width: "1140px" } : ""}
              customStyleEachField={viewAs ? { width: "45%" } : ""}
            />
          </StaffProfileEachInfo>
          <BorderBottom
            customStyle={
              viewAs
                ? {
                    width: "100%",
                  }
                : ""
            }
          />
        </>
      )}
    </>
  );
};

export default StudentProfileAbout;
