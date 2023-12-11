import React, { useEffect, useState } from "react";
import { useStudentFormEdit } from "../../../../../../hooks/member_tab/class-api";
import InputForm from "../../../../../Input/InputForm";
import SubmitButton from "../../../../../Input/SubmitButton";
import style from "./StudentProfile.module.css";
import { useTranslation } from "react-i18next";

const StudentProfileEdit = ({
  studentProfile,
  onEditStudentRefetch,
  setEdit,
}) => {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const [studentFormEdit] = useStudentFormEdit();
  const [fullName, setFullName] = useState(
    `${studentProfile?.student?.studentFirstName} ${
      studentProfile?.student?.studentMiddleName
        ? studentProfile?.student?.studentMiddleName
        : ""
    } ${studentProfile?.student?.studentLastName}`
  );
  const [studentForm, setstudentForm] = useState({
    studentFirstName: studentProfile?.student?.studentFirstName,
    studentMiddleName: studentProfile?.student?.studentMiddleName,
    studentLastName: studentProfile?.student?.studentLastName,
    studentGender: studentProfile?.student?.studentGender,
    studentDOB: studentProfile?.student?.studentDOB,
    studentMotherName: studentProfile?.student?.studentMotherName,
    studentNationality: studentProfile?.student?.studentNationality,
    studentMTongue: studentProfile?.student?.studentMTongue,
    studentCast: studentProfile?.student?.studentCast,
    studentCastCategory: studentProfile?.student?.studentCastCategory,
    studentReligion: studentProfile?.student?.studentReligion,
    studentBirthPlace: studentProfile?.student?.studentBirthPlace,
    studentState: studentProfile?.student?.studentState,
    studentDistrict: studentProfile?.student?.studentDistrict,
    studentAddress: studentProfile?.student?.studentAddress,
    studentPhoneNumber: studentProfile?.student?.studentPhoneNumber,
    studentAadharNumber: studentProfile?.student?.studentAadharNumber,
    studentParentsName: studentProfile?.student?.studentParentsName,
    studentParentsPhoneNumber:
      studentProfile?.student?.studentParentsPhoneNumber,
    studentPanNumber: studentProfile?.student?.studentPanNumber,
    studentBankName: studentProfile?.student?.studentBankName,
    studentBankAccount: studentProfile?.student?.studentBankAccount,
    studentBankAccountHolderName:
      studentProfile?.student?.studentBankAccountHolderName,
    studentBankIfsc: studentProfile?.student?.studentBankIfsc,
    studentBankAccountType: studentProfile?.student?.studentBankAccountType,
    studentHeight: studentProfile?.student?.studentHeight,
    studentWeight: studentProfile?.student?.studentWeight,
    studentBMI: studentProfile?.student?.studentBMI,
  });

  useEffect(() => {
    if (studentProfile?.student) {
      setstudentForm({
        studentFirstName: studentProfile?.student?.studentFirstName,
        studentMiddleName: studentProfile?.student?.studentMiddleName,
        studentLastName: studentProfile?.student?.studentLastName,
        studentGender: studentProfile?.student?.studentGender,
        studentDOB: studentProfile?.student?.studentDOB,
        studentMotherName: studentProfile?.student?.studentMotherName,
        studentNationality: studentProfile?.student?.studentNationality,
        studentMTongue: studentProfile?.student?.studentMTongue,
        studentCast: studentProfile?.student?.studentCast,
        studentCastCategory: studentProfile?.student?.studentCastCategory,
        studentReligion: studentProfile?.student?.studentReligion,
        studentBirthPlace: studentProfile?.student?.studentBirthPlace,
        studentState: studentProfile?.student?.studentState,
        studentDistrict: studentProfile?.student?.studentDistrict,
        studentAddress: studentProfile?.student?.studentAddress,
        studentPhoneNumber: studentProfile?.student?.studentPhoneNumber,
        studentAadharNumber: studentProfile?.student?.studentAadharNumber,
        studentParentsName: studentProfile?.student?.studentParentsName,
        studentParentsPhoneNumber:
          studentProfile?.student?.studentParentsPhoneNumber,
        studentPanNumber: studentProfile?.student?.studentPanNumber,
        studentBankName: studentProfile?.student?.studentBankName,
        studentBankAccount: studentProfile?.student?.studentBankAccount,
        studentBankAccountHolderName:
          studentProfile?.student?.studentBankAccountHolderName,
        studentBankIfsc: studentProfile?.student?.studentBankIfsc,
        studentBankAccountType: studentProfile?.student?.studentBankAccountType,
        studentHeight: studentProfile?.student?.studentHeight,
        studentWeight: studentProfile?.student?.studentWeight,
        studentBMI: studentProfile?.student?.studentBMI,
      });
      setFullName(
        `${studentProfile?.student?.studentFirstName} ${
          studentProfile?.student?.studentMiddleName
            ? studentProfile?.student?.studentMiddleName
            : ""
        } ${studentProfile?.student?.studentLastName}`
      );
    }
  }, [studentProfile?.student]);

  useEffect(() => {
    if (fullName) {
      const splitName = fullName.split(" ");
      if (splitName.length >= 3)
        setstudentForm((s) => ({
          ...s,
          studentFirstName: splitName[0],
          studentMiddleName: splitName[1],
          studentLastName: splitName.slice(2).toString().replaceAll(",", " "),
        }));
      else
        setstudentForm((s) => ({
          ...s,
          studentFirstName: splitName[0],
          studentMiddleName: "",
          studentLastName: splitName[1] === undefined ? "" : splitName[1],
        }));
    }
  }, [fullName]);

  const onSubmitUpdateHandler = () => {
    // console.info("Edit", staffForm);
    setDisabled(true);
    studentFormEdit({
      sid: studentProfile?.student?._id,
      editProfile: studentForm,
    })
      .then((res) => {
        // console.info(res);
      })
      .catch({});
    setDisabled(false);
    onEditStudentRefetch();
    setEdit("");
  };

  //   console.info("student date", studentProfile?.student);
  return (
    <div className={style.formContainer}>
      <div className={`${style.viewRow} ${style.InputGap}`}>
        <InputForm
          id="name"
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          labelText="Name"
        />
      </div>

      <div className={`${style.viewRow} ${style.InputGap}`}>
        <InputForm
          id="name"
          type="text"
          value={studentForm.studentGender}
          onChange={(e) =>
            setstudentForm({ ...studentForm, studentGender: e.target.value })
          }
          labelText={t("gender")}
        />
        <InputForm
          id="name"
          type="date"
          value={studentForm.studentDOB}
          onChange={(e) =>
            setstudentForm({ ...studentForm, studentDOB: e.target.value })
          }
          labelText={t("dob")}
        />
      </div>
      <div className={`${style.viewRow} ${style.InputGap}`}>
        <InputForm
          id="name"
          type="text"
          value={studentForm.studentMotherName}
          onChange={(e) =>
            setstudentForm({
              ...studentForm,
              studentMotherName: e.target.value,
            })
          }
          labelText={t("mother_name")}
        />
        <InputForm
          id="name"
          type="text"
          value={studentForm.studentNationality}
          onChange={(e) =>
            setstudentForm({
              ...studentForm,
              studentNationality: e.target.value,
            })
          }
          labelText={t("nationality")}
        />
      </div>
      <div className={`${style.viewRow} ${style.InputGap}`}>
        <InputForm
          id="name"
          type="text"
          value={studentForm.studentMTongue}
          onChange={(e) =>
            setstudentForm({ ...studentForm, studentMTongue: e.target.value })
          }
          labelText={t("mother_tongue")}
        />
        <InputForm
          id="name"
          type="text"
          value={studentForm.studentCast}
          onChange={(e) =>
            setstudentForm({ ...studentForm, studentCast: e.target.value })
          }
          labelText={t("cast")}
        />
      </div>
      <div className={`${style.viewRow} ${style.InputGap}`}>
        <InputForm
          id="name"
          type="text"
          value={studentForm.studentCastCategory}
          onChange={(e) =>
            setstudentForm({
              ...studentForm,
              studentCastCategory: e.target.value,
            })
          }
          labelText={t("cast_category")}
        />
        <InputForm
          id="name"
          type="text"
          value={studentForm.studentReligion}
          onChange={(e) =>
            setstudentForm({
              ...studentForm,
              studentReligion: e.target.value,
            })
          }
          labelText={t("religion")}
        />
      </div>
      <div className={`${style.viewRow} ${style.InputGap}`}>
        <InputForm
          id="name"
          type="text"
          value={studentForm.studentBirthPlace}
          onChange={(e) =>
            setstudentForm({
              ...studentForm,
              studentBirthPlace: e.target.value,
            })
          }
          labelText={t("birth_place")}
        />
        <InputForm
          id="name"
          type="text"
          value={studentForm.studentState}
          onChange={(e) =>
            setstudentForm({ ...studentForm, studentState: e.target.value })
          }
          labelText={t("state")}
        />
      </div>

      <div className={`${style.viewRow} ${style.InputGap}`}>
        <InputForm
          id="name"
          type="text"
          value={studentForm.studentDistrict}
          onChange={(e) =>
            setstudentForm({
              ...studentForm,
              studentDistrict: e.target.value,
            })
          }
          labelText={t("district")}
        />
        <InputForm
          id="name"
          type="text"
          value={studentForm.studentParentsPhoneNumber}
          onChange={(e) =>
            setstudentForm({
              ...studentForm,
              studentParentsPhoneNumber: e.target.value,
            })
          }
          labelText={t("parent_mobile")}
        />
      </div>

      <div className={`${style.viewRow} ${style.InputGap}`}>
        <div>
          <InputForm
            id="name"
            type="text"
            value={studentForm.studentAddress}
            onChange={(e) =>
              setstudentForm({ ...studentForm, studentAddress: e.target.value })
            }
            labelText={t("current_adress")}
          />
        </div>
        <div>
          <InputForm
            id="name"
            type="text"
            value={studentForm.studentParentsName}
            onChange={(e) =>
              setstudentForm({
                ...studentForm,
                studentParentsName: e.target.value,
              })
            }
            labelText={t("parent_name")}
          />
        </div>
      </div>
      <div className={`${style.viewRow} ${style.InputGap}`}>
        <div>
          <InputForm
            id="name"
            type="text"
            value={studentForm.studentPhoneNumber}
            onChange={(e) =>
              setstudentForm({
                ...studentForm,
                studentPhoneNumber: e.target.value,
              })
            }
            labelText={t("self_mobile")}
          />
        </div>
        <div>
          <InputForm
            id="name"
            type="text"
            value={studentForm.studentAadharNumber}
            onChange={(e) =>
              setstudentForm({
                ...studentForm,
                studentAadharNumber: e.target.value,
              })
            }
            labelText={t("adhar_number")}
          />
        </div>
      </div>

      <div className={`${style.viewRow} ${style.InputGap}`}>
        <div>
          <InputForm
            id="name"
            type="text"
            value={studentForm.studentPanNumber}
            onChange={(e) =>
              setstudentForm({
                ...studentForm,
                studentPanNumber: e.target.value,
              })
            }
            labelText={t("pan_number")}
          />
        </div>
        <div>
          <InputForm
            id="name"
            type="text"
            value={studentForm.studentBankName}
            onChange={(e) =>
              setstudentForm({
                ...studentForm,
                studentBankName: e.target.value,
              })
            }
            labelText={t("bank_name")}
          />
        </div>
      </div>
      <div className={`${style.viewRow} ${style.InputGap}`}>
        <div>
          <InputForm
            id="name"
            type="text"
            value={studentForm.studentBankAccount}
            onChange={(e) =>
              setstudentForm({
                ...studentForm,
                studentBankAccount: e.target.value,
              })
            }
            labelText={t("bank_account")}
          />
        </div>
        <div>
          <InputForm
            id="name"
            type="text"
            value={studentForm.studentBankAccountHolderName}
            onChange={(e) =>
              setstudentForm({
                ...studentForm,
                studentBankAccountHolderName: e.target.value,
              })
            }
            labelText={t("bank_account_holder")}
          />
        </div>
      </div>
      <div className={`${style.viewRow} ${style.InputGap}`}>
        <div>
          <InputForm
            id="name"
            type="text"
            value={studentForm.studentBankIfsc}
            onChange={(e) =>
              setstudentForm({
                ...studentForm,
                studentBankIfsc: e.target.value,
              })
            }
            labelText={t("bank_ifsc")}
          />
        </div>
        <div>
          <InputForm
            id="name"
            type="text"
            value={studentForm.studentBankAccountType}
            onChange={(e) =>
              setstudentForm({
                ...studentForm,
                studentBankAccountType: e.target.value,
              })
            }
            labelText={t("bank_account_type")}
          />
        </div>
      </div>
      <div className={`${style.viewRow} ${style.InputGap}`}>
        <div>
          <InputForm
            id="name"
            type="text"
            value={studentForm.studentHeight}
            onChange={(e) =>
              setstudentForm({
                ...studentForm,
                studentHeight: e.target.value,
              })
            }
            labelText={t("height")}
          />
        </div>
        <div>
          <InputForm
            id="name"
            type="text"
            value={studentForm.studentWeight}
            onChange={(e) =>
              setstudentForm({
                ...studentForm,
                studentWeight: e.target.value,
              })
            }
            labelText={t("Weight")}
          />
        </div>
      </div>

      <div className={`${style.viewRow} ${style.InputGap}`}>
        <div>
          <InputForm
            id="name"
            type="text"
            value={studentForm.studentBMI}
            onChange={(e) =>
              setstudentForm({
                ...studentForm,
                studentBMI: e.target.value,
              })
            }
            labelText={t("bmi")}
          />
        </div>
        {/* <div>
          <InputForm
            id="name"
            type="text"
            value={studentForm.studentAadharNumber}
            onChange={(e) =>
              setstudentForm({
                ...studentForm,
                studentAadharNumber: e.target.value,
              })
            }
            labelText="BMI"
          />
        </div> */}
      </div>
      <SubmitButton
        buttonText={t("update")}
        submitHandler={onSubmitUpdateHandler}
        disabled={disabled}
      />
    </div>
  );
};

export default StudentProfileEdit;
