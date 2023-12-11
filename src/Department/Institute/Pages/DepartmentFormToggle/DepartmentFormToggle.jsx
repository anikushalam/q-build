import React, { useEffect, useState } from "react";
import { Notfication } from "../../../../validation/Snackbar";
import {
  useDepartmentFormSettingUpdate,
  useDepartmentStudentForm,
} from "../../Components/DepartmentApi/depart-api";
import FormToggle from "../../../../StaffTab/components/DividerTab/MainContent/StaffForm/FormToggle";
import BorderBottom from "../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import FormCheckbox from "../../../../StaffTab/components/DividerTab/MainContent/StaffForm/FormCheckbox";
import { useTranslation } from "react-i18next";
import style from "../Department.module.css";

const DepartmentFormToggle = ({ did }) => {
  const { t } = useTranslation();
  const [msg, setMsg] = useState("");
  const [run, setRun] = useState(false);
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
    gate_score: false,
    marks_and_degree_score: false,
    ug_undertakings_admission: false,
    pg_undertakings_admission: false,
    anti_ragging: false,
    id_card: false,
  });
  const [departmentFormSettingUpdate] = useDepartmentFormSettingUpdate();
  const { departmentStudentForm, departmentStudentFormRefetch } =
    useDepartmentStudentForm({
      did: did,
      skip: !did,
    });
  useEffect(() => {
    if (did) departmentStudentFormRefetch();
  }, [did, departmentStudentFormRefetch]);

  useEffect(() => {
    if (departmentStudentForm?.studentFormSetting)
      setFormSetting({
        otherPersonalInfo:
          departmentStudentForm?.studentFormSetting?.otherPersonalInfo,
        enrollmentPrn: departmentStudentForm?.studentFormSetting?.enrollmentPrn,
        identityDetails:
          departmentStudentForm?.studentFormSetting?.identityDetails,
        addressInfo: departmentStudentForm?.studentFormSetting?.addressInfo,
        parentsInfo: departmentStudentForm?.studentFormSetting?.parentsInfo,
        previousSchoolAndDocument: {
          previousSchoolDocument:
            departmentStudentForm?.studentFormSetting?.previousSchoolAndDocument
              ?.previousSchoolDocument,
          aadharCard:
            departmentStudentForm?.studentFormSetting?.previousSchoolAndDocument
              ?.aadharCard,
          identityDocument:
            departmentStudentForm?.studentFormSetting?.previousSchoolAndDocument
              ?.identityDocument,
          casteCertificate:
            departmentStudentForm?.studentFormSetting?.previousSchoolAndDocument
              ?.casteCertificate,
          joiningTransferLetter:
            departmentStudentForm?.studentFormSetting?.previousSchoolAndDocument
              ?.joiningTransferLetter,
          leavingTransferCertificate:
            departmentStudentForm?.studentFormSetting?.previousSchoolAndDocument
              ?.leavingTransferCertificate,
          incomeCertificate:
            departmentStudentForm?.studentFormSetting?.previousSchoolAndDocument
              ?.incomeCertificate,
          lastYearMarksheet:
            departmentStudentForm?.studentFormSetting?.previousSchoolAndDocument
              ?.lastYearMarksheet,
          nationalityCertificate:
            departmentStudentForm?.studentFormSetting?.previousSchoolAndDocument
              ?.nationalityCertificate,
          domicileCertificate:
            departmentStudentForm?.studentFormSetting?.previousSchoolAndDocument
              ?.domicileCertificate,
          nonCreamyLayerCertificate:
            departmentStudentForm?.studentFormSetting?.previousSchoolAndDocument
              ?.nonCreamyLayerCertificate,
        },
        bankDetails: departmentStudentForm?.studentFormSetting?.bankDetails,
        gate_score: departmentStudentForm?.studentFormSetting?.gate_score,
        marks_and_degree_score:
          departmentStudentForm?.studentFormSetting?.marks_and_degree_score,
        ug_undertakings_admission:
          departmentStudentForm?.ug_undertakings_admission,
        pg_undertakings_admission:
          departmentStudentForm?.pg_undertakings_admission,

        anti_ragging: departmentStudentForm?.studentFormSetting?.anti_ragging,
        id_card: departmentStudentForm?.studentFormSetting?.id_card,
      });
  }, [departmentStudentForm?.studentFormSetting]);

  const onSubmitFormHandler = (field, value) => {
    if (did) {
      const updatedObj = { ...formSetting };
      for (let obj in updatedObj) {
        if (obj === field) {
          updatedObj[obj] = value;
        }
      }
      departmentFormSettingUpdate({
        did: did,
        formSetting: {
          studentFormSetting: updatedObj,
          ug_undertakings_admission: updatedObj.ug_undertakings_admission,
          pg_undertakings_admission: updatedObj.pg_undertakings_admission,
        },
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
    }
  };

  const onSubmitChecklistandler = (field, value) => {
    if (did) {
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
        updatedObj.previousSchoolAndDocument[
          "nonCreamyLayerCertificate"
        ] = false;
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
        departmentFormSettingUpdate({
          did: did,
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
    }
  };

  return (
    <>
      <div>
        <h6 className={style.student_form_header}>
          {t("student_form_setting")}
        </h6>
        <BorderBottom />

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
            onSubmitChecklistandler("previousSchoolDocument", e.target.checked)
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
              onSubmitChecklistandler("joiningTransferLetter", e.target.checked)
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
          labelHeading={t("gate_score")}
          labelDescription={t("labeltext8")}
          defaultLabel={false}
          checkedToggle={formSetting.gate_score}
          onToggleHandler={(e) =>
            onSubmitFormHandler("gate_score", e.target.checked)
          }
        />
        <BorderBottom />
        <FormToggle
          labelHeading={t("marks_and_degree")}
          labelDescription={t("labeltext9")}
          defaultLabel={false}
          checkedToggle={formSetting.marks_and_degree_score}
          onToggleHandler={(e) =>
            onSubmitFormHandler("marks_and_degree_score", e.target.checked)
          }
        />
        <BorderBottom />
        <FormToggle
          labelHeading={t("turn_off_on_ug_admission_undertakings")}
          labelDescription=""
          defaultLabel={false}
          checkedToggle={formSetting.ug_undertakings_admission}
          onToggleHandler={(e) =>
            onSubmitFormHandler("ug_undertakings_admission", e.target.checked)
          }
        />
        <BorderBottom />
        <FormToggle
          labelHeading={t("turn_off_on_pg_admission_undertakings")}
          labelDescription=""
          defaultLabel={false}
          checkedToggle={formSetting.pg_undertakings_admission}
          onToggleHandler={(e) =>
            onSubmitFormHandler("pg_undertakings_admission", e.target.checked)
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
    </>
  );
};

export default DepartmentFormToggle;
