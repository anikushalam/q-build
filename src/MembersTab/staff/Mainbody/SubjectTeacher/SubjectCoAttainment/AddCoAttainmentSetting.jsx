import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import PopupWrapper from "../../FinanceManager/FeesStructure/PopupWrapper";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import JoinFormInput from "../../../../../JoiningForm/Student/Form/JoinFormInput";
import QLoader from "../../../../../Loader/QLoader";
import { useAddCopoAttainment } from "../../../../../hooks/member_tab/subject-api";
import style from "../../Hostel/HostelFeeStructure/HostelFeeStructure.module.css";
import TileWrapper from "../../../../../Department/Institute/Components/exportData/TileWrapper";
import JoinFormTextArea from "../../../../../JoiningForm/Student/Form/JoinFormTextArea";

const attainmentList = [
  {
    name: "co",
    key: "CO",
  },
  {
    name: "po",
    key: "PO",
  },
];
const AddCoAttainmentSetting = ({
  onClose,
  openAs,
  smid,
  coMenu,
  onEdit,
  onRefetch,
  count,
  poCount,
}) => {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const [filled, setFilled] = useState("");
  const [state, setState] = useState({
    attainment_name: `CO${count}`,
    attainment_type: "CO",
    attainment_code: "",
    attainment_target: "",
    attainment_description: "",
  });
  const [addCopoAttainment] = useAddCopoAttainment();
  useEffect(() => {
    if (openAs === "EDIT") {
      setState({
        attainment_name: coMenu?.attainment_name ?? "",
        attainment_type: coMenu?.attainment_type ?? "CO",
        attainment_code: coMenu?.attainment_code ?? "",
        attainment_target: coMenu?.attainment_target ?? "",
        attainment_description: coMenu?.attainment_description ?? "",
      });
    }
  }, [openAs, coMenu]);
  useEffect(() => {
    if (count) {
      setState((prev) => ({
        ...prev,
        attainment_name: `CO${count}`,
      }));
    }
  }, [count]);

  const onAddAttainment = () => {
    if (!state.attainment_name) {
      setFilled({ attainment_name: "* required" });
    } else {
      if (openAs === "EDIT") {
        onEdit(state);
      } else {
        if (smid) {
          setDisabled((pre) => !pre);
          addCopoAttainment({
            smid: smid,
            addCopo: state,
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
  const onSelectAttainment = (val) => {
    setState((prev) => ({
      ...prev,
      attainment_name: val === "CO" ? `CO${count}` : `PO${poCount}`,
      attainment_type: val,
      attainment_code: "",
      attainment_target: "",
      attainment_description: "",
    }));
  };
  return (
    <PopupWrapper onClose={onClose}>
      <div
        className={style.add_category_modal}
        style={{
          width: "35rem",
          maxHeight: "35rem",
        }}
      >
        <div className={style.add_category_modal_title}>
          <h6>{openAs === "EDIT" ? t("edit_copo") : t("add_new_copo")}</h6>
          <img src="/images/close-post-icon.svg" onClick={onClose} alt="" />
        </div>
        <BorderBottom
          customStyle={{
            width: "100%",
            marginTop: "0.6rem",
            marginBottom: "0.6rem",
          }}
        />
        {openAs === "EDIT" ? null : (
          <TileWrapper
            labelText="attainment_type"
            tileList={attainmentList}
            activeTile={state.attainment_type}
            onTile={onSelectAttainment}
          />
        )}

        {state.attainment_type === "CO" ? (
          <>
            <JoinFormInput
              labelText={t("co_name")}
              placeholder={t("co_name_placeholder")}
              name={"attainment_name"}
              value={state?.attainment_name}
              type={"text"}
              onChange={(e) => {
                setState((prev) => ({
                  ...prev,
                  attainment_name: e.target.value,
                }));
              }}
              errorShow={filled["attainment_name"]}
            />
            <JoinFormInput
              labelText={t("co_target")}
              placeholder={t("co_target_placeholder")}
              name={"attainment_target"}
              value={state?.attainment_target}
              type={"text"}
              onChange={(e) => {
                setState((prev) => ({
                  ...prev,
                  attainment_target: +e.target.value,
                }));
              }}
            />
            <JoinFormInput
              labelText={t("co_code")}
              placeholder={t("co_code_placeholder")}
              name={"attainment_code"}
              value={state?.attainment_code}
              type={"text"}
              onChange={(e) => {
                setState((prev) => ({
                  ...prev,
                  attainment_code: +e.target.value,
                }));
              }}
            />
          </>
        ) : (
          <>
            <JoinFormInput
              labelText={t("po_name")}
              placeholder={t("po_name_placeholder")}
              name={"attainment_name"}
              value={state?.attainment_name}
              type={"text"}
              onChange={(e) => {
                setState((prev) => ({
                  ...prev,
                  attainment_name: e.target.value,
                }));
              }}
              errorShow={filled["attainment_name"]}
            />
            <JoinFormTextArea
              labelText={t("po_description")}
              placeholder={t("po_description_placeholder")}
              name={"attainment_description"}
              value={state?.attainment_description}
              type={"text"}
              onChange={(e) => {
                setState((prev) => ({
                  ...prev,
                  attainment_description: e.target.value,
                }));
              }}
            />
          </>
        )}

        <button
          className={style.set_fees_structure_btn}
          title="Create copo"
          onClick={onAddAttainment}
          style={{ justifyContent: "center" }}
        >
          {openAs === "EDIT" ? t("update") : t("create")}
        </button>
        {disabled && <QLoader />}
      </div>
    </PopupWrapper>
  );
};

export default AddCoAttainmentSetting;
