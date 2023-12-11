import { useEffect, useState } from "react";
import { allFileKeyToSend } from "../../constant/constant_value";
import { useStaffFormEdit } from "../../Department/Institute/Components/DepartmentApi/depart-api";
import {
  useFileUpload,
  useFileUploadAndUpdated,
} from "../../hooks/authentication-api";
import { useOneStaffProfile } from "../../hooks/institute/institute-staff-student-api";
import { useNavigate } from "react-router-dom";
import { withCurrentDate } from "../../Functions/timeComparison/timeComparison";

const useStaff = ({ sid }) => {
  const navigate = useNavigate();
  const [staff, setStaff] = useState({
    staffProfilePhoto: "",
    staffFirstName: "",
    staffMiddleName: "",
    staffLastName: "",
    staffDOB: "",
    staffGender: "",
    staffMotherName: "",
    staffBirthPlace: "",
    staffPhoneNumber: "",
    staffAadharNumber: "",
    staffQualification: "",
    staffNationality: "",
    staffReligion: "",
    staffCast: "",
    staffCastCategory: "",
    staffMTongue: "",
    staffCurrentAddress: "",
    staffCurrentPincode: "",
    staffAddress: "",
    staffPincode: "",
    staffPreviousSchool: "",
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
    staffBankName: "",
    staffBankAccountHolderName: "",
    staffBankAccount: "",
    staffBankIfsc: "",
    bankPassbook: "",
    current_designation: "",
  });
  const [fullName, setFullName] = useState("");
  const [sameAdd, setSameAdd] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [requiredField, setRequiredField] = useState("");
  const [oneFileUpload] = useFileUpload();
  const [oneFileUploadAndUpdated] = useFileUploadAndUpdated();
  const [staffFormEdit] = useStaffFormEdit();
  const { oneStaffProfile, oneStaffProfileRefetch } = useOneStaffProfile({
    sid: sid,
    skip: !sid,
  });
  useEffect(() => {
    if (sid) oneStaffProfileRefetch();
  }, [sid, oneStaffProfileRefetch]);

  useEffect(() => {
    if (oneStaffProfile?.staff) {
      setStaff({
        staffProfilePhoto: oneStaffProfile?.staff?.staffProfilePhoto || "",
        staffFirstName: oneStaffProfile?.staff?.staffFirstName || "",
        staffMiddleName: oneStaffProfile?.staff?.staffMiddleName || "",
        staffLastName: oneStaffProfile?.staff?.staffLastName || "",
        staffDOB: oneStaffProfile?.staff?.staffDOB || "",
        staffGender: oneStaffProfile?.staff?.staffGender || "",
        staffMotherName: oneStaffProfile?.staff?.staffMotherName || "",
        staffBirthPlace: oneStaffProfile?.staff?.staffBirthPlace || "",
        staffPhoneNumber: oneStaffProfile?.staff?.staffPhoneNumber || "",
        staffAadharNumber: oneStaffProfile?.staff?.staffAadharNumber || "",
        staffQualification: oneStaffProfile?.staff?.staffQualification || "",
        staffNationality: oneStaffProfile?.staff?.staffNationality || "",
        staffReligion: oneStaffProfile?.staff?.staffReligion || "",
        staffCast: oneStaffProfile?.staff?.staffCast || "",
        staffCastCategory: oneStaffProfile?.staff?.staffCastCategory || "",
        staffMTongue: oneStaffProfile?.staff?.staffMTongue || "",
        staffCurrentAddress: oneStaffProfile?.staff?.staffCurrentAddress || "",
        staffCurrentPincode: oneStaffProfile?.staff?.staffCurrentPincode || "",
        staffAddress: oneStaffProfile?.staff?.staffAddress || "",
        staffPincode: oneStaffProfile?.staff?.staffPincode || "",
        staffPreviousSchool: oneStaffProfile?.staff?.staffPreviousSchool || "",
        addharFrontCard: oneStaffProfile?.staff?.staffAadharFrontCard || "",
        addharBackCard: oneStaffProfile?.staff?.staffAadharBackCard || "",
        casteCertificate:
          oneStaffProfile?.staff?.staffCasteCertificatePhoto || "",
        identityDocument: oneStaffProfile?.staff?.staffIdentityDocument || "",
        joiningTransferLetter:
          oneStaffProfile?.staff?.staffJoiningTransferLetter || "",
        leavingTransferCertificate:
          oneStaffProfile?.staff?.staffLeavingTransferCertificate || "",
        incomeCertificate: oneStaffProfile?.staff?.staffIncomeCertificate || "",
        lastYearMarksheet: oneStaffProfile?.staff?.staffLastYearMarksheet || "",
        nationalityCertificate:
          oneStaffProfile?.staff?.staffNationalityCertificate || "",
        domicileCertificate:
          oneStaffProfile?.staff?.staffDomicileCertificate || "",
        nonCreamyLayerCertificate:
          oneStaffProfile?.staff?.staffNonCreamyLayerCertificate || "",
        staffBankName: oneStaffProfile?.staff?.staffBankName || "",
        staffBankAccountHolderName:
          oneStaffProfile?.staff?.staffBankAccountHolderName || "",
        staffBankAccount: oneStaffProfile?.staff?.staffBankAccount || "",
        staffBankReAccount: oneStaffProfile?.staff?.staffBankAccount || "",
        staffBankIfsc: oneStaffProfile?.staff?.staffBankIfsc || "",
        bankPassbook: oneStaffProfile?.staff?.staffBankPassbook || "",
        current_designation: oneStaffProfile?.staff?.current_designation || "",
      });
      for (let doc of oneStaffProfile?.staff?.staffDocuments) {
        setStaff((prev) => ({
          ...prev,
          [doc?.documentName]: doc?.documentKey,
        }));
      }
      setFullName(
        `${oneStaffProfile?.staff?.staffFirstName} ${
          oneStaffProfile?.staff?.staffMiddleName || ""
        } ${oneStaffProfile?.staff?.staffLastName || ""}`
      );
    }
  }, [oneStaffProfile?.staff]);

  useEffect(() => {
    if (fullName) {
      const splitName = fullName.split(" ");
      if (splitName.length >= 3)
        setStaff((s) => ({
          ...s,
          staffFirstName: splitName[0],
          staffMiddleName: splitName[1],
          staffLastName: splitName.slice(2).toString().replaceAll(",", " "),
        }));
      else
        setStaff((s) => ({
          ...s,
          staffFirstName: splitName[0],
          staffMiddleName: "",
          staffLastName: splitName[1] === undefined ? "" : splitName[1],
        }));
    }
  }, [fullName]);

  const onUpdateFullName = (e) => {
    setFullName(e.target.value);
  };

  const onUpdateInput = (e) => {
    setStaff((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onAddressCheck = (e) => {
    if (e.target.checked) {
      setSameAdd(e.target.checked);
      setStaff((prevState) => ({
        ...prevState,
        staffAddress: prevState.staffCurrentAddress,
        staffPincode: prevState.staffCurrentPincode,
      }));
    } else {
      setSameAdd(e.target.checked);
      setStaff((prevState) => ({
        ...prevState,
        staffAddress: "",
        staffPincode: "",
      }));
    }
  };
  const validationField = [
    "staffFirstName",
    "staffLastName",
    "staffDOB",
    "staffGender",
  ];
  const onEditValidation = (formData) => {
    const errors = {};
    for (let obj in formData) {
      if (validationField.includes(obj) && !formData[obj])
        errors[obj] = `${obj} is required!`;
    }
    if (formData["staffGender"] === "Please select your gender")
      errors["staffGender"] = `staffGender is required!`;
    setRequiredField(errors);
    return errors;
  };

  const onUpdateForm = (e) => {
    e.preventDefault();
    const validation = onEditValidation({
      staffFirstName: staff.staffFirstName,
      staffLastName: staff.staffLastName,
      staffDOB: staff.staffDOB,
      staffGender: staff.staffGender,
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
          staff: {},
          fileArray: [],
        };
        for (let staffObj in staff) {
          if (allFileKeyToSend.includes(staffObj)) {
            if (staff[staffObj]?.originalName)
              editProfile.fileArray.push(staff[staffObj]);
          } else if (staffObj === "staffProfilePhoto") {
          } else {
            editProfile.staff[staffObj] = staff[staffObj];
          }
        }
        staffFormEdit({
          sid: sid,
          editProfile,
        })
          .then((res) => {
            // console.info("this is staff form edit", res);
            setDisabled((pre) => !pre);
            navigate(-1);
          })
          .catch({});
      } else setDisabled((pre) => !pre);
    }
    // console.info("this is updated form", staff);
  };

  const onFileStateUpdate = (name, originalName, imageKey, fileType) => {
    setStaff((prevState) => ({
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
      setStaff((prevState) => ({
        ...prevState,
        staffDOB: dob,
      }));
    } else {
    }
  };

  const onFileUpload = (e) => {
    setDisabled((pre) => !pre);
    const formData = new FormData();
    if (staff[`${e.target.name}`]) {
      formData.append("file", e.target.files[0]);
      formData.append("previousKey", staff[`${e.target.name}`]);
      oneFileUploadAndUpdated({
        fileUpdate: formData,
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
    } else {
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
    }
  };
  return {
    staff,
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
  };
};

export { useStaff };
