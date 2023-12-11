import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useActivityAppliedElection } from "../../../../hooks/member_tab/activity-api";
import LoaderButton from "../../../../Loader/LoaderButton";
import { idChangeAction } from "../../../../redux/store/department-slice";
import { imageShowUrl } from "../../../../services/BaseUrl";
import ElectionInput from "./ElectionInput";
import style from "./ElectionNotification.module.css";
import SearchJoinedList from "./SearchJoinedList";
const ElectionApplied = ({ onClickValue, setElectionShow, onRefetch }) => {
  const [disabled, setDisabled] = useState(false);
  const [searchJoined, setSearchJoined] = useState(false);
  const [appliedElection, setAppliedElection] = useState({
    tagLine: "",
    description: "",
    members: [],
  });
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [activityAppliedElection] = useActivityAppliedElection();

  const onAppliedHandler = () => {
    if (selectedMembers?.length === 3) {
      setDisabled((pre) => !pre);
      activityAppliedElection({
        eid: onClickValue?.electionId,
        sid: onClickValue?.notifyPublisher,
        appliedElection,
      })
        .then(() => {
          // console.info(res);
          setDisabled((pre) => !pre);
          setElectionShow("");
          onRefetch();
        })
        .catch({});
    } else {
    }
  };

  const onSelectMember = (value) => {
    setSelectedMembers((pre) => [...pre, value]);
    setAppliedElection((pre) => ({
      ...pre,
      members: pre.members?.length
        ? [...pre.members, value?._id]
        : [value?._id],
    }));
  };

  const dispatch = useDispatch();
  const searchProfileHandler = (userId) => {
    dispatch(
      idChangeAction.searchId({
        id: userId,
        type: "ID",
        searchAs: "user",
      })
    );
  };
  // console.info("this is eesddas", appliedElection);
  return (
    <>
      <div className={style.election_apply_form_container}>
        <img
          style={{ position: "absolute", right: "3%", cursor: "pointer" }}
          src="/images/close-post-icon.svg"
          alt="close page"
          onClick={() => setElectionShow("")}
        />
        <ElectionInput
          id="tag"
          labelText="Add Tagline"
          type="text"
          placeholder="Please add your tagline"
          value={appliedElection.tagLine}
          onChange={(e) =>
            setAppliedElection({
              ...appliedElection,
              tagLine: e.target.value,
            })
          }
          customStyle={{ marginLeft: "0px", marginBottom: "1.5vw" }}
        />
        <ElectionInput
          id="description"
          labelText="Description"
          type="text"
          placeholder="Please add the description"
          value={appliedElection.description}
          onChange={(e) =>
            setAppliedElection({
              ...appliedElection,
              description: e.target.value,
            })
          }
          customStyle={{ marginLeft: "0px", marginBottom: "1.5vw" }}
        />
        <h6 className={style.add_supporting_heading}>
          Add 3 Supporting Member
        </h6>
        {selectedMembers?.map((support) => (
          <div className={style.add_supporting_member} key={support?._id}>
            <img
              src={
                support?.studentProfilePhoto
                  ? `${imageShowUrl}/${support.studentProfilePhoto}`
                  : "/images/member_tab/class/default_avatar.svg"
              }
              alt="avatar of user"
            />
            <section>
              <h6 className={style.add_supporting_member_heading}>
                {`${support.studentFirstName} ${
                  support?.studentMiddleName ? support?.studentMiddleName : ""
                } ${support.studentLastName}`}
              </h6>
              <p className={style.add_supporting_paragraph}>
                <Link
                  to={`/q/${support?.user?.username}/profile`}
                  onClick={() => searchProfileHandler(support?.user?._id)}
                >
                  {support?.user?.username}
                </Link>
              </p>
            </section>
          </div>
        ))}
        {selectedMembers?.length === 3 ? (
          ""
        ) : (
          <div
            className={style.add_supporting_member}
            onClick={() => setSearchJoined(true)}
          >
            <img
              src="/images/member_tab/class/default_avatar.svg"
              alt="avatar of user"
            />
            <section>
              <h6 className={style.add_supporting_member_heading}>
                Add supporting member
              </h6>
              <p className={style.add_supporting_paragraph}>
                search from joined list
              </p>
            </section>
          </div>
        )}
        <button
          className={style.apply_elections_btn}
          disabled={disabled}
          onClick={onAppliedHandler}
        >
          <p>Apply</p>
          {disabled && (
            <div>
              <LoaderButton />
            </div>
          )}
        </button>
      </div>
      {searchJoined && (
        <SearchJoinedList
          onClose={() => setSearchJoined(false)}
          did={onClickValue?.did}
          selectMember={onSelectMember}
          appliedElection={appliedElection}
        />
      )}
    </>
  );
};

export default ElectionApplied;
