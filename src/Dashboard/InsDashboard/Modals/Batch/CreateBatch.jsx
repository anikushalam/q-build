import React, { useEffect, useRef, useState } from "react";
import "../AddDisplay.css";
import style from "./CreateBatch.module.css";
import { Dialog } from "@mui/material";
import { useTranslation } from "react-i18next";
import {
  useOneBatchEdit,
  useOneDepartmentAddBatch,
  useOneDepartmentAddIdenticalBatch,
  useOneDepartmentSetCurrentBatch,
} from "../../../../Department/Institute/Components/DepartmentApi/depart-api";
import LoaderButton from "../../../../Loader/LoaderButton";
import StringLength from "../../../../Custom/Validation/StringLength";

function Options({ options, switchOption }) {
  return (
    <div className={style.profileToolTip}>
      <div className={style.triangle}></div>

      <div className={style.profilelist}>
        {options?.map((option, index) => (
          <div value={option} onClick={() => switchOption(option)} key={index}>
            {option}
          </div>
        ))}
      </div>
    </div>
  );
}

function OptionsPreviousBatch({ options, switchOption }) {
  return (
    <div className={style.profileToolTip}>
      <div className={style.triangle}></div>

      <div className={style.profilelist}>
        {options?.map((option, index) => (
          <div value={option} onClick={() => switchOption(option)} key={index}>
            {option.batchName}
          </div>
        ))}
      </div>
    </div>
  );
}

