import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  useGetHostelForm,
  useUpdateHostelForm,
} from "../../../../../hooks/member_tab/hostel-api";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import FormCheckbox from "../../../../../StaffTab/components/DividerTab/MainContent/StaffForm/FormCheckbox";
import FormToggle from "../../../../../StaffTab/components/DividerTab/MainContent/StaffForm/FormToggle";
import { Notfication } from "../../../../../validation/Snackbar";
import style from "../Hostel.module.css";

const HostelFormSetting = ({ hid }) => {
  const [msg, setMsg] = useState("");
  const { t } = useTranslation();
  const [run, setRun] = useState(false);

  const [updateHostelForm] = useUpdateHostelForm();
  const { getHostelForm, getHostelFormRefetch } = useGetHostelForm({
    hid: hid,
    skip: !hid,
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
    cpi: false,
    ug_undertakings_hostel_admission: false,
    pg_undertakings_hostel_admission: false,
  });
  useEffect(() => {
    if (hid) getHostelFormRefetch();
  }, [hid, getHostelFormRefetch]);
  useEffect(() => {
    if (getHostelForm?.one_hostel?.student_form_query)
      setFormSetting({
        otherPersonalInfo:
          getHostelForm?.one_hostel?.student_form_query?.otherPersonalInfo,
        enrollmentPrn:
          getHostelForm?.one_hostel?.student_form_query?.enrollmentPrn,
        identityDetails:
          getHostelForm?.one_hostel?.student_form_query?.identityDetails,
        addressInfo: getHostelForm?.one_hostel?.student_form_query?.addressInfo,
        parentsInfo: getHostelForm?.one_hostel?.student_form_query?.parentsInfo,
        previousSchoolAndDocument: {
          previousSchoolDocument:
            getHostelForm?.one_hostel?.student_form_query
              ?.previousSchoolAndDocument?.previousSchoolDocument,
          aadharCard:
            getHostelForm?.one_hostel?.student_form_query
              ?.previousSchoolAndDocument?.aadharCard,
          identityDocument:
            getHostelForm?.one_hostel?.student_form_query
              ?.previousSchoolAndDocument?.identityDocument,
          casteCertificate:
            getHostelForm?.one_hostel?.student_form_query
              ?.previousSchoolAndDocument?.casteCertificate,
          joiningTransferLetter:
            getHostelForm?.one_hostel?.student_form_query
              ?.previousSchoolAndDocument?.joiningTransferLetter,
          leavingTransferCertificate:
            getHostelForm?.one_hostel?.student_form_query
              ?.previousSchoolAndDocument?.leavingTransferCertificate,
          incomeCertificate:
            getHostelForm?.one_hostel?.student_form_query
              ?.previousSchoolAndDocument?.incomeCertificate,
          lastYearMarksheet:
            getHostelForm?.one_hostel?.student_form_query
              ?.previousSchoolAndDocument?.lastYearMarksheet,
          nationalityCertificate:
            getHostelForm?.one_hostel?.student_form_query
              ?.previousSchoolAndDocument?.nationalityCertificate,
          domicileCertificate:
            getHostelForm?.one_hostel?.student_form_query
              ?.previousSchoolAndDocument?.domicileCertificate,
          nonCreamyLayerCertificate:
            getHostelForm?.one_hostel?.student_form_query
              ?.previousSchoolAndDocument?.nonCreamyLayerCertificate,
        },
        bankDetails: getHostelForm?.one_hostel?.student_form_query?.bankDetails,
        cpi: getHostelForm?.one_hostel?.student_form_query?.cpi,
        ug_undertakings_hostel_admission:
          getHostelForm?.one_hostel?.ug_undertakings_hostel_admission,
        pg_undertakings_hostel_admission:
          getHostelForm?.one_hostel?.pg_undertakings_hostel_admission,
      });
  }, [getHostelForm?.one_hostel?.student_form_query]);

  const onSubmitFormHandler = (field, value) => {
    const updatedObj = { ...formSetting };
    for (let obj in updatedObj) {
      if (obj === field) {
        updatedObj[obj] = value;
      }
    }
    updateHostelForm({
      hid: hid,
      formSetting: {
        student_form_query: updatedObj,
        ug_undertakings_hostel_admission:
          updatedObj.ug_undertakings_hostel_admission,
        pg_undertakings_hostel_admission:
          updatedObj.pg_undertakings_hostel_admission,
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
    for (let obj in updatedObj.previousSchoolAndDocument) {
      if (obj === field) {
        updatedObj.previousSchoolAndDocument[obj] = value;
      }
    }
    updateHostelForm({
      hid: hid,
      formSetting: { student_form_query: updatedObj },
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
  };

  return (
    <>
      <div className={style.with_search}>
        <h6>{t("hostel_form_setting")}</h6>
      </div>
      <BorderBottom
        customStyle={{
          marginTop: "0.5rem",
          marginBottom: "0.6rem",
          width: "100%",
        }}
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
          labelHeading={t("hostel_cpi")}
          labelDescription={t("hostel_cpi_text")}
          defaultLabel={false}
          checkedToggle={formSetting.cpi}
          onToggleHandler={(e) => onSubmitFormHandler("cpi", e.target.checked)}
        />
        <BorderBottom />
        <FormToggle
          labelHeading={t("turn_off_on_ug_hostel_undertakings")}
          labelDescription=""
          defaultLabel={false}
          checkedToggle={formSetting.ug_undertakings_hostel_admission}
          onToggleHandler={(e) =>
            onSubmitFormHandler(
              "ug_undertakings_hostel_admission",
              e.target.checked
            )
          }
        />
        <BorderBottom />
        <FormToggle
          labelHeading={t("turn_off_on_pg_hostel_undertakings")}
          labelDescription=""
          defaultLabel={false}
          checkedToggle={formSetting.pg_undertakings_hostel_admission}
          onToggleHandler={(e) =>
            onSubmitFormHandler(
              "pg_undertakings_hostel_admission",
              e.target.checked
            )
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

export default HostelFormSetting;
