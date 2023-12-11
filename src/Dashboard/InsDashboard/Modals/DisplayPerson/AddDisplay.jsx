import React, { useState } from "react";
import style from "./AddDisplay.module.css";
import { useTranslation } from "react-i18next";
import { Dialog } from "@mui/material";
import "./AddDisplay.css";
import CustomSuspense from "../../../../Custom/SuspenseLoading/CustomSuspense";
import { useAddDisplayPerson } from "../../../../hooks/dashboard/dashboard-api";
import { useSelector } from "react-redux";
import ButtonWithAction from "../../../../Custom/Button/ButtonWithAction";
const AssignStaffModal = React.lazy(() =>
  import("../../../../Department/Institute/AssignStaff/AssignStaffModal")
);
function AddDisplay({ addDisplay, hideModal, onRefetchDisplayList }) {
  const { t } = useTranslation();
  const [click, setClick] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const id = useSelector((state) => state.idChange.id);
  const [addDisplayData, setAddDisplayData] = useState({
    displayTitle: "",
    displayUser: "",
    displayUserName: "",
    displayStaff: "",
  });
  const handleOptions = (val) => {
    setAddDisplayData({
      ...addDisplayData,
      displayUser: val?.user._id,
      displayUserName: val?.user.userLegalName,
      displayStaff: val?._id,
    });
  };
  const [addDisplayPerson] = useAddDisplayPerson();
  const handleClick = () => {
    if (addDisplayData.displayUser) {
      setDisabled((pre) => !pre);
      addDisplayPerson({
        id: id,
        addData: addDisplayData,
      })
        .then(() => {
          onRefetchDisplayList();
          hideModal(false);
          setDisabled((pre) => !pre);
        })
        .catch({});
    }
  };

  return (
    <>
      <Dialog open={addDisplay} onClose={() => hideModal(false)}>
        <div className={style.addDisplay}>
          <div className={style.title}>
            <h6>{t("add_display")}</h6>

            <img
              src="/images/close-post-icon.svg"
              onClick={() => hideModal(false)}
              alt=""
            />
          </div>
          <div className={style.content}>
            <div className={style.item}>
              <label>{t("add_title")}</label>
              <input
                type="text"
                placeholder={t("add_title_details")}
                value={addDisplayData.title}
                onChange={(e) =>
                  setAddDisplayData({
                    ...addDisplayData,
                    displayTitle: e.target.value,
                  })
                }
              />
            </div>

            <div className={style.item1}>
              <h6>{t("select_candite")}</h6>
              <div
                className={style.select}
                onClick={() => {
                  setClick(!click);
                }}
              >
                <p>
                  {" "}
                  {addDisplayData.displayUserName === ""
                    ? t("select_cadite_details")
                    : addDisplayData.displayUserName}
                </p>
                <img src="/images/select-icon.svg" alt="" />
              </div>
            </div>
            <ButtonWithAction
              buttonText={t("add_details")}
              onAction={handleClick}
              disabled={disabled}
              shwoLoader={true}
            />
          </div>
        </div>
        <CustomSuspense>
          {click && (
            <AssignStaffModal
              assignHead={click}
              headSelect={handleOptions}
              title={t("assign_display")}
              onClose={() => setClick((pre) => !pre)}
            />
          )}
        </CustomSuspense>
      </Dialog>
    </>
  );
}

export default AddDisplay;
