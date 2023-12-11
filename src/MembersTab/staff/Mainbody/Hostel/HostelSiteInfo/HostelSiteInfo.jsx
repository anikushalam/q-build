import React, { useEffect, useState } from "react";
import style from "./HostelSiteInfo.module.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import JoinFormTextArea from "../../../../../JoiningForm/Student/Form/JoinFormTextArea";
import QLoader from "../../../../../Loader/QLoader";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import { useSelector } from "react-redux";
import { useGetOneUserProfileQuery } from "../../../../../services/qvipleAPI";
import JoinFormInput from "../../../../../JoiningForm/Student/Form/JoinFormInput";
import Navbar from "../../../../../Dashboard/UserDashboard/Components/Navbar/Navbar";
import {
  useHostelGetSiteInfo,
  useHostelUpdateSiteInfo,
} from "../../../../../hooks/member_tab/hostel-api";
import { useFileUpload } from "../../../../../hooks/authentication-api";
import Crop from "../../../../../ImageCrop/Crop";
import { Dialog } from "@mui/material";
import JoinFormFileEdit from "../../../../../JoiningForm/Student/Form/JoinFormFileEdit";
const HostelSiteInfo = ({ hid, viewAs }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
  const [otherField, setOtherField] = useState({
    hostel_about: "",
    hostel_process: "",
    cashier_name: "",
    cashier_signature: "",
  });
  const [contact, setContact] = useState([
    {
      contact_department_name: "",
      contact_person_name: "",
      contact_person_mobile: "",
      contact_person_email: "",
    },
  ]);
  const [photoURL, setPhotoURL] = useState("");
  const [file, setFile] = useState("");
  const [openCrop, setOpenCrop] = useState(false);
  const [upload, setUpload] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState("");
  const id = useSelector((state) => state.idChange.id);
  const { data: profileData, refetch: profileDataRefetch } =
    useGetOneUserProfileQuery(id, {
      skip: viewAs === "INSTITUTE" ? true : !id,
    });

  useEffect(() => {
    if (id) profileDataRefetch();
  }, [id, profileDataRefetch]);
  const { hostelGetSiteInfo, hostelGetSiteInfoRefetch } = useHostelGetSiteInfo({
    hid: hid,
    skip: !hid,
  });
  const [hostelUpdateSiteInfo] = useHostelUpdateSiteInfo();
  const [oneFileUpload] = useFileUpload();

  useEffect(() => {
    if (hid) hostelGetSiteInfoRefetch();
  }, [hid, hostelGetSiteInfoRefetch]);
  useEffect(() => {
    if (hostelGetSiteInfo?.hostel_site) {
      setOtherField({
        hostel_about: hostelGetSiteInfo?.hostel_site?.hostel_about,
        hostel_process: hostelGetSiteInfo?.hostel_site?.hostel_process,
        cashier_name: hostelGetSiteInfo?.hostel_site?.cashier_name,
        cashier_signature: hostelGetSiteInfo?.hostel_site?.cashier_signature,
      });
      if (hostelGetSiteInfo?.hostel_site?.hostel_contact?.length) {
        let cont = [];
        for (let con of hostelGetSiteInfo?.hostel_site?.hostel_contact) {
          let obj = {
            contact_department_name: con?.contact_department_name,
            contact_person_name: con?.contact_person_name,
            contact_person_mobile: con?.contact_person_mobile,
            contact_person_email: con?.contact_person_email,
            contactId: con?._id,
          };
          cont.push(obj);
        }
        setContact(cont);
      }
    }
  }, [hostelGetSiteInfo?.hostel_site]);

  const onAddContact = () => {
    setContact((prevState) => [
      ...prevState,
      {
        contact_department_name: "",
        contact_person_name: "",
        contact_person_mobile: "",
        contact_person_email: "",
      },
    ]);
  };

  const onInputChage = (e, index) => {
    const inputarr = [...contact];
    for (let inp = 0; inp < inputarr?.length; inp++) {
      if (inp === index) {
        inputarr[inp][e.target.name] = e.target.value;
      }
    }
    setContact(inputarr);
  };
  const onBack = () => {
    navigate(-1);
  };

  const onNormalInputChange = (e) => {
    setOtherField((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
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
              cashier_signature: res.data?.imageKey,
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
  const onUpdate = () => {
    setDisabled((pre) => !pre);
    hostelUpdateSiteInfo({
      hid: hid,
      updateSiteInfo: {
        ...otherField,
        hostel_contact: contact?.filter((cont) =>
          !cont?.contactId ? cont : ""
        ),
        edit_hostel_contact: contact?.filter((cont) =>
          cont?.contactId ? cont : ""
        ),
      },
    })
      .then(() => {
        setDisabled((pre) => !pre);
      })
      .catch({});
  };

  return (
    <div className={style.bgContainer}>
      {viewAs === "INSTITUTE" ? null : (
        <div className={style.navbar}>
          <Navbar
            status="members"
            profileData={profileData?.user}
            username={profileData?.user?.username}
            name={profileData?.user?.userLegalName}
            photoId={profileData?.user?.photoId}
            profilePhoto={profileData?.user?.profilePhoto}
          />
        </div>
      )}

      <div className={style.container}>
        <div className={style.containerhead}>
          <h6>{t("update_hostel_site_info")}</h6>
          <img src="/images/close-post-icon.svg" alt="" onClick={onBack} />
        </div>
        <BorderBottom
          customStyle={{
            width: "100%",
          }}
        />

        <div className={style.containercontent}>
          <div className={style.container_inner_content}>
            <JoinFormTextArea
              labelText={t("about_hostel_department")}
              placeholder={t("about_hostel_department_placeholder")}
              name={"hostel_about"}
              value={otherField.hostel_about}
              type={"text"}
              onChange={onNormalInputChange}
              customStyleContainer={{
                width: "100%",
              }}
            />

            <JoinFormTextArea
              labelText={t("hostel_process_site")}
              placeholder={t("hostel_process_site_placeholder")}
              name={"hostel_process"}
              value={otherField.hostel_process}
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
              <JoinFormInput
                labelText={t("site_cashier_name")}
                placeholder={t("site_cashier_name_placeholder")}
                name={"cashier_name"}
                value={otherField?.cashier_name}
                type={"text"}
                onChange={onNormalInputChange}
                customStyleContainer={{
                  width: "69.5%",
                }}
              />
              <JoinFormFileEdit
                labelText={t("cashier_signature")}
                name={"cashier_signature"}
                value={otherField.cashier_signature}
                onChange={onFileUpload}
                customStyleContainer={{
                  width: "29.5%",
                }}
              />
            </div>

            <div className={style.add_contact_person}>
              <h6>{t("add_contact_persons")}</h6>
              {contact?.map((cont, index) => (
                <div key={index}>
                  <div className={style.show_field}>
                    <JoinFormInput
                      labelText={t("site_department_name")}
                      placeholder={t("site_department_name_placeholder")}
                      name={"contact_department_name"}
                      value={cont?.contact_department_name}
                      type={"text"}
                      onChange={(e) => onInputChage(e, index)}
                      customStyleContainer={{
                        width: "49.5%",
                      }}
                    />
                    <JoinFormInput
                      labelText={t("contact_person_name")}
                      placeholder={t("contact_person_name_placeholder")}
                      name={"contact_person_name"}
                      value={cont?.contact_person_name}
                      type={"text"}
                      onChange={(e) => onInputChage(e, index)}
                      customStyleContainer={{
                        width: "49.5%",
                      }}
                    />
                  </div>
                  <div className={style.show_field}>
                    <JoinFormInput
                      labelText={t("contact_person_mobile")}
                      placeholder={t("contact_person_mobile_placeholder")}
                      name={"contact_person_mobile"}
                      value={cont?.contact_person_mobile}
                      type={"text"}
                      onChange={(e) => onInputChage(e, index)}
                      customStyleContainer={{
                        width: "49.5%",
                      }}
                    />
                    <JoinFormInput
                      labelText={t("contact_person_email")}
                      placeholder={t("contact_person_email_placeholder")}
                      name={"contact_person_email"}
                      value={cont?.contact_person_email}
                      type={"email"}
                      onChange={(e) => onInputChage(e, index)}
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
              title="Add Contact Person"
              onClick={onAddContact}
            >
              {t("add_contact_person")}
            </button>
            {disabled && <QLoader />}
            <button className={style.update_btn} onClick={onUpdate}>
              {t("update")}
            </button>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostelSiteInfo;
