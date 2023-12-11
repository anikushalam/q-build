import React, { useState } from "react";
import CandidateList from "./CandidateList";
import ElectionCard from "./ElectionCard";
import style from "./ElectionCard.module.css";
import { useTranslation } from "react-i18next";
import { useDepartmentElectionAction } from "../../../../../../hooks/member_tab/department-api";
import QLoader from "../../../../../../Loader/QLoader";

const Candidate = ({
  oneApplyDetail,
  electionId,
  setOneApplyDetail,
  setActiveIndex,
}) => {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const [departmentElectionAction] = useDepartmentElectionAction();
  // console.info("this ias f as", oneApplyDetail);

  const onActionOfApplication = (val) => {
    setDisabled((pre) => !pre);
    departmentElectionAction({
      eid: electionId,
      apid: oneApplyDetail?._id,
      sid: oneApplyDetail?.student?._id,
      actionStatus: val,
    })
      .then(() => {
        // console.info("tjhsahafas", res);
        setOneApplyDetail("");
        setActiveIndex(1);
        setDisabled((pre) => !pre);
      })
      .catch({});
  };
  return (
    <ElectionCard
      customStyle={{
        width: "366px",
      }}
    >
      <h6 className={style.candiate_heading}>{t("candidate")}</h6>
      <CandidateList
        name={`${oneApplyDetail?.student?.studentFirstName} ${
          oneApplyDetail?.student?.studentMiddleName || ""
        } ${oneApplyDetail?.student?.studentLastName}`}
        profileKey={oneApplyDetail?.student?.studentProfilePhoto}
        grNumber={oneApplyDetail?.student?.studentGRNO}
        showActive={true}
      />
      <h6 className={style.candiate_heading}>{t("election_tagline")}</h6>
      <p className={style.candiate_paragraph}>
        {oneApplyDetail?.election_tag_line}
      </p>
      <h6 className={style.candiate_heading}>{t("description")}</h6>
      <p>{oneApplyDetail?.election_description}</p>
      <h6 className={style.candiate_heading}>{t("supporting_members")}</h6>
      {oneApplyDetail?.election_supporting_member?.map((support) => (
        <CandidateList
          name={`${support?.studentFirstName} ${
            support?.studentMiddleName || ""
          } ${support?.studentLastName}`}
          profileKey={support?.studentProfilePhoto}
          grNumber={support?.studentGRNO}
          showActive={false}
          key={support?._id}
        />
      ))}

      {oneApplyDetail?.election_candidate_status === "Pending" ? (
        <div className={style.candidate_action}>
          <button
            disabled={disabled}
            onClick={() => onActionOfApplication("Rejected")}
          >
            {t("reject")}
          </button>
          <button
            disabled={disabled}
            onClick={() => onActionOfApplication("Approved")}
          >
            {t("accept")}
          </button>
        </div>
      ) : (
        ""
      )}
      {disabled && <QLoader />}
    </ElectionCard>
  );
};

export default Candidate;
