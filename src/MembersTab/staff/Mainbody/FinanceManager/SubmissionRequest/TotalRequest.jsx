import React, { useEffect, useState } from "react";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import style from "./SubmissionRequest.module.css";
import moment from "moment";
import {
  useAcceptRequestMutation,
  useRejectRequestMutation,
} from "../../../../../services/financeAPI";
import QLoader from "../../../../../Loader/QLoader";
import { useScrollbar } from "../../../../../Scroll/use-scroll";

function Item({
  key,
  name,
  amount,
  photoId,
  photo,
  date,
  financeId,
  classId,
  feeId,
  fetch,
  aFetch,
  rFetch,
}) {
  const [acceptQuery] = useAcceptRequestMutation();
  const [rejectQuery] = useRejectRequestMutation();
  const [disabled, setDisabled] = useState(false);
  const AcceptHandler = () => {
    if (financeId !== "" && classId !== "" && feeId !== "") {
      setDisabled((pre) => !pre);
      acceptQuery({
        fid: financeId,
        cid: classId,
        fiid: feeId,
        amount: amount,
      }).then((res) => {
        if (res.data.accept) {
          fetch();
          aFetch();
          setDisabled((pre) => !pre);
        }
      });
    }
  };
  const RejectHandler = () => {
    if (financeId !== "" && classId !== "" && feeId !== "") {
      setDisabled((pre) => !pre);

      rejectQuery({
        fid: financeId,
        cid: classId,
        fiid: feeId,
        amount: amount,
      }).then((res) => {
        if (res.data.reject) {
          fetch();
          rFetch();
          setDisabled((pre) => !pre);
        }
      });
    }
  };
  return (
    <>
      <div className={style.itemContainer} key={key}>
        <div className={style.item}>
          <div className={style.itemleft}>
            <img
              src={
                photoId !== "1"
                  ? `${imageShowUrl}/${photo}`
                  : "/images/ins-image.jpg"
              }
              alt="class Profile"
            />
            <div className={style.leftText}>
              <h6>{name}</h6>
              <p className={style.amt}>
                Amount : <span>Rs. {amount}</span>
              </p>
              <p>{moment(date).format("LT")}</p>
            </div>
          </div>
          <div className={style.itemright}>
            <div className={style.rightbtnleft} onClick={RejectHandler}>
              Reject
            </div>
            <div className={style.rightbtnright} onClick={AcceptHandler}>
              Accept
            </div>
          </div>
        </div>
      </div>
      {disabled && <QLoader />}
    </>
  );
}

function TotalRequest({
  request,
  requestCount,
  fetch,
  financeId,
  acceptFetch,
  rejectFetch,
}) {
  const { scrollToTop } = useScrollbar();
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div className={style.acceptedRequest}>
      <div className={style.acceptedRequestHead}>
        Total Request {requestCount}
      </div>

      <div className={style.acceptedRequestContent}>
        {request?.request?.map((req, index) => (
          <Item
            key={index}
            name={req?.className}
            amount={req?.feeAmount}
            photoId={req?.photoId}
            photo={req?.photo}
            date={req?.createdAt}
            financeId={financeId}
            classId={req?.classId}
            feeId={req?.feeId}
            fetch={fetch}
            aFetch={acceptFetch}
            rFetch={rejectFetch}
          />
        ))}
      </div>
    </div>
  );
}

export default TotalRequest;
