import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import JoinFormInput from "../../../../JoiningForm/Student/Form/JoinFormInput";
import QLoader from "../../../../Loader/QLoader";
import style from "./SiteEdit.module.css";
import JoinFormFileEdit from "../../../../JoiningForm/Student/Form/JoinFormFileEdit";
import { useFileUpload } from "../../../../hooks/authentication-api";
import {
  useGetInstituteSiteOpener,
  useTrashInstituteSiteOpener,
  useUpdateInstituteSiteOpener,
} from "../../../../hooks/setting-api";

const SiteOpener = ({ instituteId }) => {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const [contact, setContact] = useState([
    {
      notice_title: "",
      notice_image: "",
      notice_button_name: "",
      notice_button_link: "",
    },
  ]);
  const [oneFileUpload] = useFileUpload();
  const [updateInstituteSiteOpener] = useUpdateInstituteSiteOpener();
  const [trashInstituteSiteOpener] = useTrashInstituteSiteOpener();
  const { getInstituteSiteOpener, getInstituteSiteOpenerRefetch } =
    useGetInstituteSiteOpener({
      id: instituteId,
      skip: !instituteId,
    });

  useEffect(() => {
    if (instituteId) {
      getInstituteSiteOpenerRefetch();
    }
  }, [instituteId, getInstituteSiteOpenerRefetch]);

  useEffect(() => {
    if (getInstituteSiteOpener?.institute?.site_flash_notice?.length) {
      let cont = [];
      for (let con of getInstituteSiteOpener?.institute?.site_flash_notice) {
        let obj = {
          notice_title: con?.notice_title,
          notice_image: con?.notice_image,
          notice_button_name: con?.notice_button_name,
          notice_button_link: con?.notice_button_link,
          flashId: con?._id,
        };
        cont.push(obj);
      }
      setContact(cont);
    }
  }, [getInstituteSiteOpener?.institute?.site_flash_notice]);
  const onInputChage = (e, index) => {
    const inputarr = [...contact];
    for (let inp = 0; inp < inputarr?.length; inp++) {
      if (inp === index) {
        inputarr[inp][e.target.name] = e.target.value;
      }
    }
    setContact(inputarr);
  };
  const onFileUpload = (e) => {
    if (e.target.files[0]) {
      setDisabled((pre) => !pre);
      const formData = new FormData();
      formData.append("file", e.target.files[0]);
      oneFileUpload({
        fileUpload: formData,
      })
        .then((res) => {
          if (res.data?.imageKey) {
            let splitName = e.target.name?.split("-");
            const inputarr = [...contact];
            for (let inp = 0; inp < inputarr?.length; inp++) {
              if (inp === +splitName[1]) {
                inputarr[inp][splitName[0]] = res.data?.imageKey;
              }
            }
            setContact(inputarr);
          }
          setDisabled((pre) => !pre);
        })
        .catch({});
    }
  };
  const onAddContact = () => {
    setContact((prevState) => [
      ...prevState,
      {
        notice_title: "",
        notice_image: "",
        notice_button_name: "",
        notice_button_link: "",
      },
    ]);
  };

  const onUpdate = () => {
    setDisabled((pre) => !pre);
    updateInstituteSiteOpener({
      id: instituteId,
      updateSiteOpener: {
        flash_notice: contact,
      },
    })
      .then(() => {
        setDisabled((pre) => !pre);
      })
      .catch({});
  };
  const onTrash = (val) => {
    if (val && instituteId) {
      setDisabled((pre) => !pre);
      trashInstituteSiteOpener({
        id: instituteId,
        updateSiteOpener: {
          fid: val,
        },
      })
        .then(() => {
          getInstituteSiteOpenerRefetch();
          setDisabled((pre) => !pre);
        })
        .catch({});
    }
  };

  return (
    <>
      <div className={style.add_contact_person}>
        {contact?.map((cont, index) => (
          <div key={index}>
            <div className={style.trash_container}>
              {index === 0 && <h6>{t("flash_notice_first")}</h6>}
              {index === 1 && (
                <h6
                  style={{
                    marginTop: "1rem",
                  }}
                >
                  {t("flash_notice_second")}
                </h6>
              )}
              {index === 2 && (
                <h6
                  style={{
                    marginTop: "1rem",
                  }}
                >
                  {t("flash_notice_third")}
                </h6>
              )}
              <button onClick={() => onTrash(cont?.flashId)}>
                {t("remove")}
              </button>
            </div>

            <div className={style.show_field}>
              <JoinFormInput
                labelText={t("notice_title")}
                placeholder={t("notice_title_placeholder")}
                name={"notice_title"}
                value={cont?.notice_title}
                type={"text"}
                onChange={(e) => onInputChage(e, index)}
                customStyleContainer={{
                  width: "49.5%",
                }}
              />
              <JoinFormFileEdit
                labelText={t("site_add_image")}
                name={`notice_image-${index}`}
                value={cont?.notice_image}
                onChange={onFileUpload}
                customStyleContainer={{
                  width: "49.5%",
                }}
              />
            </div>
            <div className={style.show_field}>
              <JoinFormInput
                labelText={t("button_name")}
                placeholder={t("button_name_placeholder")}
                name={"notice_button_name"}
                value={cont?.notice_button_name}
                type={"text"}
                onChange={(e) => onInputChage(e, index)}
                customStyleContainer={{
                  width: "49.5%",
                }}
              />
              <JoinFormInput
                labelText={t("button_link")}
                placeholder={t("button_link_placeholder")}
                name={"notice_button_link"}
                value={cont?.notice_button_link}
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
      {contact?.length <= 2 && (
        <button
          className={style.add_contact_person_btn}
          title="Add Flash Notice"
          onClick={onAddContact}
        >
          {t("add_flash_notice")}
        </button>
      )}
      {disabled && <QLoader />}
      <button className={style.update_btn} onClick={onUpdate}>
        {t("update")}
      </button>
    </>
  );
};

export default SiteOpener;
