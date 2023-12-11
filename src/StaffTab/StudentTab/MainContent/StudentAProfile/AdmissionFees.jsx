import React from "react";
import { useState } from "react";
import CustomSuspense from "../../../../Custom/SuspenseLoading/CustomSuspense";
import style from "./FeesData.module.css";
import { useTranslation } from "react-i18next";
import AdmissionFeesApplicationWise from "./StudentFees/AdmissionFeesApplicationWise";
import StudentAdmissionPayFees from "../../../../MembersTab/student/Mainbody/ViewProfile/FeesData/StudentAdmissionPayFees";
import AllotScholarshipAdmission from "../../../../MembersTab/staff/Mainbody/StaffAdmisionAdmin/AdmissionScholarship/OneScholarship/AllotScholarshipAdmission";
const PaymentPendingFee = React.lazy(() =>
  import(
    "../../../../MembersTab/staff/Mainbody/StaffAdmisionAdmin/RemainingFees/PaymentPendingFee/PaymentPendingFee"
  )
);
const AdmissionFees = ({
  admissionFees,
  setIsInternal,
  setAdmission,
  admission,
  viewAs,
  onAdmissionDetailRefetch,
  onAdmissionFeesRefetch,
  onFeesRefetch,
  studentId,
}) => {
  const [payFees, setPayFees] = useState(false);
  const [studentPayFees, setStudentPayFees] = useState(false);
  const [allotScholarship, setAllotScholarship] = useState(false);
  const [installment, setInstallment] = useState("");

  const onAdmissionPaid = (val) => {
    // console.info("this is val", val, viewAs);
    if (viewAs === "ADMISSION_ADMIN" && val?.install?.isEnable) {
      setPayFees(true);
      setInstallment(val);
    } else if (val?.openAs === "REFUND") {
      setPayFees(true);
      setInstallment(val);
    } else if (viewAs === "STUDENT" && val?.install?.isEnable) {
      setStudentPayFees(true);
      setInstallment(val);
    } else if (
      viewAs === "ADMISSION_ADMIN_SCHOLARSHIP" &&
      val?.install?.isEnable
    ) {
      setInstallment(val);
      setAllotScholarship(true);
    }
  };

  // console.info("this is admission data", admissionFees);
  const { t } = useTranslation();
  return (
    <>
      {admission && (
        <div
          className={
            admission
              ? `${style.parentFeeRow2} ${style.admission_hover_active}`
              : `${style.parentFeeRow2} ${style.admission_hover}`
          }
          onClick={() => {
            setAdmission(false);
            setIsInternal(true);
          }}
          title="View All Internal Fees"
        >
          <p className={style.childFeeRow}>
            <span className={style.childFeeTexts}>{t("internal_fees")}</span>
            <span className={style.childFeeText}>
              {" "}
              {t("go")} {"<-"}
            </span>
          </p>
        </div>
      )}
      {admissionFees?.map((admission) => (
        <AdmissionFeesApplicationWise
          admission={admission}
          viewAs={viewAs}
          onAdmissionPaid={onAdmissionPaid}
          onAdmissionFeesRefetch={onAdmissionFeesRefetch}
        />
      ))}

      {payFees && (
        <CustomSuspense>
          <PaymentPendingFee
            onAdmissionDetailRefetch={onAdmissionDetailRefetch}
            onAdmissionFeesRefetch={onAdmissionFeesRefetch}
            onFeesRefetch={onFeesRefetch}
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
          onAdmissionFeesRefetch={onAdmissionFeesRefetch}
          onFeesRefetch={onFeesRefetch}
          hideModal={setStudentPayFees}
          addDisplay={studentPayFees}
        />
      )}
      {allotScholarship && (
        <AllotScholarshipAdmission
          onClose={() => setAllotScholarship(false)}
          installment={installment}
          onAdmissionFeesRefetch={onAdmissionFeesRefetch}
          onFeesRefetch={onFeesRefetch}
        />
      )}
    </>
  );
};

export default AdmissionFees;
