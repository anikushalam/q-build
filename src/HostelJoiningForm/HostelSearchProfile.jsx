import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useLocation, useParams } from "react-router";
import { Link } from "react-router-dom";
import Navbar from "../Dashboard/UserDashboard/Components/Navbar/Navbar";
import { useHostelDetail } from "../hooks/member_tab/hostel-api";
import ProfileCover from "../Profile/Institute/components/ProfileCover";
import { useScrollbar } from "../Scroll/use-scroll";
import { imageShowUrl } from "../services/BaseUrl";
import { useGetOneUserProfileQuery } from "../services/qvipleAPI";
import BorderBottom from "../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import style from "./HostelJoining.module.css";
import HostelJoiningForm from "./HostelJoiningForm";
import HostelSearchTab from "./HostelSearchTab";
import HostelUnitInfo from "../MembersTab/staff/Mainbody/Hostel/HostelUnit/HostelUnitInfo/HostelUnitInfo";
import UnitRoomInfo from "../MembersTab/staff/Mainbody/Hostel/HostelUnit/HostelUnitInfo/UnitRoomInfo/UnitRoomInfo";

const HostelSearchProfile = () => {
  const { t } = useTranslation();
  const getQuery = useLocation();
  const params = useParams();
  const { showScrollbar } = useScrollbar();
  const ids = useSelector((state) => state.idChange);
  const { data: profileData, refetch: profileDataRefetch } =
    useGetOneUserProfileQuery(ids?.id, {
      skip: !ids?.id,
    });
  // const params = useParams();
  const { hostelDetail, hostelDetailRefetch } = useHostelDetail({
    data: {
      hid: getQuery.state?.hid,
      mod_id: "",
    },
    skip: !getQuery.state?.hid,
  });

  useEffect(() => {
    if (getQuery.state?.hid) hostelDetailRefetch();
    showScrollbar();
  }, [getQuery.state?.hid, hostelDetailRefetch]);
  useEffect(() => {
    if (ids?.id) profileDataRefetch();
  }, [ids?.id, profileDataRefetch]);
  return (
    <>
      <div className={style.navbar}>
        <Navbar
          status="profile"
          profileData={profileData?.user}
          username={profileData?.user?.username}
          name={profileData?.user?.userLegalName}
          photoId={profileData?.user?.photoId}
          profilePhoto={profileData?.user?.profilePhoto}
        />
      </div>
      <div className={style.mainbody}>
        {getQuery?.search?.substring(3) !== "admission" &&
          getQuery?.search?.substring(3) !== "unit&n=room" &&
          getQuery?.search?.substring(3) !== "unit&n=menu&n=room" && (
            <div className={style.profilehead}>
              <div className={style.profileheadTop}>
                <ProfileCover
                  dynamicImage={
                    hostelDetail?.one_hostel?.hostel_photo
                      ? `${imageShowUrl}/${hostelDetail?.one_hostel?.hostel_photo}`
                      : "/images/profileAndCover/hostel-cover.svg"
                  }
                  openAs="SEARCH_HOSTEL"
                />
              </div>
              <div className={style.profileheadBottom}>
                <div
                  className={style.profileheadBottomtop}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <h3 className={style.insname}>
                      {hostelDetail?.one_hostel?.institute?.insName}{" "}
                      {`(Hostel)`}
                    </h3>
                    <p className={style.username}>{`${
                      hostelDetail?.one_hostel?.hostel_manager
                        ?.staffFirstName ?? ""
                    } ${
                      hostelDetail?.one_hostel?.hostel_manager
                        ?.staffMiddleName ?? ""
                    } ${
                      hostelDetail?.one_hostel?.hostel_manager?.staffLastName ??
                      ""
                    }`}</p>
                  </div>
                </div>
                <div className={style.profileheadBottomcounts}>
                  <div className={style.bottomOneItem}>
                    <p className={style.bottomCount}>
                      {hostelDetail?.one_hostel?.bed_count}
                    </p>
                    <p className={style.bottomText}>{t("hostel_beds")}</p>
                  </div>

                  <div className={style.bottomOneItem}>
                    <p className={style.bottomCount}>
                      {hostelDetail?.one_hostel?.room_count}
                    </p>
                    <p className={style.bottomText}>{t("rooms")}</p>
                  </div>
                </div>
                <BorderBottom
                  customStyle={{
                    width: "100%",
                  }}
                />
                <Link
                  to={`/q/${params?.username}/hostel/profile?a=admission`}
                  state={{
                    ...getQuery.state,
                  }}
                >
                  <h6
                    className={style.profileedit}
                    style={{ fontSize: "1rem" }}
                  >
                    {t("take_admission")}
                  </h6>
                </Link>

                <HostelSearchTab
                  carryParentState={getQuery.state}
                  hostel={hostelDetail?.one_hostel}
                />
              </div>
            </div>
          )}
        {getQuery?.search?.substring(3) === "admission" && (
          <HostelJoiningForm
            instituteId={hostelDetail?.one_hostel?.institute?._id}
            hostelId={hostelDetail?.one_hostel?._id}
          />
        )}

        {getQuery?.search?.substring(3) === "unit&n=menu&n=room" && (
          <HostelUnitInfo
            carryParentState={getQuery.state}
            viewAs="HOSTEL_SEARCH"
          />
        )}
        {getQuery?.search?.substring(3) === "unit&n=room" && (
          <UnitRoomInfo
            carryParentState={getQuery.state}
            viewAs="HOSTEL_SEARCH"
          />
        )}
      </div>
    </>
  );
};

export default HostelSearchProfile;
