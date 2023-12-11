import React, { useState } from "react";
import RangeSliderCount from "./RangeSliderCount";
import style from "./ElectionSetting.module.css";
import { useDepartmentElectionSetting } from "../../../../../../hooks/member_tab/department-api";
import { Notfication } from "../../../../../../validation/Snackbar";
const ElectionSetting = ({ did }) => {
  const [notificationState, setNotificationState] = useState({
    msg: "",
    run: false,
  });
  const [election, setElection] = useState({
    end_date: 0,
    select_date: 0,
    campaign_date: 0,
    campaign_last_date: 0,
    vote_date: 0,
    result_date: 0,
  });

  const [departmentElectionSetting] = useDepartmentElectionSetting();

  const onUpdateElectionDate = (e) => {
    // console.info("this  sddsf", e.target.name, e.target.value);
    const updateObj = { ...election };
    updateObj[e.target.name] = e.target.value;
    setElection((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    departmentElectionSetting({
      did: did,
      updateSetting: {
        election_date_setting: updateObj,
      },
    })
      .then(() => {
        setNotificationState({
          msg: "Election Date is updated successfully",
          run: true,
        });
        // console.info("this is deparmtne ts,rsd", res);
      })
      .catch({});
  };
  return (
    <div className={style.election_container}>
      <section className={style.election_each_slider_parent}>
        <span>Election End Date</span>{" "}
        <RangeSliderCount
          onUpdateElectionDate={onUpdateElectionDate}
          name="end_date"
          value={election.end_date}
        />
      </section>
      <section className={style.election_each_slider_parent}>
        <span>Select Date</span>{" "}
        <RangeSliderCount
          onUpdateElectionDate={onUpdateElectionDate}
          name="select_date"
          value={election.select_date}
        />
      </section>
      <section className={style.election_each_slider_parent}>
        <span>Campaign Date</span>{" "}
        <RangeSliderCount
          onUpdateElectionDate={onUpdateElectionDate}
          name="campaign_date"
          value={election.campaign_date}
        />
      </section>
      <section className={style.election_each_slider_parent}>
        <span>Campaign Last Date</span>{" "}
        <RangeSliderCount
          onUpdateElectionDate={onUpdateElectionDate}
          name="campaign_last_date"
          value={election.campaign_last_date}
        />
      </section>

      <section className={style.election_each_slider_parent}>
        <span>Vote Date</span>{" "}
        <RangeSliderCount
          onUpdateElectionDate={onUpdateElectionDate}
          name="vote_date"
          value={election.vote_date}
        />
      </section>
      <section className={style.election_each_slider_parent}>
        <span>Result Date</span>{" "}
        <RangeSliderCount
          onUpdateElectionDate={onUpdateElectionDate}
          name="result_date"
          value={election.result_date}
        />
      </section>
      {notificationState.run && (
        <Notfication
          msg={notificationState.msg}
          run={notificationState.run}
          setRun={() => setNotificationState({ msg: "", run: false })}
          postiton="bottom"
          type="success"
        />
      )}
    </div>
  );
};

export default ElectionSetting;
