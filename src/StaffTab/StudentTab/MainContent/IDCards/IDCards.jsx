// import React from "react";
// import { useState } from "react";
// import style from "./IDCards.module.css";
// import { Divider } from "@mui/material";
// import { useTranslation } from "react-i18next";
// import { useSelector } from "react-redux";
// import LoaderButton from "../../../../Loader/LoaderButton";
// import { CSVLink } from "react-csv";
// import { useExtractStudentIDCardMutation } from "../../../../services/ExportData/ExportDataApi";
// import {
//   useAllDepartment,
//   useOneViewDepartment,
// } from "../../../../Department/Institute/Components/DepartmentApi/depart-api";
// // import FormToggle from "../../../components/DividerTab/MainContent/StaffForm/FormToggle";
// import BorderBottom from "../../../components/DividerTab/MainContent/StaffAProfile/BorderBottom";
// import FormCheckbox from "../../../components/DividerTab/MainContent/StaffForm/FormCheckbox";
// import IDCardToggle from "./IDCardToggle";
// import { useEffect } from "react";

// const BUTTON_WRAPPER_STYLES = {
//   position: "relative",
// };

// const MODAL_STYLES = {
//   position: "absolute",
//   left: "0",
//   top: "3.2vw",
//   zIndex: 10,
// };

// const OVERLAY_STYLES = {
//   position: "fixed",
//   top: 0,
//   left: 0,
//   right: 0,
//   bottom: 0,

//   zIndex: 10,
// };

// function Options({ open, onClose, idcardData, setIdCardData, departmentlist }) {
//   if (!open) return null;

//   // console.info(classList);

//   return (
//     <>
//       <div onClick={onClose} style={OVERLAY_STYLES} />
//       <div style={MODAL_STYLES} className={style.options}>
//         {departmentlist?.map((dept) => (
//           <div
//             className={style.option}
//             onClick={() => {
//               setIdCardData({
//                 ...idcardData,
//                 department: dept?._id,
//                 deptName: dept?.dName,
//                 classes: [],
//                 classsNames: [],
//                 students: 0,
//               });
//               onClose();
//             }}
//           >
//             {dept?.dName}
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// function Item({ classs, idcardData, setIdCardData, request, setRequest }) {
//   const handleSelect = () => {
//     const arr = idcardData.classes;
//     const arr2 = idcardData.classsNames;

//     arr.push(classs?._id);
//     arr2.push(classs?.className);
//     setIdCardData({
//       ...idcardData,
//       classes: arr,
//       classsNames: arr2,
//       students: idcardData.students + classs?.ApproveStudent?.length,
//     });
//     setRequest([...request, classs?._id]);
//   };

//   const handleDeselect = () => {
//     const arr = idcardData.classes;
//     const arr3 = request.filter((item) => {
//       return item !== classs?._id;
//     });
//     const arr2 = idcardData.classsNames.filter((item) => {
//       return item !== classs?.className;
//     });
//     const index = arr.indexOf(classs?._id);
//     if (index > -1) {
//       arr.splice(index, 1);
//     }
//     setIdCardData({
//       ...idcardData,
//       classes: arr,
//       classsNames: arr2,
//       students: idcardData.students - classs?.ApproveStudent?.length,
//     });
//     setRequest(arr3);
//   };

//   return (
//     <div className={style.itemm}>
//       <div className={style.subItem}>{classs?.className}</div>

//       {idcardData.classes.includes(classs?._id) ? (
//         <img
//           id="check"
//           className={style.checkbox}
//           src="/images/checkbox-icon.svg"
//           alt=""
//           onClick={handleDeselect}
//         />
//       ) : (
//         <img
//           id="check"
//           className={style.checkbox}
//           src="/images/box-icon.svg"
//           alt=""
//           onClick={handleSelect}
//         />
//       )}
//     </div>
//   );
// }

// function IDCards() {
//   const { t } = useTranslation();
//   const ids = useSelector((state) => state.idChange);
//   const [isOpen, setIsOpen] = useState(false);
//   const [viewToggle, setViewToggle] = useState(false);
//   const [openSelect, setOpenSelect] = React.useState(false);
//   const [idcardData, setIdCardData] = useState({
//     department: "",
//     classes: [],
//     deptName: "",
//     classsNames: [],
//     students: 0,
//   });
//   const [request, setRequest] = useState([]);

