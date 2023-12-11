import { useTranslation } from "react-i18next";
import style from "./StudentProfile.module.css";
import FormInputView from "@/Ui/Input/FormInputView";
import FieldWrapper from "./FieldWrapper";
import FieldHeadingWrapper from "./FieldHeadingWrapper";
import FormFileView from "@/Ui/Input/FormFileView";

const StudentProfileAbout = ({ student }) => {
  const { t } = useTranslation();
  return (
    <>
      <FieldHeadingWrapper label={t("personal_info")}>
        <FieldWrapper>
          <FormInputView
            label={`${t("name")} :`}
            value={`${student?.studentFirstName || ""} ${
              student?.studentMiddleName ? student?.studentMiddleName : ""
            } ${student?.studentLastName || ""}`}
          />
          <FormInputView
            label={`${t("form_prn_enr_student_label")} :`}
            value={student?.student_prn_enroll_number}
          />
        </FieldWrapper>
        <FieldWrapper>
          <FormInputView
            label={`${t("date_of_birth")} :`}
            value={student?.studentDOB}
          />
          <FormInputView
            label={`${t("gender")} :`}
            value={student?.studentGender}
          />
        </FieldWrapper>
        <FieldWrapper>
          <FormInputView
            label={`${t("mother_name")} :`}
            value={student?.studentMotherName}
          />
        </FieldWrapper>
      </FieldHeadingWrapper>

      <FieldHeadingWrapper label={t("other_personal")}>
        <FieldWrapper>
          <FormInputView
            label={`${t("birth_place")} :`}
            value={student?.studentBirthPlace}
          />
          <FormInputView
            label={`${t("student_mobile")} :`}
            value={student?.studentPhoneNumber}
          />
        </FieldWrapper>
        <FieldWrapper>
          <FormInputView
            label={`${t("ration_card")} :`}
            value={student?.studentFatherRationCardColor}
          />
          <FormInputView
            label={`${t("aadhar_number")} :`}
            value={student?.studentAadharNumber}
          />
        </FieldWrapper>
        <FieldWrapper>
          <FormInputView
            label={`${t("form_email")} :`}
            value={student?.studentEmail}
          />
          <FormInputView
            label={`${t("blood_group")} :`}
            value={student?.student_blood_group}
          />
        </FieldWrapper>
      </FieldHeadingWrapper>

      <FieldHeadingWrapper label={t("i_details")}>
        <FieldWrapper>
          <FormInputView
            label={`${t("nationality")} :`}
            value={student?.studentNationality}
          />
          <FormInputView
            label={`${t("cast_category")} :`}
            value={student?.studentCastCategory}
          />
        </FieldWrapper>
        <FieldWrapper>
          <FormInputView
            label={`${t("religion")} :`}
            value={student?.studentReligion}
          />
          <FormInputView
            label={`${t("mother_tongue")} :`}
            value={student?.studentMTongue}
          />
        </FieldWrapper>
        <FieldWrapper>
          <FormInputView
            label={`${t("caste")} :`}
            value={student?.studentCast}
          />
        </FieldWrapper>
      </FieldHeadingWrapper>

      <FieldHeadingWrapper label={t("address_")}>
        <FieldWrapper>
          <FormInputView
            label={`${t("c_add")} :`}
            value={`${student?.studentCurrentAddress || ""}${
              student?.studentCurrentPincode ? " , " : ""
            }${student?.studentCurrentPincode || ""}`}
          />
          <FormInputView
            label={`${t("p_add")} :`}
            value={`${student?.studentAddress || ""}${
              student?.studentCurrentPincode ? " , " : ""
            }${student?.studentPincode || ""}`}
          />
        </FieldWrapper>
      </FieldHeadingWrapper>
      <FieldHeadingWrapper label={t("parent_info")}>
        <FieldWrapper>
          <FormInputView
            label={`${t("name")} :`}
            value={student?.studentParentsName}
          />
          <FormInputView
            label={`${t("mobile_bumber")} :`}
            value={student?.studentParentsPhoneNumber}
          />
        </FieldWrapper>
        <FieldWrapper>
          <FormInputView
            label={`${t("occupation")} :`}
            value={student?.studentParentsOccupation}
          />
          <FormInputView
            label={`${t("annual_income")} :`}
            value={student?.studentParentsAnnualIncom}
          />
        </FieldWrapper>
      </FieldHeadingWrapper>
      <FieldHeadingWrapper label={t("prev_school_and_document")}>
        <FieldWrapper>
          <FormInputView
            label={`${t("prev_school")} :`}
            value={student?.studentPreviousSchool}
          />
          <FormFileView
            label={`${t("aadhar_back")} :`}
            value={student?.studentAadharBackCard}
          />
        </FieldWrapper>
        <FieldWrapper>
          <FormFileView
            label={`${t("aadhar_front")} :`}
            value={student?.studentAadharFrontCard}
          />
          <FormFileView
            label={`${t("caste_")} :`}
            value={student?.studentCasteCertificatePhoto}
          />
        </FieldWrapper>
        <FieldWrapper>
          <FormFileView
            label={`${t("form_identity_view_label")} :`}
            value={student?.identityDocument}
          />
          <FormFileView
            label={`${t("form_joining_transfer_letter_view_label")} :`}
            value={student?.joiningTransferLetter}
          />
        </FieldWrapper>

        <FieldWrapper>
          <FormFileView
            label={`${t("form_leaving_transfer_letter_view_label")} :`}
            value={student?.leavingTransferCertificate}
          />
          <FormFileView
            label={`${t("form_income_certificate_view_label")} :`}
            value={student?.incomeCertificate}
          />
        </FieldWrapper>
        <FieldWrapper>
          <FormFileView
            label={`${t("form_last_year_marksheet_view_label")} :`}
            value={student?.lastYearMarksheet}
          />
          <FormFileView
            label={`${t("form_nationality_certificate_view_label")} :`}
            value={student?.nationalityCertificate}
          />
        </FieldWrapper>
        <FieldWrapper>
          <FormFileView
            label={`${t("form_domicile_certificate_view_label")} :`}
            value={student?.domicileCertificate}
          />
          <FormFileView
            label={`${t("form_non_creamy_layer_view_label")} :`}
            value={student?.nonCreamyLayerCertificate}
          />
        </FieldWrapper>
      </FieldHeadingWrapper>

      <FieldHeadingWrapper label={t("bank_details")}>
        <FieldWrapper>
          <FormInputView
            label={`${t("form_bank_name_label")} :`}
            value={student?.studentBankName}
          />
          <FormInputView
            label={`${t("form_ifsc_code_label")} :`}
            value={student?.studentBankIfsc}
          />
        </FieldWrapper>
        <FieldWrapper>
          <FormInputView
            label={`${t("acnt_holder")} :`}
            value={student?.studentBankAccountHolderName}
          />
          <FormFileView
            label={`${t("bank_passbook")} :`}
            value={student?.studentBankPassbook}
          />
        </FieldWrapper>
        <FieldWrapper>
          <FormInputView
            label={`${t("account_holder")} :`}
            value={student?.studentBankAccount}
          />
        </FieldWrapper>
      </FieldHeadingWrapper>

      <FieldHeadingWrapper label={t("id_card_details")}>
        <FieldWrapper>
          <FormFileView
            label={`${t("id_card_front")} :`}
            value={student?.student_id_card_front}
          />
          <FormFileView
            label={`${t("id_card_back")} :`}
            value={student?.student_id_card_back}
          />
        </FieldWrapper>
      </FieldHeadingWrapper>

      <FieldHeadingWrapper label={t("anti_ragging_details")}>
        <FieldWrapper>
          <FormFileView
            label={`${t("anti_ragging")} :`}
            value={student?.student_anti_ragging}
          />
        </FieldWrapper>
      </FieldHeadingWrapper>
      {/* {student?.student_gate_score || student?.student_degree_institute ? ( */}
      <FieldHeadingWrapper label={t("form_student_pg_details_label")}>
        <FieldWrapper>
          <FormInputView
            label={`${t("form_gate_score_label")} :`}
            value={student?.student_gate_score}
          />
          <FormInputView
            label={`${t("form_gate_year_label")} :`}
            value={student?.student_gate_year}
          />
        </FieldWrapper>
        <FieldWrapper>
          <FormInputView
            label={`${t("form_degree_institute_label")} :`}
            value={student?.student_degree_institute}
          />
        </FieldWrapper>
        <FieldWrapper>
          <FormInputView
            label={`${t("form_degree_year_label")} :`}
            value={student?.student_degree_year}
          />
        </FieldWrapper>
        <FieldWrapper>
          <FormInputView
            label={`${t("form_marks_obtained_total_credits_label")} :`}
            value={student?.student_pre_sem_obtained_points}
          />
          <FormInputView
            label={`${t("form_grand_total_total_grade_point_label")} :`}
            value={student?.student_pre_sem_total_points}
          />
        </FieldWrapper>
        <FieldWrapper>
          <FormInputView
            label={`${t("form_marks_obtained_total_credits_label")} :`}
            value={student?.student_final_sem_obtained_points}
          />
          <FormInputView
            label={`${t("form_grand_total_total_grade_point_label")} :`}
            value={student?.student_final_sem_total_points}
          />
        </FieldWrapper>
        <FieldWrapper>
          <FormInputView
            label={`${t("form_class_api_label")} :`}
            value={student?.student_percentage_cpi}
          />
        </FieldWrapper>
      </FieldHeadingWrapper>
      {/* ) : null} */}

      <FieldHeadingWrapper label={t("hostel_cpi")}>
        <FieldWrapper>
          <FormInputView
            label={`${t("form_student_programme_label")} :`}
            value={student?.student_programme}
          />
          <FormInputView
            label={`${t("form_student_branch_label")} :`}
            value={student?.student_branch}
          />
        </FieldWrapper>
        <FieldWrapper>
          <FormInputView
            label={`${t("form_student_year_label")} :`}
            value={student?.student_year}
          />
          <FormInputView
            label={`${t("form_hostel_cpi_label")} :`}
            value={student?.student_hostel_cpi}
          />
        </FieldWrapper>
        <FieldWrapper>
          <FormInputView
            label={`${t("form_student_single_seater_room_label")} :`}
            value={student?.student_single_seater_room}
          />
          <FormInputView
            label={`${t("form_student_ph_label")} :`}
            value={student?.student_ph}
          />
        </FieldWrapper>
      </FieldHeadingWrapper>
    </>
  );
};

export default StudentProfileAbout;
