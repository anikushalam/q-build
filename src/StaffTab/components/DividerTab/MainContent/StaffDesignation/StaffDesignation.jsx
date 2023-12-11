import React, { useEffect, useState } from "react";
import style from "./StaffDesignation.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import StaffDesignationCard from "./StaffDesignationCard";
import { useSelector } from "react-redux";
import {
  useAddStaffDesignationMultiple,
  useGetStaffDesignationMultiple,
} from "../../../../../Department/Institute/Components/DepartmentApi/depart-api";
import BorderBottom from "../StaffAProfile/BorderBottom";
import StaffProfilePhoto from "../StaffAProfile/StaffProfilePhoto";
import { useOneInstituteDashboard } from "../../../../../hooks/dashboard/dashboard-api";
import QLoader from "../../../../../Loader/QLoader";

// const destionOption = [
//   {
//     label: "departments",
//     key: 0,
//     childProps: "dynamic",
//   },
//   {
//     label: "finace_manager",
//     key: 1,
//     childProps: "same",
//     url: "/images/member_tab/finance/finance-desi-check-icon.svg",
//     role: "FINANCE_MANAGER",
//     roleId: "2213",
//     headName: "Ankush",
//   },
//   {
//     label: "admission_admin",
//     key: 2,
//     childProps: "same",
//     url: "/images/member_tab/admission/admission-desi-check-icon.svg",
//     role: "ADMISSION_ADMIN",
//     roleId: "",
//     headName: "",
//   },
//   {
//     label: "hostel_manager",
//     key: 3,
//     childProps: "same",
//     url: "/images/member_tab/hostel/hostel-desi-check-icon.svg",
//     role: "HOSTEL_MANAGER",
//     roleId: "",
//     headName: "",
//   },
//   {
//     label: "librarian",
//     key: 4,
//     childProps: "same",
//     url: "/images/member_tab/library/library-desi-check-icon.svg",
//     role: "LIBRARIAN",
//     roleId: "",
//     headName: "",
//   },
//   {
//     label: "event_seminars",
//     key: 5,
//     childProps: "same",
//     url: "/images/member_tab/seminar/seminar-desi-check-icon.svg",
//     role: "EVENT_MANAGER",
//     roleId: "",
//     headName: "",
//   },
//   {
//     label: "transport_manager",
//     key: 6,
//     childProps: "same",
//     url: "/images/member_tab/transport/transport-desi-check-icon.svg",
//     role: "TRANSPORT_MANAGER",
//     roleId: "",
//     headName: "",
//   },

