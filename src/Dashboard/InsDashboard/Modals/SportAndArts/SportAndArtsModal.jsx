import React, { useState } from "react";
import { Dialog, Divider } from "@mui/material";
import style from "./SportAndArtsModal.module.css";
import {
  useGetSingleInsDataQuery,
  useStaffApproveArrayQuery,
} from "../../../../services/qvipleAPI";
import { imageShowUrl } from "../../../../services/BaseUrl";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useActivateSportsAndArtsMutation } from "../../../../services/sports_and_arts/sportsAndArtsApi";
import { sportsArtChangeAction } from "../../../../redux/store/sports-and-arts-slice";
import QLoader from "../../../../Loader/QLoader";
import { useTranslation } from "react-i18next";

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

function SportAndArtsModal({
  sportsArtsnModal,
  hideModal,
  edit,
  sportsArtsHead,
  sportHeadProfilePhoto,
}) {
  const [sportsHeadData] = useActivateSportsAndArtsMutation();
  const [disabled, setDisabled] = useState(false);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const ids = useSelector((state) => state.idChange);
  const { data: sportsArtsStaff } = useStaffApproveArrayQuery({
    id: ids?.id,
    page: 1,
    limit: 100,
  });
  const navigate = useNavigate();
  const { data: dashboardData } = useGetSingleInsDataQuery();
  const [assign, setAssign] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [sportsHead, setSportsHead] = useState({
    id: "",
    name: "",
    index: "",
    photoId: "",
    profilePhoto: "",
  });

  const sportsArtsQuery = () => {
    if (sportsHead.id !== "") {
      setDisabled(true);
      sportsHeadData({
        id: ids?.id,
        sid: sportsHead?.id && sportsHead?.id,
      }).then((res) => {
        if (res.data.status) {
          dispatch(
            sportsArtChangeAction.sportsArtQuery({
              spid: res.data.sport,
            })
          );
          setDisabled(false);
          navigate(`/q/${dashboardData?.institute?.name}/sportsandarts`);
        }
      });
    }
  };

  console.info(sportsArtsStaff);

  return (
    <>
      <Dialog open={sportsArtsnModal} onClose={() => hideModal(false)}>
        <div className={style.admissionModal}>
          <div className={style.admissionModalhead}>
            {edit ? (
              <h6>{t("edit_sports_dept")}</h6>
            ) : (
              <h6>{t("activate_sports_dept")}</h6>
            )}
            <img
              onClick={() => hideModal(false)}
              src="/images/close-post-icon.svg"
              alt=""
            />
          </div>
          <Divider />
          <div className={style.admissionModalbody}>
            {!assign &&
              (edit ? (
                <div
                  className={style.assignDesignation}
                  onClick={() => setAssign(true)}
                >
                  <img
                    className={style.sheadProfilePhoto}
                    src={
                      sportHeadProfilePhoto
                        ? `${imageShowUrl}/${sportHeadProfilePhoto}`
                        : "/images/member_tab/class/default_avatar.svg"
                    }
                    alt=""
                  />
                  <div>
                    <h6>{sportsArtsHead}</h6>
                  </div>
                </div>
              ) : (
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
                    <h6>Assign Sports and Arts Head</h6>
                    <p>Search from joined list</p>
                  </div>
                </div>
              ))}

            {assign && !clicked && (
              <>
                <div className={style.searchbar}>
                  <input
                    type="text"
                    placeholder="Search"
                    className={`form-control ${style.searchinput}`}
                  />
                  <img
                    className={style.searchIcon}
                    alt="img"
                    src="/images/search-dash-icon.svg"
                  />
                </div>

                <div className={style.items}>
                  {sportsArtsStaff?.staffIns?.map((d) => (
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
                            id: d?._id,
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
                  <p className={style.desig}>
                    {" "}
                    {t("index_no")} {sportsHead.index}
                  </p>
                </div>
              </div>
            )}
          </div>
          <div className={style.admissionModalfooter}>
            {!clicked && (
              <div className={style.financebtn}>{t("activate")}</div>
            )}
            {clicked &&
              (edit ? (
                <div className={style.activebtn} onClick={sportsArtsQuery}>
                  {t("update")}
                </div>
              ) : (
                <div className={style.activebtn} onClick={sportsArtsQuery}>
                  {t("activate")}
                </div>
              ))}
          </div>
        </div>
      </Dialog>
      {disabled && <QLoader />}
    </>
  );
}

export default SportAndArtsModal;
