import React from "react";
import { useDispatch } from "react-redux";
import style from "../Mainbody.module.css";
import DepartmentDropdown from "../dropdown/DepartmentDropdown";
import ClassDropdown from "../dropdown/ClassDropdown";
import SubjectDropdown from "../dropdown/SubjectDropdown";
import { financeChangeAction } from "../../../../redux/store/finance-slice";
import { libraryChangeAction } from "../../../../redux/store/library-slice";
import { admissionChangeAction } from "../../../../redux/store/admission-slice";
import { useTranslation } from "react-i18next";

const MODAL_STYLES = {
  position: "absolute",
  left: "14.5vw",
  top: "3.2vw",
  zIndex: 10,
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,

  zIndex: 10,
};
function Menu({
  open,
  onClose,
  setMenu,
  setIndex,
  staffDesignationData,
  setOnClickValue,
  setSportClassId,
}) {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  if (!open) return null;

  return (
    <div>
      <div onClick={onClose} style={OVERLAY_STYLES} />

      <div className={style.menu} style={MODAL_STYLES}>
        {staffDesignationData?.staff?.staffDepartment?.map((department) => (
          <DepartmentDropdown
            parentStyle={style.menuItem}
            department={department}
            setIndex={setIndex}
            setMenu={setMenu}
            setOnClickValue={setOnClickValue}
            sid={staffDesignationData?.staff?._id}
          />
        ))}
        {staffDesignationData?.staff?.staffClass?.map((classes) => (
          <ClassDropdown
            parentStyle={style.menuItem}
            classes={classes}
            setIndex={setIndex}
            setMenu={setMenu}
            setOnClickValue={setOnClickValue}
            sid={staffDesignationData?.staff?._id}
          />
        ))}
        {staffDesignationData?.staff?.staffSubject?.map((subject) => (
          <SubjectDropdown
            parentStyle={style.menuItem}
            subject={subject}
            setIndex={setIndex}
            setMenu={setMenu}
            setOnClickValue={setOnClickValue}
            sid={staffDesignationData?.staff?._id}
          />
        ))}
        {staffDesignationData?.staff?.financeDepartment?.map((fin) => (
          <div
            className={style.menuItem}
            onClick={() => {
              setMenu(false);
              setIndex("8");
              setOnClickValue(`${fin?._id}`);
              dispatch(
                financeChangeAction.financeQuery({
                  fid: `${fin?._id}`,
                  insId: `${staffDesignationData?.staff?.institute?._id}`,
                })
              );
            }}
          >
            <img alt="finance Head" src="/images/members/fManager-icon.svg" />
            <h6>{t("finace_manager")}</h6>
          </div>
        ))}

        {staffDesignationData?.staff?.library?.map((lib) => (
          <div
            className={style.menuItem}
            onClick={() => {
              setMenu(false);
              setIndex("14");

              setOnClickValue(`${lib?._id}`);
              dispatch(
                libraryChangeAction.libraryQuery({
                  lid: `${lib?._id}`,
                  lhead: `${lib?.libraryHead?._id}`,
                })
              );
            }}
          >
            <img alt="" src="/images/members/librarian-icon.svg" />
            <h6>{t("librarian")}</h6>
          </div>
        ))}

        {/* <div className={style.menuItem}>
                <img alt="" src="/images/members/librarian-icon.svg" />
                <h6>Librariain</h6>
              </div>

              <div className={style.menuItem}>
                <img alt="" src="/images/members/aStatus-icon.svg" />
                <h6>Application Status</h6>
              </div>

              <div className={style.menuItem}>
                <img alt="" src="/images/members/eLearning-icon.svg" />
                <h6>E-learning Operator</h6>
              </div>

              <div className={style.menuItem}>
                <img alt="" src="/images/members/sports-head-icon.svg" />
                <h6>Sports & Arts Head Coach</h6>
              </div> */}

        {staffDesignationData?.staff?.sportDepartment?.map((sdept) => (
          <div
            className={style.menuItem}
            onClick={() => {
              setMenu(false);
              setIndex("12");
              setOnClickValue(`${sdept?._id}`);
              setSportClassId("");
            }}
          >
            <img alt="" src="/images/members/sports-class-icon.svg" />
            <h6> {t("sport_art_head_coach")}</h6>
          </div>
        ))}
        {staffDesignationData?.staff?.admissionDepartment?.map((admin) => (
          <div
            className={style.menuItem}
            onClick={() => {
              setMenu(false);
              setIndex("9");
              setOnClickValue(`${admin?._id}`);
              dispatch(
                admissionChangeAction.admissionQuery({
                  aid: `${admin?._id}`,
                })
              );
            }}
          >
            <img alt="" src="/images/members/admin-icon.svg" />
            <h6> {t("admission_admin")}</h6>
          </div>
        ))}
        {staffDesignationData?.staff?.staffSportClass?.map((sclass, index) => (
          <div
            className={style.menuItem}
            key={index}
            onClick={() => {
              setMenu(false);
              setIndex("13");
              setOnClickValue(sclass?.sportClassName);
              setSportClassId(sclass?._id);
            }}
          >
            <img alt="" src="/images/members/sports-class-icon.svg" />
            <h6>{sclass?.sportClassName} Coach</h6>
          </div>
        ))}
        <div
          className={style.menuItem}
          onClick={() => {
            setMenu(false);
            setIndex("0");
          }}
        >
          <img alt="" src="/images/members/aStatus-icon.svg" />
          <h6>{t("application_status")}</h6>
        </div>
      </div>
    </div>
  );
}

export default Menu;
