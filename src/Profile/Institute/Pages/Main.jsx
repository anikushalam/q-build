import React, { useEffect } from "react";
import style from "./Main.module.css";
import MiddleBody from "./MiddleBody";
import { useDispatch, useSelector } from "react-redux";
import { idChangeAction } from "../../../redux/store/department-slice";
import { useState } from "react";
import { useOneInstituteProfile } from "../../../hooks/dashboard/dashboard-api";
import CustomSuspense from "../../../Custom/SuspenseLoading/CustomSuspense";
import SidebarBottom from "../../../Dashboard/InsDashboard/Components/Mainbody/Sidebar/components/SidebarBottom";
import InstituteProfileInfoTop from "./InstituteProfileInfoTop";
const Side = React.lazy(() => import("../../../Sidebar/Institute/Side"));
const Mainbody = React.lazy(() =>
  import("../../../Dashboard/InsDashboard/Components/Mainbody/Mainbody")
);
const JoiningForm = React.lazy(() =>
  import("../../../JoiningForm/JoiningForm")
);
function Main({ applicantUserName }) {
  const [apply, setApply] = useState(false);
  const [displayHeight1, setDisplayHeight1] = useState(0);
  const ids = useSelector((state) => state.idChange);
  const dispatch = useDispatch();
  const { oneInstituteProfile, oneInstituteProfileRefetch } =
    useOneInstituteProfile({
      data: {
        id: ids.searchProfile.id ? ids.searchProfile.id : ids?.id,
        type: ids.searchProfile.type,
      },
      skip: !ids.searchProfile.id ? !ids?.id : !ids.searchProfile.id,
    });

  const resultId = ids.searchProfile.id !== "" ? ids.searchProfile.id : ids?.id;

  useEffect(() => {
    if (ids.searchProfile.id || ids?.id) oneInstituteProfileRefetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.searchProfile.id, ids?.id]);

  useEffect(() => {
    if (
      oneInstituteProfile?.institute &&
      ids.searchProfile.type === "USERNAME"
    ) {
      dispatch(
        idChangeAction.searchId({
          id: oneInstituteProfile?.institute?._id,
          type: "ID",
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [oneInstituteProfile?.institute]);

  // console.info("this is mu [[sdfs", oneInstituteProfile);
  return (
    <>
      {ids?.repostQuestion?.repostStatus === "post" && apply ? (
        <div className={style.mainbody_form}>
          <CustomSuspense>
            <div className={style.sidebar}>
              <Side
                profileSide={oneInstituteProfile?.institute}
                resultId={resultId}
                name={oneInstituteProfile?.institute?.name}
                insPhotoId={oneInstituteProfile?.institute?.photoId}
                insProfilePhoto={
                  oneInstituteProfile?.institute?.insProfilePhoto
                }
                setApply={setApply}
                apply={apply}
              />
            </div>
            <JoiningForm
              searchId={ids.searchProfile.id}
              uid={ids?.id}
              applicantUserName={applicantUserName}
            />
          </CustomSuspense>
        </div>
      ) : (
        <div className={style.mainbody}>
          <InstituteProfileInfoTop
            institute={oneInstituteProfile?.institute}
            setApply={setApply}
          />
          <div className={style.mainbodysplit}>
            <div
              className={style.displayperson}
              style={{
                top: displayHeight1 ? `-${displayHeight1 - 230}px` : "500px",
                position: "sticky",
              }}
            >
              <SidebarBottom
                resultId={resultId}
                setDisplayHeight1={setDisplayHeight1}
              />
            </div>
            <div className={style.profilepost}>
              <MiddleBody profileBody={oneInstituteProfile?.institute} />
            </div>
          </div>
        </div>
      )}
      <CustomSuspense>
        {ids?.repostQuestion?.repostStatus === "repost" && <Mainbody />}
      </CustomSuspense>
    </>
  );
}

export default Main;
