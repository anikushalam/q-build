import React, { useEffect, useState } from "react";
import PopupWrapper from "../../Mainbody/FinanceManager/FeesStructure/PopupWrapper";
import style from "../../Mainbody/FinanceManager/FeesStructure/FeesStructure.module.css";
import { useTranslation } from "react-i18next";
import BorderBottom from "../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import { casteCategory } from "../../../../constant/constant_value";
import { useAllDepartmentCondition } from "../../../../Department/Institute/Components/DepartmentApi/depart-api";
import { useGetBatchStandardWithMultipleDepartment } from "../../../../hooks/member_tab/admission-api";
import CustomSelectDepartment from "../../../../JoiningForm/Student/Form/CustomSelectDepartment";

const AllStudentFilter = ({
  onClose,
  instituteId,
  setApplyFilter,
  applyFilter,
}) => {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState("CARD_SHOW");
  const [state, setState] = useState({
    department: [],
    batch: [],
    standard: [],
    gender: "",
    caste: "",
  });
  const [standardList, setStandardList] = useState([]);
  const [batchList, setBatchList] = useState([]);

  const { allDepartment, allDepartmentRefetch } = useAllDepartmentCondition({
    id: instituteId,
    skip: !instituteId,
  });
  const [getBatchStandardWithMultipleDepartment] =
    useGetBatchStandardWithMultipleDepartment();

  useEffect(() => {
    if (instituteId) {
      allDepartmentRefetch();
    }
  }, [instituteId, allDepartmentRefetch]);

  useEffect(() => {
    if (state.department) {
      getBatchStandardWithMultipleDepartment({
        departmentList: {
          arr: state.department,
        },
      })
        .then((res) => {
          if (res.data?.master) {
            setStandardList(res.data?.master);
          }
          if (res.data?.batch) {
            setBatchList(res.data?.batch);
          }
        })
        .catch({});
    }
  }, [state.department]);

  useEffect(() => {
    setState({
      department: applyFilter?.depart_arr ?? [],
      batch: applyFilter?.batch_arr ?? [],
      standard: applyFilter?.master_arr ?? [],
      gender: applyFilter?.gender,
      caste: applyFilter?.cast_category,
    });
  }, [applyFilter]);

  // const onChangeStep = (value) => {
  //   setActiveStep(value);
  // };

  const onCloseSetp = () => {
    onClose();
  };

  // const onSelectFilter = (value) => {
  //   if (onSetpBack.includes(value)) {
  //     onChangeStep(value);
  //   } else {
  //     if (selectedFilter?.includes(value)) {
  //       setSelectedFilter((prev) => prev?.filter((val) => val !== value));
  //     } else {
  //       setSelectedFilter((prev) => [...prev, value]);
  //     }
  //   }
  // };

  // const onGrabDepartment = (data) => {
  //   setDepartmentFilter(data);
  //   if (data?.length) setSelectedFilter((prev) => [...prev, "DEPARTMENT"]);
  //   else
  //     setSelectedFilter((prev) => prev?.filter((val) => val !== "DEPARTMENT"));
  //   onChangeStep("CARD_SHOW");
  // };
  // const onGrabBatch = (data) => {
  //   setBatchFilter(data);
  //   if (data?.length) setSelectedFilter((prev) => [...prev, "BATCH"]);
  //   else setSelectedFilter((prev) => prev?.filter((val) => val !== "BATCH"));
  //   onChangeStep("CARD_SHOW");
  // };
  // const onGrabStandard = (data) => {
  //   setStandardFilter(data);
  //   if (data?.length) setSelectedFilter((prev) => [...prev, "STANDARD"]);
  //   else setSelectedFilter((prev) => prev?.filter((val) => val !== "STANDARD"));

  //   onChangeStep("CARD_SHOW");
  // };

  const onDepartmentSelect = (val) => {
    if (state.department?.includes(val)) {
      setState((prev) => ({
        ...prev,
        department: prev.department?.filter((id) => id !== val),
      }));
    } else {
      setState((prev) => ({
        ...prev,
        department: [...prev.department, val],
      }));
    }
  };
  const onBatchSelect = (val) => {
    if (state.batch?.includes(val)) {
      setState((prev) => ({
        ...prev,
        batch: prev.batch?.filter((id) => id !== val),
      }));
    } else {
      setState((prev) => ({
        ...prev,
        batch: [...prev.batch, val],
      }));
    }
  };
  const onMasterSelect = (val) => {
    if (state.standard?.includes(val)) {
      setState((prev) => ({
        ...prev,
        standard: prev.standard?.filter((id) => id !== val),
      }));
    } else {
      setState((prev) => ({
        ...prev,
        standard: [...prev.standard, val],
      }));
    }
  };

  const onGenderSelect = (val) => {
    setState((prev) => ({
      ...prev,
      gender: val,
    }));
  };
  const onCatseSelect = (val) => {
    setState((prev) => ({
      ...prev,
      caste: val,
    }));
  };

  const onApplyFilterHandler = () => {
    setApplyFilter(() => ({
      depart_arr: state.department,
      batch_arr: state.batch,
      master_arr: state.standard,
      gender: state.gender,
      cast_category: state.caste,
      filter_by: "",
    }));
    onClose();
  };

  const onResetFilter = () => {
    setApplyFilter(() => ({
      depart_arr: [],
      batch_arr: [],
      master_arr: [],
      gender: "",
      cast_category: "",
      filter_by: "Clear_All",
    }));
    onClose();
  };

  // console.info("applyFilter", applyFilter);
  return (
    <>
      {activeStep === "CARD_SHOW" && (
        <PopupWrapper onClose={onCloseSetp}>
          <div className={style.seating_modal}>
            <div className={style.add_category_modal_title}>
              <h6>{t("apply_filter")}</h6>
              <img src="/images/close-post-icon.svg" onClick={onClose} alt="" />
            </div>
            <BorderBottom
              customStyle={{
                width: "100%",
                marginTop: "0.6rem",
                marginBottom: "0.6rem",
              }}
            />

            <CustomSelectDepartment
              selectLabel={t("select_department_optional")}
              selectedValue={t("select_department_optional_placeholder")}
              options={allDepartment?.institute?.depart ?? []}
              onClick={onDepartmentSelect}
              viewAs="CUSTOM_FILTER"
              defalutValue={state.department}
            />
            <CustomSelectDepartment
              selectLabel={t("select_batch_optional")}
              selectedValue={t("select_batch_optional_placeholder")}
              options={batchList}
              onClick={onBatchSelect}
              viewAs="CUSTOM_FILTER"
              defalutValue={state.batch}
            />

            <CustomSelectDepartment
              selectLabel={t("select_standard_year")}
              selectedValue={t("select_standard_year_placeholder")}
              options={standardList}
              onClick={onMasterSelect}
              viewAs="CUSTOM_FILTER"
              defalutValue={state.standard}
            />

            <CustomSelectDepartment
              selectLabel={t("select_gender")}
              selectedValue={t("select_gender_placeholder")}
              options={["Male", "Female", "Other"]}
              onClick={onGenderSelect}
              viewAs="NORMAL_FILTER"
              defalutValue={state.gender}
            />
            <CustomSelectDepartment
              selectLabel={t("select_caste_catgory")}
              selectedValue={t("select_caste_catgory_placeholder")}
              options={casteCategory}
              onClick={onCatseSelect}
              viewAs="NORMAL_FILTER"
              defalutValue={state.caste}
            />

            <div className={style.btn_group}>
              <button
                className={style.set_fees_structure_btn}
                style={{
                  justifyContent: "center",
                }}
                onClick={onApplyFilterHandler}
              >
                {t("apply_filter")}
              </button>
              <button
                className={style.set_fees_structure_btn}
                style={{
                  justifyContent: "center",
                  border: "1px solid rgba(0, 0, 0, 0.12)",
                  color: "rgba(18, 18, 18, 0.8)",
                }}
                onClick={onResetFilter}
              >
                {t("clear_filter")}
              </button>
            </div>
          </div>
        </PopupWrapper>
      )}
    </>
  );
};

