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
import DisabledButton from "../Custom/Button/DisabledButton";
import { useCreateTender } from "../hooks/member_tab/career-api";

function OpenVacanciesForm({ setStatus, ltid }) {
  const { t } = useTranslation();
  const [createNewTender] = useCreateTender();
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
  const [tenderData, setTenderData] = useState({
    requirement: "",
    budget: "",
    depart: [],
    description: "",
    tenderOrder: "",
    tenderOrder_name: "",
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
      setTenderData({
        ...tenderData,
        tenderOrder: res.data?.imageKey,
        tenderOrder_name: e.target.files[0].name,
      });
      setDisabled(false);
    });
  };
  const handleCreateTender = () => {
    setDisabled(true);
    createNewTender({
      ltid: ltid,
      tenderData: {
        tender_requirement: tenderData.requirement,
        tender_budget: tenderData.budget,
        tender_about: tenderData.description,
        tender_order: tenderData.tenderOrder,
        department: tenderData.depart[0],
      },
    })
      .then((res) => {
        setDisabled(false);
        setTenderData({
          requirement: "",
          budget: "",
          depart: [],
          description: "",
          tenderOrder: "",
          tenderOrder_name: "",
        });

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
            {t("create_tender")}
          </div>
          <div className={style.peventleftbody}>
            <div className={style.peventinputContainer}>
              <TextInput
                type="text"
                label={t("requirement")}
                placeholder={t("dept_ex")}
                value={tenderData.requirement}
                handleChange={(e) =>
                  setTenderData({
                    ...tenderData,
                    requirement: e.target.value,
                  })
                }
                customStyleInput={{
                  width: "100%",
                  padding: "0.6rem",
                }}
              />
            </div>

            <div className={style.peventinputContainer}>
              <h3 className={style.input_label}>{t("select_dept_")}</h3>
              <div
                className={style.item}
                onClick={() => setClickDept((clickDept) => !clickDept)}
              >
                <div className={style.select}>
                  {tenderData.depart?.length > 1 ? (
                    <p>
                      {tenderData.depart?.length} {t("departments")}
                    </p>
                  ) : tenderData.depart?.length === 1 ? (
                    <p>
                      {tenderData.depart?.length} {t("department")}
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

            <div className={style.peventinputContainer}>
              <TextInput
                type="number"
                label={t("budget")}
                placeholder={t("budget_eg")}
                value={tenderData.budget}
                handleChange={(e) =>
                  setTenderData({
                    ...tenderData,
                    budget: parseInt(e.target.value),
                  })
                }
                customStyleInput={{
                  width: "100%",
                  padding: "0.6rem",
                }}
              />
            </div>

            <div className={style.peventinputContainer}>
              <h6 className={style.input_label}>{t("tender_desc")}</h6>
              <textarea
                className={style.pollTextarea}
                id="pollTextArea"
                type="text"
                required
                placeholder={t("write_about_job")}
                value={tenderData.description}
                onChange={(e) =>
                  setTenderData({
                    ...tenderData,
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
                <h6>{t("tender_order")}</h6>
                <div className={style.fileinputflex}>
                  <label for="formFile" className={style.fileinputflexleft}>
                    <div className={style.fileinputflexleftdiv}>
                      {t("chose_file")}
                    </div>
                  </label>
                  <div
                    className={`${style.fileinputflexleft} ${style.fileinputflexright}`}
                  >
                    {tenderData.tenderOrder !== ""
                      ? tenderData.tenderOrder_name
                      : t("no_file_chosen")}
                  </div>
                </div>
              </div>
            </div>

            {tenderData.requirement !== "" && tenderData.depart.length > 0 ? (
              <div
                className={style.button_main}
                style={{
                  marginTop: "2rem",
                  width: "100%",
                  cursor: "pointer",
                }}
                onClick={handleCreateTender}
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
            {clickDept === true && tenderData.depart?.length ? (
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
              vacancyData={tenderData}
              setVacancyData={setTenderData}
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