//   {
//     label: "alumni_head",
//     key: 7,
//     childProps: "same",
//     url: "/images/member_tab/transport/transport-desi-check-icon.svg",
//     // url: "/images/member_tab/alumni/alumni-desi-check-icon.svg",
//     role: "ALUMNI",
//     roleId: "",
//     headName: "",
//   },
// ];
const StaffDesignation = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const getQuery = useLocation();
  const id = useSelector((state) => state.idChange.id);
  const [stateId, setStateId] = useState([]);
  const [disabled, setDisabled] = useState(false);

  const { oneInstituteDashboard, oneInstituteDashboardRefetch } =
    useOneInstituteDashboard({
      id: id,
      skip: !id,
    });
  const { getStaffDesignationMultiple, getStaffDesignationMultipleRefetch } =
    useGetStaffDesignationMultiple({
      id: id,
      skip: !id,
    });
  const [addStaffDesignationMultiple] = useAddStaffDesignationMultiple();
  useEffect(() => {
    if (id) {
      oneInstituteDashboardRefetch();
      getStaffDesignationMultipleRefetch();
    }
  }, [id, getStaffDesignationMultipleRefetch, oneInstituteDashboardRefetch]);

  useEffect(() => {
    if (getStaffDesignationMultiple?.valid_institute) {
      let institute = getStaffDesignationMultiple?.valid_institute;
      let arr = [];
      if (
        institute?.financeDepart?.[0]?.financeHead?._id === getQuery.state?.sid
      )
        arr.push(institute?.financeDepart?.[0]?._id);
      if (
        institute?.admissionDepart?.[0]?.admissionAdminHead?._id ===
        getQuery.state?.sid
      )
        arr.push(institute?.admissionDepart?.[0]?._id);
      if (
        institute?.hostelDepart?.[0]?.hostel_manager?._id ===
        getQuery.state?.sid
      )
        arr.push(institute?.hostelDepart?.[0]?._id);
      if (institute?.library?.[0]?.libraryHead?._id === getQuery.state?.sid)
        arr.push(institute?.library?.[0]?._id);
      if (
        institute?.eventManagerDepart?.[0]?.event_head?._id ===
        getQuery.state?.sid
      )
        arr.push(institute?.eventManagerDepart?.[0]?._id);
      if (
        institute?.transportDepart?.[0]?.transport_manager?._id ===
        getQuery.state?.sid
      )
        arr.push(institute?.transportDepart?.[0]?._id);
      if (
        institute?.aluminiDepart?.[0]?.alumini_head?._id === getQuery.state?.sid
      )
        arr.push(institute?.aluminiDepart?.[0]?._id);
      setStateId(arr);
    }
  }, [getStaffDesignationMultiple?.valid_institute]);
  const onGoback = () => {
    navigate(-1);
  };

  const onDesignationGrab = (data) => {
    // for one time mulitple assign
    // if (stateId?.includes(data?.roleId)) {
    //   setStateId((prev) => prev?.filter((pId) => pId !== data?.roleId));
    //   setState((prev) => prev?.filter((pId) => pId?.roleId !== data?.roleId));
    // } else {
    //   setStateId((prev) =>
    //     prev?.length > 0 ? [...prev, data?.roleId] : [data?.roleId]
    //   );
    //   setState((prev) =>
    //     prev?.length > 0
    //       ? [
    //           ...prev,
    //           {
    //             role: data?.role,
    //             roleId: data?.roleId,
    //           },
    //         ]
    //       : [
    //           {
    //             role: data?.role,
    //             roleId: data?.roleId,
    //           },
    //         ]
    //   );
    // }

    // for one time one assign
    onUpdateDesignation([
      {
        role: data?.role,
        roleId: data?.roleId,
      },
    ]);
  };

  const onUpdateDesignation = (list) => {
    if (getQuery.state?.sid && id && list?.length > 0) {
      setDisabled((pre) => !pre);
      addStaffDesignationMultiple({
        id: id,
        sid: getQuery.state?.sid,
        desiData: {
          // desig_array: state,
          desig_array: list,
        },
      })
        .then(() => {
          getStaffDesignationMultipleRefetch();
          setDisabled((pre) => !pre);
        })
        .catch({});
    }
  };

  // console.info("v state", state);
  return (
    <>
      <div className={style.goback_container}>
        <div className={style.goback_container_text} onClick={onGoback}>
          <img src="/images/arr-left-white.svg" alt="go back icon" />
          <h6 className={style.goback_container_text_go}>{t("go_back")}</h6>
        </div>
      </div>

      <div className={style.desgination_container}>
        <StaffProfilePhoto
          name={getQuery.state?.name}
          designation={`Designations: ${getQuery.state?.desiCount}`}
          indexNumber={`Index No. ${getQuery.state?.rollNumber || "-"}`}
          dynamicImage={getQuery.state?.profilePhoto}
          sid={getQuery.state?.sid}
          activeUrl="staff"
          editAs="STAFF"
          // onUpdateDesignation={onUpdateDesignation}
        />
        <BorderBottom
          customStyle={{
            width: "100%",
          }}
        />

        {/* {destionOption.map((desi) => (
          <StaffDesignationCard
            key={desi.key}
            label={desi.label}
            childProps={desi.childProps}
            url={desi.url}
            role={desi.role}
            roleId={desi.roleId}
            headName={desi.headName}
            onDesignationGrab={onDesignationGrab}
            state={stateId}
          />
        ))} */}

        <StaffDesignationCard
          label="departments"
          childProps="dynamic"
          onDesignationGrab={onDesignationGrab}
          state={stateId}
          currentSid={getQuery.state?.sid}
        />

        <StaffDesignationCard
          label="finace_manager"
          childProps="same"
          url="/images/member_tab/finance/finance-desi-check-icon.svg"
          role="FINANCE_MANAGER"
          roleId={oneInstituteDashboard?.institute?.financeDepart?.[0]}
          psid={
            getStaffDesignationMultiple?.valid_institute?.financeDepart?.[0]
              ?.financeHead?._id
          }
          headName={`${
            getStaffDesignationMultiple?.valid_institute?.financeDepart?.[0]
              ?.financeHead?.staffFirstName ?? ""
          } ${
            getStaffDesignationMultiple?.valid_institute?.financeDepart?.[0]
              ?.financeHead?.staffMiddleName ?? ""
          } ${
            getStaffDesignationMultiple?.valid_institute?.financeDepart?.[0]
              ?.financeHead?.staffLastName ?? ""
          }`}
          onDesignationGrab={onDesignationGrab}
          state={stateId}
          currentSid={getQuery.state?.sid}
          getStaffDesignationMultipleRefetch={
            getStaffDesignationMultipleRefetch
          }
          assigned="assigned_as_finance_manager"
          assign="assign_as_finance_manager"
        />
        <StaffDesignationCard
          label="admission_admin"
          childProps="same"
          url="/images/member_tab/admission/admission-desi-check-icon.svg"
          role="ADMISSION_ADMIN"
          roleId={oneInstituteDashboard?.institute?.admissionDepart?.[0]}
          psid={
            getStaffDesignationMultiple?.valid_institute?.admissionDepart?.[0]
              ?.admissionAdminHead?._id
          }
          headName={`${
            getStaffDesignationMultiple?.valid_institute?.admissionDepart?.[0]
              ?.admissionAdminHead?.staffFirstName ?? ""
          } ${
            getStaffDesignationMultiple?.valid_institute?.admissionDepart?.[0]
              ?.admissionAdminHead?.staffMiddleName ?? ""
          } ${
            getStaffDesignationMultiple?.valid_institute?.admissionDepart?.[0]
              ?.admissionAdminHead?.staffLastName ?? ""
          }`}
          onDesignationGrab={onDesignationGrab}
          state={stateId}
          currentSid={getQuery.state?.sid}
          getStaffDesignationMultipleRefetch={
            getStaffDesignationMultipleRefetch
          }
          assigned="assigned_as_admission_admin"
          assign="assign_as_admission_admin"
        />
        <StaffDesignationCard
          label="hostel_manager"
          childProps="same"
          url="/images/member_tab/hostel/hostel-desi-check-icon.svg"
          role="HOSTEL_MANAGER"
          roleId={oneInstituteDashboard?.institute?.hostelDepart?.[0]}
          psid={
            getStaffDesignationMultiple?.valid_institute?.hostelDepart?.[0]
              ?.hostel_manager?._id
          }
          headName={`${
            getStaffDesignationMultiple?.valid_institute?.hostelDepart?.[0]
              ?.hostel_manager?.staffFirstName ?? ""
          } ${
            getStaffDesignationMultiple?.valid_institute?.hostelDepart?.[0]
              ?.hostel_manager?.staffMiddleName ?? ""
          } ${
            getStaffDesignationMultiple?.valid_institute?.hostelDepart?.[0]
              ?.hostel_manager?.staffLastName ?? ""
          }`}
          onDesignationGrab={onDesignationGrab}
          state={stateId}
          currentSid={getQuery.state?.sid}
          getStaffDesignationMultipleRefetch={
            getStaffDesignationMultipleRefetch
          }
          assigned="assigned_as_hostel_manager"
          assign="assign_as_hostel_manager"
        />
        <StaffDesignationCard
          label="librarian"
          childProps="same"
          url="/images/member_tab/library/library-desi-check-icon.svg"
          role="LIBRARIAN"
          roleId={oneInstituteDashboard?.institute?.library?.[0]}
          psid={
            getStaffDesignationMultiple?.valid_institute?.library?.[0]
              ?.libraryHead?._id
          }
          headName={`${
            getStaffDesignationMultiple?.valid_institute?.library?.[0]
              ?.libraryHead?.staffFirstName ?? ""
          } ${
            getStaffDesignationMultiple?.valid_institute?.library?.[0]
              ?.libraryHead?.staffMiddleName ?? ""
          } ${
            getStaffDesignationMultiple?.valid_institute?.library?.[0]
              ?.libraryHead?.staffLastName ?? ""
          }`}
          onDesignationGrab={onDesignationGrab}
          state={stateId}
          currentSid={getQuery.state?.sid}
          getStaffDesignationMultipleRefetch={
            getStaffDesignationMultipleRefetch
          }
          assigned="assigned_as_librarian"
          assign="assign_as_librarian"
        />
        <StaffDesignationCard
          label="event_seminars"
          childProps="same"
          url="/images/member_tab/seminar/seminar-desi-check-icon.svg"
          role="EVENT_MANAGER"
          roleId={oneInstituteDashboard?.institute?.eventManagerDepart?.[0]}
          psid={
            getStaffDesignationMultiple?.valid_institute
              ?.eventManagerDepart?.[0]?.event_head?._id
          }
          headName={`${
            getStaffDesignationMultiple?.valid_institute
              ?.eventManagerDepart?.[0]?.event_head?.staffFirstName ?? ""
          } ${
            getStaffDesignationMultiple?.valid_institute
              ?.eventManagerDepart?.[0]?.event_head?.staffMiddleName ?? ""
          } ${
            getStaffDesignationMultiple?.valid_institute
              ?.eventManagerDepart?.[0]?.event_head?.staffLastName ?? ""
          }`}
          onDesignationGrab={onDesignationGrab}
          state={stateId}
          currentSid={getQuery.state?.sid}
          getStaffDesignationMultipleRefetch={
            getStaffDesignationMultipleRefetch
          }
          assigned="assigned_as_event_and_seminars"
          assign="assign_as_event_and_seminars"
        />
        <StaffDesignationCard
          label="transport_manager"
          childProps="same"
          url="/images/member_tab/transport/transport-desi-check-icon.svg"
          role="TRANSPORT_MANAGER"
          roleId={oneInstituteDashboard?.institute?.transportDepart?.[0]}
          psid={
            getStaffDesignationMultiple?.valid_institute?.transportDepart?.[0]
              ?.transport_manager?._id
          }
          headName={`${
            getStaffDesignationMultiple?.valid_institute?.transportDepart?.[0]
              ?.transport_manager?.staffFirstName ?? ""
          } ${
            getStaffDesignationMultiple?.valid_institute?.transportDepart?.[0]
              ?.transport_manager?.staffMiddleName ?? ""
          } ${
            getStaffDesignationMultiple?.valid_institute?.transportDepart?.[0]
              ?.transport_manager?.staffLastName ?? ""
          }`}
          onDesignationGrab={onDesignationGrab}
          state={stateId}
          currentSid={getQuery.state?.sid}
          getStaffDesignationMultipleRefetch={
            getStaffDesignationMultipleRefetch
          }
          assigned="assigned_as_transport_manager"
          assign="assign_as_transport_manager"
        />
        <StaffDesignationCard
          label="alumni_head"
          childProps="same"
          url="/images/member_tab/alumni/alumni-desi-check-icon.svg"
          role="ALUMNI"
          roleId={oneInstituteDashboard?.institute?.aluminiDepart?.[0]}
          psid={
            getStaffDesignationMultiple?.valid_institute?.aluminiDepart?.[0]
              ?.alumini_head?._id
          }
          headName={`${
            getStaffDesignationMultiple?.valid_institute?.aluminiDepart?.[0]
              ?.alumini_head?.staffFirstName ?? ""
          } ${
            getStaffDesignationMultiple?.valid_institute?.aluminiDepart?.[0]
              ?.alumini_head?.staffMiddleName ?? ""
          } ${
            getStaffDesignationMultiple?.valid_institute?.aluminiDepart?.[0]
              ?.alumini_head?.staffLastName ?? ""
          }`}
          onDesignationGrab={onDesignationGrab}
          state={stateId}
          currentSid={getQuery.state?.sid}
          getStaffDesignationMultipleRefetch={
            getStaffDesignationMultipleRefetch
          }
          assigned="assigned_as_alumni_head"
          assign="assign_as_alumni_head"
        />
      </div>
      {disabled && <QLoader />}
    </>
  );
};

export default StaffDesignation;
