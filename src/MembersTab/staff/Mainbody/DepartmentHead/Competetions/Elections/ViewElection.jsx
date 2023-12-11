import React from "react";
import { useDepartmentOneElection } from "../../../../../../hooks/member_tab/department-api";
import ElectionCard from "./ElectionCard";
import style from "./ElectionCard.module.css";
import moment from "moment";
import { useTranslation } from "react-i18next";
import AllElectionCandidate from "./AllElectionCandidate";

const ViewElection = ({
  onViewOneApplyCandidate,
  onViewResultOfApplyCandidate,
  electionId,
  oneApplyDetail,
  status,
}) => {
  const { t } = useTranslation();
  const { departmentOneElection, departmentOneElectionRefetch } =
    useDepartmentOneElection({
      id: status === "studentElection" ? electionId : electionId?.electionId,
      skip: "studentElection" ? !electionId : !electionId?.electionId,
    });
  React.useEffect(() => {
    if (status === "studentElection" ? electionId : electionId?.electionId) {
      document.getElementById("scrollToTop")?.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  }, [status === "studentElection" ? electionId : electionId?.electionId]);
  React.useEffect(() => {
    if (status === "studentElection" ? electionId : electionId?.electionId)
      departmentOneElectionRefetch();
  }, [
    status === "studentElection" ? electionId : electionId?.electionId,
    departmentOneElectionRefetch,
  ]);

  React.useEffect(() => {
    if (departmentOneElection?.elect?.result_notification === "Declare") {
      onViewResultOfApplyCandidate({
        totalVoter: departmentOneElection?.elect?.election_total_voter,
        totalVoteCasted: departmentOneElection?.elect?.election_vote_cast,
        candidateList: departmentOneElection?.elect?.election_candidate,
      });
      // console.info("this is my", departmentOneElection);
    }
  }, [departmentOneElection?.elect]);
  // console.info("departmentOneElection sdald", departmentOneElection);

  const onOpenCandidateDetail = (val) => {
    if (departmentOneElection?.elect?.result_notification !== "Declare")
      onViewOneApplyCandidate(val);
  };

  return (
    <ElectionCard
      customStyle={{
        width: status === "studentElection" ? "100%" : "486px",
        height: "fit-content",
      }}
    >
      <div className={style.election_card_title} id="scrollToTop">
        <img
          src="/images/members/election-icon.svg"
          alt="elections static icon"
        />
        <h6 className={style.create_new_elections}>
          {departmentOneElection?.elect?.election_position}
        </h6>
      </div>
      <hr className={style.create_new_elections_hr} />
      <div className={style.election_info} style={{ marginTop: "15px" }}>
        <h6>{t("election_detials")}</h6>
        <p>
          {t("apply_from")}{" "}
          {moment(departmentOneElection?.elect?.election_app_start_date).format(
            "DD MMM"
          )}{" "}
          {t("to")}{" "}
          {moment(departmentOneElection?.elect?.election_app_end_date).format(
            "DD MMM yyyy"
          )}
        </p>
        <p>
          {t("candidate_selection")}{" "}
          {moment(departmentOneElection?.elect?.election_selection_date).format(
            "DD MMM yyyy"
          )}
        </p>
        <p>
          {t("start_campaign")}{" "}
          {moment(departmentOneElection?.elect?.election_campaign_date).format(
            "DD MMM"
          )}{" "}
          {t("to")}
          {moment(
            departmentOneElection?.elect?.election_campaign_last_date
          ).format("DD MMM yyyy")}
        </p>
        <p>
          {t("voting_date")}
          {moment(departmentOneElection?.elect?.election_voting_date).format(
            "DD MMM yyyy"
          )}
        </p>
        <p>
          {t("result_declare")}{" "}
          {moment(departmentOneElection?.elect?.election_result_date).format(
            "DD MMM yyyy"
          )}
        </p>
      </div>
      <hr className={style.create_new_elections_hr1} />
      <div className={style.candidate_container}>
        <p className={style.candidate}>{t("candidate")}</p>
        <AllElectionCandidate
          onViewOneApplyCandidate={onOpenCandidateDetail}
          electionId={
            status === "studentElection" ? electionId : electionId?.electionId
          }
          oneApplyDetail={oneApplyDetail}
        />
      </div>
    </ElectionCard>
  );
};

export default ViewElection;
