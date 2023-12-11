import React, { useState, Suspense } from "react";
import { useTranslation } from "react-i18next";
import style from "./Mainbody.module.css";
import "./Mainbody.css";
import Sidebar from "./Sidebar/Sidebar";
import ConfirmModal from "./ConfirmModal/ConfirmModal";
import Menu from "./Menu/Menu";
import ApplicationStatus from "./ApplicationStatus/ApplicationStatus";
import { useStaffDesignationDataQuery } from "../../../services/joining/joinApi";
import QLoader from "../../../Loader/QLoader";
import { useDispatch } from "react-redux";
import { financeChangeAction } from "../../../redux/store/finance-slice";
import { admissionChangeAction } from "../../../redux/store/admission-slice";
import LibraryHead from "./LibraryHead/LibraryHead";

const DepartmentHead = React.lazy(() =>
  import("./DepartmentHead/DepartmentHead")
);
const ClassTeacher = React.lazy(() => import("./ClassTeacher/ClassTeacher"));
const SubjectTeacher = React.lazy(() =>
  import("./SubjectTeacher/SubjectTeacher")
);
const ViewProfile = React.lazy(() => import("./ViewProfile/ViewProfile"));
const Complaints = React.lazy(() => import("./Complaints/Complaints"));
const Leaves = React.lazy(() => import("./Leaves/Leaves"));
const Transfers = React.lazy(() => import("./Transfers/Transfers"));
const FinanceManager = React.lazy(() =>
  import("./FinanceManager/FinanceManager")
);
const StaffAdmisionAdmin = React.lazy(() =>
  import("./StaffAdmisionAdmin/StaffAdmisionAdmin")
);
const SwitchAccount = React.lazy(() => import("./SwitchAccount/SwitchAccount"));
const SportsAndArtsHead = React.lazy(() =>
  import("./SportsAndArtsHead/SportsAndArtsHead")
);
const BUTTON_WRAPPER_STYLES = {
  position: "relative",
  zIndex: 1,
};

