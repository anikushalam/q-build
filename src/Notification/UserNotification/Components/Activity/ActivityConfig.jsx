import React from "react";
import ElectionNotification from "../ElectionNotification/ElectionNotification";
import AssignmentActivity from "./AssignmentActivity";
import CompleteAssignmentActivity from "./CompleteAssignmentActivity";
import ElectionMemberActivity from "./ElectionMemberActivity";
import ExamActivity from "./ExamActivity";
import MarksActivity from "./MarksActivity";
import McqActivity from "./McqActivity";
import ParticipateEventActivity from "./ParticipateEventActivity";
import ReportCardActivity from "./ReportCardActivity";
import StudentRequestActivity from "./StudentRequestActivity";
import SubmitAssignmentActivity from "./SubmitAssignmentActivity";
import SeatingArrangementActivity from "./SeatingArrangementActivity";
import ApplicationStatusActivity from "./ApplicationStatusActivity";
import ParticipateResultActivity from "./ParticipateResultActivity";
import SubjectMarkUpdateActivity from "./SubjectMarkUpdateActivty";
import StaticActivity from "./StaticActivity";
import StudentMessageActivity from "./StudentMessageActivity";
import DailyUpdateActivity from "./DailyUpdateActivity";
// import MentorFeedbackActivity from "../MentorFeedback/MentorFeedbackActivity";
const ActivityConfig = ({ activity, setElectionShow, setOnClickValue }) => {
  return (
    <>
      {activity?.notifyCategory === "Student Request" ? (
        <StudentRequestActivity activity={activity} />
      ) : activity?.notifyCategory === "Report Card" ? (
        <ReportCardActivity activity={activity} />
      ) : activity?.notifyCategory === "Exam" ? (
        <ExamActivity activity={activity} />
      ) : activity?.notifyCategory === "Marks" ? (
        <MarksActivity activity={activity} />
      ) : activity?.notifyCategory === "Assignment" ? (
        <AssignmentActivity activity={activity} />
      ) : activity?.notifyCategory === "MCQ" ? (
        <McqActivity activity={activity} />
      ) : activity?.notifyCategory === "Submit Assignment" ? (
        <SubmitAssignmentActivity activity={activity} />
      ) : activity?.notifyCategory === "Complete Assignment" ? (
        <CompleteAssignmentActivity activity={activity} />
      ) : activity?.notifyCategory === "Election" ? (
        <ElectionNotification
          election={activity}
          setElectionShow={setElectionShow}
          setOnClickValue={setOnClickValue}
          // electionType={activity?.notifyCategory === "Election"?"ELECTION":"SUPPORTING_MEMBER"}
        />
      ) : activity?.notifyCategory === "Election Member" ? (
        <ElectionMemberActivity election={activity} />
      ) : activity?.notifyCategory === "Election Status" ? (
        <ElectionMemberActivity election={activity} />
      ) : activity?.notifyCategory === "Participate Event App" ? (
        <ParticipateEventActivity
          studentId={activity?.notifyPublisher}
          pid={activity?.participateEventId}
          activity={activity}
        />
      ) : activity?.notifyCategory === "Participate Event Payment" ? (
        <ParticipateEventActivity
          studentId={activity?.notifyPublisher}
          pid={activity?.participateEventId}
          activity={activity}
        />
      ) : activity?.notifyCategory === "Exam Seating Arrangement" ? (
        <SeatingArrangementActivity activity={activity} />
      ) : activity?.notifyCategory === "Status Alert" ? (
        <ApplicationStatusActivity activity={activity} />
      ) : //  activity?.notifyCategory === "Status Alert" ? (
      //   <ApplicationStatusActivity activity={activity} />
      // ) :
      activity?.notifyCategory === "Participate Event Result" ? (
        <ParticipateResultActivity activity={activity} />
      ) : activity?.notifyCategory === "Backlog marks update" ? (
        <SubjectMarkUpdateActivity activity={activity} />
      ) : activity?.notifyCategory === "Reminder Alert" ? (
        <StudentMessageActivity activity={activity} />
      ) : activity?.notifyCategory === "Daily Update" ? (
        <DailyUpdateActivity activity={activity} />
      ) : (
        <StaticActivity />
      )}
    </>
  );
};

export default ActivityConfig;
