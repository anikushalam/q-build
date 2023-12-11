import React, { useEffect, useState } from "react";
import style from "./DeaprtmentSiteInfo.module.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import JoinFormTextArea from "../../../../../JoiningForm/Student/Form/JoinFormTextArea";
import JoinFormFileEdit from "../../../../../JoiningForm/Student/Form/JoinFormFileEdit";
import QLoader from "../../../../../Loader/QLoader";
import { useFileUpload } from "../../../../../hooks/authentication-api";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import { useGetOneUserProfileQuery } from "../../../../../services/qvipleAPI";
import JoinFormInput from "../../../../../JoiningForm/Student/Form/JoinFormInput";
import { useSelector } from "react-redux";
import Navbar from "../../../../../Dashboard/UserDashboard/Components/Navbar/Navbar";
import {
  useDepartmentGetSiteInfo,
  useDepartmentUpdateSiteInfo,
} from "../../../../../hooks/member_tab/department-api";
const DeaprtmentSiteInfo = ({ did, viewAs }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
  const [otherField, setOtherField] = useState({
    department_vission: "",
    department_mission: "",
    department_hod_message: "",
    department_about: "",
    department_image: "",
  });
  const [contact, setContact] = useState([
    {
      contact_department_name: "",
      contact_person_name: "",
      contact_person_mobile: "",
      contact_person_email: "",
    },
  ]);
  const { departmentGetSiteInfo, departmentGetSiteInfoRefetch } =
    useDepartmentGetSiteInfo({
      did: did,
      skip: !did,
    });
  const [oneFileUpload] = useFileUpload();
  const [departmentUpdateSiteInfo] = useDepartmentUpdateSiteInfo();
  const id = useSelector((state) => state.idChange.id);
  const { data: profileData, refetch: profileDataRefetch } =
    useGetOneUserProfileQuery(id, {
      skip: viewAs === "INSTITUTE" ? true : !id,
    });

  useEffect(() => {
    if (id) profileDataRefetch();
  }, [id, profileDataRefetch]);
  useEffect(() => {
    if (did) departmentGetSiteInfoRefetch();
  }, [did, departmentGetSiteInfoRefetch]);
  useEffect(() => {
    if (departmentGetSiteInfo?.department_site) {
      setOtherField({
        department_vission:
          departmentGetSiteInfo?.department_site?.department_vission,
        department_mission:
          departmentGetSiteInfo?.department_site?.department_mission,
        department_hod_message:
          departmentGetSiteInfo?.department_site?.department_hod_message,
        department_about:
          departmentGetSiteInfo?.department_site?.department_about,
        department_image:
          departmentGetSiteInfo?.department_site?.department_image,
      });
      if (departmentGetSiteInfo?.department_site?.department_contact?.length) {
        let cont = [];
        for (let con of departmentGetSiteInfo?.department_site
          ?.department_contact) {
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
  }, [departmentGetSiteInfo?.department_site]);
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

  const onFileUpload = (e) => {
    setDisabled((pre) => !pre);
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    oneFileUpload({
      fileUpload: formData,
    })
      .then((res) => {
        if (res.data?.imageKey) {
          setOtherField((prev) => ({
            ...prev,
            department_image: res.data?.imageKey,
          }));
        }
        setDisabled((pre) => !pre);
      })
      .catch({});
  };

  const onNormalInputChange = (e) => {
    setOtherField((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const onUpdate = () => {
    setDisabled((pre) => !pre);
    departmentUpdateSiteInfo({
      did: did,
      updateSiteInfo: {
        ...otherField,
        department_contact: contact?.filter((cont) =>
          !cont?.contactId ? cont : ""
        ),
        edit_department_contact: contact?.filter((cont) =>
          cont?.contactId ? cont : ""
        ),
        previousKey:
          departmentGetSiteInfo?.department_site?.department_image ===
          otherField.department_image
            ? ""
            : departmentGetSiteInfo?.department_site?.department_image,
      },
    })
      .then(() => {
        setDisabled((pre) => !pre);
      })
      .catch({});
  };

  // console.info("asfnhjdfgkjd", contact);
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
          <h6>{t("update_department_site_info")}</h6>
          <img src="/images/close-post-icon.svg" alt="" onClick={onBack} />
        </div>
        <BorderBottom
          customStyle={{
            width: "100%",
          }}
        />

        <div className={style.containercontent}>
          <div className={style.container_inner_content}>
            <div className={style.show_field}>
              <JoinFormTextArea
                labelText={t("vision")}
                placeholder={t("department_vision_placeholder")}
                name={"department_vission"}
                value={otherField.department_vission}
                type={"text"}
                onChange={onNormalInputChange}
                customStyleContainer={{
                  width: "69.5%",
                }}
              />
              <JoinFormFileEdit
                labelText={t("department_Image")}
                name={"department_image"}
                value={otherField.department_image}
                onChange={onFileUpload}
                customStyleContainer={{
                  width: "29.5%",
                }}
              />
            </div>
            <JoinFormTextArea
              labelText={t("mission")}
              placeholder={t("department_mission_placeholder")}
              name={"department_mission"}
              value={otherField.department_mission}
              type={"text"}
              onChange={onNormalInputChange}
              customStyleContainer={{
                width: "100%",
              }}
            />
            <JoinFormTextArea
              labelText={t("about_department")}
              placeholder={t("about_department_placeholder")}
              name={"department_about"}
              value={otherField.department_about}
              type={"text"}
              onChange={onNormalInputChange}
              customStyleContainer={{
                width: "100%",
              }}
            />
            <JoinFormTextArea
              labelText={t("hod_message")}
              placeholder={t("hod_message_placeholder")}
              name={"department_hod_message"}
              value={otherField.department_hod_message}
              type={"text"}
              onChange={onNormalInputChange}
              customStyleContainer={{
                width: "100%",
              }}
            />

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
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeaprtmentSiteInfo;
