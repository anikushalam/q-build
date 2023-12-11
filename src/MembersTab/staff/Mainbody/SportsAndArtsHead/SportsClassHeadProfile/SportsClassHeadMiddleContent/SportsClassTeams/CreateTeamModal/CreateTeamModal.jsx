import React from "react";
import style from "./CreateTeamModal.module.css";
import { Dialog } from "@mui/material";
import {
  useSportClassStudentList,
  useCreateSportsTeam,
} from "../../../../../../../../hooks/sports/sports-api";
import { Divider } from "@mui/material";
import { imageShowUrl } from "../../../../../../../../services/BaseUrl";
import { useEffect, useState } from "react";
import LoaderButton from "../../../../../../../../Loader/LoaderButton";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import QvipleLoading from "../../../../../../../../Loader/QvipleLoading";

function Item({ student, teamdata, setTeamData }) {
  const { t } = useTranslation();
  const handleSelect = () => {
    const arr = teamdata.request;
    const arr2 = teamdata.players;
    arr.push(student?._id);
    arr2.push(student);
    setTeamData({ ...teamdata, request: arr, players: arr2 });
  };

  const handleDeselect = () => {
    const arr = teamdata.request;
    const arr2 = teamdata.players.filter((item) => {
      return item?._id !== student?._id;
    });
    const index = arr.indexOf(student?._id);
    if (index > -1) {
      arr.splice(index, 1);
    }
    setTeamData({ ...teamdata, request: arr, players: arr2 });
  };

  return (
    <div className={style.item}>
      <div className={style.subItem}>
        <img
          alt=""
          src={
            student?.studentProfilePhoto
              ? `${imageShowUrl}/${student?.studentProfilePhoto}`
              : "/images/member_tab/class/default_avatar.svg"
          }
        />
        <div className={style.itemtext}>
          <div className={style.insName}>
            <h6>
              {student?.studentFirstName}{" "}
              {student?.studentMiddleName ? student?.studentMiddleName : " "}{" "}
              {student?.studentLastName}
            </h6>
          </div>
          <p className={style.insUserName}>GR No. {student?.studentGRNO}</p>
        </div>
      </div>

      {teamdata.request.includes(student?._id) ? (
        <img
          id="check"
          className={style.checkbox}
          src="/images/checkbox-icon.svg"
          alt=""
          onClick={handleDeselect}
        />
      ) : (
        <img
          id="check"
          className={style.checkbox}
          src="/images/box-icon.svg"
          alt=""
          onClick={handleSelect}
        />
      )}
    </div>
  );
}

