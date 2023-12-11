import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useExportOneStudentIdCardMutation } from "../../../../../services/ExportData/ExportDataApi";
import { CSVLink } from "react-csv";
import style from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/StaffProfile.module.css";
import QLoader from "../../../../../Loader/QLoader";

const StudentIdCardButton = ({ sid }) => {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const [studentData, setStudentData] = useState([]);
  const [downloadLink, setDownloadLink] = useState(false);

  const [exportOneStudentIdCard] = useExportOneStudentIdCardMutation();

  const getfunctionEntries = (e) => {
    return [
      {
        GRNo: e?.studentGRNO,
        Name:
          e?.studentFirstName +
          " " +
          e?.studentMiddleName +
          " " +
          e?.studentLastName,
        Gender: e?.studentGender,
        MotherName: e?.studentMotherName ? e?.studentMotherName : "NA",
        DOB: e?.studentDOB ? e?.studentDOB : "NA",
        "Blood Group": e?.student_blood_group ? e?.student_blood_group : "NA",
        "Caste Category": e?.studentCastCategory
          ? e?.studentCastCategory
          : "NA",
        Religion: e?.studentReligion ? e?.studentReligion : "NA",
        BirthPlace: e?.studentBirthPlace ? e?.studentBirthPlace : "NA",
        Address: e?.studentAddress ? e?.studentAddress : "NA",
        ParentsName: e?.studentParentsName ? e?.studentParentsName : "NA",
        "Parent's Contact": e?.studentParentsPhoneNumber
          ? e?.studentParentsPhoneNumber
          : "NA",
        State: e?.studentState ? e?.studentState : "NA",
        District: e?.studentDistrict ? e?.studentDistrict : "NA",
        Nationality: e?.studentNationality ? e?.studentNationality : "NA",
        Class: e?.studentClass?.classTitle,
        Contact: e?.studentPhoneNumber,
        Email: e?.studentEmail,
        AdmissionDate: e?.studentAdmissionDate?.split("T")[0],
        AadharNumber: e?.studentAadharNumber ? e?.studentAadharNumber : "NA",
        "Mother Tongue": e?.studentMTongue ? e?.studentMTongue : "NA",
        Caste: e?.studentCast ? e?.studentCast : "NA",
        "Current Address": e?.studentCurrentAddress
          ? e?.studentCurrentAddress
          : "NA",
        "Father Ration Color": e?.studentFatherRationCardColor
          ? e?.studentFatherRationCardColor
          : "NA",
        "Parent's Occupation": e?.studentParentsOccupation
          ? e?.studentParentsOccupation
          : "NA",
        "Parent's Annual Income": e?.studentParentsAnnualIncom
          ? e?.studentParentsAnnualIncom
          : "NA",
        "Previous School": e?.studentPreviousSchool
          ? e?.studentPreviousSchool
          : "NA",
        "Bank Name": e?.studentBankName ? e?.studentBankName : "NA",
        "Bank Account": e?.studentBankAccount ? e?.studentBankAccount : "NA",
        "Bank Holder Name": e?.studentBankAccountHolderName
          ? e?.studentBankAccountHolderName
          : "NA",
        "Bank Ifsc": e?.studentBankIfsc ? e?.studentBankIfsc : "NA",
      },
    ];
  };
  const getIdCardData = () => {
    if (sid) {
      setDisabled(true);
      exportOneStudentIdCard({
        studentId: {
          sid: sid,
        },
      })
        .then((res) => {
          setStudentData(() => getfunctionEntries(res?.data?.student_card));
          setDownloadLink(true);
        })
        .catch({});
    }
  };

  useEffect(() => {
    if (downloadLink) {
      let downlabel = document.getElementById("csv_download_file");
      downlabel.click();
      setDownloadLink(false);
      // setStudentData([]);
      setDisabled((pre) => !pre);
    }
  }, [downloadLink]);
  return (
    <>
      <div className={style.certificate_btn_container}>
        <button className={style.certificate_btn} onClick={getIdCardData}>
          {t("id_card")}
        </button>
      </div>
      <CSVLink
        data={studentData}
        filename={`${studentData?.[0]?.Name}-id-card`}
        id="csv_download_file"
      />
      {disabled && <QLoader />}
    </>
  );
};

export default StudentIdCardButton;
