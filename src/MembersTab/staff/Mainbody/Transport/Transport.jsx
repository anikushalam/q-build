import React, { useEffect } from "react";
import style from "../Hostel/Hostel.module.css";
import { useSearchParams } from "react-router-dom";
import TransportProfile from "./TransportProfile";
import { useTransportDetail } from "../../../../hooks/member_tab/transport-api";
import Vehicle from "./Vehicle/Vehicle";
import TransportStaff from "./TransportStaff/TransportStaff";
import Passenger from "./Passenger/Passenger";
import VehicleDetail from "./VehicleDetail/VehicleDetail";
import TransportBatch from "./TransportBatch/TransportBatch";
import TransportStandard from "./TransportStandard/TransportStandard";
import TransportDeposit from "./Deposit/TransportDeposit";
import TransportPendingFees from "./TransportPendingFees/TransportPendingFees";
import LinkedInstitute from "./LinkedInstitute/LinkedInstitute";

const Transport = ({ onClickValue, carryParentState }) => {
  const [searchParams] = useSearchParams();
  const { transportDetail, transportDetailRefetch } = useTransportDetail({
    tid: onClickValue?._id,
    skip: !onClickValue?._id,
  });

  useEffect(() => {
    if (onClickValue?._id) transportDetailRefetch();
  }, [onClickValue?._id, transportDetailRefetch]);
  return (
    <div
      style={{
        marginTop: "1rem",
      }}
    >
      {[null, "fee", "fund"]?.includes(searchParams.get("a")) && (
        <TransportProfile
          tid={onClickValue?._id}
          transport={transportDetail?.trans_panel}
          carryParentState={carryParentState}
          onRefetch={transportDetailRefetch}
        />
      )}

      {searchParams.get("a") === "vehicle" && (
        <div className={style.hostel_container}>
          <Vehicle
            tid={onClickValue?._id}
            carryParentState={carryParentState}
            instituteId={transportDetail?.trans_panel?.institute?._id ?? ""}
          />
        </div>
      )}
      {searchParams.get("a") === "personal" && (
        <div className={style.hostel_container}>
          <TransportStaff
            tid={onClickValue?._id}
            carryParentState={carryParentState}
            instituteId={transportDetail?.trans_panel?.institute?._id ?? ""}
          />
        </div>
      )}

      {searchParams.get("a") === "passenger" && (
        <div className={style.hostel_container}>
          <Passenger
            tid={onClickValue?._id}
            carryParentState={carryParentState}
            instituteId={transportDetail?.trans_panel?.institute?._id ?? ""}
          />
        </div>
      )}

      {searchParams.get("a") === "batch" && (
        <div className={style.hostel_container}>
          <TransportBatch
            transportId={onClickValue?._id}
            selectedBacthId={
              transportDetail?.trans_panel?.departmentSelectBatch
            }
            onMasterApiRefetch={transportDetailRefetch}
            carryParentState={carryParentState}
            instituteId={transportDetail?.trans_panel?.institute?._id ?? ""}
          />
        </div>
      )}
      {searchParams.get("a") === "standard" && (
        <div className={style.hostel_container}>
          <TransportStandard
            transportId={onClickValue?._id}
            carryParentState={carryParentState}
          />
        </div>
      )}
      {searchParams.get("a") === "deposit" && (
        <div className={style.hostel_container}>
          <TransportDeposit
            transportId={onClickValue?._id}
            // carryParentState={carryParentState}
          />
        </div>
      )}
      {searchParams.get("a") === "pending" && (
        <div className={style.hostel_container}>
          <TransportPendingFees
            transportId={onClickValue?._id}
            instituteId={transportDetail?.trans_panel?.institute?._id ?? ""}

            // carryParentState={carryParentState}
          />
        </div>
      )}
      {searchParams.get("a") === "vehicle-detail" && (
        <VehicleDetail
          transportId={onClickValue?._id}
          carryParentState={carryParentState}
        />
      )}

      {searchParams.get("a") === "linked" && (
        <div className={style.hostel_container}>
          <LinkedInstitute
            transportId={onClickValue?._id}
            // carryParentState={carryParentState}
          />
        </div>
      )}
    </div>
  );
};

export default Transport;
