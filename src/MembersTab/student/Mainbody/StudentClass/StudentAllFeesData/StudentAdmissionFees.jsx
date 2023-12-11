import React, { useState } from "react";
import AdmissionFeesApplicationWiseUniversal from "../../../../../StaffTab/StudentTab/MainContent/StudentAProfile/StudentFees/AdmissionFeesApplicationWiseUniversal";
import StudentAdmissionPayFees from "../../ViewProfile/FeesData/StudentAdmissionPayFees";
import style from "./StudentAllFeesData.module.css";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import { useStudentBankValidationByAdmission } from "../../../../../hooks/member_tab/admission-api";
import { Notfication } from "../../../../../validation/Snackbar";
import QLoader from "../../../../../Loader/QLoader";

const StudentAdmissionFees = ({
  viewAs,
  sudentAdmissionFeesList,
  sudentAdmissionFeesListRefetch,
  feesQueryRefetch,
  showingDataLoading,
  isFeesEditable,
}) => {
  const [studentPayFees, setStudentPayFees] = useState(false);
  const [installment, setInstallment] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [notificationState, setNotificationState] = useState({
    msg: "",
    run: false,
  });
  const [studentBankValidationByAdmission] =
    useStudentBankValidationByAdmission();

  const onAdmissionPaid = (val) => {
    setDisabled((pre) => !pre);
    studentBankValidationByAdmission({
      fid: val?.financeId,
      aid: val?.install?.appId,
      flow: val?.collectFlow === "Department" ? "BY_DEPARTMENT" : "BY_HOSTEL",
    })
      .then((res) => {
        setDisabled((pre) => !pre);
        if (res?.data?.denied) {
          setNotificationState({
            msg: "Before initiating payment. you must have a valid bank account to receive payment.",
            run: true,
          });
        } else {
          if (viewAs === "STUDENT" && val?.install?.isEnable) {
            setStudentPayFees(true);
            setInstallment(val);
          }
        }
      })
      .catch({});
  };
  return (
    <div className={style.student_admission_fees_container}>
      {sudentAdmissionFeesList?.array?.map((admission) => (
        <AdmissionFeesApplicationWiseUniversal
          admission={admission}
          viewAs={viewAs}
          onAdmissionPaid={onAdmissionPaid}
          onAdmissionFeesRefetch={sudentAdmissionFeesListRefetch}
          renderPageAs="STUDENT_PROFILE"
          is_feesdata
        />
      ))}

      {studentPayFees && (
        <StudentAdmissionPayFees
          installment={installment}
          onAdmissionFeesRefetch={sudentAdmissionFeesListRefetch}
          onFeesRefetch={feesQueryRefetch}
          hideModal={setStudentPayFees}
          addDisplay={studentPayFees}
          isFeesEditable={isFeesEditable}
        />
      )}
      {showingDataLoading && <QvipleLoading />}
      <Notfication
        msg={notificationState.msg}
        run={notificationState.run}
        setRun={() => setNotificationState({ msg: "", run: false })}
        postiton="bottom"
        type="error"
      />
      {disabled && <QLoader />}
    </div>
  );
};

export default StudentAdmissionFees;
