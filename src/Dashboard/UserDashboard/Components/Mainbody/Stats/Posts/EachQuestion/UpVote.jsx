import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useQuestionLike,
  useQuestionRepostLike,
} from "../../../../../../../Post/Institute/Components/post-api";
import { useTranslation } from "react-i18next";
import { postChangeAction } from "../../../../../../../redux/store/post-slice";

const UpVote = ({ parentStyle, upVote, aid, rpid, voteType, pid }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [skip, setSkip] = React.useState(true);
  const [skip1, setSkip1] = React.useState(true);
  const ids = useSelector((state) => state.idChange);
  const [vote, setVote] = React.useState(
    upVote?.some((val) => {
      if (val === ids?.id) {
        return true;
      } else {
        return false;
      }
    })
  );

  const { questionLikeReftech } = useQuestionLike({
    data: { aid: aid },
    skip,
  });

  const { questionRepostLikeRefetch } = useQuestionRepostLike({
    data: { rpid: rpid, aid: aid },
    skip1,
  });

  const voteHandler = () => {
    setVote(true);
    if (voteType === "voteRepostAnswer") {
      setSkip1(false);
      dispatch(
        postChangeAction.repostAnswerVote({
          pid: rpid,
          id: ids?.id,
          type: "vote",
        })
      );
      questionRepostLikeRefetch();
    } else {
      setSkip(false);
      dispatch(
        postChangeAction.answerHelpfull({
          pid: pid,
          id: ids?.id,
          type: "helpfull",
          aid: aid,
        })
      );
      questionLikeReftech();
    }
  };

  const unvoteHandler = () => {
    setVote(false);
    if (voteType === "voteRepostAnswer") {
      setSkip1(false);
      dispatch(
        postChangeAction.repostAnswerVote({
          pid: rpid,
          id: ids?.id,
          type: "invalid",
        })
      );
      questionRepostLikeRefetch();
    } else {
      setSkip(false);
      dispatch(
        postChangeAction.answerHelpfull({
          pid: pid,
          id: ids?.id,
          type: "nothelpfull",
          aid: aid,
        })
      );
      questionLikeReftech();
    }
  };
  return (
    <>
      {vote ? (
        <div className={parentStyle} onClick={unvoteHandler}>
          <img src="/images/answer-help-white.svg" alt="up count" />
          <p>{t("helpful")}</p>
        </div>
      ) : (
        <div className={parentStyle} onClick={voteHandler}>
          <img src="/images/answer-help-grey.svg" alt="up count" />
          <p> {t("helpful")}</p>
        </div>
      )}
    </>
  );
};

export default UpVote;
