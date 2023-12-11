export const userAs = "USER";
export const instituteAs = "INSTITUTE";

// export const nationality = ["Indian", "Non-Indian"];
export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const nationality = ["Indian", "Non-Indian"];
export const casteCategory = [
  "General",
  "OBC",
  "SC",
  "ST",
  "NT-A",
  "NT-B",
  "NT-C",
  "NT-D",
  "VJ",
];

export const religion = [
  "Hindu",
  "Muslim",
  "Sikh",
  "Christian",
  "Parsi",
  "Jews",
  "Indigenous Faith",
  "Buddhism",
  "Jainism",
];

export const nationalityKey = [
  { keys: "form_indian" },
  { keys: "form_nonindian" },
];
export const stakeType = [
  { keys: "student" },
  { keys: "parent" },
  { keys: "faculty_staff" },
  { keys: "employer" },
];
export const stakeTypeValue = {
  student: "Student",
  parent: "Parent",
  faculty_staff: "Faculty / Staff",
  employer: "Employer",
};
export const chooseGenderKey = [
  { keys: "form_male" },
  { keys: "form_female" },
  { keys: "form_other" },
];
export const casteCategoryKey = [
  { keys: "form_general" },
  { keys: "form_obc" },
  { keys: "form_sc" },
  { keys: "form_st" },
  { keys: "form_nta" },
  { keys: "form_ntb" },
  { keys: "form_ntc" },
  { keys: "form_ntd" },
  { keys: "form_vj" },
];

export const religionKey = [
  { keys: "form_hindu" },
  { keys: "form_muslim" },
  { keys: "form_sikh" },
  { keys: "form_christian" },
  { keys: "form_parsi" },
  { keys: "form_jews" },
  { keys: "form_indigenous" },
  { keys: "form_buddhism" },
  { keys: "form_jainism" },
];

export const rationColorKey = [
  { keys: "form_white" },
  { keys: "form_yellow" },
  { keys: "form_orange" },
  { keys: "form_do_not_ration" },
];

export const bloodGroupKey = [
  { keys: "form_a_minus" },
  { keys: "form_a_plus" },
  { keys: "form_b_plus" },
  { keys: "form_b_minus" },
  { keys: "form_ab_plus" },
  { keys: "form_ab_minus" },
  { keys: "form_o_plus" },
  { keys: "form_o_minus" },
];

export const occupationKey = [
  { keys: "form_salaried_employed" },
  { keys: "form_self_employed" },
  { keys: "form_business" },
  { keys: "form_farmer" },
  { keys: "form_other" },
];

export const annunalIncomeKey = [
  { keys: "form_1_lac" },
  { keys: "form_2_lac" },
  { keys: "form_5_lac" },
  { keys: "form_10_lac" },
  { keys: "form_30_lac" },
  { keys: "form_more_lac" },
];
export const nationalityValue = {
  form_indian: "Indian",
  form_nonindian: "Non-resident Indian",
};
export const chooseGenderValue = {
  form_male: "Male",
  form_female: "Female",
  form_other: "Other",
};

export const casteCategoryValue = {
  form_general: "General",
  form_obc: "OBC",
  form_sc: "SC",
  form_st: "ST",
  form_nta: "NT-A",
  form_ntb: "NT-B",
  form_ntc: "NT-C",
  form_ntd: "NT-D",
  form_vj: "VJ",
};

export const annunalIncomeValue = {
  form_1_lac: "Less than 1 Lac",
  form_2_lac: "Between 1 Lac to 2.5 lacs",
  form_5_lac: "Between 2.5 lacs to 5 lacs",
  form_10_lac: "Between 5 lacs to 10 lacs",
  form_30_lac: "Between 10 lacs to 30 lacs",
  form_more_lac: "More than 30 lacs",
};

export const religionValue = {
  form_hindu: "Hindu",
  form_muslim: "Muslim",
  form_sikh: "Sikh",
  form_christian: "Christian",
  form_parsi: "Parsi",
  form_jews: "Jews",
  form_indigenous: "Indigenous Faith",
  form_buddhism: "Buddhism",
  form_jainism: "Jainism",
};

export const rationColorValue = {
  form_white: "White",
  form_yellow: "Yellow",
  form_orange: "Orange",
  form_do_not_ration: "Don't have ration Card",
};

