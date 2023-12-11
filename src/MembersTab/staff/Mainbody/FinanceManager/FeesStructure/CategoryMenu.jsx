import React, { useState } from "react";
import {
  useDeleteFeesCategory,
  useMarkAsSecondaryCategory,
} from "../../../../../hooks/member_tab/finance-api";
import QLoader from "../../../../../Loader/QLoader";
import Overlay from "../../../../../Search/Overlay";
import SearchModalBackdrop from "../../../../../Search/SearchModalBackdrop";
import style from "../../ClassTeacher/Profile/EditConfirm.module.css";
import SelectCategoryList from "./SelectCategoryList";

const CategoryMenu = ({
  onClose,
  fid,
  openCategoryMenu,
  onRefetch,
  categoryList,
}) => {
  const [disabled, setDisabled] = useState(false);
  const [deleteFeesCategory] = useDeleteFeesCategory();
  const [markAsSecondaryCategory] = useMarkAsSecondaryCategory();
  const [isSecondary, setIsSecondary] = useState(false);
  const onDelete = () => {
    setDisabled((pre) => !pre);
    deleteFeesCategory({
      cid: openCategoryMenu,
    })
      .then(() => {
        onRefetch();
        onClose();
        setDisabled((pre) => !pre);
      })
      .catch({});
  };
  const onSecondary = (value) => {
    setIsSecondary(false);
    setDisabled((pre) => !pre);
    markAsSecondaryCategory({
      fid: fid,
      secondaryData: {
        old_category: openCategoryMenu,
        fee_category: value,
      },
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
      {!isSecondary ? (
        <>
          <SearchModalBackdrop onClose={onClose} />
          <Overlay
            customStyle={{
              zIndex: "1200",
            }}
          >
            <div
              className={style.edit_modal_container}
              style={{ width: "250px" }}
            >
              <h6 className={style.edit} onClick={() => setIsSecondary(true)}>
                Mark As Secondary
              </h6>
              <h6 className={style.edit} onClick={onDelete}>
                Delete
              </h6>
            </div>
            {disabled && <QLoader />}
          </Overlay>
        </>
      ) : (
        <SelectCategoryList
          selectedId={openCategoryMenu}
          categoryList={categoryList}
          onSecondary={onSecondary}
          onClose={() => setIsSecondary(false)}
        />
      )}
    </>
  );
};

export default CategoryMenu;
