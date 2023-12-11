import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  useGetOneInstituteQuery,
  useMarkApproveInstituteMutation,
  useMarkRejectInstituteMutation,
} from "../../../../../../services/superAdminAPI";
import style from "./StudentAProfileView.module.css";
import { imageShowUrl } from "../../../../../../services/BaseUrl";

const StudentAProfileView = ({ insId, approve, request, setIndex }) => {
  const { data: profileData } = useGetOneInstituteQuery(insId && `${insId}`);
  const [activation, setActivation] = useState({
    charges: profileData?.institute?.unlockAmount,
    initialAmount: 0,
    followersAmount: 0,
  });
  const [approveInstitute] = useMarkApproveInstituteMutation();
  const [rejectInstitute] = useMarkRejectInstituteMutation();
  const ApproveHandler = () => {
    // var dataApprove = {
    //   id: insId && insId,
    //   initialAmount: activation?.initialAmount,
    //   charges: activation?.charges ? activation.charges : 1000,
    //   followersAmount: activation?.followersAmount
    // };
    var dataApprove = {
      id: insId && insId,
      initialAmount: 0,
      charges: 0,
      followersAmount: 0,
    };
    approveInstitute(dataApprove).then((res) => {
      request();
      // approve();
      setIndex(1);
    });
  };

  const RejectHandler = () => {
    var dataReject = {
      id: insId && insId,
    };
    rejectInstitute(dataReject).then((res) => {
      request();
      // approve();
      setIndex(1);
    });
  };

  return (
    <>
      <div className={style.parentProfile}>
        <h6>Insitute Request</h6>
        <div className={`mt-4 ${style.parentProfileChild}`}>
          <h5>{profileData && profileData.institute.name}</h5>
          <p>{profileData && profileData.institute.insName}</p>
        </div>

        {/* <div className={style.address}>
          <h6>About</h6>
          <p>{profileData && profileData.institute.insAbout}</p>
        </div> */}

        <div className={style.address}>
          <h6>Address</h6>
          <p>{profileData && profileData.institute.insAddress}</p>
        </div>

        <div className={style.pinstatedis}>
          <div className={style.address}>
            <h6>Pin Code</h6>
            <p>{profileData && profileData.institute.insPincode}</p>
          </div>

          <div className={style.address}>
            <h6>District</h6>
            <p>{profileData && profileData.institute.insDistrict}</p>
          </div>

          <div className={style.address}>
            <h6>State</h6>
            <p>{profileData && profileData.institute.insState}</p>
          </div>
        </div>

        <div className={style.typemode}>
          <div className={style.address}>
            <h6>Insititue Type</h6>
            <p>{profileData && profileData.institute.insType}</p>
          </div>

          <div className={style.address}>
            <h6>Insititue Mode</h6>
            <p>{profileData && profileData.institute.insMode}</p>
          </div>

          {/* --------------This feild will be empty-------------------------------- */}

          <div className={`${style.address} ${style.none}`}>
            <h6> bedbfg</h6>
            <p>Offlfghtyjhine</p>
          </div>
        </div>

        <div className={style.typemode}>
          <div className={style.address}>
            <h6>Mobile Number</h6>
            <p>{profileData && profileData.institute.insPhoneNumber}</p>
          </div>

          <div className={style.address}>
            <h6>Email ID</h6>
            <p>{profileData && profileData.institute.insEmail}</p>
          </div>

          {/* --------------This feild will be empty-------------------------------- */}

          <div className={`${style.address} ${style.none}`}>
            <h6> bedbfg</h6>
            <p>Offlfghtyjhine</p>
          </div>
        </div>

        {/* <div className={style.typemode}>
          <div className={style.address}>
            <h6>Initial Amount</h6>
            <input
              type="number"
              min="0"
              name="initialAmount"
              placeholder="Enter Initial Amount"
              className="form-control"
              value={activation.initialAmount}
              onChange={(e) => {
                setActivation({ ...activation, initialAmount: e.target.value });
              }}
            />
          </div>

          <div className={style.address}>
            <h6>Followers Criteria</h6>
            <input
              type="number"
              min="0"
              name="followersAmount"
              placeholder="Enter Followers Critiria"
              className="form-control"
              value={activation.followersAmount}
              onChange={(e) => {
                setActivation({
                  ...activation,
                  followersAmount: e.target.value,
                });
              }}
            />
          </div>


          <div className={`${style.address} ${style.none}`}>
            <h6> bedbfg</h6>
            <p>Offlfghtyjhine</p>
          </div>
        </div> */}

        {/* <div className={style.aadhar}>
          {profileData?.institute?.initialReferral ? (
            <div className={style.oneRowName}>
              <div className={style.address2}>
                <h6>Reffer By</h6>
                <div className={style.oneRowName}>
                  <div className={style.oneRowNameImage}>
                    <img
                      src={
                        profileData?.institute?.initialReferral?.photoId !== "1"
                          ? `${imageShowUrl}/${profileData?.institute?.initialReferral?.profilePhoto}`
                          : "/images/ins_default_profile.svg"
                      }
                      alt=""
                    />
                  </div>
                  <div>
                    <p className={style.oneRowNameText}>
                      {profileData?.institute?.initialReferral?.username}
                    </p>
                    <p className={style.oneRowNamePlaceholder}>
                      {profileData?.institute?.initialReferral?.userLegalName}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          <div className={style.address2}>
            <h6>Final Unlock Amount</h6>
            <input
              type="number"
              name="charges"
              min={1000}
              placeholder="Enter Final Unlock Amount"
              className="form-control"
              value={activation.charges}
              onChange={(e) =>
                setActivation({ ...activation, charges: e.target.value })
              }
            />
          </div>
        </div> */}

        <div className={style.btns}>
          <button
            type="button"
            className={`${style.btn} `}
            onClick={ApproveHandler}
          >
            Accept
          </button>
          <button
            type="button"
            className={`${style.btn}`}
            onClick={RejectHandler}
          >
            Reject
          </button>
        </div>
        {/* <div className="mt-3">
          <BasicTabs />
        </div> */}
      </div>
    </>
  );
};

export default StudentAProfileView;
