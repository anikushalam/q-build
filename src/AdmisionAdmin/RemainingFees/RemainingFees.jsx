import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import {
  useAllRemaining,
  useExistStudentFeesExcelByAdmission,
} from "../../hooks/member_tab/admission-api";
import { imageShowUrl } from "../../services/BaseUrl";
import style from "./RemainingFees.module.css";
import { useFileUpload } from "../../hooks/authentication-api";
import QLoader from "../../Loader/QLoader";
import { useNavigate } from "react-router-dom";

function Item({ remainData }) {
  const { t } = useTranslation();
  return (
    <div className={style.item}>
      <div className={style.subItem}>
        <img
          alt="Student Avatar"
          src={
            remainData.photoId !== "1"
              ? `${imageShowUrl}/${remainData?.studentProfilePhoto}`
              : "/images/member_tab/class/default_avatar.svg"
          }
          loading="lazy"
        />
        <div className={style.text}>
          <h6>{`${remainData.studentFirstName} ${
            remainData.studentMiddleName ? remainData.studentMiddleName : ""
          } ${remainData.studentLastName}`}</h6>
          <p>{remainData?.department?.dName}</p>
        </div>
      </div>
      <div className={style.text}>
        <h6 style={{ textAlign: "right" }}>
          Rs. {remainData?.admissionRemainFeeCount}
        </h6>
        <p>{t("pending_fees")}</p>
      </div>
    </div>
  );
}

function RemainingFees({ admissionId }) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [state, setState] = useState(true);
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();
  const [remain, setRemain] = useState([]);
  const adsId = useSelector((state) => state.admissionChange);
  const [disabled, setDisabled] = useState(false);
  const [oneFileUpload] = useFileUpload();
  const [existStudentFeesExcelByAdmission] =
    useExistStudentFeesExcelByAdmission();
  const { allRemainingList, allRemainingListRefetch } = useAllRemaining({
    data: {
      aid: adsId?.aid ? adsId?.aid : admissionId,
      page: page,
      limit: 10,
    },
    skip: !adsId?.aid ? !admissionId : !adsId?.aid,
  });

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (adsId?.aid || admissionId) allRemainingListRefetch();
  }, [page, admissionId, adsId?.aid, allRemainingListRefetch]);

  useEffect(() => {
    if (allRemainingList?.remain) {
      const uniquePost = [...remain, ...allRemainingList?.remain];
      const uniqueRefind = [...new Set(uniquePost.map(JSON.stringify))].map(
        JSON.parse
      );
      setRemain(uniqueRefind);
    }
    if (allRemainingList?.remain?.length === 10) setState(true);
    else setState(false);
  }, [allRemainingList?.remain]);

  // console.info(allRemainingList);
  const onExcelFileUpload = (e) => {
    if (e.target.files?.length && (admissionId || adsId?.aid)) {
      setDisabled(true);
      const formData = new FormData();
      formData.append("file", e.target.files[0]);
      oneFileUpload({
        fileUpload: formData,
      })
        .then((res) => {
          if (res.data?.imageKey) {
            existStudentFeesExcelByAdmission({
              aid: adsId?.aid ? adsId?.aid : admissionId,
              excelFile: {
                excel_file: res.data?.imageKey,
              },
            })
              .then(() => {
                setDisabled(false);
              })
              .catch({});
          } else {
            setDisabled(false);
          }
        })
        .catch({});
    }
  };
  return (
    <>
      <div className={style.remainingFees}>
        <div className={style.remainingFeesTop}>
          <h6>{t("remaining_fees")}</h6>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.2rem",
            }}
          >
            <label htmlFor="uploadExcel">
              <img
                src="/images/member_tab/subject/subject-excel-icon.svg"
                alt="excel icon"
                style={{
                  cursor: "pointer",
                  height: "1.5rem",
                }}
              />
            </label>
            <img
              src="/images/close-post-icon.svg"
              onClick={() => navigate(-1)}
            />
          </div>
        </div>
        <div className={style.remainingFeesMid}>
          <div className={style.searchContainer}>
            <img alt="" src="/images/search-dept-icon.svg" />
            <input type="text" placeholder={t("search")} required />
          </div>
        </div>
        <div className={style.remainingFeesBottom}>
          <div className={style.itemsContainer}>
            {remain?.map((rem, index) =>
              remain?.length === index + 1 ? (
                <div ref={ref} key={index}>
                  <Item remainData={rem} />
                </div>
              ) : (
                <Item key={index} remainData={rem} />
              )
            )}
          </div>
        </div>
      </div>
      {disabled && <QLoader />}
      <input
        type="file"
        id="uploadExcel"
        accept=".xlsx"
        onChange={onExcelFileUpload}
        style={{
          display: "none",
        }}
      />
    </>
  );
}

export default RemainingFees;
