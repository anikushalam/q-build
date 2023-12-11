import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import style from "./SidebarRight.module.css";
import { Link, useLocation } from "react-router-dom";
import { admissionChangeAction } from "../../../../../redux/store/admission-slice";
import { financeChangeAction } from "../../../../../redux/store/finance-slice";
import { useDispatch, useSelector } from "react-redux";
import { useOneInstituteDashboard } from "../../../../../hooks/dashboard/dashboard-api";
import CustomSuspense from "../../../../../Custom/SuspenseLoading/CustomSuspense";
import { useTranslation } from "react-i18next";
import EventDeptModal from "../../../Modals/Event/EventDeptModal";
import { FileNotUpload } from "../../../../../validation/Snackbar";
const FinanceModal = React.lazy(() =>
  import("../../../Modals/finance/FinanceModal")
);
const AdmissionModal = React.lazy(() =>
  import("../../../Modals/Admission/AdmissionModal")
);
const SportAndArtsModal = React.lazy(() =>
  import("../../../Modals/SportAndArts/SportAndArtsModal")
);
const LibraryModal = React.lazy(() =>
  import("../../../Modals/library/LibraryModal")
);

const CareerModal = React.lazy(() =>
  import("../../../Modals/Career/CareerModal")
);

const TenderModal = React.lazy(() =>
  import("../../../Modals/Tender/TenderModal")
);
const AlumniModal = React.lazy(() =>
  import("../../../Modals/Alumni/AlumniModal")
);
const HostelActivateModal = React.lazy(() =>
  import("../../../Modals/Hostel/HostelActivateModal")
);
const TransportActivateModal = React.lazy(() =>
  import("../../../Modals/Transport/TransportActivateModal")
);

