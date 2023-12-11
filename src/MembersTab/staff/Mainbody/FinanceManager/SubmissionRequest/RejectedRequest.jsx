import moment from "moment";
import React, { useEffect } from "react";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import style from "./SubmissionRequest.module.css";
import { useScrollbar } from "../../../../../Scroll/use-scroll";

function Item({ key, name, amount, photoId, photo, date }) {
  return (
    <div className={style.itemContainer} key={key}>
      <div className={style.item}>
        <div className={style.itemleft}>
          <img
            src={
              photoId !== "1"
                ? `${imageShowUrl}/${photo}`
                : "/images/ins-image.jpg"
            }
            alt="class profile"
          />
          <div className={style.leftText}>
            <h6>{name}</h6>
            <p className={style.amt}>
              Amount : <span>Rs. {amount}</span>
            </p>
            <p>{moment(date).format("LT")}</p>
          </div>
        </div>
        <div className={style.itemright}></div>
      </div>
    </div>
  );
}

function RejectedRequest({ rejectArray, rejectCount }) {
  const { scrollToTop } = useScrollbar();
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div className={style.acceptedRequest}>
      <div className={style.acceptedRequestHead}>
        Total Rejected Request {rejectCount}
      </div>

      <div className={style.acceptedRequestContent}>
        {rejectArray?.reject?.map((reject, index) => (
          <Item
            key={index}
            name={reject?.className}
            amount={reject?.feeAmount}
            photoId={reject?.photoId}
            photo={reject?.photo}
            date={reject?.createdAt}
          />
        ))}
      </div>
    </div>
  );
}

export default RejectedRequest;
