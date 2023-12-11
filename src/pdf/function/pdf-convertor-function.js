import { imageShowUrl1 } from "../../services/BaseUrl";

export const hostelModifyReceiptData = (args1, args2) => {
  let institute = {
    instituteImage: args2?.application?.hostelAdmin?.institute?.insProfilePhoto
      ? `${imageShowUrl1}/${args2?.application?.hostelAdmin?.institute?.insProfilePhoto}`
      : "/images/certificate/logodemo.jpg",
    affiliatedImage: args2?.application?.hostelAdmin?.institute?.affliatedLogo
      ? `${imageShowUrl1}/${args2?.application?.hostelAdmin?.institute?.affliatedLogo}`
      : "/images/certificate/logodemo.jpg",
    insName: args2?.application?.hostelAdmin?.institute?.insName ?? "N/A",
    insAffiliated:
      args2?.application?.hostelAdmin?.institute?.insAffiliated ?? "",
    insAddress: args2?.application?.hostelAdmin?.institute?.insAddress ?? "N/A",
    ediatbel1:
      args2?.application?.hostelAdmin?.institute?.insEditableText_one ?? "",
    ediatbel2:
      args2?.application?.hostelAdmin?.institute?.insEditableText_two ?? "",
    insPhoneNumber:
      args2?.application?.hostelAdmin?.institute?.insPhoneNumber ?? "N/A",
    insEmail: args2?.application?.hostelAdmin?.institute?.insEmail ?? "N/A",
  };
  let studentInfo = {
    name: `${args2?.student?.studentFirstName ?? ""} ${
      args2?.student?.studentMiddleName ?? ""
    } ${args2?.student?.studentLastName ?? ""}`,
    bedNumber: args2?.student?.student_bed_number?.bed_number ?? "N/A",
    batchName:
      args2?.student?.hostel_fee_structure?.batch_master?.batchName ?? "N/A",
    unitName: args2?.application?.applicationUnit?.hostel_unit_name ?? "N/A",
    roomName:
      args2?.student?.student_bed_number?.hostelRoom?.room_name ?? "N/A",
    // applicationName: "Applied In",
    applicationName: args2?.application?.applicationName ?? "N/A",
    receiverSignature: args2?.application?.applicationHostel?.site_info?.[0]
      ?.cashier_signature
      ? `${imageShowUrl1}/${args2?.application?.applicationHostel?.site_info?.[0]?.cashier_signature}`
      : "",
    receiverName:
      args2?.application?.applicationHostel?.site_info?.[0]?.cashier_name ?? "",
  };

  let paymentReceiptInfo = {
    invoiceNumber: args2?.invoice_count ?? "",
    createdAt: args2?.created_at ?? "",
    totalFee: args1?.fee_structure?.total_admission_fees ?? "",
    applicableFee: args1?.applicable_fee ?? "",
    paidFee: args1?.paid_fee ?? "",
    remainFee: args1?.remaining_fee ?? "",
    receiptFlow: args1?.remaining_flow ?? "",
    feeheadList: args2?.student?.active_fee_heads ?? [],
    transactonSetOff: args2?.set_off_status ?? "",
    transactonRefund: args2?.refund_status ?? "",
    transactionMode:
      `${args2?.fee_payment_mode} (${
        args2?.order_history?.razor_query?.[0]?.method ?? "N/A"
      })` ?? "N/A",
    referenceNumber:
      args2?.fee_utr_reference ??
      args2?.order_history?.razorpay_payment_id ??
      "N/A",
    transactionDate: args2?.fee_transaction_date ?? "N/A",
    transactionAmount: args2?.fee_payment_amount ?? "N/A",
    transactionApplication: args2?.application?.applicationName ?? "N/A",
    transactionBatchName: studentInfo.batchName,
    bankName:
      args2?.fee_bank_name ??
      args2?.order_history?.razor_query?.[0]?.bank ??
      "N/A",
    bankHolderName: args2?.fee_bank_holder ?? "N/A",
    transactionId:
      args2?.fee_utr_reference ??
      args2?.order_history?.razorpay_payment_id ??
      "N/A",
  };

  return { institute, studentInfo, paymentReceiptInfo };
};