function SidebarRight() {
  const dispatch = useDispatch();
  const getQuery = useLocation();
  const [financeModal, setFinanceModal] = useState(false);
  const [admissionModal, setAdmissionModal] = useState(false);
  const [eventModal, setEventModal] = useState(false);
  const [sportsArtsnModal, setSportsArtModal] = useState(false);
  const [libraryModal, setLibraryModal] = useState(false);
  const [hostelModal, setHostelModal] = useState(false);
  const [transportModal, setTransportModal] = useState(false);
  const [openModal, setOpenModal] = useState({
    career: false,
    tender: false,
    alumni: false,
  });
  const { t } = useTranslation();
  const id = useSelector((state) => state.idChange.id);
  const loginRole = useSelector((state) => state.authChange.loginRole);

  const { oneInstituteDashboard, oneInstituteDashboardRefetch } =
    useOneInstituteDashboard({
      id: id,
      skip: !id,
    });
  const [notificationState, setNotificationState] = useState({
    msg: "",
    run: false,
  });
  useEffect(() => {
    if (id) oneInstituteDashboardRefetch();
  }, [id, oneInstituteDashboardRefetch]);

  const assignId = () => {
    dispatch(
      admissionChangeAction.admissionQuery({
        aid: oneInstituteDashboard?.institute?.admissionDepart[0],
      })
    );
    dispatch(
      financeChangeAction.financeQuery({
        fid: oneInstituteDashboard?.institute?.financeDepart[0],
      })
    );
  };

  // console.info(oneInstituteDashboard?.institute);

  // console.info(openModal);

  return (
    <div
      style={{
        position: "sticky",
        top: "-2vh",
      }}
    >
      {oneInstituteDashboard?.institute?.accessFeature === "UnLocked" &&
      oneInstituteDashboard?.institute?.status === "Approved" ? (
        <div className={style.SidebarRight}>
          <div className={style.department}>
            {getQuery.state?.loginRole === "_usr_rs" ||
            loginRole === "_usr_rs" ? (
              <Card
                name={t("department")}
                img="/images/department-sidebar-icon.svg"
                customStyle={{
                  opacity: "0.8",
                }}
              />
            ) : (
              <Link
                to={`/q/${oneInstituteDashboard?.institute?.name}/department`}
                state={{ mydeaprtment: "Rams" }}
              >
                <Card
                  name={t("department")}
                  img="/images/department-sidebar-icon.svg"
                />
              </Link>
            )}
          </div>
          <div className={style.staff}>
            {getQuery.state?.loginRole === "_usr_rs" ||
            loginRole === "_usr_rs" ? (
              <Card
                name={t("staff_teacher")}
                img="/images/staff-icon.svg"
                customStyle={{
                  opacity: "0.8",
                }}
              />
            ) : (
              <Link to={`/q/${oneInstituteDashboard?.institute?.name}/staff`}>
                <Card name={t("staff_teacher")} img="/images/staff-icon.svg" />
              </Link>
            )}
          </div>
          <div className={style.students}>
            {getQuery.state?.loginRole === "_usr_rs" ||
            loginRole === "_usr_rs" ? (
              <Card
                name={t("students")}
                img="/images/students-icon.svg"
                customStyle={{
                  opacity: "0.8",
                }}
              />
            ) : (
              <Link to={`/q/${oneInstituteDashboard?.institute?.name}/student`}>
                <Card name={t("students")} img="/images/students-icon.svg" />
              </Link>
            )}
          </div>

          {getQuery.state?.loginRole === "_usr_rs" ||
          loginRole === "_usr_rs" ? (
            <div className={style.finance}>
              <Card
                name={t("finance")}
                img="/images/finance-icon.svg"
                customStyle={{
                  opacity: "0.8",
                }}
              />
            </div>
          ) : oneInstituteDashboard?.institute?.financeStatus === "Enable" ? (
            <div className={style.finance} onClick={assignId}>
              <Link to={`/q/${oneInstituteDashboard?.institute?.name}/finance`}>
                <Card name={t("finance")} img="/images/finance-icon.svg" />
              </Link>
            </div>
          ) : (
            <div
              className={style.finance}
              onClick={() => setFinanceModal(true)}
            >
              <Card name={t("finance")} img="/images/finance-icon.svg" />
            </div>
          )}

          {getQuery.state?.loginRole === "_usr_rs" ||
          loginRole === "_usr_rs" ? (
            <div className={style.admission}>
              <Card
                name={t("admission")}
                img="/images/admision-sidebar-icon.svg"
                customStyle={{
                  opacity: "0.8",
                }}
              />
            </div>
          ) : oneInstituteDashboard?.institute?.admissionStatus === "Enable" ? (
            <div className={style.admission} onClick={assignId}>
              <Link
                to={`/q/${oneInstituteDashboard?.institute?.name}/admission`}
              >
                <Card
                  name={t("admission")}
                  img="/images/admision-sidebar-icon.svg"
                />
              </Link>
            </div>
          ) : (
            <div
              className={style.admission}
              onClick={() => setAdmissionModal(true)}
            >
              <Card
                name={t("admission")}
                img="/images/admision-sidebar-icon.svg"
              />
            </div>
          )}

          {getQuery.state?.loginRole === "_usr_rs" ||
          loginRole === "_usr_rs" ? (
            <div className={style.library}>
              <Card
                name="Library"
                img="/images/liabrary-icon.svg"
                customStyle={{
                  opacity: "0.8",
                }}
              />
            </div>
          ) : oneInstituteDashboard?.institute?.libraryActivate === "Enable" ? (
            <div className={style.library}>
              <Link
                to={`/q/${oneInstituteDashboard?.institute?.name}/library?a=book`}
              >
                <Card name="Library" img="/images/liabrary-icon.svg" />
              </Link>
            </div>
          ) : (
            <div
              className={style.library}
              onClick={() => setLibraryModal(true)}
            >
              <Card name="Library" img="/images/liabrary-icon.svg" />
            </div>
          )}

          {getQuery.state?.loginRole === "_usr_rs" ||
          loginRole === "_usr_rs" ? (
            <div className={style.elearning}>
              <Card
                name={t("event_seminars")}
                img="/images/sidebar/dashboard-sidebar/event.svg"
                customStyle={{
                  opacity: "0.8",
                }}
              />
            </div>
          ) : oneInstituteDashboard?.institute?.eventManagerStatus ===
            "Enable" ? (
            <div className={style.elearning}>
              <Link
                to={`/q/${oneInstituteDashboard?.institute?.name}/events`}
                state={{
                  eid: `${oneInstituteDashboard?.institute?.eventManagerDepart[0]}`,
                }}
              >
                <Card
                  name={t("event_seminars")}
                  img="/images/sidebar/dashboard-sidebar/event.svg"
                />
              </Link>
            </div>
          ) : (
            <div
              className={style.elearning}
              onClick={() => setEventModal(true)}
            >
              <Card
                name={t("event_seminars")}
                img="/images/sidebar/dashboard-sidebar/event.svg"
              />
            </div>
          )}
          {/* 
          {oneInstituteDashboard?.institute?.sportStatus === "Enable" ? (
            <div className={style.sports}>
              <Link
                to={`/q/${oneInstituteDashboard?.institute?.name}/sportsandarts`}
              >
                <Card
                  name={t("sports_arts")}
                  img="/images/sports-sidebar-icon.svg"
                />
              </Link>
            </div>
          ) : (
            <div
              className={style.sports}
              onClick={() => setSportsArtModal(true)}
            >
              <Card
                name={t("sports_arts")}
                img="/images/sports-sidebar-icon.svg"
              />
            </div>
          )} */}

          <div className={style.elearning}>
            {getQuery.state?.loginRole === "_usr_rs" ||
            loginRole === "_usr_rs" ? (
              <Card
                name={t("ins_moderator")}
                img="/images/moderator-sidebar-icon.svg"
                customStyle={{
                  opacity: "0.8",
                }}
              />
            ) : (
              <Link
                to={`/q/${oneInstituteDashboard?.institute?.name}/moderator`}
              >
                <Card
                  name={t("ins_moderator")}
                  img="/images/moderator-sidebar-icon.svg"
                />
              </Link>
            )}
          </div>
          {getQuery.state?.loginRole === "_usr_rs" ||
          loginRole === "_usr_rs" ? (
            <div className={style.elearning}>
              <Card
                name={t("career")}
                img="/images/sidebar/dashboard-sidebar/career.svg"
                customStyle={{
                  opacity: "0.8",
                }}
              />
            </div>
          ) : oneInstituteDashboard?.institute?.careerStatus === "Enable" ? (
            <div className={style.elearning}>
              <Link
                to={`/q/${oneInstituteDashboard?.institute?.name}/career`}
                state={{
                  lcid: `${oneInstituteDashboard?.institute?.careerDepart[0]}`,
                }}
              >
                <Card
                  name={t("career")}
                  img="/images/sidebar/dashboard-sidebar/career.svg"
                />
              </Link>
            </div>
          ) : (
            <div
              className={style.elearning}
              onClick={() => setOpenModal({ ...openModal, career: true })}
            >
              <Card
                name={t("career")}
                img="/images/sidebar/dashboard-sidebar/career.svg"
              />
            </div>
          )}

          {getQuery.state?.loginRole === "_usr_rs" ||
          loginRole === "_usr_rs" ? (
            <div className={style.elearning}>
              <Card
                name={t("tenders")}
                img="/images/sidebar/dashboard-sidebar/tenders.svg"
                customStyle={{
                  opacity: "0.8",
                }}
              />
            </div>
          ) : oneInstituteDashboard?.institute?.tenderStatus === "Enable" ? (
            <div className={style.elearning}>
              <Link
                to={`/q/${oneInstituteDashboard?.institute?.name}/tender`}
                state={{
                  ltid: `${oneInstituteDashboard?.institute?.tenderDepart[0]}`,
                }}
              >
                <Card
                  name={t("tenders")}
                  img="/images/sidebar/dashboard-sidebar/tenders.svg"
                />
              </Link>
            </div>
          ) : (
            <div
              className={style.elearning}
              onClick={() => setOpenModal({ ...openModal, tender: true })}
            >
              <Card
                name={t("tenders")}
                img="/images/sidebar/dashboard-sidebar/tenders.svg"
              />
            </div>
          )}

          {getQuery.state?.loginRole === "_usr_rs" ||
          loginRole === "_usr_rs" ? (
            <div className={style.elearning}>
              <Card
                name={t("alumni")}
                img="/images/sidebar/dashboard-sidebar/alumni.svg"
                customStyle={{
                  opacity: "0.8",
                }}
              />
            </div>
          ) : oneInstituteDashboard?.institute?.aluminiStatus === "Enable" ? (
            <div className={style.elearning}>
              <Link
                to={`/q/${oneInstituteDashboard?.institute?.name}/alumni`}
                state={{
                  aid: `${oneInstituteDashboard?.institute?.aluminiDepart[0]}`,
                }}
              >
                <Card
                  name={t("alumni")}
                  img="/images/sidebar/dashboard-sidebar/alumni.svg"
                />
              </Link>
            </div>
          ) : (
            <div
              className={style.elearning}
              onClick={() => setOpenModal({ ...openModal, alumni: true })}
            >
              <Card
                name={t("alumni")}
                img="/images/sidebar/dashboard-sidebar/alumni.svg"
              />
            </div>
          )}

          {getQuery.state?.loginRole === "_usr_rs" ||
          loginRole === "_usr_rs" ? (
            <div className={style.finance}>
              <Card
                name={t("hostel")}
                img="/images/hostel-institute-icon.svg"
                customStyle={{
                  opacity: "0.8",
                }}
              />
            </div>
          ) : oneInstituteDashboard?.institute?.hostelStatus === "Enable" ? (
            <div className={style.finance} onClick={assignId}>
              <Link
                to={`/q/${oneInstituteDashboard?.institute?.name}/hostel`}
                state={{
                  hid: oneInstituteDashboard?.institute?.hostelDepart?.[0],
                }}
              >
                <Card
                  name={t("hostel")}
                  img="/images/hostel-institute-icon.svg"
                />
              </Link>
            </div>
          ) : (
            <div className={style.finance} onClick={() => setHostelModal(true)}>
              <Card
                name={t("hostel")}
                img="/images/hostel-institute-icon.svg"
              />
            </div>
          )}

          {getQuery.state?.loginRole === "_usr_rs" ||
          loginRole === "_usr_rs" ? (
            <div className={style.finance}>
              <Card
                name={t("transport")}
                img="/images/sidebar/dashboard-sidebar/transport.svg"
                customStyle={{
                  opacity: "0.8",
                }}
              />
            </div>
          ) : oneInstituteDashboard?.institute?.transportStatus === "Enable" ? (
            <div className={style.finance} onClick={assignId}>
              <Link
                to={`/q/${oneInstituteDashboard?.institute?.name}/transport`}
                state={{
                  tid: oneInstituteDashboard?.institute?.transportDepart?.[0],
                }}
              >
                <Card
                  name={t("transport")}
                  img="/images/sidebar/dashboard-sidebar/transport.svg"
                />
              </Link>
            </div>
          ) : (
            <div
              className={style.finance}
              onClick={() => setTransportModal(true)}
            >
              <Card
                name={t("transport")}
                img="/images/sidebar/dashboard-sidebar/transport.svg"
              />
            </div>
          )}

          {getQuery.state?.loginRole === "_usr_rs" ||
          loginRole === "_usr_rs" ? (
            <div className={style.finance}>
              <Card
                name={t("setting")}
                img="/images/member_tab/institute/institute-setting-icon.svg"
                customStyle={{
                  opacity: "0.8",
                }}
              />
            </div>
          ) : (
            <div className={style.finance}>
              <Link
                to={`/q/${oneInstituteDashboard?.institute?.name}/other/setting`}
              >
                <Card
                  name={t("setting")}
                  img="/images/member_tab/institute/institute-setting-icon.svg"
                />
              </Link>
            </div>
          )}
          {getQuery.state?.loginRole === "_usr_rs" ||
          loginRole === "_usr_rs" ? (
            <div className={style.finance}>
              <Card
                name={t("excel_import")}
                img="/images/member_tab/institute/institute-import-icon.svg"
                customStyle={{
                  opacity: "0.8",
                }}
              />
            </div>
          ) : (
            <div className={style.finance}>
              <Link
                to={`/q/${oneInstituteDashboard?.institute?.name}/excel/import`}
              >
                <Card
                  name={t("excel_import")}
                  img="/images/member_tab/institute/institute-import-icon.svg"
                />
              </Link>
            </div>
          )}

          {/* 
          <div
            className={style.elearning}
            onClick={() =>
              setNotificationState({
                msg: "Module not activated yet",
                run: true,
              })
            }
          >
            <Card
              name={t("e_learning")}
              img="/images/elearning-sidebar-icon.svg"
            />
          </div>
          <div
            className={style.elearning}
            onClick={() =>
              setNotificationState({
                msg: "Module not activated yet",
                run: true,
              })
            }
          >
            <Card
              name={t("transport")}
              img="/images/sidebar/dashboard-sidebar/transport.svg"
            />
          </div>
          <div
            className={style.elearning}
            onClick={() =>
              setNotificationState({
                msg: "Module not activated yet",
                run: true,
              })
            }
          >
            <Card
              name={t("tpo")}
              img="/images/sidebar/dashboard-sidebar/tpo.svg"
            />
          </div>
          <div
            className={style.elearning}
            onClick={() =>
              setNotificationState({
                msg: "Module not activated yet",
                run: true,
              })
            }
          >
            <Card
              name={t("r&d")}
              img="/images/sidebar/dashboard-sidebar/r&d.svg"
            />
          </div>
          <div
            className={style.elearning}
            onClick={() =>
              setNotificationState({
                msg: "Module not activated yet",
                run: true,
              })
            }
          >
            <Card
              name={t("research")}
              img="/images/sidebar/dashboard-sidebar/publication.svg"
            />
          </div>
          <div
            className={style.elearning}
            onClick={() =>
              setNotificationState({
                msg: "Module not activated yet",
                run: true,
              })
            }
          >
            <Card
              name={t("blogs")}
              img="/images/sidebar/dashboard-sidebar/blogs.svg"
            />
          </div>
          <div
            className={style.elearning}
            onClick={() =>
              setNotificationState({
                msg: "Module not activated yet",
                run: true,
              })
            }
          >
            <Card
              name={t("student_projects")}
              img="/images/sidebar/dashboard-sidebar/projects.svg"
            />
          </div> */}

          <CustomSuspense>
            {financeModal && (
              <FinanceModal
                financeModal={financeModal}
                hideModal={(w) => setFinanceModal(w)}
              />
            )}
            {admissionModal && (
              <AdmissionModal
                admissionModal={admissionModal}
                hideModal={(w) => setAdmissionModal(w)}
              />
            )}
            {eventModal && (
              <EventDeptModal
                eventModal={eventModal}
                hideModal={(w) => setEventModal(w)}
              />
            )}
            {sportsArtsnModal && (
              <SportAndArtsModal
                sportsArtsnModal={sportsArtsnModal}
                hideModal={(w) => setSportsArtModal(w)}
              />
            )}

            {libraryModal && (
              <LibraryModal
                libraryModal={libraryModal}
                hideModal={(w) => setLibraryModal(w)}
              />
            )}

            {openModal.career && (
              <CareerModal
                openModal={openModal.career}
                hideModal={(w) => setOpenModal({ ...openModal, career: w })}
              />
            )}

            {openModal.tender && (
              <TenderModal
                openModal={openModal.tender}
                hideModal={(w) => setOpenModal({ ...openModal, tender: w })}
              />
            )}

            {openModal.alumni && (
              <AlumniModal
                openModal={openModal.alumni}
                hideModal={(w) => setOpenModal({ ...openModal, alumni: w })}
              />
            )}
            {hostelModal && (
              <HostelActivateModal
                hostelModal={hostelModal}
                hideModal={setHostelModal}
              />
            )}
            {transportModal && (
              <TransportActivateModal
                transportModal={transportModal}
                hideModal={setTransportModal}
              />
            )}
          </CustomSuspense>
        </div>
      ) : oneInstituteDashboard?.institute?.status === "Approved" &&
        oneInstituteDashboard?.institute?.accessFeature === "Locked" ? (
        <div className={style.SidebarRight}>
          <div className={style.department}>
            <Card
              name={t("department")}
              img="/images/department-sidebar-icon.svg"
            />
          </div>
          <div className={style.staff}>
            <Card name={t("staff_teacher")} img="/images/staff-icon.svg" />
          </div>
          <div className={style.students}>
            <Card name={t("students")} img="/images/students-icon.svg" />
          </div>
          <div className={style.finance}>
            <Card name={t("finance")} img="/images/finance-icon.svg" />
          </div>
          <div className={style.admission}>
            <Card
              name={t("admission")}
              img="/images/admision-sidebar-icon.svg"
            />
          </div>
          <div className={style.library}>
            <Card name={t("library")} img="/images/liabrary-icon.svg" />
          </div>
          {/* <div className={style.sports}>
            <Card
              name={t("sports_arts")}
              img="/images/sports-sidebar-icon.svg"
            />
          </div> */}
          {/* <div className={style.elearning}>
            <Card name="E-learning" img="/images/elearning-sidebar-icon.svg" />
          </div> */}
        </div>
      ) : oneInstituteDashboard?.institute?.accessFeature === "Locked" &&
        oneInstituteDashboard?.institute?.status === "Not Approved" ? (
        <div className={style.SidebarRight}>
          <div className={style.department}>
            <Card
              name={t("department")}
              img="/images/department-sidebar-icon.svg"
            />
          </div>
          <div className={style.staff}>
            <Card name={t("staff_teacher")} img="/images/staff-icon.svg" />
          </div>
          <div className={style.students}>
            <Card name={t("students")} img="/images/students-icon.svg" />
          </div>
          <div className={style.finance}>
            <Card name={t("finance")} img="/images/finance-icon.svg" />
          </div>
          <div className={style.admission}>
            <Card
              name={t("admission")}
              img="/images/admision-sidebar-icon.svg"
            />
          </div>
          <div className={style.library}>
            <Card name={t("library")} img="/images/liabrary-icon.svg" />
          </div>

          <div className={style.elearning}>
            <Card
              name={t("event_seminars")}
              img="/images/sidebar/dashboard-sidebar/event.svg"
            />
          </div>
          {/* <div className={style.sports}>
            <Card
              name={t("sports_arts")}
              img="/images/sports-sidebar-icon.svg"
            />
          </div> */}
          <div className={style.elearning}>
            <Card
              name={t("ins_moderator")}
              img="/images/moderator-sidebar-icon.svg"
            />
          </div>

          <div className={style.elearning}>
            <Card
              name={t("career")}
              img="/images/sidebar/dashboard-sidebar/career.svg"
            />
          </div>
          <div className={style.elearning}>
            <Card
              name={t("tenders")}
              img="/images/sidebar/dashboard-sidebar/tenders.svg"
            />
          </div>
          <div className={style.elearning}>
            <Card
              name={t("alumni")}
              img="/images/sidebar/dashboard-sidebar/alumni.svg"
            />
          </div>

          <div className={style.elearning}>
            <Card name={t("hostel")} img="/images/hostel-institute-icon.svg" />
          </div>
          <div className={style.elearning}>
            <Card
              name={t("transport")}
              img="/images/sidebar/dashboard-sidebar/transport.svg"
            />
          </div>

          {/* <div className={style.sports}>
            <Card
              name={t("sports_arts")}
              img="/images/sports-sidebar-icon.svg"
            />
          </div> */}
          {/* <div className={style.elearning}>
            <Card name="E-learning" img="/images/elearning-sidebar-icon.svg" />
          </div> */}
        </div>
      ) : (
        ""
      )}
      <div className={style.qviple_about}>
        <p>
          <a href="https://qviple.com/" target="_blank" rel="noreferrer">
            {t("about")}
          </a>
        </p>
        <p>
          <span>
            <a
              href="https://qviple.com/q/terms/condition"
              target="_blank"
              rel="noreferrer"
            >
              {t("terms_use")}
            </a>
          </span>
          <span>
            <a
              href="https://qviple.com/q/privacy/policy"
              target="_blank"
              rel="noreferrer"
            >
              {t("privacy_policy")}
            </a>
          </span>
        </p>
        <p>
          <a
            href="https://support.qviple.com/"
            target="_blank"
            rel="noreferrer"
          >
            {t("ins_guide_manual")}
          </a>
        </p>
        <p>
          <a
            href="https://support.qviple.com/"
            target="_blank"
            rel="noreferrer"
          >
            {t("user_guide_manual")}
          </a>
        </p>
        <p>
          <a
            href="https://play.google.com/store/apps/details?id=com.mithakalminds.qviple"
            target="_blank"
            rel="noreferrer"
          >
            {t("get_app")}
          </a>
        </p>
        <p className={style.qviple_logo}>
          <img src="/images/qviple-logo.svg" alt="company logo" />
          Mithkal Minds{" "}
          <img src="/images/dash-copy.svg" alt="copy right symbol" /> 2022
        </p>
      </div>

      {notificationState.run && (
        <FileNotUpload
          msg={notificationState.msg}
          run={notificationState.run}
          setRun={() => setNotificationState({ msg: "", run: false })}
          postiton="bottom"
          type="error"
        />
      )}
    </div>
  );
}

export default SidebarRight;
