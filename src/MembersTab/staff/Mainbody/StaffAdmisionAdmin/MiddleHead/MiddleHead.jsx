import React from "react";
import { imageShowUrl } from "../../../../../services/BaseUrl";
// import { imageShowUrl } from "../../../../../../services/BaseUrl";
import ClassCover from "./ClassCover";
import ClassPhoto from "./ClassPhoto";
import style from "./DepartmentMiddleHead.module.css";
import { useTranslation } from "react-i18next";

const DepartmentMiddleHead = ({ headData }) => {
  const { t } = useTranslation();
  return (
    <div className={style.main}>
      <ClassCover
        coverKey={headData?.cover}
        coverId={headData?.coverId}
        cid={headData?._id}
        parentStyle={style.imageJustify2}
      />
      <div className={style.deptPhoto}>
        <ClassPhoto
          photoKey={headData?.photo}
          photoId={headData?.photoId}
          cid={headData?._id}
          // parentStyle={style.imageJustify2}
        />
      </div>

      <div className={style.textContainer}>
        <div className={style.textTop}>
          <h6>{t("admission_admin")}</h6>
        </div>
        <div className={style.textBottom}>
          <div className={style.textBottomitem}>
            <h6>{headData?.queryCount}</h6>
            <p>{t("enqueries")}</p>
          </div>

          <div className={style.textBottomitem}>
            <h6>{headData?.newAppCount}</h6>
            <p>{t("ongoing")}</p>
          </div>
        </div>
      </div>
      {/* <div className={style.imageJustify}>
        <img
          src="/images/profile-white.svg"
          alt=""
          style={{ height: "100%" }}
        />
        <img
          src="/images/profile-blue.svg"
          alt=""
          className={style.imageJustify1}
        />
        <div className={style.nameAndAbout}>
          <div className={style.nameAndAboutTop}>
            <ClassPhoto
              photoKey={headData?.photo}
              photoId={headData?.photoId}
              cid={headData?._id}
              // parentStyle={style.imageJustify2}
            />
            <div className={style.nameAndAboutText}>
              <p className={style.name}></p>
              <p className={style.name}></p>
            </div>
          </div>
          <div className={style.bottomDivRight}>
            <div className={style.bottomDivRightLeft}>
              <div className={style.bottomOneItem}>
                <p className={style.bottomCount}>{headData?.queryCount}</p>

                <p className={style.bottomText}>Inquiries</p>
              </div>
              <div className={style.bottomOneItem}>
                <p className={style.bottomCount}>{headData?.newAppCount}</p>

                <p className={style.bottomText}>Ongoing</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <ClassCover
        coverKey={headData?.cover}
        coverId={headData?.coverId}
        cid={headData?._id}
        parentStyle={style.imageJustify2}
      /> */}
    </div>
  );
};

export default DepartmentMiddleHead;

{
  /* <div className={style.bottomDivRightRight}>
              <img src={
                headData?.admissionAdminHead?.photoId !== '1'
                ? `${imageShowUrl}/${headData?.admissionAdminHead.staffProfilePhoto}`
                : '/images/demo_users/user1.svg'
              } 
              alt="Staff Admission Admin Avatar"
              />
              <div className={style.bottomDivRightText}>
                <h6>{`${headData?.admissionAdminHead.staffFirstName} ${headData?.admissionAdminHead.staffMiddleName ? headData?.admissionAdminHead.staffMiddleName : ''} ${headData?.admissionAdminHead.staffLastName}`}</h6>
                <p>Admission Admin</p>
              </div>
            </div> */
}