//   const [toggleData, setToggleData] = useState({
//     fullName: false,
//     studentDOB: false,
//     studentGender: false,
//     studentNationality: false,
//     studentMTongue: false,
//     studentMotherName: false,
//     studentCast: false,
//     studentCastCategory: false,
//     studentReligion: false,
//     studentBirthPlace: false,
//     studentDistrict: false,
//     studentState: false,
//     studentAddress: false,
//     studentPhoneNumber: false,
//     studentAadharNumber: false,
//     studentAadharFrontCard: false,
//     studentAadharBackCard: false,
//     studentPanNumber: false,
//     studentBankDetails: false,
//     studentCasteCertificate: false,
//     studentParentsName: false,
//     studentParentsPhoneNumber: false,
//     studentHeight: false,
//     studentWeight: false,
//     studentBMI: false,
//   });
//   const [disabled, setDisabled] = useState(false);
//   const { allDepartment, allDepartmentRefetch } = useAllDepartment({
//     id: ids?.id,
//     skip: !ids?.id,
//   });
//   const [studentData, setStudentData] = useState();
//   const [extractStudentIDCard] = useExtractStudentIDCardMutation();
//   const { oneDepartment, oneDepartmentRefetch } = useOneViewDepartment({
//     did: idcardData?.department,
//     skip: !idcardData?.department,
//   });

//   useEffect(() => {
//     if (ids?.id) {
//       allDepartmentRefetch();
//     }
//   }, [ids?.id, allDepartmentRefetch]);
//   useEffect(() => {
//     if (idcardData?.department) {
//       oneDepartmentRefetch();
//     }
//   }, [idcardData?.department, oneDepartmentRefetch]);
//   const handleSelectAll = () => {
//     const arr = [];
//     const arr2 = [];
//     const arr3 = [];
//     for (
//       var i = 0;
//       i < oneDepartment?.department?.departmentSelectBatch?.classroom.length;
//       i++
//     ) {
//       arr.push(
//         oneDepartment?.department?.departmentSelectBatch?.classroom[i]?._id
//       );
//       arr2.push(
//         oneDepartment?.department?.departmentSelectBatch?.classroom[i]
//           ?.className
//       );
//       arr3.push(
//         oneDepartment?.department?.departmentSelectBatch?.classroom[i]?._id
//       );
//     }
//     setIdCardData({ ...idcardData, classes: arr, classsNames: arr2 });
//     setRequest(arr3);
//   };

//   function getfunctionEntries(arr) {
//     return arr.map(function (e) {
//       return {
//         GRNo: e?.studentGRNO,

//         Name:
//           e?.studentFirstName +
//           " " +
//           e?.studentMiddleName +
//           " " +
//           e?.studentLastName,
//         Gender: e?.studentGender,
//         MotherName: e?.studentMotherName ? e?.studentMotherName : "NA",
//         DOB: e?.studentDOB ? e?.studentDOB : "NA",
//         CastCategory: e?.studentCastCategory ? e?.studentCastCategory : "NA",
//         Religion: e?.studentReligion ? e?.studentReligion : "NA",
//         BirthPlace: e?.studentBirthPlace ? e?.studentBirthPlace : "NA",
//         Address: e?.studentAddress ? e?.studentAddress : "NA",
//         ParentsName: e?.studentParentsName ? e?.studentParentsName : "NA",
//         State: e?.studentState ? e?.studentState : "NA",
//         District: e?.studentDistrict ? e?.studentDistrict : "NA",
//         Nationality: e?.studentNationality ? e?.studentNationality : "NA",
//         Class: e?.studentClass?.className,
//         Contact: e?.studentPhoneNumber,
//         AdmissionDate: e?.studentAdmissionDate?.split("T")[0],
//         AadharNumber: e?.studentAadharNumber ? e?.studentAadharNumber : "NA",
//       };
//     });
//   }

//   const getIdCardHandler = () => {
//     setDisabled(true);
//     extractStudentIDCard({
//       request: request,
//     }).then((res) => {
//       setStudentData(getfunctionEntries(res?.data?.student_card));

