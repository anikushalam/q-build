import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useAddRoomHostelUnit } from "../../../../../../hooks/member_tab/hostel-api";
import CustomNormalSelectInput from "../../../../../../JoiningForm/Student/Form/CustomNormalSelectInput";
import JoinFormInput from "../../../../../../JoiningForm/Student/Form/JoinFormInput";
import QLoader from "../../../../../../Loader/QLoader";
import PopupWrapper from "../../../FinanceManager/FeesStructure/PopupWrapper";
import style from "../../HostelFeeStructure/HostelFeeStructure.module.css";

const AddUnitRoom = ({
  onClose,
  openAs,
  openRoomMenu,
  huid,
  onEdit,
  onRefetch,
}) => {
  const { t } = useTranslation();
  const [addRoom, setAddRoom] = useState({
    room_name: openAs === "EDIT" ? openRoomMenu?.room_name : "",
    room_strength: openAs === "EDIT" ? openRoomMenu?.room_strength : "",
  });
  const [filled, setFilled] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [addRoomHostelUnit] = useAddRoomHostelUnit();

  useEffect(() => {
    if (openAs === "EDIT") {
      setAddRoom({
        room_name: openRoomMenu?.room_name,
        room_strength: openRoomMenu?.room_strength,
      });
    }
  }, [openAs]);

  const onCapacitySelect = (val) => {
    setAddRoom((prev) => ({
      ...prev,
      room_strength: val,
    }));
  };
  const onValidation = (data) => {
    const errors = {};
    for (let obj in data) {
      if (!data[obj]) errors[obj] = `${obj} is required!`;
    }
    return errors;
  };

  const onAddHostelRoom = () => {
    const validation = onValidation(addRoom);
    let flag = false;
    for (let errField in validation) {
      if (errField) {
        flag = true;
        break;
      }
    }
    if (flag) {
      setFilled(validation);
    } else {
      if (openAs === "EDIT") {
        onEdit(addRoom);
      } else {
        setDisabled((pre) => !pre);
        addRoomHostelUnit({
          huid: huid,
          addRoom: addRoom,
        })
          .then(() => {
            onRefetch();
            onClose();
            setDisabled((pre) => !pre);
          })
          .catch({});
      }
    }
  };

  return (
    <PopupWrapper onClose={onClose}>
      <div className={style.add_category_modal}>
        <div className={style.add_category_modal_title}>
          <h6>{openAs === "EDIT" ? t("edit_fee_head") : t("add_new_room")}</h6>
          <img src="/images/close-post-icon.svg" onClick={onClose} alt="" />
        </div>
        <JoinFormInput
          labelText={t("room_name")}
          placeholder={t("room_name_placeholder")}
          name={"room_name"}
          value={addRoom.room_name}
          type={"text"}
          onChange={(e) =>
            setAddRoom((prev) => ({
              ...prev,
              room_name: e.target.value,
            }))
          }
          errorShow={filled["room_name"]}
        />
        <CustomNormalSelectInput
          selectLabel={t("bed_capacity")}
          selectedValue={t("bed_capacity_placeholder")}
          options={[1, 2, 3, 4, 5, 6]}
          value={addRoom.room_strength}
          onClick={onCapacitySelect}
          errorShow={filled["room_name"]}
        />

        <button
          className={style.set_fees_structure_btn}
          title="Add Hostel Room"
          onClick={onAddHostelRoom}
          style={{ justifyContent: "center" }}
        >
          {openAs === "EDIT" ? t("update") : t("add_room")}
        </button>
        {disabled && <QLoader />}
      </div>
    </PopupWrapper>
  );
};

export default AddUnitRoom;
