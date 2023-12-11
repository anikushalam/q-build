import React, { useEffect, useState } from "react";
import style from "./Hostel.module.css";
import { useLocation } from "react-router-dom";
import { useHostelDetail } from "../../../../hooks/member_tab/hostel-api";
import HostelProfile from "./HostelProfile";
import InstituteHostelWarden from "../../../../InstituteHostel/InstituteHostelWarden";
import HostelUnit from "./HostelUnit/HostelUnit";
import HostelRules from "./HostelRules/HostelRules";
import HostelFormSetting from "./HostleFormSetting/HostelFormSetting";
import HostelUnitInfo from "./HostelUnit/HostelUnitInfo/HostelUnitInfo";
import UnitRoomInfo from "./HostelUnit/HostelUnitInfo/UnitRoomInfo/UnitRoomInfo";
import HostelApplicationRequest from "./HostelApplicationRequest/HostelApplicationRequest";
import HostelAnnouncement from "./HostelAnnouncement.jsx/HostelAnnouncement";
import HostelReceipt from "./HostelReceipt/HostelReceipt";
import Hostelites from "./Hostelites/Hostelites";
import HostelFees from "./HostelFees/HostelFees";
import HostelModerator from "./Moderator/HostelModerator";
import HostelDeposit from "./Deposit/HostelDeposit";
import HostelExport from "./Export/HostelExport";
import HostelBatch from "./HostelBatch/HostelBatch";
import HostelStandard from "./HostelStandard/HostelStandard";
import LinkedInstitute from "./LinkedInstitute/LinkedInstitute";

