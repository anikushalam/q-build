import React, { useEffect } from "react";
import style from "../Stats/Stats.module.css";
import CreatePostSection from "../Stats/CreatePostSection/CreatePostSection";
import Posts from "../Stats/Posts/Posts";
import { useSelector } from "react-redux";
import { useOneInstituteDashboard } from "../../../../../hooks/dashboard/dashboard-api";

function Stats({ setPostType, onPostTypeChange }) {
  const id = useSelector((state) => state.idChange.id);
  const { oneInstituteDashboard, oneInstituteDashboardRefetch } =
    useOneInstituteDashboard({
      id: id,
      skip: !id,
    });
  useEffect(() => {
    if (id) oneInstituteDashboardRefetch();
  }, [id, oneInstituteDashboardRefetch]);

  return (
    <div className={style.stati}>
      <CreatePostSection
        profileData={oneInstituteDashboard?.institute}
        setPostType={setPostType}
        onPostTypeChange={onPostTypeChange}
      />
      <Posts
        profilePost={false}
        profileData={oneInstituteDashboard?.institute}
      />
    </div>
  );
}

export default Stats;