export const admissionModifyReceiptData = (
  args1,
  args2,
  selectedApplicationId = ""
) => {
  let institute = {
    instituteImage: args2?.application?.admissionAdmin?.institute
      ?.insProfilePhoto
      ? `${imageShowUrl1}/${args2?.application?.admissionAdmin?.institute?.insProfilePhoto}`
      : "/images/certificate/logodemo.jpg",
    affiliatedImage: args2?.application?.admissionAdmin?.institute
      ?.affliatedLogo
      ? `${imageShowUrl1}/${args2?.application?.admissionAdmin?.institute?.affliatedLogo}`
      : "/images/certificate/logodemo.jpg",
    insName: args2?.application?.admissionAdmin?.institute?.insName ?? "N/A",
    insAffiliated:
      args2?.application?.admissionAdmin?.institute?.insAffiliated ?? "",
    insAddress:
      args2?.application?.admissionAdmin?.institute?.insAddress ?? "N/A",
    ediatbel1:
      args2?.application?.admissionAdmin?.institute?.insEditableText_one ?? "",
    ediatbel2:
      args2?.application?.admissionAdmin?.institute?.insEditableText_two ?? "",
    insPhoneNumber:
      args2?.application?.admissionAdmin?.institute?.insPhoneNumber ?? "N/A",
    insEmail: args2?.application?.admissionAdmin?.institute?.insEmail ?? "N/A",
  };

  let selectedApplication = args2?.student?.remainingFeeList?.find(
    (val) => val?.appId === selectedApplicationId
  );

  let studentInfo = {
    name: `${args2?.student?.studentFirstName ?? ""} ${
      args2?.student?.studentMiddleName ?? ""
    } ${args2?.student?.studentLastName ?? ""}`,
    grNumber: args2?.student?.studentGRNO ?? "N/A",
    batchName:
      selectedApplication?.fee_structure?.batch_master?.batchName ??
      args2?.student?.fee_structure?.batch_master?.batchName ??
      "N/A",
    departmentName: args2?.student?.fee_structure?.department?.dName ?? "N/A",
    standard:
      selectedApplication?.fee_structure?.class_master?.className ??
      args2?.student?.fee_structure?.class_master?.className ??
      "N/A",
    applicationName: args2?.application?.applicationName ?? "N/A",
    // applicationName: "Applied In",
    receiverSignature: args2?.application?.admissionAdmin?.site_info?.[0]
      ?.cashier_signature
      ? `${imageShowUrl1}/${args2?.application?.admissionAdmin?.site_info?.[0]?.cashier_signature}`
      : "",
    receiverName:
      args2?.application?.admissionAdmin?.site_info?.[0]?.cashier_name ?? "",
  };

  let studentAplicableFee = 0;
  for (let i = 0; i < args2?.student?.active_fee_heads.length; i++) {
    studentAplicableFee =
      studentAplicableFee + args2?.student?.active_fee_heads[i].applicable_fee;
  }

  let paymentReceiptInfo = {
    invoiceNumber: args2?.invoice_count ?? "",
    createdAt: args2?.created_at ?? "",
    // totalFee: args1?.fee_structure?.total_admission_fees ?? "",
    // applicableFee: args1?.applicable_fee ?? "",
    totalFee: args1?.applicable_fee ?? "",
    applicableFee: studentAplicableFee,
    paidFee: args1?.paid_fee ?? "",
    remainFee: args1?.remaining_fee ?? "",
    receiptFlow: args1?.remaining_flow ?? "",
    feeheadList: args2?.student?.active_fee_heads ?? [],
    transactonSetOff: args2?.set_off_status ?? "",
    transactonRefund: args2?.refund_status ?? "",
    transactionMode:
      `${
        args2?.fee_payment_mode === "Fee Receipt Not Generated"
          ? "Online"
          : args2?.fee_payment_mode
      } (${args2?.order_history?.razor_query?.[0]?.method ?? "N/A"})` ?? "N/A",
    referenceNumber:
      args2?.fee_utr_reference ??
      args2?.order_history?.razorpay_payment_id ??
      "N/A",
    transactionDate: args2?.fee_transaction_date ?? "N/A",
    transactionAmount: args2?.fee_payment_amount ?? "N/A",
    transactionApplication: args2?.application?.applicationName ?? "N/A",
    transactionBatchName: studentInfo.batchName,
    bankName:
      args2?.fee_bank_name ??
      args2?.order_history?.razor_query?.[0]?.bank ??
      "N/A",
    bankHolderName: args2?.fee_bank_holder ?? "N/A",
    transactionId:
      args2?.fee_utr_reference ??
      args2?.order_history?.razorpay_payment_id ??
      "N/A",
  };

  return { institute, studentInfo, paymentReceiptInfo };
};

