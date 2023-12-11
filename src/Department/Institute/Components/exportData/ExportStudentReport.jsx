import React, { useState } from "react";
import jszip from "jszip";
import { saveAs } from "file-saver";
import PopupWrapper from "../../../../MembersTab/staff/Mainbody/FinanceManager/FeesStructure/PopupWrapper";
import style from "../../../../MembersTab/staff/Mainbody/StaffAdmisionAdmin/MiddleContent/Funds/Funds.module.css";
import QLoader from "../../../../Loader/QLoader";
import { useTranslation } from "react-i18next";
import BorderBottom from "../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import { useExportStudentReportZip } from "../DepartmentApi/depart-api";
import { imageShowUrl } from "../../../../services/BaseUrl";
import PdfReportCardZip from "../../../../pdf/PdfReportCardZip";
const ExportStudentReport = ({ onClose, cid, className }) => {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);

  const [exportStudentReportZip] = useExportStudentReportZip();

  const onExportData = () => {
    setDisabled((pre) => !pre);
    exportStudentReportZip({
      cid: cid,
    })
      .then(async (res) => {
        if (res.data) {
          const zip = new jszip();
          const { report_zip, necessary_data } = res.data;
          const imgData = necessary_data.institute.insProfilePhoto
            ? `${imageShowUrl}/${necessary_data.institute.insProfilePhoto}`
            : "/images/certificate/logodemo.jpg";
          for (let i = 0; i < report_zip?.length; i++) {
            let student_data = {
              studentGRNO: report_zip[i]?.studentGRNO,
              studentROLLNO: report_zip[i]?.studentROLLNO,
              studentFirstName: report_zip[i]?.studentFirstName,
              studentMiddleName: report_zip[i]?.studentMiddleName,
              studentLastName: report_zip[i]?.studentLastName,
              studentGender: report_zip[i]?.studentGender,
            };
            let report_data = {
              totalCutoff: report_zip[i]?.finalReport?.[0]?.totalCutoff,
              totalFinalExam: report_zip[i]?.finalReport?.[0]?.totalFinalExam,
              totalOtherExam: report_zip[i]?.finalReport?.[0]?.totalOtherExam,
              totalGraceExam: report_zip[i]?.finalReport?.[0]?.totalGraceExam,
              totalTotalExam: report_zip[i]?.finalReport?.[0]?.totalTotalExam,
              totalPercentage: report_zip[i]?.finalReport?.[0]?.totalPercentage,
              showGradeTotal: report_zip[i]?.finalReport?.[0]?.showGradeTotal,
              is_grade: report_zip[i]?.finalReport?.[0]?.is_grade,
              subjects: report_zip[i]?.finalReport?.[0]?.subjects,
              behaviourStar:
                report_zip[i]?.finalReport?.[0]?.behaviourStar ?? 0,
              behaviourImprovement:
                report_zip[i]?.finalReport?.[0]?.behaviourImprovement ?? "",
              behaviourLack:
                report_zip[i]?.finalReport?.[0]?.behaviourLack ?? "",
              attendance: report_zip[i]?.finalReport?.[0]?.attendance,
              attendanceTotal: report_zip[i]?.finalReport?.[0]?.attendanceTotal,
              attendancePercentage:
                report_zip[i]?.finalReport?.[0]?.attendancePercentage,
              passStatus: report_zip[i]?.finalReport?.[0]?.passStatus,
              remark:
                report_zip[i]?.finalReport?.[0]?.totalPercentage?.toFixed(2) >=
                75.0
                  ? "Pass With Distinction"
                  : report_zip[i]?.finalReport?.[0]?.totalPercentage?.toFixed(
                      2
                    ) >= 65.0 &&
                    report_zip[i]?.finalReport?.[0]?.totalPercentage?.toFixed(
                      2
                    ) < 75.0
                  ? "Pass Wtih First Class"
                  : report_zip[i]?.finalReport?.[0]?.totalPercentage?.toFixed(
                      2
                    ) >= 50.0 &&
                    report_zip[i]?.finalReport?.[0]?.totalPercentage?.toFixed(
                      2
                    ) < 65.0
                  ? "Pass With Second Class"
                  : report_zip[i]?.finalReport?.[0]?.totalPercentage?.toFixed(
                      2
                    ) >= necessary_data?.aggregate_passing_percentage &&
                    report_zip[i]?.finalReport?.[0]?.totalPercentage?.toFixed(
                      2
                    ) < 50.0
                  ? "Pass With Third Class"
                  : "FAIL",
            };
            let downloadPdf = await PdfReportCardZip(
              imgData,
              student_data,
              necessary_data,
              report_data
            );
            zip.file(
              `${report_zip[i]?.studentFirstName} ${
                report_zip[i]?.studentMiddleName ?? ""
              } ${report_zip[i]?.studentLastName}-Report-Card.pdf`,
              downloadPdf
            );
            // break;
          }
          const content = await zip.generateAsync({ type: "blob" });
          saveAs(content, `${className}-report.zip`);
          setDisabled((pre) => !pre);
          onClose();
          window.location.reload();
        }
      })

      .catch(() => {});
  };

  return (
    <PopupWrapper onClose={onClose}>
      <div
        className={style.filter_container}
        style={{
          minHeight: "10rem",
        }}
      >
        <h6 className={style.filter_title}>{t("export_student_report")}</h6>
        <BorderBottom
          customStyle={{
            width: "100%",
          }}
        />
        <button
          className={style.next_btn}
          onClick={onExportData}
          style={{
            marginTop: "3rem",
          }}
        >
          {t("export_data")}
        </button>
      </div>
      {disabled && <QLoader />}
    </PopupWrapper>
  );
};

export default ExportStudentReport;
