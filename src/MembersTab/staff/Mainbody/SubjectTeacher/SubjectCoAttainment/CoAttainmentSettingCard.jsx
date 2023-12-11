import React, { useState } from "react";
import style from "../../DepartmentHead/Exminations/ExamList/ExamList.module.css";
import CoAttainmentMenu from "./CoAttainmentSettingMenu";
import { useTranslation } from "react-i18next";
const CoAttainmentSettingCard = ({ attainment, onRefetch }) => {
  const { t } = useTranslation();
  const [menu, setMenu] = useState("");

  const onMenu = () => {
    setMenu(attainment);
  };
  return (
    <>
      <div className={style.exam_card_container}>
        <div className={style.imagedot}>
          <img src="/images/members/exam-icon.svg" alt="" />
        </div>
        <div className={style.exam_inner_text}>
          <h6>
            {t("co_name")}
            {" : "}
            {attainment?.attainment_name ?? ""}
          </h6>
          {attainment?.attainment_type === "PO" ? (
            <p>
              {attainment?.attainment_description ? (
                <span>
                  {" "}
                  {t("po_description")}
                  {" : "}
                  {attainment?.attainment_description ?? ""}
                </span>
              ) : (
                ""
              )}
            </p>
          ) : (
            <p>
              {attainment?.attainment_code ? (
                <span>
                  {t("co_code")}
                  {" : "}
                  {attainment?.attainment_code ?? ""}

                  {", "}
                </span>
              ) : (
                ""
              )}

              {attainment?.attainment_target ? (
                <span>
                  {" "}
                  {t("co_target")}
                  {" : "}
                  {attainment?.attainment_target ?? ""}
                </span>
              ) : (
                ""
              )}
            </p>
          )}
        </div>

        <div className={style.exam_date}>
          <img
            src="/images/three-24-dot-icon.svg"
            alt="menu icon"
            onClick={onMenu}
            className={style.menu_icon}
            title="Menu"
          />
        </div>
      </div>
      {menu && (
        <CoAttainmentMenu
          onClose={() => setMenu("")}
          onRefetch={onRefetch}
          menu={menu}
        />
      )}
    </>
  );
};

export default CoAttainmentSettingCard;