//       setDisabled(false);
//     });
//   };

//   // useEffect(() => {
//   //   setIdCardData({ ...idcardData, classes: [], classsNames: [], students: 0 });
//   //   setStudentData();
//   // }, [idcardData.department]);

//   // console.info("sbfsdg", idcardData);
//   return (
//     <>
//       {!viewToggle && (
//         <div className={style.idcardsContainer}>
//           <div className={style.idcards}>
//             <h4>{t("id_cards")}</h4>

//             <div className={style.item}>
//               <label>{t("select_department")}</label>

//               <div
//                 className={style.inputt}
//                 style={BUTTON_WRAPPER_STYLES}
//                 onClick={() => setIsOpen(!isOpen)}
//               >
//                 {idcardData.deptName !== "" ? (
//                   <h6>{idcardData.deptName}</h6>
//                 ) : (
//                   <h6>{t("select_department")}</h6>
//                 )}
//                 {isOpen ? (
//                   <img
//                     className={style.up}
//                     src="/images/up-triangle-icon.svg"
//                     alt=""
//                   />
//                 ) : (
//                   <img
//                     className={style.down}
//                     src="/images/downn-icon.svg"
//                     alt=""
//                   />
//                 )}

//                 <Options
//                   open={isOpen}
//                   onClose={() => setIsOpen(false)}
//                   setIdCardData={setIdCardData}
//                   idcardData={idcardData}
//                   departmentlist={allDepartment?.institute?.depart}
//                 />
//               </div>
//             </div>

//             {idcardData.classes?.length > 0 ? (
//               <div
//                 className={style.selectClass}
//                 onClick={() => setOpenSelect(!openSelect)}
//               >
//                 <div className={style.selectClassleft}>
//                   <h6>
//                     {idcardData.classes?.length} {t("classes_selected")}{" "}
//                   </h6>
//                   <p>
//                     {" "}
//                     {idcardData.students} {t("student_data_required")}{" "}
//                   </p>
//                 </div>

//                 <img
//                   src="/images/selectclassicon.svg"
//                   alt=""
//                   className={style.selectClassright}
//                 />
//               </div>
//             ) : (
//               <div
//                 className={style.selectClass}
//                 onClick={() => setOpenSelect(!openSelect)}
//               >
//                 <div className={style.selectClassleft}>
//                   <h6>{t("select_classes")}</h6>
//                   <p>{t("student_data")}</p>
//                 </div>

//                 <img
//                   src="/images/selectclassicon.svg"
//                   alt=""
//                   className={style.selectClassright}
//                 />
//               </div>
//             )}

//             {idcardData.department !== "" && idcardData.classes?.length > 0 && (
//               <div>
//                 {/* <div
//                   className={style.toggle_btn}
//                   onClick={() => setViewToggle(true)}
//                 >
//                   {t("toggle_info")}
//                 </div> */}

//                 {studentData && studentData.length > 0 ? (
//                   <CSVLink data={studentData} filename="ID Card Data">
//                     <div className={style.exportbtn}>{t("export_data")}</div>
//                   </CSVLink>
//                 ) : studentData ? (
//                   <div className={`${style.exportbtn} ${style.disabledCursor}`}>
//                     {t("export_data")}
//                   </div>
//                 ) : (
//                   <div
//                     className={
//                       disabled
//                         ? `${style.exportbtn} ${style.disabledCursor}`
//                         : style.exportbtn
//                     }
//                     onClick={getIdCardHandler}
//                   >
//                     {t("get_info")}
//                     {disabled && <LoaderButton />}
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>

//           {openSelect && idcardData.department !== "" && (
//             <div className={style.classes}>
//               <div className={style.content}>
//                 <div className={style.searchContainer}>
//                   <img alt="" src="/images/search-dept-icon.svg" />
//                   <input type="text" placeholder={t("search")} required />
//                 </div>
//                 <div className={style.counts}>
//                   <p>{idcardData.classes.length} selected</p>
//                   {oneDepartment?.department?.departmentSelectBatch?.classroom
//                     ?.length > 0 && (
//                     <p style={{ cursor: "pointer" }} onClick={handleSelectAll}>
//                       {t("select_all")}
//                     </p>
//                   )}
//                 </div>

