import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { useGetDocumentByAdmission } from "../../../../hooks/member_tab/admission-api";
import ViewFileDialog from "../../../../JoiningForm/Student/Form/ViewFileDialog";
import QvipleLoading from "../../../../Loader/QvipleLoading";
import BorderBottom from "../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import PopupWrapper from "../../../staff/Mainbody/FinanceManager/FeesStructure/PopupWrapper";
import DocumentCard from "../../../staff/Mainbody/StaffAdmisionAdmin/Document/DocumentCard";
import style from "./DocumentPreview.module.css";
const DocumentPreview = ({ admissionId, onClose }) => {
  const { t } = useTranslation();
  const [openDocument, setOpenDocument] = useState(false);
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [documentList, setdocumentList] = useState([]);
  const { getDocumentByAdmission, getDocumentByAdmissionRefetch } =
    useGetDocumentByAdmission({
      data: {
        aid: admissionId,
        page: page,
        limit: 10,
      },
      skip: !admissionId,
    });
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
    if (getDocumentByAdmission?.all_docs?.length === 10) setState(true);
    else setState(false);
  }, [getDocumentByAdmission?.all_docs]);

  const onOpenFileView = (val) => {
    setOpenDocument(val);
  };
  const onCloseImageView = () => {
    setOpenDocument("");
  };
  return (
    <>
      {openDocument ? (
        <ViewFileDialog onClose={onCloseImageView} keyValue={openDocument} />
      ) : (
        <PopupWrapper onClose={onClose}>
          <div className={style.document_preview}>
            <h6 className={style.card_title}>{t("required_documents")}</h6>
            <BorderBottom
              customStyle={{
                width: "100%",
                marginBottom: "0.5rem",
              }}
            />
            {documentList?.map((document, index) =>
              documentList?.length === index + 1 ? (
                <div ref={ref} key={document?._id}>
                  <DocumentCard
                    document={document}
                    viewAs="APPLICATION_STATUS"
                    onOpenFileView={onOpenFileView}
                  />
                </div>
              ) : (
                <DocumentCard
                  document={document}
                  key={document?._id}
                  viewAs="APPLICATION_STATUS"
                  onOpenFileView={onOpenFileView}
                />
              )
            )}

            {showingDataLoading && <QvipleLoading />}
          </div>
        </PopupWrapper>
      )}
    </>
  );
};

export default DocumentPreview;
