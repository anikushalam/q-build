import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useSearchParams } from "react-router-dom";
import style from "../Finance/Institute/InsFinance.module.css";
import styleMain from "../Finance/Institute/Mainbody/Main.module.css";
import styleHostel from "../MembersTab/staff/Mainbody/Hostel/Hostel.module.css";
import Navbar from "../Dashboard/InsDashboard/Components/Navbar/Navbar";
import { useTransportDetail } from "../hooks/member_tab/transport-api";
import InstituteTransportSidebar from "./InstituteTransportSidebar";
import TransportSiteInfo from "../MembersTab/staff/Mainbody/Transport/TransportSiteInfo/TransportSiteInfo";
import InstituteTransportMenu from "./InstituteTransportMenu";
import TransportFeeStructure from "../MembersTab/staff/Mainbody/Transport/TransportFeeStructure/TransportFeeStructure";
import { useSelector } from "react-redux";
import Vehicle from "../MembersTab/staff/Mainbody/Transport/Vehicle/Vehicle";
import TransportStaff from "../MembersTab/staff/Mainbody/Transport/TransportStaff/TransportStaff";
import Passenger from "../MembersTab/staff/Mainbody/Transport/Passenger/Passenger";
import TransportBatch from "../MembersTab/staff/Mainbody/Transport/TransportBatch/TransportBatch";
import TransportStandard from "../MembersTab/staff/Mainbody/Transport/TransportStandard/TransportStandard";
import VehicleDetail from "../MembersTab/staff/Mainbody/Transport/VehicleDetail/VehicleDetail";
import TransportPendingFees from "../MembersTab/staff/Mainbody/Transport/TransportPendingFees/TransportPendingFees";

const InstituteTransport = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const getQuery = useLocation();
  const id = useSelector((state) => state.idChange.id);
  const { transportDetail, transportDetailRefetch } = useTransportDetail({
    tid: getQuery.state?.tid,
    skip: !getQuery.state?.tid,
  });

  useEffect(() => {
    if (getQuery.state?.tid) transportDetailRefetch();
  }, [getQuery.state?.tid, transportDetailRefetch]);

  return (
    <>
      <div className={style.bgContainer}>
        <div className={style.navbar}>
          <Navbar status="home" />
        </div>

        {getQuery.search?.substring(3) === "site" ? (
          <TransportSiteInfo tid={getQuery.state?.tid} viewAs="INSTITUTE" />
        ) : (
          <div className={style.editContainer}>
            <div className={styleMain.main}>
              <InstituteTransportSidebar
                transport={transportDetail?.trans_panel}
                onRefetch={transportDetailRefetch}
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
                  <InstituteTransportMenu
                    carryParentState={getQuery.state}
                    transport={transportDetail?.trans_panel}
                  />
                )}

                {searchParams.get("a") === "vehicle" && (
                  <div className={styleHostel.hostel_container}>
                    <Vehicle
                      tid={transportDetail?.trans_panel?._id}
                      carryParentState={getQuery.state}
                      instituteId={id}
                      pageOpenAs="INSTITUTE"
                      isRootAccess={
                        id === transportDetail?.trans_panel?.institute?._id
                          ? "VALID"
                          : "INVALID"
                      }
                    />
                  </div>
                )}

                {searchParams.get("a") === "personal" && (
                  <div className={styleHostel.hostel_container}>
                    <TransportStaff
                      tid={transportDetail?.trans_panel?._id}
                      carryParentState={getQuery.state}
                    />
                  </div>
                )}

                {searchParams.get("a") === "passenger" && (
                  <div className={styleHostel.hostel_container}>
                    <Passenger
                      tid={transportDetail?.trans_panel?._id}
                      carryParentState={getQuery.state}
                      instituteId={id}
                    />
                  </div>
                )}
                {searchParams.get("a") === "batch" && (
                  <div className={styleHostel.hostel_container}>
                    <TransportBatch
                      transportId={transportDetail?.trans_panel?._id}
                      selectedBacthId={
                        transportDetail?.trans_panel?.departmentSelectBatch
                      }
                      onMasterApiRefetch={transportDetailRefetch}
                      carryParentState={getQuery.state}
                      instituteId={id}
                      pageOpenAs="INSTITUTE"
                      isRootAccess={
                        id === transportDetail?.trans_panel?.institute?._id
                          ? "VALID"
                          : "INVALID"
                      }
                    />
                  </div>
                )}
                {searchParams.get("a") === "standard" && (
                  <div className={styleHostel.hostel_container}>
                    <TransportStandard
                      transportId={transportDetail?.trans_panel?._id}
                      carryParentState={getQuery.state}
                      pageOpenAs="INSTITUTE"
                      isRootAccess={
                        id === transportDetail?.trans_panel?.institute?._id
                          ? "VALID"
                          : "INVALID"
                      }
                    />
                  </div>
                )}
                {searchParams.get("a") === "vehicle-detail" && (
                  <div className={styleHostel.hostel_container}>
                    <VehicleDetail
                      transportId={transportDetail?.trans_panel?._id}
                      carryParentState={getQuery.state}
                      pageOpenAs="INSTITUTE"
                      isRootAccess={
                        id === transportDetail?.trans_panel?.institute?._id
                          ? "VALID"
                          : "INVALID"
                      }
                      instituteId={id}
                    />
                  </div>
                )}
                {searchParams.get("a") === "pending" && (
                  <div className={styleHostel.hostel_container}>
                    <TransportPendingFees
                      transportId={transportDetail?.trans_panel?._id}
                      instituteId={id}
                    />
                  </div>
                )}

                {searchParams?.get("a") === "fee" && (
                  <div
                    style={{
                      marginTop: "1rem",
                    }}
                  >
                    <TransportFeeStructure
                      financeId={
                        transportDetail?.trans_panel?.institute
                          ?.financeDepart?.[0]?._id
                      }
                      fees_category_count={
                        transportDetail?.trans_panel?.institute
                          ?.financeDepart?.[0]?.fees_category_count
                      }
                      fee_master_array_count={
                        transportDetail?.trans_panel?.institute
                          ?.financeDepart?.[0]?.fee_master_array_count
                      }
                      fee_structure_count={
                        transportDetail?.trans_panel?.fees_structures_count
                      }
                      carryParentState={getQuery.state}
                      transportId={transportDetail?.trans_panel?._id}
                      instituteId={id}
                      pageOpenAs="INSTITUTE"
                      isRootAccess={
                        id === transportDetail?.trans_panel?.institute?._id
                          ? "VALID"
                          : "INVALID"
                      }
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default InstituteTransport;
