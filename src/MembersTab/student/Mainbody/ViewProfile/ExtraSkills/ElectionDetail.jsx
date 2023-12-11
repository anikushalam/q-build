import React, { useEffect } from "react";
import { useOneElectionDetail } from "../../../../../hooks/member_tab/student-api";
import CandidateList from "../../../../staff/Mainbody/DepartmentHead/Competetions/Elections/CandidateList";
import style from "../../../../staff/Mainbody/DepartmentHead/Competetions/Elections/ElectionCard.module.css";
import { useTranslation } from "react-i18next";
const ElectionDetail = ({ sid, viewElectionDetail }) => {
  const { t } = useTranslation();
  const { oneElectionDetail, oneElectionDetailRefetch } = useOneElectionDetail({
    data: {
      sid: sid,
      eid: viewElectionDetail?._id,
    },
    skip: !viewElectionDetail?._id,
  });

  useEffect(() => {
    if (viewElectionDetail?._id && sid) oneElectionDetailRefetch();
  }, [viewElectionDetail?._id, sid]);

  //   console.info("thsanfmsd f df  sd ds", oneElectionDetail);
  return (
    <div className={style.extra_skill_election_detail_container}>
      <div className={style.extra_skill_election_detail_container_padding}>
        <h6 className={style.candiate_heading}>
          {viewElectionDetail?.election_position}
        </h6>
        <h6 className={style.candiate_heading}>{t("election_tagline")}</h6>
        <p className={style.candiate_paragraph}>
          {oneElectionDetail?.flag?.election_tag_line}
        </p>
        <h6 className={style.candiate_heading}>{t("description")}</h6>
        <p>{oneElectionDetail?.flag?.election_description}</p>
        <h6 className={style.candiate_heading}>{t("supporting_members")}</h6>
        {oneElectionDetail?.flag?.election_supporting_member?.map((support) => (
          <CandidateList
            name={`${support?.studentFirstName} ${
              support?.studentMiddleName || ""
            } ${support?.studentLastName}`}
            profileKey={support?.studentProfilePhoto}
            username={support?.user?.username}
            showActive={false}
            asUser={true}
            userId={support?.user?._id}
            key={support?._id}
          />
        ))}
      </div>
      {oneElectionDetail?.flag?.election_result_status === "Participants" ? (
        <div className={style.extra_skill_election_result}>
          <h6>Thank you for participating</h6>
          <h6>
            You got {oneElectionDetail?.flag?.election_vote_receieved} votes of
            total {oneElectionDetail?.flag?.total_voter}
          </h6>
        </div>
      ) : (
        <div className={style.extra_skill_election_result_winner}>
          <h6>Congratulations!!!</h6>
          <h6>
            For winnig President election with{" "}
            {oneElectionDetail?.flag?.election_vote_receieved} votes
          </h6>
        </div>
      )}
    </div>
  );
};

export default ElectionDetail;
