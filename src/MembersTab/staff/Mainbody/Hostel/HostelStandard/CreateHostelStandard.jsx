import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import PopupWrapper from "../../FinanceManager/FeesStructure/PopupWrapper";
import style from "../HostelFeeStructure/HostelFeeStructure.module.css";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import StringLength from "../../../../../Custom/Validation/StringLength";
import QLoader from "../../../../../Loader/QLoader";
import { useCreateHostelStandard } from "../../../../../hooks/member_tab/hostel-api";
import JoinFormInput from "../../../../../JoiningForm/Student/Form/JoinFormInput";

const CreateHostelStandard = ({ onClose, onRefetch, hostelId }) => {
  const { t } = useTranslation();
  const [filled, setFilled] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [state, setState] = useState({
    className: "",
  });

  const [createHostelStandard] = useCreateHostelStandard();

  const onAddHostelUnit = () => {
    if (!state.className) {
      setFilled(true);
    } else {
      if (hostelId) {
        setDisabled((pre) => !pre);
        createHostelStandard({
          hid: hostelId,
          hostelStandard: state,
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
          <h6>{t("create_new_master")}</h6>
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
          labelText={t("create_master_header_2")}
          placeholder={t("e.g. 6th Class/ FYJC")}
          name={"className"}
          value={state?.className}
          type={"text"}
          onChange={(e) => {
            if (e.target.value?.length <= 40) {
              setState((prev) => ({
                ...prev,
                className: e.target.value,
              }));
            }
          }}
          errorShow={filled}
        />
        <StringLength maxLength={40} valueLength={state.className} />

        <button
          className={style.set_fees_structure_btn}
          title="Create Standard"
          onClick={onAddHostelUnit}
          style={{ justifyContent: "center" }}
        >
          {t("create")}
        </button>
        {disabled && <QLoader />}
      </div>
    </PopupWrapper>
  );
};

export default CreateHostelStandard;
