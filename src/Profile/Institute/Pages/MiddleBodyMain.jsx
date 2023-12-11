import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import CustomSuspenseGif from "../../../Custom/SuspenseLoading/CustomSuspenseGif";
import style from "./MiddleBodyMain.module.css";
const Posts = React.lazy(() =>
  import(
    "../../../Dashboard/InsDashboard/Components/Mainbody/Stats/Posts/Posts"
  )
);
const SearchPost = React.lazy(() =>
  import(
    "../../../Dashboard/InsDashboard/Components/Mainbody/Stats/Posts/SearchPost"
  )
);
const MiddleBodyMain = () => {
  const { t } = useTranslation();
  const [saved, setSaved] = useState("my");
  const ids = useSelector((state) => state.idChange);
  const savedPost = () => {
    if (ids?.searchProfile.id) {
    } else {
      setSaved("save");
    }
  };
  const myPost = () => {
    setSaved("my");
  };

  const tagPost = () => {
    // if (ids?.searchProfile.id) {
    // } else {
    setSaved("tag");
    // }
  };
  return (
    <div className={style.container}>
      <div className={style.header}>
        <div
          className={saved === "my" ? style.headerTextActive : style.headerText}
          onClick={myPost}
        >
          <p
            className={
              saved === "my"
                ? `${style.headerLink} ${style.headerLinkActive}`
                : style.headerLink
            }
          >
            {t("posts")}
          </p>
        </div>
        <div
          className={
            saved === "tag" ? style.headerTextActive : style.headerText
          }
          onClick={tagPost}
        >
          <p
            className={
              saved === "tag"
                ? `${style.headerLink} ${style.headerLinkActive}`
                : style.headerLink
            }
          >
            {t("tag_posts")}
          </p>
        </div>
        {ids?.searchProfile.id ? (
          ""
        ) : (
          <div
            className={
              saved === "save" ? style.headerTextActive : style.headerText
            }
            onClick={savedPost}
          >
            <p
              className={
                saved === "save"
                  ? `${style.headerLink} ${style.headerLinkActive}`
                  : style.headerLink
              }
            >
              {t("saved")}
            </p>
          </div>
        )}
      </div>

      <CustomSuspenseGif>
        {ids?.searchProfile.id ? (
          <SearchPost profilePost={true} />
        ) : (
          <Posts profilePost={true} profileSavedPost={saved} />
        )}
      </CustomSuspenseGif>
    </div>
  );
};

export default MiddleBodyMain;
