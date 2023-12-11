import React, { useEffect, useState } from "react";
import PopupWrapper from "../../FinanceManager/FeesStructure/PopupWrapper";
import GradeSystemForm from "./GradeSystemForm";
import { useGetOneGradeDetail } from "../../../../../hooks/member_tab/department-api";
import ViewGradeSystem from "./ViewGradeSystem";

const GradeSystem = ({ onClose, did }) => {
  const [edit, setEdit] = useState("");
  const { getOneGradeDetail, getOneGradeDetailRefetch } = useGetOneGradeDetail({
    did: did,
    skip: !did,
  });
  useEffect(() => {
    if (did) {
      getOneGradeDetailRefetch();
    }
  }, [did, getOneGradeDetailRefetch]);
  const onRefetchApi = () => {
    getOneGradeDetailRefetch();
    onClose();
  };
  //   console.info("getOneGradeDetail", getOneGradeDetail);
  return (
    <PopupWrapper onClose={onClose}>
      {getOneGradeDetail?.grade_system && !edit ? (
        <ViewGradeSystem
          gradeSystem={getOneGradeDetail?.grade_system}
          setEdit={setEdit}
        />
      ) : (
        <GradeSystemForm
          did={did}
          onRefetchApi={onRefetchApi}
          update={edit ? "Yes" : "No"}
          edit={edit}
        />
      )}
    </PopupWrapper>
  );
};

export default GradeSystem;
