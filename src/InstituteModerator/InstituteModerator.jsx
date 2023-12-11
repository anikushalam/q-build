import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Dashboard/InsDashboard/Components/Mainbody/Sidebar/Sidebar";
import Navbar from "../Dashboard/InsDashboard/Components/Navbar/Navbar";
import { useGetModeratorByInstitute } from "../Department/Institute/Components/DepartmentApi/depart-api";
import QvipleLoading from "../Loader/QvipleLoading";
import BorderBottom from "../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import AddInstituteModerator from "./AddInstituteModerator";
import InstituteModeratoMenu from "./InstituteModeratoMenu";
import style from "./InstituteModerator.module.css";
import InstituteModeratorCard from "./InstituteModeratorCard";
const InstituteModerator = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const id = useSelector((state) => state.idChange.id);
  const [addModerator, setAddModerator] = useState(false);
  const [openModeratorMenu, setOpenModeratorMenu] = useState("");
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [refetchStatus, setRefetchStatus] = useState(false);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [moderatorList, setModeratorList] = useState([]);

  const { getModeratorByInstitute, getModeratorByInstituteRefetch } =
    useGetModeratorByInstitute({
      data: {
        id: id,
        page: page,
        limit: 10,
        search: "",
      },
      skip: !id,
    });

  useEffect(() => {
    if (id) {
      setShowingDataLoading(true);
      getModeratorByInstituteRefetch();
    }
  }, [id, page, getModeratorByInstituteRefetch]);
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (refetchStatus) {
      setModeratorList(getModeratorByInstitute?.all_mods);
      setRefetchStatus(false);
      setShowingDataLoading(false);
    } else {
      if (getModeratorByInstitute?.all_mods) {
        setModeratorList((prevState) =>
          [
            ...new Set(
              [...prevState, ...getModeratorByInstitute?.all_mods]?.map(
                JSON.stringify
              )
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
      } else if (getModeratorByInstitute?.all_mods?.length === 0)
        setShowingDataLoading(false);
      else {
      }
    }

    if (getModeratorByInstitute?.all_mods?.length === 10) setState(true);
    else setState(false);
  }, [getModeratorByInstitute?.all_mods]);

  const onBackWithArrowLeft = () => {
    navigate(-1);
  };
  const onRefetchWhenAdd = () => {
    setRefetchStatus(true);
    setPage(1);
    setShowingDataLoading(true);
    getModeratorByInstituteRefetch();
  };
  return (
    <div className={style.insDashboard}>
      <div className={style.navbar}>
        <Navbar status="home" />
      </div>
      <div className={style.mainbody}>
        <div className={style.sidebar}>
          <Sidebar status={"post"} />
        </div>
        <div className={style.newPost}>
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
            <h6>{t("institute_moderators")}</h6>
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
          <div className={style.moderator_list}>
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
              <AddInstituteModerator
                onClose={() => setAddModerator((pre) => !pre)}
                instituteId={id}
                onRefetchWhenAdd={onRefetchWhenAdd}
              />
            )}
            {openModeratorMenu && (
              <InstituteModeratoMenu
                instituteId={id}
                onRefetch={onRefetchWhenAdd}
                onClose={() => setOpenModeratorMenu("")}
                openModeratorMenu={openModeratorMenu}
              />
            )}
            {showingDataLoading && <QvipleLoading />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstituteModerator;
