import React, { useState } from "react";
import CustomSuspense from "../../../Custom/SuspenseLoading/CustomSuspense";
import style from "./OneRow.module.css";
const OneRowOption = React.lazy(() =>
  import("../Components/DepartmentOption/OneRowOption")
);

const OneRow = ({
  image,
  name,
  status,
  onReftech,
  onId,
  onEdit,
  subjectType,
  isBatch,
  onMenu,
  data,
}) => {
  const [click, setClick] = useState(false);

  const onToggle = (e) => {
    e.preventDefault();
    if (status === "classMaster" || status === "subjectMaster") {
      onMenu(data);
    } else {
      setClick(!click);
    }
  };
  return (
    <>
      <div className={style.oneRow}>
        <div className={style.oneRowLeft}>
          <img className={style.oneRowImage} src={image} alt="" />
          {status === "classMaster" && (
            <p className={style.oneRowText}>{name}</p>
          )}
          {(status === "subjectMaster" || status === "subject") && (
            <p className={style.oneRowText}>
              {name}
              {isBatch ? (
                <span
                  style={{
                    fontWeight: "400",
                    fontSize: "12px",
                  }}
                >
                  {" "}
                  ({isBatch})
                </span>
              ) : null}{" "}
              {subjectType === "Optional" && `(${subjectType})`}
            </p>
          )}
        </div>

        <div className={style.oneRowRight}>
          <img src="/images/three-24-dot-icon.svg" alt="" onClick={onToggle} />
        </div>
        <CustomSuspense>
          {click && (
            <div className={style.tooltip}>
              <OneRowOption
                onId={onId}
                setClick={setClick}
                status={status}
                onReftech={onReftech}
                onEdit={onEdit}
              />
            </div>
          )}
        </CustomSuspense>
      </div>

      <p className={style.borderBottom1}></p>
    </>
  );
};

export default OneRow;
