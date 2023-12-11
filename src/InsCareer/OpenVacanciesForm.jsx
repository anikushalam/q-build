import React from "react";
import style from "./OpenVacanciesForm.module.css";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useAllDepartment } from "../Department/Institute/Components/DepartmentApi/depart-api";
import SelectDepartment from "../MembersTab/staff/Mainbody/EventAdmin/EventFunctions/Events/SelectDept/SelectDept";
import { TextInput } from "../Authentication/Auth_New_Flow/InputWithoutIcon/InputWithoutIcon";
import SelectOptions from "./SelectOptions";
import { imageShowUrl2 } from "../services/BaseUrl";
import { useFileUpload } from "../hooks/authentication-api";
import QLoader from "../Loader/QLoader";
import { useCreateVacancy } from "../hooks/member_tab/career-api";
import DisabledButton from "../Custom/Button/DisabledButton";

function OpenVacanciesForm({
  setStatus,
  lcid,
  setFlag,
  flag,
  getCareerDetailRefetch,
}) {
  const { t } = useTranslation();
  const [createNewVacancy] = useCreateVacancy();
  const [clickDept, setClickDept] = useState(false);
  const ids = useSelector((state) => state.idChange.id);
  const [isOpen, setIsOpen] = useState(false);
  const [oneFileUpload] = useFileUpload();
  const [disabled, setDisabled] = useState(false);
  const [classMasterIndex, setClassMasterIndex] = useState(null);
  const { allDepartment, allDepartmentRefetch } = useAllDepartment({
    id: ids,
    skip: !ids,
  });
  const [vacancyData, setVacancyData] = useState({
    position: "",
    jobType: "",
    depart: [],
    package: "",
    description: "",
    brochure: "",
    brochure_name: "",
  });
  const textArea = document.querySelector("textarea");

  textArea?.addEventListener("keyup", (e) => {
    textArea.style.height = "auto";
    let scHeight = e.target.scrollHeight;
    textArea.style.height = `${scHeight}px`;
  });

  const handleChangeAttachment = (e) => {
    setDisabled(true);
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    oneFileUpload({
      fileUpload: formData,
    }).then((res) => {
      setVacancyData({
        ...vacancyData,
        brochure: res.data?.imageKey,
        brochure_name: e.target.files[0].name,
      });
      setDisabled(false);
    });
  };
  const handleCreateVacancy = () => {
    setDisabled(true);
    createNewVacancy({
      lcid: lcid,
      vacancyData: {
        vacancy_job_type: vacancyData.jobType,
        vacancy_position: vacancyData.position,
        vacancy_package: vacancyData.package,
        vacancy_about: vacancyData.description,
        vacancy_banner: vacancyData.brochure,
        department: vacancyData.depart[0],
      },
    })
      .then((res) => {
        setDisabled(false);
        setFlag(!flag);
        setVacancyData({
          position: "",
          jobType: "",
          depart: [],
          package: "",
          description: "",
          brochure: "",
          brochure_name: "",
        });
        getCareerDetailRefetch();
        setStatus("");
      })
      .catch((err) => {
        setDisabled(false);
      });
  };

  return (
    <>
      {!clickDept && (
        <div className={style.openVacForm}>
          <div
            className={`${style.peventlefttop} ${style.peventlefttopflexleft}`}
          >
            <img
              src="/images/back.svg"
              alt="back"
              onClick={() => setStatus("")}
            />
            {t("create_vacancies")}
          </div>
          <div className={style.peventleftbody}>
            <div className={style.peventinputContainer}>
              <TextInput
                type="text"
                label={t("for_position")}
                placeholder={t("eg_physics")}
                value={vacancyData.position}
                handleChange={(e) =>
                  setVacancyData({
                    ...vacancyData,
                    position: e.target.value,
                  })
                }
                customStyleInput={{
                  width: "100%",
                  padding: "0.6rem",
                }}
              />
            </div>

            <div className={style.peventinputContainer}>
              <h3 className={style.input_label}>{t("job_type")}</h3>

              <div
                className={
                  isOpen
                    ? `${style.formselectactive} ${style.formselect}`
                    : style.formselect
                }
                onClick={() => setIsOpen(!isOpen)}
              >
                {vacancyData.jobType && vacancyData.jobType !== "" ? (
                  <h6 className={style.genderh} onClick={() => setIsOpen(true)}>
                    {vacancyData.jobType}
                  </h6>
                ) : (
                  <h6
                    className={`${style.genderplaceholder} ${style.genderh}`}
                    onClick={() => setIsOpen(true)}
                  >
                    {t("please_select_job_type")}
                  </h6>
                )}

                {isOpen ? (
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
                  open={isOpen}
                  onClose={() => setIsOpen(false)}
                  setVacancyData={setVacancyData}
                  vacancyData={vacancyData}
                />
              </div>
            </div>

            {vacancyData.jobType === "Administrative Job" && (
              <div className={style.peventinputContainer}>
                <h3 className={style.input_label}>{t("select_dept_")}</h3>
                <div
                  className={style.item}
                  onClick={() => setClickDept((clickDept) => !clickDept)}
                >
                  <div className={style.select}>
                    {vacancyData.depart?.length > 1 ? (
                      <p>
                        {vacancyData.depart?.length} {t("departments")}
                      </p>
                    ) : vacancyData.depart?.length === 1 ? (
                      <p>
                        {vacancyData.depart?.length} {t("department")}
                      </p>
                    ) : (
                      <p>{t("plz_select_dept")}</p>
                    )}
                    <img
                      className={style.selectclass}
                      src="/images/members/selectclass.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            )}

            <div className={style.peventinputContainer}>
              <TextInput
                type="number"
                label={t("salary_package")}
                placeholder={t("please_salary_package")}
                value={vacancyData.package}
                handleChange={(e) =>
                  setVacancyData({
                    ...vacancyData,
                    package: parseInt(e.target.value),
                  })
                }
                customStyleInput={{
                  width: "100%",
                  padding: "0.6rem",
                }}
              />
            </div>

            <div className={style.peventinputContainer}>
              <h6 className={style.input_label}>{t("jd_optional")}</h6>
              <textarea
                className={style.pollTextarea}
                id="pollTextArea"
                type="text"
                required
                // maxlength="140"
                placeholder={t("write_about_job")}
                value={vacancyData.description}
                onChange={(e) =>
                  setVacancyData({
                    ...vacancyData,
                    description: e.target.value,
                  })
                }
              />
            </div>

            <div className={style.switchcontainerflex}>
              <input
                class={style.upload}
                type="file"
                id="formFile"
                name="file"
                // accept="application/pdf"
                onChange={handleChangeAttachment}
              />
              <div className={style.fileinputflexContainer}>
                <h6>
                  {t("brochure_select_order")}{" "}
                  <span className={style.labelspan}>*</span>
                </h6>
                <div className={style.fileinputflex}>
                  <label for="formFile" className={style.fileinputflexleft}>
                    <div className={style.fileinputflexleftdiv}>
                      {t("chose_file")}
                    </div>
                  </label>
                  <div
                    className={`${style.fileinputflexleft} ${style.fileinputflexright}`}
                  >
                    {vacancyData.brochure !== ""
                      ? vacancyData.brochure_name
                      : t("no_file_chosen")}
                  </div>
                </div>
              </div>
            </div>

            {vacancyData.jobType === "Administrative Job" &&
            vacancyData.position !== "" &&
            vacancyData.jobType !== "" &&
            vacancyData.depart.length > 0 ? (
              <div
                className={style.button_main}
                style={{
                  marginTop: "2rem",
                  width: "100%",
                  cursor: "pointer",
                }}
                onClick={handleCreateVacancy}
              >
                <span>{t("create")}</span>

                {/* {disabled && (
                <div style={{ marginTop: "0.7vw" }}>
                  <LoaderButton />
                </div>
              )} */}
              </div>
            ) : vacancyData.jobType !== "Administrative Job" &&
              vacancyData.position !== "" &&
              vacancyData.jobType !== "" ? (
              <div
                className={style.button_main}
                style={{
                  marginTop: "2rem",
                  width: "100%",
                  cursor: "pointer",
                }}
                onClick={handleCreateVacancy}
              >
                <span>{t("create")}</span>

                {/* {disabled && (
                <div style={{ marginTop: "0.7vw" }}>
                  <LoaderButton />
                </div>
              )} */}
              </div>
            ) : (
              <DisabledButton
                buttonText={t("create")}
                customStyleButton={{ marginTop: "2rem", width: "100%" }}
              />
            )}
          </div>
        </div>
      )}

      {clickDept && (
        <div className={style.openVacForm}>
          <div className={`${style.peventlefttop} ${style.peventlefttopflex}`}>
            <div className={`${style.peventlefttopflexleft}`}>
              <img
                src="/images/back.svg"
                alt="back"
                onClick={() => setClickDept(false)}
              />
              {t("select_dept_")}
            </div>
            {clickDept === true && vacancyData.depart?.length ? (
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
            <SelectDepartment
              indexNumber={index}
              dept={dept}
              key={dept._id}
              vacancyData={vacancyData}
              setVacancyData={setVacancyData}
              classMasterIndex={classMasterIndex}
              setClassMasterIndex={setClassMasterIndex}
              setClickDept={setClickDept}
              status="vacancy"
            />
          ))}
        </div>
      )}
      {disabled && <QLoader />}
    </>
  );
}

export default OpenVacanciesForm;
