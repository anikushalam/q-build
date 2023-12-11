import React, { useState } from "react";
import style from "./RouteSlider.module.css";
import { useTranslation } from "react-i18next";
import SelectTransportFeeStrucutre from "../../TransportFeeStructure/SelectTransportFeeStrucutre";
import JoinFormInputView from "../../../../../../JoiningForm/Student/Form/JoinFormInputView";
import JoinFormInputBorder from "../../../../../../JoiningForm/Student/Form/JoinFormInputBorder";

const RouteForm = ({
  onAddRoute,
  openAs,
  onWhereAdd,
  vehicleId,
  transportId,
  batchId,
  classMasterId,
  isEdit,
  addIndex,
}) => {
  const { t } = useTranslation();
  const [filled, setFilled] = useState("");
  const [addFees, setAddFees] = useState(false);
  const [state, setState] = useState({
    stop: "",
    structure: "",
    structureName: "",
  });
  const onValidation = (data) => {
    const errors = {};
    for (let obj in data) {
      if (!data[obj]) errors[obj] = `${obj} is required!`;
    }
    return errors;
  };

  const createRoute = () => {
    const validation = onValidation(state);
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
      // if (routeIndex)
      //   onAddRoute({
      //     ...state,
      //     index: routeIndex,
      //   });
      // else
      if (isEdit) {
        onAddRoute({ ...state, index: addIndex + 1 });
      } else {
        onAddRoute(state);
      }
      setState({
        stop: "",
        structure: "",
        structureName: "",
      });
    }
  };

  const onClose = () => {
    setAddFees((pre) => !pre);
  };
  const onSelectFeeStructure = (data) => {
    setState((prev) => ({
      ...prev,
      structure: data?._id ?? "",
      structureName: data?.unique_structure_name ?? "",
    }));
  };
  return (
    <>
      <div>
        <JoinFormInputBorder
          placeholder={t("enter_stop_name_placeholder")}
          type={"text"}
          name="stop"
          value={state.stop}
          onChange={(e) =>
            setState((prev) => ({
              ...prev,
              stop: e.target.value,
            }))
          }
          customStyleContainer={{
            marginBottom: "0.7rem",
          }}
          errorShow={filled["stop"]}
        />
        {state.structureName ? (
          <div
            onClick={onClose}
            style={{
              cursor: "pointer",
            }}
          >
            <JoinFormInputView
              labelText={t("structure_name")}
              value={state.structureName}
            />
          </div>
        ) : (
          <div
            className={style.select_fees_to_btn}
            style={{
              borderColor: filled["structure"] ? "#ff0000" : "#001a72",
            }}
            onClick={onClose}
          >
            {t("select_fees_structure")}
          </div>
        )}

        {openAs === "INJECTABLE" ? (
          <div className={style.button_group}>
            <button className={style.save_stop_btn1} onClick={createRoute}>
              {t("save_stop")}
            </button>
            <button className={style.delete_stop_btn} onClick={onWhereAdd}>
              {t("delete_stop")}
            </button>
          </div>
        ) : (
          <button className={style.save_stop_btn} onClick={createRoute}>
            {t("save_stop")}
          </button>
        )}
      </div>

      {addFees && (
        <SelectTransportFeeStrucutre
          onClose={onClose}
          vehicleId={vehicleId}
          transportId={transportId}
          batchId={batchId}
          classMasterId={classMasterId}
          onSelectFeeStructure={onSelectFeeStructure}
        />
      )}
    </>
  );
};

export default RouteForm;
