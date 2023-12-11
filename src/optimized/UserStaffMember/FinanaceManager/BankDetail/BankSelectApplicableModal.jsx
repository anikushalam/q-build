import Modal from "../../../Ui/Modal/Modal";
import style from "./BankDetail.module.css";
import { useTranslation } from "react-i18next";
import UserMemberContentWrapper from "../../../Ui/UserMember/UserMemberContentWrapper";
import { useState } from "react";
import CustomSelectDepartment from "../../../Ui/Select/CustomSelectDepartment";
import { useInstituteAllDepartment } from "../../../Hooks/ApiHooks/FinanceManager/finance-manager-api";

const BankSelectApplicableModal = ({
  fid,
  onToggle,
  libraryId,
  transportId,
  hostelId,
  setApplicablFor,
}) => {
  const { t } = useTranslation();
  const [state, setState] = useState({
    flow: "",
    flow_id: "",
    flow_name: "",
    depart_arr: [],
  });
  const { instituteAllDepartment } = useInstituteAllDepartment({
    fid: fid,
    skip: !fid,
  });

  const onSelectApplicable = (val) => {
    if (val === "Hostel") {
      setState({
        flow: "Hostel",
        flow_id: hostelId,
        flow_name: "Hostel",
        depart_arr: [],
      });
    } else if (val === "Transport") {
      setState({
        flow: "Transport",
        flow_id: transportId,
        flow_name: "Transport",
        depart_arr: [],
      });
    } else if (val === "Library") {
      setState({
        flow: "Library",
        flow_id: libraryId,
        flow_name: "Library",
        depart_arr: [],
      });
    } else if (val === "Internal Department") {
      setState({
        flow: "Department",
        flow_id: "",
        flow_name: "",
        depart_arr: [],
      });
    } else {
    }
  };

  const onSelectInternalDepartment = (val) => {
    setState((prev) => ({
      ...prev,
      flow_id: val?._id,
      flow_name: val?.dName,
      depart_arr: [...new Set([...prev.depart_arr, val?._id])],
    }));
  };

  const onSelect = () => {
    setApplicablFor(state);
    onToggle();
  };
  // console.info("sdfbh", state);
  return (
    <Modal onClose={onToggle}>
      <div className={style.applicable_container}>
        <UserMemberContentWrapper>
          <CustomSelectDepartment
            selectLabel={t("applicable_for")}
            selectedValue={t("applicable_for_placeholder")}
            options={["Internal Department", "Transport", "Library", "Hostel"]}
            onClick={onSelectApplicable}
            isFull
          />
          {state.flow === "Department" && (
            <CustomSelectDepartment
              selectLabel={t("select_internal_department")}
              selectedValue={t("select_internal_department_placeholder")}
              options={instituteAllDepartment ?? []}
              onClick={onSelectInternalDepartment}
              isFull
              viewAs="NORMAL_FILTER"
              defalutValue={
                state.depart_arr?.length > 1
                  ? `${state.depart_arr?.length} department selected`
                  : state.flow_name
              }
            />
          )}
          <button
            className={style.applicable_btn}
            onClick={onSelect}
            style={{
              width: "100%",
              justifyContent: "center",
            }}
          >
            <div>{t("select")}</div>
          </button>
        </UserMemberContentWrapper>
      </div>
    </Modal>
  );
};

export default BankSelectApplicableModal;
