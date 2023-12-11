import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Navbar from "../../../Dashboard/InsDashboard/Components/Navbar/Navbar";
import style from "./Department.module.css";
import { useTranslation } from "react-i18next";
import { useOneViewDepartment } from "../Components/DepartmentApi/depart-api";
import DepartmentClassProfileMain from "./DepartmentClassProfileMain";
import CustomSuspense from "../../../Custom/SuspenseLoading/CustomSuspense";
import DepartmentSidebar from "../../../Sidebar/Institute/Department/DepartmentSidebar";
import DepartmentFormToggle from "./DepartmentFormToggle/DepartmentFormToggle";
import {
  Link,
  useLocation,
  useParams,
  useSearchParams,
} from "react-router-dom";
import DeaprtmentSiteInfo from "../../../MembersTab/staff/Mainbody/DepartmentHead/DepartmentSiteInfo/DeaprtmentSiteInfo";
const DepartmentMasterProfileMain = React.lazy(() =>
  import("./DepartmentMasterProfileMain")
);
const DepartmentBatchProfileMain = React.lazy(() =>
  import("./DepartmentBatchProfileMain")
);

const Department = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const getQuery = useLocation();
  const params = useParams();

  const ids = useSelector((state) => state.idChange);
  const { oneDepartment, oneDepartmentRefetch } = useOneViewDepartment({
    did: ids?.did,
    skip: !ids?.did,
  });

  useEffect(() => {
    if (ids?.did) oneDepartmentRefetch();
  }, [ids?.did, oneDepartmentRefetch]);

  return (
    <div className={style.bgContainer}>
      <div className={style.navbar}>
        <Navbar status="home" />
      </div>
      {searchParams.get("a") === "site" ? (
        <DeaprtmentSiteInfo did={getQuery.state?.did} viewAs="INSTITUTE" />
      ) : (
        <div className={style.editContainer}>
          <DepartmentSidebar
            department={oneDepartment?.department}
            username={ids?.loginProfile?.username}
            activeUrlValue="department"
            onReftech={oneDepartmentRefetch}
            did={ids?.did}
          />
          <div>
            <div className={style.mainContainer}>
              {searchParams.get("a") === "setting" ? (
                <DepartmentFormToggle did={ids?.did} />
              ) : (
                <>
                  <div className={style.head}>
                    <Link to={`/q/${params.username}/viewdept`}>
                      <p
                        className={
                          !searchParams.get("a")
                            ? `${style.headLeftTab} ${style.headTabActive}`
                            : style.headLeftTab
                        }
                      >
                        {!searchParams.get("a") ? (
                          <div className={style.tabflex}>
                            <img
                              className={style.tabfleximg}
                              alt=""
                              src="/images/stafftab/classes_white.svg"
                            />
                            <p className={style.tabflexpactive}>
                              {t("classes")}
                            </p>
                          </div>
                        ) : (
                          <div className={style.tabflex}>
                            <img
                              className={style.tabfleximg}
                              alt=""
                              src="/images/stafftab/classes.svg"
                            />
                            <p className={style.tabflexp}>{t("classes")}</p>
                          </div>
                        )}
                      </p>
                    </Link>
                    <Link to={`/q/${params.username}/viewdept?a=masters`}>
                      <p
                        className={
                          searchParams.get("a") === "masters"
                            ? `${style.headMiddleTab} ${style.headTabActive}`
                            : style.headMiddleTab
                        }
                      >
                        {searchParams.get("a") === "masters" ? (
                          <div className={style.tabflex}>
                            <img
                              className={style.tabfleximg}
                              alt=""
                              src="/images/stafftab/masters_white.svg"
                            />
                            <p className={style.tabflexpactive}>
                              {t("masters")}
                            </p>
                          </div>
                        ) : (
                          <div className={style.tabflex}>
                            <img
                              className={style.tabfleximg}
                              alt=""
                              src="/images/stafftab/allstudent.svg"
                            />
                            <p className={style.tabflexp}>{t("masters")}</p>
                          </div>
                        )}
                      </p>
                    </Link>

                    <Link to={`/q/${params.username}/viewdept?a=batches`}>
                      <p
                        className={
                          searchParams.get("a") === "batches"
                            ? `${style.headRightTab} ${style.headTabActive}`
                            : style.headRightTab
                        }
                      >
                        {searchParams.get("a") === "batches" ? (
                          <div className={style.tabflex}>
                            <img
                              className={style.tabfleximg}
                              alt=""
                              src="/images/stafftab/batches_white.svg"
                            />
                            <p className={style.tabflexpactive}>
                              {t("batches")}
                            </p>
                          </div>
                        ) : (
                          <div className={style.tabflex}>
                            <img
                              className={style.tabfleximg}
                              alt=""
                              src="/images/stafftab/batches.svg"
                            />
                            <p className={style.tabflexp}>{t("batches")}</p>
                          </div>
                        )}
                      </p>
                    </Link>
                  </div>
                  {!searchParams.get("a") && (
                    <DepartmentClassProfileMain
                      data={
                        oneDepartment?.department?.departmentSelectBatch
                          ?.classroom || []
                      }
                      did={oneDepartment?.department?._id}
                      id={ids?.id}
                      bid={
                        oneDepartment?.department?.departmentSelectBatch?._id
                      }
                    />
                  )}
                  <CustomSuspense>
                    {searchParams.get("a") === "masters" && (
                      <DepartmentMasterProfileMain
                        did={oneDepartment?.department?._id}
                        id={ids?.id}
                      />
                    )}
                    {searchParams.get("a") === "batches" && (
                      <DepartmentBatchProfileMain
                        data={oneDepartment?.department?.batches || []}
                        did={oneDepartment?.department?._id}
                        id={ids?.id}
                        selectedBatch={
                          oneDepartment?.department?.departmentSelectBatch ||
                          "Batch 2022-23"
                        }
                        onDepartmentRefetch={oneDepartmentRefetch}
                      />
                    )}
                  </CustomSuspense>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Department;
