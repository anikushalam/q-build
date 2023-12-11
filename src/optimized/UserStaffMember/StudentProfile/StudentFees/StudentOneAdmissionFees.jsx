import { useTranslation } from "react-i18next";
import style from "./StudentAdmissionFees.module.css";
import { useEffect, useState } from "react";
import StudentOneAdmissionFeesCard from "./StudentOneAdmissionFeesCard";
import {
  assestsUserFinanceUrl,
  assestsUtilityUrl,
} from "@/Services/UrlConfig/AssestsBaseUrl";
import AddScholarNumber from "./AddScholarNumber";
import StudentOneAdmissionFeesMenu from "./StudentOneAdmissionFeesMenu";

const StudentOneAdmissionFees = ({ admission, isFeesData, sid }) => {
  const { t } = useTranslation();
  const [openMenu, setOpenMenu] = useState(false);
  const [addScholar, setAddScholar] = useState(false);
  const [scholarNumber, setScholarNumber] = useState("");

  const onScholarshipToggle = () => {
    setAddScholar((pre) => !pre);
  };
  const onMenuToggle = () => {
    setOpenMenu((pre) => !pre);
  };
  useEffect(() => {
    if (admission?.scholar_ship_number) {
      setScholarNumber(admission?.scholar_ship_number);
    }
  }, [admission?.scholar_ship_number]);
  return (
    <>
      <div
        className={style.student_admission_fees_card_container}
        style={{
          maxWidth: isFeesData ? "44%" : "30%",
          minWidth: isFeesData ? "44%" : "30%",
        }}
      >
        <section className={style.student_admission_card_title}>
          <h6
            style={{
              marginBottom: "0.3rem",
            }}
          >
            {admission?.card_type === "Promote"
              ? admission?.student?.studentClass?.classTitle ?? ""
              : admission?.appId?.applicationName ?? ""}{" "}
          </h6>
          <p
            style={{
              marginBottom: "0.3rem",
            }}
          >
            {admission?.fee_structure?.unique_structure_name ?? ""}
          </p>

          <img
            src={`${assestsUserFinanceUrl}/menu.svg`}
            alt="menu icon"
            onClick={() => setOpenMenu(true)}
            className={style.edit_icon}
            title="Menu"
            style={{
              cursor: "pointer",
            }}
          />
        </section>
        <div
          className={style.student_admission_count_container}
          onClick={onScholarshipToggle}
        >
          <button className={style.add_scholar_number_btn}>
            {scholarNumber || admission?.scholar_ship_number ? (
              <>
                {t("edit_scholarship_application_no")}
                <span
                  style={{
                    color: "#121212",
                  }}
                >
                  {scholarNumber || admission?.scholar_ship_number}
                </span>
              </>
            ) : (
              t("add_scholarship_application_no_if_applicable")
            )}
          </button>
        </div>
        <section
          className={style.student_admission_count_container}
          style={{
            marginBottom: "1.5rem",
          }}
        >
          <div className={style.student_admission_count}>
            <h5
              style={{
                color: "#121212",
              }}
            >
              {t("rs")} {admission?.fee_structure?.total_admission_fees ?? 0}
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: "400",
                  color: "#121212",
                }}
              >
                {` (${t("rs")} ${
                  admission?.fee_structure?.applicable_fees ?? 0
                })`}
              </span>
            </h5>
            <h6
              style={{
                marginBottom: "1rem",
              }}
            >
              {t("total_applicable_fees")}
            </h6>

            <h5
              style={{
                color: "#008000",
              }}
            >
              {t("rs")} {admission?.paid_fee ?? 0}
              <span
                style={{
                  fontSize: "13px",
                  fontWeight: "400",
                  color: "#121212",
                }}
              >
                {` (${t("rs")} ${
                  admission?.fee_structure?.applicable_fees -
                    admission?.paid_fee >
                  0
                    ? admission?.fee_structure?.applicable_fees -
                      admission?.paid_fee
                    : 0
                })`}
              </span>
            </h5>
            <h6>{t("paid_oustanding")}</h6>
          </div>
          <div className={style.student_admission_count_image}>
            {admission?.status === "Paid" ? (
              admission?.paid_fee - admission?.applicable_fee > 0 ? (
                <>
                  <img
                    src={`${assestsUtilityUrl}/fees-refund.svg`}
                    alt="pending icon"
                  />
                  <div className={style.show_text}>
                    <h6
                      style={{
                        fontWeight: "600",
                      }}
                    >
                      {t("rs")}{" "}
                      {admission?.paid_fee - admission?.applicable_fee}
                    </h6>
                    <h6> {t("excess")}</h6>
                    <button className={style.image_refund_btn}>
                      {t("refund")}
                    </button>
                  </div>
                </>
              ) : (
                <img
                  src={`${assestsUtilityUrl}/fees-paid.svg`}
                  alt="pending icon"
                  style={{
                    width: "140px",
                    height: "140px",
                  }}
                />
              )
            ) : admission?.remaining_fee ? (
              <>
                <img
                  src={`${assestsUtilityUrl}/fees-pending.svg`}
                  alt="pending icon"
                  style={{
                    width: "140px",
                    height: "140px",
                  }}
                />
                <div className={style.show_text}>
                  <h6
                    style={{
                      fontWeight: "600",
                    }}
                  >
                    {t("rs")} {admission?.remaining_fee ?? 0}
                  </h6>
                  <h6> {t("pending")}</h6>
                </div>
              </>
            ) : (
              ""
            )}
          </div>
        </section>

        {admission?.remaining_array?.map((install) => (
          <StudentOneAdmissionFeesCard
            install={install}
            key={install?._id}
            admission={admission}
          />
        ))}

        <div className={style.remark_card_container}>
          <section className={style.add_remark}>
            <h6 className={style.add_remark_text}>
              {t("remark")} {admission?.remark ?? ""}
            </h6>
          </section>
        </div>
      </div>
      {addScholar && (
        <AddScholarNumber
          onClose={onScholarshipToggle}
          setScholarNumber={setScholarNumber}
          filledNumber={scholarNumber}
          rcid={admission?._id}
        />
      )}
      {openMenu && (
        <StudentOneAdmissionFeesMenu
          sid={sid}
          rid={admission?._id}
          is_drop={admission?.drop_status === "Disable" ? false : true}
          onClose={onMenuToggle}
          aid={admission?.appId?.admissionAdmin?._id}
          applicationId={admission?.appId?._id}
          did={admission?.fee_structure?.department}
          bid={admission?.fee_structure?.batch_master}
          cmid={admission?.fee_structure?.class_master?._id}
          structureId={admission?.fee_structure?.id}
        />
      )}
    </>
  );
};

export default StudentOneAdmissionFees;
