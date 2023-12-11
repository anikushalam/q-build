import React from "react";
import style from "./Departments.module.css";
import { useAllDepartment } from "../../../Institute/Components/DepartmentApi/depart-api";
import { useDispatch, useSelector } from "react-redux";
import { idChangeAction } from "../../../../redux/store/department-slice";
import CustomSuspense from "../../../../Custom/SuspenseLoading/CustomSuspense";
import QvipleLoading from "../../../../Loader/QvipleLoading";
import { useTranslation } from "react-i18next";
import DepartmentCard from "./DepartmentCard";
import { useGoback } from "../../../../hooks/GoBack/go-back";
import { useParams } from "react-router-dom";

const CreateDepartment = React.lazy(() =>
  import(
    "../../../../Dashboard/InsDashboard/Modals/Department/CreateDepartment"
  )
);
function Departments() {
  const { t } = useTranslation();
  const ids = useSelector((state) => state.idChange);
  const dispatch = useDispatch();
  const params = useParams();
  const { onAddBack } = useGoback();
  const [showingDataLoading, setShowingDataLoading] = React.useState(true);
  const [createDepart, setCreateDepart] = React.useState(false);
  const { allDepartment, allDepartmentRefetch } = useAllDepartment({
    id: ids?.id,
    skip: !ids?.id,
  });
  React.useEffect(() => {
    if (allDepartment?.institute?.depart) {
      dispatch(
        idChangeAction.addDepartment({
          departments: allDepartment?.institute?.depart,
        })
      );
      setShowingDataLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allDepartment?.institute?.depart]);

  React.useEffect(() => {
    if (ids?.id) allDepartmentRefetch();
  }, [ids?.id, allDepartmentRefetch]);
  React.useEffect(() => {
    onAddBack({
      linkType: true,
      linkUrl: `/q/${params.username}/feed`,
    });
  }, [params.username]);

  return (
    <div className={style.department_conatiner}>
      <p
        className={style.department_add_new}
        onClick={() => setCreateDepart((pre) => !pre)}
      >
        {t("add_new_dept")}
      </p>
      <hr className={style.department_hr} />
      {ids?.departments?.map((depart) => (
        <DepartmentCard depart={depart} key={depart._id} />
      ))}
      {showingDataLoading && <QvipleLoading />}
      <CustomSuspense>
        {createDepart && (
          <CreateDepartment
            departmentModal={createDepart}
            hideModal={setCreateDepart}
            edit=""
            setEdit={() => {}}
            editDepartment=""
          />
        )}
      </CustomSuspense>
    </div>
  );
}

export default Departments;
