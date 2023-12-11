import React, { useEffect } from "react";
import { useState } from "react";
import CustomSuspense from "../../../../../Custom/SuspenseLoading/CustomSuspense";
import StudentAdmissionPayFees from "../../../../../MembersTab/student/Mainbody/ViewProfile/FeesData/StudentAdmissionPayFees";
import AllotScholarshipAdmission from "../../../../../MembersTab/staff/Mainbody/StaffAdmisionAdmin/AdmissionScholarship/OneScholarship/AllotScholarshipAdmission";
import {
  useCollectSetOffAdmissionFees,
  useRenderStudentAdmissionFees,
  useStudentBankValidationByAdmission,
} from "../../../../../hooks/member_tab/admission-api";
import { useGetStudentFeesArrayQuery } from "../../../../../services/qvipleAPI";
import AdmissionFeesApplicationWiseUniversal from "./AdmissionFeesApplicationWiseUniversal";
import AdmissionFeesCollectType from "./AdmissionFeesCollectType";
import { Notfication } from "../../../../../validation/Snackbar";
import QLoader from "../../../../../Loader/QLoader";
// import AdmissionFeesCard from "./AdmissionFeesCard";
const PaymentPendingFee = React.lazy(() =>
  import(
    "../../../../../MembersTab/staff/Mainbody/StaffAdmisionAdmin/RemainingFees/PaymentPendingFee/PaymentPendingFee"
  )
);
const AdmissionFeesUniversal = ({ viewAs, studentId }) => {
  const [payFees, setPayFees] = useState(false);
  const [studentPayFees, setStudentPayFees] = useState(false);
  const [allotScholarship, setAllotScholarship] = useState(false);
  const [installment, setInstallment] = useState("");
  const [isSetOff, setIsSetOff] = useState("");
  const [isSetOffOpen, setIsSetOffOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [notificationState, setNotificationState] = useState({
    msg: "",
    run: false,
  });
  const { refetch: feesQueryRefetch } = useGetStudentFeesArrayQuery(
    `${studentId}`,
    { skip: !studentId }
  );
  const { sudentAdmissionFeesList, sudentAdmissionFeesListRefetch } =
    useRenderStudentAdmissionFees({
      sid: studentId,
      skip: !studentId,
    });
  const [collectSetOffAdmissionFees] = useCollectSetOffAdmissionFees();
  const [studentBankValidationByAdmission] =
    useStudentBankValidationByAdmission();

  useEffect(() => {
    if (studentId) sudentAdmissionFeesListRefetch();
  }, [studentId, sudentAdmissionFeesListRefetch]);
  const onAdmissionPaid = (val) => {
    if (viewAs === "ADMISSION_ADMIN" && val?.install?.isEnable) {
      if (val?.setOffPrice > 0) {
        setIsSetOffOpen(true);
      } else {
        setPayFees(true);
      }
      setInstallment(val);
    } else if (val?.openAs === "REFUND") {
      setPayFees(true);
      setInstallment(val);
    } else if (viewAs === "STUDENT" && val?.install?.isEnable) {
      setDisabled((pre) => !pre);
      studentBankValidationByAdmission({
        fid: val?.financeId,
        aid: val?.install?.appId,
        flow:
          val?.collectFlow === "Department" ||
          val?.collectFlow === "Admission Application"
            ? "BY_DEPARTMENT"
            : "BY_HOSTEL",
      })
        .then((res) => {
          setDisabled((pre) => !pre);
          if (res?.data?.denied) {
            setNotificationState({
              msg: "Before initiating payment. you must have a valid bank account to receive payment.",
              run: true,
            });
          } else {
            setStudentPayFees(true);
            setInstallment(val);
          }
        })
        .catch({});
    } else if (
      viewAs === "ADMISSION_ADMIN_SCHOLARSHIP" &&
      val?.install?.isEnable
    ) {
      setInstallment(val);
      setAllotScholarship(true);
    }
  };

  const onActionType = () => {
    if (isSetOff === "SETOFF") {
      if (
        installment?.rid &&
        installment?.studentId
        // &&
        // installment?.setOffPrice
      ) {
        setDisabled((pre) => !pre);
        collectSetOffAdmissionFees({
          rcid: installment?.rid,
          sid: installment?.studentId,
          setOffData: {
            amount: installment?.setOffPrice,
            mode: "Setoff",
            type: installment?.install?.installmentValue,
            fee_payment_mode: "NEFT/RTGS/IMPS",
            fee_payment_amount: installment?.setOffPrice,
          },
        })
          .then(() => {
            feesQueryRefetch();
            sudentAdmissionFeesListRefetch();
            setIsSetOff("");
            setInstallment("");
            setIsSetOffOpen(false);
            setDisabled((pre) => !pre);
          })
          .catch({});
      }
    } else if (isSetOff === "COLLECT") {
      setPayFees(true);
      setIsSetOffOpen(false);
      setIsSetOff("");
    } else {
    }
  };

  const onFeesTypeClose = () => {
    setIsSetOff("");
    setInstallment("");
    setIsSetOffOpen(false);
  };
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "flex-start",
          gap: "2%",
          padding: "1.2rem",
        }}
      >
        {sudentAdmissionFeesList?.array?.map((admission) => (
          <AdmissionFeesApplicationWiseUniversal
            admission={admission}
            viewAs={viewAs}
            onAdmissionPaid={onAdmissionPaid}
            onAdmissionFeesRefetch={sudentAdmissionFeesListRefetch}
            onFeesRefetch={feesQueryRefetch}
            key={admission?._id}
          />
        ))}
      </div>
      {isSetOffOpen && (
        <AdmissionFeesCollectType
          onClose={onFeesTypeClose}
          state={isSetOff}
          setState={setIsSetOff}
          onActionType={onActionType}
          disabled={disabled}
          installment={installment}
        />
      )}
      {payFees && (
        <CustomSuspense>
          <PaymentPendingFee
            onAdmissionFeesRefetch={sudentAdmissionFeesListRefetch}
            onFeesRefetch={feesQueryRefetch}
            payFees={payFees}
            hideModal={setPayFees}
            installment={installment}
            studentId={studentId}
            viewAs={viewAs}
          />
        </CustomSuspense>
      )}
      {studentPayFees && (
        <StudentAdmissionPayFees
          installment={installment}
          onAdmissionFeesRefetch={sudentAdmissionFeesListRefetch}
          onFeesRefetch={feesQueryRefetch}
          hideModal={setStudentPayFees}
          addDisplay={studentPayFees}
        />
      )}
      {allotScholarship && (
        <AllotScholarshipAdmission
          onClose={() => setAllotScholarship(false)}
          installment={installment}
          onAdmissionFeesRefetch={sudentAdmissionFeesListRefetch}
          onFeesRefetch={feesQueryRefetch}
        />
      )}
      <Notfication
        msg={notificationState.msg}
        run={notificationState.run}
        setRun={() => setNotificationState({ msg: "", run: false })}
        postiton="bottom"
        type="error"
      />
      {disabled && <QLoader />}
    </>
  );
};

export default AdmissionFeesUniversal;
