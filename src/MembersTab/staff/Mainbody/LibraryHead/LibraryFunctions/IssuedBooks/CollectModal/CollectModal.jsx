import { Dialog } from "@mui/material";
import React, { useEffect, useState } from "react";
import style from "./CollectModal.module.css";
import { useTranslation } from "react-i18next";
import Switch from "@mui/material/Switch";
import { useCollectBook } from "../../../../../../../hooks/member_tab/library-api";
import QLoader from "../../../../../../../Loader/QLoader";
import JoinFormInput from "../../../../../../../JoiningForm/Student/Form/JoinFormInput";
import CustomSelectDepartment from "../../../../../../../JoiningForm/Student/Form/CustomSelectDepartment";

const label = { inputProps: { "aria-label": "Switch demo" } };

function CollectModal({ open, hideModal, issueId, onRefetchWhenBookCollect }) {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const [collectBook] = useCollectBook();
  const [chargeType, setChargeType] = useState({
    damaged: false,
    lost: false,
  });
  const [collectData, setCollectData] = useState({
    enterAmount: false,
    fineCharge: "",
    paymentType: "Online",
  });

  const onChargeBy = (val) => {
    if (val.name === "Damaged") {
      setChargeType((prevState) => ({
        ...prevState,
        damaged: val.value,
        lost: false,
      }));
    } else {
      setChargeType((prevState) => ({
        ...prevState,
        damaged: false,
        lost: val.value,
      }));
    }
  };

  const handleCollect = () => {
    if ((chargeType.damaged || chargeType.lost) && !collectData.fineCharge) {
      setCollectData((prev) => ({
        ...prev,
        enterAmount: true,
      }));
    } else {
      setDisabled((pre) => !pre);
      collectBook({
        lid: issueId,
        collectData: {
          chargeBy: chargeType.damaged
            ? "Damaged"
            : chargeType.lost
            ? "Lost"
            : "",
          paymentType: collectData.fineCharge ? collectData.paymentType : "",
          fineCharge: collectData.fineCharge ?? 0,
        },
      })
        .then(() => {
          onRefetchWhenBookCollect();
          hideModal(false);
          setDisabled((pre) => !pre);
        })
        .catch(() => {
          setDisabled((pre) => !pre);
        });
    }
  };
  const onSelect = (val) => {
    if (val === "Offline") {
      setCollectData((prev) => ({
        ...prev,
        paymentType: val,
      }));
    } else {
      setCollectData((prev) => ({
        ...prev,
        paymentType: "Online",
      }));
    }
  };
  return (
    <Dialog open={open} onClose={() => hideModal(false)}>
      <div className={style.collectModal}>
        <div className={style.collectModaltop}>{t("collect_book")}</div>
        <div className={style.collectModalbody}>
          <div className={style.swichRow}>
            <p className={style.swichRowlabel}>{t("damaged")}</p>
            <Switch
              {...label}
              checked={chargeType.damaged}
              onClick={(e) =>
                onChargeBy({
                  name: "Damaged",
                  value: e.target.checked,
                })
              }
            />
          </div>
          <div className={style.swichRow}>
            <p className={style.swichRowlabel}>{t("lost")}</p>
            <Switch
              {...label}
              checked={chargeType.lost}
              onClick={(e) =>
                onChargeBy({
                  name: "Lost",
                  value: e.target.checked,
                })
              }
            />
          </div>
          {collectData.enterAmount && (
            <p className={style.errorspan}>{t("charg_reason")}</p>
          )}
          {(chargeType.damaged || chargeType.lost) && (
            <>
              <JoinFormInput
                labelText={t("enter_damage_fine")}
                placeholder={t("enter_damage_amount")}
                name={"scholar"}
                value={collectData.fineCharge}
                type={"number"}
                onChange={(e) =>
                  setCollectData({
                    ...collectData,
                    fineCharge: parseInt(e.target.value),
                  })
                }
              />
              <CustomSelectDepartment
                selectLabel={t("collection_type")}
                selectedValue={
                  collectData.paymentType === "Online"
                    ? "Through Qviple"
                    : collectData.paymentType
                }
                options={["Offline", "Through Qviple"]}
                onClick={onSelect}
              />
            </>
          )}

          <button
            disabled={disabled}
            className={style.confirmbtn}
            onClick={handleCollect}
          >
            {t("confirm")}
          </button>
        </div>
      </div>
      {disabled && <QLoader />}
    </Dialog>
  );
}

export default CollectModal;
