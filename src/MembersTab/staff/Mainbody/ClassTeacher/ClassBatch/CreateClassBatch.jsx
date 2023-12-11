import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import PopupWrapper from "../../FinanceManager/FeesStructure/PopupWrapper";
import style from "../../Hostel/HostelFeeStructure/HostelFeeStructure.module.css";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import StringLength from "../../../../../Custom/Validation/StringLength";
import QLoader from "../../../../../Loader/QLoader";
import JoinFormInput from "../../../../../JoiningForm/Student/Form/JoinFormInput";
import { useCreateClassBatch } from "../../../../../hooks/member_tab/class-api";

const CreateClassBatch = ({
  onClose,
  onRefetch,
  openAs,
  batchMenu,
  onEdit,
  cid,
}) => {
  const { t } = useTranslation();
  const [filled, setFilled] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [state, setState] = useState({
    batchName: openAs === "EDIT" ? batchMenu?.batchName : "",
  });

  const [createClassBatch] = useCreateClassBatch();
  useEffect(() => {
    if (openAs === "EDIT") {
      setState((prev) => ({ ...prev, batchName: batchMenu?.batchName }));
    }
  }, [openAs]);

  const onAddHostelUnit = () => {
    if (!state.batchName) {
      setFilled(true);
    } else {
      if (openAs === "EDIT") {
        onEdit(state.batchName);
      } else {
        if (cid) {
          setDisabled((pre) => !pre);
          createClassBatch({
            cid: cid,
            classBatch: state,
          })
            .then(() => {
              onRefetch();
              onClose();
              setDisabled((pre) => !pre);
            })
            .catch({});
        }
      }
    }
  };

  return (
    <PopupWrapper onClose={onClose}>
      <div className={style.add_category_modal}>
        <div className={style.add_category_modal_title}>
          <h6>{openAs === "EDIT" ? t("edit_batch") : t("add_new_batch")}</h6>
          <img src="/images/close-post-icon.svg" onClick={onClose} alt="" />
        </div>
        <BorderBottom
          customStyle={{
            width: "100%",
            marginTop: "0.6rem",
            marginBottom: "0.6rem",
          }}
        />
        <JoinFormInput
          labelText={t("batch-name-place")}
          placeholder="e.g. 2022-23"
          name={"batchName"}
          value={state?.batchName}
          type={"text"}
          onChange={(e) => {
            if (e.target.value?.length <= 30) {
              setState((prev) => ({
                ...prev,
                batchName: e.target.value,
              }));
            }
          }}
          errorShow={filled}
        />
        <StringLength maxLength={30} valueLength={state.batchName} />

        <button
          className={style.set_fees_structure_btn}
          title="Create Batch"
          onClick={onAddHostelUnit}
          style={{ justifyContent: "center" }}
        >
          {openAs === "EDIT" ? t("update") : t("create")}
        </button>
        {disabled && <QLoader />}
      </div>
    </PopupWrapper>
  );
};

export default CreateClassBatch;
