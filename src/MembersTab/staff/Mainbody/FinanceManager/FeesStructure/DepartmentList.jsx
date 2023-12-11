import React from "react";
import { useTranslation } from "react-i18next";
import { useAllDepartmentCondition } from "../../../../../Department/Institute/Components/DepartmentApi/depart-api";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import FinanceTabChangeLink from "../FinanceTabChangeLink";
import style from "./FeesStructure.module.css";
import InstituteFinanceTabChangeLink from "../../../../../Finance/Institute/Mainbody/InstituteFinanceTabChangeLink";

const DepartmentList = ({
  instituteId,
  carryParentState,
  accessRole,
  callApi,
  viewAs,
}) => {
  const { t } = useTranslation();
  const [showingDataLoading, setShowingDataLoading] = React.useState(true);
  const { allDepartment, allDepartmentRefetch } = useAllDepartmentCondition({
    id: instituteId,
    skip: !instituteId,
  });

  React.useEffect(() => {
    if (instituteId) allDepartmentRefetch();
  }, [instituteId]);

  React.useEffect(() => {
    if (allDepartment?.institute?.depart) {
      setShowingDataLoading(false);
    } else if (allDepartment?.institute?.depart?.length === 0) {
      setShowingDataLoading(false);
    } else {
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allDepartment?.institute?.depart]);
  //   console.info("this is all department", allDepartment?.institute?.depart);
  return (
    <div className={style.department_container}>
      {allDepartment?.institute?.depart?.map((depart) =>
        viewAs === "INSTITUTE" ? (
          <InstituteFinanceTabChangeLink
            carryParentState={{
              ...carryParentState,
              did: depart?._id,
              dName: depart?.dName,
            }}
            activeTab="?a=fee&n=structure&batch"
            key={depart?._id}
          >
            <div className={style.department_card_container}>
              <img
                src="/images/profileAndCover/department-profile-img.svg"
                alt="department avatar"
                className={style.department_card_image}
              />
              <div>
                <h6 className={style.department_card_name}>
                  {depart?.dName || ""}
                </h6>
                <p className={style.department_card_head}>
                  {t("total_masters")} {depart?.classMasterCount ?? 0}
                </p>
              </div>
            </div>
          </InstituteFinanceTabChangeLink>
        ) : (
          <FinanceTabChangeLink
            carryParentState={{
              ...carryParentState,
              did: depart?._id,
              dName: depart?.dName,
            }}
            activeTab="fee&n=structure&batch"
            key={depart?._id}
            accessRole={accessRole}
            callApi={callApi}
          >
            <div className={style.department_card_container}>
              <img
                src="/images/profileAndCover/department-profile-img.svg"
                alt="department avatar"
                className={style.department_card_image}
              />
              <div>
                <h6 className={style.department_card_name}>
                  {depart?.dName || ""}
                </h6>
                <p className={style.department_card_head}>
                  {t("total_masters")} {depart?.classMasterCount ?? 0}
                </p>
              </div>
            </div>
          </FinanceTabChangeLink>
        )
      )}

      {showingDataLoading && <QvipleLoading />}
    </div>
  );
};

export default DepartmentList;
