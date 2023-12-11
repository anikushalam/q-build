// import { imageShowUrl } from "../../../../../services/BaseUrl";
import style from "./StaffAProfileView.module.css";

const TabContent = ({ tabDetail }) => {
  // const openInNewTab = (url) => {
  //   const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  //   if (newWindow) newWindow.opener = null;
  // };
  return (
    <div className={style.aboutMain}>
      <div className={style.aboutNamePlace1}>
        <p className={style.aboutPlace}>Name</p>
        <p className={style.aboutValue}>
          {tabDetail &&
            `${tabDetail.staffFirstName} ${
              tabDetail.staffMiddleName ? tabDetail.staffMiddleName : ""
            } ${tabDetail.staffLastName}`}
        </p>
      </div>

      <div className={style.aboutOneRow}>
        <div className={style.aboutNamePlace}>
          <p className={style.aboutPlace}>Gender</p>
          <p className={style.aboutValue}>
            {tabDetail && tabDetail.staffGender}
          </p>
        </div>
        <div className={style.aboutNamePlace}>
          <p className={style.aboutPlace}>Date of Birth</p>
          <p className={style.aboutValue}>{tabDetail && tabDetail.staffDOB}</p>
        </div>
        <div className={style.aboutNamePlace}>
          <p className={style.aboutPlace}>Mother's Name</p>
          <p className={style.aboutValue}>
            {tabDetail && tabDetail.staffMotherName}
          </p>
        </div>
      </div>
      <div className={style.aboutOneRow}>
        <div className={style.aboutNamePlace}>
          <p className={style.aboutPlace}>Nationality</p>
          <p className={style.aboutValue}>
            {tabDetail && tabDetail.staffNationality}
          </p>
        </div>
        <div className={style.aboutNamePlace}>
          <p className={style.aboutPlace}>Mother's Tongue</p>
          <p className={style.aboutValue}>
            {tabDetail && tabDetail.staffMTongue}
          </p>
        </div>
        <div className={style.aboutNamePlace}>
          <p className={style.aboutPlace}>Cast</p>
          <p className={style.aboutValue}>{tabDetail && tabDetail.staffCast}</p>
        </div>
      </div>
      <div className={style.aboutOneRow}>
        <div className={style.aboutNamePlace}>
          <p className={style.aboutPlace}>Cast Category</p>
          <p className={style.aboutValue}>
            {tabDetail && tabDetail.staffCastCategory}
          </p>
        </div>
        <div className={style.aboutNamePlace}>
          <p className={style.aboutPlace}>Religion</p>
          <p className={style.aboutValue}>
            {" "}
            {tabDetail && tabDetail.staffReligion}
          </p>
        </div>
        <div className={style.aboutNamePlace}>
          <p className={style.aboutPlace}>Birth Place</p>
          <p className={style.aboutValue}>
            {tabDetail && tabDetail.staffBirthPlace}
          </p>
        </div>
      </div>
      <div className={style.aboutOneRow}>
        <div className={style.aboutNamePlace}>
          <p className={style.aboutPlace}>State</p>
          <p className={style.aboutValue}>
            {tabDetail && tabDetail.staffState}
          </p>
        </div>
        <div className={style.aboutNamePlace}>
          <p className={style.aboutPlace}>District</p>
          <p className={style.aboutValue}>
            {tabDetail && tabDetail.staffDistrict}
          </p>
        </div>
        <div className={style.aboutNamePlace}>
          <p className={style.aboutPlace}>Mobile Number</p>
          <p className={style.aboutValue}>
            {tabDetail && tabDetail.staffPhoneNumber}
          </p>
        </div>
      </div>
      <div className={style.aboutTow}>
        <div className={style.aboutTowNamePlace}>
          <p className={style.aboutPlace}>Current Address</p>
          <p className={style.aboutValue}>
            {" "}
            {tabDetail && tabDetail.staffAddress}
          </p>
        </div>
        <div className={style.aboutTowNamePlace1}>
          <p className={style.aboutPlace}>Aadhar Number</p>
          <p className={style.aboutValue}>
            {tabDetail && tabDetail.staffAadharNumber}
          </p>
        </div>
      </div>
      <div className={style.aboutQualification}>
        <p className={style.aboutPlace}>Qualification</p>
        <p className={style.aboutValue}>
          {tabDetail && tabDetail.staffQualification}
        </p>
      </div>

      {/* <div className={style.aboutAddhar}>
        <div className={style.aboutAddharTowNamePlace}>
          <p className={style.aboutPlace}>Aadhar Card Front Side</p>
          <p
            className={style.aboutValue}
            onClick={() =>
              openInNewTab(`${imageShowUrl}/${tabDetail?.staffAadharFrontCard}`)
            }
          >
            <div className={style.addharBox}>
              <img src="/images/addhar-icon.svg" alt="" />
              Front Side
            </div>
          </p>
        </div>
        <div className={style.aboutAddharTowNamePlace}>
          <p className={style.aboutPlace}>Aadhar Card Back Side</p>
          <p
            className={style.aboutValue}
            onClick={() =>
              openInNewTab(`${imageShowUrl}/${tabDetail?.staffAadharBackCard}`)
            }
          >
            <div className={style.addharBox}>
              <img src="/images/addhar-icon.svg" alt="" />
              Back Side
            </div>
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default TabContent;
