import React, { useState } from "react";
import style from "../../Hostel/Hostel.module.css";
import { useTranslation } from "react-i18next";
import moment from "moment";
import ClassBatchMenu from "./ClassBatchMenu";
import { Link, useParams } from "react-router-dom";

const ClassBatchCard = ({ batch, onRefetch, carryParentState, viewAs }) => {
  const { t } = useTranslation();
  const params = useParams();

  const [batchMenu, setBatchMenu] = useState("");
  return (
    <>
      <Link
        to={
          viewAs === "INSTITUTE"
            ? `/q/${params.username}/class?type=batch-detail`
            : `/q/${params.username}/member/class/${params.cname}?a=batch-detail`
        }
        state={{
          ...carryParentState,
          batchName: batch?.batchName,
          batchId: batch?._id,
        }}
        key={batch?._id}
      >
        <div
          className={`${style.hostel_batch_container} ${style.hostel_batch_container_hover}`}
        >
          <img
            className={style.hostel_batch_image}
            src="/images/master-24-grey-icon.svg"
            alt="batch icon"
            style={{
              borderRadius: "0",
            }}
          />
          <div className={style.hostel_batch_container_text}>
            <h6>{batch?.batchName ?? ""}</h6>
            <p>
              {t("created_on_")}{" "}
              {moment(batch?.createdAt).format("DD MMM yyyy")}
            </p>
          </div>
          <img
            src="/images/three-24-dot-icon.svg"
            alt="menu icon"
            onClick={(e) => {
              e.preventDefault();
              setBatchMenu(batch);
            }}
            className={style.hostel_batch_menu}
            title="Menu"
          />
        </div>
      </Link>
      {batchMenu && (
        <ClassBatchMenu
          onClose={() => setBatchMenu("")}
          onRefetch={onRefetch}
          batchMenu={batchMenu}
        />
      )}
    </>
  );
};

export default ClassBatchCard;
