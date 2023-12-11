import React, { useEffect, useState } from "react";
import style from "./MembersTab.module.css";
import Navbar from "../../Dashboard/UserDashboard/Components/Navbar/Navbar";
import { useGetOneUserProfileQuery } from "../../services/qvipleAPI";
import { useStudentDesignationDataQuery } from "../../services/joining/joinApi";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import QLoader from "../../Loader/QLoader";

function MembersTab({ studentId }) {
  const navigate = useNavigate();
  const params = useParams();
  const id = useSelector((state) => state.idChange.id);
  const [showLoading, setShowLoading] = useState(true);
  // console.info(studentJoinData) ;

  const { data: profileData } = useGetOneUserProfileQuery(id);
  const {
    data: studentDesignationData,
    refetch: studentDesignationDataRefetch,
  } = useStudentDesignationDataQuery(studentId, { skip: !studentId });

  useEffect(() => {
    if (studentId) studentDesignationDataRefetch();
  }, [studentId, studentDesignationDataRefetch]);

  useEffect(() => {
    if (studentDesignationData?.student) {
      if (studentDesignationData?.student?.studentClass) {
        setShowLoading(false);
        navigate(`/q/${params.username}/member/student/class`, {
          state: {
            onClickValue: studentDesignationData?.student,
            sid: studentDesignationData?.student?._id,
          },
        });
      } else if (studentDesignationData?.student?.student_unit) {
        setShowLoading(false);
        navigate(`/q/${params.username}/member/student/hostel`, {
          state: {
            onClickValue: studentDesignationData?.student,
            sid: studentDesignationData?.student?._id,
            is_profile: "HOSTEL",
          },
        });
      } else {
        setShowLoading(false);
        navigate(`/q/${params.username}/member/status`, {
          state: {
            sid: studentDesignationData?.student?._id,
            openAs: "STUDENT",
          },
        });
      }
    }
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [studentDesignationData?.student]);
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
