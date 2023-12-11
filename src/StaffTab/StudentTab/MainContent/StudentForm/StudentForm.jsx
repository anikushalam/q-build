import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import style from "./StudentForm.module.css";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import {
  useInstituteFormSettingUpdate,
  useInstituteStudentForm,
  useStudentProfileTextFormat,
} from "../../../../Department/Institute/Components/DepartmentApi/depart-api";
import { Notfication } from "../../../../validation/Snackbar";
import FormHeader from "../../../components/DividerTab/MainContent/StaffForm/FormHeader";
import FormToggle from "../../../components/DividerTab/MainContent/StaffForm/FormToggle";
import BorderBottom from "../../../components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import FormCheckbox from "../../../components/DividerTab/MainContent/StaffForm/FormCheckbox";
import { useAdmissionInstallmentEditFeesByAdmission } from "../../../../hooks/member_tab/admission-api";
import QLoader from "../../../../Loader/QLoader";
import { useOneInstituteDashboard } from "../../../../hooks/dashboard/dashboard-api";
import { useNavigate } from "react-router-dom";
const StudentForm = () => {
  const ids = useSelector((state) => state.idChange);
  const navigate = useNavigate();

  const [msg, setMsg] = useState("");
  const { t } = useTranslation();
  const [run, setRun] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [textCase, setTextCase] = useState("");

  const [instituteFormSettingUpdate] = useInstituteFormSettingUpdate();
  const [studentProfileTextFormat] = useStudentProfileTextFormat();
  const [admissionInstallmentEditFeesByAdmission] =
    useAdmissionInstallmentEditFeesByAdmission();
  const { oneInstituteDashboard, oneInstituteDashboardRefetch } =
    useOneInstituteDashboard({
      id: ids?.id,
      skip: !ids?.id,
    });
  const { instituteStudentForm, instituteStudentFormRefetch } =
    useInstituteStudentForm({
      id: ids?.id,
      skip: !ids?.id,
    });

  const [formSetting, setFormSetting] = useState({
    otherPersonalInfo: false,
    enrollmentPrn: false,
    identityDetails: false,
    addressInfo: false,
    parentsInfo: false,
    previousSchoolAndDocument: {
      previousSchoolDocument: false,
      aadharCard: false,
      identityDocument: false,
      casteCertificate: false,
      joiningTransferLetter: false,
      leavingTransferCertificate: false,
      incomeCertificate: false,
      lastYearMarksheet: false,
      nationalityCertificate: false,
      domicileCertificate: false,
      nonCreamyLayerCertificate: false,
    },
    bankDetails: false,
    anti_ragging: false,
    id_card: false,
  });
  useEffect(() => {
    if (ids?.id) {
      oneInstituteDashboardRefetch();
      instituteStudentFormRefetch();
    }
  }, [ids?.id, instituteStudentFormRefetch, oneInstituteDashboardRefetch]);
  useEffect(() => {
    if (instituteStudentForm?.studentFormSetting)
      setFormSetting({
        otherPersonalInfo:
          instituteStudentForm?.studentFormSetting?.otherPersonalInfo,
        enrollmentPrn: instituteStudentForm?.studentFormSetting?.enrollmentPrn,
        identityDetails:
          instituteStudentForm?.studentFormSetting?.identityDetails,
        addressInfo: instituteStudentForm?.studentFormSetting?.addressInfo,
        parentsInfo: instituteStudentForm?.studentFormSetting?.parentsInfo,
        previousSchoolAndDocument: {
          previousSchoolDocument:
            instituteStudentForm?.studentFormSetting?.previousSchoolAndDocument
              ?.previousSchoolDocument,
          aadharCard:
            instituteStudentForm?.studentFormSetting?.previousSchoolAndDocument
              ?.aadharCard,
          identityDocument:
            instituteStudentForm?.studentFormSetting?.previousSchoolAndDocument
              ?.identityDocument,
          casteCertificate:
            instituteStudentForm?.studentFormSetting?.previousSchoolAndDocument
              ?.casteCertificate,
          joiningTransferLetter:
            instituteStudentForm?.studentFormSetting?.previousSchoolAndDocument
              ?.joiningTransferLetter,
          leavingTransferCertificate:
            instituteStudentForm?.studentFormSetting?.previousSchoolAndDocument
              ?.leavingTransferCertificate,
          incomeCertificate:
            instituteStudentForm?.studentFormSetting?.previousSchoolAndDocument
              ?.incomeCertificate,
          lastYearMarksheet:
            instituteStudentForm?.studentFormSetting?.previousSchoolAndDocument
              ?.lastYearMarksheet,
          nationalityCertificate:
            instituteStudentForm?.studentFormSetting?.previousSchoolAndDocument
              ?.nationalityCertificate,
          domicileCertificate:
            instituteStudentForm?.studentFormSetting?.previousSchoolAndDocument
              ?.domicileCertificate,
          nonCreamyLayerCertificate:
            instituteStudentForm?.studentFormSetting?.previousSchoolAndDocument
              ?.nonCreamyLayerCertificate,
        },
        bankDetails: instituteStudentForm?.studentFormSetting?.bankDetails,
        anti_ragging: instituteStudentForm?.studentFormSetting?.anti_ragging,
        id_card: instituteStudentForm?.studentFormSetting?.id_card,
      });
  }, [instituteStudentForm?.studentFormSetting]);

  useEffect(() => {
    if (oneInstituteDashboard?.institute?.name_case_format_query) {
      let case_query = oneInstituteDashboard?.institute?.name_case_format_query;
      setTextCase(
        case_query === "CAPS_FORMAT"
          ? "Capital case"
          : case_query === "SMALL_FORMAT"
          ? "Small case"
          : "Title case"
      );
    }
  }, [oneInstituteDashboard?.institute?.name_case_format_query]);
  const onSubmitFormHandler = (field, value) => {
    const updatedObj = { ...formSetting };
    for (let obj in updatedObj) {
      if (obj === field) {
        updatedObj[obj] = value;
      }
    }
    instituteFormSettingUpdate({
      id: ids?.id,
      formSetting: { studentFormSetting: updatedObj },
    })
      .then(() => {
        setMsg("Add joining details updated");
        setRun(true);
      })
      .catch({});
    setFormSetting((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const onSubmitChecklistandler = (field, value) => {
    const updatedObj = { ...formSetting };
    if (field === "previousSchoolDocument" && !value) {
      updatedObj.previousSchoolAndDocument["aadharCard"] = false;
      updatedObj.previousSchoolAndDocument["casteCertificate"] = false;
      updatedObj.previousSchoolAndDocument["domicileCertificate"] = false;
      updatedObj.previousSchoolAndDocument["identityDocument"] = false;
      updatedObj.previousSchoolAndDocument["incomeCertificate"] = false;
      updatedObj.previousSchoolAndDocument["joiningTransferLetter"] = false;
      updatedObj.previousSchoolAndDocument["lastYearMarksheet"] = false;
      updatedObj.previousSchoolAndDocument[
        "leavingTransferCertificate"
      ] = false;
      updatedObj.previousSchoolAndDocument["nationalityCertificate"] = false;
      updatedObj.previousSchoolAndDocument["nonCreamyLayerCertificate"] = false;
    }
    if (
      formSetting.previousSchoolAndDocument.previousSchoolDocument ||
      field === "previousSchoolDocument"
    ) {
      for (let obj in updatedObj.previousSchoolAndDocument) {
        if (obj === field) {
          updatedObj.previousSchoolAndDocument[obj] = value;
        }
      }
      instituteFormSettingUpdate({
        id: ids?.id,
        formSetting: { studentFormSetting: updatedObj },
      })
        .then(() => {
          setMsg("Add joining details updated");
          setRun(true);
        })
        .catch({});
      setFormSetting((prev) => ({
        ...prev,
        previousSchoolAndDocument: {
          ...prev.previousSchoolAndDocument,
          [field]: value,
        },
      }));
    }
  };

  const onInstallTitle = (e) => {
    if (ids?.id) {
      setDisabled((pre) => !pre);
      admissionInstallmentEditFeesByAdmission({
        flow: "Institute_Admin",
        editAccess: {
          id: ids?.id,
          sid: null,
          online_amount_edit_access: e.target.checked
            ? "Granted"
            : "Not Granted",
        },
      })
        .then(() => {
          instituteStudentFormRefetch();
          setDisabled((pre) => !pre);
        })
        .catch({});
    }
  };

  const onTextCaseFormat = (val) => {
    setTextCase(val);
    if (ids?.id) {
      setDisabled((pre) => !pre);
      studentProfileTextFormat({
        id: ids?.id,
        caseFormat: {
          name_case_format_query:
            val === "Capital case"
              ? "CAPS_FORMAT"
              : val === "Small case"
              ? "SMALL_FORMAT"
              : "TITLE_FORMAT",
        },
      })
        .then(() => {
          setDisabled((pre) => !pre);
        })
        .catch({});
    }
  };
  // console.info("sfadhfgnsfd", oneInstituteDashboard);

  return (
    <>
      <>
        <FormHeader
          setStaffSetting={() => navigate(-1)}
          asStaff={t("student")}
          availableCode={t("avail_class_code")}
          is_install={true}
          installTitle={t("online_install_edit_fees")}
          onInstallTitle={onInstallTitle}
          installmentEdit={
            instituteStudentForm?.online_amount_edit_access === "Granted"
              ? true
              : false
          }
          onTextCaseFormat={onTextCaseFormat}
          textCase={textCase}
        />
        <div className={style.staff_form_container}>
          <FormToggle
            labelHeading={t("personal_info_")}
            labelDescription={t("name_")}
            defaultLabel={true}
          />
          <BorderBottom />
          <FormToggle
            labelHeading={t("enrollment_number")}
            labelDescription={t("enrollment_label_text")}
            defaultLabel={false}
            checkedToggle={formSetting.enrollmentPrn}
            onToggleHandler={(e) =>
              onSubmitFormHandler("enrollmentPrn", e.target.checked)
            }
          />
          <BorderBottom />
          <FormToggle
            labelHeading={t("other_info")}
            labelDescription={t("label_text")}
            defaultLabel={false}
            checkedToggle={formSetting.otherPersonalInfo}
            onToggleHandler={(e) =>
              onSubmitFormHandler("otherPersonalInfo", e.target.checked)
            }
          />
          <BorderBottom />
          <FormToggle
            labelHeading={t("i_details")}
            labelDescription={t("labeltext2")}
            defaultLabel={false}
            checkedToggle={formSetting.identityDetails}
            onToggleHandler={(e) =>
              onSubmitFormHandler("identityDetails", e.target.checked)
            }
          />
          <BorderBottom />
          <FormToggle
            labelHeading={t("add_info")}
            labelDescription={t("labeltext3")}
            defaultLabel={false}
            checkedToggle={formSetting.addressInfo}
            onToggleHandler={(e) =>
              onSubmitFormHandler("addressInfo", e.target.checked)
            }
          />
          <BorderBottom />
          <FormToggle
            labelHeading={t("parent_info_")}
            labelDescription={t("label_text2")}
            defaultLabel={false}
            checkedToggle={formSetting.parentsInfo}
            onToggleHandler={(e) =>
              onSubmitFormHandler("parentsInfo", e.target.checked)
            }
          />
          <BorderBottom />
          <FormToggle
            labelHeading={t("prev_school_")}
            labelDescription=""
            defaultLabel={false}
            checkedToggle={
              formSetting.previousSchoolAndDocument.previousSchoolDocument
            }
            onToggleHandler={(e) =>
              onSubmitChecklistandler(
                "previousSchoolDocument",
                e.target.checked
              )
            }
          >
            <FormCheckbox
              checkLabel={t("aadhar_card")}
              checkedValue={formSetting.previousSchoolAndDocument.aadharCard}
              onCheckboxAction={(e) =>
                onSubmitChecklistandler("aadharCard", e.target.checked)
              }
            />
            <FormCheckbox
              checkLabel={t("labeltext4")}
              checkedValue={
                formSetting.previousSchoolAndDocument.identityDocument
              }
              onCheckboxAction={(e) =>
                onSubmitChecklistandler("identityDocument", e.target.checked)
              }
            />
            <FormCheckbox
              checkLabel={t("castee_")}
              checkedValue={
                formSetting.previousSchoolAndDocument.casteCertificate
              }
              onCheckboxAction={(e) =>
                onSubmitChecklistandler("casteCertificate", e.target.checked)
              }
            />
            <FormCheckbox
              checkLabel={t("joining_letter")}
              checkedValue={
                formSetting.previousSchoolAndDocument.joiningTransferLetter
              }
              onCheckboxAction={(e) =>
                onSubmitChecklistandler(
                  "joiningTransferLetter",
                  e.target.checked
                )
              }
            />
            <FormCheckbox
              checkLabel={t("certificates")}
              checkedValue={
                formSetting.previousSchoolAndDocument.leavingTransferCertificate
              }
              onCheckboxAction={(e) =>
                onSubmitChecklistandler(
                  "leavingTransferCertificate",
                  e.target.checked
                )
              }
            />
            <FormCheckbox
              checkLabel={t("i_certificate")}
              checkedValue={
                formSetting.previousSchoolAndDocument.incomeCertificate
              }
              onCheckboxAction={(e) =>
                onSubmitChecklistandler("incomeCertificate", e.target.checked)
              }
            />
            <FormCheckbox
              checkLabel={t("marksheet")}
              checkedValue={
                formSetting.previousSchoolAndDocument.lastYearMarksheet
              }
              onCheckboxAction={(e) =>
                onSubmitChecklistandler("lastYearMarksheet", e.target.checked)
              }
            />
            <FormCheckbox
              checkLabel={t("n_certificate")}
              checkedValue={
                formSetting.previousSchoolAndDocument.nationalityCertificate
              }
              onCheckboxAction={(e) =>
                onSubmitChecklistandler(
                  "nationalityCertificate",
                  e.target.checked
                )
              }
            />
            <FormCheckbox
              checkLabel={t("d_certificate")}
              checkedValue={
                formSetting.previousSchoolAndDocument.domicileCertificate
              }
              onCheckboxAction={(e) =>
                onSubmitChecklistandler("domicileCertificate", e.target.checked)
              }
            />
            <FormCheckbox
              checkLabel={t("non_cremy")}
              checkedValue={
                formSetting.previousSchoolAndDocument.nonCreamyLayerCertificate
              }
              onCheckboxAction={(e) =>
                onSubmitChecklistandler(
                  "nonCreamyLayerCertificate",
                  e.target.checked
                )
              }
            />
          </FormToggle>
          <BorderBottom />
          <FormToggle
            labelHeading={t("bank_details_")}
            labelDescription={t("labeltext5")}
            defaultLabel={false}
            checkedToggle={formSetting.bankDetails}
            onToggleHandler={(e) =>
              onSubmitFormHandler("bankDetails", e.target.checked)
            }
          />
          <BorderBottom />

          <FormToggle
            labelHeading={t("anti_ragging")}
            labelDescription={`(${t("anti_ragging")})`}
            defaultLabel={false}
            checkedToggle={formSetting.anti_ragging}
            onToggleHandler={(e) =>
              onSubmitFormHandler("anti_ragging", e.target.checked)
            }
          />
          <BorderBottom />

          <FormToggle
            labelHeading={t("id_card_upload")}
            labelDescription={`(${t("id_card_upload")})`}
            defaultLabel={false}
            checkedToggle={formSetting.id_card}
            onToggleHandler={(e) =>
              onSubmitFormHandler("id_card", e.target.checked)
            }
          />
          <BorderBottom />
        </div>
        <Notfication
          run={run}
          setRun={setRun}
          msg={msg}
          postiton="bottom"
          type="success"
        />
        {disabled && <QLoader />}
      </>
    </>
  );
};

export default StudentForm;
