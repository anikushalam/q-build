import React, { useState } from "react";
import style from "../Academics.module.css";
import { useTranslation } from "react-i18next";
import SelectedTopic from "./SelectedTopic";
import JoinFormTextArea from "../../../../../../JoiningForm/Student/Form/JoinFormTextArea";
const tabs = [
  {
    name: "tab_lecture",
    id: 0,
    key: "Lecture",
  },
  {
    name: "tab_practical",
    id: 1,
    key: "Practical",
  },
  {
    name: "tab_tutorial",
    id: 2,
    key: "Tutorial",
  },
];

const SaveRecord = ({ topic, state, setState, isEdit, topicId }) => {
  const { t } = useTranslation();
  const [documentUrl, setDocumentUrl] = useState([]);

  const onTabChange = (tabKey) => {
    setState((pre) => ({
      ...pre,
      rec_status: tabKey,
    }));
  };

  const onFileChange = (e) => {
    if (e.target.files?.length) {
      let arr = [];
      for (let fi of e.target.files) {
        arr.push(URL.createObjectURL(fi));
      }
      setDocumentUrl(arr);
      setState((prev) => ({
        ...prev,
        files: [...prev.files, ...e.target.files],
      }));
    }
  };

  return (
    <>
      <div className={style.record_tab_container}>
        {tabs?.map((tab) => (
          <div
            className={
              state.rec_status === tab?.key
                ? `${style.record_tab} ${style.record_tab_active}`
                : style.record_tab
            }
            key={tab?.id}
            onClick={() => onTabChange(tab?.key)}
          >
            <h6>{t(tab?.name)}</h6>
          </div>
        ))}
      </div>
      <SelectedTopic topic={topic} topicId={topicId} />
      <JoinFormTextArea
        labelText={t("additional_info_optional")}
        placeholder={t("additional_info_optional_placeholder")}
        name={"additiona_info"}
        value={state.updateDescription}
        type={"text"}
        onChange={(e) =>
          setState((pre) => ({
            ...pre,
            updateDescription: e.target.value,
          }))
        }
        customStyleContainer={{
          width: "100%",
        }}
      />
      {isEdit ? null : (
        <div className={style.aditional_info_images}>
          {documentUrl?.map((keys, index) => (
            <img src={keys} alt="uploaded avatar" key={index} />
          ))}
          <label htmlFor="upload">
            <img
              src="/images/member_tab/subject/subject-camera-icon.svg"
              alt="camera icon"
              style={{
                cursor: "pointer",
              }}
            />
          </label>
        </div>
      )}

      <input
        multiple
        type="file"
        name="upload"
        id="upload"
        style={{ display: "none" }}
        onChange={onFileChange}
        accept="image/gif, image/jpeg, image/png, image/*"
      />
    </>
  );
};

export default SaveRecord;
