import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import AssignStaffModal from "../../../../../Department/Institute/AssignStaff/AssignStaffModal";
import { useAddHostelUnit } from "../../../../../hooks/member_tab/hostel-api";
import JoinFormInput from "../../../../../JoiningForm/Student/Form/JoinFormInput";
import QLoader from "../../../../../Loader/QLoader";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import PopupWrapper from "../../FinanceManager/FeesStructure/PopupWrapper";
import style from "../HostelFeeStructure/HostelFeeStructure.module.css";

const AddHostelUnit = ({
  onClose,
  openAs,
  openUnitMenu,
  hid,
  onEdit,
  instituteId,
  onRefetch,
}) => {
  const { t } = useTranslation();
  const [addUnit, setAddUnit] = useState({
    hostel_unit_name: openAs === "EDIT" ? openUnitMenu?.hostel_unit_name : "",
    sid: openAs === "EDIT" ? openUnitMenu?.sid : "",
  });
  const [assignHead, setAssignHead] = useState(false);
  const [assignHeadStaff, setAssignHeadStaff] = useState("");
  const [filled, setFilled] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [addHostelUnit] = useAddHostelUnit();

  useEffect(() => {
    if (openAs === "EDIT") {
      setAddUnit({
        hostel_unit_name: openUnitMenu?.hostel_unit_name,
        sid: openUnitMenu?.sid,
      });
    }
  }, [openAs]);

  const classheadSelect = (assing) => {
    setAssignHeadStaff(assing);
    setAddUnit((prev) => ({
      ...prev,
      sid: assing?._id,
    }));
    setAssignHead((pre) => !pre);
  };

  const onValidation = (data) => {
    const errors = {};
    for (let obj in data) {
      if (!data[obj]) errors[obj] = `${obj} is required!`;
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
      if (openAs === "EDIT") {
        onEdit(addUnit);
      } else {
        setDisabled((pre) => !pre);
        addHostelUnit({
          hid: hid,
          addHostel: addUnit,
        })
          .then(() => {
            onRefetch();
            onClose();
            setDisabled((pre) => !pre);
          })
          .catch({});
      }
    }
  };

  return (
    <PopupWrapper onClose={onClose}>
      <div className={style.add_category_modal}>
        <div className={style.add_category_modal_title}>
          <h6>{openAs === "EDIT" ? t("edit_fee_head") : t("add_new_unit")}</h6>
          <img src="/images/close-post-icon.svg" onClick={onClose} alt="" />
        </div>
        <JoinFormInput
          labelText={t("hoste_unit_name")}
          placeholder={t("hoste_unit_name_placeholder")}
          name={"hostel_unit_name"}
          value={addUnit?.hostel_unit_name}
          type={"text"}
          onChange={(e) =>
            setAddUnit((prev) => ({
              ...prev,
              hostel_unit_name: e.target.value,
            }))
          }
          errorShow={filled["hostel_unit_name"]}
        />
        <div
          className={style.leading_person_container}
          onClick={() => setAssignHead(true)}
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
                : t("secect_hostel_unit_head")}
            </h6>
            <p>
              {t("search_joined_list")}{" "}
              {filled["sid"] && (
                <span style={{ color: "red", marginLeft: "15px" }}>
                  * {t("form_require_label")}
                </span>
              )}
            </p>
          </div>
        </div>
        <button
          className={style.set_fees_structure_btn}
          title="Add Hostel Unit"
          onClick={onAddHostelUnit}
          style={{ justifyContent: "center" }}
        >
          {openAs === "EDIT" ? t("update") : t("create")}
        </button>
        {disabled && <QLoader />}
      </div>
      {assignHead && (
        <AssignStaffModal
          assignHead={assignHead}
          headSelect={classheadSelect}
          title={t("secect_hostel_unit_head")}
          onClose={() => setAssignHead((pre) => !pre)}
          viewAs="ADMISSION_ADMIN"
          instituteId={instituteId}
          //   disabledId={hostelManagerName?._id}
        />
      )}
    </PopupWrapper>
  );
};

export default AddHostelUnit;