//                 {oneDepartment?.department?.departmentSelectBatch?.classroom
//                   ?.length > 0 ? (
//                   <div className={style.items}>
//                     {oneDepartment?.department?.departmentSelectBatch?.classroom?.map(
//                       (classs, index) => (
//                         <div key={index}>
//                           <Item
//                             classs={classs}
//                             idcardData={idcardData}
//                             setIdCardData={setIdCardData}
//                             setRequest={setRequest}
//                             request={request}
//                           />
//                           <Divider />
//                         </div>
//                       )
//                     )}
//                   </div>
//                 ) : (
//                   <div className={`${style.items} ${style.itemsflex}`}>
//                     {t("no_class")}
//                   </div>
//                 )}
//               </div>
//             </div>
//           )}
//         </div>
//       )}
//       {viewToggle && (
//         <div className={style.toggleContainer}>
//           <div className={style.backContainer}>
//             <img src="/images/back.svg" onClick={() => setViewToggle(false)} />
//             <h6>{t("toggle_id")}</h6>
//             <div />
//           </div>
//           <div className={style.toggles}>
//             <IDCardToggle
//               labelHeading={t("personal_info_")}
//               labelDescription={t("name_")}
//               checkedToggle={
//                 toggleData.fullName &&
//                 toggleData.studentGender &&
//                 toggleData.studentDOB &&
//                 toggleData.studentMotherName
//               }
//               onToggleHandler={() =>
//                 setToggleData({
//                   ...toggleData,
//                   fullName: !toggleData.fullName,
//                   studentGender: !toggleData.studentGender,
//                   studentDOB: !toggleData.studentDOB,
//                   studentMotherName: !toggleData.studentMotherName,
//                 })
//               }
//             />
//             <BorderBottom />
//             <IDCardToggle
//               labelHeading={t("other_info")}
//               labelDescription={t("label_text")}
//               checkedToggle={
//                 toggleData.studentBirthPlace &&
//                 toggleData.studentAadharNumber &&
//                 toggleData.studentPanNumber &&
//                 toggleData.studentPhoneNumber
//               }
//               onToggleHandler={() =>
//                 setToggleData({
//                   ...toggleData,
//                   fullName: !toggleData.studentBirthPlace,
//                   studentGender: !toggleData.studentAadharNumber,
//                   studentPanNumber: toggleData.studentPanNumber,
//                   studentDOB: !toggleData.studentPhoneNumber,
//                 })
//               }
//             />
//             <BorderBottom />
//             <IDCardToggle
//               labelHeading={t("i_details")}
//               labelDescription={t("labeltext2")}
//               checkedToggle={
//                 toggleData.studentNationality &&
//                 toggleData.studentReligion &&
//                 toggleData.studentCast &&
//                 toggleData.studentCastCategory &&
//                 toggleData.studentMTongue
//               }
//               onToggleHandler={() =>
//                 setToggleData({
//                   ...toggleData,
//                   studentNationality: !toggleData.studentNationality,
//                   studentReligion: !toggleData.studentReligion,
//                   studentCast: !toggleData.studentCast,
//                   studentCastCategory: !toggleData.studentCastCategory,
//                   studentMTongue: !toggleData.studentMTongue,
//                 })
//               }
//             />

//             <BorderBottom />
//             <IDCardToggle
//               labelHeading={t("add_info")}
//               labelDescription={t("labeltext6")}
//               checkedToggle={
//                 toggleData.studentAddress &&
//                 toggleData.studentDistrict &&
//                 toggleData.studentState
//               }
//               onToggleHandler={() =>
//                 setToggleData({
//                   ...toggleData,
//                   studentAddress: !toggleData.studentAddress,
//                   studentDistrict: !toggleData.studentDistrict,
//                   studentState: !toggleData.studentState,
//                 })
//               }
//             />
//             <BorderBottom />
//             <IDCardToggle
//               labelHeading={t("physical_id")}
//               labelDescription={t("labeltext7")}
//               checkedToggle={
//                 toggleData.studentWeight &&
//                 toggleData.studentHeight &&
//                 toggleData.studentBMI
//               }
//               onToggleHandler={() =>
//                 setToggleData({
//                   ...toggleData,
//                   studentWeight: !toggleData.studentWeight,
//                   studentHeight: !toggleData.studentHeight,
//                   studentBMI: !toggleData.studentBMI,
//                 })
//               }
//             />
//             <BorderBottom />

