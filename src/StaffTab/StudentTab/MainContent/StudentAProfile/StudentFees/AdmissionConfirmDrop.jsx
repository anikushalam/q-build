import React, { useState } from "react";
import PopupWrapper from "../../../../../MembersTab/staff/Mainbody/FinanceManager/FeesStructure/PopupWrapper";
import BorderBottom from "../../../../components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import JoinFormInput from "../../../../../JoiningForm/Student/Form/JoinFormInput";
import { useDropAdmissionFeesCardByAdmission } from "../../../../../hooks/member_tab/admission-api";
import QLoader from "../../../../../Loader/QLoader";
import style from "../../../../../MembersTab/staff/Mainbody/FinanceManager/FeesStructure/FeesStructure.module.css";
import { useTranslation } from "react-i18next";
const AdmissionConfirmDrop = ({
  onClose,
  rid,
  sid,
  onRefetch,
  onParentClose,
  onFeesRefetch,
}) => {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const [filled, setFilled] = useState(false);
  const [verify, setVerify] = useState("");
  const [dropAdmissionFeesCardByAdmission] =
    useDropAdmissionFeesCardByAdmission();
  const onAction = () => {
    if (verify === "Confirm") {
      if (rid && sid) {
        setDisabled((pre) => !pre);
        dropAdmissionFeesCardByAdmission({
          rid: rid,
          sid: sid,
        })
          .then(() => {
            onFeesRefetch();
            onRefetch();
            onParentClose();
            setDisabled((pre) => !pre);
          })
          .catch({});
      }
    } else {
      setFilled(true);
    }
  };
  return (
    <PopupWrapper onClose={onClose}>
      <div
        className={style.add_category_modal}
        style={{
          width: "30rem",
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
            {t("confirm_drop_admission_fees")}
          </h6>

          <BorderBottom
            customStyle={{
              width: "100%",
              marginTop: "0.7rem",
            }}
          />

          <JoinFormInput
            labelText={t("type_confirm_to_continue")}
            placeholder={t("type_confirm_to_continue")}
            name={"verification"}
            value={verify}
            type={"text"}
            onChange={(e) => setVerify(e.target.value)}
            errorShow={filled}
          />
          <button
            onClick={onAction}
            className={style.fee_middle_confirm_button}
            style={{
              marginTop: "4rem",
            }}
          >
            {t("confirm")}
          </button>
        </section>

        {disabled && <QLoader />}
      </div>
    </PopupWrapper>
  );
};

export default AdmissionConfirmDrop;
