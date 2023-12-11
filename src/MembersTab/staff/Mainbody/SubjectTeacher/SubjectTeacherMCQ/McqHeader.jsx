import React, { useState } from "react";
import style from "./McqWrapper.module.css";
import SearchQuestion from "./SearchQuestion";
import McqUniversal from "./McqUniversal";
import { useTranslation } from "react-i18next";
const McqHeader = ({
  tabHandler,
  topLevelIndex,
  sid,
  subjectMcqProfile,
  onRefetch,
}) => {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  return (
    <>
      <div className={style.header_container}>
        <div className={style.header_subcontainer1}>
          <SearchQuestion
            width="387px"
            tabEventName="SEARCH_QUESTION"
            tabHandler={tabHandler}
            backIndex="10"
            topLevelIndex={topLevelIndex}
          />
          <div
            className={style.create_set}
            onClick={() => {
              tabHandler("CREATE_SET");
              topLevelIndex("10");
            }}
          >
            <img
              className={style.add_icon}
              src="/images/members/add-mcq-test.svg"
              alt="add testset icon"
            />
            <h6>{t("create_new_set")}</h6>
          </div>
        </div>
        <div
          className={style.header_subcontainer}
          onClick={() => setOpen(true)}
        >
          <img
            alt="mcq profile icon for universal"
            src="/images/mcq-profile-icon.svg"
          />
          <div className={style.mcq_profile}>
            <p>
              {subjectMcqProfile?.subject?.universalDepartment?.dName ||
                t("select_stream_from_below")}
            </p>
            <p>
              {subjectMcqProfile?.subject?.universalClass?.className ||
                t("select_class_from_below")}
            </p>
            <p>
              {subjectMcqProfile?.subject?.universalSubject?.subjectName ||
                t("select_subject_from_below")}
            </p>
          </div>
        </div>
      </div>
      <h6 className={style.header_mcq}>{t("mcq_sets")}</h6>
      {open && (
        <McqUniversal
          open={open}
          setOpen={setOpen}
          sid={sid}
          onRefetch={onRefetch}
        />
      )}
    </>
  );
};

export default McqHeader;
