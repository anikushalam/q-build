import { useTranslation } from "react-i18next";
import style from "../FeesStructure.module.css";
import CreateButton from "../../../../Ui/Button/CreateButton";
import UserMemberContentWrapper from "../../../../Ui/UserMember/UserMemberContentWrapper";
import BorderBottom from "../../../../Ui/Border/BorderBottom";
import Modal from "../../../../Ui/Modal/Modal";
import { useInView } from "react-intersection-observer";
import { useCallback, useEffect, useState } from "react";
import { useFinanceAllFeeHeadMaster } from "../../../../Hooks/ApiHooks/FinanceManager/finance-manager-api";
import { nextPage } from "../../../../Utils/Functions/nextPage";
import { customDebounce } from "../../../../Utils/Functions/debounce";
import {
  assestsNavbarUrl,
  assestsUserFinanceUrl,
} from "../../../../Services/UrlConfig/AssestsBaseUrl";
import FeeHeadSelectCard from "../FeeMaster/FeeHeadSelectCard";
import Loading from "../../../../Loader/Loading";
const SelectMasterFeeHead = ({ onClose, fid, setFeeHead }) => {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [ref, inView] = useInView({ skip: search });
  const [selectedFee, setSelectedFee] = useState([]);
  const [selectedFeeId, setSelectedFeeId] = useState([]);
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
    if (financeAllFeeHeadMaster?.length) {
      nextPage(financeAllFeeHeadMaster?.length, setState);
    }
  }, [financeAllFeeHeadMaster?.length]);

  const onDebounce = useCallback(
    customDebounce((val) => setSearch(val), 500),
    []
  );
  const onSearchEvent = (e) => {
    onDebounce(e.target.value);
  };
  const onSelectButton = () => {
    setFeeHead((prev) => [...prev, ...selectedFee]);
    onClose();
  };
  const onSelect = (val) => {
    const objProperties = {
      head_name: val?.master_name,
      head_amount: val?.master_amount,
      master: val?._id,
    };
    if (selectedFeeId?.includes(val?._id)) {
      let selectedIndex = selectedFeeId?.indexOf(val?._id);
      let selectedFeeItem = [];
      for (let i = 0; i < selectedFee?.length; i++) {
        if (i === selectedIndex) {
        } else {
          selectedFeeItem.push(selectedFee[i]);
        }
      }
      setSelectedFeeId((prevState) =>
        prevState?.filter((obj) => obj !== val?._id)
      );
      setSelectedFee(selectedFeeItem);
    } else {
      setSelectedFeeId((prevState) => [...prevState, val?._id]);
      setSelectedFee((prevState) => [...prevState, objProperties]);
    }
  };
  return (
    <Modal>
      <div className={style.modal_container}>
        <UserMemberContentWrapper>
          <div className={style.modal_container_outer_header}>
            <div className={style.modal_container_header}>
              <img
                src={`${assestsUserFinanceUrl}/back-arrow.svg`}
                alt="close icon"
                onClick={onClose}
              />
              <h6>{t("select_fee_heads")}</h6>
            </div>
            <CreateButton
              label="select"
              customStyle={{
                margin: "0",
              }}
              onAction={onSelectButton}
            />
          </div>
        </UserMemberContentWrapper>
        <BorderBottom />
        <UserMemberContentWrapper
          customStyle={{
            paddingTop: "0",
          }}
        >
          <div
            className={style.fm_search_full}
            style={{
              marginBottom: "0.5rem",
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
          {financeAllFeeHeadMasterLoading && <Loading />}

          {financeAllFeeHeadMaster?.map((feeHead, index) =>
            financeAllFeeHeadMaster?.length === index + 1 ? (
              <div key={feeHead?._id} ref={ref}>
                <FeeHeadSelectCard
                  feeHead={feeHead}
                  fid={fid}
                  onSelect={onSelect}
                  selectedFeeId={selectedFeeId}
                />
              </div>
            ) : (
              <FeeHeadSelectCard
                feeHead={feeHead}
                key={feeHead?._id}
                fid={fid}
                onSelect={onSelect}
                selectedFeeId={selectedFeeId}
              />
            )
          )}
        </UserMemberContentWrapper>
      </div>
    </Modal>
  );
};

export default SelectMasterFeeHead;
