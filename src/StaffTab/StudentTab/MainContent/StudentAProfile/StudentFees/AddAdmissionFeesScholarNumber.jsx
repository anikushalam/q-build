import React, { useState } from "react";
import style from "../../../../../MembersTab/staff/Mainbody/ClassTeacher/Profile/EditConfirm.module.css";
import SearchModalBackdrop from "../../../../../Search/SearchModalBackdrop";
import Overlay from "../../../../../Search/Overlay";
import QLoader from "../../../../../Loader/QLoader";
import { useTranslation } from "react-i18next";
import JoinFormInput from "../../../../../JoiningForm/Student/Form/JoinFormInput";
import BorderBottom from "../../../../components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import {
  useAddScholarNumberAdmission,
  useStudentScholarshipNumberDublicate,
} from "../../../../../hooks/member_tab/admission-api";
import { Notfication } from "../../../../../validation/Snackbar";
const AddAdmissionFeesScholarNumber = ({
  onClose,
  setScholarNumber,
  filledNumber,
  rcid,
}) => {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const [scholar, setScholar] = useState(filledNumber ?? "");
  const [notificationState, setNotificationState] = useState({
    msg: "",
    run: false,
  });
  const [addScholarNumberAdmission] = useAddScholarNumberAdmission();
  const [studentScholarshipNumberDublicate] =
    useStudentScholarshipNumberDublicate();

  const onUpdate = () => {
    if (scholar && scholar !== filledNumber) {
      setDisabled((pre) => !pre);
      studentScholarshipNumberDublicate({
        num: scholar,
      })
        .then((res) => {
          if (!res.data?.count) {
            addScholarNumberAdmission({
              rcid: rcid,
              scholarData: {
                scholar_ship_number: scholar,
              },
            })
              .then(() => {
                onClose();
                setScholarNumber(scholar);
                setScholar("");
                setDisabled((pre) => !pre);
              })
              .catch({});
          } else {
            setNotificationState({
              msg: "This scholarship number already added",
              run: true,
            });
            setDisabled((pre) => !pre);
          }
        })
        .catch({});
    }
  };
  return (
    <>
      <SearchModalBackdrop onClose={onClose} />
      <Overlay
        customStyle={{
          zIndex: "1200",
        }}
      >
        <div
          className={style.edit_modal_container}
          style={{ width: "420px", height: "15rem" }}
        >
          <h6 className={style.modal_header}>
            {t("scholarship_application_no")}
          </h6>
          <BorderBottom
            customStyle={{
              width: "100%",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          />
          <JoinFormInput
            placeholder={t("scholarship_application_no_placeholder")}
            name={"scholar"}
            value={scholar}
            type={"text"}
            onChange={(e) => setScholar(e.target.value)}
            customStyleContainer={{ width: "100%" }}
          />
          <button
            className={style.update_to_btn}
            style={{
              marginTop: "3.5rem",
            }}
            onClick={onUpdate}
          >
            {t("update")}
          </button>
        </div>
        {disabled && <QLoader />}
      </Overlay>
      <Notfication
        msg={notificationState.msg}
        run={notificationState.run}
        setRun={() => setNotificationState({ msg: "", run: false })}
        postiton="bottom"
        type="error"
      />
    </>
  );
};

export default AddAdmissionFeesScholarNumber;
