import React from "react";
import style from "./ParticipateEvents.module.css";
import { useTranslation } from "react-i18next";
import SelectStudent from "./SelectStudent";
import { useState } from "react";
import {
  imageShowUrl,
  imageShowUrl2,
} from "../../../../../../services/BaseUrl";
import LoaderButton from "../../../../../../Loader/LoaderButton";
import { useParticipateResultDeclaration } from "../../../../../../hooks/member_tab/department-api";

function UpdateResult({
  pid,
  setUpdateResult,
  refetchStudents,
  setRefetchStudents,
  participativeEventDetailsRefetch,
  did,
}) {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const [participateResultDeclaration] = useParticipateResultDeclaration();
  const [resultData, setResultData] = useState({
    sid: "",
    rank: "",
    student: {},
    winner: {},
    runnerUp: {},
    secondRunnerUp: {},
  });

  const [selectClick, setSelectClick] = useState({
    student: false,
    runnerUp: false,
    secondRunnerUp: false,
    result: false,
  });

  const handleClick = () => {
    // setRefetchStudents(!refetchStudents);
    setDisabled(true);
    participateResultDeclaration({
      pid: pid,
      did: did,
      result_set: [
        { sid: resultData.winner._id, rank: "Winner" },
        { sid: resultData.runnerUp._id, rank: "Ist Runner" },
        { sid: resultData.secondRunnerUp._id, rank: "IInd Runner" },
      ],
    })
      .then((res) => {
        setDisabled(false);
        setRefetchStudents(!refetchStudents);
        participativeEventDetailsRefetch();
        setUpdateResult(false);
      })
      .catch((err) => {
        setDisabled(false);
        setRefetchStudents(!refetchStudents);
      });
  };

  return (
    <div className={style.peventleft}>
      <div className={style.peventCardtop}>{t("update_result")}</div>
      <div className={style.peventleftbody}>
        <div
          className={
            selectClick.student
              ? `${style.selectPlayers} ${style.selectPlayersActive}`
              : style.selectPlayers
          }
          onClick={() =>
            setSelectClick({
              ...selectClick,
              student: !selectClick.student,
            })
          }
        >
          {resultData.winner?._id ? (
            <div className={style.selectdStudentItem}>
              <div className={style.imgcontainer}>
                <img
                  src={
                    resultData.winner?.studentProfilePhoto
                      ? `${imageShowUrl}/${resultData.winner?.studentProfilePhoto}`
                      : "/images/member_tab/class/default_avatar.svg"
                  }
                  alt=""
                />
              </div>
              <div className={style.issuedBookItemMidright}>
                <h6>
                  {resultData.winner?.studentFirstName}{" "}
                  {resultData.winner?.studentMiddleName
                    ? resultData.winner?.studentMiddleName
                    : " "}{" "}
                  {resultData.winner?.studentLastName}
                  {`(${t("winner")})`}
                </h6>
                <p>Gr No. {resultData.winner?.studentGRNO}</p>
              </div>
            </div>
          ) : (
            <div className={style.selectPosition}>
              {t("select_winner")}

              {selectClick.student ? (
                <img
                  className={`${style.upIconn} `}
                  src={`${imageShowUrl2}/up-triangle-icon.svg`}
                  alt=""
                />
              ) : (
                <img
                  className={style.downIconn}
                  src={`${imageShowUrl2}/downn-icon.svg`}
                  alt=""
                />
              )}
            </div>
          )}
          <SelectStudent
            pid={pid}
            open={selectClick.student}
            onClose={() =>
              setSelectClick({
                ...selectClick,
                student: false,
              })
            }
            setFormData={setResultData}
            formData={resultData}
            status="student"
          />
        </div>

        {resultData?.winner?._id && (
          <div
            className={
              selectClick.runnerUp
                ? `${style.selectPlayers} ${style.selectPlayersActive}`
                : style.selectPlayers
            }
            onClick={() =>
              setSelectClick({
                ...selectClick,
                runnerUp: !selectClick.runnerUp,
              })
            }
          >
            {resultData.runnerUp?._id ? (
              <div className={style.selectdStudentItem}>
                <div className={style.imgcontainer}>
                  <img
                    src={
                      resultData.runnerUp?.studentProfilePhoto
                        ? `${imageShowUrl}/${resultData.runnerUp?.studentProfilePhoto}`
                        : "/images/member_tab/class/default_avatar.svg"
                    }
                    alt=""
                  />
                </div>
                <div className={style.issuedBookItemMidright}>
                  <h6>
                    {resultData.runnerUp?.studentFirstName}{" "}
                    {resultData.runnerUp?.studentMiddleName
                      ? resultData.runnerUp?.studentMiddleName
                      : " "}{" "}
                    {resultData.runnerUp?.studentLastName} &nbsp;{" "}
                    {`(${t("runner_up")})`}
                  </h6>
                  <p>Gr No. {resultData.runnerUp?.studentGRNO}</p>
                </div>
              </div>
            ) : (
              <div className={style.selectPosition}>
                {t("select_runner")}

                {selectClick.runnerUp ? (
                  <img
                    className={`${style.upIconn} `}
                    src={`${imageShowUrl2}/up-triangle-icon.svg`}
                    alt=""
                  />
                ) : (
                  <img
                    className={style.downIconn}
                    src={`${imageShowUrl2}/downn-icon.svg`}
                    alt=""
                  />
                )}
              </div>
            )}
            <SelectStudent
              pid={pid}
              open={selectClick.runnerUp}
              onClose={() =>
                setSelectClick({
                  ...selectClick,
                  runnerUp: false,
                })
              }
              setFormData={setResultData}
              formData={resultData}
              status="runnerUp"
            />
          </div>
        )}

        {resultData?.winner?._id && resultData?.runnerUp?._id && (
          <div
            className={
              selectClick.secondRunnerUp
                ? `${style.selectPlayers} ${style.selectPlayersActive}`
                : style.selectPlayers
            }
            onClick={() =>
              setSelectClick({
                ...selectClick,
                secondRunnerUp: !selectClick.secondRunnerUp,
              })
            }
          >
            {resultData.secondRunnerUp?._id ? (
              <div className={style.selectdStudentItem}>
                <div className={style.imgcontainer}>
                  <img
                    src={
                      resultData.secondRunnerUp?.studentProfilePhoto
                        ? `${imageShowUrl}/${resultData.secondRunnerUp?.studentProfilePhoto}`
                        : "/images/member_tab/class/default_avatar.svg"
                    }
                    alt=""
                  />
                </div>
                <div className={style.issuedBookItemMidright}>
                  <h6>
                    {resultData.secondRunnerUp?.studentFirstName}{" "}
                    {resultData.secondRunnerUp?.studentMiddleName
                      ? resultData.secondRunnerUp?.studentMiddleName
                      : " "}{" "}
                    {resultData.secondRunnerUp?.studentLastName} &nbsp;
                    {`(${t("second_runner")})`}
                  </h6>
                  <p>Gr No. {resultData.secondRunnerUp?.studentGRNO}</p>
                </div>
              </div>
            ) : (
              <div className={style.selectPosition}>
                {t("select_second_runner")}

                {selectClick.secondRunnerUp ? (
                  <img
                    className={`${style.upIconn} `}
                    src={`${imageShowUrl2}/up-triangle-icon.svg`}
                    alt=""
                  />
                ) : (
                  <img
                    className={style.downIconn}
                    src={`${imageShowUrl2}/downn-icon.svg`}
                    alt=""
                  />
                )}
              </div>
            )}
            <SelectStudent
              pid={pid}
              open={selectClick.secondRunnerUp}
              onClose={() =>
                setSelectClick({
                  ...selectClick,
                  secondRunnerUp: false,
                })
              }
              setFormData={setResultData}
              formData={resultData}
              status="rsecondRunnerUp"
            />
          </div>
        )}

        {/* <div
          className={
            selectClick.result
              ? `${style.selectPlayers} ${style.selectPlayersActive}`
              : style.selectPlayers
          }
          onClick={() =>
            setSelectClick({
              ...selectClick,
              result: !selectClick.result,
            })
          }
        >
          {resultData.rank !== "" ? (
            <div className={style.selectPosition}>{resultData.rank}</div>
          ) : (
            <div className={style.selectPosition}>
              {t("select_position")}

              {selectClick.result ? (
                <img
                  className={`${style.upIconn} `}
                  src={`${imageShowUrl2}/up-triangle-icon.svg`}
                  alt=""
                />
              ) : (
                <img
                  className={style.downIconn}
                  src={`${imageShowUrl2}/downn-icon.svg`}
                  alt=""
                />
              )}
            </div>
          )}
          <SelectStudent
            open={selectClick.result}
            onClose={() =>
              setSelectClick({
                ...selectClick,
                result: false,
              })
            }
            setFormData={setResultData}
            formData={resultData}
            status="result"
          />
        </div> */}

        {resultData?.winner?._id &&
          resultData?.runnerUp?._id &&
          resultData?.secondRunnerUp?._id && (
            <div className={style.updateResult} onClick={handleClick}>
              {t("update_result")}{" "}
              {disabled && (
                <div style={{ marginTop: "0.7vw" }}>
                  <LoaderButton />
                </div>
              )}
            </div>
          )}
      </div>
    </div>
  );
}

export default UpdateResult;