export const bloodGroupValue = {
  form_a_minus: "A-",
  form_a_plus: "A+",
  form_b_plus: "B+",
  form_b_minus: "B-",
  form_ab_plus: "AB+",
  form_ab_minus: "AB-",
  form_o_plus: "O+",
  form_o_minus: "O-",
};

export const occupationValue = [
  { form_salaried_employed: "Salaried Employee" },
  { form_self_employed: "Self Employed Professional" },
  { form_business: "Businessman / Entrepreneur" },
  { form_farmer: "Farmer" },
  { form_other: "Other" },
];

export const modeKey = [{ keys: "by_bank_mode" }, { keys: "by_cash_mode" }];

export const modeKeyValue = { by_bank_mode: "Online", by_cash_mode: "Offline" };

export const paymentTypeKey = [
  { keys: "one_time_fees" },
  { keys: "first_installment" },
];

export const paymentTypeKeyValue = {
  one_time_fees: "O_T_F",
  first_installment: "F_I_P",
};
export const selectYesOrNoKey = [{ keys: "form_yes" }, { keys: "form_no" }];

export const selectYesOrNoValue = {
  form_yes: "Yes",
  form_no: "No",
};
// export const defaultSelectedOptionValidation=[
//   "Select Fees Type",
//   "Please select payment mode",
// ]

export const studentOtherPersonalInfo = {
  keys: [
    "studentBirthPlace",
    // "studentBirthPlacePincode",
    // "studentBirthPlaceState",
    // "studentBirthPlaceDistrict",
    "studentPhoneNumber",
    "studentFatherRationCardColor",
    "studentAadharNumber",
    "studentEmail",
    "student_blood_group",
  ],
  withValue: {
    studentBirthPlace: "",
    // studentBirthPlacePincode: "",
    // studentBirthPlaceState: "",
    // studentBirthPlaceDistrict: "",
    studentPhoneNumber: "",
    studentFatherRationCardColor: "",
    studentAadharNumber: "",
    studentEmail: "",
    student_blood_group: "",
  },
};

export const studentIdentityDetails = {
  keys: [
    "studentNationality",
    "studentReligion",
    "studentCast",
    "studentCastCategory",
    "studentMTongue",
  ],
  withValue: {
    studentNationality: "",
    studentReligion: "",
    studentCast: "",
    studentCastCategory: "",
    studentMTongue: "",
  },
};

export const studentAddressInfo = {
  keys: [
    "studentCurrentAddress",
    "studentCurrentPincode",
    // "studentCurrentDistrict",
    // "studentCurrentState",
    "asSameAddress",
    "studentAddress",
    "studentPincode",
    // "studentDistrict",
    // "studentState",
  ],
  withValue: {
    studentCurrentAddress: "",
    studentCurrentPincode: "",
    // studentCurrentDistrict: "",
    // studentCurrentState: "",
    studentAddress: "",
    studentPincode: "",
    // studentDistrict: "",
    // studentState: "",
  },
};

export const studentParentsInfo = {
  keys: [
    "studentParentsName",
    "studentParentsPhoneNumber",
    "studentParentsOccupation",
    "studentParentsAnnualIncom",
  ],
  withValue: {
    studentParentsName: "",
    studentParentsPhoneNumber: "",
    studentParentsOccupation: "",
    studentParentsAnnualIncom: "",
  },
};

export const studentBanksInfo = {
  keys: [
    "studentBankName",
    "studentBankAccountHolderName",
    "studentBankAccount",
    "studentBankReAccount",
    "studentBankIfsc",
    "bankPassbook",
  ],
  withValue: {
    studentBankName: "",
    studentBankAccountHolderName: "",
    studentBankAccount: "",
    studentBankIfsc: "",
    bankPassbook: "",
  },
};
export const studentGateInfo = {
  keys: ["student_gate_score", "student_gate_year"],
  withValue: {
    student_gate_score: "",
    student_gate_year: "",
  },
};

