import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Button from "./Button";
import Input from "./Input";
import style from "./MainProfileEdit.module.css";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { useAffiliatedRequest } from "../../../../hooks/plateform/plateform-api";
import { imageShowUrl, imageShowUrl2 } from "../../../../services/BaseUrl";
import {
  useOneInstituteProfile,
  useUpdateInstituteProfile,
} from "../../../../hooks/dashboard/dashboard-api";
import CustomSuspense from "../../../../Custom/SuspenseLoading/CustomSuspense";
import StringLength from "../../../../Custom/Validation/StringLength";
import SelectOptions from "./SelectOptions";
import JoinFormCalender from "../../../../JoiningForm/Student/Form/JoinFormCalender";
const SearchAffiliated = React.lazy(() => import("./SearchAffiliated"));
const MainProfileEdit = () => {
  const ids = useSelector((state) => state.idChange);
  const [affilated, setAffiliated] = useState(false);
  const [isOpen, setIsOpen] = useState({
    insType: false,
  });
  const [affiliatedRequest] = useAffiliatedRequest();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { oneInstituteProfile, oneInstituteProfileRefetch } =
    useOneInstituteProfile({
      data: {
        id: ids?.id,
        type: "ID",
      },
      skip: !ids?.id,
    });
  const [updateInstituteProfile] = useUpdateInstituteProfile();
  const [disabled, setDisabled] = useState(false);
  const [profile, setProfile] = useState({
    insName: "",
    insType: "",
    insEmail: "",
    insPhoneNumber: "",
    insAchievement: "",
    insAddress: "",
    insAbout: "",
    insAffiliated: "",
    one_line_about: "",
    gr_initials: "",
    insEstdDate: "",
    alias_pronounciation: {
      staff_alias: "",
      student_alias: "",
    },
  });

  useEffect(() => {
    if (ids?.id) oneInstituteProfileRefetch();
  }, [ids?.id, oneInstituteProfileRefetch]);

  useEffect(() => {
    if (oneInstituteProfile?.institute) {
      setProfile({
        insName: oneInstituteProfile.institute.insName,
        insType: oneInstituteProfile.institute.insType,
        insEmail: oneInstituteProfile.institute.insEmail,
        insPhoneNumber: oneInstituteProfile.institute.insPhoneNumber,
        insAchievement: oneInstituteProfile.institute.insAchievement,
        insAddress: oneInstituteProfile.institute.insAddress,
        insAbout: oneInstituteProfile.institute.insAbout,
        insAffiliated: oneInstituteProfile.institute?.request_at,
        insAffiliatedBy: oneInstituteProfile.institute?.affiliation_by?.length
          ? oneInstituteProfile.institute?.affiliation_by[0]
          : "",
        one_line_about: oneInstituteProfile.institute.one_line_about,
        gr_initials: oneInstituteProfile?.institute?.gr_initials,
        insEstdDate: oneInstituteProfile?.institute?.insEstdDate,
        alias_pronounciation: {
          staff_alias:
            oneInstituteProfile?.institute?.alias_pronounciation?.staff_alias ??
            "",
          student_alias:
            oneInstituteProfile?.institute?.alias_pronounciation
              ?.student_alias ?? "",
        },
      });
    }
  }, [oneInstituteProfile?.institute]);

  const submitProfileHandler = () => {
    setDisabled(true);
    updateInstituteProfile({
      id: ids.id,
      infoUpdate: profile,
      old_initials: oneInstituteProfile?.institute?.gr_initials,
    })
      .then(() => {
        setDisabled(false);
        oneInstituteProfileRefetch();
        navigate(`/q/${oneInstituteProfile.institute?.name}/profile`);
      })
      .catch({});
  };

  const onSetectAffiliated = (val) => {
    // console.info("thiofshgsd", val);
    affiliatedRequest({
      InstituteId: { query_ins: ids?.id },
      mid: val?._id,
    })
      .then(() => {
        // console.info("ress", res);
      })
      .catch({});
  };
  const onAffiliatedHandler = () => {
    if (profile.insAffiliated || profile.insAffiliatedBy) {
    } else setAffiliated((pre) => !pre);
  };

  const onBack = () => {
    navigate(-1);
  };
  // console.info(oneInstituteProfile?.institute);
  const onDateFunction = (val) => {
    let splitDate = val?.split("/");
    let dateModif = `${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`;
    setProfile((prev) => ({
      ...prev,
      insEstdDate: dateModif,
    }));
  };
  return (
    <div className={style.container}>
      <div className={style.containerhead}>
        <h6>{t("edit_profile_info")}</h6>
        <img src="/images/close-post-icon.svg" alt="" onClick={onBack} />
      </div>
      <div className={style.containercontent}>
        <Input
          id="name"
          type="text"
          value={profile.insName}
          onChange={(e) => setProfile({ ...profile, insName: e.target.value })}
          labelText={t("institute_name")}
          placeholder={t("enter_ins_name")}
        />

        <div className={style.flexItem50}>
          <h3 className={style.input_label}>{t("institute_type")}</h3>
          <div
            className={
              isOpen
                ? `${style.formselectactive} ${style.formselect}`
                : style.formselect
            }
            onClick={() => setIsOpen({ ...isOpen, insType: !isOpen.insType })}
          >
            {profile.insType && profile.insType !== "" ? (
              <h6 className={style.genderh} onClick={() => setIsOpen(true)}>
                {profile.insType}
              </h6>
            ) : (
              <h6
                className={`${style.genderplaceholder} ${style.genderh}`}
                onClick={() => setIsOpen(true)}
              >
                {t("select_ins_type")}
              </h6>
            )}

            {isOpen.insType ? (
              <img
                className={`${style.updownIcon} ${style.downIcon}`}
                src={`${imageShowUrl2}/up-triangle-icon.svg`}
                alt=""
              />
            ) : (
              <img
                className={style.upIcon}
                src={`${imageShowUrl2}/downn-icon.svg`}
                alt=""
              />
            )}
            <SelectOptions
              open={isOpen.insType}
              onClose={() => setIsOpen({ ...isOpen, insType: false })}
              setFormData={setProfile}
              formData={profile}
            />
          </div>
        </div>
        <Input
          id="one_lIner"
          type="text"
          labelText={t("one_liner")}
          value={profile.one_line_about}
          onChange={(e) => {
            if (e.target.value?.length <= 60) {
              setProfile({ ...profile, one_line_about: e.target.value });
            }
          }}
          placeholder={t("ins_about")}
        />
        <StringLength
          maxLength={60}
          valueLength={profile.one_line_about}
          customStyle={{ paddingRight: "2.5rem" }}
        />

        <Input
          id="bio"
          type="text"
          labelText={t("desc_about")}
          value={profile.insAbout}
          // onChange={(e) => {
          //   if (e.target.value?.length <= 120) {
          //     setProfile({ ...profile, insAbout: e.target.value });
          //   }
          // }}
          onChange={(e) => setProfile({ ...profile, insAbout: e.target.value })}
          placeholder={t("enter_ins_about")}
        />
        {/* <StringLength
          maxLength={120}
          valueLength={profile.insAbout}
          customStyle={{ paddingRight: "2.5rem" }}
        /> */}
        <Input
          id="email"
          type="text"
          labelText={t("email_id")}
          value={profile.insEmail}
          onChange={(e) => setProfile({ ...profile, insEmail: e.target.value })}
          placeholder={t("email_detail")}
        />
        <Input
          id="number"
          type="number"
          labelText={t("contact_number")}
          value={profile.insPhoneNumber}
          onChange={(e) =>
            setProfile({ ...profile, insPhoneNumber: e.target.value })
          }
          placeholder={t("contact_number_detial")}
        />
        <JoinFormCalender
          labelText={t("institute_establish_date")}
          placeholder={t("institute_establish_date_placeholder")}
          name={"insEstdDate"}
          value={profile.insEstdDate}
          onDateFunction={onDateFunction}
          customStyleContainer={{
            position: "relative",
            margin: "1.5vw 3.028vw 0 3.028vw",
            width: "auto",
          }}
        />
        <Input
          id="achievement"
          type="text"
          labelText={t("institute_achievements")}
          value={profile.insAchievement}
          onChange={(e) =>
            setProfile({ ...profile, insAchievement: e.target.value })
          }
          placeholder={t("enter_ins_achivement")}
        />
        <Input
          id="address"
          type="text"
          labelText={t("institute_address")}
          value={profile.insAddress}
          onChange={(e) =>
            setProfile({ ...profile, insAddress: e.target.value })
          }
          placeholder={t("enter_ins_address")}
        />
        <Input
          id="type"
          type="text"
          maxLength="5"
          value={profile.gr_initials}
          onChange={(e) =>
            setProfile({ ...profile, gr_initials: e.target.value })
          }
          labelText={t("initials")}
          placeholder={t("enter_initials")}
        />
        <Input
          id="type"
          type="text"
          maxLength="70"
          value={profile.alias_pronounciation.staff_alias}
          onChange={(e) =>
            setProfile({
              ...profile,
              alias_pronounciation: {
                ...profile.alias_pronounciation,
                staff_alias: e.target.value,
              },
            })
          }
          labelText={t("staff_alias")}
          placeholder={t("staff_alias_label")}
        />
        <Input
          id="type"
          type="text"
          maxLength="70"
          value={profile.alias_pronounciation.student_alias}
          onChange={(e) =>
            setProfile({
              ...profile,
              alias_pronounciation: {
                ...profile.alias_pronounciation,
                student_alias: e.target.value,
              },
            })
          }
          labelText={t("student_alias")}
          placeholder={t("student_alias_label")}
        />

        <div className={style.labelContainer} onClick={onAffiliatedHandler}>
          <div className={style.label}>
            <label htmlFor="affilated">Affilated To</label>
          </div>
          {profile.insAffiliated && (
            <div className={style.add_supporting_member}>
              <img
                src={
                  profile.insAffiliated?.photo
                    ? `${imageShowUrl}/${profile.insAffiliated?.photo}`
                    : "/images/member_tab/class/default_avatar.svg"
                }
                alt="avatar of institute"
              />
              <section>
                <h6 className={style.add_supporting_member_heading}>
                  {`${profile.insAffiliated?.affiliation_name}`} {t("pending_")}
                </h6>
              </section>
            </div>
          )}
          {profile.insAffiliatedBy && (
            <div className={style.add_supporting_member}>
              <img
                src={
                  profile.insAffiliatedBy?.photo
                    ? `${imageShowUrl}/${profile.insAffiliatedBy?.photo}`
                    : "/images/member_tab/class/default_avatar.svg"
                }
                alt="avatar of institute"
              />
              <section>
                <h6 className={style.add_supporting_member_heading}>
                  {`${profile.insAffiliatedBy?.affiliation_name}`}{" "}
                  {t("approved_")}
                </h6>
              </section>
            </div>
          )}

          {!profile.insAffiliated && !profile.insAffiliatedBy && (
            <div className={style.inputBox}>
              <p>{t("select_and_send_request")}</p>
              <img src="/images/downn-icon.svg" alt="select icon" />
            </div>
          )}
        </div>
        <CustomSuspense>
          {affilated && (
            <SearchAffiliated
              onClose={() => setAffiliated((pre) => !pre)}
              selectMember={onSetectAffiliated}
            />
          )}
        </CustomSuspense>

        <Button
          buttonText={t("update_profile")}
          submitHandler={submitProfileHandler}
          disabled={disabled}
          customStyle={{ width: "100%" }}
        />
      </div>
    </div>
  );
};

export default MainProfileEdit;
