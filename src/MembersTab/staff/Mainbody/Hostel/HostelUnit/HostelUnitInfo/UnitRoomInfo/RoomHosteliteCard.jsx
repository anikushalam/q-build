import React from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { idChangeAction } from "../../../../../../../redux/store/department-slice";
import { imageShowUrl } from "../../../../../../../services/BaseUrl";
import style from "../../../Hostel.module.css";

const RoomHosteliteCard = ({ hostelite, vacant, index, viewAs }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  return (
    <>
      {!vacant ? (
        viewAs === "INSTITUTE" ? (
          <section className={style.hostelite_container}>
            <img
              alt="Student Request Avatar"
              src={
                hostelite?.bed_allotted_candidate?.photoId !== "1"
                  ? `${imageShowUrl}/${hostelite?.bed_allotted_candidate?.studentProfilePhoto}`
                  : "/images/member_tab/class/default_avatar.svg"
              }
            />
            <div className={style.hostelite_container_inner}>
              <div className={style.hostelite_container_inner_text}>
                <h6>
                  {viewAs === "HOSTEL_SEARCH"
                    ? "Hostelites Name"
                    : `${
                        hostelite?.bed_allotted_candidate?.studentFirstName ??
                        ""
                      } ${
                        hostelite?.bed_allotted_candidate?.studentMiddleName ??
                        ""
                      } ${
                        hostelite?.bed_allotted_candidate?.studentLastName ?? ""
                      }`}
                </h6>
                <p>
                  {t("bed_number")} {index + 1}
                </p>
              </div>
              {viewAs === "STUDENT" || viewAs === "HOSTEL_SEARCH" ? (
                ""
              ) : (
                <img
                  src="/images/three-24-dot-icon.svg"
                  alt="menu icon"
                  // onClick={(e) => setOpenRuleMenu(rules)}
                  className={style.menu_icon}
                  title="Menu"
                />
              )}
            </div>
          </section>
        ) : (
          <Link
            to={`/q/${hostelite?.bed_allotted_candidate?.user?.username}/profile`}
            onClick={() => {
              dispatch(
                idChangeAction.searchId({
                  id: hostelite?.bed_allotted_candidate?.user?._id,
                  type: "ID",
                })
              );
            }}
          >
            <section className={style.hostelite_container}>
              <img
                alt="Student Request Avatar"
                src={
                  hostelite?.bed_allotted_candidate?.photoId !== "1"
                    ? `${imageShowUrl}/${hostelite?.bed_allotted_candidate?.studentProfilePhoto}`
                    : "/images/member_tab/class/default_avatar.svg"
                }
              />
              <div className={style.hostelite_container_inner}>
                <div className={style.hostelite_container_inner_text}>
                  <h6>
                    {viewAs === "HOSTEL_SEARCH"
                      ? "Hostelites Name"
                      : `${
                          hostelite?.bed_allotted_candidate?.studentFirstName ??
                          ""
                        } ${
                          hostelite?.bed_allotted_candidate
                            ?.studentMiddleName ?? ""
                        } ${
                          hostelite?.bed_allotted_candidate?.studentLastName ??
                          ""
                        }`}
                  </h6>
                  <p>
                    {t("bed_number")} {index + 1}
                  </p>
                </div>
                {viewAs === "STUDENT" || viewAs === "HOSTEL_SEARCH" ? (
                  ""
                ) : (
                  <img
                    src="/images/three-24-dot-icon.svg"
                    alt="menu icon"
                    // onClick={(e) => setOpenRuleMenu(rules)}
                    className={style.menu_icon}
                    title="Menu"
                  />
                )}
              </div>
            </section>
          </Link>
        )
      ) : (
        <section className={style.hostelite_container}>
          {vacant ? (
            <img
              alt="Student Request Avatar"
              src={"/images/hostel/vacant-plus-icon.svg"}
            />
          ) : (
            <img
              alt="Student Request Avatar"
              src={
                hostelite?.bed_allotted_candidate?.photoId !== "1"
                  ? `${imageShowUrl}/${hostelite?.bed_allotted_candidate?.studentProfilePhoto}`
                  : "/images/member_tab/class/default_avatar.svg"
              }
            />
          )}
          <div className={style.hostelite_container_inner}>
            <div className={style.hostelite_container_inner_text}>
              {vacant ? (
                <h6>{t("vacant_bed")}</h6>
              ) : (
                <h6>{`${
                  hostelite?.bed_allotted_candidate?.studentFirstName ?? ""
                } ${
                  hostelite?.bed_allotted_candidate?.studentMiddleName ?? ""
                } ${
                  hostelite?.bed_allotted_candidate?.studentLastName ?? ""
                }`}</h6>
              )}
              <p>
                {t("bed_number")} {index + 1}
              </p>
            </div>
            {viewAs === "STUDENT" || viewAs === "HOSTEL_SEARCH" ? (
              ""
            ) : (
              <img
                src="/images/three-24-dot-icon.svg"
                alt="menu icon"
                // onClick={(e) => setOpenRuleMenu(rules)}
                className={style.menu_icon}
                title="Menu"
              />
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default RoomHosteliteCard;
