import { t } from "i18next";
import React, { useEffect, useState } from "react";
import {
  chooseImpovementKey,
  chooseImpovementReverseValue,
  chooseImpovementValue,
  chooseLackInKey,
  chooseLackInReverseValue,
  chooseLackInValue,
} from "../../../../../../../constant/constant_value";
import {
  useClassCreateStudentBehavour,
  useClassStudentBehavour,
} from "../../../../../../../hooks/member_tab/class-api";
import JoinFormSelect from "../../../../../../../JoiningForm/Student/Form/JoinFormSelect";
import QLoader from "../../../../../../../Loader/QLoader";
import style from "./BehaviourForm.module.css";

function BehaviourForm({ studentBehaviour, onRefetch }) {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [formData, setFormData] = useState({
    improvements: "",
    lackIn: "",
    ratings: null,
  });

  if (false) {
    setHover(null);
  }

  const { classStudentBehavour, classStudentBehavourRefetch } =
    useClassStudentBehavour({
      data: {
        sid: studentBehaviour?._id,
      },
      skip: !studentBehaviour?.studentBehaviour,
    });

  const [classCreateStudentBehavour] = useClassCreateStudentBehavour();
  useEffect(() => {
    if (studentBehaviour?.studentBehaviour) classStudentBehavourRefetch();
  }, [studentBehaviour?.studentBehaviour, classStudentBehavourRefetch]);

  // console.info("THis is one beahivour", classStudentBehavour);

  const onSubmitHandler = () => {
    setDisabled((pre) => !pre);
    classCreateStudentBehavour({
      sid: studentBehaviour?._id,
      behaviour: formData,
    })
      .then(() => {
        onRefetch();
        setDisabled((pre) => !pre);
        setFormData({
          improvements: "",
          lackIn: "",
          ratings: null,
        });
      })
      .catch({});
  };

  const onTranslateValue = (val, keyType) => {
    for (let obj of keyType) {
      if (obj?.key === val) return t(obj?.tKey);
    }
    // return val;
  };
  return (
    <div className={style.behaviourForm}>
      <h6>
        <span className={style.bold}> {t("student_name")} </span>{" "}
        {studentBehaviour?.studentFirstName}{" "}
        {studentBehaviour?.studentMiddleName
          ? studentBehaviour?.studentMiddleName
          : " "}{" "}
        {studentBehaviour?.studentLastName}
      </h6>
      <h6>
        <span className={style.bold}> {t("student_roll_no")} </span>{" "}
        {studentBehaviour?.studentROLLNO}
      </h6>

      {studentBehaviour?.studentBehaviour ? (
        <>
          <input
            type="text"
            maxLength="50"
            disabled
            defaultValue={onTranslateValue(
              classStudentBehavour?.student?.improvements,
              chooseImpovementReverseValue
            )}
            // defaultValue={classStudentBehavour?.student?.improvements}
            readOnly
            className={style.improveInput}
          />
          <input
            type="text"
            maxLength="50"
            disabled
            defaultValue={onTranslateValue(
              classStudentBehavour?.student?.lackIn,
              chooseLackInReverseValue
            )}
            // defaultValue={classStudentBehavour?.student?.lackIn}
            readOnly
            className={style.improveInput}
          />
          <div className={style.starbottom}>
            <h6> {t("student_deserving_stars")} </h6>

            <div className={style.rating}>
              {[...Array(classStudentBehavour?.student?.ratings)].map(
                (index) => {
                  return (
                    <label key={index}>
                      <img
                        className={style.yellow}
                        src="/images/members/star-yellow.svg"
                        alt=""
                      />
                    </label>
                  );
                }
              )}
              {[...Array(5 - classStudentBehavour?.student?.ratings || 0)].map(
                (index) => {
                  return (
                    <label key={index}>
                      <img
                        className={style.yellow}
                        // onMouseLeave={() => setHover(null)}
                        src="/images/members/star-grey.svg"
                        alt=""
                      />
                    </label>
                  );
                }
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          <JoinFormSelect
            selectLabel={t("student_improvements")}
            name="improvements"
            onChange={(e) =>
              setFormData({ ...formData, improvements: e.target.value })
            }
            selectedValue={t("choose_student_improvements")}
            options={chooseImpovementKey}
            optionsValue={chooseImpovementValue}
            value={formData.improvements}
          />
          <JoinFormSelect
            selectLabel={t("student_lackIn")}
            name="lackIn"
            onChange={(e) =>
              setFormData({ ...formData, lackIn: e.target.value })
            }
            selectedValue={t("choose_student_lackIn")}
            value={formData.lackIn}
            options={chooseLackInKey}
            optionsValue={chooseLackInValue}
          />
          {/* <input
            type="text"
            value={formData.improvements}
            onChange={(e) =>
              setFormData({ ...formData, improvements: e.target.value })
            }
            placeholder={t("enter_student_improvements")}
            className={style.behaviourFormInput}
          />
          <input
            type="text"
            value={formData.lackIn}
            onChange={(e) =>
              setFormData({ ...formData, lackIn: e.target.value })
            }
            placeholder={t("enter_student_lack_in")}
            className={style.behaviourFormInput}
          /> */}
          <div className={style.starbottom}>
            <h6>{t("student_deserving_stars")}</h6>

            <div className={style.rating}>
              {[...Array(5)].map((star, index) => {
                const ratingValue = index + 1;
                return (
                  <label>
                    <input
                      value={ratingValue}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          ratings: parseInt(e.target.value),
                        })
                      }
                      type="radio"
                      name="rating"
                      onClick={() => setRating(ratingValue)}
                    />
                    {ratingValue <= (hover || rating) ? (
                      <img
                        className={style.grey}
                        // onMouseEnter={() => setHover(ratingValue)}
                        src="/images/members/star-yellow.svg"
                        alt=""
                      />
                    ) : (
                      <img
                        className={style.yellow}
                        // onMouseLeave={() => setHover(null)}
                        src="/images/members/star-grey.svg"
                        alt=""
                      />
                    )}
                  </label>
                );
              })}
            </div>
          </div>

          <div className={style.submit}>
            <div className={style.submitbtn} onClick={onSubmitHandler}>
              {t("submit")}
            </div>
          </div>
        </>
      )}
      {disabled && <QLoader />}
    </div>
  );
}

export default BehaviourForm;
