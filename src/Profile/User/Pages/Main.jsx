import React, { useEffect } from "react";
import style from "./Main.module.css";
import Sidebar from "../../../Dashboard/UserDashboard/Components/Mainbody/Sidebar/Sidebar";
import Middle from "./Middle";
import { useSelector, useDispatch } from "react-redux";
import {
  useGetOneUserProfileQuery,
  useGetOneUserProfileUsernameQuery,
} from "../../../services/qvipleAPI";
import Mainbody from "../../../Dashboard/UserDashboard/Components/Mainbody/Mainbody";
import { idChangeAction } from "../../../redux/store/department-slice";
function Main() {
  const ids = useSelector((state) => state.idChange);
  const dispatch = useDispatch();

  const { data: profileData, refetch } = useGetOneUserProfileQuery(
    ids?.searchProfile?.id ? ids?.searchProfile?.id : ids?.id,
    { skip: ids.searchProfile.type === "USERNAME" }
  );

  const { data: profileDataUsername, refetch: refetchUsername } =
    useGetOneUserProfileUsernameQuery(ids?.searchProfile?.id, {
      skip: ids.searchProfile.type === "ID",
    });
  useEffect(() => {
    if (ids.searchProfile.type === "USERNAME") refetchUsername();
    else if (ids.searchProfile.type === "ID") refetch();
  }, [ids.searchProfile.type, ids?.searchProfile?.id]);

  // console.info("This is search handelr", ids.searchProfile.id);
  useEffect(() => {
    if (profileDataUsername?.user && ids.searchProfile.type === "USERNAME") {
      dispatch(
        idChangeAction.searchId({
          id: profileDataUsername?.user?._id,
          type: "ID",
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profileDataUsername?.user]);
  
  return (
    <>
      {profileData && ids?.repostQuestion?.repostStatus === "post" && (
        <div className={style.mainbody}>
          <div className={style.sidebar}>
            <Sidebar status="profile" userData={profileData.user} />
          </div>
          <Middle
            profileData={profileData.user}
            upVote={profileData?.upVote || 0}
          />
        </div>
      )}
      {profileData && ids?.repostQuestion?.repostStatus === "repost" && (
        <Mainbody profileData={profileData} />
      )}
    </>
  );
}

export default Main;