function CreateBatch({
  departmentModal,
  hideModal,
  id,
  did,
  data,
  edit,
  setEdit,
  editBatch,
  onDepartmentRefetch,
  is_promote,
}) {
  const { t } = useTranslation();
  const [batch, setBBatch] = useState(t("batch-type-2"));
  const batchNameRef = useRef("");
  const [batchName, setBatchName] = useState("");
  const [click, setClick] = useState({
    batch: false,
    pastBatch: false,
  });
  // const selectOptions = [t("batch-type-1")];
  const selectOptions = [t("batch-type-1"), t("batch-type-2")];
  const [pastBatch, setPastBatch] = useState(true);
  const [pastBatchOption, setPastBatchOption] = useState("2020-21");
  const [pastBatchOptionId, setPastBatchOptionId] = useState("");
  const [withDesignationHead, setWithDesignationHead] = useState("No");
  const [disabled, setDisabled] = useState(false);
  const [fillAllDetail, setFillAllDetail] = useState(true);
  const [selectOptions2, setSelectOptions2] = useState(data);

  useEffect(() => {
    if (data) {
      setSelectOptions2(data);
    }
  }, [data]);
  useEffect(() => {
    if (edit) setBatchName(editBatch?.batchName);
  }, [edit]);
  const handlePastBatch = (option) => {
    setPastBatchOption(option.batchName);
    setPastBatchOptionId(option._id);
  };

  const switchClass = (option) => {
    setBBatch(option);
    if (option !== "Completely New Batch") {
      setPastBatch(true);
    } else {
      setPastBatch(false);
    }
  };
  const [addBatch] = useOneDepartmentAddBatch();
  const [batchEdit] = useOneBatchEdit();
  const [addIdenticalBatch] = useOneDepartmentAddIdenticalBatch();
  const [setBatch] = useOneDepartmentSetCurrentBatch();

  const batchSubmitHandler = () => {
    if (batchNameRef.current.value) {
      setDisabled(true);
      if (edit) {
        batchEdit({
          batch: { batchName: batchNameRef.current.value },
          bid: is_promote ? is_promote : editBatch?.bid,
        })
          .then(() => {
            hideModal(false);
            setDisabled(false);
            setEdit(false);
            batchNameRef.current.value = "";
            onDepartmentRefetch();
          })
          .catch({});
      } else if (batch === "Completely New Batch") {
        addBatch({
          batch: { batchName: batchNameRef.current.value },
          id: id,
          did: did,
        })
          .then((res) => {
            if (res?.data?.batch) {
              hideModal(false);
              setDisabled(false);
              batchNameRef.current.value = "";
              onDepartmentRefetch();
            }
          })
          .catch({});
      } else {
        addIdenticalBatch({
          batch: {
            batchName: batchNameRef.current.value,
            with_designation: withDesignationHead,
          },
          bid: pastBatchOptionId,
        })
          .then((res) => {
            // console.info(res);
            if (res) {
              setBatch({
                did: did,
                bid: res.data.batchId,
                batch: "",
              })
                .then(() => {
                  onDepartmentRefetch();
                  hideModal(false);
                  setDisabled(false);
                  batchNameRef.current.value = "";
                })
                .catch({});
            }
          })
          .catch({});
      }
    } else {
      setFillAllDetail(false);
    }
  };

  const onClose = () => {
    hideModal(false);
    batchNameRef.current.value = "";
    setEdit(false);
  };
  return (
    <Dialog open={departmentModal}>
      <div className={style.DModal}>
        <div className={style.title}>
          {!edit ? (
            <h5>{t("create-n-batch-place")}</h5>
          ) : (
            <h5> {t("edit_batch")} </h5>
          )}
          <img src="/images/close-post-icon.svg" onClick={onClose} alt="" />
        </div>
        <div hidden={fillAllDetail} className={style.notFound}>
          {!edit
            ? t("fill_details_to_create_batch")
            : t("fill_details_to_edit_batch")}
        </div>

        {!edit && (
          <div className={style.item}>
            <h6>{t("batch-type-place")}</h6>
            <section className={style.subject_tile_container}>
              <div
                className={
                  batch === "Preformed Structured Batch"
                    ? style.subject_tile_active
                    : style.subject_tile
                }
                onClick={() => switchClass("Preformed Structured Batch")}
              >
                {t("batch-type-2")}
              </div>
              <div
                className={
                  batch === "Completely New Batch"
                    ? style.subject_tile_active
                    : style.subject_tile
                }
                onClick={() => switchClass("Completely New Batch")}
              >
                {t("batch-type-1")}
              </div>
            </section>
          </div>
        )}
        {pastBatch && !edit && (
          <>
            <div
              className={style.item}
              onClick={() =>
                setClick({ ...click, pastBatch: !click.pastBatch })
              }
            >
              <h6>{t("select-past-batch-place")}</h6>
              <div className={style.select}>
                <p>{pastBatchOption}</p>
                <img src="/images/select-icon.svg" alt="select icon" />
              </div>
              {click.pastBatch && (
                <div className={style.tooltip2}>
                  <OptionsPreviousBatch
                    options={selectOptions2}
                    switchOption={handlePastBatch}
                  />
                </div>
              )}
            </div>
            <div className={style.item}>
              <h6>{t("without_designation")}</h6>
              <section className={style.subject_tile_container}>
                <div
                  className={
                    withDesignationHead === "Yes"
                      ? style.subject_tile_active
                      : style.subject_tile
                  }
                  onClick={() => setWithDesignationHead("Yes")}
                >
                  Yes
                </div>
                <div
                  className={
                    withDesignationHead === "No"
                      ? style.subject_tile_active
                      : style.subject_tile
                  }
                  onClick={() => setWithDesignationHead("No")}
                >
                  No
                </div>
              </section>
            </div>
          </>
        )}

        <div className={style.input}>
          <h6>{t("batch-name-place")}</h6>
          <input
            type="text"
            placeholder="e.g. 2022-23"
            required
            ref={batchNameRef}
            maxLength={30}
            onChange={(e) => {
              if (e.target.value?.length <= 30) {
                setBatchName(e.target.value);
                setFillAllDetail(true);
              }
            }}
            defaultValue={batchName}
          />
          <StringLength maxLength={30} valueLength={batchName} />
        </div>
        <button
          className={style.btn}
          onClick={batchSubmitHandler}
          disabled={disabled}
        >
          {!edit ? <p>{t("create")}</p> : <p>Update</p>}
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

export default CreateBatch;
