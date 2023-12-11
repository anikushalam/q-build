import React, { useEffect, useState } from "react";
import style from "../../Hostel/Hostel.module.css";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import { useGetModeratorByInstitute } from "../../../../../Department/Institute/Components/DepartmentApi/depart-api";
import InstituteModeratorCard from "../../../../../InstituteModerator/InstituteModeratorCard";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import InstituteModeratoMenu from "../../../../../InstituteModerator/InstituteModeratoMenu";
import AddLeaveAndTransferModerator from "../../../../../InstituteModerator/AddLeaveAndTransferModerator";
const LeaveModerator = ({ instituteId }) => {
  const { t } = useTranslation();
  const [addModerator, setAddModerator] = useState(false);
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [moderatorList, setModeratorList] = useState([]);
  const [openModeratorMenu, setOpenModeratorMenu] = useState("");

  const { getModeratorByInstitute, getModeratorByInstituteRefetch } =
    useGetModeratorByInstitute({
      data: {
        id: instituteId,
        page: page,
        limit: 10,
        search: "",
      },
      skip: !instituteId,
    });

  useEffect(() => {
    if (instituteId) {
      setShowingDataLoading(true);
      getModeratorByInstituteRefetch();
    }
  }, [instituteId, page, getModeratorByInstituteRefetch]);
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (getModeratorByInstitute?.all_mods) {
      if (page === 1) {
        setModeratorList(getModeratorByInstitute?.all_mods);
      } else {
        setModeratorList((prevState) =>
          [
            ...new Set(
              [...prevState, ...getModeratorByInstitute?.all_mods]?.map(
                JSON.stringify
              )
            ),
          ]?.map(JSON.parse)
        );
      }

      setShowingDataLoading(false);
    } else if (getModeratorByInstitute?.all_mods?.length === 0)
      setShowingDataLoading(false);
    else {
    }

    if (getModeratorByInstitute?.all_mods?.length === 10) setState(true);
    else setState(false);
  }, [getModeratorByInstitute?.all_mods]);

  const onClose = () => {
    setAddModerator((pre) => !pre);
  };
  const onRefetchWhenAdd = () => {
    setPage((prev) => (prev = 1));
    setShowingDataLoading(true);
    getModeratorByInstituteRefetch();
  };
  return (
    <>
      <div
        className={style.with_search}
        style={{
          justifyContent: "flex-end",
          marginTop: "0.8rem",
        }}
      >
        <p className={style.add_new_category} onClick={onClose}>
          {t("create_new_moderator")}
        </p>
      </div>
      {moderatorList?.map((moderator, index) =>
        moderatorList?.length === index + 1 ? (
          <div ref={ref} key={moderator?._id}>
            <InstituteModeratorCard
              moderator={moderator}
              setOpenModeratorMenu={setOpenModeratorMenu}
            />
          </div>
        ) : (
          <InstituteModeratorCard
            moderator={moderator}
            key={moderator?._id}
            setOpenModeratorMenu={setOpenModeratorMenu}
          />
        )
      )}

      {addModerator && (
        <AddLeaveAndTransferModerator
          onClose={() => setAddModerator((pre) => !pre)}
          instituteId={instituteId}
          onRefetchWhenAdd={onRefetchWhenAdd}
        />
      )}
      {openModeratorMenu && (
        <InstituteModeratoMenu
          instituteId={instituteId}
          onRefetch={onRefetchWhenAdd}
          onClose={() => setOpenModeratorMenu("")}
          openModeratorMenu={openModeratorMenu}
          viewBy="LEAVE_AUTHORITY"
        />
      )}
      {showingDataLoading && <QvipleLoading />}
    </>
  );
};

export default LeaveModerator;
