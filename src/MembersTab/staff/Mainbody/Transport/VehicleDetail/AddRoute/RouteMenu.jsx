import React, { useEffect, useState } from "react";
import QLoader from "../../../../../../Loader/QLoader";
import Overlay from "../../../../../../Search/Overlay";
import SearchModalBackdrop from "../../../../../../Search/SearchModalBackdrop";
import {
  useDeleteOneRoute,
  useUpdateRoute,
} from "../../../../../../hooks/member_tab/transport-api";
import style from "../../../ClassTeacher/Profile/EditConfirm.module.css";
import { useTranslation } from "react-i18next";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import JoinFormInputBorder from "../../../../../../JoiningForm/Student/Form/JoinFormInputBorder";
import JoinFormInputView from "../../../../../../JoiningForm/Student/Form/JoinFormInputView";
import SelectTransportFeeStrucutre from "../../TransportFeeStructure/SelectTransportFeeStrucutre";
import RouteStyle from "../AddRoute/RouteSlider.module.css";
const RouteMenu = ({
  openRouteMenu,
  onClose,
  vid,
  onRefetch,
  transportId,
  batchId,
  classMasterId,
}) => {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const [filled, setFilled] = useState("");
  const [addFees, setAddFees] = useState(false);
  const [edit, setEdit] = useState(false);
  const [deleteOneRoute] = useDeleteOneRoute();
  const [updateRoute] = useUpdateRoute();
  const [state, setState] = useState({
    stop: openRouteMenu?.stop ?? "",
    structure: openRouteMenu?.structure ?? "",
    structureName: openRouteMenu?.structureName ?? "",
  });

  useEffect(() => {
    setState({
      stop: openRouteMenu?.stop ?? "",
      structure: openRouteMenu?.structure ?? "",
      structureName: openRouteMenu?.structureName ?? "",
    });
  }, [openRouteMenu]);

  const onDelete = () => {
    setDisabled((pre) => !pre);
    deleteOneRoute({
      vid: vid,
      rid: openRouteMenu?._id,
    })
      .then(() => {
        onRefetch();
        onClose();
        setDisabled((pre) => !pre);
      })
      .catch({});
  };

  const onValidation = (data) => {
    const errors = {};
    for (let obj in data) {
      if (!data[obj]) errors[obj] = `${obj} is required!`;
    }
    return errors;
  };

  const onEdit = () => {
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
      setDisabled((pre) => !pre);
      updateRoute({
        vid: vid,
        route_status: "Renaming_Route",
        modifyRoute: {
          rid: openRouteMenu?._id,
          route_stop: state?.stop,
          route_structure: state?.structure,
        },
      })
        .then(() => {
          onRefetch();
          setDisabled((pre) => !pre);
          onClose();
        })
        .catch({});
    }
  };

  const onFeesClose = () => {
    setAddFees((pre) => !pre);
  };
  const onSelectFeeStructure = (data) => {
    setState((prev) => ({
      ...prev,
      structure: data?._id ?? "",
      structureName: data?.unique_structure_name ?? "",
    }));
  };

  // console.info("openRouteMenu", openRouteMenu);
  return (
    <>
      {addFees ? (
        <SelectTransportFeeStrucutre
          onClose={onFeesClose}
          vehicleId={vid}
          transportId={transportId}
          batchId={batchId}
          classMasterId={classMasterId}
          onSelectFeeStructure={onSelectFeeStructure}
        />
      ) : (
        <>
          <SearchModalBackdrop onClose={onClose} />
          <Overlay
            customStyle={{
              zIndex: "1200",
            }}
          >
            <div
              className={style.edit_modal_container}
              style={{
                width: edit ? "35rem" : "200px",
                height: edit ? "20rem" : "150px",
              }}
            >
              {!edit ? (
                <>
                  <h6
                    className={style.edit}
                    onClick={() => setEdit((pre) => !pre)}
                  >
                    Edit
                  </h6>
                  <h6 className={style.remove} onClick={onDelete}>
                    Delete
                  </h6>
                </>
              ) : (
                <>
                  <h6
                    className={style.edit}
                    onClick={() => setEdit((pre) => !pre)}
                  >
                    {t("edit_routes_name")}
                  </h6>
                  <BorderBottom
                    customStyle={{
                      width: "100%",
                    }}
                  />
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
                  />{" "}
                  {state.structureName ? (
                    <div
                      onClick={onFeesClose}
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
                      className={RouteStyle.select_fees_to_btn}
                      style={{
                        borderColor: filled["structure"]
                          ? "#ff0000"
                          : "#001a72",
                      }}
                      onClick={onFeesClose}
                    >
                      {t("select_fees_structure")}
                    </div>
                  )}
                  <button className={style.update_to_btn} onClick={onEdit}>
                    {t("update")}
                  </button>
                </>
              )}
            </div>

            {disabled && <QLoader />}
          </Overlay>
        </>
      )}
    </>
  );
};

export default RouteMenu;
