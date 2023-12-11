import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { useFileUpload } from "../../../../../hooks/authentication-api";
import {
  useAddExcelFeeHeadByFinance,
  useGetAllFeeHeadMaster,
} from "../../../../../hooks/member_tab/finance-api";
import QLoader from "../../../../../Loader/QLoader";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import AddFeeHeadMaster from "./AddFeeHeadMaster";
import FeeHeadMenu from "./FeeHeadMenu";
import style from "./FeesStructure.module.css";

const FeeHeadMaster = ({ financeId, openAs }) => {
  const { t } = useTranslation();
  const [add, setAdd] = useState(false);
  const [openFeeHeadMenu, setOpenFeeHeadMenu] = useState("");
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [refetchStatus, setRefetchStatus] = useState(false);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [feeHeadList, setFeeHeadList] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [oneFileUpload] = useFileUpload();
  const [addExcelFeeHeadByFinance] = useAddExcelFeeHeadByFinance();

  const { getAllFeeHeadMaster, getAllFeeHeadMasterRefetch } =
    useGetAllFeeHeadMaster({
      data: {
        fid: financeId,
        page: page,
        limit: 10,
        search: "",
      },
      skip: !financeId,
    });
  useEffect(() => {
    if (financeId) {
      setShowingDataLoading(true);
      getAllFeeHeadMasterRefetch();
    }
  }, [financeId, page, getAllFeeHeadMasterRefetch]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (refetchStatus) {
      setFeeHeadList(getAllFeeHeadMaster?.all_master);
      setShowingDataLoading(false);
      setRefetchStatus(false);
    } else {
      if (getAllFeeHeadMaster?.all_master) {
        setFeeHeadList((prevState) =>
          [
            ...new Set(
              [...prevState, ...getAllFeeHeadMaster?.all_master]?.map(
                JSON.stringify
              )
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
      } else if (getAllFeeHeadMaster?.all_master?.length === 0)
        setShowingDataLoading(false);
      else {
      }
    }
    if (getAllFeeHeadMaster?.all_master?.length === 10) setState(true);
    else setState(false);
  }, [getAllFeeHeadMaster?.all_master]);
  const onClose = () => {
    setAdd((pre) => !pre);
  };
  const onRefetchWhenAddFeeHead = () => {
    setPage(1);
    setRefetchStatus(true);
    setShowingDataLoading(true);
    getAllFeeHeadMasterRefetch();
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
          addExcelFeeHeadByFinance({
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

  // console.info("asfsdhjds", feeHeadList);
  return (
    <>
      {openAs === "HOSTEL_MANAGER" || openAs === "TRANSPORT_MANAGER" ? (
        ""
      ) : (
        <>
          <div className={style.upload_excel_container}>
            <label className={style.upload_excel_file} htmlFor="uploadExcel">
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
              {t("add_new_fee_head")}
            </p>
          </div>

          <BorderBottom customStyle={{ marginBottom: "1rem" }} />
        </>
      )}

      {feeHeadList?.map((feeHead, index) =>
        feeHeadList?.length === index + 1 ? (
          <div
            className={style.category_card}
            key={feeHead?._id}
            ref={ref}
            style={{
              height: "74px",
            }}
          >
            <img
              style={{
                height: "36px",
                width: "36px",
              }}
              src="/images/fees-category-icon.svg"
              alt="categor icon"
            />
            <div className={style.category_card_fee}>
              <h6
                style={{
                  marginBottom: "0.3rem",
                }}
              >
                {feeHead?.master_name ?? ""}
              </h6>
              <h6
                style={{
                  color: "rgba(18, 18, 18, 0.5)",
                }}
              >
                {t("rs")}.{feeHead?.master_amount ?? 0}
              </h6>
            </div>
            {openAs === "HOSTEL_MANAGER" || openAs === "TRANSPORT_MANAGER" ? (
              ""
            ) : !["Hostel Linked", "Linked", "Transport Linked"].includes(
                feeHead?.master_status
              ) ? (
              <img
                src="/images/three-24-dot-icon.svg"
                alt="menu icon"
                onClick={() => setOpenFeeHeadMenu(feeHead)}
                className={style.menu_icon}
                title="Menu"
              />
            ) : (
              ""
            )}
          </div>
        ) : (
          <div
            className={style.category_card}
            key={feeHead?._id}
            style={{
              height: "74px",
            }}
          >
            <img
              style={{
                height: "36px",
                width: "36px",
              }}
              src="/images/fees-category-icon.svg"
              alt="categor icon"
            />
            <div className={style.category_card_fee}>
              <h6
                style={{
                  marginBottom: "0.3rem",
                }}
              >
                {feeHead?.master_name ?? ""}
              </h6>
              <h6
                style={{
                  color: "rgba(18, 18, 18, 0.5)",
                }}
              >
                {t("rs")}.{feeHead?.master_amount ?? 0}
              </h6>
            </div>
            {openAs === "HOSTEL_MANAGER" || openAs === "TRANSPORT_MANAGER" ? (
              ""
            ) : !["Hostel Linked", "Linked", "Transport Linked"].includes(
                feeHead?.master_status
              ) ? (
              <img
                src="/images/three-24-dot-icon.svg"
                alt="menu icon"
                onClick={() => setOpenFeeHeadMenu(feeHead)}
                className={style.menu_icon}
                title="Menu"
              />
            ) : (
              ""
            )}
          </div>
        )
      )}
      {showingDataLoading && <QvipleLoading />}

      {add && (
        <AddFeeHeadMaster
          onClose={onClose}
          financeId={financeId}
          onRefetch={onRefetchWhenAddFeeHead}
        />
      )}
      {openFeeHeadMenu && (
        <FeeHeadMenu
          openFeeHeadMenu={openFeeHeadMenu}
          onRefetch={onRefetchWhenAddFeeHead}
          onClose={() => setOpenFeeHeadMenu("")}
          financeId={financeId}
        />
      )}
      {disabled && <QLoader />}
    </>
  );
};

export default FeeHeadMaster;
