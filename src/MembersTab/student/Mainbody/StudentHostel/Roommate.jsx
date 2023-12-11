import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useGetStudentRoommateList } from "../../../../hooks/member_tab/hostel-api";
import QvipleLoading from "../../../../Loader/QvipleLoading";
import RoomHosteliteCard from "../../../staff/Mainbody/Hostel/HostelUnit/HostelUnitInfo/UnitRoomInfo/RoomHosteliteCard";

const Roommate = ({ sid }) => {
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [roommateList, setRoommateList] = useState([]);
  const { getStudentRoommateList, getStudentRoommateListRefetch } =
    useGetStudentRoommateList({
      data: {
        sid: sid,
        page: page,
        limit: 10,
      },
      skip: !sid,
    });
  useEffect(() => {
    if (sid) {
      setShowingDataLoading(true);
      getStudentRoommateListRefetch();
    }
  }, [sid, page, getStudentRoommateListRefetch]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (getStudentRoommateList?.all_roommates) {
      setRoommateList((prevState) =>
        [
          ...new Set(
            [...prevState, ...getStudentRoommateList?.all_roommates]?.map(
              JSON.stringify
            )
          ),
        ]?.map(JSON.parse)
      );
      setShowingDataLoading(false);
    } else if (getStudentRoommateList?.all_roommates?.length === 0)
      setShowingDataLoading(false);
    else {
    }
    if (getStudentRoommateList?.all_roommates?.length === 10) setState(true);
    else setState(false);
  }, [getStudentRoommateList?.all_roommates]);

  return (
    <div
      style={{
        padding: "1rem",
      }}
    >
      {roommateList?.map((hostelite, index) =>
        roommateList?.length === index + 1 ? (
          <div ref={ref} key={hostelite?._id}>
            <RoomHosteliteCard
              hostelite={hostelite}
              vacant={false}
              index={index}
              viewAs="STUDENT"
            />
          </div>
        ) : (
          <RoomHosteliteCard
            key={hostelite?._id}
            hostelite={hostelite}
            vacant={false}
            index={index}
            viewAs="STUDENT"
          />
        )
      )}
      {showingDataLoading && <QvipleLoading />}
    </div>
  );
};

export default Roommate;