export default AllStudentFilter;

// import React, { useEffect, useState } from "react";
// import PopupWrapper from "../../Mainbody/FinanceManager/FeesStructure/PopupWrapper";
// import style from "../../Mainbody/FinanceManager/FeesStructure/FeesStructure.module.css";
// import { useTranslation } from "react-i18next";
// import DepartmentFilter from "./DepartmentFilter";
// import StadnardFilter from "./StadnardFilter";
// import BatchFilter from "./BatchFilter";
// import BorderBottom from "../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";

// const filterArray = [
//   {
//     name: "filter_department",
//     key: 0,
//     value: "DEPARTMENT",
//   },
//   {
//     name: "filter_batch",
//     key: 1,
//     value: "BATCH",
//   },
//   {
//     name: "filter_standard",
//     key: 2,
//     value: "STANDARD",
//   },
//   {
//     name: "filter_gender",
//     key: 3,
//     value: "GENDER",
//   },
//   {
//     name: "filter_caste_category",
//     key: 4,
//     value: "CASTE",
//   },
//   // {
//   //   name: "filter_fees_category",
//   //   key: 5,
//   //   value: "FEES",
//   // },
// ];

// const onSetpBack = ["DEPARTMENT", "BATCH", "STANDARD"];
// const AllStudentFilter = ({
//   onClose,
//   instituteId,
//   setApplyFilter,
//   applyFilter,
// }) => {
//   const { t } = useTranslation();
//   const [activeStep, setActiveStep] = useState("CARD_SHOW");
//   const [selectedFilter, setSelectedFilter] = useState([]);
//   const [departmentFilter, setDepartmentFilter] = useState([]);
//   const [batchFilter, setBatchFilter] = useState([]);
//   const [standardFilter, setStandardFilter] = useState([]);

