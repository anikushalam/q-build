import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import CertificateCard from "../../../../student/Mainbody/StudentCertificate/CertificateCard";
import { useGetAllCertificateAuthority } from "../../../../../hooks/member_tab/department-api";
import { useTranslation } from "react-i18next";

const CertificateIssued = ({ instituteId }) => {
  const { t } = useTranslation();
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [certificateList, setCertificateList] = useState([]);

  const { getAllCertificateAuthority, getAllCertificateAuthorityRefetch } =
    useGetAllCertificateAuthority({
      data: {
        id: instituteId,
        status: "Issued",
        page: page,
        limit: 10,
      },
      skip: !instituteId,
    });
  useEffect(() => {
    if (instituteId) {
      setShowingDataLoading(true);
      getAllCertificateAuthorityRefetch();
    }
  }, [instituteId, page, getAllCertificateAuthorityRefetch]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (getAllCertificateAuthority?.all_cert) {
      if (page === 1) {
        setCertificateList(getAllCertificateAuthority?.all_cert);
        setShowingDataLoading(false);
      } else {
        setCertificateList((prevState) =>
          [
            ...new Set(
              [...prevState, ...getAllCertificateAuthority?.all_cert]?.map(
                JSON.stringify
              )
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
      }
    } else if (getAllCertificateAuthority?.all_cert?.length === 0)
      setShowingDataLoading(false);
    else {
    }
    if (getAllCertificateAuthority?.all_cert?.length === 10) setState(true);
    else setState(false);
  }, [getAllCertificateAuthority?.all_cert]);
  return (
    <>
      {certificateList?.map((certificate, index) =>
        certificateList?.length === index + 1 ? (
          <div ref={ref} key={certificate?._id}>
            <CertificateCard
              certificate={certificate}
              isViewBy="ALREADY_ISSUED"
            />
          </div>
        ) : (
          <CertificateCard
            certificate={certificate}
            key={certificate?._id}
            isViewBy="ALREADY_ISSUED"
          />
        )
      )}
      {showingDataLoading && <QvipleLoading />}
    </>
  );
};

export default CertificateIssued;
