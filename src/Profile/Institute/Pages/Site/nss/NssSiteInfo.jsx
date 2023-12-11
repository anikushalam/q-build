import React, { useEffect, useState } from "react";
import style from "../../../../../MembersTab/staff/Mainbody/StaffAdmisionAdmin/AdmissionSiteInfo/AdmissionSiteInfo.module.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import JoinFormTextArea from "../../../../../JoiningForm/Student/Form/JoinFormTextArea";
import QLoader from "../../../../../Loader/QLoader";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import { useGetOneUserProfileQuery } from "../../../../../services/qvipleAPI";
import {
  useNssSiteInfo,
  useGetNssSiteInfo,
  useUpdateNssSiteInfo,
} from "../../../../../hooks/setting-api";
import JoinFormInput from "../../../../../JoiningForm/Student/Form/JoinFormInput";
import { useFileUpload } from "../../../../../hooks/authentication-api";
import JoinFormFileEdit from "../../../../../JoiningForm/Student/Form/JoinFormFileEdit";
import JoinFormSelect from "../../../../../JoiningForm/Student/Form/JoinFormSelect";
import { useSelector } from "react-redux";
import { useAssignSearchStaff } from "../../../../../Post/Institute/Components/search-api";
import Crop from "../../../../../ImageCrop/Crop";
import { Dialog } from "@mui/material";

