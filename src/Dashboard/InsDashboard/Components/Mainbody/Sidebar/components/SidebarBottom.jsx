import React, { useEffect, useState } from "react";
import style from "./SidebarBottom.module.css";
import { useSelector } from "react-redux";
import { useFetchDisplayPerson } from "../../../../../../hooks/dashboard/dashboard-api";
import CustomSuspense from "../../../../../../Custom/SuspenseLoading/CustomSuspense";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
const AddDisplay = React.lazy(() =>
  import("../../../../Modals/DisplayPerson/AddDisplay")
);
const DisplayPerson = React.lazy(() =>
  import("./InstituteDisplayPerson/DisplayPerson")
);
function SidebarBottom({ resultId, setDisplayHeight1 }) {
  const [addDisplay, setAddDisplay] = useState(false);
  const { t } = useTranslation();
  const getQuery = useLocation();
  const ids = useSelector((state) => state.idChange);
  const loginRole = useSelector((state) => state.authChange.loginRole);
  const rId = resultId ? resultId : ids?.id;
  const { fetchDisplayPerson, fetchDisplayPersonRefetch } =
    useFetchDisplayPerson({
      id: !ids?.searchProfile?.id ? ids?.id : ids?.searchProfile?.id,
      skip: !ids?.searchProfile?.id ? !ids?.id : !ids?.searchProfile?.id,
    });
  useEffect(() => {
    if ((ids?.id, ids?.searchProfile?.id)) {
      fetchDisplayPersonRefetch();
    }
  }, [fetchDisplayPersonRefetch, ids?.id, ids?.searchProfile?.id]);

  useEffect(() => {
    if (fetchDisplayPerson?.institute?.displayPersonList?.length)
      setDisplayHeight1(
        fetchDisplayPerson?.institute?.displayPersonList?.length * 66
      );
  }, [fetchDisplayPerson?.institute?.displayPersonList]);

  return (
    <div className={style.sidebarBottom}>
      <CustomSuspense>
        {fetchDisplayPerson?.institute?.displayPersonList?.map(
          (display, index) => (
            <DisplayPerson
              key={index}
              onRefetchDisplayList={fetchDisplayPersonRefetch}
              display={display}
              isMenu={
                getQuery.state?.loginRole === "_usr_rs" ||
                loginRole === "_usr_rs"
                  ? false
                  : true
              }
            />
          )
        )}
      </CustomSuspense>
      {getQuery.state?.loginRole === "_usr_rs" || loginRole === "_usr_rs"
        ? null
        : rId === ids?.id && (
            <div
              className={`${style.item} ${style.addbtn}`}
              onClick={() => setAddDisplay(true)}
            >
              <div className={style.imggContainer}>
                <img
                  alt="not found"
                  src="/images/member_tab/class/default_avatar.svg"
                />
              </div>
              <div className={style.itemText}>
                <h6>{t("add_")}</h6>
                <p>{t("name_profession")}</p>
              </div>
              <img
                alt="not found"
                className={style.dots}
                src="/images/menu-dots-icon.svg"
              />
            </div>
          )}

      <CustomSuspense>
        {addDisplay && (
          <AddDisplay
            hideModal={(w) => setAddDisplay(w)}
            addDisplay={addDisplay}
            onRefetchDisplayList={fetchDisplayPersonRefetch}
          />
        )}
      </CustomSuspense>
    </div>
  );
}

export default SidebarBottom;
