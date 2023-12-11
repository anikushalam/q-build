import React, { useState } from "react";
import StaffTabSidebar from "./StaffTabSidebar";
import Navbar from "../Dashboard/InsDashboard/Components/Navbar/Navbar";
import style from "./staffTab.module.css";
import LeavingForm from "./LeavingForm/LeavingForm";
import MainStudentContent from "./StudentTab/MainContent/MainStudentContent";
const InstituteStudentConfig = () => {
  const [leavingform, setLeavingForm] = useState({
    leaving: false,
    transfer: false,
  });
  const [student, setStudent] = useState("");
  const [toggle, setToggle] = useState(null);
  const [download, setDownload] = useState();
  return (
    <div className={style.insprofilesetting}>
      <div className={style.navbar}>
        <Navbar status="home" />
      </div>
      {!leavingform.leaving && !leavingform.transfer && (
        <div className={style.staff_tab_container}>
          <div>
            <div className={style.staff_tab_sidebar}>
              <StaffTabSidebar activeIndex={2} />
            </div>
          </div>
          <div className={style.staff_tab_main}>
            <MainStudentContent
              leavingform={leavingform}
              setLeavingForm={setLeavingForm}
              student={student}
              setStudent={setStudent}
              toggle={toggle}
              setToggle={setToggle}
              download={download}
              setDownload={setDownload}
            />
          </div>
        </div>
      )}
      {leavingform.leaving && (
        <LeavingForm
          setLeavingForm={setLeavingForm}
          student={student}
          setStudent={setStudent}
          download={download}
          setDownload={setDownload}
          toggle={toggle}
          setToggle={setToggle}
          certificatestatus="leaving"
        />
      )}
      {leavingform.transfer && (
        <LeavingForm
          setLeavingForm={setLeavingForm}
          student={student}
          setStudent={setStudent}
          download={download}
          setDownload={setDownload}
          toggle={toggle}
          setToggle={setToggle}
          certificatestatus="transfer"
        />
      )}
    </div>
  );
};

export default InstituteStudentConfig;
