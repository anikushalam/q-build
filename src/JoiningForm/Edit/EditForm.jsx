import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CustomSuspense from "../../Custom/SuspenseLoading/CustomSuspense";
import { useGetOneUserProfileQuery } from "../../services/qvipleAPI";
import BorderBottom from "../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import style from "../Student/Form/JoinForm.module.css";
import EditOwnStudentForm from "../../MembersTab/student/Mainbody/StudentClass/EditOwnStudentForm";
import { idChangeAction } from "../../redux/store/department-slice";
const InsNavbar = React.lazy(() =>
  import("../../Dashboard/InsDashboard/Components/Navbar/Navbar")
);
const Navbar = React.lazy(() =>
  import("../../Dashboard/UserDashboard/Components/Navbar/Navbar")
);
const EditStaffForm = React.lazy(() => import("./EditStaffForm"));
const EditStudentForm = React.lazy(() => import("./EditStudentForm"));
const EditForm = () => {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [openLoginDetails, setOpenLoginDetalis] = useState(false);
  const ids = useSelector((state) => state.idChange.id);
  const { data: profileData } = useGetOneUserProfileQuery(ids, {
    skip: location.state?.openAs === "INSTITUTE_SIDE" ? true : false,
  });
  const onGoback = () => {
    navigate(-1);
  };

  const onSkip = () => {
    for (let i = 0; i < 2; i++) {
      dispatch(
        idChangeAction.onSkipStudentForm({
          skip: true,
        })
      );
      navigate(-1);
    }
  };

  const onLoginDetailToggle = () => {
    setOpenLoginDetalis((pre) => !pre);
  };
  return (
    <>
      <div className={style.navbar}>
        <CustomSuspense>
          {location.state?.openAs === "INSTITUTE_SIDE" ? (
            <InsNavbar status="home" />
          ) : (
            <Navbar
              status="profile"
              profileId={profileData ? profileData?.user?._id : ""}
              username={profileData?.user?.username}
              name={profileData?.user?.userLegalName}
              photoId={profileData?.user?.photoId}
              profilePhoto={profileData?.user?.profilePhoto}
              profileData={profileData?.user}
            />
          )}
        </CustomSuspense>
      </div>
      {location.state?.openAs === "STUDENT_MEMBER" ? (
        ""
      ) : (
        <div className={style.goback_container}>
          <div className={style.goback_container_text} onClick={onGoback}>
            <img src="/images/arr-left-white.svg" alt="go back icon" />
            <h6 className={style.goback_container_text_go}>{t("go_back")}</h6>
          </div>
        </div>
      )}

      <div className={style.student_from_container}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {params?.activeform === "staff" ? (
            <h6 className={style.student_from_fill}>
              {t("form_update_staff")}
            </h6>
          ) : (
            <>
              <h6 className={style.student_from_fill}>
                {t("form_update_student")}
              </h6>
              {location.state?.openAs === "STUDENT_MEMBER" ||
              location.state?.subTypeOpen === "ADMISSION_ADMIN" ? (
                ""
              ) : (
                <h6
                  className={style.skip_i_do}
                  style={{
                    cursor: "pointer",
                    marginRight: "1rem",
                  }}
                  onClick={onLoginDetailToggle}
                >
                  {t("login_details")}
                </h6>
              )}
            </>
          )}
          {location.state?.openAs === "STUDENT_MEMBER" &&
          !location.state?.type ? (
            <button onClick={onSkip} className={style.skip_i_do}>
              {t("skip_i_do_later")}
            </button>
          ) : (
            ""
          )}
        </div>
        <BorderBottom customStyle={{ width: "100%" }} />

        {params?.activeform === "staff" ? (
          <CustomSuspense>
            <EditStaffForm location={location.state} />
          </CustomSuspense>
        ) : (
          <CustomSuspense>
            {location.state?.openAs === "STUDENT_MEMBER" ? (
              <EditOwnStudentForm location={location.state} />
            ) : (
              <EditStudentForm
                location={location.state}
                onLoginDetailToggle={onLoginDetailToggle}
                openLoginDetails={openLoginDetails}
              />
            )}
          </CustomSuspense>
        )}
      </div>
    </>
  );
};

export default EditForm;
