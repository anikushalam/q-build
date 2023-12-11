import React from "react";
import style from "../Mentor.module.css";
const FeedbackQuestionCard = () => {
  return (
    <div className={style.feedback_question_container}>
      <section className={style.feedback_question_heading}>
        <img src="/images/fees-category-icon.svg" alt="icon" />
        <h6>Humbleness of your mentor</h6>
      </section>

      <section className={style.feedback_question_option}>
        <h6>Exploring the city</h6>
        <h6>35%</h6>
        <div
          className={style.option_selected_cover}
          style={{
            width: "35%",
          }}
        ></div>
      </section>
      <section className={style.feedback_question_option}>
        <h6>Exploring the city</h6>
        <h6>15%</h6>
        <div
          className={style.option_selected_cover}
          style={{
            width: "15%",
          }}
        ></div>
      </section>
    </div>
  );
};

export default FeedbackQuestionCard;
