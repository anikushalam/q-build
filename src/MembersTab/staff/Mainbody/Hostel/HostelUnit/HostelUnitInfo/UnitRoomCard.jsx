import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import StudentHostelTabChangeLink from "../../../../../student/Mainbody/StudentHostel/StudentHostelTabChangeLink";
import style from "../../Hostel.module.css";
import HostelTabChangeLink from "../../HostelTabChangeLink";
import WardenTabChangeLink from "../WardenTabChangeLink";

const UnitRoomCard = ({ room, carryParentState, viewAs, callApi }) => {
  const { t } = useTranslation();
  const params = useParams();

  return (
    <>
      {viewAs === "STUDENT" ? (
        <StudentHostelTabChangeLink
          carryParentState={{ ...carryParentState, hrid: room?._id }}
          activeTab="unit&n=room"
          // accessRole={accessRole}
        >
          <div className={style.unit_room_card_container}>
            <div className={style.unit_room_card_lines}>
              <h6>{room?.room_name ?? ""}</h6>
            </div>
            <div className={style.unit_room_card_lines}>
              <p>
                {t("hostel_capacity")} {room?.room_strength ?? 0}
              </p>
              <p>
                {t("hostel_vacant")} {room?.vacant_count ?? 0}
              </p>
            </div>
          </div>
        </StudentHostelTabChangeLink>
      ) : viewAs === "HOSTEL_SEARCH" ? (
        <Link
          to={`/q/${params.username}/hostel/profile?a=unit&n=room`}
          state={{ ...carryParentState, hrid: room?._id }}
        >
          <div className={style.unit_room_card_container}>
            <div className={style.unit_room_card_lines}>
              <h6>{room?.room_name ?? ""}</h6>
            </div>
            <div className={style.unit_room_card_lines}>
              <p>
                {t("hostel_capacity")} {room?.room_strength ?? 0}
              </p>
              <p>
                {t("hostel_vacant")} {room?.vacant_count ?? 0}
              </p>
            </div>
          </div>
        </Link>
      ) : viewAs === "DESIGNATION" ? (
        <WardenTabChangeLink
          carryParentState={{ ...carryParentState, hrid: room?._id }}
          activeTab="unit&n=room"
          // accessRole={accessRole}
        >
          <div className={style.unit_room_card_container}>
            <div className={style.unit_room_card_lines}>
              <h6>{room?.room_name ?? ""}</h6>
            </div>
            <div className={style.unit_room_card_lines}>
              <p>
                {t("hostel_capacity")} {room?.room_strength ?? 0}
              </p>
              <p>
                {t("hostel_vacant")} {room?.vacant_count ?? 0}
              </p>
            </div>
          </div>
        </WardenTabChangeLink>
      ) : viewAs === "INSTITUTE" ? (
        <Link
          to={`/q/${params.username}/hostel?a=room`}
          state={{ ...carryParentState, hrid: room?._id }}
        >
          <div className={style.unit_room_card_container}>
            <div className={style.unit_room_card_lines}>
              <h6>{room?.room_name ?? ""}</h6>
            </div>
            <div className={style.unit_room_card_lines}>
              <p>
                {t("hostel_capacity")} {room?.room_strength ?? 0}
              </p>
              <p>
                {t("hostel_vacant")} {room?.vacant_count ?? 0}
              </p>
            </div>
          </div>
        </Link>
      ) : (
        <HostelTabChangeLink
          carryParentState={{ ...carryParentState, hrid: room?._id }}
          activeTab="unit&n=room"
          callApi={callApi}
          // accessRole={accessRole}
        >
          <div className={style.unit_room_card_container}>
            <div className={style.unit_room_card_lines}>
              <h6>{room?.room_name ?? ""}</h6>
              <img
                src="/images/three-24-dot-icon.svg"
                alt="menu icon"
                //   onClick={(e) => setOpenRuleMenu(rules)}
                className={style.menu_icon}
                title="Menu"
                style={{
                  transform: "rotate(90deg)",
                }}
              />
            </div>
            <div className={style.unit_room_card_lines}>
              <p>
                {t("hostel_capacity")} {room?.room_strength ?? 0}
              </p>
              <p>
                {t("hostel_vacant")} {room?.vacant_count ?? 0}
              </p>
            </div>
          </div>
        </HostelTabChangeLink>
      )}
    </>
  );
};

export default UnitRoomCard;
