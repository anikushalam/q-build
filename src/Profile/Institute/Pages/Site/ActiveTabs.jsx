import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useWebsiteTabUpdateByInstitute } from "../../../../hooks/setting-api";
import QLoader from "../../../../Loader/QLoader";
import BorderBottom from "../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import FormToggle from "../../../../StaffTab/components/DividerTab/MainContent/StaffForm/FormToggle";
import AllDomain from "./AllDomain";
import style from "./SiteEdit.module.css";

const ActiveTabs = ({ websiteTab, instituteId, sub_domain }) => {
  const { t } = useTranslation();
  const [toggleState, setToggleState] = useState({
    home: websiteTab?.home ?? false,
    about: websiteTab?.about ?? false,
    department: websiteTab?.department ?? false,
    contact_us: websiteTab?.contact_us ?? false,
    admission: websiteTab?.admission ?? false,
    library: websiteTab?.library ?? false,
    announcements: websiteTab?.announcements ?? false,
    events: websiteTab?.events ?? false,
    tender: websiteTab?.tender ?? false,
    career: websiteTab?.career ?? false,
    facilities: websiteTab?.facilities ?? false,
    alumini: websiteTab?.alumini ?? false,
    tpo_cell: websiteTab?.tpo_cell ?? false,
    rnd_cell: websiteTab?.rnd_cell ?? false,
    timetable: websiteTab?.timetable ?? false,
    student_projects: websiteTab?.student_projects ?? false,
    student_articles: websiteTab?.student_articles ?? false,
  });
  const [disabled, setDisabled] = useState(false);
  const [addDomain, setAddDomain] = useState(false);
  const [websiteTabUpdateByInstitute] = useWebsiteTabUpdateByInstitute();
  useEffect(() => {
    if (websiteTab) {
      setToggleState({
        home: websiteTab?.home ?? false,
        about: websiteTab?.about ?? false,
        department: websiteTab?.department ?? false,
        contact_us: websiteTab?.contact_us ?? false,
        admission: websiteTab?.admission ?? false,
        library: websiteTab?.library ?? false,
        announcements: websiteTab?.announcements ?? false,
        events: websiteTab?.events ?? false,
        tender: websiteTab?.tender ?? false,
        career: websiteTab?.career ?? false,
        alumini: websiteTab?.alumini ?? false,
        tpo_cell: websiteTab?.tpo_cell ?? false,
        rnd_cell: websiteTab?.rnd_cell ?? false,
        timetable: websiteTab?.timetable ?? false,
        transport: websiteTab?.transport ?? false,
        student_projects: websiteTab?.student_projects ?? false,
        student_articles: websiteTab?.student_articles ?? false,
      });
    }
  }, [websiteTab]);

  const onChangeToggle = (name, val) => {
    setToggleState((prev) => ({
      ...prev,
      [name]: val,
    }));
  };
  const onUpdateInfo = () => {
    if (instituteId) {
      setDisabled((pre) => !pre);
      websiteTabUpdateByInstitute({
        id: instituteId,
        updateTab: {
          website_active_tab: toggleState,
        },
      })
        .then((res) => {
          console.info();
          setDisabled((pre) => !pre);
        })
        .catch({});
    }
  };

  const onClose = () => {
    setAddDomain((pre) => !pre);
  };

  console.info(websiteTab);
  return (
    <>
      <div className={style.site_domain}>
        <h6>
          {sub_domain?.sub_domain_path
            ? t("linked__domain")
            : t("link_site_domain")}
        </h6>
        {sub_domain?.sub_domain_path ? (
          <a
            target="_blank"
            rel="noreferrer"
            href={sub_domain?.sub_domain_path}
            style={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "row",
              marginTop: "0.8rem",
              color: "#1C023B",
            }}
          >
            <p>{sub_domain?.sub_domain_path}</p>
            <img
              src="/images/verified-green-icon.svg"
              alt=""
              style={{
                marginLeft: "0.7rem",
              }}
            />
          </a>
        ) : (
          <button onClick={onClose}>
            <div>{t("select_domain")}</div>
            <img src="/images/forward-right-icon.svg" alt="next step" />
          </button>
        )}
      </div>
      <div className={style.show_field}>
        <FormToggle
          labelHeading={t("site_website_and_home")}
          // labelDescription={t("name_")}
          defaultLabel={true}
          customContainer={{
            flex: "1 1",
          }}
        />
        <FormToggle
          labelHeading={t("site_contact_us")}
          // labelDescription={t("labeltext")}
          defaultLabel={false}
          checkedToggle={toggleState.contact_us}
          onToggleHandler={(e) =>
            onChangeToggle("contact_us", e.target.checked)
          }
          customContainer={{
            flex: "1 1",
          }}
        />
      </div>
      <BorderBottom
        customStyle={{
          width: "100%",
        }}
      />
      <div className={style.show_field}>
        <FormToggle
          labelHeading={t("site_about")}
          // labelDescription={t("labeltext")}
          defaultLabel={false}
          checkedToggle={toggleState.about}
          onToggleHandler={(e) => onChangeToggle("about", e.target.checked)}
          customContainer={{
            flex: "1 1",
          }}
        />
        <FormToggle
          labelHeading={t("site_admission")}
          // labelDescription={t("labeltext")}
          defaultLabel={false}
          checkedToggle={toggleState.admission}
          onToggleHandler={(e) => onChangeToggle("admission", e.target.checked)}
          customContainer={{
            flex: "1 1",
          }}
        />
      </div>
      <BorderBottom
        customStyle={{
          width: "100%",
        }}
      />
      <div className={style.show_field}>
        <FormToggle
          labelHeading={t("site_department")}
          // labelDescription={t("labeltext")}
          defaultLabel={false}
          checkedToggle={toggleState.department}
          onToggleHandler={(e) =>
            onChangeToggle("department", e.target.checked)
          }
          customContainer={{
            flex: "1 1",
          }}
        />
        <FormToggle
          labelHeading={t("site_library")}
          // labelDescription={t("labeltext")}
          defaultLabel={false}
          checkedToggle={toggleState.library}
          onToggleHandler={(e) => onChangeToggle("library", e.target.checked)}
          customContainer={{
            flex: "1 1",
          }}
        />
      </div>
      <BorderBottom
        customStyle={{
          width: "100%",
        }}
      />
      <div className={style.show_field}>
        <FormToggle
          labelHeading={t("site_announcement")}
          // labelDescription={t("labeltext")}
          defaultLabel={false}
          checkedToggle={toggleState.announcements}
          onToggleHandler={(e) =>
            onChangeToggle("announcements", e.target.checked)
          }
          customContainer={{
            flex: "1 1",
          }}
        />
        <FormToggle
          labelHeading={t("site_event")}
          // labelDescription={t("labeltext")}
          defaultLabel={false}
          checkedToggle={toggleState.events}
          onToggleHandler={(e) => onChangeToggle("events", e.target.checked)}
          customContainer={{
            flex: "1 1",
          }}
        />
      </div>
      <BorderBottom
        customStyle={{
          width: "100%",
        }}
      />
      <div className={style.show_field}>
        <FormToggle
          labelHeading={t("site_tenders")}
          // labelDescription={t("labeltext")}
          defaultLabel={false}
          checkedToggle={toggleState.tender}
          onToggleHandler={(e) => onChangeToggle("tender", e.target.checked)}
          customContainer={{
            flex: "1 1",
          }}
        />
        <FormToggle
          labelHeading={t("site_carrers")}
          // labelDescription={t("labeltext")}
          defaultLabel={false}
          checkedToggle={toggleState.career}
          onToggleHandler={(e) => onChangeToggle("career", e.target.checked)}
          customContainer={{
            flex: "1 1",
          }}
        />
      </div>
      <BorderBottom
        customStyle={{
          width: "100%",
        }}
      />
      <div className={style.show_field}>
        <FormToggle
          labelHeading={t("site_alumni")}
          // labelDescription={t("labeltext")}
          defaultLabel={false}
          checkedToggle={toggleState.alumini}
          onToggleHandler={(e) => onChangeToggle("alumini", e.target.checked)}
          customContainer={{
            flex: "1 1",
          }}
        />
        <FormToggle
          labelHeading={t("site_training")}
          // labelDescription={t("labeltext")}
          defaultLabel={false}
          checkedToggle={toggleState.tpo_cell}
          onToggleHandler={(e) => onChangeToggle("tpo_cell", e.target.checked)}
          customContainer={{
            flex: "1 1",
          }}
        />
      </div>
      <BorderBottom
        customStyle={{
          width: "100%",
        }}
      />
      <div className={style.show_field}>
        <FormToggle
          labelHeading={t("site_research")}
          // labelDescription={t("labeltext")}
          defaultLabel={false}
          checkedToggle={toggleState.rnd_cell}
          onToggleHandler={(e) => onChangeToggle("rnd_cell", e.target.checked)}
          customContainer={{
            flex: "1 1",
          }}
        />
        <FormToggle
          labelHeading={t("site_timetable")}
          // labelDescription={t("labeltext")}
          defaultLabel={false}
          checkedToggle={toggleState.timetable}
          onToggleHandler={(e) => onChangeToggle("timetable", e.target.checked)}
          customContainer={{
            flex: "1 1",
          }}
        />
      </div>
      <BorderBottom
        customStyle={{
          width: "100%",
        }}
      />
      <div className={style.show_field}>
        <FormToggle
          labelHeading={t("site_student_project")}
          // labelDescription={t("labeltext")}
          defaultLabel={false}
          checkedToggle={toggleState.student_projects}
          onToggleHandler={(e) =>
            onChangeToggle("student_projects", e.target.checked)
          }
          customContainer={{
            flex: "1 1",
          }}
        />
        <FormToggle
          labelHeading={t("site_student_articles")}
          // labelDescription={t("labeltext")}
          defaultLabel={false}
          checkedToggle={toggleState.student_articles}
          onToggleHandler={(e) =>
            onChangeToggle("student_articles", e.target.checked)
          }
          customContainer={{
            flex: "1 1",
          }}
        />
      </div>
      <BorderBottom
        customStyle={{
          width: "100%",
        }}
      />
      <div className={style.show_field}>
        <FormToggle
          labelHeading={t("transport")}
          // labelDescription={t("labeltext")}
          defaultLabel={false}
          checkedToggle={toggleState.transport}
          onToggleHandler={(e) => onChangeToggle("transport", e.target.checked)}
          customContainer={{
            flex: "1 1",
          }}
        />

        <FormToggle
          labelHeading={t("facilities")}
          // labelDescription={t("labeltext")}
          defaultLabel={false}
          checkedToggle={toggleState.facilities}
          onToggleHandler={(e) =>
            onChangeToggle("facilities", e.target.checked)
          }
          customContainer={{
            flex: "1 1",
          }}
        />
      </div>
      <BorderBottom
        customStyle={{
          width: "100%",
        }}
      />
      <button onClick={onUpdateInfo} className={style.update_btn}>
        {t("update")}
      </button>
      {disabled && <QLoader />}
      {addDomain && <AllDomain instituteId={instituteId} onClose={onClose} />}
    </>
  );
};

export default ActiveTabs;
