import style from "./Privacy.module.css";
import React, { useEffect, useState } from "react";
import Menu from "./Menu/Menu";
import { useTranslation } from "react-i18next";

function Privacy({ tag, address, birth, circle }) {
  const { t } = useTranslation();
  const [settingPrivacyData, setSettingPrivacyData] = useState({
    birthStatus: birth,
    addressStatus: address,
    circleStatus: circle,
    tagStatus: tag,
  });
  const selectOptions = ["Every One", "Only me", "Circle"];
  const [click, setClick] = useState(false);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setStatus(false);
    }, 2000);
  }, [status]);

  return (
    <div className={style.privacy}>
      {status && (
        <h6 className={style.privacyStatus}>{t("privacy_updated")}</h6>
      )}
      <div className={style.item} onClick={() => setClick(!click)}>
        <h6>{t("who_can_tag_me")}</h6>
        <div className={style.select}>
          <p>{settingPrivacyData.tagStatus}</p>
          <img src="/images/select-icon.svg" alt="" />
        </div>

        {click && (
          <div className={style.tooltip1}>
            <Menu
              options={selectOptions}
              closeMenu={() => setClick(false)}
              settingPrivacyData={settingPrivacyData}
              setSettingPrivacyData={setSettingPrivacyData}
              setStatus={setStatus}
            />
          </div>
        )}
      </div>

      {/* <div
        className={style.item}
        onClick={() =>
          setClick({ ...click, contactClick: !click.contactClick })
        }
      >
        <h6>Who can see our contact number?</h6>
        <div className={style.select}>
          <p>{contact}</p>
          <img src="/images/select-icon.svg" alt="" />
        </div>

        {click.contactClick && (
          <div className={style.tooltip2}>
            <Menu options={selectOptions} switchOption={switchContact} />
          </div>
        )}
      </div>

      <div
        className={style.item}
        onClick={() => setClick({ ...click, emailClick: !click.emailClick })}
      >
        <h6>Who can see our email address?</h6>
        <div className={style.select}>
          <p>{email}</p>
          <img src="/images/select-icon.svg" alt="" />
        </div>

        {click.emailClick && (
          <div className={style.tooltip3}>
            <Menu options={selectOptions} switchOption={switchEmail} />
          </div>
        )}
      </div> */}
    </div>
  );
}

export default Privacy;
