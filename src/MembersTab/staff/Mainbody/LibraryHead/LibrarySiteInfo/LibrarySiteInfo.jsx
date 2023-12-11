import React, { useEffect, useState } from "react";
import style from "./LibrarySiteInfo.module.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import JoinFormTextArea from "../../../../../JoiningForm/Student/Form/JoinFormTextArea";
import QLoader from "../../../../../Loader/QLoader";
import { useFileUpload } from "../../../../../hooks/authentication-api";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import { useGetOneUserProfileQuery } from "../../../../../services/qvipleAPI";
import JoinFormInput from "../../../../../JoiningForm/Student/Form/JoinFormInput";
import Navbar from "../../../../../Dashboard/UserDashboard/Components/Navbar/Navbar";
import JoinFormFileEdit from "../../../../../JoiningForm/Student/Form/JoinFormFileEdit";
import { useSelector } from "react-redux";
import {
  useLibraryGetSiteInfo,
  useLibraryUpdateSiteInfo,
} from "../../../../../hooks/member_tab/library-api";
const LibrarySiteInfo = ({ lid, viewAs }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
  const [otherField, setOtherField] = useState({
    library_message: "",
    library_rule: "",
    library_image: "",
    library_timing: "",
  });
  const [contact, setContact] = useState([
    {
      contact_department_name: "",
      contact_person_name: "",
      contact_person_mobile: "",
      contact_person_email: "",
    },
  ]);
  const id = useSelector((state) => state.idChange.id);
  const { data: profileData, refetch: profileDataRefetch } =
    useGetOneUserProfileQuery(id, {
      skip: viewAs === "INSTITUTE" ? true : !id,
    });

  useEffect(() => {
    if (id) profileDataRefetch();
  }, [id, profileDataRefetch]);
  const [oneFileUpload] = useFileUpload();
  const { libraryGetSiteInfo, libraryGetSiteInfoRefetch } =
    useLibraryGetSiteInfo({
      lid: lid,
      skip: !lid,
    });
  const [libraryUpdateSiteInfo] = useLibraryUpdateSiteInfo();
  useEffect(() => {
    if (lid) libraryGetSiteInfoRefetch();
  }, [lid, libraryGetSiteInfoRefetch]);
  useEffect(() => {
    if (libraryGetSiteInfo?.library_site) {
      setOtherField({
        library_message: libraryGetSiteInfo?.library_site?.library_message,
        library_rule: libraryGetSiteInfo?.library_site?.library_rule,
        library_image: libraryGetSiteInfo?.library_site?.library_image,
        library_timing: libraryGetSiteInfo?.library_site?.library_timing,
      });
      if (libraryGetSiteInfo?.library_site?.library_contact?.length) {
        let cont = [];
        for (let con of libraryGetSiteInfo?.library_site?.library_contact) {
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
  }, [libraryGetSiteInfo?.library_site]);

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
            [e.target.name]: res.data?.imageKey,
          }));
        }
        setDisabled((pre) => !pre);
      })
      .catch({});
  };
  const onUpdate = () => {
    setDisabled((pre) => !pre);
    let previousKeyList = [];
    if (
      libraryGetSiteInfo?.library_site?.library_image !==
      otherField.library_image
    )
      previousKeyList.push(libraryGetSiteInfo?.library_site?.library_image);
    if (
      libraryGetSiteInfo?.library_site?.library_timing !==
      otherField.library_timing
    )
      previousKeyList.push(libraryGetSiteInfo?.library_site?.library_timing);

    libraryUpdateSiteInfo({
      lid: lid,
      updateSiteInfo: {
        ...otherField,
        library_contact: contact?.filter((cont) =>
          !cont?.contactId ? cont : ""
        ),
        edit_library_contact: contact?.filter((cont) =>
          cont?.contactId ? cont : ""
        ),
        previousKey: previousKeyList,
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
          <h6>{t("update_library_site_info")}</h6>
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
              labelText={t("library_message")}
              placeholder={t("library_message_placeholder")}
              name={"library_message"}
              value={otherField.library_message}
              type={"text"}
              onChange={onNormalInputChange}
              customStyleContainer={{
                width: "100%",
              }}
            />

            <JoinFormTextArea
              labelText={t("library_rule_and_regulation")}
              placeholder={t("library_rule_and_regulation_placeholder")}
              name={"library_rule"}
              value={otherField.library_rule}
              type={"text"}
              onChange={onNormalInputChange}
              customStyleContainer={{
                width: "100%",
              }}
            />
            <div className={style.show_field}>
              <JoinFormFileEdit
                labelText={t("library_image")}
                name={"library_image"}
                value={otherField.library_image}
                onChange={onFileUpload}
                customStyleContainer={{
                  width: "49.5%",
                }}
              />
              <JoinFormFileEdit
                labelText={t("library_timing")}
                name={"library_timing"}
                value={otherField.library_timing}
                onChange={onFileUpload}
                customStyleContainer={{
                  width: "49.5%",
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default LibrarySiteInfo;
