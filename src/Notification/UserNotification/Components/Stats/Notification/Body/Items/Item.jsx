import style from "./Item.module.css";
import React from "react";
import { imageShowUrl } from "../../../../../../../services/BaseUrl";
import moment from "moment";

function Item({ data, status, followBack, admin, time }) {
  return (
    <div className={style.item}>
      {data && data.notifyByPhoto ? (
        <div className={style.eachItem}>
          <div className={style.eachItemleft}>
            <img
              src={
                data?.notifyByPhoto?.photoId !== "1"
                  ? `${imageShowUrl}/${data?.notifyByPhoto?.profilePhoto}`
                  : "/images/ins_default_profile.svg"
              }
              alt=""
            />
            <p>{status}</p>
          </div>
          <div className={style.text}>
            <p>{time && moment(time).format("LT")}</p>
          </div>
        </div>
      ) : data && data.notifyByStudentPhoto ? (
        <div className={style.eachItem}>
          <div className={style.eachItemleft}>
            <img
              src={
                data?.notifyByStudentPhoto?.photoId !== "1"
                  ? `${imageShowUrl}/${data?.notifyByStudentPhoto?.studentProfilePhoto}`
                  : "/images/ins_default_profile.svg"
              }
              alt=""
            />
            <p>{status}</p>
          </div>
          <div className={style.text}>
            <p>{time && moment(time).format("LT")}</p>
          </div>
        </div>
      ) : data && data.notifyByStaffPhoto ? (
        <div className={style.eachItem}>
          <div className={style.eachItemleft}>
            <img
              src={
                data?.notifyByStaffPhoto?.photoId !== "1"
                  ? `${imageShowUrl}/${data?.notifyByStaffPhoto?.staffProfilePhoto}`
                  : "/images/ins_default_profile.svg"
              }
              alt=""
            />
            <p>{status}</p>
          </div>
          <div className={style.text}>
            {/* <h6>
              {`${data.notifyByStaffPhoto.staffFirstName} ${
                data.notifyByStaffPhoto.staffMiddleName
                  ? `${data.notifyByStaffPhoto.staffMiddleName} `
                  : ""
              } ${data.notifyByStaffPhoto.staffLastName}`}
            </h6> */}

            <p>{time && moment(time).format("LT")}</p>
          </div>
        </div>
      ) : data && data.notifyByInsPhoto ? (
        <div className={style.eachItem}>
          <div className={style.eachItemleft}>
            <img
              src={
                data?.notifyByInsPhoto?.photoId !== "1"
                  ? `${imageShowUrl}/${data?.notifyByInsPhoto?.insProfilePhoto}`
                  : "/images/ins_default_profile.svg"
              }
              alt=""
            />
            <p>{status}</p>
          </div>
          <div className={style.text}>
            {/* <h6>{data.notifyByInsPhoto.insName}</h6> */}

            <p>{time && moment(time).format("LT")}</p>
          </div>
        </div>
      ) : data && data.notifyByDepartPhoto ? (
        <div className={style.eachItem}>
          <div className={style.eachItemleft}>
            <img
              src={
                data?.notifyByDepartPhoto?.photoId !== "1"
                  ? `${imageShowUrl}/${data?.notifyByDepartPhoto?.photo}`
                  : "/images/ins_default_profile.svg"
              }
              alt=""
            />
            <p>{status}</p>
          </div>
          <div className={style.text}>
            {/* <h6>{data.notifyByDepartPhoto.dName}</h6> */}

            <p>{time && moment(time).format("LT")}</p>
          </div>
        </div>
      ) : admin ? (
        <div className={style.eachItem}>
          <div className={style.eachItemleft}>
            <img src="/images/career/newLogo.svg" alt="" />
            <p>Qviple {status}</p>
          </div>
          <div className={style.text}>
            {/* <h6>Qviple</h6> */}

            <p>{time && moment(time).format("LT")}</p>
          </div>
        </div>
      ) : (
        <div className={style.eachItem}>
          <div className={style.eachItemleft}>
            <img src="/images/avatar-icon.png" alt="" />
            <p className={style.textlast}>{status}</p>
          </div>
          <div className={`${style.text} `}>
            <p>{time && moment(time).format("LT")}</p>
          </div>
        </div>
      )}

      {followBack === "true" && <div className={style.btn}>followBack</div>}
    </div>
  );
}

export default Item;
