import style from "./Privacy.module.css";
import React, { useEffect, useState } from "react";
import { useInstitutePrivacyUpdate } from "../../../../../../hooks/setting-api";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useOneInstituteDashboard } from "../../../../../../hooks/dashboard/dashboard-api";
import Menu from "./Menu";

function Privacy() {
  const { t } = useTranslation();
  const [staff, setStaff] = useState("Every one");
  const [contact, setContact] = useState("Every one");
  const [email, setEmail] = useState("Every one");
  const [tag, setTag] = useState("Every one");
  const [lang, setLang] = useState("English");
  const [click, setClick] = useState({
    staffClick: false,
    contactClick: false,
    emailClick: false,
    tagClick: false,
    langClick: false,
  });
  const selectOptions = ["Every one", "Only me"];
  const selectOptionTags = ["Every one", "Only me"];
  const selectOptionLangs = ["English", "Hindi", "Marathi"];
  const ids = useSelector((state) => state.idChange);
  const [institutePrivacyUpdate] = useInstitutePrivacyUpdate();

  const { oneInstituteDashboard, oneInstituteDashboardRefetch } =
    useOneInstituteDashboard({
      id: ids?.id,
      skip: !ids?.id,
    });
  useEffect(() => {
    if (ids?.id) oneInstituteDashboardRefetch();
  }, [ids?.id, oneInstituteDashboardRefetch]);
  useEffect(() => {
    setStaff(oneInstituteDashboard?.institute?.staff_privacy);
    setContact(oneInstituteDashboard?.institute?.contact_privacy);
    setEmail(oneInstituteDashboard?.institute?.email_privacy);
    setTag(oneInstituteDashboard?.institute?.tag_privacy);
    setLang(
      oneInstituteDashboard?.institute?.sms_lang === "en"
        ? "English"
        : oneInstituteDashboard?.institute?.sms_lang === "hi"
        ? "Hindi"
        : "Marathi"
    );
  }, [oneInstituteDashboard?.institute]);

  const switchStaff = (option) => {
    setStaff(option);
    institutePrivacyUpdate({
      id: ids?.id,
      privacy: {
        staffStatus: option,
        contactStatus: "",
        emailStatus: "",
        tagStatus: "",
        sms_lang: "",
      },
    })
      .then(() => {})
      .catch({});
  };
  const switchContact = (option) => {
    setContact(option);
    institutePrivacyUpdate({
      id: ids?.id,
      privacy: {
        staffStatus: "",
        contactStatus: option,
        emailStatus: "",
        tagStatus: "",
        sms_lang: "",
      },
    })
      .then(() => {})
      .catch({});
  };
  const switchEmail = (option) => {
    setEmail(option);
    institutePrivacyUpdate({
      id: ids?.id,
      privacy: {
        staffStatus: "",
        contactStatus: "",
        emailStatus: option,
        tagStatus: "",
        sms_lang: "",
      },
    })
      .then(() => {})
      .catch({});
  };

  const switchTag = (option) => {
    setTag(option);
    institutePrivacyUpdate({
      id: ids?.id,
      privacy: {
        staffStatus: "",
        contactStatus: "",
        emailStatus: "",
        tagStatus: option,
        sms_lang: "",
      },
    })
      .then(() => {})
      .catch({});
  };
  const switchLang = (option) => {
    setLang(option);

    let val = "";
    if (option === "English") val = "en";
    else if (option === "Hindi") val = "hi";
    else val = "mr";
    institutePrivacyUpdate({
      id: ids?.id,
      privacy: {
        staffStatus: "",
        contactStatus: "",
        emailStatus: "",
        tagStatus: "",
        sms_lang: val,
      },
    })
      .then(() => {})
      .catch({});
  };

  const onClose = () => {
    setClick({
      staffClick: false,
      contactClick: false,
      emailClick: false,
      tagClick: false,
      langClick: false,
    });
  };
  return (
    <div className={style.privacy}>
      <div
        className={style.item}
        onClick={() => setClick({ ...click, staffClick: !click.staffClick })}
      >
        <h6>{t("privacy-message-1-place")}</h6>
        <div className={style.select} id="select1">
          {staff === "Every one" ? (
            <p>{t("every_one")}</p>
          ) : (
            <p>{t(t("only_me"))}</p>
          )}
          <img src="/images/select-icon.svg" alt="" />
        </div>

        {click.staffClick && (
          <div className={style.tooltip1}>
            <Menu
              options={selectOptions}
              switchOption={switchStaff}
              onClose={onClose}
              parentStyle={{ marginTop: "10px" }}
            />
          </div>
        )}
      </div>

      <div
        className={style.item}
        onClick={() =>
          setClick({ ...click, contactClick: !click.contactClick })
        }
      >
        <h6>{t("privacy-message-2-place")}</h6>
        <div className={style.select} id="select2">
          {contact === "Every one" ? (
            <p>{t("every_one")}</p>
          ) : (
            <p>{t(t("only_me"))}</p>
          )}

          <img src="/images/select-icon.svg" alt="" />
        </div>

        {click.contactClick && (
          <div className={style.tooltip2}>
            <Menu
              options={selectOptions}
              switchOption={switchContact}
              onClose={onClose}
              parentStyle={{ marginTop: "126px" }}
            />
          </div>
        )}
      </div>

      <div
        className={style.item}
        onClick={() => setClick({ ...click, emailClick: !click.emailClick })}
      >
        <h6>{t("privacy-message-3-place")}</h6>
        <div className={style.select} id="select3">
          {email === "Every one" ? (
            <p>{t("every_one")}</p>
          ) : (
            <p>{t(t("only_me"))}</p>
          )}

          <img src="/images/select-icon.svg" alt="" />
        </div>

        {click.emailClick && (
          <div className={style.tooltip3}>
            <Menu
              options={selectOptions}
              switchOption={switchEmail}
              onClose={onClose}
              parentStyle={{ marginTop: "236px" }}
            />
          </div>
        )}
      </div>
      <div
        className={style.item}
        onClick={() => setClick({ ...click, tagClick: !click.tagClick })}
      >
        <h6>{t("who_can_tag_me")}</h6>
        <div className={style.select} id="select4">
          {tag === "Every one" ? (
            <p>{t("every_one")}</p>
          ) : (
            <p>{t(t("only_me"))}</p>
          )}

          <img src="/images/select-icon.svg" alt="" />
        </div>

        {click.tagClick && (
          <div className={style.tooltip4}>
            <Menu
              options={selectOptionTags}
              switchOption={switchTag}
              onClose={onClose}
              parentStyle={{ marginTop: "225px" }}
            />
          </div>
        )}
      </div>
      <div
        className={style.item}
        onClick={() => setClick({ ...click, langClick: !click.langClick })}
      >
        <h6>{t("ins_notify_lang")}</h6>
        <div className={style.select} id="select5">
          {lang === "English" ? (
            <p>{t("english")}</p>
          ) : lang === "Hindi" ? (
            <p>{t("hindi")}</p>
          ) : (
            <p>{t("marathi")}</p>
          )}

          <img src="/images/select-icon.svg" alt="" />
        </div>

        {click.langClick && (
          <div className={style.tooltip4}>
            <Menu
              options={selectOptionLangs}
              switchOption={switchLang}
              onClose={onClose}
              parentStyle={{ marginTop: "212px" }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Privacy;
