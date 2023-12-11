import React, { useEffect } from "react";
import style from "../../../Finance/Institute/Mainbody/Main.module.css";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Sidebar from "../InsLibrarySidebar/InsLibrarySidebar";
import { useOneInstituteDashboard } from "../../../hooks/dashboard/dashboard-api";
import { useGetLibraryDetail } from "../../../hooks/member_tab/library-api";
import InstituteLibraryTab from "./InstituteLibraryTab";
import AllBooks from "../../../MembersTab/staff/Mainbody/LibraryHead/LibraryFunctions/AllBooks/AllBooks";

function InsLibraryMain() {
  const params = useParams();
  const [searchParams] = useSearchParams();
  const getQuery = useLocation();

  const id = useSelector((state) => state.idChange.id);
  const { oneInstituteDashboard, oneInstituteDashboardRefetch } =
    useOneInstituteDashboard({
      id: id,
      skip: !id,
    });

  useEffect(() => {
    if (id) {
      oneInstituteDashboardRefetch();
    }
  }, [id, oneInstituteDashboardRefetch]);
  const { getLibraryDetail, getLibraryDetailRefetch } = useGetLibraryDetail({
    lid: oneInstituteDashboard?.institute?.library?.[0],
    skip: !oneInstituteDashboard?.institute?.library?.[0],
  });

  useEffect(() => {
    if (oneInstituteDashboard?.institute?.library?.[0]) {
      getLibraryDetailRefetch();
    }
  }, [oneInstituteDashboard?.institute?.library?.[0], getLibraryDetailRefetch]);
  return (
    <div className={style.main}>
      <Sidebar
        username={params.username}
        library={getLibraryDetail?.library}
        libraryRefetch={getLibraryDetailRefetch}
      />

      <div className={style.finance_container}>
        {searchParams?.get("n")
          ? null
          : (searchParams?.get("a") === "book" ||
              searchParams?.get("a") === "fund") && (
              <InstituteLibraryTab
                carryParentState={getQuery.state}
                library={getLibraryDetail?.library}
              />
            )}

        {searchParams?.get("a") === "book" && (
          <AllBooks
            carryParentState={getQuery.state}
            libraryId={getLibraryDetail?.library?._id}
            pageOpenAs="INSTITUTE"
          />
        )}
      </div>
    </div>
  );
}

export default InsLibraryMain;
