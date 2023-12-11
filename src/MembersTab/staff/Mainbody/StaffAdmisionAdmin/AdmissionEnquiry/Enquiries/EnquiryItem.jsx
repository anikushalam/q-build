import React from "react";
import style from "../AdmissionEnquiry.module.css";
import moment from "moment";
import { imageShowUrl } from "../../../../../../services/BaseUrl";
function EnquiryItem({ setEnquiryId, enquiry }) {
  return (
    <div className={style.item} onClick={() => setEnquiryId(enquiry?._id)}>
      <div className={style.imgContainer}>
        <img
          alt="Ongoing App"
          src={
            enquiry?.inquiry_student_photo
              ? `${imageShowUrl}/${enquiry?.inquiry_student_photo}`
              : "/images/member_tab/class/default_avatar.svg"
          }
        />
      </div>

      <div className={style.subItem}>
        <div className={style.text}>
          <h6>{enquiry?.inquiry_student_name || ""}</h6>
          <h6>{enquiry?.inquiry_application?.applicationName || ""}</h6>
        </div>
        <div className={style.text}>
          <p style={{ marginBottom: "0.2rem" }}>
            {moment(enquiry?.createdAt).format("DD MMM,yyyy")}
          </p>
          <p>Enquired On</p>
        </div>
      </div>
    </div>
  );
}

export default EnquiryItem;
