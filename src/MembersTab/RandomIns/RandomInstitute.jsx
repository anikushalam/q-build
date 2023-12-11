import React, { useState } from "react";
import style from "./RandomInstitute.module.css";
import { useSelector } from "react-redux";
import Side from "../../Sidebar/Institute/Side";
import Middle from "../../Profile/Institute/Pages/Middle";
import JoiningForm from "../../JoiningForm/JoiningForm";
import { useOneInstituteProfile } from "../../hooks/dashboard/dashboard-api";

function RandomInstitute({ swichDataId, username }) {
  const ids = useSelector((state) => state.idChange);
  const [apply, setApply] = useState(false);
  const { oneInstituteProfile, oneInstituteProfileRefetch } =
    useOneInstituteProfile({
      data: {
        id: swichDataId,
        type: "ID",
      },
      skip: !swichDataId,
    });
  React.useEffect(() => {
    if (swichDataId) oneInstituteProfileRefetch();
  }, [swichDataId, oneInstituteProfileRefetch]);
  return (
    <div className={style.mainbody}>
      <div className={style.sidebar}>
        <Side
          profileSide={oneInstituteProfile?.institute}
          resultId={swichDataId}
          insName={oneInstituteProfile?.institute?.insName}
          name={oneInstituteProfile?.institute?.name}
          insPhotoId={oneInstituteProfile?.institute?.photoId}
          insProfilePhoto={oneInstituteProfile?.institute?.insProfilePhoto}
          setApply={setApply}
          apply={apply}
        />
      </div>
      {apply ? (
        <JoiningForm
          searchId={swichDataId}
          uid={ids?.id}
          applicantUserName={username}
        />
      ) : (
        <Middle
          profileData={oneInstituteProfile?.institute}
          resultId={swichDataId}
        />
      )}
    </div>
  );
}

export default RandomInstitute;
