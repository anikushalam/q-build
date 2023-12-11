import React, { useEffect } from "react";
import CustomSuspense from "../../../Custom/SuspenseLoading/CustomSuspense";
import {
  useOneDepartmentAllClassMaster,
  useOneDepartmentAllSubjectMaster,
} from "../Components/DepartmentApi/depart-api";
import style from "./DepartmentMasterProfileMain.module.css";
import { useTranslation } from "react-i18next";
import OneRow from "./OneRow";
import SearchDepartment from "./SearchDepartment";
import ClassMasterMenu from "./Masters/ClassMasterMenu";
import SubjectMasterMenu from "./Masters/SubjectMasterMenu";
const CreateMaster = React.lazy(() =>
  import("../../../Dashboard/InsDashboard/Modals/Master/CreatMaster")
);
const DepartmentMasterProfileMain = ({ did, id }) => {
  const { t } = useTranslation();
  const [first, setFirst] = React.useState(true);
  const [state, setState] = React.useState(false);
  const [classMenu, setClassMenu] = React.useState("");
  const [subjectMenu, setSubjectMenu] = React.useState("");
  const { allClassMaster, allClassMasterRefetch } =
    useOneDepartmentAllClassMaster({
      data: {
        id: id,
        did: did,
      },
      skip: !id,
    });
  const { allSubjectMaster, allSubjectMasterRefetch } =
    useOneDepartmentAllSubjectMaster({
      data: {
        id: id,
        did: did,
      },
      skip: !id,
    });
  useEffect(() => {
    if (id && did) {
      allClassMasterRefetch();
      allSubjectMasterRefetch();
    }
  }, [did, id, allClassMasterRefetch, allSubjectMasterRefetch]);

  const onClassMenu = (val) => {
    setClassMenu(val);
  };
  const onSubjectMenu = (val) => {
    setSubjectMenu(val);
  };
  return (
    <>
      <div className={style.subHeadContainer}>
        <div className={style.subHead}>
          <p
            className={
              first
                ? `${style.subHeadLeft} ${style.subHeadActive}`
                : style.subHeadLeft
            }
            onClick={() => setFirst(true)}
          >
            {t("standerd_grade")}
          </p>
          <p
            className={
              !first
                ? `${style.subHeadMiddle} ${style.subHeadActive}`
                : style.subHeadMiddle
            }
            onClick={() => setFirst(false)}
          >
            {t("subject_")}
          </p>
          <p className={style.subHeadRight} onClick={() => setState(true)}>
            {t("add_masters")}
          </p>
        </div>
        <p className={style.borderBottom}></p>
      </div>
      <SearchDepartment />
      <div className={style.main}>
        {first
          ? allClassMaster?.classMaster?.map((value) => (
              <OneRow
                name={value?.className || "Class 8th"}
                image="/images/master-24-grey-icon.svg"
                key={value._id}
                status="classMaster"
                onMenu={onClassMenu}
                data={value}
              />
            ))
          : allSubjectMaster?.subjectMaster?.map((value) => (
              <OneRow
                name={value?.subjectName || "Math"}
                subjectType={value?.subjectType}
                image="/images/book-24-icon.svg"
                key={value._id}
                status="subjectMaster"
                onMenu={onSubjectMenu}
                data={value}
              />
            ))}
      </div>
      <CustomSuspense>
        {state && (
          <CreateMaster
            departmentModal={state}
            hideModal={setState}
            id={id}
            did={did}
          />
        )}
      </CustomSuspense>
      {classMenu && (
        <ClassMasterMenu
          onClose={() => setClassMenu("")}
          onRefetch={allClassMasterRefetch}
          classMenu={classMenu}
        />
      )}
      {subjectMenu && (
        <SubjectMasterMenu
          onClose={() => setSubjectMenu("")}
          onRefetch={allSubjectMasterRefetch}
          subjectMenu={subjectMenu}
        />
      )}
    </>
  );
};

export default DepartmentMasterProfileMain;
