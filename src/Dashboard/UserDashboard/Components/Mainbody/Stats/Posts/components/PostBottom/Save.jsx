import React from "react";
import { usePostSave } from "../../../../../../../../Post/Institute/Components/post-api";
import style from "./Like.module.css";
import { useDispatch, useSelector } from "react-redux";
import { postChangeAction } from "../../../../../../../../redux/store/post-slice";
import { userAs } from "../../../../../../../../constant/constant_value";
import { useTranslation } from "react-i18next";

const Save = ({ endUserSave, pid, parentStyle }) => {
  const [skip, setSkip] = React.useState(true);
  const { t } = useTranslation();
  const ids = useSelector((state) => state.idChange);
  const dispatch = useDispatch();
  const [added, setAdded] = React.useState(
    endUserSave?.some((val) => {
      if (val === ids?.id) {
        return true;
      } else {
        return false;
      }
    })
  );

  const { postSaveRefetch } = usePostSave({
    data: { pid: pid, viewAs: userAs },
    skip,
  });

  const saveHandler = () => {
    dispatch(
      postChangeAction.addSave({
        pid: pid,
        id: ids?.id,
      })
    );
    setSkip(false);
    setAdded(true);
    postSaveRefetch();
  };

  const unsaveHandler = () => {
    dispatch(
      postChangeAction.removeSave({
        pid: pid,
        id: ids?.id,
      })
    );
    setSkip(false);
    setAdded(false);
    postSaveRefetch();
  };

  return (
    <>
      {added ? (
        <div className={parentStyle} onClick={unsaveHandler}>
          <img
            src="/images/unbookmark-icon.svg"
            alt=""
            className={style.bookmarkImage}
          />
          <p>{t("save")}</p>
        </div>
      ) : (
        <div className={parentStyle} onClick={saveHandler}>
          <img
            src="/images/bookmark-icon.svg"
            alt=""
            className={style.bookmarkImage}
          />
          <p>{t("save")}</p>
        </div>
      )}
    </>
  );
};

export default Save;
