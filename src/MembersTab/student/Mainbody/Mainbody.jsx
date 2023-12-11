import React, { useState } from "react";

import style from "./Mainbody.module.css";
import "./Mainbody.css";
import Sidebar from "./Sidebar/Sidebar";
import Menu from "./Menu/Menu";
import ApplicationStatus from "./ApplicationStatus/ApplicationStatus";
import { useStudentDesignationDataQuery } from "../../../services/joining/joinApi";
import ViewProfile from "./ViewProfile/ViewProfile";
import Complaints from "./Complaints/Complaints";
import Leaves from "./Leaves/Leaves";
import Transfers from "./Transfers/Transfers";
import PreviousReport from "./PreviousReport/PreviousReport";
import StudentClass from "./StudentClass/StudentClass";
import SwitchAccount from "../../staff/Mainbody/SwitchAccount/SwitchAccount";

function Mainbody({ swichDataId, setSwitchDataId }) {
  const { data: studentDesignationData } =
    useStudentDesignationDataQuery(swichDataId);

  const [index, setIndex] = useState("0");
  const [menu, setMenu] = useState(false);
  React.useEffect(() => {
    if (studentDesignationData?.student?.studentClass?.classTitle) {
      setIndex("1");
    } else {
      setIndex("0");
    }
  }, [studentDesignationData?.student?.studentClass?.classTitle]);

 

  return (
    <div className={style.mainbody}>
      <div className={style.sidebar}>
        <Sidebar
          setIndex={setIndex}
          index={index}
          studentName={`${studentDesignationData?.student?.studentFirstName} ${
            studentDesignationData?.student?.studentMiddleName
              ? studentDesignationData?.student?.studentMiddleName
              : ""
          } ${studentDesignationData?.student?.studentLastName}`}
          rollNo={studentDesignationData?.student?.studentROLLNO}
          institute={studentDesignationData?.student?.institute?.insName}
          photoId={studentDesignationData?.student?.photoId}
          profilephoto={studentDesignationData?.student?.studentProfilePhoto}
        />
      </div>
      <div className={style.rightbody}>
        {index === "0" && (
          <div className={style.formSelect} onClick={() => setMenu(!menu)}>
            <h6>Application Status</h6>
            <img alt="" src="/images/members/downTriangle.svg" />
          </div>
        )}

        {index === "1" && (
          <div className={style.formSelect} onClick={() => setMenu(!menu)}>
            <h6>{studentDesignationData?.student?.studentClass?.classTitle}</h6>
            <img alt="" src="/images/members/downTriangle.svg" />
          </div>
        )}

        {(index === "4" ||
          index === "5" ||
          index === "6" ||
          index === "7" ||
          index === "8") && (
          <div
            className={`${style.formSelect} ${style.disabled}`}
            onClick={() => setMenu(!menu)}
          >
            <h6>Application Status</h6>
            <img alt="" src="/images/members/downTriangle_disabled.svg" />
          </div>
        )}

        {menu && (
          <Menu
            studentDesignationData={studentDesignationData}
            open={menu}
            onClose={() => setMenu(false)}
            setMenu={setMenu}
            setIndex={setIndex}
          />
        )}

        {index === "0" && <ApplicationStatus />}

        {/* <ApplicationStatus /> */}

        {(index === "1" || index === "10" || index === "12") && (
          <StudentClass
            setIndexx={setIndex}
            indexx={index}
            lid={studentDesignationData?.student?.institute?.library[0]}
            studentId={studentDesignationData?.student?._id}
            classId={studentDesignationData?.student?.studentClass?._id}
            studentRollNo={studentDesignationData?.student?.studentROLLNO}
          />
        )}

        {index === "4" && (
          <ViewProfile
            studentData={studentDesignationData?.student}
            avgpoints={studentDesignationData?.average_points}
            extraPoints={studentDesignationData?.student?.extraPoints}
          />
        )}

        {index === "5" && (
          <Complaints studentId={studentDesignationData?.student?._id} />
        )}

        {index === "6" && (
          <Leaves studentId={studentDesignationData?.student?._id} />
        )}

        {index === "7" && (
          <Transfers
            studentId={studentDesignationData?.student?._id}
            setIndex={setIndex}
          />
        )}

        {index === "8" && (
          <PreviousReport
            studentId={studentDesignationData?.student?._id}
            setIndex={setIndex}
          />
        )}

        {index === "11" && (
          <SwitchAccount
            setSwitchDataId={setSwitchDataId}
            setIndex={setIndex}
          />
        )}
      </div>
    </div>
  );
}

export default Mainbody;
