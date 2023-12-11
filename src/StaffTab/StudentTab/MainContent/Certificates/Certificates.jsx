import React, { useState } from "react";
import style from "./Certificates.module.css";
import CertificateList from "./CertificateList/CertificateList";
import BonaFide from "./Bonafide/BonaFide";
import CustomSuspense from "../../../../Custom/SuspenseLoading/CustomSuspense";
import CertificateModal from "./CertificateModal/CertificateModal";
const Leaving = React.lazy(() => import("./Leaving/Leaving"));
function Certificates({
  leavingform,
  setLeavingForm,
  student,
  setStudent,
  download,
  setDownload,
  toggle,
  setToggle,
  viewAs,
  instituteId,
}) {
  const [index, setIndex] = useState(0);
  return (
    <>
      {viewAs === "DESIGNATION_SIDE" ? (
        <div
          className={style.complaints}
          style={{
            width: "100%",
          }}
        >
          <div
            className={style.complaintList}
            style={{
              width: "50%",
            }}
          >
            <CertificateList index={index} setIndex={setIndex} />
          </div>
          <div
            className={style.complaintDetail}
            style={{
              width: "50%",
            }}
          >
            {index === 0 && (
              <BonaFide viewAs={viewAs} instituteId={instituteId} />
            )}
            {index === 1 && (
              <CustomSuspense>
                <Leaving
                  leavingform={leavingform}
                  setLeavingForm={setLeavingForm}
                  student={student}
                  setStudent={setStudent}
                  download={download}
                  setDownload={setDownload}
                  toggle={toggle}
                  setToggle={setToggle}
                  status="leaving"
                  viewAs={viewAs}
                  instituteId={instituteId}
                />
              </CustomSuspense>
            )}
            {index === 2 && (
              <CustomSuspense>
                <Leaving
                  leavingform={leavingform}
                  setLeavingForm={setLeavingForm}
                  student={student}
                  setStudent={setStudent}
                  download={download}
                  setDownload={setDownload}
                  toggle={toggle}
                  setToggle={setToggle}
                  status="transfer"
                  viewAs={viewAs}
                  instituteId={instituteId}
                />
              </CustomSuspense>
            )}
          </div>
        </div>
      ) : (
        <div className={style.complaints}>
          <div className={style.complaintList}>
            <CertificateList index={index} setIndex={setIndex} />
          </div>
          <div className={style.complaintDetail}>
            {index === 0 && <BonaFide />}
            {index === 1 && (
              <CustomSuspense>
                <Leaving
                  leavingform={leavingform}
                  setLeavingForm={setLeavingForm}
                  student={student}
                  setStudent={setStudent}
                  download={download}
                  setDownload={setDownload}
                  toggle={toggle}
                  setToggle={setToggle}
                  status="leaving"
                />
              </CustomSuspense>
            )}
            {index === 2 && (
              <CustomSuspense>
                <Leaving
                  leavingform={leavingform}
                  setLeavingForm={setLeavingForm}
                  student={student}
                  setStudent={setStudent}
                  download={download}
                  setDownload={setDownload}
                  toggle={toggle}
                  setToggle={setToggle}
                  status="transfer"
                />
              </CustomSuspense>
            )}
          </div>
        </div>
      )}
      {index === 3 && (
        <CertificateModal
          addDisplay={index === 3 ? true : false}
          hideModal={() => setIndex(0)}
          instituteId={instituteId}
          viewAs={viewAs}
        />
      )}
    </>
  );
}

export default Certificates;
