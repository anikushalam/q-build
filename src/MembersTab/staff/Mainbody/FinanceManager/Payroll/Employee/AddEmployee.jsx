import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import AssignStaffModal from "../../../../../../Department/Institute/AssignStaff/AssignStaffModal";
import { useAddEmployeePayroll } from "../../../../../../hooks/member_tab/finance-api";
import JoinFormInput from "../../../../../../JoiningForm/Student/Form/JoinFormInput";
import QLoader from "../../../../../../Loader/QLoader";
import { imageShowUrl } from "../../../../../../services/BaseUrl";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import { Notfication } from "../../../../../../validation/Snackbar";
import style from "../../FeesStructure/FeesStructure.module.css";
import PopupWrapper from "../../FeesStructure/PopupWrapper";
import AddSalaryMaster from "./AddSalaryMaster";
import SelectSalaryHead from "./SelectSalaryHead";

const AddEmployee = ({ onClose, financeId, onRefetch }) => {
  const { t } = useTranslation();
  const [activePopupIndex, setActivePopupIndex] = useState(0);
  const ids = useSelector((state) => state.financeChange);
  const [disabled, setDisabled] = useState(false);
  const [filled, setFilled] = useState("");
  const [addEmployeeState, setAddEmployeeState] = useState({
    staff_salary_month: "",
    staff_total_paid_leaves: "",
  });
  const [assignHeadStaff, setAssignHeadStaff] = useState("");
  const [addFeeHead, setAddFeeHead] = useState([]);
  const [addFeeHeadDeduction, setAddFeeHeadDecution] = useState([]);
  const [filterBy, setFilterBy] = useState("");
  const [basickSalary, setBasicSalary] = useState("");
  const [addEmployeePayroll] = useAddEmployeePayroll();
  const [totalValidation, setTotalValidation] = useState(0);
  const [notificationState, setNotificationState] = useState({
    msg: "",
    run: false,
  });
  // const onFeeHeadPriceChange = (e, index) => {
  //   // console.info("this is onChagew");
  //   const inputarr = [...addFeeHead];
  //   for (let inp = 0; inp < inputarr?.length; inp++) {
  //     if (inp === index) {
  //       inputarr[inp].head_amount = +e.target.value;
  //     }
  //   }
  //   setAddFeeHead(inputarr);
  // };
  const classheadSelect = (assing) => {
    setAssignHeadStaff(assing);
    setActivePopupIndex(1);
  };
  const onValidation = (head, amount) => {
    const errors = {};
    for (let obj in head) {
      if (obj === "staff_total_paid_leaves") {
      } else {
        if (!head[obj]) errors[obj] = `${obj} is required!`;
      }
    }
    if (+amount < +head.staff_salary_month) {
      errors["less_amount"] = ` is required!`;
      setNotificationState({
        msg: "Net total is not less than salary per month",
        run: true,
      });
    } else if (+amount > +head.staff_salary_month) {
      errors["greater_amount"] = ` is required!`;
      setNotificationState({
        msg: "Net total is not greater than salary per month",
        run: true,
      });
    } else {
    }
    return errors;
  };

  const onAddEmployee = () => {
    let tot = totalValidation + basickSalary;
    const validation = onValidation(addEmployeeState, tot);
    let flag = false;
    for (let errField in validation) {
      if (errField) {
        flag = true;
        break;
      }
    }
    if (flag) {
      setFilled(validation);
    } else {
      setDisabled((pre) => !pre);
      addEmployeePayroll({
        employeePayroll: {
          ...addEmployeeState,
          heads: [...addFeeHead, ...addFeeHeadDeduction],
          basic_pay: basickSalary,
        },
        sid: assignHeadStaff?._id,
        fid: financeId,
      })
        .then((res) => {
          if (res.data.status) {
            onRefetch();
            onClose();
            setDisabled((pre) => !pre);
          }
        })
        .catch({});
    }
  };
  return (
    <>
      {activePopupIndex === 0 && (
        <AssignStaffModal
          assignHead={activePopupIndex === 0 ? true : false}
          headSelect={classheadSelect}
          title={t("staff_list")}
          onClose={onClose}
          viewAs="ADMISSION_ADMIN"
          instituteId={ids?.insId}
        />
      )}
      {(activePopupIndex === 1 || activePopupIndex === 2) && (
        <PopupWrapper onClose={() => {}}>
          <div
            className={style.add_category_modal}
            style={{
              width: "30rem",
              minHeight: "10rem",
              maxHeight: "35rem",
              overflowY: "scroll",
              overflowX: "hidden",
            }}
          >
            {activePopupIndex === 1 && (
              <>
                {" "}
                <div className={style.add_category_modal_title}>
                  <section className={style.add_category_modal_title_left}>
                    <img
                      src="/images/arrow-left-fees-icon.svg"
                      onClick={onClose}
                      alt=""
                    />
                    <h6>{t("add_employee")}</h6>
                  </section>
                  <h6
                    onClick={onAddEmployee}
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    {t("add")}
                  </h6>
                </div>
                <BorderBottom
                  customStyle={{
                    width: "100%",
                  }}
                />
                <section className={style.add_employee_staff}>
                  <img
                    src={
                      assignHeadStaff?.staffProfilePhoto
                        ? `${imageShowUrl}/${assignHeadStaff?.staffProfilePhoto}`
                        : "/images/member_tab/class/default_avatar.svg"
                    }
                    alt="staff avatar"
                  />
                  <div className={style.add_employee_staff_text}>
                    <h6>{`${assignHeadStaff?.staffFirstName ?? ""} 
                  ${assignHeadStaff?.staffMiddleName ?? ""}
                  ${assignHeadStaff?.staffLastName ?? ""} `}</h6>
                    <p>
                      {t("index_number")} : {assignHeadStaff?.staffROLLNO ?? ""}
                    </p>
                  </div>
                </section>
                <JoinFormInput
                  labelText={t("salary_per_months")}
                  placeholder={t("salary_per_months_placeholder")}
                  name={"staff_salary_month"}
                  value={addEmployeeState?.staff_salary_month}
                  type={"text"}
                  onChange={(e) =>
                    setAddEmployeeState((prev) => ({
                      ...prev,
                      staff_salary_month: +e.target.value,
                    }))
                  }
                  errorShow={filled["staff_salary_month"]}
                />
                <JoinFormInput
                  labelText={t("paid_per_months")}
                  placeholder={t("paid_per_months_placeholder")}
                  name={"staff_total_paid_leaves"}
                  value={addEmployeeState?.staff_total_paid_leaves}
                  type={"text"}
                  onChange={(e) =>
                    setAddEmployeeState((prev) => ({
                      ...prev,
                      staff_total_paid_leaves: +e.target.value,
                    }))
                  }
                  // errorShow={filled["total_months"]}
                />
                <AddSalaryMaster
                  setFilterBy={setFilterBy}
                  setActivePopupIndex={setActivePopupIndex}
                  addFeeHead={addFeeHead}
                  setAddFeeHead={setAddFeeHead}
                  setAddFeeHeadDecution={setAddFeeHeadDecution}
                  addFeeHeadDeduction={addFeeHeadDeduction}
                  addEmployeeState={addEmployeeState}
                  setBasicSalary={setBasicSalary}
                  basickSalary={basickSalary}
                  setTotalValidation={setTotalValidation}
                  activePopupIndex={activePopupIndex}
                />
              </>
            )}
            {activePopupIndex === 2 && (
              <SelectSalaryHead
                onClose={() => setActivePopupIndex(1)}
                setAddFeeHead={setAddFeeHead}
                financeId={ids?.fid}
                filterBy={filterBy}
                setAddFeeHeadDecution={setAddFeeHeadDecution}
              />
            )}
            {disabled && <QLoader />}
          </div>
        </PopupWrapper>
      )}
      {notificationState.run && (
        <Notfication
          msg={notificationState.msg}
          run={notificationState.run}
          setRun={() => setNotificationState({ msg: "", run: false })}
          postiton="bottom"
          type="error"
        />
      )}
    </>
  );
};

export default AddEmployee;
