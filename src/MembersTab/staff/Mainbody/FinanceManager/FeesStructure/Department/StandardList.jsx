import React, { useEffect } from "react";
import FinanceTabChangeLink from "../../FinanceTabChangeLink";
import style from "../../../ExamDepartment/ExamDepartment.module.css";
import { useAdmissionClassMasterList } from "../../../../../../hooks/member_tab/admission-api";
import InstituteFinanceTabChangeLink from "../../../../../../Finance/Institute/Mainbody/InstituteFinanceTabChangeLink";
const StandardList = ({
  carryParentState,
  accessRole,
  departmentId,
  callApi,
  viewAs,
}) => {
  const { admissionClassMasterList, admissionClassMasterListRefetch } =
    useAdmissionClassMasterList({
      did: departmentId,
      skip: !departmentId,
    });
  useEffect(() => {
    if (departmentId) {
      admissionClassMasterListRefetch();
    }
  }, [departmentId, admissionClassMasterListRefetch]);
  return (
    <>
      {admissionClassMasterList?.classMasters?.map((cls) =>
        viewAs === "INSTITUTE" ? (
          <InstituteFinanceTabChangeLink
            carryParentState={{
              ...carryParentState,
              clsId: cls?._id,
            }}
            activeTab="?a=fee&n=structure"
            key={cls?._id}
          >
            <div className={style.class_container}>
              <img
                className={style.oneRowImage}
                src="/images/master-24-grey-icon.svg"
                alt="batch icon"
              />
              <div className={style.class_container_text}>
                <h6>{cls?.className}</h6>
              </div>
            </div>
          </InstituteFinanceTabChangeLink>
        ) : (
          <FinanceTabChangeLink
            carryParentState={{
              ...carryParentState,
              clsId: cls?._id,
            }}
            activeTab="fee&n=structure"
            key={cls?._id}
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
                <h6>{cls?.className}</h6>
              </div>
            </div>
          </FinanceTabChangeLink>
        )
      )}
    </>
  );
};

export default StandardList;
