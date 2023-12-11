import { useEffect, useState } from "react";
import {
  nationality,
  casteCategory,
  religion,
} from "../../../../../constant/constant_value";
import { useStaffFormEdit } from "../../../../../Department/Institute/Components/DepartmentApi/depart-api";
import InputForm from "../../../../../MembersTab/Input/InputForm";
import SelectForm from "../../../../../MembersTab/Input/SelectForm";
import SubmitButton from "../../../../../MembersTab/Input/SubmitButton";
import style from "./StaffAProfileView.module.css";

const StaffProfileEidt = ({ tabDetail, setEdit, onEditStaffRefetch }) => {
  const [disabled, setDisabled] = useState(false);
  const [staffFormEdit] = useStaffFormEdit();
  const [fullName, setFullName] = useState(
    `${tabDetail.staffFirstName} ${
      tabDetail.staffMiddleName ? tabDetail.staffMiddleName : ""
    } ${tabDetail.staffLastName}`
  );
  const [staffForm, setStaffForm] = useState({
    staffFirstName: tabDetail?.staffFirstName,
    staffMiddleName: tabDetail?.staffMiddleName,
    staffLastName: tabDetail?.staffLastName,
    staffGender: tabDetail?.staffGender,
    staffDOB: tabDetail?.staffDOB,
    staffMotherName: tabDetail?.staffMotherName,
    staffNationality: tabDetail?.staffNationality,
    staffMTongue: tabDetail?.staffMTongue,
    staffCast: tabDetail?.staffCast,
    staffCastCategory: tabDetail?.staffCastCategory,
    staffReligion: tabDetail?.staffReligion,
    staffBirthPlace: tabDetail?.staffBirthPlace,
    staffState: tabDetail?.staffState,
    staffDistrict: tabDetail?.staffDistrict,
    staffAddress: tabDetail?.staffAddress,
    staffPhoneNumber: tabDetail?.staffPhoneNumber,
    staffAadharNumber: tabDetail?.staffAadharNumber,
    staffQualification: tabDetail?.staffQualification,
  });

  useEffect(() => {
    if (tabDetail) {
      setStaffForm({
        staffFirstName: tabDetail?.staffFirstName,
        staffMiddleName: tabDetail?.staffMiddleName,
        staffLastName: tabDetail?.staffLastName,
        staffGender: tabDetail?.staffGender,
        staffDOB: tabDetail?.staffDOB,
        staffMotherName: tabDetail?.staffMotherName,
        staffNationality: tabDetail?.staffNationality,
        staffMTongue: tabDetail?.staffMTongue,
        staffCast: tabDetail?.staffCast,
        staffCastCategory: tabDetail?.staffCastCategory,
        staffReligion: tabDetail?.staffReligion,
        staffBirthPlace: tabDetail?.staffBirthPlace,
        staffState: tabDetail?.staffState,
        staffDistrict: tabDetail?.staffDistrict,
        staffAddress: tabDetail?.staffAddress,
        staffPhoneNumber: tabDetail?.staffPhoneNumber,
        staffAadharNumber: tabDetail?.staffAadharNumber,
        staffQualification: tabDetail?.staffQualification,
      });
      setFullName(
        `${tabDetail.staffFirstName} ${
          tabDetail.staffMiddleName ? tabDetail.staffMiddleName : ""
        } ${tabDetail.staffLastName}`
      );
    }
  }, [tabDetail]);

  useEffect(() => {
    if (fullName) {
      const splitName = fullName.split(" ");
      if (splitName.length >= 3)
        setStaffForm((s) => ({
          ...s,
          staffFirstName: splitName[0],
          staffMiddleName: splitName[1],
          staffLastName: splitName.slice(2).toString().replaceAll(",", " "),
        }));
      else
        setStaffForm((s) => ({
          ...s,
          staffFirstName: splitName[0],
          staffMiddleName: "",
          staffLastName: splitName[1] === undefined ? "" : splitName[1],
        }));
    }
  }, [fullName]);
  const onSubmitUpdateHandler = () => {
    // console.info("Edit", staffForm);
    setDisabled(true);
    staffFormEdit({
      sid: tabDetail?._id,
      editProfile: staffForm,
    })
      .then((res) => {
        // console.info(res);
        setDisabled(false);
        onEditStaffRefetch();
        setEdit("");
      })
      .catch({});
  };
  // const openInNewTab = (url) => {
  //   const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  //   if (newWindow) newWindow.opener = null;
  // };
  return (
    <div className={style.aboutMain}>
      <div className={style.aboutNamePlace1}>
        <InputForm
          id="name"
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          labelText="Name"
        />
      </div>

      <div className={style.aboutOneRow}>
        <div className={style.aboutNamePlace}>
          <SelectForm
            selectedValue={staffForm.staffGender}
            placeHolder="Select Gender"
            onChangeValue={(e) =>
              setStaffForm({ ...staffForm, staffGender: e.target.value })
            }
            chooseOptions={["Male", "Female", "Other"]}
            labelText="Gender"
            id="gender"
          />
        </div>
        <div className={style.aboutNamePlace}>
          <InputForm
            id="name"
            type="date"
            value={staffForm.staffDOB}
            onChange={(e) =>
              setStaffForm({ ...staffForm, staffDOB: e.target.value })
            }
            labelText="Date of Birth"
          />
        </div>
        <div className={style.aboutNamePlace}>
          <InputForm
            id="name"
            type="text"
            value={staffForm.staffMotherName}
            onChange={(e) =>
              setStaffForm({ ...staffForm, staffMotherName: e.target.value })
            }
            labelText="Mother's Name"
          />
        </div>
      </div>
      <div className={style.aboutOneRow}>
        <div className={style.aboutNamePlace}>
          <SelectForm
            selectedValue={staffForm.staffNationality}
            placeHolder="Please select your nationality"
            onChangeValue={(e) =>
              setStaffForm({ ...staffForm, staffNationality: e.target.value })
            }
            chooseOptions={nationality}
            labelText="Nationality"
            id="nationality"
            customStyle={{ width: "14vw" }}
          />
        </div>
        <div className={style.aboutNamePlace}>
          <InputForm
            id="name"
            type="text"
            value={staffForm.staffMTongue}
            onChange={(e) =>
              setStaffForm({ ...staffForm, staffMTongue: e.target.value })
            }
            labelText="Mother's Tongue"
          />
        </div>
        <div className={style.aboutNamePlace}>
          <InputForm
            id="name"
            type="text"
            value={staffForm.staffCast}
            onChange={(e) =>
              setStaffForm({ ...staffForm, staffCast: e.target.value })
            }
            labelText="Caste"
          />
        </div>
      </div>
      <div className={style.aboutOneRow}>
        <div className={style.aboutNamePlace}>
          <SelectForm
            selectedValue={staffForm.staffCastCategory}
            placeHolder="Please select your caste category"
            onChangeValue={(e) =>
              setStaffForm({ ...staffForm, staffCastCategory: e.target.value })
            }
            chooseOptions={casteCategory}
            labelText="Caste Category"
            id="caste category"
            customStyle={{ width: "14vw" }}
          />
        </div>
        <div className={style.aboutNamePlace}>
          <SelectForm
            selectedValue={staffForm.staffReligion}
            placeHolder="Please select your religion"
            onChangeValue={(e) =>
              setStaffForm({ ...staffForm, staffReligion: e.target.value })
            }
            chooseOptions={casteCategory}
            labelText="Religion"
            id="Religion"
            customStyle={{ width: "14vw" }}
          />
        </div>
        <div className={style.aboutNamePlace}>
          <InputForm
            id="name"
            type="text"
            value={staffForm.staffBirthPlace}
            onChange={(e) =>
              setStaffForm({ ...staffForm, staffBirthPlace: e.target.value })
            }
            labelText="Birth Place"
          />
        </div>
      </div>
      <div className={style.aboutOneRow}>
        <div className={style.aboutNamePlace}>
          <InputForm
            id="name"
            type="text"
            value={staffForm.staffState}
            onChange={(e) =>
              setStaffForm({ ...staffForm, staffState: e.target.value })
            }
            labelText="State"
          />
        </div>
        <div className={style.aboutNamePlace}>
          <InputForm
            id="name"
            type="text"
            value={staffForm.staffDistrict}
            onChange={(e) =>
              setStaffForm({ ...staffForm, staffDistrict: e.target.value })
            }
            labelText="District"
          />
        </div>
        <div className={style.aboutNamePlace}>
          <InputForm
            id="name"
            type="text"
            value={staffForm.staffPhoneNumber}
            onChange={(e) =>
              setStaffForm({ ...staffForm, staffPhoneNumber: e.target.value })
            }
            labelText="Mobile Number"
          />
        </div>
      </div>
      <div className={style.aboutTow}>
        <div className={style.aboutTowNamePlace}>
          <InputForm
            id="name"
            type="text"
            value={staffForm.staffAddress}
            onChange={(e) =>
              setStaffForm({ ...staffForm, staffAddress: e.target.value })
            }
            labelText="Current Address"
          />
        </div>
        <div className={style.aboutTowNamePlace1}>
          <InputForm
            id="name"
            type="text"
            value={staffForm.staffAadharNumber}
            onChange={(e) =>
              setStaffForm({ ...staffForm, staffAadharNumber: e.target.value })
            }
            labelText="Aadhar Number"
          />
        </div>
      </div>
      <div className={style.aboutQualification}>
        <InputForm
          id="name"
          type="text"
          value={staffForm.staffQualification}
          onChange={(e) =>
            setStaffForm({ ...staffForm, staffQualification: e.target.value })
          }
          labelText="Qualification"
        />
      </div>
      <SubmitButton
        buttonText="Update"
        submitHandler={onSubmitUpdateHandler}
        disabled={disabled}
      />

      {/* <div className={style.aboutAddhar}>
        <div className={style.aboutAddharTowNamePlace}>
          <p className={style.aboutPlace}>Aadhar Card Front Side</p>
          <p
            className={style.aboutValue}
            onClick={() =>
              openInNewTab(`${imageShowUrl}/${tabDetail?.staffAadharFrontCard}`)
            }
          >
            <div className={style.addharBox}>
              <img src="/images/addhar-icon.svg" alt="" />
              Front Side
            </div>
          </p>
        </div>
        <div className={style.aboutAddharTowNamePlace}>
          <p className={style.aboutPlace}>Aadhar Card Back Side</p>
          <p
            className={style.aboutValue}
            onClick={() =>
              openInNewTab(`${imageShowUrl}/${tabDetail?.staffAadharBackCard}`)
            }
          >
            <div className={style.addharBox}>
              <img src="/images/addhar-icon.svg" alt="" />
              Back Side
            </div>
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default StaffProfileEidt;
