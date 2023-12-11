import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useFetchAllCompletedAppQuery } from "../../../services/admission/admissionApiDynamic";
import style from "../Form//JoinForm.module.css";
const SelectApplication = ({
  selectLabel,
  selectedValue,
  studentNewFieldIds,
  name,
  customStyleContainer,
  errorShow,
  admissionId,
  onApplicationSelect,
}) => {
  const { t } = useTranslation();
  const { data: completedQuery, refetch: completedFetch } =
    useFetchAllCompletedAppQuery({
      aid: admissionId,
      page: 1,
      limit: 1000,
    });
  useEffect(() => {
    if (admissionId) completedFetch();
  }, [admissionId, completedFetch]);

  const onChange = (e) => {
    completedQuery?.completed?.filter((val) =>
      val?._id === e.target.value ? onApplicationSelect(val) : ""
    );
  };

  // console.info("this sdnmf", batches);
  return (
    <>
      <div
        className={style.join_form_container}
        style={{ ...customStyleContainer }}
      >
        <p className={style.join_form_select_paragraph}>
          {selectLabel}{" "}
          {errorShow && (
            <span style={{ color: "red", marginLeft: "15px" }}>
              * {t("form_require_label")}
            </span>
          )}
        </p>
        <select
          className={style.join_form_select}
          // value={value}
          onChange={onChange}
          name={name}
        >
          <option selected>{selectedValue}</option>
          {completedQuery?.completed?.map(
            (opt, index) => (
              // !studentNewFieldIds?.appId?.includes(opt?._id) && (
              <option key={index} value={opt?._id}>
                {opt?.applicationName}
              </option>
            )
            // )
          )}
        </select>
      </div>
    </>
  );
};

export default SelectApplication;
