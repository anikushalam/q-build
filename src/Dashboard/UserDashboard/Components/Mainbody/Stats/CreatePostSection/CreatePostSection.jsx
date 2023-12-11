import React, { useEffect } from "react";
import style from "./CreatePostSection.module.css";
import { useTranslation } from "react-i18next";
import { imageShowUrl } from "../../../../../../services/BaseUrl";
import { useSelector } from "react-redux";
import { useAddDailyQuote } from "../../../../../../hooks/dashboard/dashboard-api";

function CreatePostSection({ profileData, onValueHandler, onRefetchUser }) {
  const { t } = useTranslation();
  const id = useSelector((state) => state.authChange.id);

  const [addDailyQuote] = useAddDailyQuote();

  useEffect(() => {
    if (id && !profileData?.daily_quote_query?.quote?.quote_text) {
      addDailyQuote({
        id: id,
      })
        .then(() => {
          onRefetchUser();
        })
        .catch({});
    }
  }, [id, profileData?.daily_quote_query?.quote?.quote_text]);
  const onOpenHandler = (val) => {
    if (profileData?.status === "Not Approved") {
    } else {
      onValueHandler(val);
    }
  };
  return (
    <>
      {profileData?.status === "Not Approved" ? (
        <div className={style.CreatePostSectionNotApprooved}>
          <h6>{t("welcome_qviple")}</h6>

          <p>{t("manage_your_profile")}</p>
        </div>
      ) : (
        <div className={style.CreatePostSection}>
          {/* <div className={style.posthead}>
            <h6>{t("create_post")}</h6>

            <div className={style.select}>
              <span className={style.arrow}> {t("visibility")} </span>
            </div>
          </div> */}

          <div className={style.posttsearch}>
            <div className={style.imgcontainer}>
              <img
                alt=""
                src={
                  profileData?.photoId !== "1"
                    ? `${imageShowUrl}/${profileData?.profilePhoto}`
                    : "/images/ins_default_profile.svg"
                }
              />
            </div>
            <div className={style.quotes_container}>
              <h5>Hello, {profileData?.userLegalName ?? ""}</h5>
              <h6>
                "{profileData?.daily_quote_query?.quote?.quote_text ?? ""}"
                {profileData?.daily_quote_query?.quote?.quote_author
                  ? ` - ${
                      profileData?.daily_quote_query?.quote?.quote_author ?? ""
                    }`
                  : ""}
              </h6>
            </div>
            {/* <div
              className={style.searchContainer}
              onClick={() => onOpenHandler("text")}
            >
              <p>{t("start_posting")}</p>
            </div> */}
          </div>

          <div className={style.posttype}>
            <div
              className={style.posticon}
              onClick={() => onOpenHandler("text")}
            >
              <img alt="not found" src="/images/edit-icon.svg" />
              <p>{t("text_")}</p>
            </div>
            {/* <div
              className={style.posticon}
              onClick={() => onOpenHandler("image")}
            >
              <img alt="not found" src="/images/img-post-icon.svg" />
              <p>{t("image-place")}</p>
            </div> */}

            <div
              className={style.posticon}
              onClick={() => onOpenHandler("poll")}
            >
              <img alt="not found" src="/images/shorts-icon.svg" />
              <p>{t("poll")}</p>
            </div>

            <div
              className={style.posticon}
              onClick={() => onOpenHandler("question")}
            >
              <img alt="not found" src="/images/document-icon.svg" />
              <p>{t("add_question")}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CreatePostSection;
