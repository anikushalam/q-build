import React, { useState, useEffect } from "react";
import style from "./CreateBook.module.css";
import { useFileUpload } from "../../../../../../../hooks/authentication-api";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import QLoader from "../../../../../../../Loader/QLoader";
import Tabs from "../Tabs/Tabs";
import JoinFormInput from "../../../../../../../JoiningForm/Student/Form/JoinFormInput";
import Crop from "../../../../../../../ImageCrop/Crop";
import { Dialog } from "@mui/material";
import CustomNormalSelectInput from "../../../../../../../JoiningForm/Student/Form/CustomNormalSelectInput";
import {
  useAddLibraryBook,
  useGetLBookDetail,
  useUpdateBookDetails,
} from "../../../../../../../hooks/member_tab/library-api";
import JoinFormTextArea from "../../../../../../../JoiningForm/Student/Form/JoinFormTextArea";
import { imageShowUrl } from "../../../../../../../services/BaseUrl";
import JoinFormFileEdit from "../../../../../../../JoiningForm/Student/Form/JoinFormFileEdit";

const languageSupport = [
  "English",
  "Hindi",
  "Marathi",
  "Assamese",
  "Bengali",
  "Bodo",
  "Gujrati",
  "Kannada",
  "Kashmiri",
  "Malayalam",
  "Manipuri",
  "Maithili",
  "Nepali",
  "Oriya",
  "Panjabi",
  "Sanskrit",
  "Santhali",
  "Sindhi",
  "Tamil",
  "Telugu",
  "Urdu",
];
const CreateBook = ({ status, onRefetchWhenBookCreate, lid }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const getQuery = useLocation();
  const [disabled, setDisabled] = useState(false);
  const [bookAddType, setBookAddType] = useState(false);
  const [filled, setFilled] = useState("");

  const [upload, setUpload] = useState(false);
  const [file, setFile] = useState("");
  const [openCrop, setOpenCrop] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  const [state, setState] = useState({
    bookName: "",
    bookStatus: "Offline",
    author: "",
    publication: "",
    language: "",
    totalPage: "",
    price: "",
    totalCopies: "",
    shellNumber: "",
    description: "",
    photo: "",
    attachment: [],
  });

  const [oneFileUpload] = useFileUpload();
  const [addLibraryBook] = useAddLibraryBook();
  const [updateBook] = useUpdateBookDetails();

  const { getBookDetailRefetch } = useGetLBookDetail({
    bid: getQuery.state?.bid,
    skip: !getQuery.state?.bid,
  });

  useEffect(() => {
    if (status === "edit") {
      let book_detail = getQuery.state?.book;
      if (book_detail?.bookStatus === "Online") {
        setBookAddType(true);
      }
      setState({
        bookName: book_detail?.bookName ?? "",
        bookStatus: book_detail?.bookStatus ?? "Offline",
        author: book_detail?.author ?? "",
        publication: book_detail?.publication ?? "",
        language: book_detail?.language ?? "",
        totalPage: book_detail?.totalPage ?? "",
        price: book_detail?.price ?? "",
        totalCopies: book_detail?.totalCopies ?? "",
        shellNumber: book_detail?.shellNumber ?? "",
        description: book_detail?.description ?? "",
        photo: book_detail?.photo ?? "",
        attachment: book_detail?.attachment ?? [],
      });
    }
  }, [status]);
  const onChangeStringInput = (e) => {
    setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onChangeNumberInput = (e) => {
    setState((prev) => ({
      ...prev,
      [e.target.name]: +e.target.value,
    }));
  };

  const onUploadFile = (blb, type) => {
    setDisabled((pre) => !pre);
    const formData = new FormData();
    formData.append("file", blb);
    oneFileUpload({
      fileUpload: formData,
    })
      .then((res) => {
        if (type === "Thumbnail") {
          setState((prev) => ({
            ...prev,
            photo: res?.data?.imageKey,
          }));
        } else {
          let obj = {
            documentType: "",
            documentName: "",
            documentSize: "",
            documentKey: "",
          };
          obj.documentType = blb.type;
          obj.documentName = blb.name;
          obj.documentSize = blb.size;
          obj.documentKey = res.data?.imageKey;
          setState((prev) => ({
            ...prev,
            attachment: [obj],
          }));
        }
        setDisabled((pre) => !pre);
        // return res?.data?.imageKey;
      })
      .catch({});
  };

  useEffect(() => {
    if (upload) {
      onUploadFile(file, "Thumbnail");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [upload, file]);

  const onResetState = (type) => {
    if (type === "offline") {
      setState((prev) => ({
        ...prev,
        bookStatus: "Offline",
        attachment: [],
      }));
    } else if (type === "online") {
      setState((prev) => ({
        ...prev,
        bookStatus: "Online",
        totalCopies: "",
        shellNumber: "",
      }));
    } else {
      setState({
        bookName: "",
        bookStatus: "Offline",
        author: "",
        publication: "",
        language: "",
        totalPage: "",
        price: "",
        totalCopies: "",
        shellNumber: "",
        description: "",
        photo: "",
        attachment: [],
      });
    }
  };

  const onToggleType = (type) => {
    if (status === "edit") {
    } else {
      onResetState(type);
      setBookAddType((pre) => !pre);
    }
  };
  const onBookThumbnail = (e) => {
    if (e.target.files?.length) {
      const image = URL.createObjectURL(e.target.files[0]);
      setFile(e.target.files[0]);
      setProfilePhoto(image);
      setPhotoURL(image);
      setOpenCrop(true);
    }
  };

  const onBookPdf = (e) => {
    if (e.target.files?.length) {
      onUploadFile(e.target.files[0], "book_pdf");
    }
  };

  const onLanguageSelect = (val) => {
    setState((prev) => ({
      ...prev,
      language: val,
    }));
  };

  const onBack = () => {
    navigate(-1);
  };

  const onOfflineValidation = (data) => {
    const errors = {};
    for (let obj in data) {
      if (!data[obj]) errors[obj] = `${obj} is required!`;
    }
    return errors;
  };
  const onOnlineValidation = (data) => {
    const errors = {};
    for (let obj in data) {
      if (obj === "book_attach") {
        if (data[obj]?.length > 0) {
        } else {
          errors[obj] = `${obj} is required!`;
        }
      } else {
        if (!data[obj]) errors[obj] = `${obj} is required!`;
      }
    }
    return errors;
  };
  const onCreateBook = () => {
    let flag = false;

    const onValidate =
      state.bookStatus === "Offline"
        ? onOfflineValidation({
            bookName: state.bookName,
            author: state.author,
            language: state.language,
          })
        : onOnlineValidation({
            bookName: state.bookName,
            author: state.author,
            language: state.language,
            book_attach: state.attachment,
          });

    for (let errField in onValidate) {
      if (errField) {
        flag = true;
        break;
      }
    }
    if (flag) {
      setFilled(onValidate);
    } else {
      setDisabled(true);
      if (status === "edit") {
        updateBook({
          bid: getQuery?.state?.bid,
          editData: state,
        })
          .then(() => {
            getBookDetailRefetch();
            onRefetchWhenBookCreate();
            onResetState();
            setDisabled(false);
            navigate(-1);
          })
          .catch(() => {});
      }

      if (status === "create") {
        addLibraryBook({
          lid: lid,
          bookData: state,
        })
          .then(() => {
            onRefetchWhenBookCreate();
            setDisabled(false);
            onResetState();
            navigate(-1);
          })
          .catch(() => {});
      }
    }
  };

  return (
    <>
      <div className={style.addbookcontainer}>
        <div className={style.addbooktop}>
          <img src="/images/back.svg" onClick={onBack} />
          <h6>{t("add_books")}</h6>
          <div />
        </div>

        <div className={style.profilephotocontainer}>
          <img
            className={style.userLogo2}
            src={
              photoURL
                ? photoURL
                : getQuery.state?.book?.photo
                ? `${imageShowUrl}/${getQuery.state?.book?.photo}`
                : "/images/library/addbook_upload.svg"
            }
            alt="avatar"
          />

          <label htmlFor="img" style={{ cursor: "pointer" }}>
            <img
              className={style.cloos2}
              src="/images/library/editicon.svg"
              alt="Avatar"
            />
          </label>
          <input
            className={style.upload}
            id="img"
            name="file"
            onChange={onBookThumbnail}
            type="file"
            accept="image/gif, image/jpeg, image/png"
          />
        </div>

        <div className={style.tabs}>
          <Tabs bookAddType={bookAddType} onToggleType={onToggleType} />
        </div>
        <div className={style.inputcontainerflex}>
          <JoinFormInput
            labelText={t("enter_book_name")}
            placeholder={t("book_name")}
            name={"bookName"}
            value={state.bookName}
            type={"text"}
            onChange={onChangeStringInput}
            errorShow={filled["bookName"]}
            customStyleContainer={{
              width: "47%",
            }}
          />
          <JoinFormInput
            labelText={t("enter_book_author")}
            placeholder={t("book_author")}
            name={"author"}
            value={state.author}
            type={"text"}
            onChange={onChangeStringInput}
            errorShow={filled["author"]}
            customStyleContainer={{
              width: "47%",
            }}
          />
          {bookAddType ? (
            <JoinFormFileEdit
              labelText={t("add_book_attachment")}
              name={"book_attach"}
              value={
                state.attachment?.[0]
                  ? {
                      originalName: state.attachment?.[0]?.documentName,
                      key: state.attachment?.[0]?.documentKey,
                      isPdf: true,
                    }
                  : ""
              }
              onChange={onBookPdf}
              customStyleContainer={{
                width: "96%",
              }}
              errorShow={filled["book_attach"]}
            />
          ) : (
            <>
              <JoinFormInput
                labelText={t("enter_book_copies")}
                placeholder={t("total_book_copies")}
                name={"totalCopies"}
                value={state.totalCopies}
                type={"tel"}
                onChange={onChangeNumberInput}
                customStyleContainer={{
                  width: "47%",
                }}
              />
              <JoinFormInput
                labelText={t("enter_shelf_no")}
                placeholder={t("shelf_no")}
                name={"shellNumber"}
                value={state.shellNumber}
                type={"text"}
                onChange={onChangeStringInput}
                customStyleContainer={{
                  width: "47%",
                }}
              />
            </>
          )}
          <JoinFormInput
            labelText={t("enter_publication")}
            placeholder={t("publication")}
            name={"publication"}
            value={state.publication}
            type={"text"}
            onChange={onChangeStringInput}
            customStyleContainer={{
              width: "47%",
            }}
          />
          <CustomNormalSelectInput
            selectLabel={t("book_lang")}
            selectedValue={t("enter_book_lang")}
            options={languageSupport}
            value={state.language}
            onClick={onLanguageSelect}
            errorShow={filled["language"]}
            customStyleContainer={{
              width: "47%",
            }}
          />
          <JoinFormInput
            labelText={t("enter_book_total_pages")}
            placeholder={t("book_total_pages")}
            name={"totalPage"}
            value={state.totalPage}
            type={"text"}
            onChange={onChangeNumberInput}
            customStyleContainer={{
              width: "47%",
            }}
          />
          <JoinFormInput
            labelText={t("enter_book_pricce")}
            placeholder={t("book_pricce")}
            name={"price"}
            value={state.price}
            type={"text"}
            onChange={onChangeNumberInput}
            customStyleContainer={{
              width: "47%",
            }}
          />
          <JoinFormTextArea
            labelText={t("book_desc")}
            placeholder={t("enter_book_desc")}
            name={"description"}
            value={state.description}
            type={"text"}
            onChange={onChangeStringInput}
            customStyleContainer={{
              width: "96%",
            }}
          />
        </div>

        <div className={style.button_main} onClick={onCreateBook}>
          {status === "edit" ? t("edit_book") : t("add_book_")}
        </div>
      </div>
      {openCrop && (
        <Dialog open={openCrop}>
          <Crop
            setPhotoURL={setPhotoURL}
            photoURL={photoURL}
            setFile={setFile}
            setOpenCrop={setOpenCrop}
            setProfilePhoto={setProfilePhoto}
            setUpload={setUpload}
            first={1}
            second={1}
          />
        </Dialog>
      )}
      {disabled && <QLoader />}
    </>
  );
};

export default CreateBook;
