import React, { useEffect, useState } from "react";
import { useOneDepartmentAllSubjectOneClass } from "../../../../Department/Institute/Components/DepartmentApi/depart-api";
import QvipleLoading from "../../../../Loader/QvipleLoading";
import SubjectList from "../PromoteDepartment/Department/SubjectList";

const AdministratorSubject = ({
  carryParentState,
  clsId,
  isView,
  instituteId,
  did,
}) => {
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const { oneClassAllSubject, oneClassAllSubjectRefetch } =
    useOneDepartmentAllSubjectOneClass({
      cid: clsId,
      skip: !clsId,
    });
  useEffect(() => {
    if (oneClassAllSubject?.classes?.subject) {
      setShowingDataLoading(false);
    }
  }, [oneClassAllSubject?.classes?.subject]);

  useEffect(() => {
    if (clsId) oneClassAllSubjectRefetch();
  }, [clsId, oneClassAllSubjectRefetch]);
  return (
    <>
      <SubjectList
        subjects={oneClassAllSubject?.classes?.subject ?? []}
        carryParentState={carryParentState}
        isView={isView ? isView : "ADMINISTRATOR"}
        cid={clsId}
        instituteId={instituteId}
        did={did}
        onRefetch={oneClassAllSubjectRefetch}
      />
      {showingDataLoading && <QvipleLoading />}
    </>
  );
};

export default AdministratorSubject;
