import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useQuestionHelp } from "../../../../../../../Post/Institute/Components/post-api";
import { postChangeAction } from "../../../../../../../redux/store/post-slice";
import { useTranslation } from "react-i18next";

const NeedHelp = ({ answerIcon, needUser, pid, parentStyle }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [skip, setSkip] = React.useState(true);
  const ids = useSelector((state) => state.idChange);
  const [need, setNeed] = React.useState(
    needUser?.some((val) => {
      if (val === ids?.id) {
        return true;
      } else {
        return false;
      }
    })
  );

  const { questionHelpReftech } = useQuestionHelp({
    data: { pid: pid },
    skip,
  });

  const needHandler = () => {
    dispatch(
      postChangeAction.questionNeedHelp({
        pid: pid,
        id: ids?.id,
        type: "need",
      })
    );
    setNeed(true);
    setSkip(false);
    questionHelpReftech();
  };

  const unneedHandler = () => {
    dispatch(
      postChangeAction.questionNeedHelp({
        pid: pid,
        id: ids?.id,
        type: "notneed",
      })
    );
    setNeed(false);
    setSkip(false);
    questionHelpReftech();
  };
  return (
    <>
      {need ? (
        <div className={parentStyle} onClick={unneedHandler}>
          <img
            className={answerIcon}
            src="/images/answer-text-icon.svg"
            alt="answer-text"
          />
          <p>{t("need_help")}</p>
        </div>
      ) : (
        <div className={parentStyle} onClick={needHandler}>
          <img
            className={answerIcon}
            src="/images/answer-text-icon.svg"
            alt="answer-text"
            style={{ color: "black", opacity: "0.3" }}
          />
          <p> {t("need_help")}</p>
        </div>
      )}
    </>
  );
};

export default NeedHelp;
