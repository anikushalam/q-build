import React, { useState } from "react";
import style from "./OneRow.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { idChangeAction } from "../../../redux/store/department-slice";
import CustomSuspense from "../../../Custom/SuspenseLoading/CustomSuspense";
const OneRowClassOption = React.lazy(() =>
  import("../Components/DepartmentOption/OneRowClassOption")
);
const OneRowClass = ({ image, name, cid, editOneClass }) => {
  const dispatch = useDispatch();
  const [click, setClick] = useState(false);

  const classIdHandler = (id) => {
    dispatch(
      idChangeAction.addClassId({
        cid: id,
      })
    );
  };
  return (
    <>
      <div className={style.oneRow} style={{ width: "100%" }}>
        <Link
          to={`/q/${name}/class`}
          onClick={() => classIdHandler(cid)}
          style={{ width: "90%" }}
        >
          <div className={style.oneRowLeft}>
            <img className={style.oneRowImage} src={image} alt="" />
            <p className={style.oneRowText}>{name}</p>
          </div>
        </Link>
        <div className={style.oneRowRight}>
          {/* {ids?.searchProfile?.id && ids?.searchProfile?.id !== ids?.id ? (
            ""
          ) : ( */}
          <img
            src="/images/three-24-dot-icon.svg"
            alt="menu icon of class"
            onClick={() => setClick(!click)}
          />
          {/* )} */}
        </div>
        <CustomSuspense>
          {click && (
            <div className={style.tooltip}>
              <OneRowClassOption
                cid={cid}
                setClick={setClick}
                editOneClass={editOneClass}
              />
            </div>
          )}
        </CustomSuspense>
      </div>

      <p className={style.borderBottom1}></p>
    </>
  );
};

export default OneRowClass;
