import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  useDeleteFeesByClass,
  useUpdateFeesByClass,
} from "../../../../../../hooks/member_tab/class-api";
import JoinFormCalender from "../../../../../../JoiningForm/Student/Form/JoinFormCalender";
import JoinFormInput from "../../../../../../JoiningForm/Student/Form/JoinFormInput";
import QLoader from "../../../../../../Loader/QLoader";
import Overlay from "../../../../../../Search/Overlay";
import SearchModalBackdrop from "../../../../../../Search/SearchModalBackdrop";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import style from "../../../ClassTeacher/Profile/EditConfirm.module.css";

const FeesMenu = ({ onClose, did, onRefetch, openFeesMenu }) => {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const [edit, setEdit] = useState(false);
  const [deleteFeesByClass] = useDeleteFeesByClass();
  const [updateFeesByClass] = useUpdateFeesByClass();
  const [feesData, setFeesData] = useState({
    feeName: openFeesMenu?.feeName ?? "",
    feeDate: openFeesMenu?.feeDate ?? "",
  });
  const [filled, setFilled] = useState("");

  //   const [notificationState, setNotificationState] = useState({
  //     msg: "",
  //     run: false,
  //   });
  const onDelete = () => {
    setDisabled((pre) => !pre);
    deleteFeesByClass({
      did: did,
      fid: openFeesMenu?._id,
    })
      .then(() => {
        onRefetch();
        onClose();
        setDisabled((pre) => !pre);
      })
      .catch({});
  };
  const onDateFunctionFrom = (val) => {
    let splitDate = val?.split("/");
    let modify = `${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`;
    setFeesData((prev) => ({
      ...prev,
      feeDate: modify,
    }));
  };

  const onChange = (e) => {
    setFeesData((prev) => ({
      ...prev,
      feeName: e.target.value,
    }));
  };
  const onValidation = (fees) => {
    const errors = {};
    for (let obj in fees) {
      if (!fees[obj]) errors[obj] = ` ${obj} is required!`;
    }
    return errors;
  };

  const onEdit = () => {
    const validation = onValidation(feesData);
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
      setEdit(false);
      updateFeesByClass({
        fid: openFeesMenu?._id,
        updateFees: feesData,
      })
        .then(() => {
          onRefetch();
          setDisabled((pre) => !pre);
          onClose();
        })
        .catch({});
    }
  };

  //   console.info(openFeesMenu);
  return (
    <>
      {!edit ? (
        <>
          <SearchModalBackdrop onClose={onClose} />
          <Overlay
            customStyle={{
              zIndex: "1200",
            }}
          >
            <div
              className={style.edit_modal_container}
              style={{ width: "200px" }}
            >
              <h6 className={style.edit} onClick={() => setEdit((pre) => !pre)}>
                Edit
              </h6>
              <h6 className={style.remove} onClick={onDelete}>
                Delete
              </h6>
            </div>
            {disabled && <QLoader />}
          </Overlay>
        </>
      ) : (
        <>
          <SearchModalBackdrop onClose={() => setEdit(false)} />
          <Overlay
            customStyle={{
              zIndex: "1200",
            }}
          >
            <div
              className={style.edit_modal_container}
              style={{ width: "30rem", minHeight: "10rem", height: "auto" }}
            >
              <h6 className={style.edit} onClick={() => setEdit((pre) => !pre)}>
                {t("update_fees")}
              </h6>
              <BorderBottom
                customStyle={{
                  width: "100%",
                  marginTop: "0.5rem",
                }}
              />
              <JoinFormInput
                labelText={t("fees_name_edit")}
                placeholder={t("fees_name_placeholder")}
                name={"feeName"}
                value={feesData.feeName}
                type={"text"}
                errorShow={filled["feeName"]}
                onChange={onChange}
                customStyleContainer={{
                  width: "100%",
                }}
              />
              <JoinFormCalender
                labelText={t("select_fees_date")}
                placeholder={t("select_fees_date_placeholder")}
                name={"feeDate"}
                value={feesData.feeDate}
                onDateFunction={onDateFunctionFrom}
                errorShow={filled["feeDate"]}
                customStyleContainer={{ position: "relative", width: "100%" }}
                datePickerPosition={{
                  top: "-1rem",
                }}
              />
              <button
                className={style.xlsx_update_btn}
                title="Update"
                onClick={onEdit}
                style={{ justifyContent: "center", marginTop: "1rem" }}
              >
                {t("update")}
              </button>
            </div>
          </Overlay>
        </>
      )}
    </>
  );
};

export default FeesMenu;
