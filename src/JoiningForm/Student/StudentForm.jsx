import React, { useEffect } from "react";
import { useState } from "react";
import style from "./Form/JoinForm.module.css";
import { useTranslation } from "react-i18next";
import { useJoinAsStudentMutation } from "../../services/joining/joinApi";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import StudentApplyForm from "./StudentApplyForm";
import BorderBottom from "../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import { useAddStudentToClass } from "../../Department/Institute/Components/DepartmentApi/depart-api";
import QLoader from "../../Loader/QLoader";
import {
  useDirectJoinFormAdmission,
  useNewUserApply,
} from "../../hooks/member_tab/admission-api";
import {
  useStudentDirectJoin,
  useStudentDirectJoinByApplication,
  useUploadStudentFormPdf,
} from "../../hooks/authentication-api";
import { useLogin } from "../../Authentication/Login/Components/use-login";
import { payment_initiating_set } from "../../Decrypt/razorPaymentInitiating";
import {
  usePaymentCheckoutMutation,
  useRenderPaymentAPIKeysQuery,
} from "../../services/RazorPay/paymentConfigure";
import { useMerchantId } from "../../hooks/member_tab/finance-api";
import PaymentGatewayConfig from "../../PaymentGateway/PaymentGatewayConfig";
import { get_initiate_paytm } from "../../Decrypt/paytmUpiInitiative";
import { useOneInstituteProfile } from "../../hooks/dashboard/dashboard-api";
import StudentDepartmentApplyForm from "./StudentDepartmentApplyForm";
import { studentModifyFormData } from "../../pdf/function/pdf-convertor-function";

// import { useOneStudentProfile } from "../../hooks/institute/institute-staff-student-api";
// import { useDirectJoinFormWithPayAdmissionMutation } from "../../services/admission/admissionApiDynamic";

