import React, { useEffect, useState } from "react";
import style from "./Document.module.css";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import AddDocument from "./AddDocument";
import { useGetDocumentByAdmission } from "../../../../../hooks/member_tab/admission-api";
import { useInView } from "react-intersection-observer";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import DocumentCard from "./DocumentCard";
import AdmissionDocumentMenu from "./AdmissionDocumentMenu";
import { useScrollbar } from "../../../../../Scroll/use-scroll";

const Document = ({ admissionId }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [openDocument, setOpenDocument] = useState(false);
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [refetchStatus, setRefetchStatus] = useState(false);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [documentList, setdocumentList] = useState([]);
  const [openDocumentMenu, setOpenDocumentMenu] = useState(false);

  const { getDocumentByAdmission, getDocumentByAdmissionRefetch } =
    useGetDocumentByAdmission({
      data: {
        aid: admissionId,
        page: page,
        limit: 10,
      },
      skip: !admissionId,
    });
  const { scrollToTop } = useScrollbar();
  useEffect(() => {
    scrollToTop();
  }, []);
  useEffect(() => {
    if (admissionId) {
      setShowingDataLoading(true);
      getDocumentByAdmissionRefetch();
    }
  }, [admissionId, page, getDocumentByAdmissionRefetch]);
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (refetchStatus) {
      setdocumentList(getDocumentByAdmission?.all_docs);
      setShowingDataLoading(false);
      setRefetchStatus(false);
    } else {
      if (getDocumentByAdmission?.all_docs) {
        setdocumentList((prevState) =>
          [
            ...new Set(
              [...prevState, ...getDocumentByAdmission?.all_docs]?.map(
                JSON.stringify
              )
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
      } else if (getDocumentByAdmission?.all_docs?.length === 0)
        setShowingDataLoading(false);
      else {
      }
    }
    if (getDocumentByAdmission?.all_docs?.length === 10) setState(true);
    else setState(false);
  }, [getDocumentByAdmission?.all_docs]);

  //   console.info("this is cofpoeka", getDocumentByAdmission);
  const onRefetch = () => {
    setRefetchStatus(true);
    setPage(1);
    getDocumentByAdmissionRefetch();
  };

  const onBackWithArrowLeft = () => {
    navigate(-1);
  };
  return (
    <div className={style.document_container}>
      <section className={style.document_container_title}>
        <img
          src="/images/arrow-left-fees-icon.svg"
          onClick={onBackWithArrowLeft}
          alt="go to previous tab"
          title="Go Back"
          style={{
            cursor: "pointer",
          }}
        />
        <h6>{t("admission_required_document")}</h6>
      </section>
      <BorderBottom
        customStyle={{
          width: "auto",
        }}
      />
      <h6
        className={style.add_new_document}
        onClick={() => setOpenDocument(true)}
      >
        {t("add_new_document")}
      </h6>
      {documentList?.map((document, index) =>
        documentList?.length === index + 1 ? (
          <div ref={ref} key={document?._id}>
            <DocumentCard
              document={document}
              setOpenDocumentMenu={setOpenDocumentMenu}
            />
          </div>
        ) : (
          <DocumentCard
            document={document}
            key={document?._id}
            setOpenDocumentMenu={setOpenDocumentMenu}
          />
        )
      )}

      {showingDataLoading && <QvipleLoading />}
      {openDocument && (
        <AddDocument
          admissionId={admissionId}
          setOpenDocument={setOpenDocument}
          onRefetch={onRefetch}
        />
      )}
      {openDocumentMenu && (
        <AdmissionDocumentMenu
          document={openDocumentMenu}
          admissionId={admissionId}
          onRefetch={onRefetch}
          onClose={() => setOpenDocumentMenu("")}
        />
      )}
    </div>
  );
};

export default Document;
