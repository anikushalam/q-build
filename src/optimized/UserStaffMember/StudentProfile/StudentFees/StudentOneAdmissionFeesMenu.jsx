import ModalMenu from "@/Ui/Modal/ModalMenu";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import DropStudentOneAdmissionFees from "./DropStudentOneAdmissionFees";
import UpdateStudentFeeStructure from "./UpdateStudentFeeStructure";

const StudentOneAdmissionFeesMenu = ({
  onClose,
  rid,
  sid,
  is_drop,
  structureId,
  aid,
  applicationId,
  did,
  bid,
  cmid,
}) => {
  const { t } = useTranslation();
  const [drop, setDrop] = useState(false);
  const [feeEdit, setFeeEdit] = useState(false);

  const onFeeEdit = () => {
    setFeeEdit((pre) => !pre);
  };
  const onDropToggle = () => {
    setDrop((pre) => !pre);
  };
  return (
    <>
      {drop ? (
        <DropStudentOneAdmissionFees
          rid={rid}
          sid={sid}
          onClose={onDropToggle}
          onParentClose={onClose}
        />
      ) : feeEdit ? (
        <UpdateStudentFeeStructure
          structureId={structureId}
          onClose={onFeeEdit}
          aid={aid}
          applicationId={applicationId}
          sid={sid}
          rid={rid}
          did={did}
          bid={bid}
          cmid={cmid}
          onParentClose={onClose}
        />
      ) : (
        <ModalMenu onClose={onClose}>
          <h6 onClick={onFeeEdit}>{t("edit_fees_structure")}</h6>
          {is_drop ? <h6 onClick={onDropToggle}>{t("drop")}</h6> : null}
        </ModalMenu>
      )}
    </>
  );
};

export default StudentOneAdmissionFeesMenu;
