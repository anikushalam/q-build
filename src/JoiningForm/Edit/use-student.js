import { useEffect, useState } from "react";
import { allFileKeyToSend } from "../../constant/constant_value";
import {
  useFileUpload,
  useFileUploadAndUpdated,
} from "../../hooks/authentication-api";
import { useOneStudentProfile } from "../../hooks/institute/institute-staff-student-api";
import { useStudentFormEdit } from "../../hooks/member_tab/class-api";
import { useNavigate } from "react-router-dom";
import { withCurrentDate } from "../../Functions/timeComparison/timeComparison";
const useStudent = ({ sid }) => {
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    studentProfilePhoto: "",
    studentFirstName: "",
    studentMiddleName: "",
    studentLastName: "",
    studentDOB: "",
    studentGender: "",
    studentMotherName: "",
    studentBirthPlace: "",
    studentPhoneNumber: "",
    studentAadharNumber: "",
    studentEmail: "",
    student_blood_group: "",
    studentQualification: "",
    studentNationality: "",
    studentReligion: "",
    studentCast: "",
    studentCastCategory: "",
    studentMTongue: "",
    studentCurrentAddress: "",
    studentCurrentPincode: "",
    studentAddress: "",
    studentPincode: "",
    studentParentsName: "",
    studentParentsPhoneNumber: "",
    studentParentsOccupation: "",
    studentParentsAnnualIncom: "",
    studentPreviousSchool: "",
    addharFrontCard: "",
    addharBackCard: "",
    casteCertificate: "",
    identityDocument: "",
    joiningTransferLetter: "",
    leavingTransferCertificate: "",
    incomeCertificate: "",
    lastYearMarksheet: "",
    nationalityCertificate: "",
    domicileCertificate: "",
    nonCreamyLayerCertificate: "",
    studentBankName: "",
    studentBankAccountHolderName: "",
    studentBankAccount: "",
    studentBankIfsc: "",
    bankPassbook: "",
    student_prn_enroll_number: "",
    phone: "",
    email: "",
    student_gate_score: "",
    student_gate_year: "",
    student_degree_institute: "",
    student_degree_year: "",
    student_pre_sem_obtained_points: "",
    student_pre_sem_total_points: "",
    student_final_sem_total_points: "",
    student_final_sem_obtained_points: "",
    student_percentage_cpi: "",
    student_id_card_front: "",
    student_id_card_back: "",
    student_anti_ragging: "",
  });
  const [fullName, setFullName] = useState("");
  const [sameAdd, setSameAdd] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [requiredField, setRequiredField] = useState("");
  const [oneFileUpload] = useFileUpload();
  const [oneFileUploadAndUpdated] = useFileUploadAndUpdated();
  const [studentFormEdit] = useStudentFormEdit();
  const { oneStudentProfile, oneStudentProfileRefetch } = useOneStudentProfile({
    sid: sid,
    skip: !sid,
  });
  useEffect(() => {
    if (sid) oneStudentProfileRefetch();
  }, [sid, oneStudentProfileRefetch]);

  useEffect(() => {
    if (oneStudentProfile?.student) {
      setStudent({
        student_prn_enroll_number:
          oneStudentProfile?.student?.student_prn_enroll_number || "",
        studentProfilePhoto:
          oneStudentProfile?.student?.studentProfilePhoto || "",
        studentFirstName: oneStudentProfile?.student?.studentFirstName || "",
        studentMiddleName: oneStudentProfile?.student?.studentMiddleName || "",
        studentLastName: oneStudentProfile?.student?.studentLastName || "",
        studentDOB: oneStudentProfile?.student?.studentDOB || "",
        studentGender: oneStudentProfile?.student?.studentGender || "",
        studentMotherName: oneStudentProfile?.student?.studentMotherName || "",
        studentBirthPlace: oneStudentProfile?.student?.studentBirthPlace || "",
        studentPhoneNumber:
          oneStudentProfile?.student?.studentPhoneNumber || "",
        studentAadharNumber:
          oneStudentProfile?.student?.studentAadharNumber || "",
        studentEmail: oneStudentProfile?.student?.studentEmail || "",
        student_blood_group:
          oneStudentProfile?.student?.student_blood_group || "",
        studentQualification:
          oneStudentProfile?.student?.studentQualification || "",
        studentNationality:
          oneStudentProfile?.student?.studentNationality || "",
        studentReligion: oneStudentProfile?.student?.studentReligion || "",
        studentCast: oneStudentProfile?.student?.studentCast || "",
        studentCastCategory:
          oneStudentProfile?.student?.studentCastCategory || "",
        studentMTongue: oneStudentProfile?.student?.studentMTongue || "",
        studentCurrentAddress:
          oneStudentProfile?.student?.studentCurrentAddress || "",
        studentCurrentPincode:
          oneStudentProfile?.student?.studentCurrentPincode || "",
        studentAddress: oneStudentProfile?.student?.studentAddress || "",
        studentPincode: oneStudentProfile?.student?.studentPincode || "",
        studentParentsName:
          oneStudentProfile?.student?.studentParentsName || "",
        studentParentsPhoneNumber:
          oneStudentProfile?.student?.studentParentsPhoneNumber || "",
        studentParentsOccupation:
          oneStudentProfile?.student?.studentParentsOccupation || "",
        studentParentsAnnualIncom:
          oneStudentProfile?.student?.studentParentsAnnualIncom || "",
        studentPreviousSchool:
          oneStudentProfile?.student?.studentPreviousSchool || "",
        addharFrontCard:
          oneStudentProfile?.student?.studentAadharFrontCard || "",
        addharBackCard: oneStudentProfile?.student?.studentAadharBackCard || "",
        casteCertificate:
          oneStudentProfile?.student?.studentCasteCertificatePhoto || "",
        identityDocument:
          oneStudentProfile?.student?.studentIdentityDocument || "",
        joiningTransferLetter:
          oneStudentProfile?.student?.studentJoiningTransferLetter || "",
        leavingTransferCertificate:
          oneStudentProfile?.student?.studentLeavingTransferCertificate || "",
        incomeCertificate:
          oneStudentProfile?.student?.studentIncomeCertificate || "",
        lastYearMarksheet:
          oneStudentProfile?.student?.studentLastYearMarksheet || "",
        nationalityCertificate:
          oneStudentProfile?.student?.studentNationalityCertificate || "",
        domicileCertificate:
          oneStudentProfile?.student?.studentDomicileCertificate || "",
        nonCreamyLayerCertificate:
          oneStudentProfile?.student?.studentNonCreamyLayerCertificate || "",
        studentBankName: oneStudentProfile?.student?.studentBankName || "",
        studentBankAccountHolderName:
          oneStudentProfile?.student?.studentBankAccountHolderName || "",
        studentBankAccount:
          oneStudentProfile?.student?.studentBankAccount || "",
        studentBankReAccount:
          oneStudentProfile?.student?.studentBankAccount || "",
        studentBankIfsc: oneStudentProfile?.student?.studentBankIfsc || "",
        bankPassbook: oneStudentProfile?.student?.studentBankPassbook || "",
        phone: oneStudentProfile?.student?.user?.userPhoneNumber || "",
        email: oneStudentProfile?.student?.user?.userEmail || "",

        student_gate_score:
          oneStudentProfile?.student?.student_gate_score || "",
        student_gate_year: oneStudentProfile?.student?.student_gate_year || "",
        student_degree_institute:
          oneStudentProfile?.student?.student_degree_institute || "",
        student_degree_year:
          oneStudentProfile?.student?.student_degree_year || "",
        student_pre_sem_obtained_points:
          oneStudentProfile?.student?.student_pre_sem_obtained_points || "",
        student_pre_sem_total_points:
          oneStudentProfile?.student?.student_pre_sem_total_points || "",
        student_final_sem_obtained_points:
          oneStudentProfile?.student?.student_final_sem_obtained_points || "",
        student_final_sem_total_points:
          oneStudentProfile?.student?.student_final_sem_total_points || "",
        student_percentage_cpi:
          oneStudentProfile?.student?.student_percentage_cpi || "",
        student_id_card_front:
          oneStudentProfile?.student?.student_id_card_front || "",
        student_id_card_back:
          oneStudentProfile?.student?.student_id_card_back || "",
        student_anti_ragging:
          oneStudentProfile?.student?.student_anti_ragging || "",
      });
      for (let doc of oneStudentProfile?.student?.studentDocuments) {
        setStudent((prev) => ({
          ...prev,
          [doc?.documentName]: doc?.documentKey,
        }));
      }
      setFullName(
        `${oneStudentProfile?.student?.studentFirstName} ${
          oneStudentProfile?.student?.studentMiddleName || ""
        } ${oneStudentProfile?.student?.studentLastName || ""}`
      );
    }
  }, [oneStudentProfile?.student]);

  useEffect(() => {
    if (fullName) {
      const splitName = fullName.split(" ");
      if (splitName.length >= 3)
        setStudent((s) => ({
          ...s,
          studentFirstName: splitName[0],
          studentMiddleName: splitName[1],
          studentLastName: splitName.slice(2).toString().replaceAll(",", " "),
        }));
      else
        setStudent((s) => ({
          ...s,
          studentFirstName: splitName[0],
          studentMiddleName: "",
          studentLastName: splitName[1] === undefined ? "" : splitName[1],
        }));
    }
  }, [fullName]);

  const onUpdateFullName = (e) => {
    setFullName(e.target.value);
  };
  const onUpdateInput = (e) => {
    setStudent((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onAddressCheck = (e) => {
    if (e.target.checked) {
      setSameAdd(e.target.checked);
      setStudent((prevState) => ({
        ...prevState,
        studentAddress: prevState.studentCurrentAddress,
        studentPincode: prevState.studentCurrentPincode,
      }));
    } else {
      setSameAdd(e.target.checked);
      setStudent((prevState) => ({
        ...prevState,
        studentAddress: "",
        studentPincode: "",
      }));
    }
  };

  const validationField = [
    "studentFirstName",
    "studentLastName",
    "studentDOB",
    "studentGender",
  ];
  const onEditValidation = (formData) => {
    const errors = {};
    for (let obj in formData) {
      if (validationField.includes(obj) && !formData[obj])
        errors[obj] = `${obj} is required!`;
    }
    if (formData["studentGender"] === "Please select your gender")
      errors["studentGender"] = `studentGender is required!`;
    setRequiredField(errors);
    return errors;
  };
  const onUpdateForm = (e) => {
    e.preventDefault();
    const validation = onEditValidation({
      studentFirstName: student.studentFirstName,
      studentLastName: student.studentLastName,
      studentDOB: student.studentDOB,
      studentGender: student.studentGender,
    });
    let flag = false;
    for (let err in validation) {
      if (err) return (flag = true);
    }
    if (flag) {
    } else {
      setDisabled((pre) => !pre);
      if (sid) {
        const editProfile = {
          student: {},
          fileArray: [],
        };
        for (let studentObj in student) {
          if (allFileKeyToSend.includes(studentObj)) {
            if (student[studentObj]?.originalName)
              editProfile.fileArray.push(student[studentObj]);
          } else if (studentObj === "studentProfilePhoto") {
          } else {
            editProfile.student[studentObj] = student[studentObj];
          }
        }
        studentFormEdit({
          sid: sid,
          editProfile,
        })
          .then(() => {
            // console.info("this is student form edit", res);
            setDisabled((pre) => !pre);
            navigate(-1);
          })
          .catch({});
      } else setDisabled((pre) => !pre);
    }
    // console.info("this is updated form", student);
  };

  const onFileStateUpdate = (name, originalName, imageKey, fileType) => {
    setStudent((prevState) => ({
      ...prevState,
      [name]: {
        originalName: originalName,
        name: name,
        key: imageKey,
        type: fileType,
      },
    }));
  };

  const onDateFunction = (val) => {
    const dobCorrect = withCurrentDate(val);
    if (dobCorrect) {
      let splitDate = val?.split("/");
      let dob = `${splitDate[2]}-${splitDate[1]}-${splitDate[0]}`;
      setStudent((prevState) => ({
        ...prevState,
        studentDOB: dob,
      }));
    } else {
    }
  };
  const onGateMonthYear = (val) => {
    let splitDate = val?.split("/");
    let dob = `${splitDate[2]}-${splitDate[1]}`;
    setStudent((prevState) => ({
      ...prevState,
      student_degree_year: dob,
    }));
  };

  const onGateYear = (val) => {
    let splitDate = val?.split("/");
    let dob = `${splitDate[2]}`;
    setStudent((prevState) => ({
      ...prevState,
      student_gate_year: dob,
    }));
  };

  const onFileUpload = (e) => {
    setDisabled((pre) => !pre);
    const formData = new FormData();
    // if (student[`${e.target.name}`]) {
    //   formData.append("file", e.target.files[0]);
    //   formData.append("previousKey", student[`${e.target.name}`]);
    //   oneFileUploadAndUpdated({
    //     fileUpdate: formData,
    //   })
    //     .then((res) => {
    //       if (res.data?.imageKey) {
    //         onFileStateUpdate(
    //           e.target.name,
    //           e.target.files[0]?.name,
    //           res.data?.imageKey,
    //           e.target.files[0]?.type
    //         );
    //       }
    //       setDisabled((pre) => !pre);
    //     })
    //     .catch({});
    // } else {
    formData.append("file", e.target.files[0]);
    oneFileUpload({
      fileUpload: formData,
    })
      .then((res) => {
        if (res.data?.imageKey) {
          onFileStateUpdate(
            e.target.name,
            e.target.files[0]?.name,
            res.data?.imageKey,
            e.target.files[0]?.type
          );
        }
        setDisabled((pre) => !pre);
      })
      .catch({});
    // }
  };

  const onUpdateLoginDetailsForm = () => {
    const validation = onEditValidation({
      studentFirstName: student.studentFirstName,
      studentLastName: student.studentLastName,
      studentDOB: student.studentDOB,
      studentGender: student.studentGender,
    });
    let flag = false;
    for (let err in validation) {
      if (err) return (flag = true);
    }
    if (flag) {
    } else {
      setDisabled((pre) => !pre);
      if (sid) {
        const editProfile = {
          student: {},
          fileArray: [],
        };
        for (let studentObj in student) {
          if (allFileKeyToSend.includes(studentObj)) {
            if (student[studentObj]?.originalName)
              editProfile.fileArray.push(student[studentObj]);
          } else if (studentObj === "studentProfilePhoto") {
          } else {
            editProfile.student[studentObj] = student[studentObj];
          }
        }
        studentFormEdit({
          sid: sid,
          editProfile,
        })
          .then(() => {
            // console.info("this is student form edit", res);
            setDisabled((pre) => !pre);
          })
          .catch({});
      } else setDisabled((pre) => !pre);
    }
    // console.info("this is updated form", student);
  };

  return {
    student,
    fullName,
    sameAdd,
    disabled,
    onUpdateFullName,
    onUpdateInput,
    onAddressCheck,
    onFileUpload,
    onUpdateForm,
    requiredField,
    onDateFunction,
    onGateMonthYear,
    onGateYear,
    onUpdateLoginDetailsForm,
  };
};

export { useStudent };
