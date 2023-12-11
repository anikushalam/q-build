import { useOneStudentAdmissionFees } from "@/Hooks/ApiHooks/FinanceManager/finance-manager-api";
import StudentOneAdmissionFees from "./StudentOneAdmissionFees";
import style from "./StudentFees.module.css";
import Loading from "@/Loader/Loading";
const StudentAdmissionFees = ({ sid, isFeesData }) => {
  const { oneStudentAdmissionFees, oneStudentAdmissionFeesLoading } =
    useOneStudentAdmissionFees({
      sid: sid,
      skip: !sid,
    });

  //   console.info("oneStudentAdmissionFees", oneStudentAdmissionFees);
  return (
    <div className={style.student_admission_fees_container}>
      {oneStudentAdmissionFeesLoading && <Loading />}
      {oneStudentAdmissionFees?.array?.map((admission) => (
        <StudentOneAdmissionFees
          admission={admission}
          key={admission?._id}
          isFeesData={isFeesData}
          sid={sid}
        />
      ))}
    </div>
  );
};

export default StudentAdmissionFees;
