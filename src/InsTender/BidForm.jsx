import React from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FileNotUpload } from "../validation/Snackbar";
import style from "./OpenVacanciesForm.module.css";
import { useSelector } from "react-redux";
import { useFileUpload } from "../hooks/authentication-api";
import DisabledButton from "../Custom/Button/DisabledButton";
import { usePlaceBidOffer } from "../hooks/member_tab/career-api";
import { TextInput } from "../Authentication/Auth_New_Flow/InputWithoutIcon/InputWithoutIcon";
import QLoader from "../Loader/QLoader";

function InterviewForm({ setStatus }) {
  const { t } = useTranslation();
  const [placeBidOffer] = usePlaceBidOffer();
  const TenderId = useSelector((state) => state.tenderChange);
  const [dateInput, setDateInput] = useState("");
  const [oneFileUpload] = useFileUpload();
  const [disabled, setDisabled] = useState(false);
  const [notificationState, setNotificationState] = useState({
    msg: "",
    run: false,
  });

  const [bidData, setBidData] = useState({
    expense: "",
    description: "",
    purchaseOrder: "",
    purchaseOrder_name: "",
  });
  const handleChangeAttachment = (e) => {
    setDisabled(true);
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    oneFileUpload({
      fileUpload: formData,
    }).then((res) => {
      setBidData({
        ...bidData,
        purchaseOrder: res.data?.imageKey,
        purchaseOrder_name: e.target.files[0].name,
      });
      setDisabled(false);
    });
  };

  const textArea = document.querySelector("textarea");

  textArea?.addEventListener("keyup", (e) => {
    textArea.style.height = "auto";
    let scHeight = e.target.scrollHeight;
    textArea.style.height = `${scHeight}px`;
  });

  const handleSchedule = () => {
    setDisabled(true);
    placeBidOffer({
      tid: TenderId.tid,
      bid: TenderId.bid,
      offerData: {
        offer_price: bidData.expense,
        order_detail: bidData.description,
        purchase_order: bidData.purchaseOrder,
      },
    }).then((res) => {
      setDisabled(false);
      setStatus("tenderDetail");
    });
  };

  return (
    <div className={style.openVacForm}>
      <div className={`${style.peventlefttop} ${style.peventlefttopflexleft}`}>
        <img src="/images/back.svg" alt="back" onClick={() => setStatus("")} />
        {t("selecting_bid")}
      </div>
      <div className={style.peventleftbody}>
        <div className={style.peventinputContainer}>
          <TextInput
            type="number"
            label={t("expense_amount")}
            placeholder={t("budget_eg")}
            value={bidData.expense}
            handleChange={(e) =>
              setBidData({
                ...bidData,
                expense: e.target.value,
              })
            }
            customStyleInput={{
              width: "100%",
              padding: "0.6rem",
            }}
          />
        </div>

        <div className={style.peventinputContainer}>
          <h6 className={style.input_label}>{t("order_detail_optional")}</h6>
          <textarea
            className={style.pollTextarea}
            id="pollTextArea"
            type="text"
            required
            // maxlength="140"
            placeholder={t("about_tender")}
            value={bidData.description}
            onChange={(e) =>
              setBidData({
                ...bidData,
                description: e.target.value,
              })
            }
          />
        </div>

        <div className={style.switchcontainerflex}>
          <input
            class={style.upload}
            type="file"
            id="formFile"
            name="file"
            // accept="application/pdf"
            onChange={handleChangeAttachment}
          />
          <div className={style.fileinputflexContainer}>
            <h6>
              {t("purchase_order_optional")}{" "}
              <span className={style.labelspan}>*</span>
            </h6>
            <div className={style.fileinputflex}>
              <label for="formFile" className={style.fileinputflexleft}>
                <div className={style.fileinputflexleftdiv}>
                  {t("chose_file")}
                </div>
              </label>
              <div
                className={`${style.fileinputflexleft} ${style.fileinputflexright}`}
              >
                {bidData.purchaseOrder !== ""
                  ? bidData.purchaseOrder_name
                  : t("no_file_chosen")}
              </div>
            </div>
          </div>
        </div>

        {bidData.expense !== "" &&
        bidData.description !== "" &&
        bidData.purchaseOrder !== "" ? (
          <div
            className={style.button_main}
            style={{
              marginTop: "2rem",
              width: "100%",
              cursor: "pointer",
            }}
            onClick={handleSchedule}
          >
            <span>{t("save")}</span>

            {/* {disabled && (
                  <div style={{ marginTop: "0.7vw" }}>
                    <LoaderButton />
                  </div>
                )} */}
          </div>
        ) : (
          <DisabledButton
            buttonText={t("save")}
            customStyleButton={{ marginTop: "2rem", width: "100%" }}
          />
        )}

        {notificationState.run && (
          <FileNotUpload
            msg={notificationState.msg}
            run={notificationState.run}
            setRun={() => setNotificationState({ msg: "", run: false })}
            postiton="bottom"
            type="error"
          />
        )}
      </div>
      {disabled && <QLoader />}
    </div>
  );
}
export default InterviewForm;
