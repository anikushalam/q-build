import style from "./SolvedList.module.css";
import React, { useEffect, useState } from "react";
// import moment from "moment";
import ComplaintModal from "./ComplaintModal";
import { useClassAllComplaint } from "../../../../../../../hooks/member_tab/class-api";
import moment from "moment";
function Item({ complaint }) {
  const [addDisplay, setAddDisplay] = useState(false);
  return (
    <>
      <div
        className={style.item}
        onClick={() => setAddDisplay((addDisplay) => !addDisplay)}
      >
        <img src="/images/complainIcon.svg" alt="" />
        <div>
          <h6>
            {complaint?.complaintType === "Open"
              ? `${complaint?.student?.studentFirstName}
        ${
          complaint?.student?.studentMiddleName
            ? complaint?.student?.studentMiddleName
            : " "
        }
        ${complaint?.student?.studentLastName}`
              : "Anonymous"}
          </h6>

          <div className={style.datetime}>
            <p>{moment(complaint?.createdAt).format("DD-MM-YYYY")}</p>
            {/* <p>{time}</p> */}
          </div>
        </div>
      </div>

      {addDisplay && (
        <ComplaintModal
          setAddDisplay={setAddDisplay}
          addDisplay={addDisplay}
          complaintId={complaint?._id}
        />
      )}
    </>
  );
}

function SolvedList({ cid }) {
  const { classAllComplaint, classAllComplaintRefetch } = useClassAllComplaint({
    data: {
      cid: cid,
      status: "Solved",
      page: 1,
      limit: 50,
    },
    skip: !cid,
  });

  useEffect(() => {
    if (cid) classAllComplaintRefetch();
  }, [cid, classAllComplaintRefetch]);

  // console.info("this is all complaint", classAllComplaint);
  return (
    <div className={style.list}>
      {classAllComplaint?.complaints?.map((complaint) => (
        <Item key={complaint?._id} complaint={complaint} />
      ))}
    </div>
  );
}

export default SolvedList;
