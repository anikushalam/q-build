import React, { useEffect, useState } from "react";
import CustomSuspense from "../../../Custom/SuspenseLoading/CustomSuspense";
import { useOneClassEditDetail } from "../Components/DepartmentApi/depart-api";
import style from "./DepartmentBatchProfileMain.module.css";
import OneRowClass from "./OneRowClass";
import { useTranslation } from "react-i18next";
import SearchDepartment from "./SearchDepartment";
import { Notfication } from "../../../validation/Snackbar";
const CreateClass = React.lazy(() =>
  import("../../../Dashboard/InsDashboard/Modals/Class/CreateClass")
);
const DepartmentClassProfileMain = ({ data, id, did, bid }) => {
  const { t } = useTranslation();
  const [state, setState] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editClass, setEditClass] = useState("");
  const { classEditDetail, classEditDetailRefetch } = useOneClassEditDetail({
    cid: editClass,
    skip: !editClass,
  });
  const [notificationState, setNotificationState] = useState({
    msg: "",
    run: false,
  });
  const editOneClass = (data) => {
    setEditClass(data);
    setEdit(true);
    setState(true);
  };

  useEffect(() => {
    if (editClass) classEditDetailRefetch();
  }, [editClass, classEditDetailRefetch]);

  const onAddClass = () => {
    if (!bid) {
      setNotificationState({
        msg: t("please_select_first_bacth_then_add_class_in_department"),
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
          <p className={style.subHeadRight} onClick={onAddClass}>
            {t("add_class")}
          </p>
        </div>
        <p className={style.borderBottom}></p>
      </div>
      <SearchDepartment />
      <div className={style.main}>
        {data.map((value, index) => (
          <OneRowClass
            name={value?.classTitle || "Class 5th"}
            image="/images/master-24-grey-icon.svg"
            key={index}
            cid={value?._id}
            editOneClass={editOneClass}
          />
        ))}
      </div>
      <CustomSuspense>
        {state && (
          <CreateClass
            departmentModal={state}
            hideModal={setState}
            id={id}
            did={did}
            bid={bid}
            edit={edit}
            setEdit={setEdit}
            editClass={classEditDetail?.classes}
          />
        )}
      </CustomSuspense>
      <Notfication
        msg={notificationState.msg}
        run={notificationState.run}
        setRun={() => setNotificationState({ msg: "", run: false })}
        postiton="bottom"
        type="error"
      />
    </>
  );
};

export default DepartmentClassProfileMain;
