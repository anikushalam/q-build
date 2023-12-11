import React, { useEffect, useState } from "react";
import style from "../PromoteDepartment.module.css";
import { useTranslation } from "react-i18next";
import { useGetOneDepartmentBatchList } from "../../../../../hooks/member_tab/department-api";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import DepartmentBatchCard from "./DepartmentBatchCard";
import CustomSuspense from "../../../../../Custom/SuspenseLoading/CustomSuspense";
import CreateBatch from "../../../../../Dashboard/InsDashboard/Modals/Batch/CreateBatch";

const DepartmentAllBatch = ({
  did,
  instituteId,
  selectedId,
  onParentRefetch,
}) => {
  const { t } = useTranslation();
  const [add, setAdd] = useState(false);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [stopList, setStopList] = useState([]);
  const { getOneDepartmentBatchList, getOneDepartmentBatchListRefetch } =
    useGetOneDepartmentBatchList({
      did: did,
      skip: !did,
    });
  useEffect(() => {
    if (did) {
      setShowingDataLoading(true);
      getOneDepartmentBatchListRefetch();
    }
  }, [did, getOneDepartmentBatchListRefetch]);
  useEffect(() => {
    if (getOneDepartmentBatchList?.allBatch) {
      //   setStopList((prevState) =>
      //     [
      //       ...new Set(
      //         [...prevState, ...getOneDepartmentBatchList?.allBatch]?.map(
      //           JSON.stringify
      //         )
      //       ),
      //     ]?.map(JSON.parse)
      //   );
      setStopList(getOneDepartmentBatchList?.allBatch);
      setShowingDataLoading(false);
    } else if (getOneDepartmentBatchList?.allBatch?.length === 0)
      setShowingDataLoading(false);
    else {
    }
  }, [getOneDepartmentBatchList?.allBatch]);
  const onToggleAdd = () => {
    setAdd((pre) => !pre);
  };
  return (
    <>
      <div className={style.add_new_container}>
        <p className={style.add_new_exam} onClick={onToggleAdd}>
          {t("create_new_batch")}
        </p>
      </div>
      {stopList?.map((batch) => (
        <DepartmentBatchCard
          batch={batch}
          key={batch?._id}
          instituteId={instituteId}
          selectedId={selectedId}
          did={did}
          onRefetch={getOneDepartmentBatchListRefetch}
          onParentRefetch={onParentRefetch}
        />
      ))}
      {showingDataLoading && <QvipleLoading />}
      <CustomSuspense>
        {add && (
          <CreateBatch
            departmentModal={add}
            hideModal={onToggleAdd}
            id={instituteId}
            did={did}
            data={stopList}
            // edit={edit}
            setEdit={()=>{}}
            // editBatch={editBatch}
            onDepartmentRefetch={getOneDepartmentBatchListRefetch}
          />
        )}
      </CustomSuspense>
    </>
  );
};

export default DepartmentAllBatch;
