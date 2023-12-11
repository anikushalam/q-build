import React, { useEffect } from "react";
import BorderBottom from "./BorderBottom";
import EachField from "./EachField";
import StaffProfileEachInfo from "./StaffProfileEachInfo";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const StaffProfileAbout = ({ staff, viewAs }) => {
  const { t } = useTranslation();
  const [document, setDocument] = useState("");
  useEffect(() => {
    if (staff?.staffDocuments?.length) {
      let obj = {};
      for (let doc of staff?.staffDocuments) {
        obj[doc?.documentName] = doc?.documentKey;
      }
      setDocument(obj);
    }
  }, [staff?.staffDocuments]);

  // console.info("this is modify", document);
  return (
    <>
      <StaffProfileEachInfo labelTag={t("personal_info")}>
        <EachField
          labelText1={t("name")}
          labelValue1={`${staff?.staffFirstName || ""} ${
            staff?.staffMiddleName ? staff?.staffMiddleName : ""
          } ${staff?.staffLastName || ""}`}
          labelText2={t("dob")}
          labelValue2={staff?.staffDOB || ""}
          customStyleContainer={viewAs ? { width: "auto" } : ""}
        />
        <EachField
          labelText1={t("gender")}
          labelValue1={staff?.staffGender || ""}
          labelText2={t("mother_name")}
          labelValue2={staff?.staffMotherName || ""}
          customStyleContainer={viewAs ? { width: "auto" } : ""}
        />
      </StaffProfileEachInfo>
      <BorderBottom customStyle={viewAs ? { width: "100%" } : ""} />
      <StaffProfileEachInfo labelTag={t("other_personal")}>
        <EachField
          labelText1={t("dob")}
          labelValue1={staff?.staffBirthPlace || ""}
          labelText2={t("mobile_bumber")}
          labelValue2={staff?.staffPhoneNumber || ""}
          customStyleContainer={viewAs ? { width: "auto" } : ""}
        />
        <EachField
          labelText1={t("adhar_number")}
          labelValue1={staff?.staffAadharNumber || ""}
          labelText2={t("qualification")}
          labelValue2={staff?.staffQualification || ""}
          customStyleContainer={viewAs ? { width: "auto" } : ""}
        />
        {/* <EachField
          labelText1={t("form_current_designation_label")}
          labelValue1={staff?.current_designation || ""}
          howManyField={1}
          customStyleContainer={viewAs ? { width: "auto" } : ""}
        /> */}
        {/* <EachField
          labelText1={t("qualification")}
          labelValue1={staff?.staffQualification}
          howManyField={1}
        /> */}
      </StaffProfileEachInfo>
      <BorderBottom customStyle={viewAs ? { width: "100%" } : ""} />
      <StaffProfileEachInfo labelTag={t("i_details")}>
        <EachField
          labelText1={t("nationality")}
          labelValue1={staff?.staffNationality || ""}
          labelText2={t("cast_category")}
          labelValue2={staff?.staffCastCategory || ""}
          customStyleContainer={viewAs ? { width: "auto" } : ""}
        />
        <EachField
          labelText1={t("religion")}
          labelValue1={staff?.staffReligion || ""}
          labelText2={t("mother_tongue")}
          labelValue2={staff?.staffMTongue || ""}
          customStyleContainer={viewAs ? { width: "auto" } : ""}
        />
        <EachField
          labelText1={t("cast")}
          labelValue1={staff?.staffCast || ""}
          howManyField={1}
          customStyleContainer={viewAs ? { width: "auto" } : ""}
        />
      </StaffProfileEachInfo>
      <BorderBottom customStyle={viewAs ? { width: "100%" } : ""} />
      <StaffProfileEachInfo labelTag={t("address_")}>
        <EachField
          labelText1={t("c_add")}
          labelValue1={staff?.staffCurrentAddress || ""}
          labelText2={t("p_add")}
          labelValue2={staff?.staffAddress || ""}
          customStyleContainer={viewAs ? { width: "auto" } : ""}
        />
      </StaffProfileEachInfo>
      <BorderBottom customStyle={viewAs ? { width: "100%" } : ""} />
      <StaffProfileEachInfo labelTag={t("prev_school_document")}>
        {/* {console.info("this is all staff", staff)} */}
        <EachField
          labelText1={t("prev_school")}
          labelValue1={staff?.staffPreviousSchool || ""}
          labelText2={t("aadhar_back")}
          labelValue2={staff?.staffAadharBackCard}
          labelFile2={true}
          customStyleContainer={viewAs ? { width: "auto" } : ""}
        />
        <EachField
          labelText1={t("aadhar_front")}
          labelValue1={staff?.staffAadharFrontCard}
          labelFile1={true}
          labelText2={t("caste_")}
          labelValue2={staff?.staffCasteCertificatePhoto}
          labelFile2={true}
          customStyleContainer={viewAs ? { width: "auto" } : ""}
        />

        <EachField
          labelText1={t("form_identity_view_label")}
          labelValue1={document?.identityDocument}
          labelFile1={true}
          labelText2={t("form_joining_transfer_letter_view_label")}
          labelValue2={document?.joiningTransferLetter}
          labelFile2={true}
          customStyleContainer={viewAs ? { width: "auto" } : ""}
        />
        <EachField
          labelText1={t("form_leaving_transfer_letter_view_label")}
          labelValue1={document?.leavingTransferCertificate}
          labelFile1={true}
          labelText2={t("form_income_certificate_view_label")}
          labelValue2={document?.incomeCertificate}
          labelFile2={true}
          customStyleContainer={viewAs ? { width: "auto" } : ""}
        />
        <EachField
          labelText1={t("form_last_year_marksheet_view_label")}
          labelValue1={document?.lastYearMarksheet}
          labelFile1={true}
          labelText2={t("form_nationality_certificate_view_label")}
          labelValue2={document?.nationalityCertificate}
          labelFile2={true}
          customStyleContainer={viewAs ? { width: "auto" } : ""}
        />
        <EachField
          labelText1={t("form_domicile_certificate_view_label")}
          labelValue1={document?.domicileCertificate}
          labelFile1={true}
          labelText2={t("form_non_creamy_layer_view_label")}
          labelValue2={document?.nonCreamyLayerCertificate}
          labelFile2={true}
          customStyleContainer={viewAs ? { width: "auto" } : ""}
        />
      </StaffProfileEachInfo>
      <BorderBottom customStyle={viewAs ? { width: "100%" } : ""} />
      <StaffProfileEachInfo labelTag={t("bank_details")}>
        <EachField
          labelText1={t("form_bank_name_label")}
          labelValue1={staff?.staffBankName || ""}
          labelText2={t("form_ifsc_code_label")}
          labelValue2={staff?.staffBankIfsc || ""}
          customStyleContainer={viewAs ? { width: "auto" } : ""}
        />
        <EachField
          labelText1={t("acnt_holder")}
          labelValue1={staff?.staffBankAccountHolderName || ""}
          labelText2={t("bank_passbook")}
          labelValue2={staff?.staffBankPassbook}
          labelFile2={true}
          customStyleContainer={viewAs ? { width: "auto" } : ""}
        />
        <EachField
          labelText1={t("account_holder")}
          labelValue1={staff?.staffBankAccount || ""}
          howManyField={1}
          customStyleContainer={viewAs ? { width: "auto" } : ""}
        />
      </StaffProfileEachInfo>
      <BorderBottom customStyle={viewAs ? { width: "100%" } : ""} />
    </>
  );
};

export default StaffProfileAbout;
