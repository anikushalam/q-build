import React, { useEffect, useState } from "react";
import style from "./MembersTab.module.css";
import Navbar from "../../Dashboard/UserDashboard/Components/Navbar/Navbar";
import { useGetOneUserProfileQuery } from "../../services/qvipleAPI";
import { useStaffDesignationDataQuery } from "../../services/joining/joinApi";
import { useDesignationSelect } from "./configuration/use-designation-select";
import { useSelector } from "react-redux";
import QLoader from "../../Loader/QLoader";

function MembersTab({ staffId }) {
  const id = useSelector((state) => state.idChange.id);
  const [showLoading, setShowLoading] = useState(true);
  const { data: profileData } = useGetOneUserProfileQuery(id);
  const { data: staffDesignationData, refetch: staffDesignationDataRefetch } =
    useStaffDesignationDataQuery(staffId, { skip: !staffId });
  const { onDesignationAutoSelect } = useDesignationSelect();
  useEffect(() => {
    if (staffId) staffDesignationDataRefetch();
  }, [staffId, staffDesignationDataRefetch]);

  useEffect(() => {
    if (staffDesignationData?.staff) {
      onDesignationAutoSelect(staffDesignationData?.staff);
      setShowLoading(false);
    }
  }, [staffDesignationData?.staff]);
  // console.info("this is designation lis", staffDesignationData?.staff);

  return (
    <div className={style.insChat}>
      <div className={style.navbar}>
        <Navbar
          status="members"
          profileData={profileData?.user}
          username={profileData?.user?.username}
          name={profileData?.user?.userLegalName}
          photoId={profileData?.user?.photoId}
          profilePhoto={profileData?.user?.profilePhoto}
        />
      </div>
      {showLoading && <QLoader />}

      {/* <Mainbody swichDataId={swichDataId} setSwitchDataId={setSwitchDataId} /> */}
    </div>
  );
}

export default MembersTab;
