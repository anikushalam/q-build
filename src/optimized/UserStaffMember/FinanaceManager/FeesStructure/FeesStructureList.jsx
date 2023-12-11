import { customDebounce } from "../../../Utils/Functions/debounce";
import { nextPage } from "../../../Utils/Functions/nextPage";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import style from "../FinanceManager.module.css";
import { assestsNavbarUrl } from "../../../Services/UrlConfig/AssestsBaseUrl";
import UploadExcelButton from "../../../Ui/Button/UploadExcelButton";
import CreateButton from "../../../Ui/Button/CreateButton";
import { useFileUpload } from "../../../Hooks/ApiHooks/Auth/auth-api";
import {
  useFinanceAddExcelStructure,
  useFinanceAllFeeStructure,
} from "../../../Hooks/ApiHooks/FinanceManager/finance-manager-api";
import QvipleLoader from "../../../Loader/QvipleLoader";
import FeeStructureCard from "./Structure/FeeStructureCard";
import AddFeeStructure from "./Structure/AddFeeStructure";
import Loading from "../../../Loader/Loading";
import EmptyMessage from "../../../Utils/EmptyMessage/EmptyMessage";

const FeesStructureList = ({ instituteId, financeId, getQuery }) => {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [ref, inView] = useInView({ skip: search });
  const [add, setAdd] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [fileUpload] = useFileUpload();
  const [financeAddExcelStructure] = useFinanceAddExcelStructure();
  const { financeAllFeeStructure, financeAllFeeStructureLoading } =
    useFinanceAllFeeStructure({
      data: {
        did: getQuery?.did,
        page: page,
        limit: 10,
        search: search,
        filterBy: getQuery?.clsId,
        batchBy: getQuery?.batchId,
      },
      skip: !getQuery?.did,
    });
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);
  useEffect(() => {
    if (financeAllFeeStructure?.list?.length) {
      let obj = nextPage(financeAllFeeStructure?.list?.length);
      setState(() => obj);
    }
  }, [financeAllFeeStructure?.list?.length]);

  const onDebounce = useCallback(
    customDebounce((val) => {
      setPage(() => 1);
      setSearch(val);
    }, 500),
    []
  );

  const onSearchEvent = (e) => {
    if (e.target.value) onDebounce(e.target.value);
    else {
      setPage(() => 1);
      setSearch("");
    }
  };
  const onExcelFileUpload = (e) => {
    if (e.target.files?.length && getQuery?.did && financeId) {
      setDisabled((pre) => !pre);
      const formData = new FormData();
      formData.append("file", e.target.files[0]);
      fileUpload({
        fileUpload: formData,
      })
        .then((res) => {
          if (res.data?.imageKey) {
            financeAddExcelStructure({
              fid: financeId,
              did: getQuery?.did,
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
    }
  };
  const onClose = () => {
    setAdd((pre) => !pre);
  };

  // console.info("getQuery", getQuery);
  return (
    <>
      <div className={style.fm_header_container}>
        <h6>
          {getQuery?.dName ?? ""}
          {getQuery?.batchName ? (
            <span
              style={{
                fontWeight: "400",
                fontSize: "13px",
              }}
            >
              {" "}
              ({getQuery?.batchName ?? ""})
            </span>
          ) : null}
          {getQuery?.clsName ? (
            <span
              style={{
                fontWeight: "400",
                fontSize: "13px",
              }}
            >
              {" - "}({getQuery?.clsName ?? ""})
            </span>
          ) : null}
        </h6>
        <div
          className={style.fm_add_button}
          style={{
            alignItems: "center",
          }}
        >
          <UploadExcelButton onExcelFileUpload={onExcelFileUpload} />
          <CreateButton
            label="add_new_fees_structure"
            customStyle={{
              marginBlock: "0.5rem",
            }}
            onAction={onClose}
          />
        </div>
      </div>
      <div
        className={style.fm_search_full}
        style={{
          marginBottom: "0.7rem",
        }}
      >
        <section className={style.fm_search_full_container}>
          <div className={style.fm_search_full_container_inner}>
            <img
              className={style.fm_search_full_icon}
              alt="search icon"
              src={`${assestsNavbarUrl}/navbar-search.svg`}
            />
            <input
              type="text"
              placeholder={t("search")}
              onChange={onSearchEvent}
            />
          </div>
        </section>
      </div>

      {financeAllFeeStructure?.list?.map((structure, index) =>
        financeAllFeeStructure?.list?.length === index + 1 ? (
          <div key={structure?._id} ref={ref}>
            <FeeStructureCard
              structure={structure}
              instituteId={instituteId}
              fid={financeId}
              did={getQuery?.did}
            />
          </div>
        ) : (
          <FeeStructureCard
            structure={structure}
            key={structure?._id}
            instituteId={instituteId}
            fid={financeId}
            did={getQuery?.did}
          />
        )
      )}

      {financeAllFeeStructureLoading ? (
        search ? (
          <QvipleLoader />
        ) : (
          <Loading />
        )
      ) : search ? (
        !financeAllFeeStructure?.list?.length && (
          <EmptyMessage
            customStyleContainer={{
              marginTop: "1.5rem",
            }}
            title="No fee structure fuond related this search."
          />
        )
      ) : (
        !financeAllFeeStructure?.list?.length && (
          <EmptyMessage
            customStyleContainer={{
              marginTop: "1.5rem",
            }}
            title="No fee structure added."
          />
        )
      )}
      {add && (
        <AddFeeStructure
          instituteId={instituteId}
          fid={financeId}
          did={getQuery?.did}
          onClose={onClose}
        />
      )}
      {disabled && <QvipleLoader />}
    </>
  );
};

export default FeesStructureList;
