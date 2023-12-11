import React from "react";
import {
  useSubjectMcqUniversalDepartment,
  useSubjectMcqUniversalClass,
  useSubjectMcqUniversalSubject,
  useSubjectMcqProfileUpdate,
} from "../../../../../hooks/member_tab/subject-api";
import Modal from "../../../../../Modal/Modal";
import { useTranslation } from "react-i18next";
import ModalSelect from "../../../../../Modal/ModalSelect";
import style from "./McqWrapper.module.css";
const McqUniversal = ({ open, setOpen, sid, onRefetch }) => {
  const [mcqProfile, setMcqProfile] = React.useState({
    universalDepartment: "",
    universalDepartmentName: "",
    universalClass: "",
    universalClassName: "",
    universalSubject: "",
    universalSubjectName: "",
  });
  const { subjectMcqUniversalDepartment } = useSubjectMcqUniversalDepartment();
  const { subjectMcqUniversalClass, subjectMcqUniversalClassRefetch } =
    useSubjectMcqUniversalClass({
      did: mcqProfile.universalDepartment,
      skip: !mcqProfile.universalDepartment,
    });
  const { subjectMcqUniversalSubject, subjectMcqUniversalSubjectRefetch } =
    useSubjectMcqUniversalSubject({
      cid: mcqProfile.universalClass,
      skip: !mcqProfile.universalClass,
    });
  const [subjectMcqProfileUpdate] = useSubjectMcqProfileUpdate();

  React.useEffect(() => {
    if (mcqProfile.universalDepartment) subjectMcqUniversalClassRefetch();
  }, [mcqProfile.universalDepartment, subjectMcqUniversalClassRefetch]);
  React.useEffect(() => {
    if (mcqProfile.universalClass) subjectMcqUniversalSubjectRefetch();
  }, [mcqProfile.universalClass, subjectMcqUniversalSubjectRefetch]);

  const onMcqProfileUpdate = () => {
    subjectMcqProfileUpdate({
      sid: sid,
      mcqProfile: {
        universalDepartment: mcqProfile.universalDepartment,
        universalClass: mcqProfile.universalClass,
        universalSubject: mcqProfile.universalSubject,
      },
    })
      .then(() => {
        // console.info(res);
        onRefetch();
        setOpen(false);
      })
      .catch({});
  };

  React.useEffect(() => {
    if (
      mcqProfile.universalDepartment &&
      mcqProfile.universalClass &&
      mcqProfile.universalSubject
    )
      onMcqProfileUpdate();
  }, [
    mcqProfile.universalDepartment,
    mcqProfile.universalClass,
    mcqProfile.universalSubject,
  ]);
  const switchOption = (val) => {
    // console.info("this sjdfsv,", val);
    if (val?.dName)
      setMcqProfile({
        ...mcqProfile,
        universalDepartment: val?._id,
        universalDepartmentName: val?.dName,
      });
    else if (val?.className)
      setMcqProfile({
        ...mcqProfile,
        universalClass: val?._id,
        universalClassName: val?.className,
      });
    else
      setMcqProfile({
        ...mcqProfile,
        universalSubject: val?._id,
        universalSubjectName: val?.subjectName,
      });
  };
  const { t } = useTranslation();

  //   console.info(mcqProfile);
  return (
    <>
      <Modal
        open={open}
        setOpen={setOpen}
        modalTitle="MCQ’s"
        button="no"
        // onButtonClick={onMcqProfileUpdate}
      >
        <div className={style.mcq_universal_profile}>
          <img src="/images/members/mcq-profile-icon.svg" alt="not found" />
          <div className={style.mcq_universal_profile_select}>
            <p
              className={
                !mcqProfile.universalDepartmentName &&
                style.mcq_universal_profile_select_active
              }
            >
              {mcqProfile.universalDepartmentName || t("please_select_stream")}
            </p>
            <p
              className={
                mcqProfile.universalDepartmentName &&
                !mcqProfile.universalClassName &&
                style.mcq_universal_profile_select_active
              }
            >
              {mcqProfile.universalClassName || t("please_select_class")}
            </p>
            <p
              className={
                mcqProfile.universalDepartmentName &&
                mcqProfile.universalClassName &&
                !mcqProfile.universalSubjectName &&
                style.mcq_universal_profile_select_active
              }
            >
              {mcqProfile.universalSubjectName || t("please_select_subject")}
            </p>
          </div>
        </div>
        {!mcqProfile.universalDepartment ? (
          <ModalSelect
            selectTitle={t("select_stream_from_below")}
            selectTitlePlaceholder={
              mcqProfile.universalDepartmentName || t("please_select_stream")
            }
            selectOptions={
              subjectMcqUniversalDepartment
                ? subjectMcqUniversalDepartment?.universalDepartment
                : []
            }
            type="dept"
            switchOption={switchOption}
            top={"105px"}
          />
        ) : !mcqProfile.universalClass ? (
          <ModalSelect
            selectTitle={t("select_class_from_below")}
            selectTitlePlaceholder={
              mcqProfile.universalClassName || t("please_select_class")
            }
            selectOptions={
              subjectMcqUniversalClass
                ? subjectMcqUniversalClass?.universalClass
                : []
            }
            type="cls"
            switchOption={switchOption}
            top={"180px"}
          />
        ) : (
          <ModalSelect
            selectTitle={t("select_subject_from_below")}
            selectTitlePlaceholder={
              mcqProfile.universalSubjectName || t("please_select_subject")
            }
            selectOptions={
              subjectMcqUniversalSubject
                ? subjectMcqUniversalSubject?.universalSubject
                : []
            }
            type="sub"
            switchOption={switchOption}
            top={"276px"}
          />
        )}
      </Modal>
    </>
  );
};

export default McqUniversal;