//             <IDCardToggle
//               labelHeading={t("parent_info_")}
//               labelDescription={t("name_phone")}
//               checkedToggle={
//                 toggleData.studentParentsName &&
//                 toggleData.studentParentsPhoneNumber
//               }
//               onToggleHandler={() =>
//                 setToggleData({
//                   ...toggleData,
//                   studentParentsName: !toggleData.studentParentsName,
//                   studentParentsPhoneNumber:
//                     !toggleData.studentParentsPhoneNumber,
//                 })
//               }
//             />
//             <BorderBottom />
//             <IDCardToggle
//               labelHeading={t("doc_cer")}
//               labelDescription=""
//               defaultLabel={false}
//               checkedToggle={
//                 toggleData.studentAadharFrontCard &&
//                 toggleData.studentAadharBackCard &&
//                 toggleData.studentBankDetails &&
//                 toggleData.studentCasteCertificate
//               }
//               onToggleHandler={() =>
//                 setToggleData({
//                   ...toggleData,
//                   studentAadharFrontCard: !toggleData.studentAadharFrontCard,
//                   studentAadharBackCard: !toggleData.studentAadharBackCard,
//                   studentBankDetails: !toggleData.studentBankDetails,
//                   studentCasteCertificate: !toggleData.studentCasteCertificate,
//                 })
//               }
//             >
//               <FormCheckbox
//                 checkLabel={t("aadhar_front")}
//                 checkedValue={toggleData.studentAadharFrontCard}
//                 onCheckboxAction={(e) =>
//                   setToggleData({
//                     toggleData,
//                     studentAadharFrontCard: toggleData.studentAadharFrontCard,
//                   })
//                 }
//               />
//               <FormCheckbox
//                 checkLabel={t("aadhar_back")}
//                 checkedValue={toggleData.studentAadharBackCard}
//                 onCheckboxAction={(e) =>
//                   setToggleData({
//                     toggleData,
//                     studentAadharBackCard: toggleData.studentAadharBackCard,
//                   })
//                 }
//               />
//               <FormCheckbox
//                 checkLabel={t("bank_details_")}
//                 checkedValue={toggleData.studentBankDetails}
//                 onCheckboxAction={(e) =>
//                   setToggleData({
//                     toggleData,
//                     studentBankDetails: toggleData.studentBankDetails,
//                   })
//                 }
//               />
//               <FormCheckbox
//                 checkLabel={t("cast_certificate")}
//                 checkedValue={toggleData.studentCasteCertificate}
//                 onCheckboxAction={(e) =>
//                   setToggleData({
//                     toggleData,
//                     studentCasteCertificate: toggleData.studentCasteCertificate,
//                   })
//                 }
//               />
//             </IDCardToggle>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default IDCards;

import React from "react";
import StudentIdCard from "../../../../MembersTab/staff/Mainbody/IdCardSection/StudentIdCard";
import style from "../../../../MembersTab/staff/Mainbody/PromoteDepartment/PromoteDepartment.module.css";
// import IdCardSectionTab from "../../../../MembersTab/staff/Mainbody/IdCardSection/IdCardSectionTab";
import { useSearchParams } from "react-router-dom";
import IdCardExport from "../../../../MembersTab/staff/Mainbody/IdCardSection/Export/IdCardExport";
const IDCards = ({ instituteId }) => {
  const [searchParams] = useSearchParams();
  return (
    <div className={style.departmenthead}>
      <div className={style.demaprtment_list}>
        {/* <IdCardSectionTab isInstitute /> */}
        {searchParams.get("n") === "export" ? (
          <IdCardExport instituteId={instituteId} />
        ) : (
          <StudentIdCard instituteId={instituteId} />
        )}
      </div>
    </div>
  );
};

export default IDCards;