//   useEffect(() => {
//     setDepartmentFilter(applyFilter?.depart_arr);
//     setBatchFilter(applyFilter?.batch_arr);
//     setStandardFilter(applyFilter?.master_arr);
//     let filterization = [];
//     if (applyFilter?.depart_arr?.length) filterization.push("DEPARTMENT");
//     if (applyFilter?.batch_arr?.length) filterization.push("BATCH");
//     if (applyFilter?.master_arr?.length) filterization.push("STANDARD");
//     if (applyFilter?.gender) filterization.push("GENDER");
//     if (applyFilter?.cast_category) filterization.push("CASTE");
//     if (applyFilter?.fee_category) filterization.push("FEES");
//     setSelectedFilter(filterization);
//   }, [applyFilter]);
//   const onChangeStep = (value) => {
//     setActiveStep(value);
//   };

//   const onCloseSetp = () => {
//     if (onSetpBack.includes(activeStep)) {
//       onChangeStep("CARD_SHOW");
//     } else {
//       onClose();
//     }
//   };

//   const onSelectFilter = (value) => {
//     if (onSetpBack.includes(value)) {
//       onChangeStep(value);
//     } else {
//       if (selectedFilter?.includes(value)) {
//         setSelectedFilter((prev) => prev?.filter((val) => val !== value));
//       } else {
//         setSelectedFilter((prev) => [...prev, value]);
//       }
//     }
//   };

//   const onGrabDepartment = (data) => {
//     setDepartmentFilter(data);
//     if (data?.length) setSelectedFilter((prev) => [...prev, "DEPARTMENT"]);
//     else
//       setSelectedFilter((prev) => prev?.filter((val) => val !== "DEPARTMENT"));
//     onChangeStep("CARD_SHOW");
//   };
//   const onGrabBatch = (data) => {
//     setBatchFilter(data);
//     if (data?.length) setSelectedFilter((prev) => [...prev, "BATCH"]);
//     else setSelectedFilter((prev) => prev?.filter((val) => val !== "BATCH"));
//     onChangeStep("CARD_SHOW");
//   };
//   const onGrabStandard = (data) => {
//     setStandardFilter(data);
//     if (data?.length) setSelectedFilter((prev) => [...prev, "STANDARD"]);
//     else setSelectedFilter((prev) => prev?.filter((val) => val !== "STANDARD"));

//     onChangeStep("CARD_SHOW");
//   };
//   const onApplyFilterHandler = () => {
//     setApplyFilter(() => ({
//       depart_arr: departmentFilter,
//       batch_arr: batchFilter,
//       master_arr: standardFilter,
//       gender: selectedFilter?.includes("GENDER") ? true : false,
//       cast_category: selectedFilter?.includes("CASTE") ? true : false,
//       fee_category: selectedFilter?.includes("FEES") ? true : false,
//     }));
//     onClose();
//   };
//   return (
//     <>
//       {activeStep === "CARD_SHOW" && (
//         <PopupWrapper onClose={onCloseSetp}>
//           <div className={style.seating_modal}>
//             <div className={style.add_category_modal_title}>
//               <h6>{t("apply_filter")}</h6>
//               <img src="/images/close-post-icon.svg" onClick={onClose} alt="" />
//             </div>
//             <BorderBottom
//               customStyle={{
//                 width: "100%",
//                 marginTop: "0.6rem",
//                 marginBottom: "0.6rem",
//               }}
//             />
//             {filterArray.map((filterIcon) => (
//               <div
//                 className={
//                   selectedFilter?.includes(filterIcon?.value)
//                     ? `${style.fees_category} ${style.category_card_hover_active}`
//                     : `${style.fees_category} ${style.category_card_hover}`
//                 }
//                 key={filterIcon.key}
//                 onClick={() => onSelectFilter(filterIcon?.value)}
//                 style={{
//                   marginBottom: "0.6rem",
//                 }}
//               >
//                 <div className={style.fees_category_text}>
//                   <h6>{t(filterIcon?.name)}</h6>
//                 </div>
//               </div>
//             ))}

//             <button
//               className={style.set_fees_structure_btn}
//               style={{
//                 justifyContent: "center",
//               }}
//               onClick={onApplyFilterHandler}
//             >
//               {t("apply_filter")}
//             </button>
//           </div>
//         </PopupWrapper>
//       )}
//       {activeStep === "DEPARTMENT" && (
//         <DepartmentFilter
//           departmentFilter={departmentFilter}
//           instituteId={instituteId}
//           onCloseSetp={onCloseSetp}
//           onGrabDepartment={onGrabDepartment}
//         />
//       )}
//       {activeStep === "BATCH" && (
//         <BatchFilter
//           departmentFilter={departmentFilter}
//           batchFilter={batchFilter}
//           onCloseSetp={onCloseSetp}
//           onGrabBatch={onGrabBatch}
//         />
//       )}
//       {activeStep === "STANDARD" && (
//         <StadnardFilter
//           departmentFilter={departmentFilter}
//           standardFilter={standardFilter}
//           onCloseSetp={onCloseSetp}
//           onGrabStandard={onGrabStandard}
//         />
//       )}
//     </>
//   );
// };

// export default AllStudentFilter;
