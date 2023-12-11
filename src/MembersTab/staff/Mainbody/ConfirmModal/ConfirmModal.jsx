import React from "react";
import style from "./ConfirmModal.module.css";
import { Dialog } from "@mui/material";
import Switch from "@mui/material/Switch";
import { useTranslation } from "react-i18next";
import { useState } from "react";

function ConfirmModal({ openConfirmModal, hideModal, setOpenConfirmModal }) {
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const [install, setInstall] = useState(false);
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  console.info(install);
  return (
    <Dialog open={openConfirmModal} onClose={() => hideModal(false)}>
      <div className={style.addDisplay}>
        <div className={style.title}>
          <div></div>
          <h6>{t("confirm_addmission")}</h6>
          <img
            src="/images/close-post-icon.svg"
            onClick={() => hideModal(false)}
            alt=""
          />
        </div>
        <div className={style.content}>
          <div className={style.appdetailrow}>
            <h6>{t("view_app_details")}</h6>
            <img src="/images/admidion_department/right_arrow.svg" alt="" />
          </div>

          <div className={style.tabsss}>
            <div
              className={
                index === 0
                  ? `${style.singletab} ${style.singletabActive}`
                  : style.singletab
              }
              onClick={() => setIndex(0)}
            >
              {t("pay_online")}
            </div>

            <div
              className={
                index === 1
                  ? `${style.singletab} ${style.singletabActive}`
                  : style.singletab
              }
              onClick={() => setIndex(1)}
            >
              {t("pay_offline")}
            </div>
          </div>

          {index === 0 && (
            <div>
              <div className={style.singlerow}>
                <h6>{t("one_time_admision_fees")}</h6>
                <h6>Rs. 30,000</h6>
              </div>

              <div className={style.singlerow1}>
                <h6>{t("pay_in_installment")}</h6>
                <Switch {...label} onChange={() => setInstall(!install)} />
              </div>

              {install && (
                <div>
                  <div className={style.borderr}></div>

                  <div className={style.singlerow1}>
                    <h6>{t("first_install")}</h6>
                    <h6>Rs. 30,000</h6>
                  </div>
                </div>
              )}

              <div className={style.payandconfirmContainer}>
                <p className={style.payandconfirm}>{t("pay_and_confirm")}</p>
              </div>

              <div className={style.btn}>{t("pay_confirm")}</div>
            </div>
          )}

          {index === 1 && (
            <div>
              <div className={style.singlerow}>
                <h6>{t("one_time_admision_fees")}</h6>
                <h6>Rs. 30,000</h6>
              </div>

              <div className={style.singlerow1}>
                <h6>{t("first_install")}</h6>
                <h6>Rs. 5000</h6>
              </div>

              {/* <div className={style.singlerow1}>
                <h6>{t("pay_in_installment")}</h6>
                <Switch {...label} onChange={() => setInstall(!install)} />
              </div> */}

              <div className={style.borderr}></div>

              <div className={style.adholdcontainer}>
                <p className={style.payandconfirm}>{t("admission_hold")}</p>
              </div>

              <div className={style.processcontainer}>
                <div className={style.processhead}>
                  <h6 className={style.processheadp}>{t("process_offline")}</h6>
                </div>
                <div className={style.processcontent}>
                  <ol className={style.processol}>
                    <li className={style.processli}>
                      {t("visit_the_institute")}
                    </li>
                    <li className={style.processli}>
                      {t("contact_admission")}
                    </li>
                    <li className={style.processli}>{t("pay_fees_offline")}</li>
                    <li className={style.processli}>
                      {t("your_admission_will_be_confirm_by_authority")}
                    </li>
                  </ol>

                  <div className={style.confirmbtn}>{t("pay_confirm")}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Dialog>
  );
}

export default ConfirmModal;
