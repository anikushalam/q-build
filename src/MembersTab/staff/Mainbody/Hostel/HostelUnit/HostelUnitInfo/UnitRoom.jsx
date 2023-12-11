import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { useGetRoomListHostelUnit } from "../../../../../../hooks/member_tab/hostel-api";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";
import style from "../../Hostel.module.css";
import AddUnitRoom from "./AddUnitRoom";
import UnitRoomCard from "./UnitRoomCard";

const UnitRoom = ({ huid, carryParentState, viewAs, callApi }) => {
  const { t } = useTranslation();
  const [add, setAdd] = useState(false);
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [hostelUnitRoomList, setHostelUnitRoomList] = useState([]);
  const [refetchStatus, setRefetchStatus] = useState(false);

  const { getRoomListHostelUnit, getRoomListHostelUnitRefetch } =
    useGetRoomListHostelUnit({
      data: {
        huid: huid,
        page: page,
        limit: 10,
        search: "",
      },
      skip: !huid,
    });
  useEffect(() => {
    if (huid) {
      setShowingDataLoading(true);
      getRoomListHostelUnitRefetch();
    }
  }, [huid, page, getRoomListHostelUnitRefetch]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (refetchStatus) {
      setHostelUnitRoomList(getRoomListHostelUnit?.all_rooms);
      setShowingDataLoading(false);
      setRefetchStatus(false);
    } else {
      if (getRoomListHostelUnit?.all_rooms) {
        setHostelUnitRoomList((prevState) =>
          [
            ...new Set(
              [...prevState, ...getRoomListHostelUnit?.all_rooms]?.map(
                JSON.stringify
              )
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
      } else if (getRoomListHostelUnit?.all_rooms?.length === 0)
        setShowingDataLoading(false);
      else {
      }
    }
    if (getRoomListHostelUnit?.all_rooms?.length === 10) setState(true);
    else setState(false);
  }, [getRoomListHostelUnit?.all_rooms]);

  const onClose = () => {
    setAdd((pre) => !pre);
  };
  const onRefetchWhenCreate = () => {
    setPage(1);
    setRefetchStatus(true);
    setShowingDataLoading(true);
    getRoomListHostelUnitRefetch();
  };
  return (
    <div className={style.unit_room_container}>
      {viewAs === "STUDENT" || viewAs === "HOSTEL_SEARCH" ? (
        ""
      ) : (
        <p className={style.add_new_category} onClick={onClose}>
          {t("create_new_room")}
        </p>
      )}

      {hostelUnitRoomList?.map((room, index) =>
        hostelUnitRoomList?.length === index + 1 ? (
          <div ref={ref} key={room?._id}>
            <UnitRoomCard
              room={room}
              carryParentState={carryParentState}
              viewAs={viewAs}
              callApi={callApi}
            />
          </div>
        ) : (
          <UnitRoomCard
            room={room}
            key={room?._id}
            carryParentState={carryParentState}
            viewAs={viewAs}
            callApi={callApi}
          />
        )
      )}
      {showingDataLoading && <QvipleLoading />}
      {add && (
        <AddUnitRoom
          onClose={onClose}
          huid={huid}
          onRefetch={onRefetchWhenCreate}
        />
      )}
    </div>
  );
};

export default UnitRoom;
