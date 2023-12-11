import React, { useState } from "react";
import PopupWrapper from "../../../staff/Mainbody/FinanceManager/FeesStructure/PopupWrapper";
import style from "../../../staff/Mainbody/FinanceManager/FeesStructure/FeesStructure.module.css";
import BorderBottom from "../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import { useTranslation } from "react-i18next";
import QLoader from "../../../../Loader/QLoader";
import TileWrapper from "../../../../Department/Institute/Components/exportData/TileWrapper";
import JoinFormInput from "../../../../JoiningForm/Student/Form/JoinFormInput";
import { useRaiseIssueCertificateStudent } from "../../../../hooks/member_tab/student-api";
const typeList = [
  {
    name: "bonafide",
    key: "Bonafide",
  },
  {
    name: "leaving",
    key: "Leaving",
  },
  {
    name: "transfer",
    key: "Transfer",
  },
  // {
  //   name: "migration",
  //   key: "Migration",
  // },
];
const originalList = [
  {
    name: "original_copy",
    key: true,
  },
  {
    name: "dublicate_copy",
    key: false,
  },
];
const RaiseStudentCertificateRequest = ({
  studentId,
  instituteId,
  onRefetch,
  onClose,
}) => {
  const { t } = useTranslation();
  const [filled, setFilled] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [state, setState] = useState({
    query_content: "",
    certificate_type: "Bonafide",
    is_original: true,
  });
  const [raiseIssueCertificateStudent] = useRaiseIssueCertificateStudent();
  const onInputChange = (e) => {
    if (e.target.value?.length <= 75) {
      setState((prev) => ({
        ...prev,
        query_content: e.target.value,
      }));
    }
  };
  const onCloseModal = () => {
    if (disabled) {
    } else {
      onClose();
    }
  };
  const onSelectType = (val) => {
    setState((prev) => ({
      ...prev,
      certificate_type: val,
    }));
  };
  const onSelectOriginal = (val) => {
    setState((prev) => ({
      ...prev,
      is_original: val,
    }));
  };

  const onConfirm = () => {
    if (!state.query_content) {
      setFilled({
        query_content: "* required",
      });
    } else {
      if (studentId && instituteId) {
        setDisabled((pre) => !pre);
        raiseIssueCertificateStudent({
          id: instituteId,
          sid: studentId,
          issueCertificate: state,
        })
          .then(() => {
            onRefetch();
            setDisabled((pre) => !pre);
            onClose();
          })
          .catch({});
      }
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
              {t("certificate_request")}
            </h6>

            <BorderBottom
              customStyle={{
                width: "100%",
                marginTop: "0.7rem",
              }}
            />

            <TileWrapper
              labelText="certificate_type"
              tileList={typeList}
              activeTile={state.certificate_type}
              onTile={onSelectType}
            />
            <JoinFormInput
              labelText={t("enter_reason")}
              placeholder={t("enter_reason")}
              name={"query_content"}
              value={state.query_content}
              type={"text"}
              onChange={onInputChange}
              errorShow={filled["query_content"]}
            />
            {state.certificate_type === "Leaving" ||
            state.certificate_type === "Transfer" ? (
              <TileWrapper
                labelText="certificate_copy"
                tileList={originalList}
                activeTile={state.is_original}
                onTile={onSelectOriginal}
              />
            ) : null}

            <button
              onClick={onConfirm}
              className={style.fee_middle_confirm_button}
              style={{
                marginTop: "2rem",
              }}
            >
              {t("confirm")}
            </button>
          </section>
        </div>
        {disabled && <QLoader />}
      </PopupWrapper>
    </>
  );
};

export default RaiseStudentCertificateRequest;
