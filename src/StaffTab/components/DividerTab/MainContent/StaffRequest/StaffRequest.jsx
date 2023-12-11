import React, { useState } from "react";
import style from "./StaffRequest.module.css";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import moment from "moment";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { usePendingStaffList } from "../../../../../hooks/institute/institute-staff-student-api";
import CustomSuspense from "../../../../../Custom/SuspenseLoading/CustomSuspense";
const StaffRequestProfile = React.lazy(() => import("./StaffRequestProfile"));
const StaffRequest = ({ fetchArray }) => {
  const ids = useSelector((state) => state.idChange);
  const { t } = useTranslation();
  const { pendingStaffList, pendingStaffListRefetch } = usePendingStaffList({
    id: ids?.id,
    skip: !ids?.id,
  });
  React.useEffect(() => {
    if (ids?.id) pendingStaffListRefetch();
  }, [ids?.id, pendingStaffListRefetch]);
  // React.useEffect(() => {
  //   if (sid) setRStaffId(sid);
  // }, [sid]);
  const [rStaffId, setRStaffId] = useState("");
  const onStaffView = (id) => {
    setRStaffId(id);
  };
  const onClose = () => {
    setRStaffId("");
  };
  return (
    <>
      {!rStaffId && (
        <div className={`${style.StaffRequestContainer} row`}>
          <div className={style.requestParent}>
            <div className={style.requestParentTop}>
              <div className={style.requestAction}>
                <span className="mx-1" style={{ display: "flex" }}>
                  <img
                    src="/images/action-pending.svg"
                    title="Request"
                    className="mx-1"
                    alt="Request"
                  />
                  {t("action_pending")}
                </span>
                <span className="mx-1">
                  {pendingStaffList?.staffIns?.staff
                    ? pendingStaffList.staffIns.staff.length
                    : 0}
                </span>
              </div>
            </div>

            {pendingStaffList?.staffIns?.staff?.map((st) => (
              <>
                <div
                  className={style.requestStudent}
                  key={st._id}
                  onClick={() => onStaffView(st?._id)}
                >
                  <div className={style.requestStudentChild}>
                    <img
                      src={
                        st?.photoId !== "1"
                          ? `${imageShowUrl}/${st?.staffProfilePhoto}`
                          : "/images/ins_default_profile.svg"
                      }
                      loading="lazy"
                      alt="Avatar"
                    />
                    <div className={style.applyNameDate}>
                      <p className={style.applyName}>{`${st.staffFirstName} ${
                        st.staffMiddleName ? st.staffMiddleName : ""
                      } ${st.staffLastName}`}</p>

                      <p className={style.applyDate}>
                        {moment(st.staffApplyDate).format("DD-MM-yyyy")}
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      )}
      {rStaffId && (
        <CustomSuspense>
          <StaffRequestProfile
            requestId={rStaffId}
            requestFetch={pendingStaffListRefetch}
            queryFetch={fetchArray}
            onClose={onClose}
          />
        </CustomSuspense>
      )}
    </>
  );
};

export default StaffRequest;
