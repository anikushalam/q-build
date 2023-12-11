import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import QLoader from "../../../../Loader/QLoader";
import UniversalDepartmentMiddleHead from "../../../UniversalDepartmentMiddleHead/UniversalDepartmentMiddleHead";
import { useTransportCoverUpload } from "../../../../hooks/member_tab/transport-api";
import MiddleContent from "./MiddleContent/MiddleContent";
import { useParams } from "react-router-dom";
const TransportProfile = ({ transport, tid, carryParentState, onRefetch }) => {
  const { t } = useTranslation();
  const params = useParams();
  const [photoURL, setPhotoURL] = useState("");
  const [file, setFile] = useState("");
  const [openCrop, setOpenCrop] = useState(false);
  const [upload, setUpload] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState("");
  const [transportCoverUpload] = useTransportCoverUpload();
  const [disabled, setDiasbled] = useState(false);
  useEffect(() => {
    if (upload) {
      setDiasbled((pre) => !pre);
      let formData = new FormData();
      formData.append("file", file);
      transportCoverUpload({
        uploadFile: formData,
        tid: tid,
      })
        .then(() => {
          setDiasbled((pre) => !pre);
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
      <UniversalDepartmentMiddleHead
        coverKey={transport?.transport_photo}
        coverId={transport?.transport_photo ? "0" : "2"}
        defaultCover="/images/profileAndCover/transport-cover.svg"
        textLarge={t("transport_manager")}
        textSmall={`${transport?.transport_manager?.staffFirstName ?? ""} ${
          transport?.transport_manager?.staffMiddleName ?? ""
        } ${transport?.transport_manager?.staffLastName ?? ""}`}
        count1={transport?.vehicle_count}
        count1label={t("vechiles")}
        count2={transport?.transport_staff_count}
        count2label={t("transport_personal")}
        count3={transport?.passenger_count}
        count3label={t("passengers")}
        profilePhoto={profilePhoto}
        profileChange={profileChange}
        openCrop={openCrop}
        setOpenCrop={setOpenCrop}
        setPhotoURL={setPhotoURL}
        photoURL={photoURL}
        setFile={setFile}
        setUpload={setUpload}
        setProfilePhoto={setProfilePhoto}
        coverUpdate={true}
        isTransport="TRANSPORT_MANAGER"
        redirectUrl={`/q/${params.username}/member/transport?a=site`}
        carryParentState={carryParentState}
        coverImageStyle={{
          height: "auto",
        }}
      />
      <MiddleContent
        transport={transport}
        onRefetch={onRefetch}
        tid={tid}
        carryParentState={carryParentState}
        // accessRole={activatedRole?.access_role}
        // accessTpye={activatedRole?.active_tab?.role ?? "Application"}
        // callApi={callApi}
      />
      {disabled && <QLoader />}
    </>
  );
};

export default TransportProfile;
