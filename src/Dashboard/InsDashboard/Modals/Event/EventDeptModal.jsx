import React, { useEffect, useState } from "react";
import { Dialog, Divider } from "@mui/material";
import style from "../library/LibraryModal.module.css";
import {
  useGetSingleInsDataQuery,
  useStaffApproveArrayQuery,
} from "../../../../services/qvipleAPI";
import { useTranslation } from "react-i18next";
import { imageShowUrl } from "../../../../services/BaseUrl";
import { useNavigate } from "react-router-dom";
import { eventAdminChangeAction } from "../../../../redux/store/event-slice";
import {
  useAssignEventManager,
  useEditEventAdnSeminar,
} from "../../../../hooks/member_tab/event-api";
import { useDispatch, useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";
import ButtonWithAction from "../../../../Custom/Button/ButtonWithAction";

function Item({ img, photoId, name, index, setIndex, assignAdmissionHead }) {
  const ClickAdmission = () => {
    assignAdmissionHead();
    setIndex(index);
  };
  return (
    <div className={style.sidebarbottomitem} onClick={ClickAdmission}>
      <img
        alt="not found"
        src={
          photoId !== "1"
            ? `${imageShowUrl}/${img}`
            : "/images/member_tab/class/default_avatar.svg"
        }
      />
      <div>
        <p className={style.namee}>{name}</p>
        <p className={style.desig}>{index}</p>
      </div>
    </div>
  );
}

function EventDeptModal({
  eventModal,
  hideModal,
  edit,
  librarian,
  onParentRefetch,
}) {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const ids = useSelector((state) => state.idChange);
  const [noMoreResults, setNoMoreResults] = useState(false);
  const [timeeout, setTimeeout] = useState(false);
  const [page, setPage] = useState(1);
  const [allStaff, setAllStaff] = useState([]);
  const [ref, inView] = useInView();
  const [assignEventManager] = useAssignEventManager();
  const [editEventAdnSeminar] = useEditEventAdnSeminar();
  const dispatch = useDispatch();

  const { data: sportsArtsStaff, refetch: sportsArtsStaffRefetch } =
    useStaffApproveArrayQuery(
      {
        id: ids?.id,
        page: page,
        limit: 10,
      },
      { skip: !ids?.id }
    );

  useEffect(() => {
    if (sportsArtsStaff) {
      if (sportsArtsStaff.staffIns) {
        setAllStaff([...allStaff, ...sportsArtsStaff.staffIns]);
      } else if (page > 1) {
        setNoMoreResults(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sportsArtsStaff]);

  useEffect(() => {
    if (inView) {
      if (!noMoreResults) {
        setPage(page + 1);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  useEffect(() => {
    setTimeout(() => {
      setTimeeout(!timeeout);
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigate = useNavigate();
  const { data: dashboardData } = useGetSingleInsDataQuery();
  const [assign, setAssign] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [sportsHead, setSportsHead] = useState({
    sid: "",
    name: "",
    index: "",
    photoId: "",
    profilePhoto: "",
  });

  const eventAdminQuery = () => {
    // if (sportsHead.sid !== "") {
    setDisabled(true);
    assignEventManager({
      id: ids?.id,
      fActivate: {
        sid: sportsHead?.sid,
      },
    }).then((res) => {
      dispatch(
        eventAdminChangeAction.eventAdminQuery({
          lid: res.data?.manager,
          sid: sportsHead.sid,
        })
      );

      setDisabled(false);
      navigate(`/q/${dashboardData?.institute?.name}/events`);
    });
    // }
  };

  const editEventAdminQuery = () => {
    if (sportsHead.sid !== "") {
      setDisabled(true);
      editEventAdnSeminar({
        osid: librarian?._id,
        nsid: sportsHead.sid,
      }).then((res) => {
        dispatch(
          eventAdminChangeAction.eventAdminQuery({
            lid: res.data?.library,
            lhead: sportsHead.sid,
          })
        );
        onParentRefetch();
        setSportsHead({ ...sportsHead, sid: "" });
        setClicked(!clicked);
        setAssign(!assign);
        setDisabled(false);
        hideModal();
      });
    }
  };

  const filterStaff = allStaff?.filter((item) => {
    return item?._id !== librarian?._id;
  });

  return (
    <Dialog open={eventModal} onClose={() => hideModal(false)}>
      <div className={style.admissionModal}>
        <div className={style.admissionModalhead}>
          <h6>{edit ? t("edit_event_manager") : t("activate_event")}</h6>
          <img
            onClick={() => hideModal(false)}
            src="/images/close-post-icon.svg"
            alt=""
          />
        </div>
        <Divider />
        <div className={style.admissionModalbody}>
          {!assign && !edit && (
            <div
              className={style.assignDesignation}
              onClick={() => setAssign(true)}
            >
              <img
                className={style.assignManager}
                src="/images/sports/avatar-circle.svg"
                alt=""
              />
              <div>
                <h6>{t("assign_event_manager")}</h6>
                <p>{t("search_from_joined_list")}</p>
              </div>
            </div>
          )}

          {!assign && edit && (
            <div
              className={style.sidebarbottomitem}
              onClick={() => setAssign(true)}
            >
              <img
                alt="not found"
                src={
                  librarian?.photoId !== "1"
                    ? `${imageShowUrl}/${librarian?.staffProfilePhoto}`
                    : "/images/member_tab/class/default_avatar.svg"
                }
              />
              <div>
                <p className={style.namee}>{`${
                  librarian?.staffFirstName || ""
                } ${
                  librarian?.staffMiddleName ? librarian?.staffMiddleName : ""
                } ${librarian?.staffLastName || ""}`}</p>
                <p className={style.desig}>
                  {" "}
                  {t("index_no")} {librarian?.index}
                </p>
              </div>
            </div>
          )}

          {assign && !clicked && (
            <>
              <div className={style.searchbar}>
                <input
                  type="text"
                  placeholder={t("search")}
                  className={`form-control ${style.searchinput}`}
                />
                <img
                  className={style.searchIcon}
                  alt="img"
                  src="/images/search-dash-icon.svg"
                />
              </div>

              <div className={style.items}>
                {edit
                  ? filterStaff?.map((d) => (
                      <>
                        <Item
                          img={d.staffProfilePhoto}
                          photoId={d.photoId}
                          name={`${d.staffFirstName} ${
                            d.staffMiddleName ? d.staffMiddleName : ""
                          } ${d.staffLastName}`}
                          index={d.staffROLLNO}
                          setIndex={(w) => setClicked(true)}
                          assignAdmissionHead={() => {
                            setSportsHead({
                              ...sportsHead,
                              sid: d?._id,
                              name: `${d?.staffFirstName} ${
                                d?.staffMiddleName ? d?.staffMiddleName : ""
                              } ${d?.staffLastName}`,
                              index: d?.staffROLLNO,
                              photoId: d?.photoId,
                              profilePhoto: d?.staffProfilePhoto,
                            });
                          }}
                        />
                        <Divider />
                      </>
                    ))
                  : allStaff?.map((d) => (
                      <>
                        <Item
                          img={d.staffProfilePhoto}
                          photoId={d.photoId}
                          name={`${d.staffFirstName} ${
                            d.staffMiddleName ? d.staffMiddleName : ""
                          } ${d.staffLastName}`}
                          index={d.staffROLLNO}
                          setIndex={(w) => setClicked(true)}
                          assignAdmissionHead={() => {
                            setSportsHead({
                              ...sportsHead,
                              sid: d?._id,
                              name: `${d?.staffFirstName} ${
                                d?.staffMiddleName ? d?.staffMiddleName : ""
                              } ${d?.staffLastName}`,
                              index: d?.staffROLLNO,
                              photoId: d?.photoId,
                              profilePhoto: d?.staffProfilePhoto,
                            });
                          }}
                        />
                        <Divider />
                      </>
                    ))}
              </div>
            </>
          )}
          {assign && clicked && (
            <div className={style.sidebarbottomitem}>
              <img
                alt="not found"
                src={
                  sportsHead.photoId !== "1"
                    ? `${imageShowUrl}/${sportsHead.profilePhoto}`
                    : "/images/member_tab/class/default_avatar.svg"
                }
              />
              <div>
                <p className={style.namee}>{sportsHead.name}</p>
                <p className={style.desig}>Index No. {sportsHead.index}</p>
              </div>
            </div>
          )}
        </div>
        <div className={style.admissionModalfooter}>
          <ButtonWithAction
            disabled={disabled}
            shwoLoader={true}
            buttonText={edit ? t("edit_") : t("activate")}
            customStyleButton={{
              minHeight: "2rem",
              marginTop: "0rem",
            }}
            onAction={edit ? editEventAdminQuery : eventAdminQuery}
          />
        </div>
      </div>
    </Dialog>
  );
}

export default EventDeptModal;
