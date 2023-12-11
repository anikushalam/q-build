import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import AssignStaffModal from "../../../../../Department/Institute/AssignStaff/AssignStaffModal";
import JoinFormInput from "../../../../../JoiningForm/Student/Form/JoinFormInput";
import QLoader from "../../../../../Loader/QLoader";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import PopupWrapper from "../../FinanceManager/FeesStructure/PopupWrapper";
import style from "../../Hostel/HostelFeeStructure/HostelFeeStructure.module.css";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import CustomNormalSelectInput from "../../../../../JoiningForm/Student/Form/CustomNormalSelectInput";
import { useAddVehicle } from "../../../../../hooks/member_tab/transport-api";
import SearchUniversalUser from "../../FinanceManager/SearchUniversalUser/SearchUniversalUser";

const AddVehicle = ({ onClose, tid, instituteId, onRefetch }) => {
  const { t } = useTranslation();
  const [addUnit, setAddUnit] = useState({
    dsid: "",
    csid: "",
    // duid: "",
    // cuid: "",
    vehicle_number: "",
    vehicle_type: "",
    vehicle_tracking_id: "",
    vehicle_name: "",
  });
  const [assignHead, setAssignHead] = useState(false);
  const [assignHeadStaff, setAssignHeadStaff] = useState("");
  const [assignHead1, setAssignHead1] = useState(false);
  const [assignHeadStaff1, setAssignHeadStaff1] = useState("");
  const [filled, setFilled] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [addVehicle] = useAddVehicle();

  const classheadSelect = (assing) => {
    setAssignHeadStaff(assing);
    setAddUnit((prev) => ({
      ...prev,
      dsid: assing?._id,
    }));
    setAssignHead((pre) => !pre);
  };

  const classheadSelect1 = (assing) => {
    setAssignHeadStaff1(assing);
    setAddUnit((prev) => ({
      ...prev,
      csid: assing?._id,
    }));
    setAssignHead1((pre) => !pre);
  };
  const onValidation = (data) => {
    const errors = {};
    for (let obj in data) {
      if (obj === "csid" || obj === "vehicle_tracking_id") {
      } else {
        if (!data[obj]) errors[obj] = `${obj} is required!`;
      }
    }
    return errors;
  };

  const onAddHostelUnit = () => {
    const validation = onValidation(addUnit);
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
      addVehicle({
        tid: tid,
        createVehicle: {
          dsid: addUnit.vehicle_type === "Own" ? addUnit.dsid : "",
          csid: addUnit.vehicle_type === "Own" ? addUnit.csid : "",
          duid: addUnit.vehicle_type === "Outsider" ? assignHeadStaff?._id : "",
          cuid:
            addUnit.vehicle_type === "Outsider" ? assignHeadStaff1?._id : "",
          vehicle_number: addUnit.vehicle_number ?? "",
          vehicle_type: addUnit.vehicle_type ?? "",
          vehicle_tracking_id: addUnit.vehicle_tracking_id ?? "",
          vehicle_name: addUnit.vehicle_name ?? "",
        },
      })
        .then(() => {
          onRefetch();
          onClose();
          setDisabled((pre) => !pre);
        })
        .catch({});
    }
  };

  const onVehilcetypeChange = (val) => {
    if (val === "Own") {
      setAddUnit((prev) => ({
        ...prev,
        vehicle_type: val,
        dsid: "",
        csid: "",
      }));
    } else {
      setAddUnit((prev) => ({
        ...prev,
        vehicle_type: val,
        dsid: "",
        csid: "",
      }));
    }
  };
  return (
    <PopupWrapper onClose={onClose}>
      <div
        className={style.add_category_modal}
        style={{
          width: "35rem",
        }}
      >
        <div className={style.add_category_modal_title}>
          <h6>{t("add_vehicle")}</h6>
          <img src="/images/close-post-icon.svg" onClick={onClose} alt="" />
        </div>
        <BorderBottom
          customStyle={{
            marginTop: "0.5rem",
            marginBottom: "0.5rem",
            width: "100%",
          }}
        />
        <CustomNormalSelectInput
          selectLabel={t("select_vehicle_type")}
          selectedValue={t("select_vehicle_type_placeholder")}
          options={["Own", "Outsider"]}
          value={addUnit.vehicle_type}
          onClick={onVehilcetypeChange}
        />
        <JoinFormInput
          labelText={t("vehicle_name")}
          placeholder={t("vehicle_name_placeholder")}
          name={"vehicle_name"}
          value={addUnit?.vehicle_name}
          type={"text"}
          onChange={(e) =>
            setAddUnit((prev) => ({
              ...prev,
              vehicle_name: e.target.value,
            }))
          }
          errorShow={filled["vehicle_name"]}
        />
        <JoinFormInput
          labelText={t("vehicle_number")}
          placeholder={t("vehicle_number_placeholder")}
          name={"vehicle_number"}
          value={addUnit?.vehicle_number}
          type={"text"}
          onChange={(e) =>
            setAddUnit((prev) => ({
              ...prev,
              vehicle_number: e.target.value,
            }))
          }
          errorShow={filled["vehicle_number"]}
        />
        <JoinFormInput
          labelText={t("tracking_id")}
          placeholder={t("tracking_id_placeholder")}
          name={"vehicle_tracking_id"}
          value={addUnit?.vehicle_tracking_id}
          type={"text"}
          onChange={(e) =>
            setAddUnit((prev) => ({
              ...prev,
              vehicle_tracking_id: e.target.value,
            }))
          }
        />
        <div
          className={style.leading_person_container}
          onClick={() => setAssignHead(true)}
          style={{
            marginTop: "1.3rem",
          }}
        >
          <img
            src={
              assignHeadStaff?.staffProfilePhoto
                ? `${imageShowUrl}/${assignHeadStaff.staffProfilePhoto}`
                : "/images/user-icon.svg"
            }
            alt="avatar"
          />
          <div className={style.leading_person_text}>
            <h6>
              {assignHeadStaff
                ? `${assignHeadStaff?.staffFirstName ?? ""} 
                  ${assignHeadStaff?.staffMiddleName ?? ""}
                  ${assignHeadStaff?.staffLastName ?? ""} `
                : t("select_vehicle_driver")}
            </h6>
            <p>
              {t("search_joined_list")}{" "}
              {filled["dsid"] && (
                <span style={{ color: "red", marginLeft: "15px" }}>
                  * {t("form_require_label")}
                </span>
              )}
            </p>
          </div>
        </div>
        <div
          className={style.leading_person_container}
          onClick={() => setAssignHead1(true)}
          style={{
            marginTop: "1.3rem",
          }}
        >
          <img
            src={
              assignHeadStaff1?.staffProfilePhoto
                ? `${imageShowUrl}/${assignHeadStaff1.staffProfilePhoto}`
                : "/images/user-icon.svg"
            }
            alt="avatar"
          />
          <div className={style.leading_person_text}>
            <h6>
              {assignHeadStaff1
                ? `${assignHeadStaff1?.staffFirstName ?? ""} 
                  ${assignHeadStaff1?.staffMiddleName ?? ""}
                  ${assignHeadStaff1?.staffLastName ?? ""} `
                : t("select_vehicle_conductor")}
            </h6>
            <p>{t("search_joined_list")} </p>
          </div>
        </div>
        <button
          className={style.set_fees_structure_btn}
          title="Add Vehicle"
          onClick={onAddHostelUnit}
          style={{ justifyContent: "center" }}
        >
          {t("add_vehicle")}
        </button>
        {disabled && <QLoader />}
      </div>
      {assignHead && addUnit.vehicle_type === "Own" && (
        <AssignStaffModal
          assignHead={assignHead}
          headSelect={classheadSelect}
          title={t("select_vehicle_driver")}
          onClose={() => setAssignHead((pre) => !pre)}
          viewAs="ADMISSION_ADMIN"
          instituteId={instituteId}
          disabledId={addUnit.csid ?? addUnit.dsid ?? ""}
        />
      )}
      {assignHead && addUnit.vehicle_type === "Outsider" && (
        <SearchUniversalUser
          onClose={setAssignHead((pre) => !pre)}
          title={t("select_vehicle_driver")}
          assignHead={assignHead}
          disabledId={addUnit.csid ?? addUnit.dsid ?? ""}
          headSelect={classheadSelect}
        />
      )}
      {assignHead1 && addUnit.vehicle_type === "Own" && (
        <AssignStaffModal
          assignHead={assignHead1}
          headSelect={classheadSelect1}
          title={t("select_vehicle_conductor")}
          onClose={() => setAssignHead1((pre) => !pre)}
          viewAs="ADMISSION_ADMIN"
          instituteId={instituteId}
          disabledId={addUnit.csid ?? addUnit.dsid ?? ""}
        />
      )}
      {assignHead1 && addUnit.vehicle_type === "Outsider" && (
        <SearchUniversalUser
          onClose={() => setAssignHead1((pre) => !pre)}
          title={t("select_vehicle_conductor")}
          disabledId={addUnit.csid ?? addUnit.dsid ?? ""}
          assignHead={assignHead1}
          headSelect={classheadSelect1}
        />
      )}
    </PopupWrapper>
  );
};

export default AddVehicle;
