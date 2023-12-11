import React, { useState } from "react";
import LoaderButton from "../../../../../../Loader/LoaderButton";
import ElectionCard from "./ElectionCard";
import style from "./ElectionCard.module.css";
import { useTranslation } from "react-i18next";
import { useDepartmentElectionCreate } from "../../../../../../hooks/member_tab/department-api";
import JoinFormCalender from "../../../../../../JoiningForm/Student/Form/JoinFormCalender";
import { validatePreviousDate } from "../../../../../../Functions/timeComparison/timeComparison";
import SelectMulitpleDepartment from "./SelectMulitpleDepartment";
import JoinFormInput from "../../../../../../JoiningForm/Student/Form/JoinFormInput";

const CreateElection = ({ did, instituteId, setRefetchWhenCreate }) => {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const [createElection, setCreateElection] = useState({
    election_position: "",
    election_visible: "Only Department",
    date: "",
  });
  const [openDepartment, setOpenDepartment] = useState(false);
  const [selectedId, setSelectedId] = useState([]);
  //   const [selectedDepartment, setSelectedDepartment] = useState([]);
  const [filled, setFilled] = useState("");
  const [departmentElectionCreate] = useDepartmentElectionCreate();

  const onDepartmentToggle = () => {
    setOpenDepartment((prev) => !prev);
  };

  const onValidation = (data) => {
    const errors = {};
    for (let obj in data) {
      if (!data[obj]) errors[obj] = `${obj} is required!`;
    }
    if (!selectedId?.length) errors["depart"] = `depart is required!`;
    return errors;
  };
  const onCreateElection = () => {
    const validation = onValidation(createElection);
    let flag = false;
    for (let errField in validation) {
      if (errField) {
        flag = true;
        break;
      }
    }
    if (flag) {
      setFilled(validation);
    } else {
      setDisabled((pre) => !pre);
      departmentElectionCreate({
        eid: did,
        createElection: {
          depart: selectedId,
          election_position: createElection.election_position,
          election_visible: createElection.election_visible,
          date: createElection.date,
        },
      })
        .then(() => {
          setRefetchWhenCreate(true);
          setDisabled((pre) => !pre);
          setCreateElection({
            election_position: "",
            election_visible: "Only Institute",
            date: "",
          });
        })
        .catch({});
    }
  };

  const onDateFunction = (val) => {
    const onDateValidate = validatePreviousDate(val);
    if (onDateValidate?.status) {
      setCreateElection({
        ...createElection,
        date: onDateValidate?.value,
      });
    } else {
      setCreateElection({
        ...createElection,
        date: "",
      });
    }
  };
  return (
    <ElectionCard
      customStyle={{
        width: "486px",
        height: "fit-content",
      }}
    >
      <h6 className={style.create_new_elections}>{t("new_election")}</h6>
      <hr className={style.create_new_elections_hr} />

      <JoinFormInput
        labelText=""
        type="text"
        name="election_position"
        placeholder={t("enter_position")}
        value={createElection.election_position}
        onChange={(e) =>
          setCreateElection({
            ...createElection,
            election_position: e.target.value,
          })
        }
        errorShow={filled["election_position"]}
      />
      <JoinFormCalender
        labelText=""
        placeholder={t("election_application_starting_date")}
        name={"election_date"}
        value={createElection.date}
        onDateFunction={onDateFunction}
        customStyleContainer={{ position: "relative", marginTop: "1.7vw" }}
        errorShow={filled["date"]}
      />
      {/* <select
        name="election_visible"
        onChange={(e) =>
          setCreateElection({
            ...createElection,
            election_visible: e.target.value,
          })
        }
        className={style.election_input}
      >
        <option value="Only Institute">Only Institute</option>
        <option value="Only Department">Only Department</option>
      </select> */}
      <button
        className={style.set_fees_structure_btn}
        title="Select Department"
        onClick={onDepartmentToggle}
      >
        <div>{t("select_department")}</div>
        <img src="/images/forward-right-icon.svg" alt="next step" />
      </button>
      {filled["depart"] && (
        <div style={{ color: "red", marginLeft: "15px" }}>
          * {t("form_require_label")}
        </div>
      )}

      <button
        className={style.take_elections_btn}
        disabled={disabled}
        onClick={onCreateElection}
      >
        <p>{t("take_election")}</p>
        {disabled && (
          <div>
            <LoaderButton />
          </div>
        )}
      </button>
      {openDepartment && (
        <SelectMulitpleDepartment
          onClose={onDepartmentToggle}
          instituteId={instituteId}
          //   setSelectedDepartment={setSelectedDepartment}
          setSelectedId={setSelectedId}
          selectedId={selectedId}
        />
      )}
    </ElectionCard>
  );
};

export default CreateElection;
