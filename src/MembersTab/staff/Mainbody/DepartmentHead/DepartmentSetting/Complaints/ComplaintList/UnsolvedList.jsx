import React, { useEffect, useState } from "react";
import style from "./UnsolvedList.module.css";
// import moment from "moment";
import ComplaintModal from "./ComplaintModal";
import moment from "moment";
import { useDepartmentAllComplaint } from "../../../../../../../hooks/member_tab/department-api";
function Item({ complaint, onRefetch }) {
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
          onRefetch={onRefetch}
        />
      )}
    </>
  );
}

function UnsolvedList({ did }) {
  const { departmentAllComplaint, departmentAllComplaintRefetch } =
    useDepartmentAllComplaint({
      data: {
        did: did,
        status: "Unsolved",
        page: 1,
        limit: 50,
      },
      skip: !did,
    });

  useEffect(() => {
    if (did) departmentAllComplaintRefetch();
  }, [did, departmentAllComplaintRefetch]);

  // console.info("this is all complaint", departmentAllComplaint);
  return (
    <div className={style.list}>
      {departmentAllComplaint?.complaints?.map((complaint) => (
        <Item
          key={complaint?._id}
          complaint={complaint}
          onRefetch={departmentAllComplaintRefetch}
        />
      ))}
    </div>
  );
}

export default UnsolvedList;
