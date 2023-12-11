import React, { useEffect, useState } from "react";
import style from "../Hostel/Hostel.module.css";
import { useStaffLeaveListQuery } from "../../../../services/joining/joinApi";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import QvipleLoading from "../../../../Loader/QvipleLoading";
import CreateStaffLeave from "./CreateStaffLeave";
import StaffLeaveCard from "./StaffLeaveCard";

function StaffManageCOff({ staffId }) {
  const { t } = useTranslation();
  const [add, setAdd] = useState(false);
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [leaveList, setLeaveList] = useState([]);

  const { data: staffLeaveData, refetch: staffLeaveDataRefetch } =
    useStaffLeaveListQuery(
      {
        sid: staffId,
        page: page,
        limit: 10,
        category: "Compensation Off Leave",
      },
      {
        skip: !staffId,
      }
    );
  useEffect(() => {
    if (staffId) {
      setShowingDataLoading(true);
      staffLeaveDataRefetch();
    }
  }, [staffId, page, staffLeaveDataRefetch]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (staffLeaveData?.allLeave) {
      if (page === 1) {
        setLeaveList(staffLeaveData?.allLeave);
        setShowingDataLoading(false);
      } else {
        setLeaveList((prevState) =>
          [
            ...new Set(
              [...prevState, ...staffLeaveData?.allLeave]?.map(JSON.stringify)
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
      }
    } else if (staffLeaveData?.allLeave?.length === 0)
      setShowingDataLoading(false);
    else {
    }
    if (staffLeaveData?.allLeave?.length === 10) setState(true);
    else setState(false);
  }, [staffLeaveData?.allLeave]);

  const onClose = () => {
    setAdd((pre) => !pre);
  };
  const onRefetchWhenCreate = () => {
    setPage(1);
    setShowingDataLoading(true);
    staffLeaveDataRefetch();
  };

  return (
    <>
      <div
        className={style.with_search}
        style={{
          justifyContent: "flex-end",
        }}
      >
        <p className={style.add_new_category} onClick={onClose}>
          {t("request_c_off_leave")}
        </p>
      </div>
      {leaveList?.map((leave, index) =>
        leaveList?.length === index + 1 ? (
          <div ref={ref} key={leave?._id}>
            <StaffLeaveCard leave={leave} onRefetch={onRefetchWhenCreate} />
          </div>
        ) : (
          <StaffLeaveCard
            key={leave?._id}
            leave={leave}
            onRefetch={onRefetchWhenCreate}
          />
        )
      )}
      {showingDataLoading && <QvipleLoading />}

      {add && (
        <CreateStaffLeave
          createdBy="OWN_PROFILE"
          staffId={staffId}
          onRefetch={onRefetchWhenCreate}
          onClose={onClose}
        />
      )}
    </>
  );
}

export default StaffManageCOff;
