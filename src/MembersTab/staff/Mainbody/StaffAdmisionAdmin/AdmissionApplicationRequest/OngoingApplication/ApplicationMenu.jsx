import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  useDeleteApplicationByAdmission,
  useOneApplicationDetail,
  useUpdateApplicationByAdmission,
} from "../../../../../../hooks/member_tab/admission-api";
import QLoader from "../../../../../../Loader/QLoader";
import Overlay from "../../../../../../Search/Overlay";
import SearchModalBackdrop from "../../../../../../Search/SearchModalBackdrop";
import style from "../../../ClassTeacher/Profile/EditConfirm.module.css";
import AdmissionApplicationEdit from "../../AdmisionApplication/CreateApplication/AdmissionApplicationEdit";
import { useDeleteApplicationByHostel } from "../../../../../../hooks/member_tab/hostel-api";

const ApplicationMenu = ({
  onClose,
  onRefetch,
  openApplicationMenu,
  viewAs,
  hostelId,
  insAdmissionId,
}) => {
  const admissionId = useSelector((state) => state.admissionChange.aid);
  const [disabled, setDisabled] = useState(false);
  const [edit, setEdit] = useState(false);
  const [deleteApplicationByAdmission] = useDeleteApplicationByAdmission();
  const [deleteApplicationByHostel] = useDeleteApplicationByHostel();
  const [updateApplicationByAdmission] = useUpdateApplicationByAdmission();
  const { oneApplicationDetail, oneApplicationDetailRefetch } =
    useOneApplicationDetail({
      apid: openApplicationMenu?._id,
      skip: !openApplicationMenu?._id,
    });
  useEffect(() => {
    if (openApplicationMenu?._id) oneApplicationDetailRefetch();
  }, [openApplicationMenu?._id, oneApplicationDetailRefetch]);
  const onDelete = () => {
    setDisabled((pre) => !pre);
    if (viewAs === "HOSTEL_MANAGER") {
      deleteApplicationByHostel({
        aid: hostelId,
        appId: openApplicationMenu?._id,
      })
        .then(() => {
          onRefetch();
          onClose();
          setDisabled((pre) => !pre);
        })
        .catch({});
    } else {
      deleteApplicationByAdmission({
        aid: insAdmissionId ? insAdmissionId : admissionId,
        appId: openApplicationMenu?._id,
      })
        .then(() => {
          onRefetch();
          onClose();
          setDisabled((pre) => !pre);
        })
        .catch({});
    }
  };
  const onEdit = (val) => {
    setDisabled((pre) => !pre);
    setEdit(false);
    updateApplicationByAdmission({
      appId: openApplicationMenu?._id,
      updateApplication: val,
    })
      .then(() => {
        onRefetch();
        setDisabled((pre) => !pre);
        onClose();
      })
      .catch({});
  };

  return (
    <>
      {!edit ? (
        <>
          <SearchModalBackdrop onClose={onClose} />
          <Overlay
            customStyle={{
              zIndex: "1200",
            }}
          >
            <div
              className={style.edit_modal_container}
              style={{ width: "200px" }}
            >
              <h6 className={style.edit} onClick={() => setEdit((pre) => !pre)}>
                Edit
              </h6>
              <h6 className={style.remove} onClick={onDelete}>
                Delete
              </h6>
            </div>
            {disabled && <QLoader />}
          </Overlay>
        </>
      ) : (
        <AdmissionApplicationEdit
          openApplicationMenu={oneApplicationDetail?.oneApply}
          onEdit={onEdit}
          onClose={() => setEdit(false)}
          viewAs={viewAs}
        />
      )}
    </>
  );
};

export default ApplicationMenu;
