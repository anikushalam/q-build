import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import style from "../../Hostel/Hostel.module.css";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import TransportCollectFees from "./TransportCollectFees/TransportCollectFees";
import { useNavigate, useParams } from "react-router-dom";
import { useFinanceTransportReceipt } from "../../../../../hooks/member_tab/finance-api";
import { transportModifyReceiptData } from "../../../../../pdf/function/pdf-convertor-function";
import QLoader from "../../../../../Loader/QLoader";
const VehiclePassengerCard = ({
  passenger,
  border,
  setVehicleMenu,
  transportId,
  onRefetch,
  isCollect,
  onParentRefetch,
  isRootAccess,
}) => {
  const { t } = useTranslation();
  const params = useParams();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [receiptId, setReceiptId] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [downloadableData, setDownloadableData] = useState("");

  const { financeTransportReceipt, financeTransportReceiptRefetch } =
    useFinanceTransportReceipt({
      rid: receiptId,
      skip: !receiptId,
    });
  useEffect(() => {
    if (receiptId) financeTransportReceiptRefetch();
  }, [receiptId, financeTransportReceiptRefetch]);
  useEffect(() => {
    if (
      financeTransportReceipt?.receipt &&
      financeTransportReceipt?.all_remain
    ) {
      setDownloadableData(financeTransportReceipt);
    }
  }, [financeTransportReceipt]);
  useEffect(() => {
    if (downloadableData) {
      const { institute, studentInfo, paymentReceiptInfo } =
        transportModifyReceiptData(
          downloadableData?.all_remain,
          downloadableData?.receipt
        );
      const workerInstance = new Worker(
        new URL(
          "../../../../../pdf/worker/main.receipt.pdf.worker.js",
          import.meta.url
        )
      );
      workerInstance.postMessage({
        institute,
        studentInfo,
        paymentReceiptInfo,
        printReceiptType:
          paymentReceiptInfo?.transactonRefund === "Refunded"
            ? "TRANSPORT_REFUND"
            : "TRANSPORT",
      });
      workerInstance.onmessage = (message) => {
        if (message) {
          window.open(message.data, "_blank");
          setDisabled((pre) => !pre);
          setDownloadableData("");
          workerInstance.terminate();
        }
      };
    }
  }, [downloadableData]);

  const onClose = () => {
    setOpen((pre) => !pre);
  };

  const onViewApplicantProfile = () => {
    navigate(`/q/${params.username}/student/profile`, {
      state: {
        sid: passenger?._id,
        viewAs: "ADMISSION_ADMIN",
      },
    });
  };

  const onCollect = (e) => {
    e.stopPropagation();
    if (isRootAccess === "INVALID") {
    } else {
      onClose();
    }
  };

  const onDeletePassenger = (e) => {
    e.stopPropagation();
    if (isRootAccess === "INVALID") {
    } else {
      setVehicleMenu(passenger);
    }
  };

  const onReceiptDownload = (e, rid) => {
    e.stopPropagation();
    setDisabled((pre) => !pre);
    setReceiptId(rid);
    if (receiptId === rid) {
      setDownloadableData(financeTransportReceipt);
    }
  };

  return (
    <>
      <div
        className={style.transpotation_card}
        onClick={onViewApplicantProfile}
        title="View Profile"
      >
        <div
          style={{
            width: "50%",
          }}
          className={style.transpotation_card_detail}
        >
          <img
            src={
              passenger?.studentProfilePhoto
                ? `${imageShowUrl}/${passenger.studentProfilePhoto}`
                : "/images/user-icon.svg"
            }
            alt="avatar"
          />

          <div className={style.transpotation_card_detail_text}>
            <h6>
              {`${passenger?.studentFirstName ?? ""} 
         ${passenger?.studentMiddleName ?? ""}
         ${passenger?.studentLastName ?? ""} `}
            </h6>
            <p>
              {t("gr_number")} {passenger?.studentGRNO ?? ""}
            </p>
            <p>
              {t("class_name")}{" "}
              {`${passenger?.studentClass?.className ?? ""} - ${
                passenger?.studentClass?.classTitle ?? ""
              }`}
            </p>
            <h6
              style={{
                fontSize: "12px",
              }}
            >
              {t("fee_structure")} {" : "}
              {passenger?.transport_fee_structure?.unique_structure_name ?? ""}
              {", "}
              {t("rs")}{" "}
              {passenger?.transport_fee_structure?.total_admission_fees ?? ""}
            </h6>
          </div>
        </div>
        <div
          style={{
            marginLeft: "1rem",
            width: "30%",
            display: "flex",
          }}
          className={style.transpotation_card_detail_other}
        >
          <div className={style.transpotation_card_detail_other_inner}>
            <img src="/images/email-white.svg" alt="icon" />

            <p>{passenger?.user?.userEmail ?? ""}</p>
          </div>
          <div className={style.transpotation_card_detail_other_inner}>
            <img src="/images/phone-white.svg" alt="icon" />
            <p>{passenger?.user?.userPhoneNumber ?? ""}</p>
          </div>
        </div>

        <div className={style.passenger_fees_button}>
          {!isCollect?.includes(passenger?._id) ? (
            passenger?.fee_receipt?.map((rid, index) =>
              index > 2 ? (
                ""
              ) : (
                <img
                  src="/images/member_tab/admission/admission-receipt-download.svg"
                  onClick={(e) => onReceiptDownload(e, rid)}
                  alt="receipt icon"
                  title="Download Fees Receipt"
                  key={rid}
                  style={{
                    height: "1.4rem",
                  }}
                />
              )
            )
          ) : (
            <div className={style.selectBtn} onClick={onCollect}>
              {t("collect_fee")}
            </div>
          )}
        </div>

        {isRootAccess === "INVALID" ? (
          ""
        ) : (
          <img
            src="/images/three-24-dot-icon.svg"
            alt="menu icon"
            onClick={onDeletePassenger}
            className={style.menu_icon}
            title="Menu"
          />
        )}
      </div>
      {border && (
        <BorderBottom
          customStyle={{
            width: "100%",
          }}
        />
      )}

      {open && (
        <TransportCollectFees
          onRefetch={onRefetch}
          transportId={transportId}
          currentApplicant={passenger}
          onClose={onClose}
          instituteId={passenger?.institute?._id}
          onParentRefetch={onParentRefetch}
        />
      )}
      {disabled && <QLoader />}
    </>
  );
};

export default VehiclePassengerCard;
