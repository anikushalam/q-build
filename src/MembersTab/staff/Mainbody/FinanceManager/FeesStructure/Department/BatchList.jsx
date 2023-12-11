import React, { useEffect } from "react";
import { useOneViewDepartment } from "../../../../../../Department/Institute/Components/DepartmentApi/depart-api";
import moment from "moment";
import style from "../../../ExamDepartment/ExamDepartment.module.css";
import { useTranslation } from "react-i18next";
import FinanceTabChangeLink from "../../FinanceTabChangeLink";
import InstituteFinanceTabChangeLink from "../../../../../../Finance/Institute/Mainbody/InstituteFinanceTabChangeLink";
const BatchList = ({
  departmentId,
  carryParentState,
  accessRole,
  callApi,
  viewAs,
}) => {
  const { t } = useTranslation();
  const { oneDepartment, oneDepartmentRefetch } = useOneViewDepartment({
    did: departmentId,
    skip: !departmentId,
  });

  useEffect(() => {
    if (departmentId) {
      oneDepartmentRefetch();
    }
  }, [departmentId, oneDepartmentRefetch]);
  return (
    <>
      {oneDepartment?.department?.batches?.map((batch) =>
        viewAs === "INSTITUTE" ? (
          <InstituteFinanceTabChangeLink
            carryParentState={{
              ...carryParentState,
              batchId: batch?._id,
            }}
            activeTab="?a=fee&n=structure&standard"
            key={batch?._id}
          >
            <div className={style.class_container}>
              <img
                className={style.oneRowImage}
                src="/images/master-24-grey-icon.svg"
                alt="batch icon"
              />
              <div className={style.class_container_text}>
                <h6>{batch?.batchName}</h6>
                <p>
                  {t("created_on")}

                  {moment(batch.createdAt).format("DD MMM yyyy")}
                </p>
              </div>
            </div>
          </InstituteFinanceTabChangeLink>
        ) : (
          <FinanceTabChangeLink
            carryParentState={{
              ...carryParentState,
              batchId: batch?._id,
            }}
            activeTab="fee&n=structure&standard"
            key={batch?._id}
            accessRole={accessRole}
            callApi={callApi}
          >
            <div className={style.class_container}>
              <img
                className={style.oneRowImage}
                src="/images/master-24-grey-icon.svg"
                alt="batch icon"
              />
              <div className={style.class_container_text}>
                <h6>{batch?.batchName}</h6>
                <p>
                  {t("created_on")}

                  {moment(batch.createdAt).format("DD MMM yyyy")}
                </p>
              </div>
            </div>
          </FinanceTabChangeLink>
        )
      )}
    </>
  );
};

export default BatchList;