const Hostel = ({ onClickValue, carryParentState, role, mid }) => {
  const getQuery = useLocation();
  // const params = useParams();
  const [activatedRole, setActivatedRole] = useState("");
  const { hostelDetail, hostelDetailRefetch } = useHostelDetail({
    data: {
      hid: role ? onClickValue?.hostel : onClickValue,
      mod_id: role ? mid : "",
    },
    skip: onClickValue ? !onClickValue : onClickValue?.hostel,
  });

  useEffect(() => {
    if (onClickValue || onClickValue?.hostel) hostelDetailRefetch();
  }, [onClickValue, onClickValue?.hostel, hostelDetailRefetch]);

  useEffect(() => {
    if (hostelDetail?.roles?.length) {
      if (role) {
        let modId = onClickValue?._id;
        for (let moder of hostelDetail?.roles) {
          if (modId === moder?._id) {
            setActivatedRole(moder);
            break;
          }
        }
      }
    } else if (hostelDetail?.roles?.length === 0) {
      setActivatedRole("");
    }
  }, [hostelDetail?.roles]);

  return (
    <div
      style={{
        marginTop: "1rem",
      }}
    >
      {(!getQuery?.search ||
        getQuery?.search?.substring(3, 6) === "fee" ||
        getQuery?.search?.substring(3) === "fund") && (
        <HostelProfile
          hid={role ? onClickValue?.hostel : onClickValue}
          hostel={hostelDetail?.one_hostel}
          carryParentState={carryParentState}
          onRefetch={hostelDetailRefetch}
          activatedRole={activatedRole}
          callApi={hostelDetail?.one_hostel?._id ? true : false}
        />
      )}
      {getQuery?.search?.substring(3) === "warden" && (
        <div className={style.hostel_container}>
          <InstituteHostelWarden
            hid={role ? onClickValue?.hostel : onClickValue}
          />
        </div>
      )}
      {getQuery?.search?.substring(3) === "unit" && (
        <div className={style.hostel_container}>
          <HostelUnit
            hid={role ? onClickValue?.hostel : onClickValue}
            carryParentState={carryParentState}
            instituteId={hostelDetail?.one_hostel?.institute?._id}
            callApi={hostelDetail?.one_hostel?._id ? true : false}
          />
        </div>
      )}
      {(getQuery?.search?.substring(3) === "unit&n=info" ||
        getQuery?.search?.substring(3) === "unit&n=hostelites" ||
        getQuery?.search?.substring(3) === "unit&n=menu&n=room") && (
        <HostelUnitInfo
          carryParentState={carryParentState}
          callApi={hostelDetail?.one_hostel?._id ? true : false}
          instituteId={hostelDetail?.one_hostel?.institute?._id}
        />
      )}
      {getQuery?.search?.substring(3) === "unit&n=room" && (
        <UnitRoomInfo carryParentState={carryParentState} />
      )}
      {getQuery?.search?.substring(3) === "rule" && (
        <div className={style.hostel_container}>
          <HostelRules hid={role ? onClickValue?.hostel : onClickValue} />
        </div>
      )}
      {getQuery?.search?.substring(3) === "form" && (
        <div className={style.hostel_container}>
          <HostelFormSetting hid={role ? onClickValue?.hostel : onClickValue} />
        </div>
      )}
      {getQuery?.search?.substring(3, 10) === "request" && (
        <div className={style.hostel_container}>
          <HostelApplicationRequest
            hid={role ? onClickValue?.hostel : onClickValue}
            carryParentState={carryParentState}
            accessRole={activatedRole?.access_role}
            accessApplication={activatedRole?.access_application ?? []}
            accessTpye={activatedRole?.active_tab?.role ?? "Application"}
            callApi={hostelDetail?.one_hostel?._id ? true : false}
            instituteId={hostelDetail?.one_hostel?.institute?._id}
          />
        </div>
      )}

      {getQuery?.search?.substring(3, 10) === "notice" && (
        <div className={style.hostel_container}>
          <HostelAnnouncement
            hid={role ? onClickValue?.hostel : onClickValue}
            carryParentState={carryParentState}
          />
        </div>
      )}
      {getQuery?.search?.substring(3, 10) === "receipt" && (
        <div className={style.hostel_container}>
          <HostelReceipt
            hid={role ? onClickValue?.hostel : onClickValue}
            carryParentState={carryParentState}
          />
        </div>
      )}
      {getQuery?.search?.substring(3) === "hostelites" && (
        <div className={style.hostel_container}>
          <Hostelites
            hid={role ? onClickValue?.hostel : onClickValue}
            carryParentState={carryParentState}
            filter_by=""
            instituteId={hostelDetail?.one_hostel?.institute?._id}
          />
        </div>
      )}
      {getQuery?.search && getQuery?.search?.substring(3) === "pending" && (
        <div className={style.hostel_container}>
          <HostelFees
            hid={role ? onClickValue?.hostel : onClickValue}
            instituteId={hostelDetail?.one_hostel?.institute?._id}
          />
        </div>
      )}
      {getQuery?.search && getQuery?.search?.substring(3) === "moderator" && (
        <div className={style.hostel_container}>
          <HostelModerator
            hid={role ? onClickValue?.hostel : onClickValue}
            instituteId={hostelDetail?.one_hostel?.institute?._id}
          />
        </div>
      )}
      {getQuery?.search?.substring(3) === "deposit" && (
        <div className={style.hostel_container}>
          <HostelDeposit hid={role ? onClickValue?.hostel : onClickValue} />
        </div>
      )}
      {getQuery?.search?.substring(3) === "export" && (
        <div className={style.hostel_container}>
          <HostelExport
            hostelId={role ? onClickValue?.hostel : onClickValue}
            instituteId={
              hostelDetail?.one_hostel?.institute?.financeDepart?.[0]?._id
            }
          />
        </div>
      )}

      {getQuery?.search?.substring(3) === "batch" && (
        <div className={style.hostel_container}>
          <HostelBatch
            hid={role ? onClickValue?.hostel : onClickValue}
            selectedBacthId={hostelDetail?.one_hostel?.departmentSelectBatch}
            onMasterApiRefetch={hostelDetailRefetch}
            carryParentState={carryParentState}
            instituteId={
              hostelDetail?.one_hostel?.institute?.financeDepart?.[0]?._id
            }
          />
        </div>
      )}
      {getQuery?.search?.substring(3) === "standard" && (
        <div className={style.hostel_container}>
          <HostelStandard
            hid={role ? onClickValue?.hostel : onClickValue}
            carryParentState={carryParentState}
          />
        </div>
      )}
      {getQuery?.search?.substring(3) === "linked" && (
        <div className={style.hostel_container}>
          <LinkedInstitute
            hid={role ? onClickValue?.hostel : onClickValue}
            // carryParentState={carryParentState}
          />
        </div>
      )}
    </div>
  );
};

export default Hostel;
