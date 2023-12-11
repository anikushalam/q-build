import { useState } from "react";
import { useSelector } from "react-redux";
import {
  useOneStaffProfile,
  useStaffApprove,
  useStaffReject,
} from "../../../../../hooks/institute/institute-staff-student-api";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import BorderBottom from "../StaffAProfile/BorderBottom";
import StaffHeader from "../StaffAProfile/StaffHeader";
import style from "../StaffAProfile/StaffProfile.module.css";
import StaffProfileAbout from "../StaffAProfile/StaffProfileAbout";
import StaffProfilePhoto from "../StaffAProfile/StaffProfilePhoto";
import StaffRequestAction from "./StaffRequestAction";
const StaffRequestProfile = ({
  requestId,
  requestFetch,
  queryFetch,
  onClose,
}) => {
  const [disabled, setDisabled] = useState(false);
  const id = useSelector((state) => state.idChange.id);
  const { oneStaffProfile, oneStaffProfileRefetch } = useOneStaffProfile({
    sid: requestId,
    skip: !requestId,
  });
  const [staffApprove] = useStaffApprove();
  const [staffReject] = useStaffReject();

  const AcceptHandler = (ssid, uuid) => {
    setDisabled((pre) => !pre);
    if (ssid && uuid && id) {
      staffApprove({
        id: id,
        sid: ssid,
        uid: uuid,
        status: "Approved",
      }).then(() => {
        oneStaffProfileRefetch();
        requestFetch();
        queryFetch();
        onClose();
        setDisabled((pre) => !pre);
      });
    }
    // Approve Staff
  };
  const RejectHandler = (ssid, uuid) => {
    setDisabled((pre) => !pre);
    if (ssid && uuid && id) {
      staffReject({
        id: id,
        sid: ssid,
        uid: uuid,
        status: "Rejected",
      }).then(() => {
        oneStaffProfileRefetch();
        requestFetch();
        queryFetch();
        onClose();
        setDisabled((pre) => !pre);
      });
    }
  };

  // const openInNewTab = (url) => {
  //   const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  //   if (newWindow) newWindow.opener = null;
  // };

  return (
    <>
      <div className={style.staff_profile_container}>
        <StaffHeader textLevel="Staff Profile In Institute" onClose={onClose} />
        <BorderBottom />
        <StaffProfilePhoto
          name={`${oneStaffProfile?.staff?.staffFirstName || ""} ${
            oneStaffProfile?.staff?.staffMiddleName
              ? oneStaffProfile?.staff?.staffMiddleName
              : ""
          } ${oneStaffProfile?.staff?.staffLastName || ""}`}
          designation={oneStaffProfile?.staff?.staffDesignationCount || 0}
          indexNumber={oneStaffProfile?.staff?.staffROLLNO || "-"}
          dynamicImage={
            oneStaffProfile?.staff?.photoId !== "1"
              ? `${imageShowUrl}/${oneStaffProfile?.staff?.staffProfilePhoto}`
              : "/images/ins_default_profile.svg"
          }
          onEditable={true}
        />
        <BorderBottom />

        <StaffProfileAbout staff={oneStaffProfile?.staff} />

        <StaffRequestAction
          staff={oneStaffProfile?.staff}
          AcceptHandler={AcceptHandler}
          RejectHandler={RejectHandler}
          disabled={disabled}
        />
      </div>
    </>
  );
};

export default StaffRequestProfile;