function CreateTeamModal({ openModal, hideModal, insId, cid, teamrefetch }) {
  const { t } = useTranslation();
  const [classMembers, setClassMembers] = useState([]);
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();
  // --------------------------------------
  const [state, setState] = useState(true);
  const [refetchStatus, setRefetchStatus] = useState(false);
  const [editRefetchStatus, setEditRefetchStatus] = useState(false);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [blobImg, setBlobImg] = useState("");
  const [index, setIndex] = useState(0);
  const [createSportsTeam] = useCreateSportsTeam();
  const [loading, setLoading] = useState(false);
  const [selectAll, setSelectAll] = React.useState(false);
  const [teamdata, setTeamData] = useState({
    file: {},
    sportClassTeamName: "",
    captain: "",
    captainn: {},
    request: [],
    players: [],
  });
  const { SportClassStudentList, SportClassStudentListRefetch } =
    useSportClassStudentList({
      data: {
        cid: cid,
        page: page,
      },
      skip: !cid,
    });
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (cid) {
      setShowingDataLoading(true);
      SportClassStudentListRefetch();
    }
  }, [page, cid, SportClassStudentListRefetch]);

  useEffect(() => {
    if (refetchStatus) {
      setClassMembers((prevState) =>
        [
          ...new Set(
            [...SportClassStudentList?.student_query, ...prevState]?.map(
              JSON.stringify
            )
          ),
        ]?.map(JSON.parse)
      );
      setShowingDataLoading(false);
      setRefetchStatus(false);
    } else if (editRefetchStatus) {
      setClassMembers((prevState) =>
        [
          ...new Set(
            [...SportClassStudentList?.student_query]?.map(JSON.stringify)
          ),
        ]?.map(JSON.parse)
      );
      setShowingDataLoading(false);
      setEditRefetchStatus(false);
    } else {
      if (SportClassStudentList?.student_query) {
        setClassMembers((prevState) =>
          [
            ...new Set(
              [...prevState, ...SportClassStudentList?.student_query]?.map(
                JSON.stringify
              )
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
      } else if (SportClassStudentList?.student_query?.length === 0)
        setShowingDataLoading(false);
      else {
      }
    }

    if (SportClassStudentList?.student_query?.length === 10) setState(true);
    else setState(false);
  }, [SportClassStudentList?.student_query]);
  const handleSelectAll = () => {
    const arr = [];
    const arr2 = [];
    for (var i = 0; i < classMembers.length; i++) {
      arr.push(classMembers[i]._id);
      arr2.push(classMembers[i]);
    }
    setTeamData({ ...teamdata, request: arr, players: arr2 });
    setSelectAll(true);
  };
  const handleImageUpload = (e) => {
    setTeamData({ ...teamdata, file: e.target.files[0] });
    setBlobImg(URL.createObjectURL(e.target.files[0]));
  };

  const handleCreate = () => {
    setLoading(true);

    const formData = new FormData();
    formData.append("file", teamdata.file);
    formData.append("sportClassTeamName", teamdata.sportClassTeamName);
    formData.append("captain", teamdata.captain);
    formData.append("request", JSON.stringify(teamdata.request));
    formData.append("cid", cid);

    createSportsTeam(formData)
      .then((res) => {
        if (res.data.status) {
          hideModal(false);
          teamrefetch();
        }
      })
      .catch((err) => {});
  };

  return (
    <Dialog open={openModal}>
      <div className={style.addDisplay}>
        {index === 1 && (
          <div>
            <div className={style.title}>
              <img
                src="/images/left-nav-icon.svg"
                onClick={() => setIndex(0)}
              />
              <h6>{t("add_members")}</h6>
              <div />
            </div>
            <div className={style.content}>
              <div className={style.counts}>
                <p>{teamdata.request.length} selected</p>
                <p style={{ cursor: "pointer" }} onClick={handleSelectAll}>
                  {t("select_all")}
                </p>
              </div>
              <div className={style.items}>
                {classMembers?.map((student, index) =>
                  classMembers?.length === index + 1 ? (
                    <div key={index}>
                      <Item
                        student={student}
                        teamdata={teamdata}
                        setTeamData={setTeamData}
                        selectAll={selectAll}
                        setSelectAll={setSelectAll}
                      />
                      <Divider />
                    </div>
                  ) : (
                    <div key={index} ref={ref}>
                      <Item
                        student={student}
                        teamdata={teamdata}
                        setTeamData={setTeamData}
                        selectAll={selectAll}
                        setSelectAll={setSelectAll}
                      />
                      <Divider />
                    </div>
                  )
                )}
                {showingDataLoading && <QvipleLoading />}
              </div>
            </div>
          </div>
        )}

        {index === 2 && (
          <div>
            <div className={style.title}>
              <img
                src="/images/left-nav-icon.svg"
                onClick={() => setIndex(0)}
              />
              <h6>{t("select_captain")}</h6>
              <div />
            </div>
            <div className={style.content}>
              <div className={style.items}>
                {teamdata?.players?.map((student, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setTeamData({
                        ...teamdata,
                        captain: student?._id,
                        captainn: student,
                      });
                      setIndex(0);
                    }}
                  >
                    <div className={style.item}>
                      <div className={style.subItem}>
                        <img
                          alt=""
                          src={
                            student?.studentProfilePhoto
                              ? `${imageShowUrl}/${student?.studentProfilePhoto}`
                              : "/images/member_tab/class/default_avatar.svg"
                          }
                        />
                        <div className={style.itemtext}>
                          <div className={style.insName}>
                            <h6>
                              {student?.studentFirstName}{" "}
                              {student?.studentMiddleName
                                ? student?.studentMiddleName
                                : " "}{" "}
                              {student?.studentLastName}
                            </h6>
                          </div>
                          <p className={style.insUserName}>
                            {t("gr_no")} {student?.studentGRNO}
                          </p>
                        </div>
                      </div>
                    </div>
                    <Divider />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {index === 0 && (
          <div>
            <div className={style.title}>
              <div />
              <h6>{t("create_new_team")}</h6>

              <img
                src="/images/close-post-icon.svg"
                onClick={() => hideModal(false)}
              />
            </div>
            <div className={style.content}>
              <div className={style.input}>
                <h6>{t("team_name")}</h6>
                <input
                  type="text"
                  value={teamdata.sportClassTeamName}
                  onChange={(e) => {
                    setTeamData({
                      ...teamdata,
                      sportClassTeamName: e.target.value,
                    });
                  }}
                  required
                  placeholder={t("please_enter_team_name")}
                />
              </div>
              <div className={style.selectCount}>
                <p>{teamdata.request.length} Selected</p>
                <p className={style.blueCount} onClick={() => setIndex(1)}>
                  {t("add_members")}
                </p>
              </div>

              {teamdata.captain !== "" ? (
                <div className={style.selectCount}>
                  <div className={style.subItem}>
                    <img
                      alt=""
                      src={
                        teamdata?.captainn?.studentProfilePhoto
                          ? `${imageShowUrl}/${teamdata?.captainn?.studentProfilePhoto}`
                          : "/images/member_tab/class/default_avatar.svg"
                      }
                    />
                    <div className={style.itemtext}>
                      <div className={style.insName}>
                        <h6>
                          {teamdata?.captainn?.studentFirstName}{" "}
                          {teamdata?.captainn?.studentMiddleName
                            ? teamdata?.captainn?.studentMiddleName
                            : " "}{" "}
                          {teamdata?.captainn?.studentLastName}
                        </h6>
                      </div>
                      <p className={style.insUserName}>
                        {t("gr_no")} {teamdata?.captainn?.studentGRNO}
                      </p>
                    </div>
                  </div>
                  <p className={style.blueCount}>{t("captain")}</p>
                </div>
              ) : teamdata.request.length > 0 ? (
                <div className={style.selectCount2} onClick={() => setIndex(2)}>
                  <p className={style.blueCount}>{t("select_captain")}</p>
                </div>
              ) : (
                ""
              )}
              <div className={style.selectCount}>
                <p>{t("add_team_photo")}</p>

                <label htmlFor="document" style={{ cursor: "pointer" }}>
                  <p className={style.blueCount}>Select File</p>
                </label>
                <input
                  className={style.upload}
                  multiple
                  id="document"
                  name="file"
                  onChange={handleImageUpload}
                  type="file"
                  accept="image/jpeg, image/png"
                />
              </div>

              {blobImg !== "" && (
                <img className={style.blobImg} src={blobImg} />
              )}
            </div>

            <div className={style.footer}>
              {teamdata.file?.name &&
              teamdata.sportClassTeamName &&
              teamdata?.request.length > 0 ? (
                <button
                  disabled={loading ? true : false}
                  className={`${style.btn} ${style.btnActive}`}
                  onClick={handleCreate}
                >
                  <p>{t("create")}</p>
                  {loading && <LoaderButton />}
                </button>
              ) : (
                <div className={style.btn}>
                  {" "}
                  <p>{t("create")}</p>{" "}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </Dialog>
  );
}

export default CreateTeamModal;
