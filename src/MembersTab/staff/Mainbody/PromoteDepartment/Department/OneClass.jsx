import React, { useState } from "react";
import style from "../PromoteDepartment.module.css";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import UniversalTab from "../../DepartmentHead/Competetions/CompetitionTab/UniversalTab";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import StudentList from "./StudentList";
import PromoteList from "./PromoteList";
import ClassComplete from "./ClassComplete";
import { useExportPromoteStudentExcel } from "../../../../../hooks/member_tab/department-api";
import QLoader from "../../../../../Loader/QLoader";
import { Notfication } from "../../../../../validation/Snackbar";
const OneClass = ({ carryParentState }) => {
  const { t } = useTranslation();
  const getQuery = useLocation();
  const navigate = useNavigate();
  const params = useParams();
  const [notificationState, setNotificationState] = useState({
    msg: "",
    run: false,
  });
  const [disabled, setDisabled] = useState(false);
  const tabList = [
    {
      name: t("student_list"),
      id: 0,
    },
    {
      name: t("promoted"),
      id: 1,
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const [lockClass, setLockClass] = useState("");
  const [classIconStatus, setClassIconStatus] = useState(
    getQuery.state?.classStatus ?? ""
  );
  const [exportPromoteStudentExcel] = useExportPromoteStudentExcel();
  const onBackWithArrowLeft = () => {
    navigate(-1);
  };

  const onExportApplicationApplicant = () => {
    if (getQuery.state?.cid) {
      setDisabled((pre) => !pre);
      exportPromoteStudentExcel({
        cid: getQuery.state?.cid,
        flow: activeIndex === 0 ? "Normal" : "Promote",
      })
        .then((res) => {
          setNotificationState({
            msg: res?.data?.message,
            run: true,
          });
          setTimeout(() => {
            navigate(`/q/${params.username}/member/promote?a=export`, {
              state: carryParentState,
            });
          }, 1000);
        })
        .catch({});
    }
  };
  return (
    <>
      <section className={style.moderator_container_title}>
        <img
          src="/images/arrow-left-fees-icon.svg"
          onClick={onBackWithArrowLeft}
          alt="go to previous tab"
          title="Go Back"
          style={{
            cursor: "pointer",
          }}
        />
        <div className={style.with_search}>
          <h6>{getQuery.state?.className}</h6>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <img
              src="/images/member_tab/finance/finance-export-icon.svg"
              style={{
                cursor: "pointer",
                height: "1.6rem",
              }}
              onClick={onExportApplicationApplicant}
              alt="lock icon"
            />
            <img
              title="Class complete or un-complete"
              src={
                classIconStatus === "UnCompleted"
                  ? "/images/lock-grey-icon.svg"
                  : "/images/lock-blue-icon.svg"
              }
              style={{
                cursor: "pointer",
              }}
              onClick={() =>
                setLockClass({
                  lock: classIconStatus === "UnCompleted" ? "UNLOCK" : "LOCK",
                  cid: getQuery.state?.cid,
                })
              }
              alt="lock icon"
            />
          </div>
        </div>
      </section>

      <UniversalTab
        tabList={tabList}
        setActiveIndexTab={setActiveIndex}
        activeIndexTab={activeIndex}
        customStyleTab={{
          width: "50%",
        }}
      />
      <BorderBottom
        customStyle={{
          width: "100%",
        }}
      />
      {activeIndex === 0 && <StudentList classId={getQuery.state?.cid ?? ""} />}
      {activeIndex === 1 && <PromoteList classId={getQuery.state?.cid ?? ""} />}
      {lockClass && (
        <ClassComplete
          lockClass={lockClass}
          onClose={() => setLockClass("")}
          setClassIconStatus={setClassIconStatus}
        />
      )}
      {disabled && <QLoader />}
      <Notfication
        msg={notificationState.msg}
        run={notificationState.run}
        setRun={() => setNotificationState({ msg: "", run: false })}
        postiton="bottom"
        type="success"
      />
    </>
  );
};

export default OneClass;
