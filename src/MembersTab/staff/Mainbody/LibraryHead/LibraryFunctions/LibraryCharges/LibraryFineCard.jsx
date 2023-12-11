import React, { useState } from "react";
import style from "../IssuedBooks/IssuedBooks.module.css";
import { useTranslation } from "react-i18next";
import { imageShowUrl } from "../../../../../../services/BaseUrl";
import { useLibraryFineCollectBook } from "../../../../../../hooks/member_tab/library-api";
import QLoader from "../../../../../../Loader/QLoader";
import StudentInternalFeeReceipt from "../../../../../student/Mainbody/StudentClass/StudentAllFeesData/StudentInternalFeeReceipt";
const LibraryFineCard = ({ studentFine, is_last, lid, onRefetch }) => {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const [libraryFineCollectBook] = useLibraryFineCollectBook();
  const onCollectOffline = () => {
    if (studentFine?.book?._id && studentFine?.student?._id && lid) {
      setDisabled((pre) => !pre);
      libraryFineCollectBook({
        lid: lid,
        sid: studentFine?.student?._id,
        bid: studentFine?.book?._id,
        collectData: {
          amount: studentFine?.fine_charge ?? 0,
          prid: studentFine?._id,
        },
      })
        .then(() => {
          onRefetch();
          setDisabled((pre) => !pre);
        })
        .catch({});
    }
  };
  return (
    <div
      className={style.issuedBookItem}
      style={{
        width: is_last ? "100%" : "49%",
        marginBottom: is_last ? "0" : "1rem",
      }}
    >
      <div className={style.issuedBookItemTop}>
        <div className={style.issuedBookItemTopleft}>
          <img
            className={style.bookItemImg}
            src={
              studentFine?.book?.photo
                ? `${imageShowUrl}/${studentFine?.book?.photo}`
                : "/images/defaultBook.png"
            }
            alt="book avatar"
            loading="lazy"
          />
        </div>
        <div className={style.issuedBookItemTopright}>
          <h6 className={style.title}>
            {studentFine?.book?.bookName?.length >= 18
              ? `${studentFine?.book?.bookName?.match(/.{1,18}/g)[0]} ...`
              : studentFine?.book?.bookName}
          </h6>
          <p className={style.author}>
            {studentFine?.book?.author} &nbsp;
            <span className={style.authorLabel}>{t("author")}</span>
          </p>
          <p className={style.booklang}> {studentFine?.book?.language}</p>
        </div>
      </div>
      <div className={style.issuedBookItemMid}>
        <div className={style.issuedBookItemMidleft}>
          <div className={style.imgcontainer}>
            <img
              src={
                studentFine?.student?.studentProfilePhoto
                  ? `${imageShowUrl}/${studentFine?.student?.studentProfilePhoto}`
                  : "/images/member_tab/class/default_avatar.svg"
              }
              alt="book avatar"
              loading="lazy"
            />
          </div>
        </div>
        <div className={style.issuedBookItemMidright}>
          <h6>
            {" "}
            {`${studentFine?.student?.studentFirstName ?? ""} ${
              studentFine?.student?.studentMiddleName ?? ""
            } ${studentFine?.student?.studentLastName ?? ""}`}
          </h6>
          <p>
            {t("gr_no")} {studentFine?.student?.studentGRNO ?? ""}{" "}
          </p>
        </div>
      </div>
      <div className={style.issuedBookItemBottom}>
        <div className={style.issuedBookItemBottomLeft}>
          <p>{studentFine?.fine_type ?? ""} Book Fine Amount</p>
          <h6>
            {t("rs")}. {studentFine?.fine_charge ?? 0}
          </h6>
        </div>
        {studentFine?.status === "Paid" ? (
          <div className={style.issuedBookItemBottomLeft}>
            <StudentInternalFeeReceipt rid={studentFine?.fee_receipt?._id} />
          </div>
        ) : (
          <div className={style.collectbtn} onClick={onCollectOffline}>
            {t("collect_fine")}
          </div>
        )}
      </div>
      {disabled && <QLoader />}
    </div>
  );
};

export default LibraryFineCard;