export const studentGateDegreeInfo = {
  keys: [
    "student_degree_institute",
    "student_degree_year",
    "heading",
    "subheading1",
    "student_pre_sem_obtained_points",
    "student_pre_sem_total_points",
    "subheading2",
    "student_final_sem_obtained_points",
    "student_final_sem_total_points",
    "student_percentage_cpi",
  ],
  withValue: {
    student_degree_institute: "",
    student_degree_year: "",
    student_pre_sem_obtained_points: "",
    student_pre_sem_total_points: "",
    student_final_sem_obtained_points: "",
    student_final_sem_total_points: "",
    student_percentage_cpi: "",
  },
};
export const studentHosteCpiInfo = {
  keys: [
    "student_programme",
    "student_branch",
    "student_year",
    "student_hostel_cpi",
    "student_single_seater_room",
    "student_ph",
  ],
  withValue: {
    student_programme: "",
    student_branch: "",
    student_year: "",
    student_hostel_cpi: "",
    student_single_seater_room: "",
    student_ph: "",
  },
};
export const studentPrnEnrollmentInfo = {
  keys: ["student_prn_enroll_number"],
  withValue: {
    student_prn_enroll_number: "",
  },
};

export const studentPreviousSchoolAndDocument = {
  keys: ["studentPreviousSchool", "addharFrontCard", "addharBackCard"],
  withValue: {
    studentPreviousSchool: "",
    addharFrontCard: "",
    addharBackCard: "",
  },
};

export const staffOtherPersonalInfo = {
  keys: [
    "staffBirthPlace",
    // "staffBirthPlacePincode",
    // "staffBirthPlaceState",
    // "staffBirthPlaceDistrict",
    "staffPhoneNumber",
    "staffAadharNumber",
    "staffQualification",
    "current_designation",
  ],
  withValue: {
    staffBirthPlace: "",
    // staffBirthPlacePincode: "",
    // staffBirthPlaceState: "",
    // staffBirthPlaceDistrict: "",
    staffPhoneNumber: "",
    staffAadharNumber: "",
    staffQualification: "",
    current_designation: "",
  },
};

export const studentIdCardDetails = {
  keys: ["student_id_card_front", "student_id_card_back"],
  withValue: {
    student_id_card_front: "",
    student_id_card_back: "",
  },
};
export const studentAntiRaggingDetails = {
  keys: ["student_anti_ragging"],
  withValue: {
    student_anti_ragging: "",
  },
};
export const staffIdentityDetails = {
  keys: [
    "staffNationality",
    "staffReligion",
    "staffCast",
    "staffCastCategory",
    "staffMTongue",
  ],
  withValue: {
    staffNationality: "",
    staffReligion: "",
    staffCast: "",
    staffCastCategory: "",
    staffMTongue: "",
  },
};

export const staffAddressInfo = {
  keys: [
    "staffCurrentAddress",
    "staffCurrentPincode",
    // "staffCurrentDistrict",
    // "staffCurrentState",
    "asSameAddress",
    "staffAddress",
    "staffPincode",
    // "staffDistrict",
    // "staffState",
  ],
  withValue: {
    staffCurrentAddress: "",
    staffCurrentPincode: "",
    // staffCurrentDistrict: "",
    // staffCurrentState: "",
    staffAddress: "",
    staffPincode: "",
    // staffDistrict: "",
    // staffState: "",
  },
};

export const staffBanksInfo = {
  keys: [
    "staffBankName",
    "staffBankAccountHolderName",
    "staffBankAccount",
    "staffBankReAccount",
    "staffBankIfsc",
    "bankPassbook",
  ],
  withValue: {
    staffBankName: "",
    staffBankAccountHolderName: "",
    staffBankAccount: "",
    staffBankIfsc: "",
    bankPassbook: "",
  },
};

export const staffPreviousSchoolAndDocument = {
  keys: ["staffPreviousSchool", "addharFrontCard", "addharBackCard"],
  withValue: {
    staffPreviousSchool: "",
    addharFrontCard: "",
    addharBackCard: "",
  },
};

export const otherAllDocument = {
  keys: [
    "casteCertificate",
    "identityDocument",
    "joiningTransferLetter",
    "leavingTransferCertificate",
    "incomeCertificate",
    "lastYearMarksheet",
    "nationalityCertificate",
    "domicileCertificate",
    "nonCreamyLayerCertificate",
  ],
};

