import React, { useEffect } from "react";
import { useOneStaffProfile } from "../../../../../hooks/institute/institute-staff-student-api";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import style from "./StaffAProfileView.module.css";
import BasicTabs from "./Tab";

const StaffAProfileView = ({ sid }) => {
  const [edit, setEdit] = React.useState("");
  const [open, setOpen] = React.useState("");

  const { oneStaffProfile, oneStaffProfileRefetch } = useOneStaffProfile({
    sid: sid,
    skip: !sid,
  });
  useEffect(() => {
    if (sid) oneStaffProfileRefetch();
  }, [sid, oneStaffProfileRefetch]);
  useEffect(() => {
    setEdit("");
  }, [sid]);

  const editHandler = (val) => {
    setOpen(false);
    setEdit(val);
  };

  return (
    <>
      <h6 className={style.heading}>Staff Profile Institute</h6>
      <div className={style.profileDetail}>
        <img
          src={
            oneStaffProfile?.staff?.photoId !== "1"
              ? `${imageShowUrl}/${oneStaffProfile?.staff?.staffProfilePhoto}`
              : "/images/ins_default_profile.svg"
          }
          style={{ borderRadius: "50%" }}
          alt="Staff Profile"
        />
        <div className={style.profileDesig}>
          <p className={style.profileName}>
            {oneStaffProfile?.staff &&
              `${oneStaffProfile?.staff.staffFirstName} ${
                oneStaffProfile?.staff.staffMiddleName
                  ? oneStaffProfile?.staff.staffMiddleName
                  : ""
              } ${oneStaffProfile?.staff.staffLastName}`}
          </p>
          <p className={style.profileIndex}>
            Index No.{" "}
            {oneStaffProfile?.staff && oneStaffProfile?.staff.staffROLLNO}
          </p>
          <p className={style.profileDesignation}>
            Designations:{" "}
            {oneStaffProfile?.staff &&
              oneStaffProfile?.staff.staffDesignationCount}
          </p>
        </div>
      </div>
      <img
        src="/images/menu-dots-icon.svg"
        alt=""
        className={style.menu}
        onClick={() => setOpen((oep) => !oep)}
      />
      <BasicTabs
        tabData={oneStaffProfile?.staff}
        edit={edit}
        setEdit={setEdit}
        onEditStaffRefetch={oneStaffProfileRefetch}
      />

      {open && (
        <div className={style.menuItemoutside} onClick={() => setOpen(false)}>
          <div className={style.menuItem}>
            <p onClick={() => editHandler("edit")}>Edit</p>
          </div>
        </div>
      )}
    </>
  );
};

export default StaffAProfileView;
