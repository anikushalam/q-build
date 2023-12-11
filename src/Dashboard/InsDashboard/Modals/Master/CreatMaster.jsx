import React, { useState } from "react";
import style from "./CreateMaster.module.css";
import { Dialog } from "@mui/material";
import { useTranslation } from "react-i18next";
import "../AddDisplay.css";
import {
  useOneDepartmentAddClassMaster,
  useOneDepartmentAddSubjectMaster,
  useOneDepartmentAllClassMaster,
  useOneDepartmentAllSubjectMaster,
} from "../../../../Department/Institute/Components/DepartmentApi/depart-api";
import LoaderButton from "../../../../Loader/LoaderButton";
import StringLength from "../../../../Custom/Validation/StringLength";
import JoinFormInput from "../../../../JoiningForm/Student/Form/JoinFormInput";

function CreateMaster({ departmentModal, hideModal, id, did }) {
  const { t } = useTranslation();
  const [master, setMaster] = useState("Standard/Grade/Level Master");
  const [disabled, setDisabled] = useState(false);
  const [fillAllDetail, setFillAllDetail] = useState("");
  // const [subjectType, setSubjectType] = useState("Mandatory");
  const [subjectName, setSubjectName] = useState("");
  const [coCount, setCoCount] = useState("");
  const [coList, setCoList] = useState([]);
  const switchMaster = (option) => {
    setMaster(option);
    setSubjectName("");
  };
  // const switchSubjectType = (option) => {
  //   setSubjectType(option);
  // };

  //for the subject Create
  const [addSubjectMaster] = useOneDepartmentAddSubjectMaster();
  const { allSubjectMasterRefetch } = useOneDepartmentAllSubjectMaster({
    data: {
      id: id,
      did: did,
    },
    skip: !id,
  });

  //for the master create
  const [addClassMaster] = useOneDepartmentAddClassMaster();
  const { allClassMasterRefetch } = useOneDepartmentAllClassMaster({
    data: {
      id: id,
      did: did,
    },
    skip: !id,
  });

  const masterSubmitHandler = () => {
    if (master === "Standard/Grade/Level Master") {
      if (subjectName) {
        setDisabled(true);
        addClassMaster({
          className: { className: subjectName },
          id: id,
          did: did,
        })
          .then((res) => {
            if (res?.data) {
              hideModal(false);
              setDisabled(false);
              setSubjectName("");
              allClassMasterRefetch();
            }
          })
          .catch({});
      } else {
        setFillAllDetail({ subjectName: "* required" });
      }
    } else if (master === "Subject Master") {
      if (subjectName) {
        setDisabled(true);
        addSubjectMaster({
          subject: {
            subjectName: subjectName,
            subjectType: "Mandatory",
            co_attainment_count: coCount,
            co_attainment_list: coList,
            // subjectType: subjectType,
          },
          id: id,
          did: did,
        })
          .then((res) => {
            if (res?.data) {
              hideModal(false);
              setDisabled(false);
              allSubjectMasterRefetch();
              setSubjectName("");
            }
          })
          .catch({});
      } else {
        setFillAllDetail({ subjectName: "* required" });
      }
    } else {
    }
  };

  const onCountChange = (e) => {
    setCoCount(e.target.value);

    let arr = [];
    for (let i = 0; i < +e.target.value; i++) {
      let obj = {
        attainment_name: `CO${i + 1}`,
        attainment_type: "CO",
      };
      arr.push(obj);
    }
    setCoList(arr);
  };

  const onCoInputChange = (e, index) => {
    const inputarr = [...coList];
    for (let inp = 0; inp < inputarr?.length; inp++) {
      if (inp === index) {
        inputarr[inp].attainment_name = e.target.value;
      }
    }
    setCoList(inputarr);
  };
  return (
    <Dialog open={departmentModal}>
      <div className={style.DModal}>
        <div className={style.title}>
          <h5>{t("create_new_master")}</h5>
          <img
            src="/images/close-post-icon.svg"
            onClick={() => hideModal(false)}
            alt=""
          />
        </div>
        <div className={style.item}>
          <h6>{t("create_master_header_1")}</h6>
          <section className={style.subject_tile_container}>
            <div
              className={
                master === "Standard/Grade/Level Master"
                  ? style.subject_tile_active
                  : style.subject_tile
              }
              onClick={() => switchMaster("Standard/Grade/Level Master")}
            >
              Standard/Grade/Level Master
            </div>
            <div
              className={
                master === "Subject Master"
                  ? style.subject_tile_active
                  : style.subject_tile
              }
              onClick={() => switchMaster("Subject Master")}
            >
              Subject Master
            </div>
          </section>
        </div>
        <JoinFormInput
          labelText={t("create_master_header_2")}
          placeholder={t("e.g. 6th Class/ FYJC")}
          name={"subjectName"}
          value={subjectName}
          type={"text"}
          onChange={(e) => {
            if (e.target.value?.length <= 40) {
              setSubjectName(e.target.value);
            }
          }}
          errorShow={fillAllDetail}
        />
        <StringLength maxLength={40} valueLength={subjectName} />
        {master === "Subject Master" ? (
          <>
            <JoinFormInput
              labelText={t("co_count")}
              placeholder={t("co_count_placeholder")}
              name={"count"}
              value={coCount}
              type={"text"}
              onChange={onCountChange}
            />

            {coList?.map((co, index) => (
              <JoinFormInput
                key={index}
                labelText={t("co_name")}
                placeholder={t("co_name_placeholder")}
                name={co["attainment_name"]}
                value={co["attainment_name"]}
                type={"text"}
                onChange={(e) => onCoInputChange(e, index)}
              />
            ))}
          </>
        ) : null}

        <button
          className={style.btn}
          onClick={masterSubmitHandler}
          disabled={disabled}
        >
          <p>{t("create")}</p>
          {disabled && (
            <div>
              <LoaderButton />
            </div>
          )}
        </button>
      </div>
    </Dialog>
  );
}

export default CreateMaster;
