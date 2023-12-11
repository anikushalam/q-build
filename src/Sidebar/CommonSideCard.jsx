import React from "react";
import style from "./CommonSidebar.module.css";

const CommonSideCard = ({
  cardAsHead,
  customStyleCard,
  heading,
  description,
  count,
  asActive,
}) => {
  return (
    <div
      className={
        asActive
          ? style.common_card_container_active
          : style.common_card_container
      }
      style={{ ...customStyleCard }}
    >
      {!cardAsHead && (
        <>
          <div className={style.common_card_content}>
            <h6 className={style.common_card_content_header}>{heading}</h6>
            <p className={style.common_card_content_paragraph}>{description}</p>
          </div>
          <h6 className={style.common_card_content_count}>{count}</h6>
        </>
      )}
      {cardAsHead && (
        <div className={style.common_card_container_ashead}>
          <h6 className={style.common_card_content_headheader}>{heading}</h6>
          <p className={style.common_card_content_headparagraph}>
            {description}
          </p>
        </div>
      )}
    </div>
  );
};

export default CommonSideCard;
