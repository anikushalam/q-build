import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import UniversalDepartmentMiddleHead from "../../../../UniversalDepartmentMiddleHead/UniversalDepartmentMiddleHead";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import style from "../Transport.module.css";
import VehiclePassenger from "./VehiclePassenger";
import {
  useGetVehicleDetail,
  useTransportVehicleCoverUpload,
} from "../../../../../hooks/member_tab/transport-api";
import QLoader from "../../../../../Loader/QLoader";
import AddRoute from "./AddRoute/AddRoute";
import VehicleMiddleContent from "../MiddleContent/VehicleMiddleContent";

const VehicleDetail = ({
  transportId,
  carryParentState,
  pageOpenAs,
  isRootAccess,
  instituteId,
}) => {
  const { t } = useTranslation();
  const getQuery = useLocation();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [photoURL, setPhotoURL] = useState("");
  const [file, setFile] = useState("");
  const [openCrop, setOpenCrop] = useState(false);
  const [upload, setUpload] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState("");
  const [transportVehicleCoverUpload] = useTransportVehicleCoverUpload();
  const [disabled, setDiasbled] = useState(false);
  const { getVehicleDetail, getVehicleDetailRefetch } = useGetVehicleDetail({
    vid: getQuery.state?.vehicleId,
    skip: !getQuery.state?.vehicleId,
  });

  useEffect(() => {
    if (getQuery.state?.vehicleId) getVehicleDetailRefetch();
  }, [getQuery.state?.vehicleId, getVehicleDetailRefetch]);

  useEffect(() => {
    if (upload) {
      setDiasbled((pre) => !pre);
      let formData = new FormData();
      formData.append("file", file);
      transportVehicleCoverUpload({
        uploadFile: formData,
        vid: getQuery.state?.vehicleId,
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

  const onCloseRoute = () => {
    navigate(-1);
  };

  return (
    <>
      {!searchParams.get("n") ? (
        <>
          <UniversalDepartmentMiddleHead
            coverKey={getVehicleDetail?.one_vehicle?.vehicle_photo}
            coverId={getVehicleDetail?.one_vehicle?.vehicle_photo ? "0" : "2"}
            defaultCover="/images/profileAndCover/transport-cover.svg"
            textLarge={`${t("vehicle_name")} ${":"} ${
              getVehicleDetail?.one_vehicle?.vehicle_name ?? ""
            } (${getVehicleDetail?.one_vehicle?.vehicle_number ?? ""})`}
            textSmall={`(${
              getVehicleDetail?.one_vehicle?.vehicle_type
                ? getVehicleDetail?.one_vehicle?.vehicle_type === "Own"
                  ? "Own Vehicle"
                  : "Outside Vehicle"
                : ""
            })`}
            driver={`${t("driver")} ${
              getVehicleDetail?.one_vehicle?.vehicle_driver?.staffFirstName
                ? `${
                    getVehicleDetail?.one_vehicle?.vehicle_driver
                      ?.staffFirstName ?? ""
                  } ${
                    getVehicleDetail?.one_vehicle?.vehicle_driver
                      ?.staffMiddleName ?? ""
                  } ${
                    getVehicleDetail?.one_vehicle?.vehicle_driver
                      ?.staffLastName ?? ""
                  }`
                : getVehicleDetail?.one_vehicle?.vehicle_driver
                    ?.userLegalName ?? ""
            }`}
            conductor={`${t("conductor")} ${
              getVehicleDetail?.one_vehicle?.vehicle_conductor?.staffFirstName
                ? `${
                    getVehicleDetail?.one_vehicle?.vehicle_conductor
                      ?.staffFirstName ?? ""
                  } ${
                    getVehicleDetail?.one_vehicle?.vehicle_conductor
                      ?.staffMiddleName ?? ""
                  } ${
                    getVehicleDetail?.one_vehicle?.vehicle_conductor
                      ?.staffLastName ?? ""
                  }`
                : getVehicleDetail?.one_vehicle?.vehicle_conductor
                    ?.userLegalName ?? ""
            }`}
            pendingFees={`${t("pending_fees")} : ${
              getVehicleDetail?.one_vehicle?.remaining_fee ?? 0
            }`}
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
            coverUpdate={isRootAccess === "INVALID" ? false : true}
            openAs="VEHICLE_DETAIL"
            coverImageStyle={{
              height: "auto",
            }}
            // onOpenFunction={onOpenFunction}
          />
          <VehicleMiddleContent
            carryParentState={carryParentState}
            pageOpenAs={pageOpenAs}
          />

          {disabled && <QLoader />}
        </>
      ) : searchParams.get("n") === "passenger" ? (
        <div
          className={style.MiddleContentLeft}
          style={{
            borderRadius: "6px",
          }}
        >
          <VehiclePassenger
            vid={getQuery.state?.vehicleId}
            pageOpenAs={pageOpenAs}
            instituteId={
              instituteId
                ? instituteId
                : getVehicleDetail?.one_vehicle?.transport?.institute
            }
            tid={transportId}
            passengerCount={getVehicleDetail?.one_vehicle?.passenger_count ?? 0}
            isRootAccess={isRootAccess}
          />
        </div>
      ) : searchParams.get("n") === "route" ? (
        <AddRoute
          onClose={onCloseRoute}
          vid={getQuery.state?.vehicleId}
          transportId={transportId}
          batchId=""
          classMasterId=""
          isRootAccess={isRootAccess}
        />
      ) : null}
    </>
  );
};

export default VehicleDetail;
