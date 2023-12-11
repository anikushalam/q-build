import React from "react";
import style from "./AlumniCellManager.module.css";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import AlumniProfile from "./AlumniProfile/AlumniProfile";
import { useGetAlumniDetail } from "../../../../hooks/member_tab/alumni-api";
import AlumniRegList from "./AlumniRegList";
import ProminentAlumni from "./ProminentAlumni/ProminentAlumni";
import AlumniFeedback from "./AlumniFeedback/AlumniFeedback";

function AlumniCellManager({ onclickVal, carryParentState }) {
  const author = useSelector((state) => state.alumniChange);
  const getQuery = useLocation();
  const { getAlumniDetail, getAlumniDetailRefetch } = useGetAlumniDetail({
    aid: author?.aid,
    skip: !author?.aid,
  });

  return (
    <div className={style.departmenthead}>
      {(!getQuery.search || getQuery.search === "") && (
        <AlumniProfile
          carryParentState={carryParentState}
          alumni={getAlumniDetail?.one_alumini}
        />
      )}

      {getQuery.search &&
        getQuery.search?.substring(3) === "register&alumni" && (
          <AlumniRegList
            carryParentState={carryParentState}
            getAlumniDetailRefetch={getAlumniDetailRefetch}
          />
        )}

      {getQuery.search && getQuery.search?.substring(3) === "prominent" && (
        <ProminentAlumni
          carryParentState={carryParentState}
          totalAlumni={
            getAlumniDetail?.one_alumini?.certifcate_given_count +
            getAlumniDetail?.one_alumini?.register_form_count
          }
        />
      )}

      {getQuery.search && getQuery.search?.substring(3) === "feedback" && (
        <AlumniFeedback carryParentState={carryParentState} />
      )}
    </div>
  );
}

export default AlumniCellManager;
