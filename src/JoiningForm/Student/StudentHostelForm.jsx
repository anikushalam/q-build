import React, { useEffect } from "react";
import { useState } from "react";
import style from "./Form/JoinForm.module.css";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router";
import StudentHostelApplyForm from "./StudentHostelApplyForm";
import BorderBottom from "../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import QLoader from "../../Loader/QLoader";
import { useUserApplyHostel } from "../../hooks/member_tab/hostel-api";
import { useGetOneUserProfileQuery } from "../../services/qvipleAPI";
import Navbar from "../../Dashboard/UserDashboard/Components/Navbar/Navbar";
import { payment_initiating_set } from "../../Decrypt/razorPaymentInitiating";
import { get_initiate_paytm } from "../../Decrypt/paytmUpiInitiative";
import {
  usePaymentCheckoutMutation,
  useRenderPaymentAPIKeysQuery,
} from "../../services/RazorPay/paymentConfigure";
import { useMerchantId } from "../../hooks/member_tab/finance-api";
import PaymentGatewayConfig from "../../PaymentGateway/PaymentGatewayConfig";
import {
  useStudentDirectJoinByHostelApplication,
  useUploadStudentFormPdf,
} from "../../hooks/authentication-api";
import { useLogin } from "../../Authentication/Login/Components/use-login";
import { useOneInstituteProfile } from "../../hooks/dashboard/dashboard-api";
import { studentModifyFormData } from "../../pdf/function/pdf-convertor-function";
function StudentHostelForm() {
  const navigate = useNavigate();
  const getQuery = useLocation();
  const params = useParams();
  const ids = useSelector((state) => state.idChange);
  const { t } = useTranslation();
  const [preview, setPreview] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [charges, setCharges] = useState(false);
  const [student_data, setStudent_data] = useState(null);
  const [userApplyHostel] = useUserApplyHostel();
  const [studentDirectJoinByHostelApplication] =
    useStudentDirectJoinByHostelApplication();
  const { existingAccountLogin } = useLogin();

  const [uploadStudentFormPdf] = useUploadStudentFormPdf();

  const { data: profileData, refetch: profileDataRefetch } =
    useGetOneUserProfileQuery(ids?.id || getQuery.state?.instituteId, {
      skip:
        getQuery.state?.openAs === "landing_page" ||
        getQuery.state?.openAs === "landing_page_and_existing"
          ? !getQuery.state?.instituteId
          : !ids?.id,
    });
  const { data: getKeys } = useRenderPaymentAPIKeysQuery();
  const [checkout] = usePaymentCheckoutMutation();
  const { merchantId, merchantIdRefetch } = useMerchantId({
    id:
      getQuery.state?.openAs === "landing_page" ||
      getQuery.state?.openAs === "landing_page_and_existing"
        ? getQuery.state?.instituteId
        : ids.searchProfile?.id,
    skip:
      getQuery.state?.openAs === "landing_page" ||
      getQuery.state?.openAs === "landing_page_and_existing"
        ? !getQuery.state?.instituteId
        : !ids.searchProfile?.id,
  });

  useEffect(() => {
    if (ids.searchProfile?.id || getQuery.state?.instituteId)
      merchantIdRefetch();
  }, [ids.searchProfile?.id, getQuery.state?.instituteId, merchantIdRefetch]);

  useEffect(() => {
    if (ids?.id || getQuery.state?.instituteId) profileDataRefetch();
  }, [profileDataRefetch, ids?.id, getQuery.state?.instituteId]);

  useEffect(() => {
    document.getElementById("scrollView")?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  }, [preview]);

  const onGoback = () => {
    if (preview) {
      setPreview((pre) => !pre);
    } else {
      navigate(-1);
    }
  };

  const { oneInstituteProfile, oneInstituteProfileRefetch } =
    useOneInstituteProfile({
      data: {
        id:
          getQuery.state?.openAs === "landing_page" ||
          getQuery.state?.openAs === "landing_page_and_existing"
            ? getQuery.state?.instituteId
            : ids.searchProfile?.id,
        type: "ID",
      },
      skip:
        getQuery.state?.openAs === "landing_page" ||
        getQuery.state?.openAs === "landing_page_and_existing"
          ? !getQuery.state?.instituteId
          : !ids.searchProfile?.id,
    });
  useEffect(() => {
    if (ids.searchProfile?.id || getQuery.state?.instituteId)
      oneInstituteProfileRefetch();
  }, [
    ids.searchProfile?.id,
    getQuery.state?.instituteId,
    oneInstituteProfileRefetch,
  ]);

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
        applicationName: getQuery.state?.applicationName,
      }
    );

    workerInstance.postMessage({
      printFormType: "STUDENT_HOSTEL_FORM",
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
  };

  // =================================
  const onApplyForm = async (data) => {
    setDisabled((pre) => !pre);
    const applyStudent = {
      fileArray: [],
    };
    applyStudent.fileArray.push(data?.file);
    for (let objProperties in data?.formData) {
      applyStudent[objProperties] = data?.formData[objProperties];
    }
    for (let objStudentProperties in data?.studentForm) {
      if (objStudentProperties === "asSameAddress") {
      } else if (objStudentProperties === "bankPassbook") {
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
    applyStudent["student_prn_enroll_number"] =
      data?.studentNewField["student_prn_enroll_number"];

    if (
      getQuery.state?.openAs === "PROFILE_SEARCH" &&
      ids?.id &&
      getQuery.state?.appId
    ) {
      // await onPdfGenerate(
      //   applyStudent,
      //   data?.file?.key,
      //   "skfbsadnf mans",
      //   "PG"
      // );
      userApplyHostel({
        aid: getQuery.state?.appId,
        studentData: applyStudent,
        uid: ids?.id,
      })
        .then(async (res) => {
          if (res.data.status) {
            await onPdfGenerate(
              applyStudent,
              data?.file?.key,
              res?.data?.student,
              "PG"
              // data?.pdfUndertaking
            );
            navigate(`/q/${params.username}/feed`);
          } else {
            setDisabled((pre) => !pre);
          }
        })
        .catch({});
    } else if (
      getQuery.state?.openAs === "ADMISSION_DIRECT_APPLY" &&
      getQuery.state?.appId
    ) {
      if (!charges) {
        setCharges(true);
        setStudent_data(applyStudent);
        setDisabled((pre) => !pre);
      }
    } else if (
      getQuery.state?.openAs === "landing_page" &&
      getQuery.state?.verifyNumber
    ) {
      studentDirectJoinByHostelApplication({
        phoneNumber: getQuery.state?.verifyNumber,
        aid: getQuery.state.appId,
        direct_student: applyStudent,
      })
        .then(async (res) => {
          await onPdfGenerate(
            applyStudent,
            data?.file?.key,
            res?.data?.student,
            // res?.data?.user?.student?._id,
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
      getQuery.state?.openAs === "landing_page_and_existing" &&
      getQuery.state?.userId
    ) {
      userApplyHostel({
        aid: getQuery.state?.appId,
        studentData: applyStudent,
        uid: getQuery.state?.userId,
      })
        .then(async (res) => {
          if (res.data.status) {
            await onPdfGenerate(
              applyStudent,
              data?.file?.key,
              res?.data?.student,
              // res?.data?.user?.student?._id,
              data?.pdfUndertaking
            );
            navigate(`/q/${getQuery.state?.username}/feed`);
          } else {
            setDisabled((pre) => !pre);
          }
        })
        .catch({});
    } else {
      setDisabled((pre) => !pre);
    }
  };

  function onShowCharges(is_paytm) {
    let gatewayCharges = (+getQuery.state?.first_install * 2.1) / 100;
    let gst = (+gatewayCharges * 18) / 100;
    let withGst = +gatewayCharges + gst;
    const data = parseInt(getQuery.state?.first_install);
    var paymentData = {
      amount: Math.ceil(data + +withGst.toFixed(2)),
    };
    if (is_paytm === "PAYTM") {
      get_initiate_paytm({
        amount: +getQuery.state?.first_install,
        amount_nocharges: +paymentData.amount,
        type: "Direct_Hostel",
        paidBy: `${ids?.id}`,
        paidTo: `${ids.searchProfile?.id}`,
        moduleId: `${getQuery.state?.appId}`,
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
        checkout({ amount: paymentData?.amount, student_data })
          .then((res) => {
            if (res.data?.success) {
              payment_initiating_set({
                key: getKeys?.Key,
                oid: res.data?.order.id,
                amount_nocharge: getQuery.state?.first_install * 100,
                amount: res.data?.order.amount,
                type: "Direct_Hostel",
                pay_by: `${ids?.id}`,
                pay_to: `${ids.searchProfile?.id}`,
                mid: `${getQuery.state?.appId}`,
                razor_key: merchantId?.key,
                razor_author: merchantId?.bool,
                status: null,
                installment_type: null,
                is_install: null,
                h_month: null,
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
  //   console.info("this is loaction", getQuery);
  return (
    <>
      <div className={style.navbar}>
        <Navbar
          status="profile"
          profileId={profileData ? profileData?.user?._id : ""}
          username={profileData?.user?.username}
          name={profileData?.user?.userLegalName}
          photoId={profileData?.user?.photoId}
          profilePhoto={profileData?.user?.profilePhoto}
          profileData={profileData?.user}
        />
      </div>
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
        <StudentHostelApplyForm
          preview={preview}
          setPreview={setPreview}
          onApplyForm={onApplyForm}
          hostelId={getQuery.state?.hostelId}
        />

        {charges && (
          <PaymentGatewayConfig
            onClose={() => setCharges(false)}
            allContent={{
              type: "ADMISSION_DIRECT_APPLY",
              amount: getQuery.state?.first_install,
            }}
            checkoutAdmissionDirectHandler={onShowCharges}
          />
        )}
      </div>

      {disabled && <QLoader />}
    </>
  );
}

export default StudentHostelForm;