export const transportModifyReceiptData = (args1, args2) => {
  let institute = {
    instituteImage: args2?.vehicle?.transport?.institute?.insProfilePhoto
      ? `${imageShowUrl1}/${args2?.vehicle?.transport?.institute?.insProfilePhoto}`
      : "/images/certificate/logodemo.jpg",
    affiliatedImage: args2?.vehicle?.transport?.institute?.affliatedLogo
      ? `${imageShowUrl1}/${args2?.vehicle?.transport?.institute?.affliatedLogo}`
      : "/images/certificate/logodemo.jpg",
    insName: args2?.vehicle?.transport?.institute?.insName ?? "N/A",
    insAffiliated: args2?.vehicle?.transport?.institute?.insAffiliated ?? "",
    insAddress: args2?.vehicle?.transport?.institute?.insAddress ?? "N/A",
    ediatbel1: args2?.vehicle?.transport?.institute?.insEditableText_one ?? "",
    ediatbel2: args2?.vehicle?.transport?.institute?.insEditableText_two ?? "",
    insPhoneNumber:
      args2?.vehicle?.transport?.institute?.insPhoneNumber ?? "N/A",
    insEmail: args2?.vehicle?.transport?.institute?.insEmail ?? "N/A",
  };

  let studentInfo = {
    name: `${args2?.student?.studentFirstName ?? ""} ${
      args2?.student?.studentMiddleName ?? ""
    } ${args2?.student?.studentLastName ?? ""}`,
    grNumber: args2?.student?.studentGRNO ?? "N/A",
    batchName:
      // selectedApplication?.fee_structure?.batch_master?.batchName ??
      args2?.student?.fee_structure?.batch_master?.batchName ?? "N/A",
    departmentName: args2?.student?.fee_structure?.department?.dName ?? "N/A",
    standard:
      // selectedApplication?.fee_structure?.class_master?.className ??
      args2?.student?.fee_structure?.class_master?.className ?? "N/A",
    // applicationName: args2?.application?.applicationName ?? "N/A",
    applicationName:
      `${args2?.vehicle?.vehicle_name ?? ""}` +
      ` (${args2?.vehicle?.vehicle_number ?? ""})`,
    receiverSignature: args2?.args2?.vehicle?.transport?.site_info?.[0]
      ?.cashier_signature
      ? `${imageShowUrl1}/${args2?.args2?.vehicle?.transport?.site_info?.[0]?.cashier_signature}`
      : "",
    receiverName:
      args2?.args2?.vehicle?.transport?.site_info?.[0]?.cashier_name ?? "",
  };

  let studentAplicableFee = 0;
  for (let i = 0; i < args2?.student?.active_fee_heads.length; i++) {
    studentAplicableFee =
      studentAplicableFee + args2?.student?.active_fee_heads[i].applicable_fee;
  }

  let paymentReceiptInfo = {
    invoiceNumber: args2?.invoice_count ?? "",
    createdAt: args2?.created_at ?? "",
    // totalFee: args1?.fee_structure?.total_admission_fees ?? "",
    // applicableFee: args1?.applicable_fee ?? "",
    totalFee: args1?.applicable_fee ?? "",
    applicableFee: studentAplicableFee,
    paidFee: args1?.paid_fee ?? "",
    remainFee: args1?.remaining_fee ?? "",
    receiptFlow: args1?.remaining_flow ?? "",
    feeheadList: args2?.student?.active_fee_heads ?? [],
    transactonSetOff: args2?.set_off_status ?? "",
    transactonRefund: args2?.refund_status ?? "",
    transactionMode:
      `${
        args2?.fee_payment_mode === "Fee Receipt Not Generated"
          ? "Online"
          : args2?.fee_payment_mode
      } (${args2?.order_history?.razor_query?.[0]?.method ?? "N/A"})` ?? "N/A",
    referenceNumber:
      args2?.fee_utr_reference ??
      args2?.order_history?.razorpay_payment_id ??
      "N/A",
    transactionDate: args2?.fee_transaction_date ?? "N/A",
    transactionAmount: args2?.fee_payment_amount ?? "N/A",
    transactionApplication:
      `${args2?.vehicle?.vehicle_name ?? ""}` +
      ` (${args2?.vehicle?.vehicle_number ?? ""})`,
    transactionBatchName: studentInfo.batchName,
    bankName:
      args2?.fee_bank_name ??
      args2?.order_history?.razor_query?.[0]?.bank ??
      "N/A",
    bankHolderName: args2?.fee_bank_holder ?? "N/A",
    transactionId:
      args2?.fee_utr_reference ??
      args2?.order_history?.razorpay_payment_id ??
      "N/A",
  };

  return { institute, studentInfo, paymentReceiptInfo };
};
export const studentModifyFormData = (args1, args2, otherArgs) => {
  let institute = {
    insAffiliated: args1?.insAffiliated ?? "",
    insName: args1?.insName,
    insAddress: args1?.insAddress,
    insPhoneNumber: args1?.insPhoneNumber,
    insEmail: args1?.insEmail,
    ediatbel1: args1?.insEditableText_one ?? "",
    ediatbel2: args1?.insEditableText_two ?? "",
    instituteImage: args1?.insProfilePhoto
      ? `${imageShowUrl1}/${args1?.insProfilePhoto}`
      : "/images/certificate/logodemo.jpg",
    affiliatedImage: args1?.affliatedLogo
      ? `${imageShowUrl1}/${args1?.affliatedLogo}`
      : "/images/certificate/logodemo.jpg",
  };

  let studentInfo = {
    name: `${args2?.studentFirstName ?? ""} ${args2?.studentMiddleName ?? ""} ${
      args2?.studentLastName ?? ""
    }`,
    gender: args2?.studentGender ?? "",
    dateOfBirth: args2?.studentDOB ?? "",
    motherName: args2?.studentMotherName ?? "",
    religion: args2?.studentReligion ?? "",
    catse: args2?.studentCast ?? "",
    catseCategory: args2?.studentCastCategory ?? "",
    nationality: args2?.studentNationality ?? "",
    motherT: args2?.studentMTongue ?? "",
    birthPlace: args2?.studentBirthPlace ?? "",
    cAddress: `${args2?.studentCurrentAddress ?? ""} ${
      args2?.studentCurrentPincode ?? ""
    }`,
    pAddress: `${args2?.studentAddress ?? ""} ${args2?.studentPincode ?? ""}`,
    sContact: args2?.studentPhoneNumber ?? "",
    addhar: args2?.studentAadharNumber ?? "",
    previousSchool: args2?.studentPreviousSchool ?? "",
    pName: args2?.studentParentsName ?? "",
    pContact: args2?.studentParentsPhoneNumber ?? "",
    pOccupation: args2?.studentParentsOccupation ?? "",
    pIncome: args2?.studentParentsAnnualIncom ?? "",
    studentImage: otherArgs?.isAdmission
      ? `${imageShowUrl1}/${otherArgs?.imageKey}`
      : `${imageShowUrl1}/${otherArgs?.imageKey}`,
    applicationName: otherArgs?.applicationName
      ? otherArgs?.applicationName
      : "N/A",
    gScore: args2?.student_gate_score ?? "",
    gYear: args2?.student_gate_year ?? "",
    dInstitute: args2?.student_degree_institute ?? "",
    dYear: args2?.student_degree_year ?? "",
    pObtainPoint: args2?.student_pre_sem_obtained_points ?? "",
    pTotalPoint: args2?.student_pre_sem_total_points ?? "",
    fObtainPoint: args2?.student_final_sem_obtained_points ?? "",
    fTotalPoint: args2?.student_final_sem_total_points ?? "",
    percentageCpi: args2?.student_percentage_cpi ?? "",
    hProgramm: args2?.student_programme ?? "",
    hBranch: args2?.student_branch ?? "",
    hYear: args2?.student_year ?? "",
    hHostelCpi: args2?.student_hostel_cpi ?? "",
    hSeater: args2?.student_single_seater_room ?? "",
    hPh: args2?.student_ph ?? "",
  };
  return { institute, studentInfo };
};

