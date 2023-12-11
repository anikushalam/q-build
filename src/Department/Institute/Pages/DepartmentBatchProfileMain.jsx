import React, { useEffect, useState } from "react";
import style from "./DepartmentBatchProfileMain.module.css";
import OneRowBatch from "./OneRowBtach";
import SearchDepartment from "./SearchDepartment";
import moment from "moment";
import { useTranslation } from "react-i18next";
import CustomSuspense from "../../../Custom/SuspenseLoading/CustomSuspense";
import { useOneInstituteDashboard } from "../../../hooks/dashboard/dashboard-api";
import { Notfication } from "../../../validation/Snackbar";
const CreateBatch = React.lazy(() =>
  import("../../../Dashboard/InsDashboard/Modals/Batch/CreateBatch")
);
const DepartmentBatchProfileMain = ({
  data,
  id,
  did,
  selectedBatch,
  onDepartmentRefetch,
}) => {
  const { t } = useTranslation();
  const [state, setState] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editBatch, setEditBatch] = useState({});
  const [notificationState, setNotificationState] = useState({
    msg: "",
    run: false,
  });
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
  const editOneBatch = (data) => {
    setEditBatch(data);
    setEdit(true);
    setState(true);
  };

  const onAddBatch = () => {
    if (
      !oneInstituteDashboard?.institute?.admissionDepart?.[0] ||
      !oneInstituteDashboard?.institute?.financeDepart?.[0]
    ) {
      setNotificationState({
        msg: "Please activate Finance and Admission Department",
        run: true,
      });
    } else {
      setState(true);
    }
  };
  return (
    <>
      <div className={style.subHeadContainer}>
        <div className={style.subHead}>
          <p className={style.subHeadRight} onClick={onAddBatch}>
            {t("add_batch")}
          </p>
        </div>
        <p className={style.borderBottom}></p>
      </div>
      <SearchDepartment />
      <div className={style.main}>
        {data.map((value, index) => (
          <OneRowBatch
            name={value?.batchName || "Batch 2022-23"}
            image="/images/master-24-grey-icon.svg"
            date={
              value.createdAt
                ? ` ${moment(value.createdAt).format("DD MMMM YYYY")}`
                : "23 April 2022"
            }
            bid={value?._id}
            key={index}
            selectedBatch={selectedBatch}
            editOneBatch={editOneBatch}
            designation_send={value?.designation_send}
            batch_type={value?.batch_type}
          />
        ))}
      </div>
      <CustomSuspense>
        {state && (
          <CreateBatch
            departmentModal={state}
            hideModal={setState}
            id={id}
            did={did}
            data={data}
            edit={edit}
            setEdit={setEdit}
            editBatch={editBatch}
            onDepartmentRefetch={onDepartmentRefetch}
          />
        )}
        {notificationState.run && (
          <Notfication
            msg={notificationState.msg}
            run={notificationState.run}
            setRun={() => setNotificationState({ msg: "", run: false })}
            postiton="bottom"
            type="error"
          />
        )}
      </CustomSuspense>
    </>
  );
};

export default DepartmentBatchProfileMain;
