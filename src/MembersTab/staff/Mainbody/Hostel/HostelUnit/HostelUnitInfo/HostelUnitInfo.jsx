import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import {
  useGetHostelUnitDetail,
  useHostelUnitCoverUpload,
} from "../../../../../../hooks/member_tab/hostel-api";
import QLoader from "../../../../../../Loader/QLoader";
import UniversalDepartmentMiddleHead from "../../../../../UniversalDepartmentMiddleHead/UniversalDepartmentMiddleHead";
import HostelUnitTab from "./HostelUnitTab";

const HostelUnitInfo = ({
  carryParentState,
  viewAs,
  callApi,
  pageOpenAs,
  instituteId,
}) => {
  const { t } = useTranslation();
  const getQuery = useLocation();
  const [photoURL, setPhotoURL] = useState("");
  const [file, setFile] = useState("");
  const [openCrop, setOpenCrop] = useState(false);
  const [upload, setUpload] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState("");
  const [hostelUnitCoverUpload] = useHostelUnitCoverUpload();
  const [disabled, setDiasbled] = useState(false);
  useEffect(() => {
    if (upload) {
      setDiasbled((pre) => !pre);
      let formData = new FormData();
      formData.append("file", file);
      hostelUnitCoverUpload({
        uploadFile: formData,
        huid: getQuery.state?.huid,
      })
        .then(() => {
          setDiasbled((pre) => !pre);

          // console.info("done");
        })
        .catch({});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [upload, file]);

  const profileChange = (e) => {
    const image = URL.createObjectURL(e.target.files[0]);
    setFile(e.target.files[0]);
    setProfilePhoto(image);
    setPhotoURL(image);
    setOpenCrop(true);
  };
  const { getHostelUnitDetail, getHostelUnitDetailRefetch } =
    useGetHostelUnitDetail({
      huid: getQuery.state?.huid,
      skip: !getQuery.state?.huid,
    });

  useEffect(() => {
    if (getQuery.state?.huid) getHostelUnitDetailRefetch();
  }, [getQuery.state?.huid, getHostelUnitDetailRefetch]);
  return (
    <div>
      <UniversalDepartmentMiddleHead
        coverKey={getHostelUnitDetail?.one_unit?.hostel_unit_photo}
        coverId={getHostelUnitDetail?.one_unit?.hostel_unit_photo ? "0" : "2"}
        defaultCover="/images/profileAndCover/unit-cover.svg"
        textLarge={getHostelUnitDetail?.one_unit?.hostel_unit_name}
        textSmall={`${
          getHostelUnitDetail?.one_unit?.hostel_unit_head?.staffFirstName ?? ""
        } ${
          getHostelUnitDetail?.one_unit?.hostel_unit_head?.staffMiddleName ?? ""
        } ${
          getHostelUnitDetail?.one_unit?.hostel_unit_head?.staffLastName ?? ""
        }`}
        count1={getHostelUnitDetail?.one_unit?.bed_count}
        count1label={t("hostel_beds")}
        count2={getHostelUnitDetail?.one_unit?.room_count}
        count2label={t("hostel_rooms")}
        count3={getHostelUnitDetail?.one_unit?.hostelities_count}
        count3label={t("occupied_count")}
        profilePhoto={profilePhoto}
        profileChange={profileChange}
        openCrop={openCrop}
        setOpenCrop={setOpenCrop}
        setPhotoURL={setPhotoURL}
        photoURL={photoURL}
        setFile={setFile}
        setUpload={setUpload}
        setProfilePhoto={setProfilePhoto}
        viewAs={false}
        coverUpdate={
          viewAs === "STUDENT" ||
          viewAs === "HOSTEL_SEARCH" ||
          viewAs === "INSTITUTE"
            ? false
            : true
        }
        openAs="HOSTEL_MANAGER"
        coverImageStyle={{
          height: "auto",
        }}
      />
      <HostelUnitTab
        carryParentState={carryParentState}
        huid={getQuery.state?.huid}
        viewAs={viewAs}
        hid={getHostelUnitDetail?.one_unit?.hostel?._id}
        callApi={callApi}
        pageOpenAs={pageOpenAs}
        instituteId={
          getHostelUnitDetail?.one_unit?.hostel?.hostel?.institute ?? ""
        }
      />
      {disabled && <QLoader />}
    </div>
  );
};

export default HostelUnitInfo;
