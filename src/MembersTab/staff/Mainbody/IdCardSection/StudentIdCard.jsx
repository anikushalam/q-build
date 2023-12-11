import React, { useEffect, useState } from "react";
import style from "./IdCardSection.module.css";
import CustomSelectDepartment from "../../../../JoiningForm/Student/Form/CustomSelectDepartment";
import { useAllDepartment } from "../../../../Department/Institute/Components/DepartmentApi/depart-api";
import { useTranslation } from "react-i18next";
import QLoader from "../../../../Loader/QLoader";
import { CSVLink } from "react-csv";
import IdCardStandard from "./IdCardStandard";
import { useExtractStudentIDCardMutation } from "../../../../services/ExportData/ExportDataApi";
// import { useExportZipStudentProfilePhoto } from "../../../../hooks/ExportData/export-data-api";
// import { pdfShowUrlNext } from "../../../../services/BaseUrl";
const StudentIdCard = ({ instituteId }) => {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const [state, setState] = useState({
    department: "",
    classes: [],
    studentCount: 0,
  });
  const [studentData, setStudentData] = useState([]);
  const [isOpenClass, setIsOpenClass] = useState(false);
  const [isZip, setIsZip] = useState(false);
  const { allDepartment, allDepartmentRefetch } = useAllDepartment({
    id: instituteId,
    skip: !instituteId,
  });
  const [extractStudentIDCard] = useExtractStudentIDCardMutation();
  // const [exportZipStudentProfilePhoto] = useExportZipStudentProfilePhoto();

  useEffect(() => {
    if (instituteId) {
      allDepartmentRefetch();
    }
  }, [instituteId, allDepartmentRefetch]);

  const onToggleClass = () => {
    setIsOpenClass((pre) => !pre);
  };
  const onDepartmentSelect = (val) => {
    setState((prev) => ({
      ...prev,
      department: val,
      classes: [],
      studentCount: 0,
    }));
    setStudentData([]);
    setIsZip(false);
  };

  const getfunctionEntries = (arr) => {
    return arr.map(function (e) {
      return {
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
      };
    });
  };
  const getIdCardData = () => {
    if (state.classes?.length > 0) {
      setDisabled(true);
      extractStudentIDCard({
        request: state.classes,
        id: instituteId,
      })
        .then((res) => {
          setIsZip(res?.data?.stats);
          setStudentData(getfunctionEntries(res?.data?.student_card));
          setDisabled(false);
        })
        .catch({});
    }
  };

  // const onZipDownload = () => {
  //   setDisabled(true);
  //   exportZipStudentProfilePhoto({
  //     instituteId: instituteId,
  //   })
  //     .then((res) => {
  //       window.open(
  //         `${pdfShowUrlNext}/${res?.data?.cdn_link_last_key}`,
  //         "_blank"
  //       );
  //       setDisabled(false);
  //     })
  //     .catch({});
  // };
  return (
    <>
      <div className={style.id_container}>
        <div
          className={
            isOpenClass ? style.id_container_width : style.id_container_full
          }
        >
          <h4>{t("id_cards")}</h4>
          <CustomSelectDepartment
            selectLabel={t("select_department")}
            selectedValue={t("plz_select_dept")}
            options={allDepartment?.institute?.depart ?? []}
            onClick={onDepartmentSelect}
            openAs="PROMOTE"
          />
          <div className={style.selectClass} onClick={onToggleClass}>
            <div className={style.selectClassleft}>
              {state.classes?.length > 0 ? (
                <>
                  <h6>
                    {state.classes?.length} {t("classes_selected")}
                  </h6>
                  <p>
                    {state.studentCount} {t("student_data_required")}
                  </p>
                </>
              ) : (
                <>
                  <h6>{t("select_classes")}</h6>
                  <p>{t("student_data")}</p>
                </>
              )}
            </div>

            <img src="/images/forward-right-icon.svg" alt="icon" />
          </div>

          {studentData.length > 0 ? (
            <CSVLink
              data={studentData}
              filename={`${state.department?.dName}-id-card.csv`}
            >
              <div className={style.exportbtn}>{t("export_data")}</div>
            </CSVLink>
          ) : (
            <div className={style.exportbtn} onClick={getIdCardData}>
              {t("get_info")}
            </div>
          )}
          {/* {isZip && (
            <div className={style.exportbtn} onClick={onZipDownload}>
              {t("download_zip_file")}
            </div>
          )} */}
        </div>
        {isOpenClass && (
          <div className={style.id_container_width}>
            <IdCardStandard
              departmentId={state.department?._id}
              selectedClasses={state.classes}
              setState={setState}
              setStudentData={setStudentData}
              setIsZip={setIsZip}
            />
          </div>
        )}
      </div>
      {disabled && <QLoader />}
    </>
  );
};

export default StudentIdCard;
