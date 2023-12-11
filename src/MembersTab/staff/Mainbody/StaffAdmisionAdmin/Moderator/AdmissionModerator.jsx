import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import { useGetModeratorByAdmissionAdmin } from "../../../../../hooks/member_tab/admission-api";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import AddModerator from "./AddModerator";
import style from "./AdmissionModerator.module.css";
import ModeratoMenu from "./ModeratoMenu";
import ModeratorCard from "./ModeratorCard";
import { useScrollbar } from "../../../../../Scroll/use-scroll";
const AdmissionModerator = ({ instituteId, admissionId }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [addModerator, setAddModerator] = useState(false);
  const [openModeratorMenu, setOpenModeratorMenu] = useState("");
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [refetchStatus, setRefetchStatus] = useState(false);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [moderatorList, setModeratorList] = useState([]);

  const { getModeratorByAdmissionAdmin, getModeratorByAdmissionAdminRefetch } =
    useGetModeratorByAdmissionAdmin({
      data: {
        aid: admissionId,
        page: page,
        limit: 10,
      },
      skip: !admissionId,
    });
  const { scrollToTop } = useScrollbar();
  useEffect(() => {
    scrollToTop();
  }, []);
  useEffect(() => {
    if (admissionId) {
      setShowingDataLoading(true);
      getModeratorByAdmissionAdminRefetch();
    }
  }, [admissionId, page, getModeratorByAdmissionAdminRefetch]);
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (refetchStatus) {
      setModeratorList(getModeratorByAdmissionAdmin?.all_mods);
      setRefetchStatus(false);
      setShowingDataLoading(false);
    } else {
      if (getModeratorByAdmissionAdmin?.all_mods) {
        setModeratorList((prevState) =>
          [
            ...new Set(
              [...prevState, ...getModeratorByAdmissionAdmin?.all_mods]?.map(
                JSON.stringify
              )
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
      } else if (getModeratorByAdmissionAdmin?.all_mods?.length === 0)
        setShowingDataLoading(false);
      else {
      }
    }

    if (getModeratorByAdmissionAdmin?.all_mods?.length === 10) setState(true);
    else setState(false);
  }, [getModeratorByAdmissionAdmin?.all_mods]);

  const onBackWithArrowLeft = () => {
    navigate(-1);
  };
  const onRefetchWhenAdd = () => {
    setRefetchStatus(true);
    setPage(1);
    setShowingDataLoading(true);
    getModeratorByAdmissionAdminRefetch();
  };
  // console.info("this s moderator", openModeratorMenu);
  return (
    <div className={style.moderator_container}>
      <section className={style.moderator_container_title}>
        <img
          src="/images/arrow-left-fees-icon.svg"
          onClick={onBackWithArrowLeft}
          alt="go to previous tab"
          title="Go Back"
          style={{
            cursor: "pointer",
          }}
        />
        <h6>{t("admission_moderators")}</h6>
      </section>
      <BorderBottom
        customStyle={{
          width: "100%",
        }}
      />
      <h6
        className={style.add_new_moderator}
        onClick={() => setAddModerator(true)}
      >
        {t("add_new_moderator")}
      </h6>
      <div className={style.refund_list}>
        {moderatorList?.map((moderator, index) =>
          moderatorList?.length === index + 1 ? (
            <div ref={ref} key={moderator?._id}>
              <ModeratorCard
                moderator={moderator}
                setOpenModeratorMenu={setOpenModeratorMenu}
              />
            </div>
          ) : (
            <ModeratorCard
              moderator={moderator}
              key={moderator?._id}
              setOpenModeratorMenu={setOpenModeratorMenu}
            />
          )
        )}
        {addModerator && (
          <AddModerator
            onClose={() => setAddModerator((pre) => !pre)}
            instituteId={instituteId}
            admissionId={admissionId}
            onRefetchWhenAdd={onRefetchWhenAdd}
          />
        )}
        {openModeratorMenu && (
          <ModeratoMenu
            admissionId={admissionId}
            instituteId={instituteId}
            onRefetch={onRefetchWhenAdd}
            onClose={() => setOpenModeratorMenu("")}
            openModeratorMenu={openModeratorMenu}
          />
        )}
        {showingDataLoading && <QvipleLoading />}
      </div>
    </div>
  );
};

export default AdmissionModerator;
