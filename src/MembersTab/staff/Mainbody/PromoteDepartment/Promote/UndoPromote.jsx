import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import PopupWrapper from "../../FinanceManager/FeesStructure/PopupWrapper";
import style from "../PromoteDepartment.module.css";
import CustomNormalSelectInput from "../../../../../JoiningForm/Student/Form/CustomNormalSelectInput";
import SelectPromoteStudent from "./SelectPromoteStudent";
import { useUndoPromoteStudent } from "../../../../../hooks/member_tab/department-api";
import QLoader from "../../../../../Loader/QLoader";

const UndoPromote = ({ onClose, classId, onRefetchParent }) => {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState("INITIAL_STEP");
  const [promoteData, setPromoteData] = useState({
    flow: "",
    arr: [],
  });
  const [filled, setFilled] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [undoPromoteStudent] = useUndoPromoteStudent();

  const onChooseYes = (val) => {
    setPromoteData((prev) => ({
      ...prev,
      flow: val,
    }));
  };

  const onValidation = (collectPayment) => {
    const errors = {};
    for (let obj in collectPayment) {
      if (obj === "students") {
      } else {
        if (!collectPayment[obj]) {
          errors[obj] = `${obj} is required!`;
        }
      }
    }
    return errors;
  };
  const onShowStudent = () => {
    const validation = onValidation(promoteData);
    let flag = false;
    for (let errField in validation) {
      flag = true;
      break;
    }
    if (flag) {
      setFilled(validation);
    } else {
      if (promoteData.flow === "Full Class") {
        setDisabled((pre) => !pre);
        undoPromoteStudent({
          cid: classId,
          flow: "FULL_CLASS",
          undoPromote: {
            arr: [],
          },
        })
          .then(() => {
            onRefetchParent();
            onClose();
            setDisabled((pre) => !pre);
          })
          .catch({});
      } else if (promoteData.flow === "Particular Student") {
        setActiveStep("SELECT_STUDENT");
      } else {
      }
    }
  };

  // console.info("fdgs", promoteData);
  return (
    <>
      <PopupWrapper
        onClose={
          activeStep === "INITIAL_STEP"
            ? onClose
            : () => setActiveStep("INITIAL_STEP")
        }
      >
        <div className={style.promote_container}>
          {activeStep === "INITIAL_STEP" && (
            <>
              <h6
                style={{
                  textAlign: "center",
                }}
              >
                {t("promote_students")}
              </h6>
              <BorderBottom
                customStyle={{
                  width: "100%",
                }}
              />
              <CustomNormalSelectInput
                selectLabel={t("undo_promote_student")}
                selectedValue={t("select_full_or_particular")}
                options={["Full Class", "Particular Student"]}
                value={promoteData.flow}
                errorShow={filled["flow"]}
                onClick={onChooseYes}
              />

              <button
                className={style.select_application_btn}
                onClick={onShowStudent}
                style={{
                  width: "100%",
                  justifyContent: "center",
                  marginTop: "4rem",
                }}
              >
                <div>
                  {t(
                    promoteData.flow === "Particular Student"
                      ? "next"
                      : "confirm"
                  )}
                </div>
              </button>
            </>
          )}

          {activeStep === "SELECT_STUDENT" && (
            <SelectPromoteStudent
              classId={classId}
              setPromoteData={setPromoteData}
              promoteData={promoteData}
              onClose={onClose}
              onRefetchParent={onRefetchParent}
            />
          )}
          {disabled && <QLoader />}
        </div>
      </PopupWrapper>
    </>
  );
};

export default UndoPromote;
