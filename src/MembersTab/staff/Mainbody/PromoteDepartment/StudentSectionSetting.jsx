import React, { useEffect, useState } from "react";
import FormToggle from "../../../../StaffTab/components/DividerTab/MainContent/StaffForm/FormToggle";
import { Notfication } from "../../../../validation/Snackbar";
import {
  useGetStudentSectionEditStudentForm,
  useUpdateStudentSectionEditStudentForm,
} from "../../../../hooks/institute/institute-staff-student-api";
import { useTranslation } from "react-i18next";

const StudentSectionSetting = ({ instituteId }) => {
  const [msg, setMsg] = useState("");
  const { t } = useTranslation();
  const [run, setRun] = useState(false);
  const [studentSetting, setStudentSetting] = useState({
    student_section_form_show_query: false,
  });

  const {
    getStudentSectionEditStudentForm,
    getStudentSectionEditStudentFormRefetch,
  } = useGetStudentSectionEditStudentForm({
    data: {
      id: instituteId,
    },
    skip: !instituteId,
  });
  const [updateStudentSectionEditStudentForm] =
    useUpdateStudentSectionEditStudentForm();
  useEffect(() => {
    if (instituteId) {
      getStudentSectionEditStudentFormRefetch();
    }
  }, [instituteId]);

  useEffect(() => {
    if (getStudentSectionEditStudentForm?.show) {
      setStudentSetting((prev) => ({
        ...prev,
        student_section_form_show_query:
          getStudentSectionEditStudentForm?.show
            ?.student_section_form_show_query,
      }));
    }
  }, [getStudentSectionEditStudentForm?.show]);

  const onSubmitFormHandler = (field, value) => {
    const updatedObj = { ...studentSetting };
    for (let obj in updatedObj) {
      if (obj === field) {
        updatedObj[obj] = value;
      }
    }
    updateStudentSectionEditStudentForm({
      id: instituteId,
      setting: updatedObj,
    })
      .then(() => {
        setMsg("Student Form edit toggle is updated");
        setRun(true);
      })
      .catch({});
    setStudentSetting((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <>
      <FormToggle
        labelHeading={t("allow_student_to_edit_form")}
        labelDescription=""
        defaultLabel={false}
        checkedToggle={studentSetting.student_section_form_show_query}
        onToggleHandler={(e) =>
          onSubmitFormHandler(
            "student_section_form_show_query",
            e.target.checked
          )
        }
      />
      <Notfication
        run={run}
        setRun={setRun}
        msg={msg}
        postiton="bottom"
        type="success"
      />
    </>
  );
};

export default StudentSectionSetting;
