import React, { useEffect, useState } from "react";
import style from "./CertificateModal.module.css";
import { Dialog } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import {
  useEditEditable,
  useGetEditable,
} from "../../../../../hooks/institute/institute-staff-student-api";
import QLoader from "../../../../../Loader/QLoader";
import { useFileUpload } from "../../../../../hooks/authentication-api";
import JoinFormFileEdit from "../../../../../JoiningForm/Student/Form/JoinFormFileEdit";
import Crop from "../../../../../ImageCrop/Crop";
import PopupWrapper from "../../../../../MembersTab/staff/Mainbody/FinanceManager/FeesStructure/PopupWrapper";
import StringLength from "../../../../../Custom/Validation/StringLength";
import JoinFormInput from "../../../../../JoiningForm/Student/Form/JoinFormInput";

function CertificateModal({ addDisplay, hideModal, instituteId, viewAs }) {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const [photoURL, setPhotoURL] = useState("");
  const [file, setFile] = useState("");
  const [openCrop, setOpenCrop] = useState(false);
  const [upload, setUpload] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState("");
  const [filled, setFilled] = useState("");
  const id = useSelector((state) => state.idChange.id);
  const [whichLogo, setWhichLogo] = useState("");
  const { getEditable, getEditableRefetch } = useGetEditable({
    id: instituteId ? instituteId : id,
    skip: viewAs === "DESIGNATION_SIDE" ? !instituteId : !id,
  });
  const [editable, setEditable] = useState({
    insAffiliated: getEditable?.detail?.insAffiliated,
    insEditableText_one: getEditable?.detail?.insEditableText_one,
    insEditableText_two: getEditable?.detail?.insEditableText_two,
    affliatedLogo: getEditable?.detail?.affliatedLogo,
    authority: getEditable?.detail?.authority,
    authority_signature: getEditable?.detail?.authority_signature,
    autority_stamp_profile: getEditable?.detail?.autority_stamp_profile,
  });

  useEffect(() => {
    if ((id, instituteId)) getEditableRefetch();
  }, [id, instituteId, getEditableRefetch]);

  useEffect(() => {
    if (getEditable?.detail) {
      setEditable({
        insAffiliated: getEditable?.detail?.insAffiliated,
        insEditableText_one: getEditable?.detail?.insEditableText_one,
        insEditableText_two: getEditable?.detail?.insEditableText_two,
        affliatedLogo: getEditable?.detail?.affliatedLogo,
        authority: getEditable?.detail?.authority,
        authority_signature: getEditable?.detail?.authority_signature,
        autority_stamp_profile: getEditable?.detail?.autority_stamp_profile,
      });
    }
  }, [getEditable?.detail]);
  const [editEditable] = useEditEditable();
  const [oneFileUpload] = useFileUpload();

  const onFileUpload = (e, isWhich) => {
    if (e.target.files?.length) {
      const image = URL.createObjectURL(e.target.files[0]);
      setFile(e.target.files[0]);
      setProfilePhoto(image);
      setPhotoURL(image);
      setOpenCrop(true);
      setWhichLogo(isWhich);
    }
  };

  const onUpload = (file) => {
    if (file) {
      setDisabled((pre) => !pre);

      const formData = new FormData();
      formData.append("file", file);
      oneFileUpload({
        fileUpload: formData,
      })
        .then((res) => {
          if (res.data?.imageKey) {
            if (whichLogo === "affliatedLogo") {
              setEditable((prev) => ({
                ...prev,
                affliatedLogo: res.data?.imageKey,
              }));
            } else if (whichLogo === "authority_signature") {
              setEditable((prev) => ({
                ...prev,
                authority_signature: res.data?.imageKey,
              }));
            } else {
              setEditable((prev) => ({
                ...prev,
                autority_stamp_profile: res.data?.imageKey,
              }));
            }
          }
          setDisabled((pre) => !pre);
          setWhichLogo("");
        })
        .catch({});
    }
  };

  useEffect(() => {
    if (upload) {
      onUpload(file);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [upload, file]);

  const onValidation = (data) => {
    const errors = {};
    for (let obj in data) {
      if (
        [
          "authority",
          "authority_signature",
          "autority_stamp_profile",
          "affliatedLogo",
        ]?.includes(obj)
      ) {
      } else {
        if (!data[obj]) errors[obj] = `${obj} is required!`;
      }
    }
    return errors;
  };

  const AddEditableQuery = () => {
    const validation = onValidation(editable);
    let flag = false;
    for (let errField in validation) {
      if (errField) {
        flag = true;
        break;
      }
    }
    if (flag) {
      setFilled(validation);
    } else {
      setDisabled((pre) => !pre);
      editEditable({
        id: viewAs === "DESIGNATION_SIDE" ? instituteId : id,
        e_data: editable,
      })
        .then(() => {
          getEditableRefetch();
          hideModal();
          setDisabled((pre) => !pre);
        })
        .catch({});
    }
  };

  return (
    <>
      <PopupWrapper open={addDisplay} onClose={() => hideModal(false)}>
        <div
          className={style.addDisplay}
          style={{
            maxHeight: "35rem",
            overflowY: "auto",
            scrollBehavior: "smooth",
          }}
        >
          <div className={style.title}>
            <h6>{t("menu")}</h6>
            <img
              src="/images/close-post-icon.svg"
              alt=""
              onClick={() => hideModal(false)}
            />
          </div>

          <div className={style.body}>
            <JoinFormInput
              labelText={t("aff_with")}
              placeholder="please enter affiliation body name"
              name={"insAffiliated"}
              value={editable?.insAffiliated}
              type={"text"}
              onChange={(e) => {
                if (e.target.value?.length <= 50) {
                  setEditable((prev) => ({
                    ...prev,
                    insAffiliated: e.target.value,
                  }));
                }
              }}
              errorShow={filled["insAffiliated"]}
            />
            <StringLength maxLength={50} valueLength={editable.insAffiliated} />

            <JoinFormInput
              labelText={t("accreditation")}
              placeholder="Accredited by NAAC with B++, ISO 9001:2015 Certified"
              name={"insEditableText_one"}
              value={editable?.insEditableText_one}
              type={"text"}
              onChange={(e) => {
                if (e.target.value?.length <= 200) {
                  setEditable((prev) => ({
                    ...prev,
                    insEditableText_one: e.target.value,
                  }));
                }
              }}
              errorShow={filled["insEditableText_one"]}
            />
            <StringLength
              maxLength={200}
              valueLength={editable.insEditableText_one}
            />
            <JoinFormInput
              labelText={t("accreditation1")}
              placeholder="Please enter other info like DTE code"
              name={"insEditableText_two"}
              value={editable?.insEditableText_two}
              type={"text"}
              onChange={(e) => {
                if (e.target.value?.length <= 88) {
                  setEditable((prev) => ({
                    ...prev,
                    insEditableText_two: e.target.value,
                  }));
                }
              }}
              errorShow={filled["insEditableText_two"]}
            />
            <StringLength
              maxLength={88}
              valueLength={editable.insEditableText_two}
            />
            <JoinFormInput
              labelText={t("competent_authority")}
              placeholder={t("competent_authority_lable")}
              name={"authority"}
              value={editable.authority}
              type={"text"}
              onChange={(e) => {
                setEditable((prev) => ({
                  ...prev,
                  authority: e.target.value,
                }));
              }}
            />
            <JoinFormFileEdit
              labelText={t("authority_signature")}
              name={"authority_signature_lable"}
              value={
                editable.authority_signature ? editable.authority_signature : ""
              }
              onChange={(e) => onFileUpload(e, "authority_signature")}
              customStyleContainer={{
                width: "100%",
              }}
            />
            <JoinFormFileEdit
              labelText={t("affiliated_logo")}
              name={"affliatedLogo"}
              value={editable.affliatedLogo ? editable.affliatedLogo : ""}
              onChange={(e) => onFileUpload(e, "affliatedLogo")}
              customStyleContainer={{
                width: "100%",
              }}
            />
            <JoinFormFileEdit
              labelText={t("authority_stamp_profile")}
              name={"autority_stamp_profile"}
              value={
                editable.autority_stamp_profile
                  ? editable.autority_stamp_profile
                  : ""
              }
              onChange={(e) => onFileUpload(e, "autority_stamp_profile")}
              customStyleContainer={{
                width: "100%",
              }}
            />
          </div>
          <div className={style.footer} onClick={AddEditableQuery}>
            <div className={style.btn}>{t("save_menu")}</div>
          </div>
        </div>{" "}
        {disabled && <QLoader />}
        <Dialog open={openCrop}>
          <Crop
            setPhotoURL={setPhotoURL}
            photoURL={photoURL}
            setFile={setFile}
            setOpenCrop={setOpenCrop}
            setUpload={setUpload}
            setProfilePhoto={setProfilePhoto}
            first={1}
            second={1}
          />
        </Dialog>
      </PopupWrapper>
    </>
  );
}

export default CertificateModal;
