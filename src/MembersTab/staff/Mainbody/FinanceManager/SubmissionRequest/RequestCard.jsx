import moment from "moment";
import React, { useState } from "react";
import {
  useAdmissionFeeActionFinance,
  useHostelFeeActionFinance,
  useLibraryFeeActionFinance,
  useTransportFeeActionFinance,
} from "../../../../../hooks/member_tab/finance-api";
import QLoader from "../../../../../Loader/QLoader";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import style from "./SubmissionRequest.module.css";

const RequestCard = ({ cardData, viewAs, fid, onRefetchWhenActionPerform }) => {
  const [disabled, setDisabled] = useState(false);
  const [admissionFeeActionFinance] = useAdmissionFeeActionFinance();
  const [libraryFeeActionFinance] = useLibraryFeeActionFinance();
  const [hostelFeeActionFinance] = useHostelFeeActionFinance();
  const [transportFeeActionFinance] = useTransportFeeActionFinance();

  const onAcceptAction = (val) => {
    setDisabled((pre) => !pre);
    if (viewAs === "ADMISSION_REQUEST") {
      admissionFeeActionFinance({
        fid: fid,
        aid: cardData?.admission?._id,
        rid: cardData?._id,
        admissionAction: {
          amount: +cardData?.amount ?? 0,
          status: val,
        },
      })
        .then(() => {
          //   console.info("trhis dnmsd", res);
          onRefetchWhenActionPerform();
          setDisabled((pre) => !pre);
        })
        .catch({});
    } else if (viewAs === "LIBRARY_REQUEST") {
      libraryFeeActionFinance({
        fid: fid,
        lid: cardData?.library?._id,
        rid: cardData?._id,
        libraryAction: {
          amount: +cardData?.amount ?? 0,
          status: val,
        },
      })
        .then(() => {
          //   console.info("trhis library", res);
          onRefetchWhenActionPerform();
          setDisabled((pre) => !pre);
        })
        .catch({});
    } else if (viewAs === "HOSTEL_REQUEST") {
      hostelFeeActionFinance({
        fid: fid,
        hid: cardData?.hostel?._id,
        rid: cardData?._id,
        hostelAction: {
          amount: +cardData?.amount ?? 0,
          status: val,
        },
      })
        .then(() => {
          //   console.info("trhis library", res);
          onRefetchWhenActionPerform();
          setDisabled((pre) => !pre);
        })
        .catch({});
    } else if (viewAs === "TRANSPORT_REQUEST") {
      transportFeeActionFinance({
        fid: fid,
        tid: cardData?.transport_module?._id,
        rid: cardData?._id,
        transportAction: {
          amount: +cardData?.amount ?? 0,
          status: val,
        },
      })
        .then(() => {
          //   console.info("trhis library", res);
          onRefetchWhenActionPerform();
          setDisabled((pre) => !pre);
        })
        .catch({});
    } else {
    }
  };

  return (
    <div className={style.itemContainer}>
      <div className={style.item}>
        <div className={style.itemleft}>
          {cardData?.admission && (
            <img
              src={
                cardData?.admission?.admissionAdminHead?.photoId !== "1"
                  ? `${imageShowUrl}/${cardData?.admission?.admissionAdminHead?.staffProfilePhoto}`
                  : "/images/ins-image.jpg"
              }
              alt="class Profile"
            />
          )}

          {cardData?.library && (
            <img
              src={
                cardData?.library?.libraryHead?.photoId !== "1"
                  ? `${imageShowUrl}/${cardData?.library?.libraryHead?.staffProfilePhoto}`
                  : "/images/ins-image.jpg"
              }
              alt="class Profile"
            />
          )}
          {cardData?.hostel && (
            <img
              src={
                cardData?.hostel?.hostel_manager?.photoId !== "1"
                  ? `${imageShowUrl}/${cardData?.hostel?.hostel_manager?.staffProfilePhoto}`
                  : "/images/ins-image.jpg"
              }
              alt="class Profile"
            />
          )}
          {cardData?.transport_module?.transport_manager && (
            <img
              src={
                cardData?.transport_module?.transport_manager?.photoId !== "1"
                  ? `${imageShowUrl}/${cardData?.transport_module?.transport_manager?.staffProfilePhoto}`
                  : "/images/ins-image.jpg"
              }
              alt="class Profile"
            />
          )}
          <div className={style.leftText}>
            {cardData?.admission && (
              <h6>{`${
                cardData?.admission?.admissionAdminHead?.staffFirstName
              } ${
                cardData?.admission?.admissionAdminHead?.staffMiddleName ?? ""
              } ${cardData?.admission?.admissionAdminHead?.staffLastName}`}</h6>
            )}

            {cardData?.library && (
              <h6>{`${cardData?.library?.libraryHead?.staffFirstName} ${
                cardData?.library?.libraryHead?.staffMiddleName ?? ""
              } ${cardData?.library?.libraryHead?.staffLastName}`}</h6>
            )}
            {cardData?.hostel && (
              <h6>{`${cardData?.hostel?.hostel_manager?.staffFirstName} ${
                cardData?.hostel?.hostel_manager?.staffMiddleName ?? ""
              } ${cardData?.hostel?.hostel_manager?.staffLastName}`}</h6>
            )}
            {cardData?.transport_module?.transport_manager && (
              <h6>{`${
                cardData?.transport_module?.transport_manager?.staffFirstName
              } ${
                cardData?.transport_module?.transport_manager
                  ?.staffMiddleName ?? ""
              } ${
                cardData?.transport_module?.transport_manager?.staffLastName
              }`}</h6>
            )}
            <p className={style.amt}>
              Amount : <span>Rs. {cardData?.amount}</span>
            </p>
            <p>{moment(cardData?.date).format("LT")}</p>
          </div>
        </div>
        {viewAs === "ADMISSION_REQUEST" ||
        viewAs === "LIBRARY_REQUEST" ||
        viewAs === "HOSTEL_REQUEST" ||
        viewAs === "TRANSPORT_REQUEST" ? (
          <div className={style.itemright}>
            <div
              className={style.rightbtnleft}
              onClick={() => onAcceptAction("Rejected")}
            >
              Reject
            </div>
            <div
              className={style.rightbtnright}
              onClick={() => onAcceptAction("Accepted")}
            >
              Accept
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      {disabled && <QLoader />}
    </div>
  );
};

export default RequestCard;