export const applyFormLabelOtherPersonalInfo = [
  {
    id: 1,
    label: "form_birth_place_label",
    placeHolder: "form_birth_place_plcaeholder",
    lists: ["studentBirthPlace", "staffBirthPlace"],
  },

  // {
  //   id: 2,
  //   label: "Birth Place Pin Code",
  //   placeHolder: "Please enter your birth place pincode",
  //   lists: ["studentBirthPlacePincode", "staffBirthPlacePincode"],
  // },
  // {
  //   label: "Birth Place District",
  //   placeHolder: "Please enter your birth place e.g.Dapur",
  //   lists: ["studentBirthPlaceDistrict"],
  // },
  {
    id: 3,
    label: "form_student_mobile_number_label",
    placeHolder: "form_student_mobile_number_placeholder",
    lists: ["studentPhoneNumber"],
  },
  {
    id: 3,
    label: "form_mobile_number_label",
    placeHolder: "form_mobile_number_placeholder",
    lists: ["staffPhoneNumber"],
  },
  {
    id: 4,
    label: "form_father_ration_label",
    placeHolder: "form_father_ration_placeholder",
    lists: ["studentFatherRationCardColor"],
    type: "SELECT",
    chooseOptions: rationColorKey,
    chooseOptionsValue: rationColorValue,
  },
  {
    label: "form_qualification_label",
    placeHolder: "form_qualification_placeholder",
    lists: ["staffQualification"],
  },
  {
    id: 5,
    label: "form_aadhar_number_label",
    placeHolder: "form_aadhar_number_placeholder",
    lists: ["studentAadharNumber", "staffAadharNumber"],
  },
  {
    id: 2,
    label: "form_student_email_label",
    placeHolder: "form_student_email_label_placeholder",
    lists: ["studentEmail"],
  },
  {
    id: 6,
    label: "form_student_blood_label",
    placeHolder: "form_student_blood_label_placeholder",
    lists: ["student_blood_group"],
    type: "SELECT",
    chooseOptions: bloodGroupKey,
    chooseOptionsValue: bloodGroupValue,
  },
  {
    label: "form_current_designation_label",
    placeHolder: "form_current_designation_placeholder",
    lists: ["current_designation"],
  },
];
export const applyFormLabelIdentityDetails = [
  {
    id: 6,
    label: "form_nationality_label",
    placeHolder: "form_nationality_placeholder",
    lists: ["studentNationality", "staffNationality"],
    type: "SELECT",
    chooseOptions: nationalityKey,
    chooseOptionsValue: nationalityValue,
  },
  {
    id: 7,
    label: "form_religion_label",
    placeHolder: "form_religion_placeholder",
    lists: ["studentReligion", "staffReligion"],
    type: "SELECT",
    chooseOptions: religionKey,
    chooseOptionsValue: religionValue,
  },
  {
    id: 8,
    label: "form_caste_label",
    placeHolder: "form_caste_placeholder",
    lists: ["studentCast", "staffCast"],
  },
  {
    id: 9,
    label: "form_caste_category_label",
    placeHolder: "form_caste_category_placeholder",
    lists: ["studentCastCategory", "staffCastCategory"],
    type: "SELECT",
    chooseOptions: casteCategoryKey,
    chooseOptionsValue: casteCategoryValue,
  },
  {
    id: 10,
    label: "form_mother_tounge_label",
    placeHolder: "form_mother_tounge_placeholder",
    lists: ["studentMTongue", "staffMTongue"],
  },
];

export const applyFormLabelAddressInfo = [
  {
    id: 11,
    label: "form_current_address_label",
    placeHolder: "form_current_address_placeholder",
    lists: ["studentCurrentAddress", "staffCurrentAddress"],
    type: "TEXTAREA",
  },
  {
    id: 12,
    label: "form_pincode_label",
    placeHolder: "form_pincode_placeholder",
    lists: ["studentCurrentPincode", "staffCurrentPincode"],
    pincode: true,
  },
  {
    id: 13,
    label: "form_is_your_permanent_address_label",
    lists: ["asSameAddress"],
    checkbox: true,
  },
  // {
  //   label: "Select District",
  //   placeHolder: "Please select district",
  //   lists: ["studentCurrentDistrict"],
  //   type: "SELECT",
  //   optionType: "DISTRICT",
  // },
  {
    id: 14,
    label: "form_permanent_address_label",
    placeHolder: "form_permanent_address_placeholder",
    lists: ["studentAddress", "staffAddress"],
    type: "TEXTAREA",
  },
  {
    id: 15,
    label: "form_pincode_label",
    placeHolder: "form_pincode_placeholder",
    lists: ["studentPincode", "staffPincode"],
    pincode: true,
  },
  // {
  //   label: "Select District",
  //   placeHolder: "Please select district",
  //   lists: ["studentDistrict"],
  //   type: "SELECT",
  //   optionType: "DISTRICT",
  // },
];

