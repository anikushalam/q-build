import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import QLoader from "../../../../../../Loader/QLoader";
import PopupWrapper from "../../../FinanceManager/FeesStructure/PopupWrapper";
import AssignStaffModal from "../../../../../../Department/Institute/AssignStaff/AssignStaffModal";
import { useAddMentorDepartment } from "../../../../../../hooks/member_tab/department-api";

const AddMentor = ({ instituteId, onClose, onRefetch, did }) => {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const [assignHead, setAssignHead] = useState(true);
  const [addMentorDepartment] = useAddMentorDepartment();
  const onAddMento = (assing) => {
    setAssignHead(false);
    setDisabled((pre) => !pre);
    addMentorDepartment({
      did: did,
      sid: assing?._id,
    })
      .then(() => {
        onRefetch();
        onClose();
        setDisabled((pre) => !pre);
      })
      .catch({});
  };
  return (
    <>
      {assignHead && (
        <PopupWrapper onClose={onClose}>
          <AssignStaffModal
            assignHead={assignHead}
            headSelect={onAddMento}
            title={t("staff_list")}
            onClose={() => setAssignHead((pre) => !pre)}
            viewAs="ADMISSION_ADMIN"
            instituteId={instituteId}
          />
        </PopupWrapper>
      )}
      {disabled && <QLoader />}
    </>
  );
};

export default AddMentor;
