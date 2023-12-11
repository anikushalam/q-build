import React, { useEffect } from "react";
import style from "./ApplicationStatus.module.css";
import { useApplicationStatusQuery } from "../../../../services/joining/joinApi";
import moment from "moment";
import { useSelector } from "react-redux";
// import SalaryHistory from "./Employees/SalaryHistory";
function ApplicationStatus() {
  const ids = useSelector((state) => state.idChange);
  const { data: applicationStatus, refetch: applicationStatusRefetch } =
    useApplicationStatusQuery(ids?.id, {
      skip: !ids?.id,
    });

  useEffect(() => {
    if (ids?.id) applicationStatusRefetch();
  }, [ids?.id, applicationStatusRefetch]);

  return (
    <div className={style.applicationStatus}>
      {applicationStatus?.status?.map((item, index) => (
        <div className={style.item} key={index}>
          <h6 className={style.status_institute_name}>
            {item?.instituteId?.insName}
          </h6>
          <p>{item?.content}</p>
          <div className={style.timeDate}>
            <p>{moment(item?.createdAt).format("ll")}</p>
            <p>{moment(item?.createdAt).format("LT")}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ApplicationStatus;