export const applyFormLabelParentsInfo = [
  {
    id: 16,
    label: "form_guardian_name_label",
    placeHolder: "form_guardian_name_placeholder",
    lists: ["studentParentsName"],
  },
  {
    id: 17,
    label: "form_guardian_mobile_label",
    placeHolder: "form_guardian_mobile_placeholder",
    lists: ["studentParentsPhoneNumber"],
  },
  {
    id: 18,
    label: "form_occupation_label",
    placeHolder: "form_occupation_placeholder",
    lists: ["studentParentsOccupation"],
    type: "SELECT",
    chooseOptions: occupationKey,
    chooseOptionsValue: occupationValue,
  },
  {
    id: 19,
    label: "form_annual_income_label",
    placeHolder: "form_annual_income_placeholder",
    lists: ["studentParentsAnnualIncom"],
    type: "SELECT",
    chooseOptions: annunalIncomeKey,
    chooseOptionsValue: annunalIncomeValue,
  },
];
export const applyFormLabelBanksInfo = [
  {
    id: 20,
    label: "form_bank_name_label",
    placeHolder: "form_bank_name_placeholder",
    lists: ["studentBankName", "staffBankName"],
  },
  {
    id: 21,
    label: "form_account_holder_name_label",
    placeHolder: "form_account_holder_name_placeholder",
    lists: ["studentBankAccountHolderName", "staffBankAccountHolderName"],
  },
  {
    id: 22,
    label: "form_account_number_label",
    placeHolder: "form_account_number_placeholder",
    lists: ["studentBankAccount", "staffBankAccount"],
  },
  {
    id: 23,
    label: "form_reaccount_number_label",
    placeHolder: "form_reaccount_number_placeholder",
    lists: ["studentBankReAccount", "staffBankReAccount"],
  },
  {
    id: 24,
    label: "form_ifsc_code_label",
    placeHolder: "form_ifsc_code_placeholder",
    lists: ["studentBankIfsc", "staffBankIfsc"],
  },

  {
    id: 25,
    label: "form_bank_passbook_label",
    lists: ["bankPassbook"],
    fileType: true,
  },
];