function Mainbody({ swichDataId, setSwitchDataId }) {
  const [index, setIndex] = useState("0");
  const { t } = useTranslation();
  const [menu, setMenu] = useState(false);
  const {
    data: staffDesignationData,
    //  refetch: staffDesignationDataRefetch
  } = useStaffDesignationDataQuery(swichDataId);
  const [onClickValue, setOnClickValue] = useState("");
  const [openConfirmModal, setOpenConfirmModal] = useState(false);
  const [sportClassId, setSportClassId] = useState("");
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (staffDesignationData?.staff?.staffDepartment?.length) {
      setOnClickValue(staffDesignationData?.staff?.staffDepartment[0]);
      setIndex("1");
    } else if (staffDesignationData?.staff?.staffClass?.length) {
      setOnClickValue(staffDesignationData?.staff?.staffClass[0]);
      setIndex("2");
    } else if (staffDesignationData?.staff?.staffSubject?.length) {
      setOnClickValue(staffDesignationData?.staff?.staffSubject[0]);
      setIndex("3");
    } else if (staffDesignationData?.staff?.financeDepartment?.length) {
      dispatch(
        financeChangeAction.financeQuery({
          fid: `${staffDesignationData?.staff?.financeDepartment[0]?._id}`,
          insId: `${staffDesignationData?.staff?.institute?._id}`,
        })
      );
      setOnClickValue(staffDesignationData?.staff?.financeDepartment[0]?._id);
      setIndex("8");
    } else if (staffDesignationData?.staff?.admissionDepartment?.length) {
      dispatch(
        admissionChangeAction.admissionQuery({
          aid: `${staffDesignationData?.staff?.admissionDepartment[0]?._id}`,
        })
      );
      setOnClickValue(staffDesignationData?.staff?.admissionDepartment[0]?._id);
      setIndex("9");
    } else if (staffDesignationData?.staff?.sportDepartment?.length) {
      setOnClickValue(
        `${staffDesignationData?.staff?.sportDepartment[0]?._id}`
      );
      setSportClassId("");
      setIndex("12");
    } else if (staffDesignationData?.staff?.staffSportClass?.length) {
      setOnClickValue(
        staffDesignationData?.staff?.staffSportClass[0]?.sportClassName
      );
      setSportClassId(staffDesignationData?.staff?.staffSportClass[0]?._id);
      setIndex("13");
    } else {
      setIndex("0");
    }
  }, [
    staffDesignationData?.staff?.staffDepartment,
    staffDesignationData?.staff?.staffClass,
    staffDesignationData?.staff?.staffSubject,
    staffDesignationData?.staff?.financeDepartment,
    staffDesignationData?.staff?.admissionDepartment,
    staffDesignationData?.staff?.sportDepartment,
    staffDesignationData?.staff?.staffSportClass,
    dispatch,
  ]);
  console.info(staffDesignationData);
  return (
    <div className={style.mainbody}>
      <div className={style.sidebar}>
        <Sidebar
          setIndex={setIndex}
          index={index}
          staffName={`${staffDesignationData?.staff?.staffFirstName}  ${
            staffDesignationData?.staff?.staffMiddleName
              ? staffDesignationData?.staff?.staffMiddleName
              : ""
          } ${staffDesignationData?.staff?.staffLastName}`}
          roll={staffDesignationData?.staff?.staffROLLNO}
          photo={staffDesignationData?.staff?.staffProfilePhoto}
          photoId={staffDesignationData?.staff?.photoId}
          institute={staffDesignationData?.staff?.institute?.insName}
        />
      </div>

      <div className={style.rightbody}>
        {index === "0" && (
          <div
            className={`${style.formSelect} ${style.bottomborder}`}
            onClick={() => setMenu(!menu)}
          >
            <h6>Application Status</h6>
            <img alt="" src="/images/members/downTriangle.svg" />
          </div>
        )}
        {index === "1" && (
          <div className={style.formSelect} onClick={() => setMenu(!menu)}>
            <h6>
              {onClickValue?.dTitle} of {onClickValue?.dName}
            </h6>
            <img alt="" src="/images/members/downTriangle.svg" />
          </div>
        )}
        {index === "2" && (
          <div className={style.formSelect} onClick={() => setMenu(!menu)}>
            <h6>
              {onClickValue?.classHeadTitle} of {onClickValue?.classTitle}{" "}
              {`(${onClickValue?.batch?.batchName})`}
            </h6>
            <img alt="" src="/images/members/downTriangle.svg" />
          </div>
        )}
        {index === "3" && (
          <div className={style.formSelect} onClick={() => setMenu(!menu)}>
            <h6>
              {onClickValue?.class?.classTitle} - {onClickValue?.subjectName}{" "}
              {`(${onClickValue?.class?.batch?.batchName})`}
            </h6>
            <img alt="" src="/images/members/downTriangle.svg" />
          </div>
        )}
        {index === "8" && (
          <div className={style.formSelect} onClick={() => setMenu(!menu)}>
            <h6>Finance Manager</h6>
            <img alt="" src="/images/members/downTriangle.svg" />
          </div>
        )}
        {index === "9" && (
          <div
            className={`${style.formSelect} ${style.bottomborder}`}
            onClick={() => setMenu(!menu)}
          >
            <h6>Admision Admin</h6>
            <img alt="" src="/images/members/downTriangle.svg" />
          </div>
        )}
        {(index === "4" || index === "5" || index === "6" || index === "7") && (
          <div
            className={`${style.formSelect} ${style.disabled}`}
            style={BUTTON_WRAPPER_STYLES}
            onClick={() => setMenu(!menu)}
          >
            <h6>Application Status</h6>
            <img alt="" src="/images/members/downTriangle_disabled.svg" />
          </div>
        )}
        {index === "12" && (
          <div
            className={`${style.formSelect} ${style.bottomborder}`}
            onClick={() => setMenu(!menu)}
          >
            <h6>Sports and Arts Head Coach</h6>
            <img alt="" src="/images/members/downTriangle.svg" />
          </div>
        )}
        {index === "13" && (
          <div
            className={`${style.formSelect} ${style.bottomborder}`}
            onClick={() => setMenu(!menu)}
          >
            <h6>{onClickValue} Coach</h6>
            <img alt="" src="/images/members/downTriangle.svg" />
          </div>
        )}
        {index === "14" && (
          <div
            className={`${style.formSelect} ${style.bottomborder}`}
            onClick={() => setMenu(!menu)}
          >
            <h6>{t("librarian")}</h6>
            <img alt="" src="/images/members/downTriangle.svg" />
          </div>
        )}
        {menu && (
          <div>
            <Menu
              open={menu}
              onClose={() => setMenu(false)}
              setMenu={setMenu}
              setIndex={setIndex}
              staffDesignationData={staffDesignationData}
              setOnClickValue={setOnClickValue}
              setSportClassId={setSportClassId}
            />
          </div>
        )}

        <Suspense fallback={<QLoader />}>
          {index === "0" && (
            <ApplicationStatus
              openConfirmModal={openConfirmModal}
              setOpenConfirmModal={setOpenConfirmModal}
            />
          )}
          {index === "1" && <DepartmentHead onClickValue={onClickValue} />}
          {index === "2" && <ClassTeacher onClickValue={onClickValue} />}

          {(index === "3" || index === "10") && (
            <SubjectTeacher
              onClickValue={onClickValue}
              setIndex={setIndex}
              // onDesignationRefetch={staffDesignationDataRefetch}
            />
          )}

          {index === "4" && (
            <ViewProfile staffData={staffDesignationData?.staff?._id} />
          )}

          {index === "5" && (
            <Complaints staffId={staffDesignationData?.staff?._id} />
          )}

          {index === "6" && (
            <Leaves staffId={staffDesignationData?.staff?._id} />
          )}

          {index === "7" && (
            <Transfers
              staffId={staffDesignationData?.staff?._id}
              setIndex={setIndex}
            />
          )}

          {index === "8" && (
            <FinanceManager
              insId={staffDesignationData?.staff?.institute?._id}
              onClickValue={onClickValue}
              setOnClickValue={setOnClickValue}
            />
          )}
          {index === "9" && (
            <StaffAdmisionAdmin
              onClickValue={onClickValue}
              setOnClickValue={setOnClickValue}
              openConfirmModal={openConfirmModal}
              setOpenConfirmModal={setOpenConfirmModal}
            />
          )}

          {index === "11" && (
            <SwitchAccount
              setSwitchDataId={setSwitchDataId}
              setIndex={setIndex}
            />
          )}
          {(index === "12" || index === "13") && (
            <SportsAndArtsHead
              sportClassId={sportClassId}
              sportDepartId={onClickValue}
            />
          )}

          {index === "14" && (
            <LibraryHead insId={staffDesignationData?.staff?.institute?._id} />
          )}
        </Suspense>
      </div>

      {openConfirmModal && (
        <ConfirmModal
          openConfirmModal={openConfirmModal}
          setOpenConfirmModal={setOpenConfirmModal}
          hideModal={(w) => setOpenConfirmModal(w)}
        />
      )}
    </div>
  );
}

export default Mainbody;
