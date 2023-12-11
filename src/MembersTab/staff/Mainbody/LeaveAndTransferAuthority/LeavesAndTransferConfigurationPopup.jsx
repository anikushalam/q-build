import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useUpdateOneStaffLeaveConfig } from "../../../../hooks/member_tab/department-api";
import PopupWrapper from "../FinanceManager/FeesStructure/PopupWrapper";
import style from "../FinanceManager/FeesStructure/FeesStructure.module.css";
import BorderBottom from "../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import JoinFormInput from "../../../../JoiningForm/Student/Form/JoinFormInput";
import QLoader from "../../../../Loader/QLoader";

const LeavesAndTransferConfigurationPopup = ({
  onRefetch,
  leaveConfig,
  sid,
  onClose,
}) => {
  const { t } = useTranslation();
  const [state, setState] = useState({
    c_l: "",
    m_l: "",
    s_l: "",
  });
  const [disabled, setDisabled] = useState(false);
  const [updateOneStaffLeaveConfig] = useUpdateOneStaffLeaveConfig();

  useEffect(() => {
    if (leaveConfig) {
      setState({
        c_l: leaveConfig?.casual_leave ?? "",
        m_l: leaveConfig?.medical_leave ?? "",
        s_l: leaveConfig?.sick_leave ?? "",
      });
    }
  }, [leaveConfig]);
  const onUpdate = (e) => {
    setState((prev) => ({
      ...prev,
      [e.target.name]: +e.target.value,
    }));
  };

  const onSave = () => {
    if (sid) {
      setDisabled((pre) => !pre);
      updateOneStaffLeaveConfig({
        sid: sid,
        leaveConfig: state,
      })
        .then(() => {
          onRefetch();
          setDisabled((pre) => !pre);
          onClose();
        })
        .catch({});
    }
  };
  const onCloseModal = () => {
    if (disabled) {
    } else {
      onClose();
    }
  };
  return (
    <>
      <PopupWrapper onClose={onCloseModal}>
        <div
          className={style.add_category_modal}
          style={{
            width: "35rem",
            minHeight: "10rem",
            height: "fit-content",
          }}
        >
          <section
            className={style.fee_middle_section_container}
            style={{ marginBottom: "1.2rem" }}
          >
            <h6
              style={{
                fontSize: "20px",
                fontWeight: "600",
              }}
            >
              {t("leave_configuration")}
            </h6>

            <BorderBottom
              customStyle={{
                width: "100%",
                marginTop: "0.7rem",
              }}
            />

            <JoinFormInput
              labelText={t("casual_leave")}
              placeholder={t("casual_leave_placeholder")}
              name={"c_l"}
              value={state?.c_l}
              type={"tel"}
              onChange={onUpdate}
            />
            <JoinFormInput
              labelText={t("medical_leave")}
              placeholder={t("medical_leave_placeholder")}
              name={"m_l"}
              value={state?.m_l}
              type={"tel"}
              onChange={onUpdate}
            />
            <JoinFormInput
              labelText={t("sick_leave")}
              placeholder={t("sick_leave_placeholder")}
              name={"s_l"}
              value={state?.s_l}
              type={"tel"}
              onChange={onUpdate}
            />

            <button
              className={style.fee_middle_confirm_button}
              onClick={onSave}
              style={{
                marginTop: "2rem",
              }}
            >
              {t("save")}
            </button>
          </section>
        </div>

        {disabled && <QLoader />}
      </PopupWrapper>
    </>
  );
};

export default LeavesAndTransferConfigurationPopup;
