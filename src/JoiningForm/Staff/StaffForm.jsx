import React, { useEffect } from "react";
import { useState } from "react";
import style from "../Student/Form/JoinForm.module.css";
import { useSelector } from "react-redux";
import { useJoinAsStaffMutation } from "../../services/joining/joinApi";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";
import QLoader from "../../Loader/QLoader";
import StaffApplyForm from "./StaffApplyForm";
import BorderBottom from "../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import { useStaffDirectJoin } from "../../hooks/authentication-api";
import { useLogin } from "../../Authentication/Login/Components/use-login";
import { useAddStaffToInstitute } from "../../hooks/institute/institute-staff-student-api";

function StaffForm({ location }) {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const ids = useSelector((state) => state.idChange);
  const [preview, setPreview] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [staffJoinData] = useJoinAsStaffMutation();
  const [staffDirectJoin] = useStaffDirectJoin();
  const [addStaffToInstitute] = useAddStaffToInstitute();
  const { existingAccountLogin } = useLogin();
  useEffect(() => {
    document.getElementById("scrollView")?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  }, [preview]);
  const onGoback = () => {
    if (preview) {
      setPreview((pre) => !pre);
    } else {
      navigate(-1);
    }
  };

  const onApplyForm = (data) => {
    setDisabled(!disabled);
    const applyStaff = {
      staffCode: location?.joinCode,
      fileArray: [],
    };
    applyStaff.fileArray.push(data?.file);
    for (let objProperties in data?.formData) {
      applyStaff[objProperties] = data?.formData[objProperties];
    }
    for (let objStaffProperties in data?.staffForm) {
      if (objStaffProperties === "asSameAddress") {
      } else if (objStaffProperties === "bankPassbook") {
        if (data?.staffForm[objStaffProperties]) {
          applyStaff.fileArray.push(data?.staffForm[objStaffProperties]);
        }
      } else
        applyStaff[objStaffProperties] = data?.staffForm[objStaffProperties];
    }
    for (let objDocumentProperties in data?.dynamicDocument) {
      if (objDocumentProperties === "previousSchoolDocument") {
      } else if (objDocumentProperties === "staffPreviousSchool")
        applyStaff[objDocumentProperties] =
          data?.dynamicDocument[objDocumentProperties];
      else if (data?.dynamicDocument[objDocumentProperties])
        applyStaff.fileArray.push(data?.dynamicDocument[objDocumentProperties]);
      else {
      }
    }
    if (location?.openAs === "DIRECT" && location?.verifyNumber) {
      staffDirectJoin({
        phoneNumber: location?.verifyNumber,
        direct_staff: applyStaff,
      })
        .then((res) => {
          setDisabled((pre) => !pre);
          existingAccountLogin({
            token: res?.data?.token,
            _id: res?.data?.user?._id,
            username: res?.data?.user?.username,
          });
        })
        .catch({});
    } else if (location?.openAs === "INSTITUTE_SIDE" && ids?.id) {
      addStaffToInstitute({
        phoneNumber: data?.staffPhoneNumberAdd,
        id: ids?.id,
        existingUser: data?.selectedUser ?? "",
        addStaff: applyStaff,
      })
        .then(() => {
          // console.info("this is resposne", res);
          setDisabled((pre) => !pre);
          navigate(-1);
        })
        .catch({});
    } else if (ids?.searchProfile?.id && ids?.id && location?.joinCode) {
      staffJoinData({
        insId: ids?.searchProfile?.id,
        staffData: applyStaff,
        uid: ids?.id,
      }).then((res) => {
        if (res.data.status) {
          setDisabled((pre) => !pre);
          navigate(`/q/${location?.urlUsername}/memberstab`);
        } else {
        }
      });
    } else {
      setDisabled((pre) => !pre);
    }
  };
  // console.info("this is location", location);
  return (
    <>
      <div className={style.goback_container} id="scrollView">
        <div className={style.goback_container_text} onClick={onGoback}>
          <img src="/images/arr-left-white.svg" alt="go back icon" />
          <h6 className={style.goback_container_text_go}>{t("go_back")}</h6>
        </div>
      </div>
      <div className={style.student_from_container}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h6 className={style.student_from_fill}> {t("form_fill_staff")}</h6>
          {preview && (
            <h6
              className={style.student_from_fill_edit}
              onClick={() => setPreview((pre) => !pre)}
            >
              {t("edit_")}
            </h6>
          )}
        </div>
        <BorderBottom customStyle={{ width: "100%" }} />
        <StaffApplyForm
          preview={preview}
          setPreview={setPreview}
          location={location}
          onApplyForm={onApplyForm}
        />
      </div>

      {disabled && <QLoader />}
    </>
  );
}

export default StaffForm;
