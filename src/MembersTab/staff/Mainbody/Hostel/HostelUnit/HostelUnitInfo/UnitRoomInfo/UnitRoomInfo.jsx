import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import {
  useGetRoomDetailHostel,
  useHostelRoomCoverUpload,
} from "../../../../../../../hooks/member_tab/hostel-api";
import QLoader from "../../../../../../../Loader/QLoader";
import UniversalDepartmentMiddleHead from "../../../../../../UniversalDepartmentMiddleHead/UniversalDepartmentMiddleHead";
import style from "../../../Hostel.module.css";
import RoomHosteliteCard from "./RoomHosteliteCard";
const UnitRoomInfo = ({ viewAs }) => {
  const { t } = useTranslation();
  const getQuery = useLocation();
  const [photoURL, setPhotoURL] = useState("");
  const [file, setFile] = useState("");
  const [openCrop, setOpenCrop] = useState(false);
  const [upload, setUpload] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState("");
  const [hostelRoomCoverUpload] = useHostelRoomCoverUpload();
  const [disabled, setDiasbled] = useState(false);
  const [vacantList, setVacantList] = useState([]);
  useEffect(() => {
    if (upload) {
      setDiasbled((pre) => !pre);
      let formData = new FormData();
      formData.append("file", file);
      hostelRoomCoverUpload({
        uploadFile: formData,
        hrid: getQuery.state?.hrid,
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
  const { getRoomDetailHostel, getRoomDetailHostelRefetch } =
    useGetRoomDetailHostel({
      hrid: getQuery.state?.hrid,
      skip: !getQuery.state?.hrid,
    });

  useEffect(() => {
    if (getQuery.state?.hrid) getRoomDetailHostelRefetch();
  }, [getQuery.state?.hrid, getRoomDetailHostelRefetch]);

  useEffect(() => {
    if (
      getRoomDetailHostel?.one_room?.vacant_count ||
      getRoomDetailHostel?.one_room?.beds
    ) {
      // setVacantList
      let arr = [...getRoomDetailHostel?.one_room?.beds];
      for (let i = 0; i < getRoomDetailHostel?.one_room?.vacant_count; i++)
        arr.push({
          bedVacant: true,
        });

      setVacantList(arr);
    }
  }, [
    getRoomDetailHostel?.one_room?.vacant_count,
    getRoomDetailHostel?.one_room?.beds,
  ]);
  return (
    <>
      <UniversalDepartmentMiddleHead
        coverKey={getRoomDetailHostel?.one_room?.room_photo}
        coverId={getRoomDetailHostel?.one_room?.room_photo ? "0" : "2"}
        defaultCover="/images/profileAndCover/room-cover.svg"
        textLarge={getRoomDetailHostel?.one_room?.room_name}
        textSmall={""}
        count1={getRoomDetailHostel?.one_room?.bed_count}
        count1label={t("hostel_beds")}
        count2={getRoomDetailHostel?.one_room?.vacant_count}
        count2label={t("room_vacant")}
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
          viewAs === "STUDENT" || viewAs === "HOSTEL_SEARCH" ? false : true
        }
        openAs="HOSTEL_MANAGER"
        coverImageStyle={{
          height: "auto",
        }}
      />

      <div className={style.unit_room_container_box}>
        <div className={style.unit_room_container_box_inner}>
          {/* {getRoomDetailHostel?.one_room?.beds?.map((hostelite, index) => (
            <RoomHosteliteCard
              key={hostelite?._id}
              hostelite={hostelite}
              vacant={false}
              index={index}
              viewAs={viewAs}
            />
          ))} */}
          {vacantList?.map((hostelite, index) => (
            <RoomHosteliteCard
              key={index}
              hostelite={hostelite}
              vacant={hostelite?.bedVacant ? true : false}
              index={index}
              viewAs={viewAs}
            />
          ))}
        </div>
      </div>
      {disabled && <QLoader />}
    </>
  );
};

export default UnitRoomInfo;
