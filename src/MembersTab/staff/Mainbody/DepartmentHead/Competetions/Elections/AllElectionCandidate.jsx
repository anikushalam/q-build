import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useDepartmentOneElectionAllCandidate } from "../../../../../../hooks/member_tab/department-api";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";
import { imageShowUrl } from "../../../../../../services/BaseUrl";
import style from "./ElectionCard.module.css";

const AllElectionCandidate = ({
  onViewOneApplyCandidate,
  electionId,
  oneApplyDetail,
}) => {
  const [state, setState] = useState(true);
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();
  const [candidateList, setCandidateList] = useState([]);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const {
    departmentOneElectionAllCandidate,
    departmentOneElectionAllCandidateRefetch,
  } = useDepartmentOneElectionAllCandidate({
    data: {
      eid: electionId,
      page: oneApplyDetail === "" ? 1 : page,
      limit: 10,
    },
    skip: !electionId,
  });

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (electionId && oneApplyDetail === "") {
      setShowingDataLoading(true);
      departmentOneElectionAllCandidateRefetch();
    }
  }, [
    page,
    electionId,
    departmentOneElectionAllCandidateRefetch,
    oneApplyDetail,
  ]);

  useEffect(() => {
    if (departmentOneElectionAllCandidate?.all_candidates) {
      if (oneApplyDetail === "") {
        setCandidateList(departmentOneElectionAllCandidate?.all_candidates);
        setShowingDataLoading(false);
      } else {
        const uniquePost = [
          ...candidateList,
          ...departmentOneElectionAllCandidate?.all_candidates,
        ];
        const uniqueRefind = [...new Set(uniquePost.map(JSON.stringify))].map(
          JSON.parse
        );
        setCandidateList(uniqueRefind);
        setShowingDataLoading(false);
      }
    } else if (departmentOneElectionAllCandidate?.all_candidates?.length === 0)
      setShowingDataLoading(false);
    else {
    }

    if (departmentOneElectionAllCandidate?.all_candidates?.length === 10)
      setState(true);
    else setState(false);
  }, [departmentOneElectionAllCandidate?.all_candidates, oneApplyDetail]);

  //   console.info(
  //     "this sdff departmentOneElectionAllCandidate",
  //     // electionId,
  //     departmentOneElectionAllCandidate
  //   );
  return (
    <>
      {candidateList?.map((candidate, index) =>
        candidateList?.length === index + 1 ? (
          <div
            key={candidate?._id}
            ref={ref}
            className={
              oneApplyDetail?._id === candidate?._id
                ? `${style.candidate_member} ${style.candidate_member_selected}`
                : style.candidate_member
            }
            onClick={() =>
              // viewAs === "EVENT_MANAGER"
              //   ? {}
              //   :
              onViewOneApplyCandidate(candidate)
            }
          >
            <img
              src={`${imageShowUrl}/${candidate?.student?.studentProfilePhoto}`}
              alt="elections static icon"
              style={{ borderRadius: "50%" }}
            />
            <div>
              <h6 className={style.candidate} style={{ margin: "0" }}>
                {`${candidate?.student?.studentFirstName} ${
                  candidate?.student?.studentMiddleName || ""
                } ${candidate?.student?.studentLastName}`}
              </h6>
              <p className={style.candidate_gr}>
                GRNO. {candidate?.student?.studentGRNO}
              </p>
            </div>
          </div>
        ) : (
          <div
            key={candidate?._id}
            className={
              oneApplyDetail?._id === candidate?._id
                ? `${style.candidate_member} ${style.candidate_member_selected}`
                : style.candidate_member
            }
            onClick={() =>
              // viewAs === "EVENT_MANAGER"
              //   ? {}
              //   :
              onViewOneApplyCandidate(candidate)
            }
          >
            <img
              src={`${imageShowUrl}/${candidate?.student?.studentProfilePhoto}`}
              alt="elections static icon"
              style={{ borderRadius: "50%" }}
            />
            <div>
              <h6 className={style.candidate} style={{ margin: "0" }}>
                {`${candidate?.student?.studentFirstName} ${
                  candidate?.student?.studentMiddleName || ""
                } ${candidate?.student?.studentLastName}`}
              </h6>
              <p className={style.candidate_gr}>
                GRNO. {candidate?.student?.studentGRNO}
              </p>
            </div>
          </div>
        )
      )}

      {showingDataLoading && <QvipleLoading />}
    </>
  );
};

export default AllElectionCandidate;
