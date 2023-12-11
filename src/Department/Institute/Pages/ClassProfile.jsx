import React, { useEffect } from "react";
import Navbar from "../../../Dashboard/InsDashboard/Components/Navbar/Navbar";
import style from "./ClassProfile.module.css";
import ClassProfileMain from "./ClassProfileMain";
import {
  useOneDepartmentClassProfile,
  useOneViewDepartment,
} from "../Components/DepartmentApi/depart-api";
import { useSelector } from "react-redux";
import DepartmentSidebar from "../../../Sidebar/Institute/Department/DepartmentSidebar";
import ClassHeader from "./ClassHeader";
import { useSearchParams } from "react-router-dom";
import BlueLineBar from "../../../Sidebar/BlueLineBar";
import InstituteClassAcademic from "./InstituteClassAcademic";

const ClassProfile = () => {
  const ids = useSelector((state) => state.idChange);
  const [searchParams] = useSearchParams();
  const { oneClassProfile, oneClassProfileRefetch } =
    useOneDepartmentClassProfile({ cid: ids?.cid, skip: !ids?.cid });
  const { oneDepartment, oneDepartmentRefetch } = useOneViewDepartment({
    did: ids?.did,
    skip: !ids?.did,
  });
  useEffect(() => {
    if (ids?.cid) {
      oneDepartmentRefetch();
      oneClassProfileRefetch();
    }
  }, [ids?.cid, ids?.did, oneDepartmentRefetch, oneClassProfileRefetch]);
  // console.info("this is ids", ids);

  return (
    <div className={style.bgContainer}>
      <div className={style.navbar}>
        <Navbar status="home" />
      </div>

      <div className={style.editContainer}>
        <DepartmentSidebar
          department={oneDepartment?.department}
          username={oneDepartment?.department?.dName}
          activeUrlValue="viewdept"
          onReftech={oneDepartmentRefetch}
        />
        <div>
          {searchParams.get("type") === "academic" ? (
            <>
              <BlueLineBar />
              <InstituteClassAcademic />
            </>
          ) : (
            <>
              <ClassHeader
                classes={oneClassProfile?.classes}
                bid={oneClassProfile?.classes?.batch?._id}
              />
              <ClassProfileMain
                id={ids?.id}
                did={oneClassProfile?.classes?.department?._id}
                bid={oneClassProfile?.classes?.batch?._id}
                cid={oneClassProfile?.classes?._id}
                className={`${oneDepartment?.department?.dName}-${oneClassProfile?.classes?.batch?.batchName}-${oneClassProfile?.classes?.className}-${oneClassProfile?.classes?.classTitle}`}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClassProfile;
