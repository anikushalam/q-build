import React, { useState } from "react";
import { useClassOfflineExemptedFees } from "../../../../../../hooks/member_tab/class-api";
import QLoader from "../../../../../../Loader/QLoader";
import style from "./Fees.module.css";
import { useTranslation } from "react-i18next";

function Item({ stu, feesDetails, setAllFeesIds }) {
  const [raiobtn, setRadioBtn] = useState("");

  const onClickFeesHandler = (type, args) => {
    // console.info("type", type, args);
    if (type === "exempt") {
      if (
        feesDetails?.exemptList?.includes(stu?._id) ||
        feesDetails?.onlineList?.includes(stu?._id) ||
        feesDetails?.offlineStudentsList?.includes(stu?._id)
      ) {
      } else {
        if (raiobtn === "") {
          setRadioBtn("exempt");
          setAllFeesIds((preState) => ({
            ...preState,
            exemptQuery: [...preState.exemptQuery, stu?._id],
          }));
        } else {
          if (raiobtn === "offline") {
            setRadioBtn("exempt");
            setAllFeesIds((preState) => ({
              ...preState,
              offlineQuery: preState.offlineQuery?.filter(
                (id) => id !== stu?._id
              ),
              exemptQuery: [...preState.exemptQuery, stu?._id],
            }));
          } else {
            if (args === "deselect") {
              setRadioBtn("");
              setAllFeesIds((preState) => ({
                ...preState,
                exemptQuery: preState.exemptQuery?.filter(
                  (id) => id !== stu?._id
                ),
              }));
            }
          }
        }
      }
    } else if (type === "offline") {
      if (
        feesDetails?.exemptList?.includes(stu?._id) ||
        feesDetails?.onlineList?.includes(stu?._id) ||
        feesDetails?.offlineStudentsList?.includes(stu?._id)
      ) {
      } else {
        if (raiobtn === "") {
          setRadioBtn("offline");
          setAllFeesIds((preState) => ({
            ...preState,
            offlineQuery: [...preState.offlineQuery, stu?._id],
          }));
        } else {
          if (raiobtn === "exempt") {
            setRadioBtn("offline");
            setAllFeesIds((preState) => ({
              ...preState,
              exemptQuery: preState.exemptQuery?.filter(
                (id) => id !== stu?._id
              ),
              offlineQuery: [...preState.offlineQuery, stu?._id],
            }));
          } else {
            if (args === "deselect") {
              setRadioBtn("");
              setAllFeesIds((preState) => ({
                ...preState,
                offlineQuery: preState.offlineQuery?.filter(
                  (id) => id !== stu?._id
                ),
              }));
            }
          }
        }
      }
    } else {
      setRadioBtn((btn) => btn);
      // console.info("one online");
    }
  };

  return (
    <div className={style.item}>
      <p className={style.rollno}>
        {stu?.studentROLLNO > 9 ? stu?.studentROLLNO : `0${stu?.studentROLLNO}`}
        .
      </p>
      <p className={style.name}>
        {" "}
        {stu?.studentFirstName}{" "}
        {stu?.studentMiddleName ? stu?.studentMiddleName : " "}{" "}
        {stu?.studentLastName}
      </p>

      <div className={style.radio}>
        <label htmlFor="fee" style={{ cursor: "pointer" }}>
          {feesDetails?.exemptList?.includes(stu?._id) ||
          raiobtn === "exempt" ? (
            <img
              src="/images/radio-active.svg"
              alt=""
              onClick={() => onClickFeesHandler("exempt", "deselect")}
            />
          ) : (
            <img
              src="/images/radio-disabled.svg"
              alt=""
              onClick={() => onClickFeesHandler("exempt", "select")}
            />
          )}
        </label>
        <input type="radio" id="html" name="fee" value="HTML"></input>
      </div>
      <div className={style.radio}>
        <label htmlFor="fee" style={{ cursor: "pointer" }}>
          {feesDetails?.onlineList?.includes(stu?._id) ? (
            <img src="/images/radio-active.svg" alt="" />
          ) : (
            <img
              src="/images/radio-disabled.svg"
              alt=""
              // onClick={() => onClickFeesHandler("online")}
            />
          )}
        </label>
        <input type="radio" id="html" name="fee" value="JS"></input>
      </div>
      <div className={style.radio}>
        <label htmlFor="fee" style={{ cursor: "pointer" }}>
          {feesDetails?.offlineStudentsList?.includes(stu?._id) ||
          raiobtn === "offline" ? (
            <img
              src="/images/radio-active.svg"
              alt=""
              onClick={() => onClickFeesHandler("offline", "deselect")}
            />
          ) : (
            <img
              src="/images/radio-disabled.svg"
              alt=""
              onClick={() => onClickFeesHandler("offline", "select")}
            />
          )}
        </label>
        <input type="radio" id="html" name="fee" value="CSS"></input>
      </div>
    </div>
  );
}

function FeesLeft({
  feesDetails,
  students,
  onRefetch,
  cid,
  fid,
  onRefetchQuery,
  setIndex,
}) {
  const [allFeesIds, setAllFeesIds] = useState({
    offlineQuery: [],
    exemptQuery: [],
  });
  const [disabled, setDisabled] = useState(false);
  const { t } = useTranslation();
  const [classOfflineExemptedFees] = useClassOfflineExemptedFees();
  const onFeesAllSave = () => {
    setDisabled((pre) => !pre);
    classOfflineExemptedFees({
      cid: cid,
      fid: fid,
      feesData: allFeesIds,
    })
      .then(() => {
        onRefetchQuery();
        onRefetch();
        setDisabled((pre) => !pre);
        setIndex(0);
        // setAllFeesIds({
        //   offlineQuery: [],
        //   exemptQuery: [],
        // });
      })
      .catch({});
  };
  // console.info("This is all feesId of data", allFeesIds);
  return (
    <div>
      <div className={style.deestabss}>
        <h6 className={style.heading}>{feesDetails?.feeName}</h6>
        {/* <h6 className={style.backh} onClick={() => setIndex(0)}>
          Go Back To List
        </h6> */}
        {allFeesIds.exemptQuery?.length || allFeesIds.offlineQuery?.length ? (
          <div onClick={onFeesAllSave} className={style.save_fees}>
            {t("save")}
          </div>
        ) : (
          ""
        )}
      </div>

      <div className={style.table}>
        <div className={style.tableHead}>
          <h6 className={style.rollno}>{t("roll_no")}</h6>
          <h6 className={style.name}>{t("name")}</h6>
          <h6 className={style.radio}>{t("exemted")}</h6>
          <h6 className={style.radio}>{t("online")}</h6>
          <h6 className={style.radio}>{t("offline")}</h6>
        </div>

        <div className={style.tableBody}>
          {students?.map((stu) => (
            <Item
              key={stu?._id}
              stu={stu}
              feesDetails={feesDetails}
              onRefetch={onRefetch}
              cid={cid}
              fid={fid}
              onRefetchQuery={onRefetchQuery}
              setAllFeesIds={setAllFeesIds}
            />
          ))}
        </div>
      </div>
      {disabled && <QLoader />}
    </div>
  );
}

export default FeesLeft;
