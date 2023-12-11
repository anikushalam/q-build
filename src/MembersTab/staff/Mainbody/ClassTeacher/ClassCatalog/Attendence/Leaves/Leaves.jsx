import React, { useEffect } from "react";
import { useClassAllLeaveRequest } from "../../../../../../../hooks/member_tab/class-api";
import LeaveCard from "./LeaveCard";
import style from "./Leaves.module.css";
import { useTranslation } from "react-i18next";

function Leaves({ cid }) {
  const { classAllLeaveRequest, classAllLeaveRequestRefetch } =
    useClassAllLeaveRequest({
      data: { cid: cid, page: 1, limit: 50 },
      skip: !cid,
    });

  useEffect(() => {
    if (cid) classAllLeaveRequestRefetch();
  }, [cid, classAllLeaveRequestRefetch]);
  const { t } = useTranslation();
  // console.info("THis is all Leave ", classAllLeaveRequest);

  return (
    <div className={style.leaves}>
      <h6 className={style.leavesHead}>{t("leaves_and_transfer")}</h6>

      <div className={style.leaveCardContainer}>
        {classAllLeaveRequest?.allLeave?.map((leave) => (
          <LeaveCard
            key={leave?._id}
            leave={leave}
            onRefetch={classAllLeaveRequestRefetch}
          />
        ))}
      </div>
    </div>
  );
}

export default Leaves;
