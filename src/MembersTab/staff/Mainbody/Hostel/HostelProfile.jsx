import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useParams } from "react-router-dom";
import { useHostelCoverUpload } from "../../../../hooks/member_tab/hostel-api";
import QLoader from "../../../../Loader/QLoader";
import UniversalDepartmentMiddleHead from "../../../UniversalDepartmentMiddleHead/UniversalDepartmentMiddleHead";
import MiddleContent from "./MiddleContent/MiddleContent";
const HostelProfile = ({
  hostel,
  onRefetch,
  carryParentState,
  activatedRole,
  hid,
  callApi,
}) => {
  const { t } = useTranslation();
  const getQuery = useLocation();
  const params = useParams();
  const [photoURL, setPhotoURL] = useState("");
  const [file, setFile] = useState("");
  const [openCrop, setOpenCrop] = useState(false);
  const [upload, setUpload] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState("");
  const [hostelCoverUpload] = useHostelCoverUpload();
  const [disabled, setDiasbled] = useState(false);
  useEffect(() => {
    if (upload) {
      setDiasbled((pre) => !pre);
      let formData = new FormData();
      formData.append("file", file);
      hostelCoverUpload({
        uploadFile: formData,
        hid: hid,
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
  return (
    <>
      {getQuery?.search?.substring(9) !== "category" &&
        getQuery?.search?.substring(9) !== "structure" && (
          <UniversalDepartmentMiddleHead
            coverKey={hostel?.hostel_photo}
            coverId={hostel?.hostel_photo ? "0" : "2"}
            defaultCover="/images/profileAndCover/hostel-cover.svg"
            textLarge={t("hostel_manager")}
            textSmall={`${hostel?.hostel_manager?.staffFirstName ?? ""} ${
              hostel?.hostel_manager?.staffMiddleName ?? ""
            } ${hostel?.hostel_manager?.staffLastName ?? ""}`}
            count1={hostel?.bed_count}
            count1label={t("hostel_beds")}
            count2={hostel?.room_count}
            count2label={t("hostel_rooms")}
            profilePhoto={profilePhoto}
            profileChange={profileChange}
            openCrop={openCrop}
            setOpenCrop={setOpenCrop}
            setPhotoURL={setPhotoURL}
            photoURL={photoURL}
            setFile={setFile}
            setUpload={setUpload}
            setProfilePhoto={setProfilePhoto}
            viewAs={activatedRole?.access_role ? false : true}
            redirectUrl={`/q/${params.username}/member/hostel?a=site`}
            coverUpdate={true}
            openAs="HOSTEL_MANAGER"
            coverImageStyle={{
              height: "auto",
            }}
            carryParentState={carryParentState}
          />
        )}
      <MiddleContent
        hostel={hostel}
        onRefetch={onRefetch}
        carryParentState={carryParentState}
        accessRole={activatedRole?.access_role}
        accessTpye={activatedRole?.active_tab?.role ?? "Application"}
        callApi={callApi}
      />
      {disabled && <QLoader />}
    </>
  );
};

export default HostelProfile;
