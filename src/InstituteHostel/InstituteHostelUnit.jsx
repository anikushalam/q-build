import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { useGetHostelUnitList } from "../hooks/member_tab/hostel-api";
import QvipleLoading from "../Loader/QvipleLoading";
import style from "./InstituteHostel.module.css";
import BorderBottom from "../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import HostelUnitCard from "./HostelUnitCard";
import { useLocation } from "react-router-dom";
// import HostelUnitInfo from "../MembersTab/staff/Mainbody/Hostel/HostelUnit/HostelUnitInfo/HostelUnitInfo";

const InstituteHostelUnit = ({ hid, carryParentState }) => {
  const { t } = useTranslation();
  const getQuery = useLocation();
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [hostelUnitList, setHostelUnitList] = useState([]);

  const { getHostelUnitList, getHostelUnitListRefetch } = useGetHostelUnitList({
    data: {
      hid: hid,
      page: page,
      limit: 10,
      search: "",
    },
    skip: !hid,
  });
  useEffect(() => {
    if (hid) {
      setShowingDataLoading(true);
      getHostelUnitListRefetch();
    }
  }, [hid, page, getHostelUnitListRefetch]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (getHostelUnitList?.all_units) {
      setHostelUnitList((prevState) =>
        [
          ...new Set(
            [...prevState, ...getHostelUnitList?.all_units]?.map(JSON.stringify)
          ),
        ]?.map(JSON.parse)
      );
      setShowingDataLoading(false);
    } else if (getHostelUnitList?.all_units?.length === 0)
      setShowingDataLoading(false);
    else {
    }
    if (getHostelUnitList?.all_units?.length === 10) setState(true);
    else setState(false);
  }, [getHostelUnitList?.all_units]);
  return (
    <>
      {/* {getQuery.search?.substring(3) === "unit" && (
        <> */}
      <h6 className={style.institute_hostel_title}>{t("hostel_unit")}</h6>
      <BorderBottom
        customStyle={{
          width: "100%",
        }}
      />
      {hostelUnitList?.map((hostelUnit, index) =>
        hostelUnitList?.length === index + 1 ? (
          <div ref={ref} key={hostelUnit?._id}>
            <HostelUnitCard
              hostelUnit={hostelUnit}
              carryParentState={carryParentState}
            />
          </div>
        ) : (
          <HostelUnitCard
            hostelUnit={hostelUnit}
            key={hostelUnit?._id}
            carryParentState={carryParentState}
          />
        )
      )}
      {showingDataLoading && <QvipleLoading />}
      {/* </>
      )} */}
    </>
  );
};

export default InstituteHostelUnit;
