import React from "react";
import style from "../ElectionNotification/ElectionNotification.module.css";

const ElectionMemberActivity = ({ election }) => {
  //   console.info("xfjkhff", election);
  return (
    <div>
      <div className={style.vote_result_wrapper}>
        <h6 className={style.supporting_member}>{election?.election_type}</h6>
        <p className={style.add_supporting_paragraph}>
          {election?.notifyContent}
          {/* <sapn>President Election</sapn> by
            <span>Ankita Jain.</span>
            (If you have not supporting please contact with respectiv
            department) */}
        </p>
      </div>
    </div>
  );
};

export default ElectionMemberActivity;
