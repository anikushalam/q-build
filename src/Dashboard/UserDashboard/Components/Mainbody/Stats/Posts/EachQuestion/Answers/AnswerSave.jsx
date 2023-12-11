import React from "react";
import { useQuestionAnswerSave } from "../../../../../../../../Post/Institute/Components/post-api";
import style from "../Save/Save.module.css";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
// import { postChangeAction } from "../../../../../../../../redux/store/post-slice";

const AnswerSave = ({ endUserSave, aid, parentStyle }) => {
  const [skip, setSkip] = React.useState(true);
  const { t } = useTranslation();
  const ids = useSelector((state) => state.idChange);
  //   const dispatch = useDispatch();
  const [added, setAdded] = React.useState(
    endUserSave?.some((val) => {
      if (val === ids?.id) {
        return true;
      } else {
        return false;
      }
    })
  );

  const { questionAnswerSaveReftech } = useQuestionAnswerSave({
    data: { aid: aid },
    skip,
  });

  const saveHandler = () => {
    // dispatch(
    //   postChangeAction.addSave({
    //     aid: aid,
    //     id: ids?.id,
    //   })
    // );
    setSkip(false);
    setAdded(true);
    questionAnswerSaveReftech();
  };

  const unsaveHandler = () => {
    // dispatch(
    //   postChangeAction.removeSave({
    //     aid: aid,
    //     id: ids?.id,
    //   })
    // );
    setSkip(false);
    setAdded(false);
    questionAnswerSaveReftech();
  };

  return (
    <>
      {added ? (
        <div className={parentStyle} onClick={unsaveHandler}>
          <img
            src="/images/unbookmark-icon.svg"
            alt=""
            className={style.bookmarkImage1}
          />
          <p>{t("save")}</p>
        </div>
      ) : (
        <div className={parentStyle} onClick={saveHandler}>
          <img
            src="/images/bookmark-icon.svg"
            alt=""
            className={style.bookmarkImage1}
          />
          <p>{t("save")}</p>
        </div>
      )}
    </>
  );
};

export default AnswerSave;
