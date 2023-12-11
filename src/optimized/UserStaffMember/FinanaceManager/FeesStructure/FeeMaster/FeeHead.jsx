import UploadExcelButton from "../../../../Ui/Button/UploadExcelButton";
import style from "../FeesStructure.module.css";
import styleFinance from "../../FinanceManager.module.css";
import CreateButton from "../../../../Ui/Button/CreateButton";
import { useCallback, useEffect, useState } from "react";
import { useFileUpload } from "../../../../Hooks/ApiHooks/Auth/auth-api";
import {
  useFinanceAddExcelFeeHead,
  useFinanceAllFeeHeadMaster,
} from "../../../../Hooks/ApiHooks/FinanceManager/finance-manager-api";
import QvipleLoader from "../../../../Loader/QvipleLoader";
import FeeHeadCard from "./FeeHeadCard";
import AddFeesHead from "./AddFeesHead";
import { useInView } from "react-intersection-observer";
import { nextPage } from "../../../../Utils/Functions/nextPage";
import { customDebounce } from "../../../../Utils/Functions/debounce";
import { assestsNavbarUrl } from "../../../../Services/UrlConfig/AssestsBaseUrl";
import { useTranslation } from "react-i18next";
import Loading from "../../../../Loader/Loading";
import EmptyMessage from "../../../../Utils/EmptyMessage/EmptyMessage";
const FeeHead = ({ fid }) => {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const [addCategory, setAddCategory] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [ref, inView] = useInView({ skip: search });
  const [fileUpload] = useFileUpload();
  const [financeAddExcelFeeHead] = useFinanceAddExcelFeeHead();
  const { financeAllFeeHeadMaster, financeAllFeeHeadMasterLoading } =
    useFinanceAllFeeHeadMaster({
      data: {
        fid: fid,
        page: page,
        limit: 10,
        search: search,
      },
      skip: !fid,
    });

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);
  useEffect(() => {
    if (financeAllFeeHeadMaster?.list?.length) {
      let obj = nextPage(financeAllFeeHeadMaster?.list?.length);
      setState(() => obj);
    }
  }, [financeAllFeeHeadMaster?.list?.length]);
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
    if (e.target.files[0]) {
      setDisabled((pre) => !pre);
      const formData = new FormData();
      formData.append("file", e.target.files[0]);
      fileUpload({
        fileUpload: formData,
      })
        .then((res) => {
          if (res.data?.imageKey) {
            financeAddExcelFeeHead({
              fid: fid,
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

  const onToggle = () => {
    setAddCategory((pre) => !pre);
  };
  return (
    <>
      <div className={style.upload_excel_container}>
        <UploadExcelButton onExcelFileUpload={onExcelFileUpload} />
        <CreateButton
          label="add_new_fee_head"
          customStyle={{
            marginBlock: "0.5rem",
          }}
          onAction={onToggle}
        />
      </div>
      <div
        className={styleFinance.fm_search_full}
        style={{
          marginBottom: "0.5rem",
        }}
      >
        <section className={styleFinance.fm_search_full_container}>
          <div className={styleFinance.fm_search_full_container_inner}>
            <img
              className={styleFinance.fm_search_full_icon}
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

      {financeAllFeeHeadMaster?.list?.map((feeHead, index) =>
        financeAllFeeHeadMaster?.list?.length === index + 1 ? (
          <div key={feeHead?._id} ref={ref}>
            <FeeHeadCard feeHead={feeHead} fid={fid} />
          </div>
        ) : (
          <FeeHeadCard feeHead={feeHead} key={feeHead?._id} fid={fid} />
        )
      )}
      {financeAllFeeHeadMasterLoading ? (
        search ? (
          <QvipleLoader />
        ) : (
          <Loading />
        )
      ) : search ? (
        !financeAllFeeHeadMaster?.list?.length && (
          <EmptyMessage
            customStyleContainer={{
              marginTop: "1.5rem",
            }}
            title="No fee heads fuond related this search."
          />
        )
      ) : (
        !financeAllFeeHeadMaster?.list?.length && (
          <EmptyMessage
            customStyleContainer={{
              marginTop: "1.5rem",
            }}
            title="No fee heads added."
          />
        )
      )}
      {disabled && <QvipleLoader />}
      {addCategory && <AddFeesHead onClose={onToggle} fid={fid} />}
    </>
  );
};

export default FeeHead;
