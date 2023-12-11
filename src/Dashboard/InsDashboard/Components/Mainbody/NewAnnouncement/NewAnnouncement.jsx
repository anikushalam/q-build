import React, { useState, useRef, useEffect } from "react";
import style from "./NewAnnouncement.module.css";
import { useTranslation } from "react-i18next";
import "../../../../CreatePost/CreateCommonPost.css";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import { useInstituteCreateAnnouncement } from "../../../../../Post/Institute/Components/search-api";
import { useSelector } from "react-redux";
import LoaderButton from "../../../../../Loader/LoaderButton";
import PostHeader from "../../../../CreatePost/PostHeader";
import PostFooterIcon from "../../../../CreatePost/PostFooterIcon";
import { useOneInstituteDashboard } from "../../../../../hooks/dashboard/dashboard-api";

function NewAnnouncement({ setPostType, onPostTypeChange }) {
  const { t } = useTranslation();
  const [files, setFiles] = useState();
  const [imageUrl, setImageUrl] = useState([]);
  const [documentUrl, setDocumentUrl] = useState([]);
  const [privateImage, setPrivateImage] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [allField, setAllField] = useState(false);
  const announcementTitleRef = useRef("");
  const announcementDescriptionRef = useRef("");
  const announcementStatusRef = useRef("");
  const [instituteCreateAnnouncement] = useInstituteCreateAnnouncement();
  const ids = useSelector((state) => state.idChange);

  const { oneInstituteDashboard, oneInstituteDashboardRefetch } =
    useOneInstituteDashboard({
      id: ids?.id,
      skip: !ids?.id,
    });
  useEffect(() => {
    if (ids?.id) oneInstituteDashboardRefetch();
  }, [ids?.id, oneInstituteDashboardRefetch]);

  useEffect(() => {
    if (files) {
      const arr = [];
      const arr1 = [];
      for (let file in files) {
        for (let fl in files[file]) {
          if (fl === "type") {
            if (files[file][fl].includes("image/")) {
              arr.push(URL.createObjectURL(files[file]));
            } else {
              arr1.push({ name: files[file]["name"] });
            }
          }
        }
      }
      setImageUrl(arr);
      setDocumentUrl(arr1);
    }
  }, [files]);
  const onSubmitAnnouncement = () => {
    if (
      announcementTitleRef.current.value !== "" &&
      announcementStatusRef.current.value !== ""
      // &&
      // announcementDescriptionRef.current.value !== ""
      // files
    ) {
      setDisabled(true);
      setAllField(false);
      const formData = new FormData();
      formData.append("insAnnTitle", announcementTitleRef.current.value);
      formData.append(
        "insAnnDescription",
        announcementDescriptionRef.current.value
      );
      formData.append("insAnnVisibility", announcementStatusRef.current.value);
      for (let file in files) {
        if (files[file]["size"]) {
          formData.append("file", files[file]);
        }
      }
      instituteCreateAnnouncement({
        id: ids?.id,
        announcement: formData,
      })
        .then(() => {
          onPostTypeChange("post");
          announcementTitleRef.current.value = "";
          announcementDescriptionRef.current.value = "";
          announcementStatusRef.current.value = "";
          setDisabled(false);
        })
        .catch({});
    } else {
      setAllField(true);
    }
  };

  const documentChange = (e) => {
    setFiles(e.target.files);
  };

  // const textarea = document.querySelector("textarea");
  // textarea?.addEventListener("keyup", (e) => {
  //   textarea.style.height = "auto";
  //   let scHeight = e.target.scrollHeight;

  //   textarea.style.height = `${scHeight}px`;
  // });

  const onEditIocn = () => {
    onPostTypeChange("newPost");
    setPostType("text");
  };
  const onImageIocn = () => {
    onPostTypeChange("newPost");
    setPostType("image");
  };

  const textarea = document.querySelector("textarea");
  textarea?.addEventListener("keyup", (e) => {
    textarea.style.height = "auto";
    let scHeight = e.target.scrollHeight;

    textarea.style.height = `${scHeight}px`;
  });
  return (
    <>
      <PostHeader
        postTitle={t("create_announcement")}
        onClose={() => onPostTypeChange("post")}
        dynamicImage={
          oneInstituteDashboard?.institute?.photoId !== "1"
            ? `${imageShowUrl}/${oneInstituteDashboard?.institute?.insProfilePhoto}`
            : "/images/ins_default_profile.svg"
        }
        name={oneInstituteDashboard?.institute?.insName}
        privateImage={privateImage}
        setPrivateImage={setPrivateImage}
        postStatusRef={announcementStatusRef}
        announcement={true}
      >
        <div className={style.postTitle}>
          <input
            className={style.input}
            type="text"
            ref={announcementTitleRef}
            required
            placeholder={t("title_announce")}
          />
        </div>

        <div className={style.postDesc}>
          <textarea
            className={style.postTextarea}
            rows="3"
            type="text"
            required
            ref={announcementDescriptionRef}
            name="CreateInsPost"
            placeholder={t("description")}
          />
        </div>

        <div className={style.listContainer}>
          {imageUrl.length > 0 && (
            <div className={style.documentList}>
              {imageUrl.map((doc, index) => (
                <img src={doc} key={index} alt="" />
              ))}
            </div>
          )}

          {documentUrl.length > 0 && (
            <div className={style.pdfList}>
              {documentUrl.map((document, index) => (
                <div className={style.pdfPreview}>
                  <img src="/images/pdf-icon.png" key={index} alt="" />
                  <p>{document.name}</p>
                </div>
              ))}
            </div>
          )}
        </div>
        {allField && <div style={{ color: "red" }}>{t("please_add")}</div>}
        <button
          className={style.btn}
          disabled={disabled}
          onClick={onSubmitAnnouncement}
        >
          <p>{t("post")}</p>
          {disabled && (
            <div>
              <LoaderButton />
            </div>
          )}
        </button>

        <PostFooterIcon
          onEditIocn={onEditIocn}
          onPostTypeChange={onPostTypeChange}
          activeIcon={4}
          addFileToggle={true}
          onAddFile={documentChange}
          acceptFormate="image/gif, image/jpeg, image/png,  application/pdf, application/msword"
        >
          <div>
            <img
              src="/images/img-post-icon.svg"
              onClick={onImageIocn}
              alt="file upload icon"
              title="Create Image Post"
            />
          </div>
        </PostFooterIcon>
      </PostHeader>
    </>
  );
}

export default NewAnnouncement;
