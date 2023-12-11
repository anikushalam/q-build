import React, { useState } from "react";
import style from "../../Hostel/Hostel.module.css";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import { useTranslation } from "react-i18next";
import { useAddTransportLinkedInstitute } from "../../../../../hooks/member_tab/transport-api";
import QLoader from "../../../../../Loader/QLoader";

const LinkedInstituteCard = ({ institute, border, transportId, onRefetch }) => {
  const { t } = useTranslation();
  const [addTransportLinkedInstitute] = useAddTransportLinkedInstitute();
  const [disabled, setDiasbled] = useState(false);
  const onLinked = () => {
    if (transportId && institute?._id) {
      setDiasbled((pre) => !pre);
      addTransportLinkedInstitute({
        tid: transportId,
        id: institute?._id,
      })
        .then(() => {
          onRefetch();
          setDiasbled((pre) => !pre);
        })
        .catch({});
    }
  };
  return (
    <>
      <div
        className={style.transpotation_card}
        style={{
          justifyContent: "space-between",
        }}
      >
        <div className={style.transpotation_card_detail}>
          <img
            src={
              institute?.insProfilePhoto
                ? `${imageShowUrl}/${institute.insProfilePhoto}`
                : "/images/user-icon.svg"
            }
            alt="avatar"
          />

          <div className={style.transpotation_card_detail_text}>
            <h6>{institute?.insName ?? ""}</h6>
            <h6
              style={{
                fontSize: "12px",
              }}
            >
              {institute?.name ?? ""}
            </h6>
          </div>
        </div>

        {institute?.transportDepart?.length > 0 ? (
          transportId === institute?.transportDepart?.[0] ? (
            <div className={style.linked_institute_btn}>{t("linked")}</div>
          ) : null
        ) : (
          <div className={style.linked_institute_btn} onClick={onLinked}>
            {t("linked_institute")}
          </div>
        )}
      </div>
      {border && (
        <BorderBottom
          customStyle={{
            width: "100%",
          }}
        />
      )}
      {disabled && <QLoader />}
    </>
  );
};

export default LinkedInstituteCard;
