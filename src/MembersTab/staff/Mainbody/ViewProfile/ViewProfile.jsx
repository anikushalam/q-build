import React, { useEffect } from "react";
import style from "./ViewProfile.module.css";
import Tabbs from "./Tabs/Tabs";
import StaffAttendence from "./StaffAttendence/StaffAttendence";
import Payroll from "./Payroll/Payroll";
import { useGetOneStaffProfileQuery } from "../../../../services/qvipleAPI";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import StaffFormPhoto from "./StaffFormPhoto";
import StaffProfileAbout from "../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/StaffProfileAbout";
import CreateStaffLeave from "../Leaves/CreateStaffLeave";

function ViewProfile({ staffData }) {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [add, setAdd] = useState(false);

  const { data: oneStaff, refetch: oneStaffRefetch } =
    useGetOneStaffProfileQuery(staffData, { skip: !staffData });

  useEffect(() => {
    if (staffData) {
      oneStaffRefetch();
    }
  }, [staffData, oneStaffRefetch]);
  const onClose = () => {
    setAdd((pre) => !pre);
  };
  return (
    <>
      <div className={style.studentForm}>
        <div className={style.profile_head}>
          <div className={style.tophead}>Profile In Institute</div>
          {/* <p className={style.profile_head_staff_header_text} onClick={onClose}>
            {t("request_c_off_leave")}
          </p> */}
        </div>
        <div className={style.toprow}>
          <div className={style.imgcontainer}>
            <StaffFormPhoto
              photoKey={oneStaff?.staff?.staffProfilePhoto}
              photoId={oneStaff?.staff?.photoId}
              sid={oneStaff?.staff?._id}
            />
          </div>

          <div className={style.textcontainer}>
            <h6>
              {oneStaff?.staff?.staffFirstName}{" "}
              {oneStaff?.staff?.staffMiddleName
                ? oneStaff?.staff?.staffMiddleName
                : ""}{" "}
              {oneStaff?.staff?.staffLastName}
            </h6>
            <p>
              {" "}
              {t("index_no")}. {oneStaff?.staff?.staffROLLNO}
            </p>
            <p>
              {" "}
              {t("designations")}: {oneStaff?.staff?.staffDesignationCount}
            </p>
            <p>
              {" "}
              {t("form_current_designation_label")}:{" "}
              {oneStaff?.staff?.current_designation ?? ""}
            </p>
          </div>
        </div>
        <div className={style.tabs}>
          <Tabbs activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
        </div>

        {activeIndex === 0 && (
          <StaffProfileAbout staff={oneStaff?.staff} viewAs="STAFF_OWN" />
        )}
        {activeIndex === 1 && <StaffAttendence sid={oneStaff?.staff?._id} />}
        {activeIndex === 2 && <Payroll sid={oneStaff?.staff?._id} />}
      </div>
      {add && (
        <CreateStaffLeave
          createdBy="OWN_PROFILE"
          staffId={oneStaff?.staff?._id}
          onRefetch={oneStaffRefetch}
          onClose={onClose}
        />
      )}
    </>
  );
}

export default ViewProfile;
