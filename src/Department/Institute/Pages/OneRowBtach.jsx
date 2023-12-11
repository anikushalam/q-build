import React, { useState } from "react";
import CustomSuspense from "../../../Custom/SuspenseLoading/CustomSuspense";
import style from "./OneRowBatch.module.css";
import { useTranslation } from "react-i18next";
const OneRowBatchOption = React.lazy(() =>
  import("../Components/DepartmentOption/OneRowBatchOption")
);

const OneRowBatch = ({
  image,
  name,
  date,
  bid,
  selectedBatch,
  editOneBatch,
  designation_send,
  batch_type,
}) => {
  const [click, setClick] = useState(false);
  const { t } = useTranslation();
  return (
    <>
      <div
        className={
          selectedBatch?._id === bid
            ? `${style.oneRow} ${style.activeBatch}`
            : style.oneRow
        }
      >
        <div className={style.oneRowLeft}>
          <img className={style.oneRowImage} src={image} alt="" />
          <div className={style.date}>
            <p className={style.oneRowText}>{name}</p>
            <p className={style.dateText}>
              {t("created_on_")} {date}
            </p>
          </div>
        </div>
        <div className={style.oneRowRight}>
          <img
            src="/images/three-24-dot-icon.svg"
            alt=""
            onClick={() => setClick(!click)}
          />
        </div>
        <CustomSuspense>
          {click && (
            <div className={style.tooltip}>
              <OneRowBatchOption
                bid={bid}
                setClick={setClick}
                batchName={name}
                editOneBatch={editOneBatch}
                batch_type={batch_type}
                designation_send={designation_send}
              />
            </div>
          )}
        </CustomSuspense>
      </div>
      <p className={style.borderBottom1}></p>
    </>
  );
};

export default OneRowBatch;