export const applyFormLabelGateInfo = [
  {
    id: 39,
    label: "form_gate_score_label",
    placeHolder: "form_gate_score_placeholder",
    lists: ["student_gate_score"],
  },
  {
    id: 40,
    label: "form_gate_year_label",
    placeHolder: "form_gate_year_placeholder",
    lists: ["student_gate_year"],
    isCalender: true,
  },
];
export const applyFormLabelGateDegreeInfo = [
  {
    id: 41,
    label: "form_degree_institute_label",
    placeHolder: "form_degree_institute_placeholder",
    lists: ["student_degree_institute"],
  },
  {
    id: 42,
    label: "form_degree_year_label",
    placeHolder: "form_degree_year_placeholder",
    lists: ["student_degree_year"],
    isCalender: true,
  },
  {
    id: 43,
    isPreheading: "Heading",
    label: "form_degree_marks_label",
    lists: ["heading"],
  },
  {
    id: 44,
    isPreheading: "SUBHEADING",
    label: "form_pre_final_semester_year",
    lists: ["subheading1"],
  },
  {
    id: 45,
    label: "form_marks_obtained_total_credits_label",
    placeHolder: "form_marks_obtained_total_credits_placeholder",
    lists: ["student_pre_sem_obtained_points"],
  },
  {
    id: 46,
    label: "form_grand_total_total_grade_point_label",
    placeHolder: "form_grand_total_total_grade_point_placeholder",
    lists: ["student_pre_sem_total_points"],
  },
  {
    id: 47,
    isPreheading: "SUBHEADING",
    label: "form_final_semester_year",
    lists: ["subheading2"],
  },
  {
    id: 48,
    label: "form_marks_obtained_total_credits_label",
    placeHolder: "form_marks_obtained_total_credits_placeholder",
    lists: ["student_final_sem_obtained_points"],
  },
  {
    id: 49,
    label: "form_grand_total_total_grade_point_label",
    placeHolder: "form_grand_total_total_grade_point_placeholder",
    lists: ["student_final_sem_total_points"],
  },
  {
    id: 50,
    label: "form_class_api_label",
    placeHolder: "form_class_api_placeholder",
    lists: ["student_percentage_cpi"],
  },
];
export const applyFormLabelHostelInfo = [
  {
    id: 51,
    label: "form_student_programme_label",
    placeHolder: "form_student_programme_placeholder",
    lists: ["student_programme"],
  },
  {
    id: 52,
    label: "form_student_branch_label",
    placeHolder: "form_student_branch_placeholder",
    lists: ["student_branch"],
  },
  {
    id: 53,
    label: "form_student_year_label",
    placeHolder: "form_student_year_placeholder",
    lists: ["student_year"],
    isCalender: true,
  },
  {
    id: 54,
    label: "form_hostel_cpi_label",
    placeHolder: "form_hostel_cpi_placeholder",
    lists: ["student_hostel_cpi"],
  },
  {
    id: 55,
    label: "form_student_single_seater_room_label",
    placeHolder: "form_student_single_seater_room_placeholder",
    lists: ["student_single_seater_room"],
    type: "SELECT",
    chooseOptions: selectYesOrNoKey,
    chooseOptionsValue: selectYesOrNoValue,
  },
  {
    id: 56,
    label: "form_student_ph_label",
    placeHolder: "form_student_ph_placeholder",
    lists: ["student_ph"],
    type: "SELECT",
    chooseOptions: selectYesOrNoKey,
    chooseOptionsValue: selectYesOrNoValue,
  },
];
export const applyFormLabelPreviousSchoolAndDocument = [
  {
    id: 26,
    label: "form_aadhar_front_label",
    lists: ["addharFrontCard"],
    fileType: true,
  },
  {
    id: 27,
    label: "form_aadhar_back_label",
    lists: ["addharBackCard"],
    fileType: true,
  },
  {
    id: 28,
    label: "form_is_your_first_college_label",
    lists: ["previousSchoolDocument"],
    checkbox: true,
  },

  {
    id: 29,
    label: "form_previous_school_name_label",
    placeHolder: "form_previous_school_name_placeholder",
    lists: ["studentPreviousSchool", "staffPreviousSchool"],
  },
  {
    id: 30,
    label: "form_caste_certificate_label",
    lists: ["casteCertificate"],
    fileType: true,
  },

  {
    id: 31,
    label: "form_identity_label",
    lists: ["identityDocument"],
    fileType: true,
  },
  {
    id: 32,
    label: "form_joining_transfer_letter_label",
    lists: ["joiningTransferLetter"],
    fileType: true,
  },
  {
    id: 33,
    label: "form_leaving_transfer_letter_label",
    lists: ["leavingTransferCertificate"],
    fileType: true,
  },
  {
    id: 34,
    label: "form_income_certificate_label",
    lists: ["incomeCertificate"],
    fileType: true,
  },
  {
    id: 35,
    label: "form_last_year_marksheet_label",
    lists: ["lastYearMarksheet"],
    fileType: true,
  },
  {
    id: 36,
    label: "form_nationality_certificate_label",
    lists: ["nationalityCertificate"],
    fileType: true,
  },
  {
    id: 37,
    label: "form_domicile_certificate_label",
    lists: ["domicileCertificate"],
    fileType: true,
  },
  {
    id: 38,
    label: "form_non_creamy_layer_label",
    lists: ["nonCreamyLayerCertificate"],
    fileType: true,
  },
];

export const applyFormLabelIdcard = [
  {
    id: 57,
    label: "form_student_id_card_front_label",
    lists: ["student_id_card_front"],
    fileType: true,
  },
  {
    id: 58,
    label: "form_student_id_card_back_label",
    lists: ["student_id_card_back"],
    fileType: true,
  },
];
export const applyFormLabelAntiRagging = [
  {
    id: 59,
    label: "form_student_anti_ragging_label",
    lists: ["student_anti_ragging"],
    fileType: true,
  },
];
export const allFileKeyToSend = [
  "bankPassbook",
  "addharFrontCard",
  "addharBackCard",
  "casteCertificate",
  "identityDocument",
  "joiningTransferLetter",
  "leavingTransferCertificate",
  "incomeCertificate",
  "lastYearMarksheet",
  "nationalityCertificate",
  "domicileCertificate",
  "nonCreamyLayerCertificate",
  "student_id_card_front",
  "student_id_card_back",
  "student_anti_ragging",
];
// code: Qxpmwg;

