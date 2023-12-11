import React, { useEffect, useState } from "react";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { useSelector } from "react-redux";
import StaffExplore from "./StaffExplore/StaffExplore";
import StaffFunctionRow from "./StaffFunctionRow/StaffFunctionRow";
import StaffTable from "./StaffTable/StaffTable";
import CustomSuspense from "../../../../Custom/SuspenseLoading/CustomSuspense";
import { useApproveStaffList } from "../../../../hooks/institute/institute-staff-student-api";
import { useOneInstituteDashboard } from "../../../../hooks/dashboard/dashboard-api";
const StaffProfile = React.lazy(() => import("./StaffAProfile/StaffProfile"));
const StaffForm = React.lazy(() => import("./StaffForm/StaffForm"));
const StaffRequest = React.lazy(() => import("./StaffRequest/StaffRequest"));
const Attendence = React.lazy(() => import("../../../Attendence/Attendence"));
const LeavesTransfer = React.lazy(() =>
  import("./StaffLeavesandTransfer/LeavesTransfer")
);
const Complaints = React.lazy(() =>
  import("../MainContent/StaffComplaints/Complaints")
);
const MainContent = () => {
  const ids = useSelector((state) => state.idChange);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const params = useParams();
  const [staffFull, setStaffFull] = useState(true);
  const [staffHalf, setStaffHalf] = useState(false);
  const [staffId, setStaffId] = useState("");
  const [allStaff, setAllStaff] = useState([]);
  const [state, setState] = useState(true);
  const [page, setPage] = useState(1);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [search, setSearch] = useState("");

  //for direct open profile of staff from search page

  const location = useLocation();
  const { oneInstituteDashboard, oneInstituteDashboardRefetch } =
    useOneInstituteDashboard({
      id: ids?.id,
      skip: !ids?.id,
    });

  React.useEffect(() => {
    if (ids?.id) {
      oneInstituteDashboardRefetch();
    }
  }, [ids?.id, oneInstituteDashboardRefetch]);

  // console.info("this is loaction", tabValue);

  useEffect(() => {
    if (location.state?.openType?.openId) {
      if (location.state?.openType?.activeTab === "Approve Staff") {
        setStaffId(location.state?.openType?.openId);
        setStaffFull(false);
        setStaffHalf(true);
      } else {
        navigate(`/q/${params.username}/staff?a=request`);
      }
    }
  }, [location.state?.openType?.openId]);

  const { approveStaffList, approveStaffListRefetch } = useApproveStaffList({
    data: {
      id: ids?.id,
      page: page,
      limit: 10,
    },
    skip: !ids?.id,
  });

  useEffect(() => {
    if (ids?.id) {
      setShowingDataLoading(true);
      approveStaffListRefetch();
    }
  }, [page, ids?.id, approveStaffListRefetch]);

  useEffect(() => {
    if (approveStaffList?.staffIns) {
      const uniquePost = [...allStaff, ...approveStaffList?.staffIns];
      const uniqueRefind = [...new Set(uniquePost.map(JSON.stringify))].map(
        JSON.parse
      );
      setAllStaff(uniqueRefind);
      setShowingDataLoading(false);
    }

    //for next api is call or not dashboard
    if (approveStaffList?.staffIns.length === 10) setState(true);
    else setState(false);
  }, [approveStaffList?.staffIns]);

  const onPageChange = () => {
    if (state && search === "") {
      setPage((page) => page + 1);
    }
  };

  // console.info(approveStaffList);
  const onCloseStaffInfo = () => {
    setStaffId("");
    setStaffFull(true);
    setStaffHalf(false);
  };

  return (
    <>
      <StaffExplore />
      {!searchParams.get("a") && (
        <>
          {/* here is count issue */}
          {!staffHalf && (
            <StaffFunctionRow
              countRow={approveStaffList?.staffIns}
              setAllStaff={setAllStaff}
              setValue={setSearch}
              value={search}
            />
          )}
          {staffFull && (
            <StaffTable
              setStaffFull={setStaffFull}
              setStaffHalf={setStaffHalf}
              setStaffId={setStaffId}
              allStaff={allStaff}
              onPageChange={onPageChange}
              showingDataLoading={showingDataLoading}
              staff_alias={
                oneInstituteDashboard?.institute?.alias_pronounciation
                  ?.staff_alias
              }
            />
          )}
          {staffHalf && (
            <CustomSuspense>
              <StaffProfile sid={staffId} onClose={onCloseStaffInfo} />
            </CustomSuspense>
          )}
        </>
      )}
      <CustomSuspense>
        {searchParams.get("a") === "request" && (
          <StaffRequest fetchArray={approveStaffListRefetch} />
        )}
        {searchParams.get("a") === "attendance" && <Attendence />}
        {searchParams.get("a") === "leave" && <LeavesTransfer />}
        {searchParams.get("a") === "complaint" && <Complaints />}
        {searchParams.get("a") === "setting" && <StaffForm />}
      </CustomSuspense>
    </>
  );
};

export default MainContent;
