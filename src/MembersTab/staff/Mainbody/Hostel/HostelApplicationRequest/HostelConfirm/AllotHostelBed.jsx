import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  useAllotBedByHostel,
  useGetRoomListHostelUnit,
  useRenewalAllotBedByHostel,
} from "../../../../../../hooks/member_tab/hostel-api";
import CustomSelectDepartment from "../../../../../../JoiningForm/Student/Form/CustomSelectDepartment";
import QLoader from "../../../../../../Loader/QLoader";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import PopupWrapper from "../../../FinanceManager/FeesStructure/PopupWrapper";
import style from "../../HostelFeeStructure/HostelFeeStructure.module.css";
import CustomNormalSelectInput from "../../../../../../JoiningForm/Student/Form/CustomNormalSelectInput";

const AllotHostelBed = ({
  onClose,
  currentApplicant,
  applicationId,
  onRefetchWhenAction,
  unitId,
  viewAs,
  instituteId,
}) => {
  const { t } = useTranslation();
  const [filled, setFilled] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [sameAllot, setSameAllot] = useState(
    viewAs === "RENEWAL" ? true : false
  );
  const [yes, setYes] = useState("");
  const [allotedBed, setAllotedBed] = useState({
    hrid: "",
  });
  const [allotBedByHostel] = useAllotBedByHostel();
  const [renewalAllotBedByHostel] = useRenewalAllotBedByHostel();

  const { getRoomListHostelUnit, getRoomListHostelUnitRefetch } =
    useGetRoomListHostelUnit({
      data: {
        huid: unitId,
        page: 1,
        limit: 1000,
        search: "",
      },
      skip: !unitId,
    });
  useEffect(() => {
    if (unitId) getRoomListHostelUnitRefetch();
  }, [unitId, getRoomListHostelUnitRefetch]);
  // const onSelectHostelUnit = (val) => {
  //   setAllotedBed((prev) => ({
  //     ...prev,
  //     huid: val,
  //   }));
  // };
  const onSelectHostelUnitRoom = (val) => {
    setAllotedBed((prev) => ({
      ...prev,
      hrid: val,
    }));
  };
  const onValidation = (data) => {
    const errors = {};
    for (let obj in data) {
      if (!data[obj]) errors[obj] = `${obj} is required!`;
    }
    return errors;
  };

  const onRenewalValidation = (data, other) => {
    const errors = {};

    if (yes === "No") {
      for (let obj in data) {
        if (!data[obj]) errors[obj] = `${obj} is required!`;
      }
    }
    if (!other) errors["same_allot"] = `same_allot is required!`;
    return errors;
  };
  const onAllotBed = () => {
    if (instituteId) {
      // if (currentApplicant?.student?.institute) {

      const validation =
        viewAs === "RENEWAL"
          ? onRenewalValidation(allotedBed, yes)
          : onValidation(allotedBed);
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
        if (viewAs === "RENEWAL") {
          renewalAllotBedByHostel({
            aid: applicationId,
            huid: unitId,
            allotBed: {
              dataList: [currentApplicant?.student?._id],
              hrid: allotedBed.hrid,
              bed_mode: yes === "Yes" ? "Same" : "Different",
            },
          })
            .then(() => {
              onRefetchWhenAction();
              onClose();
              setDisabled((pre) => !pre);
            })
            .catch({});
        } else {
          allotBedByHostel({
            aid: applicationId,
            huid: unitId,
            ...allotedBed,
            // id: currentApplicant?.student?.institute,
            id: instituteId,
            allot_bed: {
              dataList: [currentApplicant?.student?._id],
            },
          })
            .then(() => {
              onRefetchWhenAction();
              onClose();
              setDisabled((pre) => !pre);
            })
            .catch({});
        }
      }
    }
  };

  const onChooseYes = (val) => {
    if (val === "Yes") {
      setSameAllot(true);
    } else {
      setSameAllot(false);
    }
    setYes(val);
  };
  // console.info("sfndjdj", unitId);
  return (
    <PopupWrapper onClose={onClose}>
      <div
        className={style.add_category_modal}
        style={{
          width: "30rem",
          maxHeight: "35rem",
        }}
      >
        <div className={style.add_category_modal_title}>
          <h6>{t("allot_bed_to_hostelite")}</h6>
          <img src="/images/close-post-icon.svg" onClick={onClose} alt="" />
        </div>
        <BorderBottom
          customStyle={{
            width: "100%",
            marginTop: "0.5rem",
          }}
        />

        {viewAs === "RENEWAL" && (
          <CustomNormalSelectInput
            selectLabel={t("allot_same_bed_as_previous")}
            selectedValue={t("select_yes_or_no")}
            options={["Yes", "No"]}
            value={yes}
            errorShow={filled["same_allot"]}
            onClick={onChooseYes}
          />
        )}
        {!sameAllot && (
          <CustomSelectDepartment
            selectLabel={t("select_unit_room")}
            onClick={onSelectHostelUnitRoom}
            selectedValue={t("select_unit_room_placeholder")}
            options={
              getRoomListHostelUnit?.all_rooms?.filter((val) =>
                val?.vacant_count > 0 ? val : null
              ) ?? []
            }
            errorShow={filled["hrid"]}
          />
        )}

        <button
          className={style.set_fees_structure_btn}
          title="Allot Hostel"
          onClick={onAllotBed}
          style={{ justifyContent: "center" }}
        >
          {t("allot_bed")}
        </button>
        {disabled && <QLoader />}
      </div>
    </PopupWrapper>
  );
};

export default AllotHostelBed;
