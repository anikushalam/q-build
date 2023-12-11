import React from "react";
import style from "../SearchStyle.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { idChangeAction } from "../../redux/store/department-slice";
const ConnectionCard = ({
  username,
  activeTab,
  imageShow,
  name,
  showBottomInfo,
  openType,
}) => {
  const dispatch = useDispatch();
  const openSpecificItem = () => {
    if (openType?.asOpen === "department") {
      dispatch(
        idChangeAction.addDepartmentId({
          did: openType?.openId,
        })
      );
    }
  };
  return (
    <div className={style.searchResult}>
      <Link
        to={
          openType?.asOpen === "department"
            ? `/q/${openType?.urlName}/viewdept`
            : `/q/${username}/${activeTab}`
        }
        state={{ openType: openType }}
        onClick={openSpecificItem}
      >
        <div className={style.searchResultLeft}>
          <img src={imageShow} alt="avatar icon" />
          <div>
            <h6>{name}</h6>
            <p>{showBottomInfo}</p>
          </div>
        </div>
      </Link>
      <Link
        to={
          openType?.asOpen === "department"
            ? `/q/${openType?.urlName}/viewdept`
            : `/q/${username}/${activeTab}`
        }
        state={{ openType: openType }}
        onClick={openSpecificItem}
      >
        <div className={style.connectBtn}>View</div>
      </Link>
    </div>
  );
};

export default ConnectionCard;
