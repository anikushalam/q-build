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

function AcceptedRequest({ acceptArray, acceptCount }) {
  const { scrollToTop } = useScrollbar();
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div className={style.acceptedRequest}>
      <div className={style.acceptedRequestHead}>
        Total Accepted Request {acceptCount}
      </div>

      <div className={style.acceptedRequestContent}>
        {acceptArray?.submit?.map((sub, index) => (
          <Item
            key={index}
            name={sub?.className}
            amount={sub?.feeAmount}
            photoId={sub?.photoId}
            photo={sub?.photo}
            date={sub?.createdAt}
          />
        ))}
      </div>
    </div>
  );
}

export default AcceptedRequest;
