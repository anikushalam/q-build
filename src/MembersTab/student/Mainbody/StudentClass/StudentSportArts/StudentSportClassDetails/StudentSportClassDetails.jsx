import React, { useState } from "react";
import style from "./StudentSportClassDetails.module.css";
import { useTranslation } from "react-i18next";
import {
  useGetSportTeamStudent,
  useGetSportTeamDetailsStudent,
} from "../../../../../../hooks/sports/sports-api";
import { imageShowUrl } from "../../../../../../services/BaseUrl";
import MemberItem from "./MemberItem";
import { useEffect } from "react";

function StudentSportClassDetails({
  sportId,
  studentId,
  setIndexx,
  setActiveIndex,
  setTabIndex,
}) {
  const { t } = useTranslation();

  //   ----------------hoto-----------------------------

  // const [photoURL, setPhotoURL] = useState("");
  // const [file, setFile] = useState("");
  // const [openCrop, setOpenCrop] = useState(false);
  // const [upload, setUpload] = useState(false);
  // const [profilePhoto, setProfilePhoto] = useState("");

  // const profileChange = (e) => {
  //   const image = URL.createObjectURL(e.target.files[0]);
  //   setFile(e.target.files[0]);
  //   setProfilePhoto(image);
  //   setPhotoURL(image);
  //   setOpenCrop(true);
  // };

  // ------------------------------------------
  const [timeeOut, setTimeeOut] = useState(false);

  const { getSportTeamStudent, getSportTeamStudentRefetch } =
    useGetSportTeamStudent({
      data: {
        cid: sportId,
        sid: studentId,
      },
      skip: !studentId && !sportId,
    });

  const { getSportTeamDetailsStudent, getSportTeamDetailsStudentRefetch } =
    useGetSportTeamDetailsStudent({
      data: {
        tid: getSportTeamStudent?.team?._id,
      },
      skip: !studentId && !getSportTeamStudent?.team?._id,
    });

  useEffect(() => {
    setTimeout(() => {
      setTimeeOut(!timeeOut);
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const captainArr = getSportTeamStudent?.team?.memberArray?.filter((item) => {
    return item?.asCaptain === "Captain";
  });

  //   ---------------------------------------------
  return (
    // <div className={style.detailsvontainer}>
    //   {getSportTeamStudent?.team?.name ? (
    //     <div className={style.teamDetails}>
    //       <div className={style.teamDetailstop}>
    //         <div
    //           className={style.goback}
    //           onClick={() => {
    //             setActiveIndex(0);
    //             setIndexx("1");
    //             setTabIndex(2);
    //           }}
    //         >
    //           <img src="/images/back.svg" alt="" />
    //           <p>{t("go_back")}</p>
    //         </div>
    //       </div>

    //       <div className={style.teamDetailsBody}>
    //         <div className={style.teamDetailsBodytop}>
    //           {getSportTeamStudent?.team?.name}
    //         </div>
    //         <div className={style.teamDetailsBodyMid}>
    //           <div className={style.teamDetailsBodyMidLeft}>
    //             <img src="/images/demoImg2.jpg" alt="" />
    //           </div>
    //           <div className={style.teamDetailsBodyMidright}>
    //             <h6 className={style.created}>
    //               {t("created_on")}{" "}
    //               <span className={style.createdspan}>Monday, 22 Mar 2022</span>
    //             </h6>

    //             <h6 className={style.created}>
    //               {t("team_members")}{" "}
    //               <span className={style.membercountspan}>
    //                 {getSportTeamStudent?.team?.memberCount}
    //               </span>
    //             </h6>

    //             {captainArr && captainArr?.length > 0 && (
    //               <div className={style.memberItem}>
    //                 <div className={style.issuedBookItemMidleft}>
    //                   <div className={style.imgcontainer}>
    //                     <img
    //                       src={
    //                         captainArr[0]?.student?.photoId !== "1" &&
    //                         captainArr[0]?.student?.studentProfilePhoto
    //                           ? `${imageShowUrl}/${captainArr[0]?.student?.studentProfilePhoto}`
    //                           : "/images/member_tab/class/default_avatar.svg"
    //                       }
    //                       alt=""
    //                     />
    //                   </div>
    //                   <div className={style.issuedBookItemMidright}>
    //                     <h6>
    //                       {`${captainArr[0]?.student?.studentFirstName} ${
    //                         captainArr[0]?.student?.studentMiddleName
    //                           ? captainArr[0]?.student?.studentMiddleName
    //                           : ""
    //                       } ${captainArr[0]?.student?.studentLastName}`}{" "}
    //                       <span className={style.captainspan}>
    //                         {t("captain")}
    //                       </span>
    //                     </h6>
    //                     <p>
    //                       {t("gr_no")} {captainArr[0]?.student?.studentGRNO}
    //                     </p>
    //                   </div>
    //                 </div>
    //               </div>
    //             )}
    //           </div>
    //         </div>
    //         <div className={style.teamDetailsBodyBottom}>
    //           <p className={style.memberstext}>{t("team_members")}</p>
    //           {getSportTeamStudent?.team?.memberArray?.map((member, index) => (
    //             <div key={index}>
    //               <MemberItem member={member} />
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //     </div>
    //   ) : !getSportTeamStudent?.team?.name && timeeOut === true ? (
    //     <div className={style.noData}>
    //       <img src="/images/nodata.jpg" alt="" />
    //     </div>
    //   ) : (
    //     <div className={style.loader}>
    //       <img src="/images/loader-transperant.svg" alt="" />
    //     </div>
    //   )}
    // </div>

    <div className={style.teamDetails}>
      <div className={style.teamDetailstop}>
        <div
          className={style.goback}
          onClick={() => {
            setActiveIndex(0);
            setIndexx("1");
            setTabIndex(2);
          }}
        >
          <img src="/images/back.svg" alt="" />
          <p>{t("go_back")}</p>
        </div>
      </div>

      {getSportTeamStudent?.team?.name ? (
        <div className={style.teamDetailsBody}>
          <div className={style.teamDetailsBodytop}>
            {getSportTeamStudent?.team?.name}
          </div>
          <div className={style.teamDetailsBodyMid}>
            <div className={style.teamDetailsBodyMidLeft}>
              <img
                src={
                  getSportTeamDetailsStudent?.team?.sportTeamPhoto
                    ? `${imageShowUrl}/${getSportTeamDetailsStudent?.team?.sportTeamPhoto}`
                    : "/images/demoImg2.jpg"
                }
                alt=""
              />
            </div>
            <div className={style.teamDetailsBodyMidright}>
              <h6 className={style.created}>
                {t("created_on")}{" "}
                <span className={style.createdspan}>Monday, 22 Mar 2022</span>
              </h6>

              <h6 className={style.created}>
                {t("team_members")}{" "}
                <span className={style.membercountspan}>
                  {getSportTeamStudent?.team?.memberCount}
                </span>
              </h6>

              {captainArr && captainArr?.length > 0 && (
                <div className={style.memberItem}>
                  <div className={style.issuedBookItemMidleft}>
                    <div className={style.imgcontainer}>
                      <img
                        src={
                          captainArr[0]?.student?.photoId !== "1" &&
                          captainArr[0]?.student?.studentProfilePhoto
                            ? `${imageShowUrl}/${captainArr[0]?.student?.studentProfilePhoto}`
                            : "/images/member_tab/class/default_avatar.svg"
                        }
                        alt=""
                      />
                    </div>
                    <div className={style.issuedBookItemMidright}>
                      <h6>
                        {`${captainArr[0]?.student?.studentFirstName} ${
                          captainArr[0]?.student?.studentMiddleName
                            ? captainArr[0]?.student?.studentMiddleName
                            : ""
                        } ${captainArr[0]?.student?.studentLastName}`}{" "}
                        <span className={style.captainspan}>
                          {t("captain")}
                        </span>
                      </h6>
                      <p>
                        {t("gr_no")} {captainArr[0]?.student?.studentGRNO}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className={style.teamDetailsBodyBottom}>
            <p className={style.memberstext}>{t("team_members")}</p>
            {getSportTeamStudent?.team?.memberArray?.map((member, index) => (
              <div key={index}>
                <MemberItem member={member} />
              </div>
            ))}
          </div>
        </div>
      ) : !getSportTeamStudent?.team?.name && timeeOut === true ? (
        <div className={style.noData}>
          <img src="/images/nodata.jpg" alt="" />
        </div>
      ) : (
        <div className={style.loader}>
          <img src="/images/loader-transperant.svg" alt="" />
        </div>
      )}
    </div>

    // <div className={style.detailsvontainer}>
    //   {getSportTeamStudent?.team?.name ? (

    //   ) : !getSportTeamStudent?.team?.name && timeeOut === true ? (
    //     <div className={style.noData}>
    //       <img src="/images/nodata.jpg" alt="" />
    //     </div>
    //   ) : (
    //     <div className={style.loader}>
    //       <img src="/images/loader-transperant.svg" alt="" />
    //     </div>
    //   )}
    // </div>
  );
}

export default StudentSportClassDetails;
