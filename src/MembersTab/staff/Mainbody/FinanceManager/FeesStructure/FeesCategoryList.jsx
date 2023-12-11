import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useFileUpload } from "../../../../../hooks/authentication-api";
import {
  useAddExcelCategoryByFinance,
  useGetAllFeesCategory,
} from "../../../../../hooks/member_tab/finance-api";
import QLoader from "../../../../../Loader/QLoader";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import UniversalTab from "../../DepartmentHead/Competetions/CompetitionTab/UniversalTab";
import AddFeesCategory from "./AddFeesCategory";
import CategoryMenu from "./CategoryMenu";
import FeeHeadMaster from "./FeeHeadMaster";
import style from "./FeesStructure.module.css";

const FeesCategoryList = ({ financeId, openAs }) => {
  const { t } = useTranslation();
  const tabList = [
    {
      name: t("category"),
      id: 0,
    },
    {
      name: t("fees_heads"),
      id: 1,
    },
  ];

  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [add, setAdd] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [openCategoryMenu, setOpenCategoryMenu] = useState("");
  const [oneFileUpload] = useFileUpload();
  const [addExcelCategoryByFinance] = useAddExcelCategoryByFinance();

  const { getAllFeesCategory, getAllFeesCategoryRefetch } =
    useGetAllFeesCategory({
      fid: financeId,
      skip: !financeId,
    });

  useEffect(() => {
    if (financeId) getAllFeesCategoryRefetch();
  }, [financeId, getAllFeesCategoryRefetch]);
  const onClose = () => {
    setAdd((pre) => !pre);
  };
  const onExcelFileUpload = (e) => {
    // console.info("this is excel up,lsd", e.target.files[0]);
    setDisabled((pre) => !pre);
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    oneFileUpload({
      fileUpload: formData,
    })
      .then((res) => {
        if (res.data?.imageKey) {
          addExcelCategoryByFinance({
            fid: financeId,
            excelFile: {
              excel_file: res.data?.imageKey,
            },
          })
            .then(() => {
              setDisabled((pre) => !pre);
            })
            .catch({});
        } else {
          setDisabled((pre) => !pre);
        }
      })
      .catch({});
  };

  //   console.info("this is ain", getAllFeesCategory);
  return (
    <>
      <div className={style.category_header}>
        <img
          src="/images/left-back-icon.svg"
          alt="back arrow"
          className={style.back_icon}
          onClick={() => navigate(-1)}
          style={{
            cursor: "pointer",
          }}
        />
        <h6 className={style.category_header_title}>{t("fees_master")}</h6>
      </div>
      <UniversalTab
        tabList={tabList}
        activeIndexTab={activeIndex}
        setActiveIndexTab={setActiveIndex}
        showAs={false}
        customStyleTab={{
          width: "50%",
        }}
      />
      <BorderBottom customStyle={{ marginBottom: "1rem" }} />

      {activeIndex === 0 && (
        <>
          {openAs === "HOSTEL_MANAGER" || openAs === "TRANSPORT_MANAGER" ? (
            ""
          ) : (
            <>
              <div className={style.upload_excel_container}>
                <label
                  className={style.upload_excel_file}
                  htmlFor="uploadExcel"
                >
                  <img
                    src="/images/upload-xslx-icon.svg"
                    alt="add student icon"
                    title="Upload excel file"
                  />
                </label>

                <input
                  type={"file"}
                  id="uploadExcel"
                  accept=".xlsx"
                  onChange={onExcelFileUpload}
                  style={{
                    display: "none",
                  }}
                />
                <p className={style.add_new_category} onClick={onClose}>
                  {t("add_new_category")}
                </p>
              </div>
              <BorderBottom customStyle={{ marginBottom: "1rem" }} />
            </>
          )}

          {getAllFeesCategory?.all_fees_format?.map((category) => (
            <div className={style.category_card} key={category?._id}>
              <img src="/images/fees-category-icon.svg" alt="categor icon" />
              <h6>
                {category?.category_name ?? ""}{" "}
                {category?.secondary_category?.category_name ? (
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: "400",
                    }}
                  >
                    ({category?.secondary_category?.category_name ?? ""})
                  </span>
                ) : (
                  ""
                )}
              </h6>
              {openAs === "HOSTEL_MANAGER" || openAs === "TRANSPORT_MANAGER" ? (
                ""
              ) : (
                <img
                  src="/images/three-24-dot-icon.svg"
                  alt="menu icon"
                  onClick={() => setOpenCategoryMenu(category?._id)}
                  className={style.menu_icon}
                  title="Menu"
                />
              )}
            </div>
          ))}

          {add && (
            <AddFeesCategory
              onClose={onClose}
              financeId={financeId}
              onRefetch={getAllFeesCategoryRefetch}
            />
          )}
          {openCategoryMenu && (
            <CategoryMenu
              onClose={() => setOpenCategoryMenu("")}
              openCategoryMenu={openCategoryMenu}
              onRefetch={getAllFeesCategoryRefetch}
              fid={financeId}
              categoryList={getAllFeesCategory?.all_fees_format ?? []}
            />
          )}
          {disabled && <QLoader />}
        </>
      )}

      {activeIndex === 1 && (
        <FeeHeadMaster financeId={financeId} openAs={openAs} />
      )}
    </>
  );
};

export default FeesCategoryList;
