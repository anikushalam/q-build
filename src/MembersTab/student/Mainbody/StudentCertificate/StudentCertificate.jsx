import React, { useEffect, useState } from "react";
import style from "../../../staff/Mainbody/Hostel/Hostel.module.css";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import BorderBottom from "../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import { useInView } from "react-intersection-observer";
import { useGetAllCertificateStudent } from "../../../../hooks/member_tab/student-api";
import RaiseStudentCertificateRequest from "./RaiseStudentCertificateRequest";
import CertificateCard from "./CertificateCard";
import QvipleLoading from "../../../../Loader/QvipleLoading";
const StudentCertificate = () => {
  const { t } = useTranslation();
  const getQuery = useLocation();
  const [add, setAdd] = useState(false);
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [certificateList, setCertificateList] = useState([]);

  const { getAllCertificateStudent, getAllCertificateStudentRefetch } =
    useGetAllCertificateStudent({
      data: {
        sid: getQuery.state?.sid,
        page: page,
        limit: 10,
      },
      skip: !getQuery.state?.sid,
    });
  useEffect(() => {
    if (getQuery.state?.sid) {
      setShowingDataLoading(true);
      getAllCertificateStudentRefetch();
    }
  }, [getQuery.state?.sid, page, getAllCertificateStudentRefetch]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (getAllCertificateStudent?.all_cert) {
      if (page === 1) {
        setCertificateList(getAllCertificateStudent?.all_cert);
        setShowingDataLoading(false);
      } else {
        setCertificateList((prevState) =>
          [
            ...new Set(
              [...prevState, ...getAllCertificateStudent?.all_cert]?.map(
                JSON.stringify
              )
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
      }
    } else if (getAllCertificateStudent?.all_cert?.length === 0)
      setShowingDataLoading(false);
    else {
    }
    if (getAllCertificateStudent?.all_cert?.length === 10) setState(true);
    else setState(false);
  }, [getAllCertificateStudent?.all_cert]);

  const onClose = () => {
    setAdd((pre) => !pre);
  };
  const onRefetchWhenCreate = () => {
    setPage(1);
    setShowingDataLoading(true);
    getAllCertificateStudentRefetch();
  };
  return (
    <>
      <div
        style={{
          marginTop: "1rem",
        }}
      >
        <div className={style.hostel_container}>
          <div className={style.with_search}>
            <h6>{t("certificate_request")}</h6>
          </div>
          <BorderBottom
            customStyle={{
              marginTop: "0.5rem",
              marginBottom: "0.6rem",
              width: "100%",
            }}
          />
          <div
            className={style.with_search}
            style={{
              justifyContent: "flex-end",
            }}
          >
            <p className={style.add_new_category} onClick={onClose}>
              {t("create_new_request")}
            </p>
          </div>

          {certificateList?.map((certificate, index) =>
            certificateList?.length === index + 1 ? (
              <div ref={ref} key={certificate?._id}>
                <CertificateCard certificate={certificate} />
              </div>
            ) : (
              <CertificateCard
                certificate={certificate}
                key={certificate?._id}
              />
            )
          )}
          {showingDataLoading && <QvipleLoading />}
        </div>
      </div>
      {add && (
        <RaiseStudentCertificateRequest
          studentId={getQuery.state?.sid}
          onRefetch={onRefetchWhenCreate}
          instituteId={getQuery.state?.instituteId}
          onClose={onClose}
        />
      )}
    </>
  );
};

export default StudentCertificate;
