import React, { useState } from "react";
import PopupWrapper from "../../../FinanceManager/FeesStructure/PopupWrapper";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import QLoader from "../../../../../../Loader/QLoader";
import { useTranslation } from "react-i18next";
import { imageShowUrl } from "../../../../../../services/BaseUrl";
import style from "../../../StaffAdmisionAdmin/AdmissionScholarship/AdmissionScholarship.module.css";
import { useAddPassenger } from "../../../../../../hooks/member_tab/transport-api";

const PreviewPassengerAdd = ({
  onClose,
  selectedStudent,
  selectedStop,
  vehicleId,
  onParentClose,
  onRefetch,
}) => {
  const { t } = useTranslation();
  const [disabled, setDiasbled] = useState(false);
  const [addPassenger] = useAddPassenger();

  const onAddPassenger = () => {
    if (selectedStudent?._id && selectedStop?._id) {
      setDiasbled((pre) => !pre);
      addPassenger({
        vid: vehicleId,
        createPassenger: {
          sid: selectedStudent?._id,
          rid: selectedStop?._id,
        },
      })
        .then(() => {
          onRefetch();
          onParentClose();
          setDiasbled((pre) => !pre);
        })
        .catch({});
    }
  };
  return (
    <PopupWrapper onClose={onClose}>
      <div className={style.assign_role_container}>
        <section className={style.assign_role_title}>
          <img
            src="/images/arrow-left-fees-icon.svg"
            onClick={onClose}
            alt="back icon"
          />

          <h6>{t("add_passenger")}</h6>
        </section>
        <BorderBottom
          customStyle={{
            width: "100%",
          }}
        />
        <section
          style={{
            padding: "0 0.8rem",
          }}
        >
          <section className={style.student_container}>
            <img
              src={
                selectedStudent.photoId !== "1"
                  ? `${imageShowUrl}/${selectedStudent?.studentProfilePhoto}`
                  : "/images/member_tab/class/default_avatar.svg"
              }
              alt="student avatar"
            />
            <div className={style.student_container_name}>
              <h6>{`${selectedStudent?.studentFirstName} ${
                selectedStudent?.studentMiddleName
                  ? selectedStudent?.studentMiddleName
                  : ""
              } ${selectedStudent?.studentLastName}`}</h6>
              <p className={style.student_container_gr}>
                {t("gr_number")} {selectedStudent?.studentGRNO}
              </p>
            </div>
          </section>
          <section className={style.route_container}>
            <img src="/images/transport/stop-icon.svg" alt="stop icon" />
            <div className={style.student_container_name}>
              <h6>{`${selectedStop?.route_stop ?? ""}`}</h6>
              <p className={style.student_container_gr}>
                {t("stop_fees")}{" "}
                {selectedStop?.route_structure?.total_admission_fees ?? ""}
              </p>
            </div>
          </section>
          <button
            className={style.applicable_to_btn}
            style={{
              justifyContent: "center",
              margin: "1rem 0",
            }}
            onClick={onAddPassenger}
          >
            {t("add_passenger")}
          </button>
          {disabled && <QLoader />}
        </section>
      </div>
    </PopupWrapper>
  );
};

export default PreviewPassengerAdd;
