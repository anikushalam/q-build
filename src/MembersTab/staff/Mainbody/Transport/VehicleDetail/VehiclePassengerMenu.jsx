import React, { useState } from "react";
import QLoader from "../../../../../Loader/QLoader";
import Overlay from "../../../../../Search/Overlay";
import SearchModalBackdrop from "../../../../../Search/SearchModalBackdrop";
import { useDeletePassengerFromVehicle } from "../../../../../hooks/member_tab/transport-api";
import style from "../../ClassTeacher/Profile/EditConfirm.module.css";
const VehiclePassengerMenu = ({
  onClose,
  vehicleId,
  vehicleMenu,
  onRefetch,
}) => {
  const [disabled, setDisabled] = useState(false);
  const [deletePassengerFromVehicle] = useDeletePassengerFromVehicle();

  const onDelete = () => {
    setDisabled((pre) => !pre);
    deletePassengerFromVehicle({
      vid: vehicleId,
      sid: vehicleMenu?._id,
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
      <SearchModalBackdrop onClose={onClose} />
      <Overlay
        customStyle={{
          zIndex: "1200",
        }}
      >
        <div className={style.edit_modal_container} style={{ width: "200px" }}>
          <h6 className={style.remove} onClick={onDelete}>
            Delete
          </h6>
        </div>

        {disabled && <QLoader />}
      </Overlay>
    </>
  );
};

export default VehiclePassengerMenu;
