import React from "react";
import style from "./ComplaintDetails.module.css";
import moment from "moment";
import {
  useComplaintOneSolvedByInstituteMutation,
  useGetSolvedComplaintQuery,
  useGetUnSolvedComplaintQuery,
} from "../../../../../services/CLTApi";
import { useSelector } from "react-redux";

function ComplaintDetails({ detail, showDetails }) {
  const [state, setState] = React.useState(detail?.complaintInsStatus);
  const [solvedByInstitute] = useComplaintOneSolvedByInstituteMutation();
  const author = useSelector((state) => state.authChange);

  const user_Id = localStorage.getItem("user");
  const { refetch: complaintSolvedQuery } = useGetSolvedComplaintQuery({
    ins_Id: author?.id ? author?.id : user_Id,
    status: "Solved",
  });
  const { refetch: complaintUnSolvedQuery } = useGetUnSolvedComplaintQuery({
    ins_Id: author?.id ? author?.id : user_Id,
    status: "Unsolved",
  });
  React.useEffect(() => {
    setState(detail?.complaintInsStatus);
  }, [detail?.complaintInsStatus]);
  const solvedHandler = () => {
    solvedByInstitute({
      cid: detail?._id,
      status: {
        status: "Solved",
      },
    })
      .then(() => {
        setState("Solved");
        complaintSolvedQuery();
        complaintUnSolvedQuery();
      })
      .catch({});
  };
  return (
    <>
      {showDetails && detail ? (
        <div className={style.complaintDetails}>
          <div className={style.detailsheader}>
            <div className={style.item}>
              <img src="/images/complainIconDark.svg" alt="" />
              <div>
                <h6>{`${detail?.student?.studentFirstName} ${
                  detail?.student?.studentMiddleName
                    ? detail?.student?.studentMiddleName
                    : ""
                } ${detail?.student.studentLastName}`}</h6>

                <div className={style.datetime}>
                  <p>{moment(detail?.createdAt).format("LL")}</p>
                  <p>{moment(detail?.createdAt).format("LT")}</p>
                </div>
              </div>
            </div>
          </div>
          <div className={style.detailsbody}>
            <p>{detail?.complaintContent}</p>
          </div>
          <div className={style.footer}>
            {state === "Solved" ? (
              <div className={style.solvedbtn}>Problem {state}</div>
            ) : (
              <div className={style.solvedbtn} onClick={solvedHandler}>
                Problem {detail?.complaintInsStatus}
              </div>
            )}
          </div>
        </div>
      ) : (
        ""
      )}

      {/* {tabid === 0 ? (
        <div className={style.complaintDetails}>
          <div className={style.detailsheader}>
            <div className={style.item}>
              <img src="/images/complainIconDark.svg" />
              <div>
                <h6>{`${detail?.student?.studentFirstName} ${
                  detail?.student?.studentMiddleName
                    ? detail?.student?.studentMiddleName
                    : ""
                } ${detail?.student.studentLastName}`}</h6>

                <div className={style.datetime}>
                  <p>{moment(detail?.createdAt).format("LL")}</p>
                  <p>{moment(detail?.createdAt).format("LT")}</p>
                </div>
              </div>
            </div>
          </div>
          <div className={style.detailsbody}>
            <p>{detail?.complaintContent}</p>
          </div>
          <div className={style.footer}>
            <div className={style.solvedbtn}>
              Problem {detail?.complaintStatus}
            </div>
          </div>
        </div>
      ) : tabid === 1 ? (
        <div className={style.complaintDetails}>
          <div className={style.detailsheader}>
            <div className={style.item}>
              <img src="/images/complainIconDark.svg" />
              <div>
                <h6>{`${detail?.student?.studentFirstName} ${
                  detail?.student?.studentMiddleName
                    ? detail?.student?.studentMiddleName
                    : ""
                } ${detail?.student.studentLastName}`}</h6>

                <div className={style.datetime}>
                  <p>{moment(detail?.createdAt).format("LL")}</p>
                  <p>{moment(detail?.createdAt).format("LT")}</p>
                </div>
              </div>
            </div>
          </div>
          <div className={style.detailsbody}>
            <p>{detail?.complaintContent}</p>
          </div>
          <div className={style.footer}>
            <div className={style.solvedbtn}>
              Problem {detail?.complaintStatus}
            </div>
          </div>
        </div>
      ) : (
        ""
      )} */}
    </>
  );
}

export default ComplaintDetails;
