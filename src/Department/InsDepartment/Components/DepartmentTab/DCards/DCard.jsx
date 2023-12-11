import React from "react";
import { Link } from "react-router-dom";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import style from "./DCard.module.css";
import { useDispatch } from "react-redux";
import { idChangeAction } from "../../../../../redux/store/department-slice";
import { useOneDepartmenteDelete } from "../../../../Institute/Components/DepartmentApi/depart-api";

const MODAL_STYLES = {
  position: "absolute",
  right: "0.48vw",
  top: "2.5vw",
  zIndex: 10,
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,

  zIndex: 10,
};

function Options({ onId, setClick, editOneDepartment, onReftech, onClose }) {
  const selectoptions = ["Edit", "Delete"];
  const [departmentDelete] = useOneDepartmenteDelete();

  const selectBatchHandler = (option) => {
    if (option === "Edit") {
      editOneDepartment(onId);
      setClick(false);
    } else if (option === "Delete") {
      departmentDelete({
        did: onId,
      })
        .then((res) => {
          if (res?.data?.deleted === "No") {
          } else {
            onReftech();
          }
          setClick(false);
        })
        .catch({});
    } else {
    }
  };
  return (
    <>
      <div onClick={onClose} style={OVERLAY_STYLES} />
      <div className={style.profileToolTip} style={MODAL_STYLES}>
        <div className={style.triangle}></div>

        <div className={style.profilelist}>
          {selectoptions.map((option, index) => (
            <div
              value={option}
              key={index}
              onClick={() => selectBatchHandler(option)}
            >
              {option}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function DCard({ depart, editOneDepartment, onReftech }) {
  const dispatch = useDispatch();
  const [click, setClick] = React.useState(false);

  const changeIdHandler = (id) => {
    dispatch(
      idChangeAction.addDepartmentId({
        did: id,
      })
    );
  };

  const onPopupHandler = () => {
    setClick((click) => !click);
  };
  return (
    <div className={style.maincard}>
      <div className={style.oneDepartmentCard}>
        <img
          src="/images/three-24-dot-icon.svg"
          alt=""
          onClick={onPopupHandler}
        />
      </div>
      {click && (
        <div className={style.tooltip}>
          <Options
            open={click}
            onClose={() => setClick(false)}
            onId={depart._id}
            setClick={setClick}
            onReftech={onReftech}
            editOneDepartment={editOneDepartment}
          />
        </div>
      )}
      <Link
        to={`/q/${depart?.dName}/viewdept`}
        onClick={() => changeIdHandler(depart._id)}
      >
        <div className={style.dcard}>
          <img
            alt="department"
            src={
              depart.photoId !== "1"
                ? `${imageShowUrl}/${depart.photo}`
                : "/images/profileAndCover/department-profile-img.svg"
            }
            className={style.departmentPhoto}
          />

          <h3>{depart?.dName.substr(0, 18) || "Mechanical Engineering"}</h3>
          <h6>{depart?.dTitle || "Head Of Department"}</h6>
          <h4>
            {depart.dHead.staffFirstName}
            {depart.dHead.staffMiddleName
              ? ` ${depart.dHead.staffMiddleName} `
              : " "}
            {depart.dHead.staffLastName}
          </h4>
        </div>
      </Link>
    </div>
  );
}

export default DCard;
