import React from "react";
import { useQuestionSave } from "../../../../../../../../Post/Institute/Components/post-api";
import style from "./Save.module.css";
import { useDispatch, useSelector } from "react-redux";
import { postChangeAction } from "../../../../../../../../redux/store/post-slice";
import { useTranslation } from "react-i18next";

const Save = ({ endUserSave, pid, status, parentStyle }) => {
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

  const { questionSaveReftech } = useQuestionSave({
    data: { pid: pid },
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
    questionSaveReftech();
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
    questionSaveReftech();
  };

  return (
    <>
      {added ? (
        <div className={parentStyle} onClick={unsaveHandler}>
          <img
            src="/images/unbookmark-icon.svg"
            alt=""
            className={
              status === "yes" ? style.bookmarkImage1 : style.bookmarkImage
            }
          />
          <p>{t("save")}</p>
        </div>
      ) : (
        <div className={parentStyle} onClick={saveHandler}>
          <img
            src="/images/bookmark-icon.svg"
            alt=""
            className={
              status === "yes" ? style.bookmarkImage1 : style.bookmarkImage
            }
          />
          <p>{t("save")}</p>
        </div>
      )}
    </>
  );
};

export default Save;
