import React, { useState } from "react";
import style from "./CreatesportClassModal.module.css";
import { Dialog, Divider } from "@mui/material";
import LoaderButton from "../../../../../../Loader/LoaderButton";
import { useTranslation } from "react-i18next";
import { imageShowUrl } from "../../../../../../services/BaseUrl";
import { useCreateSportsClassMutation } from "../../../../../../services/sports_and_arts/sportsAndArtsApi";
import { useStaffApproveArrayQuery } from "../../../../../../services/qvipleAPI";
import { useSelector } from "react-redux";
import { useActiveSportsClass } from "../../../../../../hooks/sports/sports-api";

function Item({ img, photoId, name, index, assignSportsHead }) {
  const ClickAdmission = () => {
    assignSportsHead();
  };
  return (
    <div className={style.sidebarbottomitem} onClick={ClickAdmission}>
      <img
        alt="not found"
        src={
          photoId !== "1"
            ? `${imageShowUrl}/${img}`
            : "/images/member_tab/class/default_avatar.svg"
        }
      />
      <div>
        <p className={style.namee}>{name}</p>
        <p className={style.desig}>{index}</p>
      </div>
    </div>
  );
}

function CreatesportClassModal({
  openModal,
  hideModal,
  fetchSportsArtsRefetch,
  sportDeptId,
  refetch,
}) {
  const [inputData, setInputData] = useState({
    input: "",
    sid: "",
  });
  const { t } = useTranslation();
  const sportsId = useSelector((state) => state.sportsArtChange);

  const [disabled, setDisabled] = useState(false);
  const [createSportClass] = useCreateSportsClassMutation();
  const [activeSportsClass] = useActiveSportsClass();
  const [assign, setAssign] = useState({
    click: false,
    select: false,
  });
  const { data: sportsArtsStaff } = useStaffApproveArrayQuery({
    page: 1,
    limit: 100,
  });
  const onClose = () => {
    hideModal();
  };
  const classSubmitHandler = () => {
    setDisabled(true);
    activeSportsClass({
      body: { staffId: inputData.sid, sportClassName: inputData.input },
      sid: sportDeptId,
    }).then((res) => {
      if (res.data.status) {
        fetchSportsArtsRefetch();
        refetch();
        setDisabled();
        onClose();
      }
    });
  };
  const selectedStaff = sportsArtsStaff?.staffIns?.find((item) => {
    return item?._id === inputData.sid;
  });

  return (
    <Dialog open={openModal}>
      <div className={style.DModal}>
        <div className={style.title}>
          <h5>{t("create_sport_class")}</h5>
          <img src="/images/close-post-icon.svg" alt="" onClick={onClose} />
        </div>

        <div className={style.body}>
          <div className={style.input}>
            <h6>{t("enter_class_name")}</h6>
            <input
              type="text"
              value={inputData.input}
              onChange={(e) => {
                setInputData({ ...inputData, input: e.target.value });
              }}
              required
              placeholder={t("sport_class_example")}
            />
          </div>

          {!assign.click && !assign.select && (
            <div
              className={style.assignDesignation}
              onClick={() => setAssign({ ...assign, click: true })}
            >
              <img
                className={style.assignManager}
                src="/images/sports/avatar-circle.svg"
                alt=""
              />
              <div>
                <h6>{t("assign_sport_head")}</h6>
                <p>{t("search_from_joined_list")}</p>
              </div>
            </div>
          )}

          {assign.click && !assign.select && (
            <div className={style.items}>
              {sportsArtsStaff?.staffIns?.map((d) => (
                <>
                  <Item
                    img={d.staffProfilePhoto}
                    photoId={d.photoId}
                    name={`${d.staffFirstName} ${
                      d.staffMiddleName ? d.staffMiddleName : ""
                    } ${d.staffLastName}`}
                    index={d.staffROLLNO}
                    assignSportsHead={() => {
                      setInputData({ ...inputData, sid: d?._id });
                      setAssign({ ...assign, select: true });
                    }}
                  />
                  <Divider />
                </>
              ))}
            </div>
          )}

          {assign.click && assign.select && selectedStaff?._id !== "" && (
            <div className={style.sidebarbottomitem}>
              <img
                alt="not found"
                src={
                  selectedStaff?.photoId !== "1"
                    ? `${imageShowUrl}/${selectedStaff?.staffProfilePhoto}`
                    : "/images/member_tab/class/default_avatar.svg"
                }
                className={style.stafImg}
              />
              <div>
                <p
                  className={style.namee}
                >{`${selectedStaff?.staffFirstName} ${selectedStaff?.staffMiddleName} ${selectedStaff?.staffLastName}`}</p>
                <p className={style.desig}>{selectedStaff?.staffROLLNO}</p>
              </div>
            </div>
          )}

          {inputData.input === "" || inputData.sid === "" ? (
            <button className={style.btn} disabled={true}>
              {t("create")}
            </button>
          ) : (
            <button
              className={`${style.btn} ${style.btnActive}`}
              onClick={classSubmitHandler}
              disabled={disabled ? true : false}
            >
              <p>{t("create")}</p>
              {disabled && <LoaderButton />}
            </button>
          )}
        </div>
      </div>
    </Dialog>
  );
}

export default CreatesportClassModal;
