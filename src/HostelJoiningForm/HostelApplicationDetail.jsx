import React, { useEffect, useState } from "react";
import { t } from "i18next";
import style from "../JoiningForm/JoiningForm.module.css";
import { useNavigate } from "react-router-dom";
import {
  useOneApplicationDetail,
  useStudentValidaForApplicationByAdmission,
} from "../hooks/member_tab/admission-api";
import { fileShowUrl } from "../services/BaseUrl";
import ApplicationPreviewDetail from "../MembersTab/staff/Mainbody/FinanceManager/FeesStructure/ApplicationPreviewDetail";
import SelectHostelFeeStrucutre from "../MembersTab/staff/Mainbody/Hostel/HostelApplicationRequest/HostelApplication/SelectHostelFeeStrucutre";
import { useSelector } from "react-redux";
import { Notfication } from "../validation/Snackbar";
import QLoader from "../Loader/QLoader";
function HostelApplicationDetail({ preview, hostelId }) {
  const id = useSelector((state) => state.idChange.id);
  const navigate = useNavigate();
  const [openFees, setOpenFees] = useState(false);
  const [structureId, setStructureId] = useState("");
  const [notificationState, setNotificationState] = useState({
    msg: "",
    run: false,
  });
  const [disabled, setDisabled] = useState(false);
  const { oneApplicationDetail, oneApplicationDetailRefetch } =
    useOneApplicationDetail({
      apid: preview,
      skip: !preview,
    });
  const [studentValidaForApplicationByAdmission] =
    useStudentValidaForApplicationByAdmission();
  useEffect(() => {
    if (preview) oneApplicationDetailRefetch();
  }, [preview, oneApplicationDetailRefetch]);

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
            navigate("/q/hostel/joining", {
              state: {
                formAs: "STUDENT",
                openAs:
                  oneApplicationDetail?.oneApply?.application_type ===
                  "Direct Admisison"
                    ? "ADMISSION_DIRECT_APPLY"
                    : "PROFILE_SEARCH",
                appId: oneApplicationDetail?.oneApply?._id,
                hostelId: hostelId,
                first_install:
                  oneApplicationDetail?.oneApply?.application_type ===
                  "Direct Admisison"
                    ? oneApplicationDetail?.oneApply?.direct_linked_structure
                        ?.one_installments?.fees
                    : 0,
                applicationName:
                  oneApplicationDetail?.oneApply?.applicationName,
                // urlUsername: applicantUserName,
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
    <div
      className={style.applications}
      style={{
        width: "1128px",
        marginTop: "1rem",
      }}
    >
      <div className={style.top1}>
        <h6>{oneApplicationDetail?.oneApply?.applicationName}</h6>
        <div />
      </div>
      <div className={style.content}>
        <div className={style.contentRow}>
          <div className={style.contentColumn}>
            <p>{t("available_sets")}</p>
            <h6>{oneApplicationDetail?.oneApply?.applicationSeats ?? "N/A"}</h6>
          </div>
          <div className={style.contentColumn}>
            {/* <p>{t("admission_fees")}</p>
            <h6>{oneApplicationDetail?.oneApply?.admissionFee ?? "N/A"} /-</h6> */}
            <button
              className={style.admission_fees_btn}
              title="See All Fees"
              onClick={onToggleFees}
            >
              <div>{t("admission_fees")}</div>
              <img src="/images/forward-right-icon.svg" alt="next step" />
            </button>
          </div>
        </div>

        <div className={style.contentRow}>
          <div className={style.contentColumn}>
            <p>{t("starting_date")}</p>
            <h6>
              {oneApplicationDetail?.oneApply?.applicationStartDate ?? "N/A"}
            </h6>
          </div>
          <div className={style.contentColumn}>
            <p>{t("last_date")}</p>
            <h6>
              {oneApplicationDetail?.oneApply?.applicationEndDate ?? "N/A"}
            </h6>
          </div>
        </div>
        {oneApplicationDetail?.oneApply?.applicationPhoto ? (
          <div className={style.contentRow}>
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
          </div>
        ) : (
          ""
        )}
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
          {t("apply")}
        </div>

        {openFees && (
          <SelectHostelFeeStrucutre
            onClose={onToggleFees}
            hostelId={hostelId}
            onSelectedStudent={onSelectedStrucutre}
            asOpen="STUDENT_VIEW_STRUCTURE"
            batchId={
              oneApplicationDetail?.oneApply?.applicationBatch?._id ?? ""
            }
            classMasterId={
              oneApplicationDetail?.oneApply?.applicationMaster ?? ""
            }
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

export default HostelApplicationDetail;
