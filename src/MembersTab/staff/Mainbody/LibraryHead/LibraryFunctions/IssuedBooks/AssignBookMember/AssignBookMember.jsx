import React, { useState } from "react";
import style from "./AssignBookMember.module.css";
import PopupWrapper from "../../../../FinanceManager/FeesStructure/PopupWrapper";
import QLoader from "../../../../../../../Loader/QLoader";
import SelectIssueMember from "./SelectIssueMember";
import SelectIssueBook from "./SelectIssueBook";
import { useSelector } from "react-redux";
import { useIssueBook } from "../../../../../../../hooks/member_tab/library-api";
import AssignIssuePreview from "./AssignIssuePreview";
const AssignBookMember = ({ onClose, instituteId, onRefetchWhenBookIssue }) => {
  const libAuthor = useSelector((state) => state.libraryChange);
  const [step, setStep] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [member, setMember] = useState("");
  const [book, setBook] = useState("");
  const [issueBook] = useIssueBook();

  const onBack = () => {
    if (step === 0) {
      onClose();
    } else if (step === 1) {
      setStep(0);
    } else {
      setStep(1);
    }
  };

  const onAddMember = (val) => {
    setMember(val);
    setStep(1);
  };
  const onAddBook = (val) => {
    setBook(val);
    setStep(2);
  };

  const onIssueBook = () => {
    if (libAuthor?.lid && member?._id && book?._id) {
      setDisabled(true);
      issueBook({
        lid: libAuthor?.lid,
        issueData: {
          memberId: member?._id,
          bookId: book?._id,
        },
      })
        .then(() => {
          onRefetchWhenBookIssue();
          onClose(false);
          setDisabled(false);
        })
        .catch(() => {});
    }
  };

  return (
    <>
      <PopupWrapper onClose={onBack}>
        <div className={style.issue_modal}>
          {step === 0 && (
            <SelectIssueMember
              instituteId={instituteId}
              onAddMember={onAddMember}
              step={step}
              onBack={onBack}
            />
          )}
          {step === 1 && (
            <SelectIssueBook
              onAddBook={onAddBook}
              step={step}
              onBack={onBack}
              member={member}
            />
          )}
          {step === 2 && (
            <AssignIssuePreview
              step={step}
              onBack={onBack}
              book={book}
              member={member}
              onIssueBook={onIssueBook}
            />
          )}
        </div>
        {disabled && <QLoader />}
      </PopupWrapper>
    </>
  );
};

export default AssignBookMember;
