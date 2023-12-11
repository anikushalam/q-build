import React, { useEffect, useState } from "react";
import style from "./Assignment.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import {
  useAssignmentActionByStudent,
  useGetOneAssignmentDetailByStudent,
} from "../../../../../hooks/member_tab/student-api";
import QLoader from "../../../../../Loader/QLoader";
import { useTranslation } from "react-i18next";
import { imageExtensionVerify } from "../../../../../utils/image_extenstion";
import { pdfShowUrlNext } from "../../../../../services/BaseUrl";
import moment from "moment";
const StudentAssignmentDetail = ({ onRefetch }) => {
  const { t } = useTranslation();
  const getQuery = useLocation();
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
  const [state, setState] = useState({
    studentDescritpion: "",
    testSet: "",
    file: [],
  });
  const [imageUrl, setImageUrl] = useState([]);
  const [documentUrl, setDocumentUrl] = useState([]);

  const [assignmentActionByStudent] = useAssignmentActionByStudent();
  const {
    getOneAssignmentDetailByStudent,
    getOneAssignmentDetailByStudentRefetch,
  } = useGetOneAssignmentDetailByStudent({
    aid: getQuery.state?.aid,
    skip: !getQuery.state?.aid,
  });

  useEffect(() => {
    if (getQuery.state?.aid) {
      getOneAssignmentDetailByStudentRefetch();
    }
  }, [getQuery.state?.aid, getOneAssignmentDetailByStudentRefetch]);

  const textarea = document.querySelector("textarea");
  textarea?.addEventListener("keyup", (e) => {
    textarea.style.height = "auto";
    let scHeight = e.target.scrollHeight;

    textarea.style.height = `${scHeight}px`;
  });

  useEffect(() => {
    if (state.file) {
      const arr = [];
      const arr1 = [];
      for (let file in state.file) {
        for (let fl in state.file[file]) {
          if (fl === "type") {
            if (state.file[file][fl].includes("image/")) {
              arr.push(URL.createObjectURL(state.file[file]));
            } else {
              arr1.push({ name: state.file[file]["name"] });
            }
          }
        }
      }
      setImageUrl(arr);
      setDocumentUrl(arr1);
    }
  }, [state.file]);

  const onDocumentGrab = (e) => {
    if (e.target.files?.length) {
      setState((prev) => ({
        ...prev,
        file: [...prev.file, ...e.target.files],
      }));
    }
  };
  const onAssginmentAction = () => {
    if (state.studentDescritpion || state.file?.length) {
      setDisabled((rep) => !rep);

      const today = new Date();
      const formDatas = new FormData();
      formDatas.append("studentDescritpion", state.studentDescritpion);
      formDatas.append("submmittedDate", today);
      formDatas.append("assignmentSubmitRequest", true);
      formDatas.append("testSet", "");
      for (let file in state.file) {
        if (state.file[file]["size"]) {
          formDatas.append("file", state.file[file]);
        }
      }

      assignmentActionByStudent({
        aid: getQuery.state?.aid,
        assignmentData: formDatas,
      })
        .then(() => {
          getOneAssignmentDetailByStudentRefetch();
          onRefetch();
          setState({
            studentDescritpion: "",
            testSet: "",
            file: [],
          });
          setImageUrl([]);
          setDocumentUrl([]);
          setDisabled((rep) => !rep);
        })
        .catch({});
    }
  };

  return (
    <>
      <div className={style.assignmentDetailTop}>
        <img
          src="/images/members/arrow-left.svg"
          alt=""
          onClick={() => navigate(-1)}
        />
        <h6>
          {getOneAssignmentDetailByStudent?.assignment?.subject?.subjectName}
        </h6>
        <img
          className={style.menu}
          src="/images/menu-dots-dark-icon.svg"
          alt=""
        />
      </div>

      <div className={style.assignmentDetailBody}>
        <p>Assignement Name</p>
        <h6>{getOneAssignmentDetailByStudent?.assignment?.assignmentName}</h6>
        <p>Assignement Due Date</p>
        <h6>
          {moment(getOneAssignmentDetailByStudent?.assignment?.dueDate).format(
            "DD-MM-yyyy"
          )}
        </h6>
        <p>Description</p>
        <h6
          style={{
            whiteSpace: "break-spaces",
          }}
        >
          {getOneAssignmentDetailByStudent?.assignment?.descritpion}
        </h6>
        {getOneAssignmentDetailByStudent?.assignment?.files?.length > 0 ? (
          <div className={style.files}>
            <p className={style.typeFile}>{t("file_image")}</p>
            {getOneAssignmentDetailByStudent?.assignment?.files?.map(
              (file, index) => {
                if (
                  file?.documentType === "application/octet-stream" ||
                  file?.documentType === "image/jpeg" ||
                  file?.documentType === "image/png" ||
                  imageExtensionVerify(file?.documentKey)
                ) {
                  return (
                    <a
                      href={`${pdfShowUrlNext}/${file?.documentKey}`}
                      target="_blank"
                    >
                      <div className={style.img} key={index}>
                        <img src="/images/members/img-icon.svg" alt="" />
                        <p>{file?.documentName}</p>
                      </div>
                    </a>
                  );
                } else {
                  return (
                    <a
                      href={`${pdfShowUrlNext}/${file?.documentKey}`}
                      target="_blank"
                    >
                      <div className={style.img} key={index}>
                        <img src="/images/admin/pdf-icon.svg" alt="" />
                        <p>{file?.documentName}</p>
                      </div>
                    </a>
                  );
                }
              }
            )}
          </div>
        ) : (
          ""
        )}
        <h6 className={style.des}>{t("description")}</h6>

        {!getOneAssignmentDetailByStudent?.assignment
          ?.assignmentSubmitRequest ? (
          <textarea
            className={style.assignment_text}
            type="text"
            name="description"
            placeholder="Type Answer"
            value={state.studentDescritpion}
            onChange={(e) =>
              setState((prev) => ({
                ...prev,
                studentDescritpion: e.target.value,
              }))
            }
          />
        ) : (
          <p
            className={style.studentDescritpion}
            style={{ marginBottom: "2vw", whiteSpace: "break-spaces" }}
          >
            {getOneAssignmentDetailByStudent?.assignment?.studentDescritpion}
          </p>
        )}
        {!getOneAssignmentDetailByStudent?.assignment
          ?.assignmentSubmitRequest ? (
          <div>
            <label htmlFor="img" style={{ cursor: "pointer" }}>
              <div className={style.addImage}>
                <img src="/images/members/img-icon.svg" alt="" />
                <p className={style.addImgFile}>Add Image/File</p>
              </div>
            </label>
            <input
              className={style.upload}
              id="img"
              multiple
              name="file"
              onChange={onDocumentGrab}
              type="file"
              accept="image/gif, image/jpeg, image/png,text/plain, application/pdf"
            />
          </div>
        ) : getOneAssignmentDetailByStudent?.assignment?.studentFiles?.length >
          0 ? (
          <div className={style.files}>
            <p className={style.typeFile}>{t("file_image")}</p>
            {getOneAssignmentDetailByStudent?.assignment?.studentFiles?.map(
              (file) => {
                if (
                  file?.documentType === "application/octet-stream" ||
                  file?.documentType === "image/jpeg" ||
                  file?.documentType === "image/png" ||
                  imageExtensionVerify(file?.documentKey)
                ) {
                  return (
                    <a
                      href={`${pdfShowUrlNext}/${file?.documentKey}`}
                      target="_blank"
                    >
                      <div className={style.img}>
                        <img src="/images/members/img-icon.svg" alt="" />
                        <p>{file?.documentName}</p>
                      </div>
                    </a>
                  );
                } else {
                  return (
                    <a
                      href={`${pdfShowUrlNext}/${file?.documentKey}`}
                      target="_blank"
                    >
                      <div className={style.img}>
                        <img src="/images/admin/pdf-icon.svg" alt="" />
                        <p>{file?.documentName}</p>
                      </div>
                    </a>
                  );
                }
              }
            )}
          </div>
        ) : (
          ""
        )}

        {(imageUrl?.length > 0 || documentUrl?.length > 0) && (
          <div className={style.files}>
            <p className={style.typeFile}>{t("file_image")}</p>
            {imageUrl?.map((file) => (
              <div className={style.img} key={file}>
                <img src="/images/members/img-icon.svg" alt="" />
                <p>{file}</p>
              </div>
            ))}
            {documentUrl?.map((file) => (
              <div className={style.img} key={file?.name}>
                <img src="/images/admin/pdf-icon.svg" alt="" />
                <p>{file?.name}</p>
              </div>
            ))}
          </div>
        )}

        {getOneAssignmentDetailByStudent?.assignment?.assignmentSubmitRequest
          ? ""
          : !getOneAssignmentDetailByStudent?.assignment
              ?.assignmentSubmitRequest && (
              <div
                className={`${style.btn} ${style.btnActive}`}
                onClick={onAssginmentAction}
              >
                {t("submit")}
              </div>
            )}
        {disabled && <QLoader />}
      </div>
    </>
  );
};

export default StudentAssignmentDetail;