function NssSiteInfo({ instituteId, nid, viewAs }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const id = useSelector((state) => state.idChange?.id);
  const [disabled, setDisabled] = useState(false);
  const [oneFileUpload] = useFileUpload();
  const [documentUrl, setDocumentUrl] = useState([]);
  const [fieldName, setFieldName] = useState("");
  //  -----------------------------
  const [photoURL, setPhotoURL] = useState("");
  const [file, setFile] = useState("");
  const [openCrop, setOpenCrop] = useState(false);
  const [upload, setUpload] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState("");
  const [nssSiteInfoo] = useNssSiteInfo();
  const [updateNssSiteInfoo] = useUpdateNssSiteInfo();
  const [otherField, setOtherField] = useState({
    nss_about: "",
    nss_photo: "",
    nss_objective: "",
    nss_head: "",
    nss_roles: "",
    nss_commitee: [],
  });
  const [memberField, setMemberField] = useState([]);

  useEffect(() => {
    setOtherField((prevState) => ({
      ...prevState,
      [fieldName]: memberField,
    }));
  }, [memberField, fieldName]);
  const { assignSearchStaff, assignSearchStaffRefetch } = useAssignSearchStaff({
    skip: viewAs === "ADMISSION_ADMIN" ? !instituteId : !id,
    search: {
      search: "",
      page: 1,
      id: viewAs === "ADMISSION_ADMIN" ? instituteId : id,
      limit: 500,
    },
  });
  const { getNssSiteInfo, getNssSiteInfoRefetch } = useGetNssSiteInfo({
    nid: nid,
    skip: !nid,
  });
  const onAddMember = (fieldName) => {
    setFieldName(fieldName);
    setMemberField([
      ...otherField[fieldName],
      {
        name: "",
        designation: "",
      },
    ]);
  };

  const onFileUpload = (e) => {
    if (e.target.files[0]) {
      const image = URL.createObjectURL(e.target.files[0]);
      setFile(e.target.files[0]);
      setProfilePhoto(image);
      setPhotoURL(image);
      setOpenCrop(true);
    }
  };
  //  -----------------------------

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
            setOtherField((prev) => ({
              ...prev,
              nss_photo: res.data?.imageKey,
            }));
          }
          setDisabled((pre) => !pre);
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

  const onBack = () => {
    navigate(-1);
  };

  const onNormalInputChange = (e, index) => {
    if (e.target.name === "name" || e.target.name === "designation") {
      const inputarr = [...memberField];
      for (let inp = 0; inp < inputarr?.length; inp++) {
        if (inp === index) {
          inputarr[inp][e.target.name] = e.target.value;
        }
      }
      setMemberField(inputarr);
    } else {
      setOtherField((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    }
  };
  const onUpdate = () => {
    setDisabled((pre) => !pre);

    if (nid) {
      updateNssSiteInfoo({
        aid: nid,
        updateSiteInfo: {
          otherField,
        },
      })
        .then(() => {
          setDisabled((pre) => !pre);
        })
        .catch({});
    } else {
      nssSiteInfoo({
        id: id,
        updateSiteInfo: {
          otherField,
        },
      })
        .then(() => {
          setDisabled((pre) => !pre);
        })
        .catch({});
    }
  };

  return (
    <>
      <div className={style.bgContainer}>
        <div className={style.container}>
          <div className={style.containerhead}>
            <h6>{t("nss")}</h6>
            <img src="/images/close-post-icon.svg" alt="" onClick={onBack} />
          </div>

          <BorderBottom
            customStyle={{
              width: "100%",
              marginBottom: "1rem",
            }}
          />

          <div className={style.containercontent}>
            <div className={style.container_inner_content}>
              <JoinFormTextArea
                labelText={t("nss_about")}
                placeholder={t("nss_about_placeholder")}
                name={"nss_about"}
                value={otherField.nss_about}
                type={"text"}
                onChange={onNormalInputChange}
                customStyleContainer={{
                  width: "100%",
                }}
              />

              <div
                className={style.show_field}
                style={{
                  alignItems: "flex-start",
                }}
              >
                <JoinFormSelect
                  selectLabel={t("select_dean_academic")}
                  selectedValue={t("select_dean_placeholder")}
                  value={otherField.academic_head}
                  name={"nss_head"}
                  onChange={onNormalInputChange}
                  options={assignSearchStaff?.staff}
                  openAs="academicSiteInfo"
                  customStyleContainer={{
                    width: "49.5%",
                  }}
                />

                <JoinFormFileEdit
                  labelText={t("academic_photo")}
                  name={"dean_academic_photo"}
                  value={otherField.nss_photo}
                  onChange={onFileUpload}
                  customStyleContainer={{
                    width: "49.5%",
                  }}
                />
              </div>

              <JoinFormTextArea
                labelText={t("nss_objective")}
                placeholder={t("nss_objective_placeholder")}
                name={"nss_objective"}
                value={otherField.nss_objective}
                type={"text"}
                onChange={onNormalInputChange}
                customStyleContainer={{
                  width: "100%",
                }}
              />

              <JoinFormTextArea
                labelText={t("nss_roles")}
                placeholder={t("nss_roles_placeholder")}
                name={"nss_roles"}
                value={otherField.nss_roles}
                type={"text"}
                onChange={onNormalInputChange}
                customStyleContainer={{
                  width: "100%",
                }}
              />

              <div className={style.add_contact_person}>
                <h6 style={{ marginTop: "1.5rem" }}>{t("nss_commitee")}</h6>
                {otherField?.nss_commitee?.map((member, index) => (
                  <div key={index}>
                    <div className={style.show_field}>
                      <JoinFormInput
                        labelText={t("name")}
                        placeholder={t("enter_name")}
                        name={"name"}
                        value={member?.name}
                        type={"text"}
                        onChange={(e) => onNormalInputChange(e, index)}
                        customStyleContainer={{
                          width: "49.5%",
                        }}
                      />
                      <JoinFormInput
                        labelText={t("designation")}
                        placeholder={t("designation_details")}
                        name={"designation"}
                        value={memberField?.designation}
                        type={"text"}
                        onChange={(e) => onNormalInputChange(e, index)}
                        customStyleContainer={{
                          width: "49.5%",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <button
                className={style.add_contact_person_btn}
                title="Add Member"
                onClick={() => onAddMember("nss_commitee")}
              >
                {t("add_member")}
              </button>

              <button className={style.update_btn} onClick={onUpdate}>
                {nid ? t("update") : t("add")}
              </button>
            </div>
          </div>
        </div>
      </div>
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
    </>
  );
}

export default NssSiteInfo;
