import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  useUserProfile,
  useUpdateUserProfile,
} from "../../../../Department/Institute/Components/DepartmentApi/depart-api";
import Button from "./Button";
import Input from "./Input";
import style from "./MainProfileEdit.module.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useGetOneUserProfileQuery } from "../../../../services/qvipleAPI";

const BUTTON_WRAPPER_STYLES = {
  position: "relative",
};

const MODAL_STYLES = {
  position: "absolute",
  left: "0",
  top: "3.2vw",
  zIndex: 10,
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,

  zIndex: 10,
};

function Options({ open, onClose, setProfile, profile, status }) {
  const { t } = useTranslation();
  if (!open) return null;

  return (
    <>
      {status === "gender" && (
        <div>
          <div onClick={onClose} style={OVERLAY_STYLES} />
          <div style={MODAL_STYLES} className={style.options}>
            <div
              className={style.option}
              onClick={() => {
                setProfile({
                  ...profile,
                  userGender: "male",
                });
                onClose();
              }}
            >
              {t("male")}
            </div>
            <div
              className={style.option}
              onClick={() => {
                setProfile({
                  ...profile,
                  userGender: "female",
                });
                onClose();
              }}
            >
              {t("female")}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

const MainProfileEdit = ({ setEdit }) => {
  const ids = useSelector((state) => state.idChange);
  const { data: profileData, refetch: profileReftech } =
    useGetOneUserProfileQuery(ids?.id);
  const userId = localStorage.getItem("user");
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState({
    gender: false,
  });
  const { userProfile } = useUserProfile(userId);
  const [updateUserProfile] = useUpdateUserProfile();
  const [disabled, setDisabled] = useState(false);
  const [profile, setProfile] = useState({
    userLegalName: "",
    userAbout: "",
    // userAddress: "",
    userGender: "",
    // userEmail: "",
    userDateOfBirth: "",
    // userHobbies: "",
    // userEducation: "",
  });

  useEffect(() => {
    if (userProfile) {
      setProfile({
        userLegalName: userProfile.user.userLegalName,
        userAbout: userProfile.user.userBio,
        // userAddress: userProfile.user.userAddress,
        userGender: userProfile.user.userGender,
        // userEmail: userProfile.user.userEmail,
        userDateOfBirth: userProfile.user.userDateOfBirth,
        // userHobbies: userProfile.user.userHobbies,
        // userEducation: userProfile.user.userEducation,
      });
    }
  }, [userProfile]);

  const submitProfileHandler = () => {
    setDisabled(true);
    updateUserProfile({
      id: userId,
      infoUpdate: profile,
    })
      .then((res) => {
        setDisabled(false);
        profileReftech();
        navigate(`/q/${userProfile.user?.username}/profile`);
      })
      .catch({});
  };

  // console.info(profile.userGender);

  return (
    <div className={style.container}>
      <div className={style.containerhead}>
        <h6>{t("edit_profile_info")}</h6>
        <img
          src="/images/close-post-icon.svg"
          alt=""
          onClick={() => setEdit(false)}
        />
      </div>
      <div className={style.containercontent}>
        <Input
          id="name"
          type="text"
          value={profile.userLegalName}
          onChange={(e) =>
            setProfile({ ...profile, userLegalName: e.target.value })
          }
          labelText=" Name"
          placeholder="Please enter your name"
        />

        <Input
          id="bio"
          type="text"
          labelText="Bio"
          value={profile.userAbout}
          onChange={(e) =>
            setProfile({ ...profile, userAbout: e.target.value })
          }
          placeholder="Please write down something about"
        />

        {/* <Input
        id="address"
        type="text"
        value={profile.userAddress}
        onChange={(e) =>
          setProfile({ ...profile, userAddress: e.target.value })
        }
        labelText="Live In"
        placeholder="Please enter your address or location"
      /> */}

        <div className={style.item}>
          <label>{t("gender")}</label>
          <div className={style.inputt} style={BUTTON_WRAPPER_STYLES}>
            <div>
              {profile.userGender === "male" ? (
                <h6 onClick={() => setIsOpen({ ...isOpen, gender: true })}>
                  {" "}
                  {t("male")}
                </h6>
              ) : profile.userGender === "female" ? (
                <h6 onClick={() => setIsOpen({ ...isOpen, gender: true })}>
                  {t("female")}
                </h6>
              ) : profile.userGender === "other" ? (
                <h6 onClick={() => setIsOpen({ ...isOpen, gender: true })}>
                  {t("other")}
                </h6>
              ) : (
                <h6 onClick={() => setIsOpen({ ...isOpen, gender: true })}>
                  {" "}
                  {t("gender_details")}
                </h6>
              )}
              {isOpen.gender ? (
                <img
                  className={style.up}
                  src="/images/up-triangle-icon.svg"
                  alt=""
                />
              ) : (
                <img
                  className={style.down}
                  src="/images/downn-icon.svg"
                  alt=""
                />
              )}
            </div>
            <Options
              open={isOpen.gender}
              onClose={() => setIsOpen({ ...isOpen, gender: false })}
              setProfile={setProfile}
              profile={profile}
              status="gender"
            />
          </div>
        </div>

        <Input
          id="dob"
          type="date"
          labelText="Date Of Birth"
          value={profile.userDateOfBirth}
          onChange={(e) =>
            setProfile({ ...profile, userDateOfBirth: e.target.value })
          }
          placeholder="Please enteryour birth date"
        />

        {/* <Input
        id="email"
        type="text"
        labelText="Email id"
        value={profile.userEmail}
        onChange={(e) => setProfile({ ...profile, userEmail: e.target.value })}
        placeholder="Please enter your E-mail id"
      /> */}
        {/* 
      <Input
        id="hobbies"
        type="text"
        labelText="Hobby and Interest"
        value={profile.userHobbies}
        onChange={(e) =>
          setProfile({ ...profile, userHobbies: e.target.value })
        }
        placeholder="Please enter your hobbies and interest"
      /> */}
        {/* <Input
        id="education"
        type="text"
        labelText="Education and Work"
        value={profile.userEducation}
        onChange={(e) =>
          setProfile({ ...profile, userEducation: e.target.value })
        }
        placeholder="Please enter your education and work"
      /> */}
        <div className={style.btncontainer}>
          <Button
            buttonText="Update Your Profile"
            submitHandler={submitProfileHandler}
            disabled={disabled}
          />
        </div>
      </div>
    </div>
  );
};

export default MainProfileEdit;
