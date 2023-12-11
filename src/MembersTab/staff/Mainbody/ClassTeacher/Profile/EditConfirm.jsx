import React, { useState } from "react";
import Overlay from "../../../../../Search/Overlay";
import SearchModalBackdrop from "../../../../../Search/SearchModalBackdrop";
import { Link, useParams, useNavigate } from "react-router-dom";
import style from "./EditConfirm.module.css";
import { useStudentRemoveClass } from "../../../../../hooks/member_tab/class-api";
import QLoader from "../../../../../Loader/QLoader";
import JoinFormInput from "../../../../../JoiningForm/Student/Form/JoinFormInput";
import ButtonWithAction from "../../../../../Custom/Button/ButtonWithAction";
import { useTranslation } from "react-i18next";

const removeAccess = ["STUDENT_SECTION", "ADMISSION_ADMIN"];
const EditConfirm = ({ onClose, sid, openAs }) => {
  const { t } = useTranslation();
  const params = useParams();
  const navigate = useNavigate();
  const [studentRemoveClass] = useStudentRemoveClass();
  const [disabled, setDisabled] = useState(false);
  const [disabledButton, setDisabledButton] = useState(true);
  const [confirmText, setConfirmText] = useState("");
  const [removeStudent, setRemoveStudent] = useState(false);

  const onUpdateInput = (e) => {
    if (e.target.value === "Confirm") {
      setDisabledButton(false);
    }
    setConfirmText(e.target.value);
  };
  const removeHandler = () => {
    setDisabled((pre) => !pre);
    studentRemoveClass({
      sid: sid,
    })
      .then(() => {
        // console.info(res);
        // onClassStudentRefetch();
        setDisabled((pre) => !pre);
        navigate(-1);
      })
      .catch({});
  };
  const onAction = () => {
    if (confirmText === "Confirm") {
      removeHandler();
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
          style={
            removeStudent
              ? { width: "auto", height: "auto" }
              : { width: "200px" }
          }
        >
          {removeStudent ? (
            <>
              <JoinFormInput
                labelText={t("type_confirm_to_continue")}
                placeholder={"type here 'Confirm'"}
                name={"removeStudent"}
                value={confirmText}
                type={"text"}
                onChange={onUpdateInput}
              />
              <ButtonWithAction
                disabled={disabledButton}
                buttonText={t("confirm")}
                onAction={onAction}
                customStyleButton={{ marginTop: "1rem", marginBottom: "1rem" }}
              />
            </>
          ) : (
            <>
              <Link
                to={`/q/${params.username}/edit/student`}
                state={{
                  openAs: "CLASS_TEACHER_SIDE",
                  sid: sid,
                  subTypeOpen: openAs,
                }}
              >
                <h6 className={style.edit}>Edit</h6>
              </Link>
              {removeAccess?.includes(openAs) ? (
                ""
              ) : (
                <h6
                  className={style.remove}
                  onClick={() => setRemoveStudent(true)}
                >
                  Remove
                </h6>
              )}
            </>
          )}
        </div>
        {disabled && <QLoader />}
      </Overlay>
    </>
  );
};

export default EditConfirm;
