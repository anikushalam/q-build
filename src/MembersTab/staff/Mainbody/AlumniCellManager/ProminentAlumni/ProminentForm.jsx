import React, { useState } from "react";
import style from "./Prominentform.module.css";
import { useTranslation } from "react-i18next";
import { useFileUpload } from "../../../../../hooks/authentication-api";
import SelectDept from "../../EventAdmin/EventFunctions/Events/SelectDept/SelectDept";
import { useAllDepartment } from "../../../../../Department/Institute/Components/DepartmentApi/depart-api";
import { TextInput } from "../../../../../Authentication/Auth_New_Flow/InputWithoutIcon/InputWithoutIcon";
import QLoader from "../../../../../Loader/QLoader";
import { useAddStory } from "../../../../../hooks/member_tab/alumni-api";
import DisabledButton from "../../../../../Custom/Button/DisabledButton";

function ProminentForm({ aid, setForm, insId, onRefetchWhenProminentCreate }) {
  const { t } = useTranslation();
  const [file, setFile] = useState("");
  const [newAddStory] = useAddStory();
  const { allDepartment, allDepartmentRefetch } = useAllDepartment(insId);
  const [classMasterIndex, setClassMasterIndex] = useState(null);
  const [clickDept, setClickDept] = useState(false);
  const [openCrop, setOpenCrop] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [oneFileUpload] = useFileUpload();
  const [storyData, setStoryData] = useState({
    profile_photo: "",
    name: "",
    batch: "",
    department: "",
    department_name: "",
    job_profile: "",
    company_name: "",
  });

  const profileImgChange = (e) => {
    const image = URL.createObjectURL(e.target.files[0]);
    setFile(e.target.files[0]);
    setProfilePhoto(image);
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    oneFileUpload({
      fileUpload: formData,
    }).then((res) => {
      setStoryData({ ...storyData, profile_photo: res.data?.imageKey });
    });
  };
  const removeImg = () => {
    setFile("");
    setStoryData({ ...storyData, profile_photo: "" });
  };

  const handleCreateEvent = () => {
    setDisabled(true);

    newAddStory({
      aid: aid,
      storyData: storyData,
    })
      .then((res) => {
        setDisabled(false);

        onRefetchWhenProminentCreate();
        setForm(false);
      })
      .catch((err) => {
        setDisabled(false);
      });
  };
  return (
    <>
      {!clickDept && (
        <div className={style.prominentform}>
          <div className={style.addbooktop}>
            <img src="/images/back.svg" onClick={() => setForm(false)} />
            <h6>{t("adding_story")}</h6>
            <div />
          </div>
          <div className={style.addbookform}>
            {file !== "" ? (
              <div className={style.profilephotocontainer}>
                <img
                  className={style.userLogo}
                  src={profilePhoto}
                  alt="Avatar"
                />
                <img
                  onClick={removeImg}
                  className={style.cloose}
                  src="/images/user_signup/close.svg"
                  alt="Avatar"
                />
              </div>
            ) : (
              <div className={style.profilephotocontainer}>
                <label htmlFor="img" style={{ cursor: "pointer" }}>
                  <img
                    className={style.userLogo2}
                    // src="/images/library/addbook_upload.svg"
                    src="/images/alumni/profile-avatar.svg"
                    alt=""
                  />
                </label>
                {/* <img
                    className={style.cloos2}
                    src="/images/library/editicon.svg"
                    alt="Avatar"
                  /> */}
                <input
                  className={style.upload}
                  id="img"
                  name="file"
                  multiple
                  onChange={profileImgChange}
                  type="file"
                  accept="image/gif, image/jpeg, image/png"
                />
              </div>
            )}

            <div
              className={style.peventinputContainer}
              style={{ marginTop: "2rem" }}
            >
              <TextInput
                type="text"
                label={t("name")}
                placeholder={t("name_of_alumni")}
                value={storyData.name}
                handleChange={(e) =>
                  setStoryData({
                    ...storyData,
                    name: e.target.value,
                  })
                }
                customStyleInput={{
                  width: "100%",
                  padding: "0.6rem",
                }}
              />
            </div>

            <div className={style.peventinputContainer}>
              <h6 className={style.selectDeptt}>{t("select_department")}</h6>
              <div
                className={style.item}
                onClick={() => setClickDept((clickDept) => !clickDept)}
              >
                <div className={style.select}>
                  {storyData.department !== "" ? (
                    <p>{storyData.department_name}</p>
                  ) : (
                    <p>{t("select_dept_")}</p>
                  )}
                  <img
                    className={style.selectclass}
                    src="/images/members/selectclass.svg"
                    alt=""
                  />
                </div>
              </div>
            </div>

            {/* <div className={style.peventinputContainer}>
                <TextInput
                  type="text"
                  label={t("select_department")}
                  placeholder={t("plz_select_dept")}
                  value={storyData.department}
                  handleChange={(e) =>
                    setStoryData({
                      ...storyData,
                      department: e.target.value,
                    })
                  }
                  customStyleInput={{
                    width: "100%",
                    padding: "0.6rem",
                  }}
                />
              </div> */}

            <div className={style.peventinputContainer}>
              <TextInput
                type="text"
                label={t("batch")}
                placeholder={t("enterye_of_passing")}
                value={storyData.batch}
                handleChange={(e) =>
                  setStoryData({
                    ...storyData,
                    batch: e.target.value,
                  })
                }
                customStyleInput={{
                  width: "100%",
                  padding: "0.6rem",
                }}
              />
            </div>
            <div className={style.peventinputContainer}>
              <TextInput
                type="text"
                label={t("org_name")}
                placeholder={t("enter_name_of_org")}
                value={storyData.company_name}
                handleChange={(e) =>
                  setStoryData({
                    ...storyData,
                    company_name: e.target.value,
                  })
                }
                customStyleInput={{
                  width: "100%",
                  padding: "0.6rem",
                }}
              />
            </div>

            <div className={style.peventinputContainer}>
              <TextInput
                type="text"
                label={t("job_profile_desig")}
                placeholder={t("enter_job_desig")}
                value={storyData.job_profile}
                handleChange={(e) =>
                  setStoryData({
                    ...storyData,
                    job_profile: e.target.value,
                  })
                }
                customStyleInput={{
                  width: "100%",
                  padding: "0.6rem",
                }}
              />
            </div>

            {storyData.name !== "" &&
            storyData.batch !== "" &&
            storyData.profile_photo !== "" &&
            storyData.job_profile !== "" &&
            storyData.company_name !== "" &&
            storyData.department !== "" ? (
              <div
                className={style.button_main}
                style={{
                  marginTop: "2rem",
                  width: "100%",
                  cursor: "pointer",
                }}
                onClick={handleCreateEvent}
              >
                <span>{t("add_alumni")}</span>

                {/* {disabled && (
                  <div style={{ marginTop: "0.7vw" }}>
                    <LoaderButton />
                  </div>
                )} */}
              </div>
            ) : (
              <DisabledButton
                buttonText={t("save_entry")}
                customStyleButton={{ marginTop: "2rem", width: "100%" }}
              />
            )}
          </div>
        </div>
      )}

      {clickDept && (
        <div className={style.createEvent}>
          <div className={`${style.peventlefttop} ${style.peventlefttopflex}`}>
            <div className={`${style.peventlefttopflexleft}`}>
              <img
                src="/images/back.svg"
                alt="back"
                onClick={() => setClickDept(false)}
              />
              {t("select_dept_")}
            </div>
            {clickDept === true && storyData.department?.length ? (
              <div
                className={style.selectBtn}
                onClick={() => setClickDept(false)}
              >
                {t("select")}
              </div>
            ) : (
              ""
            )}
          </div>
          {allDepartment?.institute?.depart?.map((dept, index) => (
            <SelectDept
              indexNumber={index}
              dept={dept}
              key={dept._id}
              status="prominent"
              storyData={storyData}
              setStoryData={setStoryData}
              classMasterIndex={classMasterIndex}
              setClassMasterIndex={setClassMasterIndex}
              setClickDept={setClickDept}
            />
          ))}
        </div>
      )}
      {disabled && <QLoader />}
    </>
  );
}

export default ProminentForm;