export const studentModifyBonafideData = (args1, args2, otherArgs) => {
  let institute = {
    insAffiliated: args1?.insAffiliated ?? "",
    insName: args1?.insName,
    insAddress: args1?.insAddress,
    insPhoneNumber: args1?.insPhoneNumber,
    insEmail: args1?.insEmail,
    ediatbel1: args1?.insEditableText_one ?? "",
    ediatbel2: args1?.insEditableText_two ?? "",
    instituteImage: args1?.insProfilePhoto
      ? `${imageShowUrl1}/${args1?.insProfilePhoto}`
      : "/images/certificate/logodemo.jpg",
    affiliatedImage: args1?.affliatedLogo
      ? `${imageShowUrl1}/${args1?.affliatedLogo}`
      : "/images/certificate/logodemo.jpg",
  };
  let studentInfo = {
    studentImage: args2?.studentProfilePhoto
      ? `${imageShowUrl1}/${args2?.studentProfilePhoto}`
      : "/images/certificate/logodemo.jpg",

    grNumber: otherArgs?.uniqueGr,
    name: `${args2?.studentFirstName ?? ""} ${args2?.studentMiddleName ?? ""} ${
      args2?.studentLastName ?? ""
    }`,
    dob: args2?.studentDOB,
    reason: otherArgs?.reason,
    message: otherArgs?.message,
    authority: otherArgs?.authority,
    letterHead: otherArgs?.letterHead,
    classTitle: args2?.studentClass?.classTitle,
    dName: args2?.department?.dName,
    batchName: args2?.batches?.batchName,
    isOriginal: args2?.certificateBonaFideCopy?.trueCopy,
  };
  return { institute, studentInfo };
};