export const chooseImpovementKey = [
  { keys: "hard_worker_but_has_difficulty_staying_on_task" },
  {
    keys: "works_well_alone_but_needs_to_learn_how_to_work_better_cooperatively_with_peers",
  },
  { keys: "has_a_difficult_time_concentrating_and_gets_distracted_easily" },
  { keys: "having_difficulty_concentrating_during_math_lessons" },
  {
    keys: "give_up_easily_when_something_is_difficult_needs_extensive_encouragement_to_attempt_the_task",
  },
  { keys: "not_learning_the_material_that_is_being_taught_because_of_that" },
];

export const chooseLackInKey = [
  { keys: "daily_to_daily_tasks" },
  { keys: "theoretical_part" },
  { keys: "communication_with_peers" },
  { keys: "practicing_the_syllabus" },
];

export const chooseImpovementValue = [
  {
    hard_worker_but_has_difficulty_staying_on_task:
      "Hard worker, but has difficulty staying on task.",
  },
  {
    works_well_alone_but_needs_to_learn_how_to_work_better_cooperatively_with_peers:
      "Works well alone, but needs to learn how to work better cooperatively with peers",
  },
  {
    has_a_difficult_time_concentrating_and_gets_distracted_easily:
      "Has a difficult time concentrating and gets distracted easily",
  },
  {
    having_difficulty_concentrating_during_math_lessons:
      "Having difficulty concentrating during math lessons",
  },
  {
    give_up_easily_when_something_is_difficult_needs_extensive_encouragement_to_attempt_the_task:
      "Give Up easily when something is difficult & needs extensive encouragement to attempt the task.",
  },
  {
    not_learning_the_material_that_is_being_taught_because_of_that:
      "Not learning the material that is being taught because of that",
  },
];

export const chooseLackInValue = [
  { daily_to_daily_tasks: "Daily to daily tasks" },
  { theoretical_part: "Theoretical part" },
  { communication_with_peers: "Communication with peers" },
  { practicing_the_syllabus: "Practicing the syllabus" },
];

export const chooseLackInReverseValue = [
  { key: "Daily to daily tasks", tKey: "daily_to_daily_tasks" },
  { key: "Theoretical part", tKey: "theoretical_part" },
  { key: "Communication with peers", tKey: "communication_with_peers" },
  { key: "Practicing the syllabus", tKey: "practicing_the_syllabus" },
];

export const chooseImpovementReverseValue = [
  {
    key: "Hard worker, but has difficulty staying on task.",
    tKey: "hard_worker_but_has_difficulty_staying_on_task",
  },
  {
    key: "Works well alone, but needs to learn how to work better cooperatively with peers",
    tKey: "works_well_alone_but_needs_to_learn_how_to_work_better_cooperatively_with_peers",
  },
  {
    key: "Has a difficult time concentrating and gets distracted easily",
    tKey: "has_a_difficult_time_concentrating_and_gets_distracted_easily",
  },
  {
    key: "Having difficulty concentrating during math lessons",
    tKey: "having_difficulty_concentrating_during_math_lessons",
  },
  {
    key: "Give Up easily when something is difficult & needs extensive encouragement to attempt the task.",
    tKey: "give_up_easily_when_something_is_difficult_needs_extensive_encouragement_to_attempt_the_task",
  },
  {
    key: "Not learning the material that is being taught because of that",
    tKey: "not_learning_the_material_that_is_being_taught_because_of_that",
  },
];
// Institute Follow
// Approve Staff
// Request Staff
// Universal Designation
// Department Designation
// Class Designation
// Subject Designation
// Admission Designation
// Finance Designation
// Sports Head Designation
// Sports Class Head Designation
// Library Designation
// Display Person
// Approve Student
// Student Request
// User Institute Follow
// User Follow
// User Circle
// Remain Fees
// Bank Detail
// Qviple Repayment
// Class Fee Request
// Class Fee Approved
// Class Fee Rejected
// Payroll
// Sport Event
// Sport Match
// Report Card -> Promote
// Approve Institute
// Reject Institute
// Exam
// Marks
// Checklist
// Checklist Allotted
// Offline Fees
// Fee
// MCQ
// Assignment
// Complete Assignment
// Submit Assignment
// Student Present
// Student Absent
// Staff Present
// Staff Absent
// Holiday
// Daily Update
// Leave
// Leave Status
// Department Complaint
// Class Complaint
// Report Complaint
// Transfer
// Transfer Status
// Election
// Election Member
// Election Status
// Comment
// Participative Event
// Participative Event Assign
// Participative Event Result
// Participative Event Payment
// Online Fee
// Unlock Payment
// Admission Online Fee
