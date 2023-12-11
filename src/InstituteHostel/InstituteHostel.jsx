import React, { useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import Navbar from "../Dashboard/InsDashboard/Components/Navbar/Navbar";
import { useHostelDetail } from "../hooks/member_tab/hostel-api";
import style from "../Finance/Institute/InsFinance.module.css";
import styleHostel from "./InstituteHostel.module.css";
import styleMain from "../Finance/Institute/Mainbody/Main.module.css";
import InstituteHostelites from "./InstituteHostelites";
import InstituteHostelMenu from "./InstituteHostelMenu";
import InstituteHostelSidebar from "./InstituteHostelSidebar";
import InstituteHostelWarden from "./InstituteHostelWarden";
import HostelFees from "../MembersTab/staff/Mainbody/Hostel/HostelFees/HostelFees";
import HostelUnitInfo from "../MembersTab/staff/Mainbody/Hostel/HostelUnit/HostelUnitInfo/HostelUnitInfo";
import UnitRoomInfo from "../MembersTab/staff/Mainbody/Hostel/HostelUnit/HostelUnitInfo/UnitRoomInfo/UnitRoomInfo";
import HostelAnnouncement from "../MembersTab/staff/Mainbody/Hostel/HostelAnnouncement.jsx/HostelAnnouncement";
import HostelSiteInfo from "../MembersTab/staff/Mainbody/Hostel/HostelSiteInfo/HostelSiteInfo";
import HostelBatch from "../MembersTab/staff/Mainbody/Hostel/HostelBatch/HostelBatch";
import HostelStandard from "../MembersTab/staff/Mainbody/Hostel/HostelStandard/HostelStandard";
import HostelModerator from "../MembersTab/staff/Mainbody/Hostel/Moderator/HostelModerator";
import HostelExport from "../MembersTab/staff/Mainbody/Hostel/Export/HostelExport";
import HostelFormSetting from "../MembersTab/staff/Mainbody/Hostel/HostleFormSetting/HostelFormSetting";
import HostelUnit from "../MembersTab/staff/Mainbody/Hostel/HostelUnit/HostelUnit";
import HostelApplicationRequest from "../MembersTab/staff/Mainbody/Hostel/HostelApplicationRequest/HostelApplicationRequest";
import HostelFeeStructure from "../MembersTab/staff/Mainbody/Hostel/HostelFeeStructure/HostelFeeStructure";
import { useSelector } from "react-redux";
const InstituteHostel = () => {
  const [searchParams] = useSearchParams();
  const getQuery = useLocation();
  const id = useSelector((state) => state.idChange.id);
  const { hostelDetail, hostelDetailRefetch } = useHostelDetail({
    data: {
      hid: getQuery.state?.hid,
      mod_id: "",
    },
    skip: !getQuery.state?.hid,
  });

  useEffect(() => {
    if (getQuery.state?.hid) hostelDetailRefetch();
  }, [getQuery.state?.hid, hostelDetailRefetch]);

  return (
    <div className={style.bgContainer}>
      <div className={style.navbar}>
        <Navbar status="home" />
      </div>

      {getQuery.search?.substring(3) === "site" ? (
        <HostelSiteInfo hid={getQuery.state?.hid} viewAs="INSTITUTE" />
      ) : (
        <div className={style.editContainer}>
          <div className={styleMain.main}>
            <InstituteHostelSidebar
              hostel={hostelDetail?.one_hostel}
              onRefetch={hostelDetailRefetch}
            />
            <div
              className={
                !(
                  !searchParams?.get("a") ||
                  searchParams?.get("a") === "fund" ||
                  searchParams?.get("a") === "fee"
                )
                  ? styleMain.finance_container_other
                  : styleMain.finance_container
              }
            >
              {(!searchParams?.get("a") ||
                searchParams?.get("a") === "fund" ||
                searchParams?.get("a") === "fee") && (
                <InstituteHostelMenu
                  carryParentState={getQuery.state}
                  onlineFee={hostelDetail?.one_hostel?.onlineFee}
                  offlineFee={hostelDetail?.one_hostel?.offlineFee}
                  exemptAmount={hostelDetail?.one_hostel?.exemptAmount}
                  remainingFeeCount={
                    hostelDetail?.one_hostel?.remainingFeeCount
                  }
                />
              )}

              {searchParams?.get("a") === "warden" && (
                <div className={styleHostel.institute_hostel_container_border}>
                  <InstituteHostelWarden hid={getQuery.state?.hid} />
                </div>
              )}
              {searchParams?.get("a") === "unit" &&
                (["info", "hostelites", "menu", "room"]?.includes(
                  searchParams?.get("n")
                ) ? (
                  <HostelUnitInfo
                    carryParentState={getQuery.state}
                    pageOpenAs="INSTITUTE"
                  />
                ) : (
                  <div
                    className={styleHostel.institute_hostel_container_border}
                  >
                    <HostelUnit
                      hid={getQuery.state?.hid}
                      carryParentState={getQuery.state}
                      instituteId={hostelDetail?.one_hostel?.institute?._id}
                      pageOpenAs="INSTITUTE"
                    />
                  </div>
                ))}

              {searchParams?.get("a") === "room" && (
                <UnitRoomInfo
                  carryParentState={getQuery.state}
                  viewAs="INSTITUTE"
                />
              )}
              {searchParams?.get("a") === "notice" && (
                <div className={styleHostel.institute_hostel_container_border}>
                  <HostelAnnouncement
                    hid={getQuery.state?.hid}
                    carryParentState={getQuery.state}
                  />
                </div>
              )}
              {searchParams?.get("a") === "hostelites" && (
                <div className={styleHostel.institute_hostel_container_border}>
                  <InstituteHostelites
                    hid={getQuery.state?.hid}
                    instituteId={id}
                  />
                </div>
              )}
              {searchParams?.get("a") === "request" && (
                <div className={styleHostel.institute_hostel_container_border}>
                  <HostelApplicationRequest
                    hid={getQuery.state?.hid}
                    carryParentState={getQuery.state}
                    pageOpenAs="INSTITUTE"
                    instituteId={id}
                  />
                </div>
              )}
              {searchParams?.get("a") === "pending" && (
                <div className={styleHostel.institute_hostel_container_border}>
                  <HostelFees hid={getQuery.state?.hid} id={id} />
                </div>
              )}
              {searchParams?.get("a") === "form" && (
                <div className={styleHostel.institute_hostel_container_border}>
                  <HostelFormSetting hostelId={hostelDetail?.one_hostel?._id} />
                </div>
              )}
              {searchParams?.get("a") === "export" && (
                <div className={styleHostel.institute_hostel_container_border}>
                  <HostelExport
                    hostelId={hostelDetail?.one_hostel?._id}
                    instituteId={
                      hostelDetail?.one_hostel?.institute?.financeDepart?.[0]
                        ?._id
                    }
                  />
                </div>
              )}

              {searchParams?.get("a") === "moderator" && (
                <div className={styleHostel.institute_hostel_container_border}>
                  <HostelModerator
                    hid={hostelDetail?.one_hostel?._id}
                    instituteId={hostelDetail?.one_hostel?.institute?._id}
                  />
                </div>
              )}

              {searchParams?.get("a") === "batch" && (
                <div className={styleHostel.institute_hostel_container_border}>
                  <HostelBatch
                    hid={hostelDetail?.one_hostel?._id}
                    selectedBacthId={
                      hostelDetail?.one_hostel?.departmentSelectBatch
                    }
                    onMasterApiRefetch={hostelDetailRefetch}
                    carryParentState={getQuery.state}
                    pageOpenAs="INSTITUTE"
                    instituteId={
                      hostelDetail?.one_hostel?.institute?.financeDepart?.[0]
                        ?._id
                    }
                  />
                </div>
              )}
              {searchParams?.get("a") === "standard" && (
                <div className={styleHostel.institute_hostel_container_border}>
                  <HostelStandard
                    hid={hostelDetail?.one_hostel?._id}
                    carryParentState={getQuery.state}
                    pageOpenAs="INSTITUTE"
                  />
                </div>
              )}
              {searchParams?.get("a") === "fee" && (
                <div
                  style={{
                    marginTop: "1rem",
                  }}
                >
                  <HostelFeeStructure
                    financeId={
                      hostelDetail?.one_hostel?.institute?.financeDepart?.[0]
                        ?._id
                    }
                    fees_category_count={
                      hostelDetail?.one_hostel?.institute?.financeDepart?.[0]
                        ?.fees_category_count
                    }
                    fee_master_array_count={
                      hostelDetail?.one_hostel?.institute?.financeDepart?.[0]
                        ?.fee_master_array_count
                    }
                    fee_structure_count={
                      hostelDetail?.one_hostel?.fees_structures_count
                    }
                    carryParentState={getQuery.state}
                    hostelId={hostelDetail?.one_hostel?._id}
                    instituteId={hostelDetail?.one_hostel?.institute?._id}
                    pageOpenAs="INSTITUTE"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InstituteHostel;