export const studentModifyLeavingData = (args1, otherArgs) => {
  let institute = {
    insAffiliated: args1?.insAffiliated ?? "",
    insName: args1?.insName,
    insAddress: args1?.insAddress,
    insPhoneNumber: args1?.insPhoneNumber,
    insEmail: args1?.insEmail,
    ediatbel1: args1?.insEditableText_one ?? "",
    ediatbel2: args1?.insEditableText_two ?? "",
    instituteImage: args1?.insProfilePhoto
      ? `${imageShowUrl1}/${args1?.insProfilePhoto}`
      : "/images/certificate/logodemo.jpg",
    affiliatedImage: args1?.affiliatedImage
      ? `${imageShowUrl1}/${args1?.affiliatedImage}`
      : "/images/certificate/logodemo.jpg",
  };

  let studentInfo = {
    grNumber: args1?.studentGRNO,
    bookNumber: args1?.bookNo,
    certificateNumber: args1?.studentCertificateNo,
    udiseNumber: args1?.studentUidaiNumber,
    name: args1?.name,
    dateOfBirth: args1?.studentDOB ?? "",
    motherName: args1?.studentMotherName ?? "",
    religion: args1?.studentReligion ?? "",
    catse: args1?.studentCast ?? "",
    category: args1?.studentCastCategory ?? "",
    nationality: args1?.studentNationality ?? "",
    motherT: args1?.studentMTongue ?? "",
    birthPlace: args1?.studentBirthPlace ?? "",
    previousSchool: args1?.studentPreviousSchool ?? "",
    instituteJoinDate: args1?.instituteJoinDate ?? "",
    studyProgress: args1?.studentLeavingStudy ?? "",
    behaviour: args1?.studentLeavingBehaviour ?? "",
    instituteLeavingDate: args1?.instituteLeavingDate ?? "",
    courseDuration: args1?.courseDuration ?? "",
    studentClassName: args1?.studentClassName ?? "",
    leavingReason: args1?.studentLeavingReason,
    remark: args1?.studentRemark,
    authority: args1?.authority,
    letterHead: otherArgs?.letterHead,
    isOriginal: otherArgs?.isOriginal,
    is_leaving: otherArgs?.is_leaving,
  };
  return { institute, studentInfo };
};
