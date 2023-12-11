import style from "./StudentAProfileView.module.css";

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
            `${tabDetail.studentFirstName} ${
              tabDetail.studentMiddleName ? tabDetail.studentMiddleName : ""
            } ${tabDetail.studentLastName}`}
        </p>
      </div>

      <div className={style.aboutOneRow}>
        <div className={style.aboutNamePlace}>
          <p className={style.aboutPlace}>Gender</p>
          <p className={style.aboutValue}>
            {tabDetail && tabDetail.studentGender}
          </p>
        </div>
        <div className={style.aboutNamePlace}>
          <p className={style.aboutPlace}>Date of Birth</p>
          <p className={style.aboutValue}>
            {tabDetail && tabDetail.studentDOB}
          </p>
        </div>
        <div className={style.aboutNamePlace}>
          <p className={style.aboutPlace}>Mother's Name</p>
          <p className={style.aboutValue}>
            {" "}
            {tabDetail && tabDetail.studentMotherName}
          </p>
        </div>
      </div>
      <div className={style.aboutOneRow}>
        <div className={style.aboutNamePlace}>
          <p className={style.aboutPlace}>Nationality</p>
          <p className={style.aboutValue}>
            {tabDetail && tabDetail.studentNationality}
          </p>
        </div>
        <div className={style.aboutNamePlace}>
          <p className={style.aboutPlace}>Mother's Tongue</p>
          <p className={style.aboutValue}>
            {tabDetail && tabDetail.studentMTongue}
          </p>
        </div>
        <div className={style.aboutNamePlace}>
          <p className={style.aboutPlace}>Cast</p>
          <p className={style.aboutValue}>
            {tabDetail && tabDetail.studentCast}
          </p>
        </div>
      </div>
      <div className={style.aboutOneRow}>
        <div className={style.aboutNamePlace}>
          <p className={style.aboutPlace}>Cast Category</p>
          <p className={style.aboutValue}>
            {tabDetail && tabDetail.studentCastCategory}
          </p>
        </div>
        <div className={style.aboutNamePlace}>
          <p className={style.aboutPlace}>Religion</p>
          <p className={style.aboutValue}>
            {tabDetail && tabDetail.studentReligion}
          </p>
        </div>
        <div className={style.aboutNamePlace}>
          <p className={style.aboutPlace}>Birth Place</p>
          <p className={style.aboutValue}>
            {tabDetail && tabDetail.studentBirthPlace}
          </p>
        </div>
      </div>
      <div className={style.aboutOneRow}>
        <div className={style.aboutNamePlace}>
          <p className={style.aboutPlace}>State</p>
          <p className={style.aboutValue}>
            {tabDetail && tabDetail.studentState}
          </p>
        </div>
        <div className={style.aboutNamePlace}>
          <p className={style.aboutPlace}>District</p>
          <p className={style.aboutValue}>
            {tabDetail && tabDetail.studentDistrict}
          </p>
        </div>
        <div className={style.aboutNamePlace}>
          <p className={style.aboutPlace}>Mobile Number</p>
          <p className={style.aboutValue}>
            {tabDetail && tabDetail.studentPhoneNumber}
          </p>
        </div>
      </div>
      <div className={style.aboutOneRow}>
        <div className={style.aboutNamePlace}>
          <p className={style.aboutPlace}>Parent's Name</p>
          <p className={style.aboutValue}>
            {tabDetail && tabDetail.studentParentsName}
          </p>
        </div>
        <div className={style.aboutNamePlace}>
          <p className={style.aboutPlace}>Parent's Mobile Number</p>
          <p className={style.aboutValue}>
            {tabDetail && tabDetail.studentParentsPhoneNumber}
          </p>
        </div>
        <div className={style.aboutNamePlace}>
          <p className={style.aboutPlace}>Aadhar Number</p>
          <p className={style.aboutValue}>
            {tabDetail && tabDetail.studentAadharNumber}
          </p>
        </div>
      </div>
      <div className={style.aboutQualification}>
        <p className={style.aboutPlace}>Current Address</p>
        <p className={style.aboutValue}>
          {tabDetail && tabDetail.studentAddress}
        </p>
      </div>

      {/* <div className={style.aboutAddhar}>
        <div className={style.aboutAddharTowNamePlace}>
          <p className={style.aboutPlace}>Aadhar Card Front Side</p>
          <p
            className={style.aboutValue}
            onClick={() =>
              openInNewTab(
                `${imageShowUrl}/${tabDetail?.studentAadharFrontCard}`
              )
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
              openInNewTab(
                `${imageShowUrl}/${tabDetail?.studentAadharFrontCard}`
              )
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
