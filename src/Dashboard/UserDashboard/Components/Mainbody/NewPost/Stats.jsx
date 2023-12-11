import React from "react";
import style from "../Stats/Stats.module.css";
import CreatePostSection from "../Stats/CreatePostSection/CreatePostSection";
import Posts from "../Stats/Posts/Posts";
import StudentInternalFeesCard from "../../../../../MembersTab/student/Mainbody/StudentClass/StudentAllFeesData/StudentInternalFeesCard";

function Stats({ authorData, onValueHandler, onRefetchUser }) {
  return (
    <div className={style.stati}>
      <CreatePostSection
        profileData={authorData && authorData}
        onValueHandler={onValueHandler}
        onRefetchUser={onRefetchUser}
      />
      {authorData?.username === "demo_user" && (
        <div className={style.student_internal_card}>
          <StudentInternalFeesCard is_paid="Not Paid" amount={10} is_static />
        </div>
      )}
      <Posts profilePost={false} profileData={authorData && authorData} />
    </div>
  );
}

export default Stats;