function StudentForm({ location }) {
  const navigate = useNavigate();
  const params = useParams();
  const ids = useSelector((state) => state.idChange);
  const { t } = useTranslation();
  const [preview, setPreview] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [charges, setCharges] = useState(false);
  const [student_data, setStudent_data] = useState(null);
  const [studentJoinData] = useJoinAsStudentMutation();
  const [addStudetToClass] = useAddStudentToClass();
  const [newUserApply] = useNewUserApply();
  const [studentDirectJoin] = useStudentDirectJoin();
  const { existingAccountLogin } = useLogin();
  const [directJoinFormAdmission] = useDirectJoinFormAdmission();
  const [studentDirectJoinByApplication] = useStudentDirectJoinByApplication();
  // const [directJoinFormWithPayAdmission] =
  //   useDirectJoinFormWithPayAdmissionMutation();
  const [uploadStudentFormPdf] = useUploadStudentFormPdf();
  const { data: getKeys } = useRenderPaymentAPIKeysQuery();
  const [checkout] = usePaymentCheckoutMutation();
  const { merchantId, merchantIdRefetch } = useMerchantId({
    id:
      location?.openAs === "INSTITUTE_SIDE"
        ? ids?.id
        : location?.openAs === "ADMISSION_ADMIN_SIDE"
        ? location?.instituteId
        : location?.openAs === "landing_page" ||
          location?.openAs === "landing_page_and_existing"
        ? location?.instituteId
        : ids.searchProfile?.id,
    skip:
      location?.openAs === "INSTITUTE_SIDE"
        ? !ids?.id
        : location?.openAs === "ADMISSION_ADMIN_SIDE"
        ? !location?.instituteId
        : location?.openAs === "landing_page" ||
          location?.openAs === "landing_page_and_existing"
        ? !location?.instituteId
        : !ids.searchProfile?.id,
  });
  // const { oneInstituteProfile, oneInstituteProfileRefetch } =
  //   useOneInstituteProfile({
  //     data: {
  //       id: "6449c83598fec071fbffd3ad",
  //       type: "ID",
  //     },
  //     skip: !"6449c83598fec071fbffd3ad",
  //   });
  // const { oneStudentProfile, oneStudentProfileRefetch } = useOneStudentProfile({
  //   sid: "64d9f5cfa4054284428a7be3",
  //   skip: !"64d9f5cfa4054284428a7be3",
  // });

  const { oneInstituteProfile, oneInstituteProfileRefetch } =
    useOneInstituteProfile({
      data: {
        id:
          location?.openAs === "INSTITUTE_SIDE"
            ? ids?.id
            : location?.openAs === "ADMISSION_ADMIN_SIDE"
            ? location?.instituteId
            : location?.openAs === "landing_page" ||
              location?.openAs === "landing_page_and_existing"
            ? location?.instituteId
            : ids.searchProfile?.id,
        type: "ID",
      },
      skip:
        location?.openAs === "INSTITUTE_SIDE"
          ? !ids?.id
          : location?.openAs === "ADMISSION_ADMIN_SIDE"
          ? !location?.instituteId
          : location?.openAs === "landing_page" ||
            location?.openAs === "landing_page_and_existing"
          ? !location?.instituteId
          : !ids.searchProfile?.id,
    });

  useEffect(() => {
    document.getElementById("scrollView")?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  }, [preview]);

  useEffect(() => {
    if (ids.searchProfile?.id || ids?.id || location?.instituteId)
      oneInstituteProfileRefetch();
  }, [
    ids.searchProfile?.id,
    ids?.id,
    location?.instituteId,
    oneInstituteProfileRefetch,
  ]);
  useEffect(() => {
    if (ids.searchProfile?.id || ids?.id || location?.instituteId)
      merchantIdRefetch();
  }, [
    ids.searchProfile?.id,
    ids?.id,
    location?.instituteId,
    merchantIdRefetch,
  ]);
  const onGoback = () => {
    if (preview) {
      setPreview((pre) => !pre);
    } else {
      navigate(-1);
    }
  };

  // const onPdfCusotmGenerate = async (
  //   data,
  //   imageKey,
  //   sid,
  //   pdfUndertaking = null,
  //   isAdmission = false
  // ) => {
  //   let sutdentInfo = {
  //     name: `${data?.studentFirstName ?? ""} ${data?.studentMiddleName ?? ""} ${
  //       data?.studentLastName ?? ""
  //     }`,
  //     gender: data?.studentGender ?? "",
  //     dateOfBirth: data?.studentDOB ?? "",
  //     motherName: data?.studentMotherName ?? "",
  //     religion: data?.studentReligion ?? "",
  //     catse: data?.studentCast ?? "",
  //     catseCategory: data?.studentCastCategory ?? "",
  //     nationality: data?.studentNationality ?? "",
  //     motherT: data?.studentMTongue ?? "",
  //     birthPlace: data?.studentBirthPlace ?? "",
  //     cAddress: `${data?.studentCurrentAddress ?? ""} ${
  //       data?.studentCurrentPincode ?? ""
  //     }`,
  //     pAddress: `${data?.studentAddress ?? ""} ${data?.studentPincode ?? ""}`,
  //     sContact: data?.studentPhoneNumber ?? "",
  //     addhar: data?.studentAadharNumber ?? "",
  //     previousSchool: data?.studentPreviousSchool ?? "",
  //     pName: data?.studentParentsName ?? "",
  //     pContact: data?.studentParentsPhoneNumber ?? "",
  //     pOccupation: data?.studentParentsOccupation ?? "",
  //     pIncome: data?.studentParentsAnnualIncom ?? "",
  //     studentImage: isAdmission
  //       ? `${customAvatarUrl}/${imageKey}`
  //       : `${imageShowUrl1}/${imageKey}`,
  //     applicationName: location?.applicationName
  //       ? location?.applicationName
  //       : "N/A",
  //     gScore: data?.student_gate_score ?? "",
  //     gYear: data?.student_gate_year ?? "",
  //     dInstitute: data?.student_degree_institute ?? "",
  //     dYear: data?.student_degree_year ?? "",
  //     pObtainPoint: data?.student_pre_sem_obtained_points ?? "",
  //     pTotalPoint: data?.student_pre_sem_total_points ?? "",
  //     fObtainPoint: data?.student_final_sem_obtained_points ?? "",
  //     fTotalPoint: data?.student_final_sem_total_points ?? "",
  //     percentageCpi: data?.student_percentage_cpi ?? "",
  //   };
  //   let institute = {
  //     insAffiliated: oneInstituteProfile?.institute?.insAffiliated ?? "",
  //     insName: oneInstituteProfile?.institute?.insName,
  //     insAddress: oneInstituteProfile?.institute?.insAddress,
  //     insPhoneNumber: oneInstituteProfile?.institute?.insPhoneNumber,
  //     insEmail: oneInstituteProfile?.institute?.insEmail,
  //     ediatbel1: oneInstituteProfile?.institute?.insEditableText_one ?? "",
  //     ediatbel2: oneInstituteProfile?.institute?.insEditableText_two ?? "",
  //     instituteImage: oneInstituteProfile?.institute?.insProfilePhoto
  //       ? `${imageShowUrl1}/${oneInstituteProfile?.institute?.insProfilePhoto}`
  //       : "/images/certificate/logodemo.jpg",
  //     affiliatedImage: oneInstituteProfile?.institute?.affliatedLogo
  //       ? `${imageShowUrl1}/${oneInstituteProfile?.institute?.affliatedLogo}`
  //       : "/images/certificate/logodemo.jpg",
  //   };
  //   let uploadPdf = await StudentFormPdf(
  //     sutdentInfo,
  //     institute,
  //     pdfUndertaking
  //   );
  //   if (uploadPdf) {
  //     window.open(URL.createObjectURL(uploadPdf), "_blank");
  //     const formData = new FormData();
  //     formData.append("file", uploadPdf);
  //     uploadStudentFormPdf({
  //       sid: sid,
  //       pdf_file: formData,
  //     })
  //       .then(() => {
  //         setDisabled((pre) => !pre);
  //       })
  //       .catch({});
  //   }

  //   // console.info("this is student data", sutdentInfo);
  // };

  // const onGenerate = () => {
  //   if (
  //     oneInstituteProfile?.institute?.insName &&
  //     oneStudentProfile?.student?.studentFirstName
  //   ) {
  //     onPdfCusotmGenerate(
  //       oneStudentProfile?.student,
  //       oneStudentProfile?.student?.studentProfilePhoto,
  //       oneStudentProfile?.student?._id,
  //       "UG",
  //       false
  //     );
  //   }
  // };

  const onPdfGenerate = async (
    data,
    imageKey,
    sid,
    pdfUndertaking = null,
    isAdmission = false
  ) => {
    const workerInstance = new Worker(
      new URL("../../pdf/worker/main.form.pdf.worker.js", import.meta.url)
    );
    const { institute, studentInfo } = studentModifyFormData(
      oneInstituteProfile?.institute,
      data,
      {
        imageKey,
        isAdmission,
        applicationName: location?.applicationName,
      }
    );
    workerInstance.postMessage({
      printFormType: "STUDENT_FORM",
      studentInfo: studentInfo,
      institute: institute,
      pdfUndertaking: pdfUndertaking,
    });

    workerInstance.onmessage = (message) => {
      if (message && sid) {
        window.open(URL.createObjectURL(message.data), "_blank");
        const formData = new FormData();
        formData.append("file", message.data);
        uploadStudentFormPdf({
          sid: sid,
          pdf_file: formData,
        })
          .then(() => {
            setDisabled((pre) => !pre);
          })
          .catch({});
      }
    };
    // console.info("this is student data", sutdentInfo);
  };

  const onApplyForm = (data) => {
    setDisabled((pre) => !pre);
    const applyStudent = {
      studentCode: location?.joinCode,
      fileArray: [],
      optionalSubject: [],
    };
    if (location?.openAs === "ADMISSION_ADMIN_SIDE") {
    } else {
      applyStudent.fileArray.push(data?.file);
    }
    for (let objProperties in data?.formData) {
      applyStudent[objProperties] = data?.formData[objProperties];
    }
    for (let objStudentProperties in data?.studentForm) {
      if (objStudentProperties === "asSameAddress") {
      } else if (
        [
          "bankPassbook",
          "student_id_card_front",
          "student_id_card_back",
          "student_anti_ragging",
        ].includes(objStudentProperties)
      ) {
        if (data?.studentForm[objStudentProperties])
          applyStudent.fileArray.push(data?.studentForm[objStudentProperties]);
      } else
        applyStudent[objStudentProperties] =
          data?.studentForm[objStudentProperties];
    }
    for (let objDocumentProperties in data?.dynamicDocument) {
      if (objDocumentProperties === "previousSchoolDocument") {
      } else if (objDocumentProperties === "studentPreviousSchool")
        applyStudent[objDocumentProperties] =
          data?.dynamicDocument[objDocumentProperties];
      else if (data?.dynamicDocument[objDocumentProperties])
        applyStudent.fileArray.push(
          data?.dynamicDocument[objDocumentProperties]
        );
      else {
      }
    }
    for (let sub in data?.optinalSubject) {
      if (data?.optinalSubject[sub]) {
        applyStudent.optionalSubject.push(data?.optinalSubject[sub]);
      }
    }
    if (location?.openAs === "ADMISSION_ADMIN_SIDE") {
      for (let objProperties in data?.studentAdmission) {
        applyStudent[objProperties] = data?.studentAdmission[objProperties];
      }
    }
    if (location?.openAs === "INSTITUTE_SIDE") {
      for (let objProperties in data?.studentNewField) {
        applyStudent[objProperties] = data?.studentNewField[objProperties];
      }
    }
    applyStudent["student_prn_enroll_number"] =
      data?.studentNewField["student_prn_enroll_number"];
    // onPdfGenerate(
    //   applyStudent,
    //   data?.file?.key
    //   // res?.data?.user?.student?._id
    // );
    // console.info("applyStudent", applyStudent);
    if (location?.openAs === "DIRECT" && location?.verifyNumber) {
      studentDirectJoin({
        phoneNumber: location?.verifyNumber,
        direct_student: applyStudent,
      })
        .then(async (res) => {
          await onPdfGenerate(
            applyStudent,
            data?.file?.key,
            res?.data?.user?.student?._id
          );
          existingAccountLogin({
            token: res?.data?.token,
            _id: res?.data?.user?._id,
            username: res?.data?.student,
          });
        })
        .catch({});
    } else if (location?.openAs === "landing_page" && location?.verifyNumber) {
      // state: {
      //   formAs: "STUDENT",
      //   openAs:"landing_page",
      //   appId:appId
      //   instituteId:""
      //   verifyNumber: applicantUserName,
      // },
      studentDirectJoinByApplication({
        phoneNumber: location?.verifyNumber,
        aid: location.appId,
        direct_student: applyStudent,
      })
        .then(async (res) => {
          await onPdfGenerate(
            applyStudent,
            data?.file?.key,
            res?.data?.student,
            data?.pdfUndertaking
          );
          existingAccountLogin({
            token: res?.data?.token,
            _id: res?.data?.user?._id,
            username: res?.data?.user?.username,
          });
        })
        .catch({});
    } else if (
      location?.openAs === "landing_page_and_existing" &&
      location?.userId
    ) {
      newUserApply({
        uid: location?.userId,
        aid: location?.appId,
        apply_data: applyStudent,
      })
        .then(async (res) => {
          await onPdfGenerate(
            applyStudent,
            data?.file?.key,
            res?.data?.student,
            data?.pdfUndertaking
          );

          if (res.data.status) {
            setDisabled((pre) => !pre);
            navigate(`/q/${location?.username}/feed`);
          }
        })
        .catch({});
    } else if (location?.openAs === "INSTITUTE_SIDE" && location?.classId) {
      addStudetToClass({
        phoneNumber: data?.studentPhoneNumberAdd,
        uid: data?.selectedUser ?? "",
        cid: location?.classId,
        addStudent: applyStudent,
      })
        .then(async (res) => {
          await onPdfGenerate(
            applyStudent,
            data?.file?.key,
            res?.data?.student
          );
          navigate(-1);
        })
        .catch({});
    } else if (
      location?.openAs === "ADMISSION_APPLY" &&
      ids?.id &&
      location?.appId
    ) {
      newUserApply({
        uid: ids?.id,
        aid: location?.appId,
        apply_data: applyStudent,
      })
        .then(async (res) => {
          await onPdfGenerate(
            applyStudent,
            data?.file?.key,
            res?.data?.student,
            data?.pdfUndertaking
          );

          if (res.data.status) {
            setDisabled((pre) => !pre);
            navigate(`/q/${location?.urlUsername}/membersTab`);
          }
        })
        .catch({});
    } else if (
      location?.openAs === "ADMISSION_DIRECT_APPLY" &&
      ids?.id &&
      location?.appId
    ) {
      // directJoinFormWithPayAdmission({
      //   uid: ids?.id,
      //   aid: location?.appId,
      //   apply_data: applyStudent,
      // })
      //   .then((res) => {
      //     if (res.data.status) {
      //       setDisabled((pre) => !pre);
      //       navigate(`/q/${location?.urlUsername}/membersTab`);
      //     } else {
      //       setDisabled((pre) => !pre);
      //     }
      //   })
      //   .catch({});
      if (!charges) {
        setCharges(true);
        setStudent_data(applyStudent);
        setDisabled((pre) => !pre);
      }
    } else if (location?.openAs === "ADMISSION_ADMIN_SIDE" && location?.appId) {
      directJoinFormAdmission({
        phoneNumber: data?.studentPhoneNumberAdd,
        uid: data?.selectedUser ?? "",
        aid: location?.appId,
        addStudent: applyStudent,
      })
        .then(async (res) => {
          await onPdfGenerate(
            applyStudent,
            data?.file,
            res?.data?.student,
            data?.pdfUndertaking,
            applyStudent?.sample_pic ? true : false
          );
          navigate(-1);
        })
        .catch({});
    } else if (ids?.searchProfile?.id && ids?.id && location?.joinCode) {
      studentJoinData({
        insId: ids?.searchProfile?.id,
        studentData: applyStudent,
        uid: ids?.id,
      })
        .then(async (res) => {
          await onPdfGenerate(
            applyStudent,
            data?.file?.key,
            res?.data?.student
          );

          if (res.data.status) {
            setDisabled((pre) => !pre);
            navigate(`/q/${location?.urlUsername}/memberstab`);
          }
        })
        .catch({});
    } else {
      setDisabled((pre) => !pre);
    }
  };

  function onShowCharges(is_paytm) {
    let gatewayCharges = (+location?.first_install * 2.1) / 100;
    let gst = (+gatewayCharges * 18) / 100;
    let withGst = +gatewayCharges + gst;
    const data = parseInt(location?.first_install);
    var paymentData = {
      amount: Math.ceil(data + +withGst.toFixed(2)),
    };
    if (is_paytm === "PAYTM") {
      get_initiate_paytm({
        amount: +location?.first_install,
        amount_nocharges: +paymentData.amount,
        type: "Direct_Admission",
        paidBy: `${ids?.id}`,
        paidTo: `${ids.searchProfile?.id}`,
        moduleId: `${location?.appId}`,
        ad_status_id: null,
        payment_installment: null,
        ad_install: null,
        month: null,
        payment_remain_1: null,
        payment_card_type: null,
        payment_book_id: null,
        name: params.username,
        isApk: "web",
        payment_card_id: null,
      })
        .then((data) => {
          // var information = {
          //   action: paytmActionUrl,
          //   params: response,
          // };
          // paytmPostInfo(information);
          window.onScriptLoad(
            data?.response?.body?.txnToken,
            data?.order,
            data?.amount
          );
        })
        .catch((e) => {
          console.info(e);
        });
    } else {
      if (getKeys?.Key && paymentData?.amount) {
        checkout({ amount: paymentData?.amount })
          .then((res) => {
            if (res.data?.success) {
              payment_initiating_set({
                key: getKeys?.Key,
                oid: res.data?.order.id,
                amount_nocharge: location?.first_install * 100,
                amount: res.data?.order.amount,
                type: "Direct_Admission",
                pay_by: `${ids?.id}`,
                pay_to: `${ids.searchProfile?.id}`,
                mid: `${location?.appId}`,
                razor_key: merchantId?.key,
                razor_author: merchantId?.bool,
                status: null,
                installment_type: null,
                is_install: null,
                h_month: null,
                student_data: student_data,
              });
            } else {
              console.log("data error");
            }
          })
          .catch((e) => {
            console.log(e);
          });
      }
    }
  }
  // console.info("this is loaction", location);
  return (
    <>
      <div className={style.goback_container} id="scrollView">
        <div className={style.goback_container_text} onClick={onGoback}>
          <img src="/images/arr-left-white.svg" alt="go back icon" />
          <h6 className={style.goback_container_text_go}>{t("go_back")}</h6>
        </div>
      </div>
      <div className={style.student_from_container}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h6 className={style.student_from_fill}>{t("form_fill_student")}</h6>
          {/* <p onClick={onGenerate}>TO Generate</p> */}
          {preview && (
            <h6
              className={style.student_from_fill_edit}
              onClick={() => setPreview((pre) => !pre)}
            >
              {t("edit_")}
            </h6>
          )}
        </div>
        <BorderBottom customStyle={{ width: "100%" }} />
        {location?.whichFormShow === "DEPARTMENT" ? (
          <StudentDepartmentApplyForm
            preview={preview}
            setPreview={setPreview}
            location={location}
            onApplyForm={onApplyForm}
          />
        ) : (
          <StudentApplyForm
            preview={preview}
            setPreview={setPreview}
            location={location}
            onApplyForm={onApplyForm}
          />
        )}
      </div>
      {charges && (
        <PaymentGatewayConfig
          onClose={() => setCharges(false)}
          allContent={{
            type: "ADMISSION_DIRECT_APPLY",
            amount: location?.first_install,
          }}
          checkoutAdmissionDirectHandler={onShowCharges}
        />
      )}

      {disabled && <QLoader />}
    </>
  );
}

export default StudentForm;
