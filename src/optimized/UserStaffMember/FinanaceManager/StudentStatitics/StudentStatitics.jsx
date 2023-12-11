import BorderBottom from "../../../Ui/Border/BorderBottom";
import UserMemberContainerWrapper from "../../../Ui/UserMember/UserMemberContainerWrapper";
import UserMemberContentWrapper from "../../../Ui/UserMember/UserMemberContentWrapper";
import { useTranslation } from "react-i18next";
import style from "../FinanceManager.module.css";
import StudentStatiticsTable from "./StudentStatiticsTable";
import { useState } from "react";
import SelectDepartment from "../Department/SelectDepartment";
import SelectBatch from "../Department/SelectBatch";
import { useNavigate } from "react-router-dom";
import { useFinanceStudentStatitics } from "../../../Hooks/ApiHooks/FinanceManager/finance-manager-api";
import QvipleLoader from "../../../Loader/QvipleLoader";
// import { systemMeasure } from "../../../Utils/Functions/systemMeasure";

const StudentStatitics = ({ fid }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [step, setStep] = useState("DEPARTMENT");
  const [selectDepartment, setSelectDepartment] = useState("");
  const [selectBatch, setSelectBatch] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [financeAddExcelFeeHead] = useFinanceStudentStatitics();
  const [statitics, setStatitics] = useState([]);
  const onCloseDepartment = () => {
    if (step === "OWN_DEPARTMENT") {
      setStep("");
    } else {
      navigate(-1);
    }
  };
  const onCloseBatch = () => {
    setStep("DEPARTMENT");
  };

  const onSelectDepartment = (val) => {
    if (val === "ALL") {
      if (val?._id) {
        setDisabled((pre) => !pre);
        financeAddExcelFeeHead({
          bid: val?._id,
        })
          .then((res) => {
            if (res.data?.excel_list?.length > 0)
              setStatitics(res.data?.excel_list);
            setDisabled((pre) => !pre);
          })
          .catch({});
      }
    } else {
      setSelectDepartment(val);
      setStep("BATCH");
    }
  };
  const onSelectBatch = (val) => {
    setStep("");
    if (val?._id) {
      setSelectBatch(val);
      setDisabled((pre) => !pre);
      financeAddExcelFeeHead({
        bid: val?._id,
      })
        .then((res) => {
          if (res.data?.excel_list?.length > 0)
            setStatitics(res.data?.excel_list);
          setDisabled((pre) => !pre);
        })
        .catch({});
    }
  };
  return (
    <>
      <UserMemberContainerWrapper
        customStyle={{
          maxWidth: "870px",
        }}
      >
        <UserMemberContentWrapper>
          <div className={style.fm_header_container}>
            <h6>{t("student_statitics")}</h6>
          </div>
        </UserMemberContentWrapper>
        <BorderBottom />
        <UserMemberContentWrapper
          customStyle={{
            paddingTop: "0.2rem",
          }}
        >
          <h6
            className={style.fm_title_heading}
            onClick={() => setStep("OWN_DEPARTMENT")}
          >
            {t("department_name")} {" : "}
            {selectDepartment?.dName ?? ""}{" "}
            <span>{selectBatch?.batchName ?? ""}</span>
          </h6>
          <StudentStatiticsTable statitics={statitics} />
        </UserMemberContentWrapper>
      </UserMemberContainerWrapper>
      {step === "DEPARTMENT" || step === "OWN_DEPARTMENT" ? (
        <SelectDepartment
          onClose={onCloseDepartment}
          fid={fid}
          onSelect={onSelectDepartment}
        />
      ) : step === "BATCH" ? (
        <SelectBatch
          onClose={onCloseBatch}
          did={selectDepartment?._id}
          onSelect={onSelectBatch}
        />
      ) : null}
      {disabled && <QvipleLoader />}
    </>
  );
};

export default StudentStatitics;
