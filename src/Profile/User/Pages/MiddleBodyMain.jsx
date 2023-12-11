import React, { useState } from "react";
import { useSelector } from "react-redux";
import Posts from "../../../Dashboard/UserDashboard/Components/Mainbody/Stats/Posts/Posts";
import SearchPost from "../../../Dashboard/UserDashboard/Components/Mainbody/Stats/Posts/SearchPost";
import style from "./MiddleBodyMain.module.css";
import { useTranslation } from "react-i18next";

const MiddleBodyMain = ({ state }) => {
  const [saved, setSaved] = useState("my");
  const { t } = useTranslation();
  const ids = useSelector((state) => state.idChange);
  const savedPost = () => {
    if (ids?.searchProfile.id) {
    } else {
      setSaved("save");
      state(false);
    }
  };
  const myPost = () => {
    setSaved("my");
    state(false);
  };

  const tagPost = () => {
    if (ids?.searchProfile.id) {
    } else {
      setSaved("tag");
      state(false);
    }
  };
  return (
    // <div className={style.container}>

    //   <div className={style.header}>
    //     <div
    //       className={saved === "my" ? style.headerTextActive : style.headerText}
    //       onClick={myPost}
    //     >
    //       <p
    //         className={
    //           saved === "my"
    //             ? `${style.headerLink} ${style.headerLinkActive}`
    //             : style.headerLink
    //         }
    //       >
    //         {t("posts")}
    //       </p>
    //     </div>
    //     <div
    //       className={
    //         saved === "tag" ? style.headerTextActive : style.headerText
    //       }
    //       onClick={tagPost}
    //     >
    //       <p
    //         className={
    //           saved === "tag"
    //             ? `${style.headerLink} ${style.headerLinkActive}`
    //             : style.headerLink
    //         }
    //       >
    //         {t("tag_post")}
    //       </p>
    //     </div>
    //     {ids?.searchProfile.id ? (
    //       ""
    //     ) : (
    //       <div
    //         className={
    //           saved === "save" ? style.headerTextActive : style.headerText
    //         }
    //         onClick={savedPost}
    //       >
    //         <p
    //           className={
    //             saved === "save"
    //               ? `${style.headerLink} ${style.headerLinkActive}`
    //               : style.headerLink
    //           }
    //         >
    //           {t("saved")}
    //         </p>
    //       </div>
    //     )}
    //   </div>
    //   {saved === "my" ? (
    //     <p
    //       className={
    //         ids?.searchProfile.id
    //           ? `${style.headerLinkActiveBorder} ${style.headerLinkSearch}`
    //           : `${style.headerLinkActiveBorder}`
    //       }
    //     ></p>
    //   ) : saved === "tag" ? (
    //     <p
    //       className={
    //         ids?.searchProfile.id
    //           ? `${style.headerLinkActiveBorder2} ${style.headerLinkSearch1}`
    //           : `${style.headerLinkActiveBorder2}`
    //       }
    //     ></p>
    //   ) : (
    //     <p className={style.headerLinkActiveBorder1}></p>
    //   )}
    //   <p className={style.headerLinkBottomBorder}></p>

    //   {ids?.searchProfile.id ? (
    //     <SearchPost profilePost={true} />
    //   ) : (
    //     <Posts profilePost={true} profileSavedPost={saved} />
    //   )}
    // </div>

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
            Posts
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
            Tag Posts
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
              Saved
            </p>
          </div>
        )}
      </div>

      {ids?.searchProfile.id ? (
        <SearchPost profilePost={true} />
      ) : (
        <Posts profilePost={true} profileSavedPost={saved} />
      )}
    </div>
  );
};

export default MiddleBodyMain;
