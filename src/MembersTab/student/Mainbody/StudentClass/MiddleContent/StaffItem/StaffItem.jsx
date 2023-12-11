import React from "react";
import style from "../../StudentAbout/StudentAbout.module.css";
import { imageShowUrl } from "../../../../../../services/BaseUrl";

function StaffItem({
  member,
  status,
  sport,
  setIndexx,
  setActiveIndex,
  setSportId,
  classHeadTitle,
}) {
  return (
    <>
      {status === "about" ? (
        <div className={style.memberItem}>
          <div className={style.issuedBookItemMidleft}>
            <div className={style.imgcontainer}>
              <img
                src={
                  member?.subjectTeacherName?.photoId !== "1"
                    ? `${imageShowUrl}/${member?.subjectTeacherName?.staffProfilePhoto}`
                    : "/images/member_tab/class/default_avatar.svg"
                }
                alt=""
              />
            </div>
            <div className={style.issuedBookItemMidright}>
              <h6>
                {`${member?.subjectTeacherName?.staffFirstName} ${
                  member?.subjectTeacherName?.staffMiddleName
                    ? member?.subjectTeacherName?.staffMiddleName
                    : ""
                } ${member?.subjectTeacherName?.staffLastName}`}
              </h6>
              <p>{member?.subjectTitle}</p>
            </div>
          </div>
        </div>
      ) : status === "sport" ? (
        <div
          className={style.sportsMemberItem}
          onClick={() => {
            setIndexx("10");
            setActiveIndex(2);
            setSportId(sport?._id);
          }}
        >
          <div className={style.issuedBookItemMidleft}>
            <div className={style.imgcontainer}>
              <img
                src={
                  sport?.sportClassHead?.photoId !== "1" &&
                  sport?.sportClassHead?.staffProfilePhoto
                    ? `${imageShowUrl}/${sport?.sportClassHead?.staffProfilePhoto}`
                    : "/images/member_tab/class/default_avatar.svg"
                }
                alt=""
              />
            </div>
            <div className={style.issuedBookItemMidright}>
              <h6>{sport?.sportClassName}</h6>
              <p>
                {" "}
                {`${sport?.sportClassHead?.staffFirstName} ${
                  sport?.sportClassHead?.staffMiddleName
                    ? sport?.sportClassHead?.staffMiddleName
                    : ""
                } ${sport?.sportClassHead?.staffLastName}`}{" "}
              </p>
            </div>
          </div>
        </div>
      ) : status === "classTeacher" ? (
        <div className={`${style.memberItem} ${style.classTeacherItem}`}>
          <div className={style.issuedBookItemMidleft}>
            <div className={style.imgcontainer}>
              <img
                src={
                  member?.photoId !== "1"
                    ? `${imageShowUrl}/${member?.staffProfilePhoto}`
                    : "/images/member_tab/class/default_avatar.svg"
                }
                alt=""
              />
            </div>
            <div className={style.issuedBookItemMidright}>
              <h6>
                {`${member?.staffFirstName} ${
                  member?.staffMiddleName ? member?.staffMiddleName : ""
                } ${member?.staffLastName}`}
              </h6>
              <p>{classHeadTitle}</p>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default StaffItem;
