import { t } from "i18next";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import style from "./JoiningForm.module.css";
import { useNavigate } from "react-router-dom";
import {
  useOneApplicationDetail,
  useStudentValidaForApplicationByAdmission,
} from "../hooks/member_tab/admission-api";
import ApplicationPreviewDetail from "../MembersTab/staff/Mainbody/FinanceManager/FeesStructure/ApplicationPreviewDetail";
import SelectFeeStructure from "../MembersTab/staff/Mainbody/StaffAdmisionAdmin/AdmissionApplicationRequest/AdmssionStructureSelection/SelectFeeStructure";
import { fileShowUrl } from "../services/BaseUrl";
import { Notfication } from "../validation/Snackbar";
import QLoader from "../Loader/QLoader";
function ApplicationDetails({ setIndex, applicantUserName }) {
  const adsId = useSelector((state) => state.admissionChange);
  const id = useSelector((state) => state.idChange.id);
  const [openFees, setOpenFees] = useState(false);
  const [structureId, setStructureId] = useState("");
  const [notificationState, setNotificationState] = useState({
    msg: "",
    run: false,
  });
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();
  const { oneApplicationDetail, oneApplicationDetailRefetch } =
    useOneApplicationDetail({
      apid: adsId?.studentAppId,
      skip: !adsId?.studentAppId,
    });

  const [studentValidaForApplicationByAdmission] =
    useStudentValidaForApplicationByAdmission();
  useEffect(() => {
    if (adsId?.studentAppId) oneApplicationDetailRefetch();
  }, [adsId?.studentAppId, oneApplicationDetailRefetch]);

  const onApplyWithApplication = () => {
    if (oneApplicationDetail?.oneApply?._id && id) {
      setDisabled((pre) => !pre);
      studentValidaForApplicationByAdmission({
        uid: id,
        aid: oneApplicationDetail?.oneApply?._id,
      })
        .then((res) => {
          setDisabled((pre) => !pre);
          if (res?.data?.denied) {
            setNotificationState({
              msg: res?.data?.message,
              run: true,
            });
          } else {
            navigate("/q/joining", {
              state: {
                formAs: "STUDENT",
                openAs:
                  oneApplicationDetail?.oneApply?.application_type ===
                  "Direct Admisison"
                    ? "ADMISSION_DIRECT_APPLY"
                    : "ADMISSION_APPLY",
                appId: oneApplicationDetail?.oneApply?._id,
                urlUsername: applicantUserName,
                first_install:
                  oneApplicationDetail?.oneApply?.application_type ===
                  "Direct Admisison"
                    ? oneApplicationDetail?.oneApply?.direct_linked_structure
                        ?.one_installments?.fees
                    : 0,
                applicationName:
                  oneApplicationDetail?.oneApply?.applicationName,
                departmentId:
                  oneApplicationDetail?.oneApply?.applicationDepartment?._id,
                whichFormShow: "DEPARTMENT",
              },
            });
          }
        })
        .catch({});
    }
  };

  const onToggleFees = () => {
    setOpenFees((pre) => !pre);
  };

  const onSelectedStrucutre = (id) => {
    setStructureId(id);
    onToggleFees();
  };

  const onCloseFees = () => {
    setStructureId("");
    onToggleFees();
  };
  return (
    <div className={style.applications}>
      <div className={style.top1}>
        <img
          src="/images/left-nav-icon.svg"
          alt=""
          onClick={() => setIndex(1)}
        />
        <h6>{oneApplicationDetail?.oneApply?.applicationName}</h6>
        <div />
      </div>
      <div className={style.content}>
        <div className={style.contentColumn}>
          <p>{t("department")}</p>
          <h6>
            {oneApplicationDetail?.oneApply?.applicationDepartment?.dName}
          </h6>
        </div>
        <div className={style.contentRow}>
          <button
            className={style.admission_fees_btn}
            title="See All Fees"
            onClick={onToggleFees}
          >
            <div>{t("admission_fees")}</div>
            <img src="/images/forward-right-icon.svg" alt="next step" />
          </button>
        </div>
        <div className={style.contentRow}>
          {oneApplicationDetail?.oneApply?.applicationStartDate ? (
            <div className={style.contentColumn}>
              <p>{t("starting_date")}</p>
              <h6>{oneApplicationDetail?.oneApply?.applicationStartDate}</h6>
            </div>
          ) : (
            ""
          )}
          {oneApplicationDetail?.oneApply?.applicationEndDate ? (
            <div className={style.contentColumn}>
              <p>{t("last_date")}</p>
              <h6>{oneApplicationDetail?.oneApply?.applicationEndDate}</h6>
            </div>
          ) : (
            ""
          )}
        </div>

        <div className={style.contentRow}>
          {oneApplicationDetail?.oneApply?.applicationSeats ? (
            <div className={style.contentColumn}>
              <p>{t("available_sets")}</p>
              <h6>{oneApplicationDetail?.oneApply?.applicationSeats}</h6>
            </div>
          ) : (
            ""
          )}
          {oneApplicationDetail?.oneApply?.applicationPhoto ? (
            <div className={style.contentColumn}>
              <a
                title="Download File"
                href={`${fileShowUrl}/${oneApplicationDetail?.oneApply?.applicationPhoto}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className={style.admission_fees_btn}>
                  <div>{t("application_brochure")}</div>
                </button>
              </a>
            </div>
          ) : (
            ""
          )}
        </div>

        {oneApplicationDetail?.oneApply?.applicationAbout ? (
          <div className={style.contentColumn}>
            <p>{t("application_info")}</p>
            {oneApplicationDetail?.oneApply?.applicationAbout
              ?.split("\n")
              ?.map((word, index) => (
                <h6 key={index}>{word}</h6>
              ))}
          </div>
        ) : (
          ""
        )}

        {/* <div className={style.contentColumn}>
          <p>{t("admission_process")}</p>
          <ol style={{ padding: "0.8rem" }}>
            <li>Apply for admission from here (Below)</li>
            <li>Fill Required form and submit application</li>
            <li>
              Wait for approval from School/College/Tution (you will get notify
              on Qviple) After Approval
            </li>
            <li>
              Confirm Your application by paying fees online OR you can opt for
              offline fees as well.
            </li>
            <li>After payment, your admission will be confirmed</li>
            <li>
              Visit school/college with required documents for verification and
              submission of original documents e.g. Leaving Certificate. (For
              tuition and coaching verification is not necessary)
            </li>
            <li>After documents verification, you will be allotted class</li>
            <li>Enjoy you Learning...</li>
          </ol>
        </div> */}

        <div className={style.applyBtn} onClick={onApplyWithApplication}>
          {t("apply_to_fill_application_form")}
        </div>
        {openFees && (
          <SelectFeeStructure
            onClose={onToggleFees}
            departmentId={
              oneApplicationDetail?.oneApply?.applicationDepartment?._id ?? ""
            }
            classMasterId={
              oneApplicationDetail?.oneApply?.applicationMaster ?? ""
            }
            batchId={oneApplicationDetail?.oneApply?.applicationBatch?._id}
            onSelectedStrucutre={onSelectedStrucutre}
            asOpen="STUDENT_VIEW_STRUCTURE"
          />
        )}
        {structureId && (
          <ApplicationPreviewDetail
            structureId={structureId}
            setStructureId={onCloseFees}
            viewAs="STUDENT"
          />
        )}
        <Notfication
          msg={notificationState.msg}
          run={notificationState.run}
          setRun={() => setNotificationState({ msg: "", run: false })}
          postiton="bottom"
          type="error"
        />
      </div>
      {disabled && <QLoader />}
    </div>
  );
}

export default ApplicationDetails;
