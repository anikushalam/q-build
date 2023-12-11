import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import {
  useOneInstituteProfile,
  useOneUserDashboard,
} from "../../../hooks/dashboard/dashboard-api";
import {
  useBlockInstituteByUser,
  useUnblockInstituteByUser,
} from "../../../Post/Institute/Components/post-api";
import {
  useUserFollowIns,
  useUserUnfollowIns,
} from "../../../Post/Institute/Components/search-api";
import style from "./InstituteProfileInfoTop.module.css";

const FollowButtonUser = ({ institute, is_hostel }) => {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const ids = useSelector((state) => state.idChange);
  const [userFollowIns] = useUserFollowIns();
  const [userUnfollowIns] = useUserUnfollowIns();
  const [blockInstituteByUser] = useBlockInstituteByUser();
  const [unblockInstituteByUser] = useUnblockInstituteByUser();
  const { oneInstituteProfileRefetch } = useOneInstituteProfile({
    data: {
      id: institute?._id,
      type: "ID",
    },
    skip: !institute?._id,
  });
  const { oneUserDashboard, oneUserDashboardRefetch } = useOneUserDashboard({
    id: ids?.id,
    skip: !ids?.id,
  });

  useEffect(() => {
    if (ids?.id) {
      oneUserDashboardRefetch();
    }
  }, [ids?.id]);
  const followHandler = () => {
    setDisabled(true);

    userFollowIns({
      InsfollowId: institute?._id,
    })
      .then(() => {
        oneInstituteProfileRefetch();
        setDisabled(false);
      })
      .catch({});
  };

  const unfollowHandler = () => {
    setDisabled(true);

    userUnfollowIns({
      InsfollowId: institute?._id,
    })
      .then(() => {
        oneInstituteProfileRefetch();

        setDisabled(false);
      })
      .catch({});
  };

  const onBlockInstitute = () => {
    setDisabled(true);
    blockInstituteByUser({
      blockId: institute?._id,
    })
      .then(() => {
        oneUserDashboardRefetch();
        setDisabled(false);
      })
      .catch({});
  };

  const onUnblockInstitute = () => {
    setDisabled(true);
    unblockInstituteByUser({
      blockId: institute?._id,
    })
      .then(() => {
        oneUserDashboardRefetch();
        oneInstituteProfileRefetch();
        setDisabled(false);
      })
      .catch({});
  };

  // console.info("this is blodkd", oneUserDashboard);
  return (
    <>
      {oneUserDashboard?.user?.user_block_institute?.includes(
        institute?._id
      ) ? (
        ""
      ) : institute?.userFollowersList?.includes(ids?.id) ? (
        <div
          className={style.profileedit}
          style={{
            right: "1.5rem",
            width: "100px",
            height: "40px",
            borderRadius: "12px",
            opacity: "0.9",
          }}
          title="Unfollow Institute"
        >
          <button
            onClick={unfollowHandler}
            disabled={disabled}
            style={{
              fontSize: "0.9rem",
            }}
          >
            {t("unfollow")}
          </button>
        </div>
      ) : (
        <div
          className={style.profileedit}
          style={{
            right: "1.5rem",
            width: "100px",
            height: "40px",
            borderRadius: "12px",
            opacity: "0.9",
          }}
          title="Follow Institute"
        >
          <button
            onClick={followHandler}
            disabled={disabled}
            style={{
              fontSize: "0.9rem",
            }}
          >
            {t("follow")}
          </button>
        </div>
      )}

      {/* {oneUserDashboard?.user?.user_block_institute?.includes(
        institute?._id
      ) ? (
        <div
          className={style.profileedit}
          style={{
            right: is_hostel ? "40rem" : "27.6rem",
            width: "100px",
            height: "40px",
          }}
          title="Unblock Institute"
        >
          <button
            onClick={onUnblockInstitute}
            disabled={disabled}
            style={{
              fontSize: "0.9rem",
            }}
          >
            {t("blocked")}
          </button>
          <img
            src="/images/block-icon.svg"
            alt="not found"
            style={{
              height: "3rem",
            }}
            onClick={onBlockInstitute}
          />
        </div>
      ) : (
        <div
          className={style.profileedit}
          style={{
            right: is_hostel ? "40rem" : "27.6rem",
            width: "100px",
            height: "40px",
            backgroundColor: "#ffffff",
          }}
          title="Block Institute"
        >
          <img
            src="/images/block-icon.svg"
            alt="not found"
            style={{
              height: "3rem",
            }}
            onClick={onBlockInstitute}
          />
        </div>
      )} */}
    </>
  );
};

export default FollowButtonUser;
