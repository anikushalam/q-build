import React, { useEffect, useRef, useState } from "react";
import style from "../../../../../Dashboard/InsDashboard/Components/Mainbody/NewAnnouncement/NewAnnouncement.module.css";
import LoaderButton from "../../../../../Loader/LoaderButton";
import { useTranslation } from "react-i18next";
import { useAddAnnouncementByHostel } from "../../../../../hooks/member_tab/hostel-api";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import FormToggle from "../../../../../StaffTab/components/DividerTab/MainContent/StaffForm/FormToggle";

const HostelNewAnnouncement = ({ hid, onRefetch, onClose }) => {
  const { t } = useTranslation();
  const [files, setFiles] = useState();
  const [imageUrl, setImageUrl] = useState([]);
  const [documentUrl, setDocumentUrl] = useState([]);
  const [privateImage, setPrivateImage] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const announcementTitleRef = useRef("");
  const announcementDescriptionRef = useRef("");
  const [filled, setFilled] = useState("");

  const [addAnnouncementByHostel] = useAddAnnouncementByHostel();
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
    if (announcementTitleRef.current.value) {
      setDisabled(true);
      const formData = new FormData();
      formData.append("insAnnTitle", announcementTitleRef.current.value);
      formData.append(
        "insAnnDescription",
        announcementDescriptionRef.current.value
      );
      formData.append("insAnnVisibility", privateImage ? "Private" : "Anyone");

      let count = 0;
      for (let file in files) {
        if (files[file]["size"]) {
          formData.append(`file${count + 1}`, files[file]);
          ++count;
        }
      }
      formData.append("announceCount", count);
      addAnnouncementByHostel({
        hid: hid,
        announcement: formData,
      })
        .then(() => {
          onRefetch();
          onClose();
          announcementTitleRef.current.value = "";
          announcementDescriptionRef.current.value = "";
          setDisabled(false);
        })
        .catch({});
    } else {
      setFilled({
        title_val: "*required",
      });
    }
  };

  const documentChange = (e) => {
    setFiles(e.target.files);
  };

  const textarea = document.querySelector("textarea");
  textarea?.addEventListener("keyup", (e) => {
    textarea.style.height = "auto";
    let scHeight = e.target.scrollHeight;

    textarea.style.height = `${scHeight}px`;
  });

  const onToggleHandler = (e) => {
    setPrivateImage(e.target.checked);
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h6>{t("new_announcement")}</h6>
        <img
          src="/images/close-post-icon.svg"
          onClick={onClose}
          alt="close icon"
          style={{
            cursor: "pointer",
          }}
        />
      </div>
      <BorderBottom
        customStyle={{
          marginTop: "0.5rem",
          marginBottom: "0.6rem",
          width: "100%",
        }}
      />
      <FormToggle
        labelHeading={t("turn_announcement_private_only")}
        customContainer={{ padding: "0" }}
        customLabel={{ fontWeight: "500" }}
        checkedToggle={privateImage}
        onToggleHandler={onToggleHandler}
      />
      <div className={style.postTitle}>
        <input
          className={style.input}
          type="text"
          ref={announcementTitleRef}
          required
          placeholder={t("title_announce")}
        />
        {filled["title_val"] && (
          <div style={{ color: "red" }}>* announcement title required</div>
        )}
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
          style={{
            border: "0.5px solid rgba(18, 18, 18, 0.3)",
            borderRadius: "6px",
          }}
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

      <label htmlFor="document" style={{ cursor: "pointer" }}>
        <p className={style.addfiles}>{t("add_files")}</p>
      </label>

      <input
        className={style.upload}
        multiple
        id="document"
        name="file"
        onChange={documentChange}
        type="file"
        accept="image/gif, image/jpeg, image/png,  application/pdf, application/msword"
      />
      <button
        className={style.btn}
        disabled={disabled}
        onClick={onSubmitAnnouncement}
        style={{
          marginTop: "0",
        }}
      >
        <p>{t("post")}</p>
        {disabled && (
          <div>
            <LoaderButton />
          </div>
        )}
      </button>
    </div>
  );
};

export default HostelNewAnnouncement;
