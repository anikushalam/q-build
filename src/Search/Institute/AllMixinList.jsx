import React from "react";
import { imageShowUrl } from "../../services/BaseUrl";
import InstituteConnectionResult from "../InstituteConnectionResult";
import ConnectionCard from "./ConnectionCard";
const AllMixinList = ({ mixin, onCloseSearch, username }) => {
  return (
    <>
      {mixin?.insName && (
        <InstituteConnectionResult
          institute={mixin}
          hideModal={onCloseSearch}
        />
      )}

      {mixin?.staffFirstName && (
        <ConnectionCard
          username={username}
          activeTab="staff"
          imageShow={`${imageShowUrl}/${mixin?.staffProfilePhoto}`}
          name={`${mixin?.staffFirstName} ${
            mixin?.staffMiddleName ? mixin?.staffMiddleName : ""
          } ${mixin?.staffLastName}`}
          showBottomInfo={mixin?.staffROLLNO}
          openType={{
            openId: mixin?._id,
            asOpen: "staff",
          }}
        />
      )}
      {mixin?.studentFirstName && (
        <ConnectionCard
          username={username}
          activeTab="student"
          imageShow={`${imageShowUrl}/${mixin?.studentProfilePhoto}`}
          name={`${mixin?.studentFirstName} ${
            mixin?.studentMiddleName ? mixin?.studentMiddleName : ""
          } ${mixin?.studentLastName}`}
          showBottomInfo={mixin?.studentGRNO}
          openType={{
            openId: mixin?._id,
            asOpen: "student",
          }}
        />
      )}
      {mixin?.dName && (
        <ConnectionCard
          username={username}
          activeTab="department"
          imageShow={
            mixin?.photo
              ? `${imageShowUrl}/${mixin?.photo}`
              : "/images/profileAndCover/department-profile-img.svg"
          }
          name={mixin?.dName}
          showBottomInfo={`${mixin?.dHead?.staffFirstName} ${
            mixin?.dHead?.staffMiddleName ? mixin?.dHead?.staffMiddleName : ""
          } ${mixin?.dHead?.staffLastName}`}
          openType={{
            urlName: mixin?.dName,
            openId: mixin?._id,
            asOpen: "department",
          }}
        />
      )}
    </>
  );
};

export default AllMixinList;
