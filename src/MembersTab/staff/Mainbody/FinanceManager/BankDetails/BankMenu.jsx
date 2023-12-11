import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useDeleteBankByFinance,
  useUpdateBankByFinance,
} from "../../../../../hooks/member_tab/finance-api";

import QLoader from "../../../../../Loader/QLoader";
import Overlay from "../../../../../Search/Overlay";
import SearchModalBackdrop from "../../../../../Search/SearchModalBackdrop";
import style from "../../ClassTeacher/Profile/EditConfirm.module.css";
import AddBankForm from "./AddBankForm";

const BankMenu = ({ onClose, openBankMenu, onRefetch, setDiabledInfo }) => {
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
  const [edit, setEdit] = useState(false);
  const [deleteBankByFinance] = useDeleteBankByFinance();
  const [updateBankByFinance] = useUpdateBankByFinance();

  const onDelete = () => {
    setDisabled((pre) => !pre);
    deleteBankByFinance(openBankMenu?._id)
      .then(() => {
        onRefetch();
        onClose();
        setDisabled((pre) => !pre);
        navigate(-1);
      })
      .catch({});
  };
  const onEdit = (val, prev) => {
    setDisabled((pre) => !pre);
    setEdit(false);
    setDiabledInfo((prev) => !prev);
    updateBankByFinance({
      bid: openBankMenu?._id,
      bankDetails: val,
      delete_pic: prev,
    })
      .then(() => {
        onRefetch();
        setDisabled((pre) => !pre);
        onClose();
      })
      .catch({});
  };
  return (
    <>
      {!edit ? (
        <>
          <SearchModalBackdrop onClose={onClose} />
          <Overlay
            customStyle={{
              zIndex: "1200",
            }}
          >
            <div
              className={style.edit_modal_container}
              style={{ width: "200px" }}
            >
              <h6
                className={style.edit}
                onClick={() => {
                  setDiabledInfo((prev) => !prev);
                  setEdit((pre) => !pre);
                }}
              >
                Edit
              </h6>
              <h6 className={style.remove} onClick={onDelete}>
                Delete
              </h6>
            </div>
            {disabled && <QLoader />}
          </Overlay>
        </>
      ) : (
        <AddBankForm
          onEdit={onEdit}
          openAs={"EDIT"}
          onClose={onClose}
          openBankMenu={openBankMenu}
        />
      )}
    </>
  );
};

export default BankMenu;
