import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useWebsiteContactUpdateByInstitute } from "../../../../hooks/setting-api";
import JoinFormInput from "../../../../JoiningForm/Student/Form/JoinFormInput";
import JoinFormTextArea from "../../../../JoiningForm/Student/Form/JoinFormTextArea";
import QLoader from "../../../../Loader/QLoader";
import style from "./SiteEdit.module.css";

const SiteContacts = ({ instituteId, contactList }) => {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState([
    {
      departmentName: "",
      personName: "",
      personPhoneNumber: "",
      personEmail: "",
    },
  ]);

  const [websiteContactUpdateByInstitute] =
    useWebsiteContactUpdateByInstitute();
  useEffect(() => {
    if (contactList?.persons?.length) {
      let cont = [];
      for (let con of contactList?.persons) {
        let obj = {
          departmentName: con?.department_name,
          personName: con?.person_name,
          personPhoneNumber: con?.person_phone_number,
          personEmail: con?.person_email,
          personId: con?._id,
        };
        cont.push(obj);
      }
      setContact(cont);
      // setAddress()
    }
  }, [contactList]);

  const onAddContact = () => {
    setContact((prevState) => [
      ...prevState,
      {
        departmentName: "",
        personName: "",
        personPhoneNumber: "",
        personEmail: "",
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

  const onUpdate = () => {
    setDisabled((pre) => !pre);
    websiteContactUpdateByInstitute({
      id: instituteId,
      updateContact: {
        contact_list: {
          head_office_address: address,
        },
        contact_array: contact?.filter((cont) => (!cont?.personId ? cont : "")),
        edit_array: contact?.filter((cont) => (cont?.personId ? cont : "")),
      },
    })
      .then(() => {
        setDisabled((pre) => !pre);
      })
      .catch({});
  };

  // console.info("this is a contatc", contactList);
  return (
    <>
      <JoinFormTextArea
        labelText={t("head_office_address")}
        placeholder={t("head_office_address_placeholder")}
        name={"address"}
        value={address}
        type={"text"}
        onChange={(e) => setAddress(e.target.value)}
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
                name={"departmentName"}
                value={cont?.departmentName}
                type={"text"}
                onChange={(e) => onInputChage(e, index)}
                customStyleContainer={{
                  width: "49.5%",
                }}
              />
              <JoinFormInput
                labelText={t("contact_person_name")}
                placeholder={t("contact_person_name_placeholder")}
                name={"personName"}
                value={cont?.personName}
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
                name={"personPhoneNumber"}
                value={cont?.personPhoneNumber}
                type={"text"}
                onChange={(e) => onInputChage(e, index)}
                customStyleContainer={{
                  width: "49.5%",
                }}
              />
              <JoinFormInput
                labelText={t("contact_person_email")}
                placeholder={t("contact_person_email_placeholder")}
                name={"personEmail"}
                value={cont?.personEmail}
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
    </>
  );
};

export default SiteContacts;
