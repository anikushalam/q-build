import { refreshCode } from "./RefreshCode";
import { useState, useEffect } from "react";
import style from "./UniversalForm.module.css";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import {
  useInstituteStaffForm,
  useInstituteFormSettingUpdate,
} from "../../../../../Department/Institute/Components/DepartmentApi/depart-api";
import { Notfication } from "../../../../../validation/Snackbar";
import {
  useCreateStaffCode,
  useStaffCode,
} from "../../../../../hooks/institute/institute-staff-student-api";
import FormHeader from "./FormHeader";
import FormToggle from "./FormToggle";
import BorderBottom from "../StaffAProfile/BorderBottom";
import FormCheckbox from "./FormCheckbox";
import { useNavigate } from "react-router-dom";

const StaffForm = () => {
  const [run, setRun] = useState(false);
  const [msg, setMsg] = useState("");
  const ids = useSelector((state) => state.idChange);
  const navigate = useNavigate();
  const { staffCode, staffCodeRefetch } = useStaffCode({
    id: ids?.id,
    skip: !ids?.id,
  });
  const { t } = useTranslation();
  const [createStaffCode] = useCreateStaffCode();
  const RefreshCodeHandler = () => {
    const rand = refreshCode();
    if (rand) {
      createStaffCode({
        id: ids?.id,
        staffCode: { code: rand },
      }).then((res) => {
        if (res.data.institute) {
          staffCodeRefetch();
        }
      });
    }
  };

  const [instituteFormSettingUpdate] = useInstituteFormSettingUpdate();

  const { instituteStaffForm, instituteStaffFormRefetch } =
    useInstituteStaffForm({
      id: ids?.id,
      skip: !ids?.id,
    });
  const [formSetting, setFormSetting] = useState({
    otherPersonalInfo: false,
    identityDetails: false,
    addressInfo: false,
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
  });

  useEffect(() => {
    if (ids?.id) instituteStaffFormRefetch();
  }, [ids?.id, instituteStaffFormRefetch]);
  // console.info("this is form", formSetting);

  useEffect(() => {
    if (instituteStaffForm?.staffFormSetting)
      setFormSetting({
        otherPersonalInfo:
          instituteStaffForm?.staffFormSetting?.otherPersonalInfo,
        identityDetails: instituteStaffForm?.staffFormSetting?.identityDetails,
        addressInfo: instituteStaffForm?.staffFormSetting?.addressInfo,
        previousSchoolAndDocument: {
          previousSchoolDocument:
            instituteStaffForm?.staffFormSetting?.previousSchoolAndDocument
              ?.previousSchoolDocument,
          aadharCard:
            instituteStaffForm?.staffFormSetting?.previousSchoolAndDocument
              ?.aadharCard,
          identityDocument:
            instituteStaffForm?.staffFormSetting?.previousSchoolAndDocument
              ?.identityDocument,
          casteCertificate:
            instituteStaffForm?.staffFormSetting?.previousSchoolAndDocument
              ?.casteCertificate,
          joiningTransferLetter:
            instituteStaffForm?.staffFormSetting?.previousSchoolAndDocument
              ?.joiningTransferLetter,
          leavingTransferCertificate:
            instituteStaffForm?.staffFormSetting?.previousSchoolAndDocument
              ?.leavingTransferCertificate,
          incomeCertificate:
            instituteStaffForm?.staffFormSetting?.previousSchoolAndDocument
              ?.incomeCertificate,
          lastYearMarksheet:
            instituteStaffForm?.staffFormSetting?.previousSchoolAndDocument
              ?.lastYearMarksheet,
          nationalityCertificate:
            instituteStaffForm?.staffFormSetting?.previousSchoolAndDocument
              ?.nationalityCertificate,
          domicileCertificate:
            instituteStaffForm?.staffFormSetting?.previousSchoolAndDocument
              ?.domicileCertificate,
          nonCreamyLayerCertificate:
            instituteStaffForm?.staffFormSetting?.previousSchoolAndDocument
              ?.nonCreamyLayerCertificate,
        },
        bankDetails: instituteStaffForm?.staffFormSetting?.bankDetails,
      });
  }, [instituteStaffForm?.staffFormSetting]);

  const onSubmitFormHandler = (field, value) => {
    const updatedObj = { ...formSetting };
    for (let obj in updatedObj) {
      if (obj === field) {
        updatedObj[obj] = value;
      }
    }
    instituteFormSettingUpdate({
      id: ids?.id,
      formSetting: { staffFormSetting: updatedObj },
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
    // console.info(
    //   "this is checklist",
    //   field,
    //   updatedObj.previousSchoolAndDocument
    // );
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
        formSetting: { staffFormSetting: updatedObj },
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

  return (
    <>
      <FormHeader
        RefreshCodeHandler={RefreshCodeHandler}
        staffJoinCode={staffCode?.institute?.staffJoinCode || "-"}
        setStaffSetting={() => navigate(-1)}
        asStaff="Staff"
        availableCode={t("avail_ins_code")}
      />
      <div className={style.staff_form_container}>
        <FormToggle
          labelHeading={t("personal_info")}
          labelDescription={t("name_")}
          defaultLabel={true}
        />
        <BorderBottom />
        <FormToggle
          labelHeading={t("other_personal")}
          labelDescription={t("labeltext")}
          defaultLabel={false}
          checkedToggle={formSetting.otherPersonalInfo}
          onToggleHandler={(e) =>
            onSubmitFormHandler("otherPersonalInfo", e.target.checked)
          }
        />
        <BorderBottom />
        <FormToggle
          labelHeading={t("identity_details")}
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
            checkLabel={t("any_doc")}
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
          labelHeading={t("bank_details")}
          labelDescription={t("labeltext5")}
          defaultLabel={false}
          checkedToggle={formSetting.bankDetails}
          onToggleHandler={(e) =>
            onSubmitFormHandler("bankDetails", e.target.checked)
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

export default StaffForm;
