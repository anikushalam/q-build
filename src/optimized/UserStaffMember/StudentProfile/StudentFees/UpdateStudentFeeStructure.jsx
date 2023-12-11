import { useFinanceUpdateStudentFeeStructure } from "@/Hooks/ApiHooks/FinanceManager/finance-manager-api";
import QvipleLoader from "@/Loader/QvipleLoader";
import SelectFeeStructure from "@/UserStaffMember/FinanaceManager/FeesStructure/SelectFeeStructure/SelectFeeStructure";
import { useState } from "react";

const UpdateStudentFeeStructure = ({
  structureId,
  onClose,
  aid,
  applicationId,
  sid,
  rid,
  did,
  bid,
  cmid,
  onParentClose,
}) => {
  const { disabled, setDisabled } = useState(false);
  const [financeUpdateStudentFeeStructure] =
    useFinanceUpdateStudentFeeStructure();
  const onSelectedStrucutre = (val) => {
    if (structureId === val?._id) {
    } else {
      if (aid && sid && applicationId && structureId && rid) {
        setDisabled((pre) => !pre);
        financeUpdateStudentFeeStructure({
          aid: aid,
          appId: applicationId,
          sid: sid,
          updateStrucutre: {
            old_fee_struct: structureId,
            new_fee_struct: val?._id,
            rid: rid,
          },
        })
          .then(() => {
            onParentClose();
            setDisabled((pre) => !pre);
          })
          .catch({});
      }
    }
  };

  return (
    <>
      <SelectFeeStructure
        onClose={onClose}
        did={did}
        bid={bid}
        cmid={cmid}
        selectedStructure={structureId}
        onSelectedStrucutre={onSelectedStrucutre}
      />
      {disabled && <QvipleLoader />}
    </>
  );
};

export default UpdateStudentFeeStructure;
