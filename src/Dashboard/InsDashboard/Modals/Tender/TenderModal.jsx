import React from "react";
import { Dialog, Divider } from "@mui/material";
import style from "./CareerModal.module.css";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { tenderChangeAction } from "../../../../redux/store/tender-slice";
import { useActivateTender } from "../../../../hooks/member_tab/career-api";
import { useState } from "react";
import QLoader from "../../../../Loader/QLoader";
import { useNavigate } from "react-router-dom";
import { useGetSingleInsDataQuery } from "../../../../services/qvipleAPI";

function CareerModal({ openModal, hideModal }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [disabled, setDisabled] = useState(false);
  const [activeTender] = useActivateTender();
  const navigate = useNavigate();
  const [passage, setPassege] = useState("");
  const ids = useSelector((state) => state.idChange);
  const { data: dashboardData } = useGetSingleInsDataQuery();
  const textArea = document.querySelector("textarea");

  textArea?.addEventListener("keyup", (e) => {
    textArea.style.height = "auto";
    let scHeight = e.target.scrollHeight;
    textArea.style.height = `${scHeight}px`;
  });

  const handleActivate = () => {
    setDisabled(true);
    activeTender({
      passegeData: { tender_passage: passage },
    }).then((res) => {
      dispatch(
        tenderChangeAction.tenderQuery({
          ltid: res.data?.landing_tender,
        })
      );

      setDisabled(false);
      navigate(`/q/${dashboardData?.institute?.name}/tender`);
    });
  };

  return (
    <Dialog open={openModal} onClose={() => hideModal(false)}>
      <div className={style.careerModal}>
        <h5 className={style.careerModalheader}>{t("tender")}</h5>
        <h6 className={style.careerModalheader2}>{t("tender_modal_text")}</h6>

        <div className={style.peventinputContainer}>
          <textarea
            className={style.pollTextarea}
            id="pollTextArea"
            type="text"
            required
            placeholder={t("write_about_tender")}
            value={passage}
            onChange={(e) => setPassege(e.target.value)}
          />
        </div>

        <div className={style.downloadbtn} onClick={handleActivate}>
          {t("activate")}
        </div>

        {disabled && <QLoader />}
      </div>
    </Dialog>
  );
}

export default CareerModal;
