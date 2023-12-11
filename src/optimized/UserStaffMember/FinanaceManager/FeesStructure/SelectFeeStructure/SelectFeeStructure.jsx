import { useFinanceAllFeeStructure } from "@/Hooks/ApiHooks/FinanceManager/finance-manager-api";
import Loading from "@/Loader/Loading";
import { customDebounce } from "@/Utils/Functions/debounce";
import { nextPage } from "@/Utils/Functions/nextPage";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import style from "../FeesStructure.module.css";
import Modal from "@/Ui/Modal/Modal";
import UserMemberContentWrapper from "@/Ui/UserMember/UserMemberContentWrapper";
import BorderBottom from "@/Ui/Border/BorderBottom";
import {
  assestsNavbarUrl,
  assestsUserFinanceUrl,
} from "@/Services/UrlConfig/AssestsBaseUrl";
import SelectFeeStructureCard from "./SelectFeeStructureCard";
import CreateButton from "@/Ui/Button/CreateButton";
const SelectFeeStructure = ({
  onClose,
  did,
  bid,
  cmid,
  selectedStructure,
  onSelectedStrucutre,
}) => {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [ref, inView] = useInView({ skip: search });
  const [selected, setSelected] = useState("");
  const { financeAllFeeStructure, financeAllFeeStructureLoading } =
    useFinanceAllFeeStructure({
      data: {
        did: did,
        page: page,
        limit: 10,
        search: search,
        filterBy: cmid,
        batchBy: bid,
      },
      skip: !did,
    });
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);
  useEffect(() => {
    if (financeAllFeeStructure?.length) {
      nextPage(financeAllFeeStructure?.length, setState);
    }
  }, [financeAllFeeStructure?.length]);

  const onDebounce = useCallback(
    customDebounce((val) => setSearch(val), 500),
    []
  );

  const onSearchEvent = (e) => {
    onDebounce(e.target.value);
  };

  const onSelect = (data) => {
    setSelected(data);
  };

  return (
    <>
      {!selected ? (
        <Modal onClose={onClose}>
          <div
            className={style.modal_container}
            style={{
              maxWidth: "40rem",
            }}
          >
            <UserMemberContentWrapper>
              <div className={style.modal_container_outer_header}>
                <div className={style.modal_container_header}>
                  <h6>{t("edit_fees_structure")}</h6>
                </div>
                <img
                  src={`${assestsUserFinanceUrl}/close.svg`}
                  alt="close icon"
                  onClick={onClose}
                />
              </div>
            </UserMemberContentWrapper>
            <BorderBottom />
            <UserMemberContentWrapper
              customStyle={{
                paddingTop: "0.3rem",
              }}
            >
              <div
                className={style.fm_search_full_container_inner}
                style={{
                  marginBottom: "0.6rem",
                }}
              >
                <input
                  type="text"
                  placeholder={t("search")}
                  className={style.fm_search_full_container_inner}
                  onChange={onSearchEvent}
                />
                <img
                  src={`${assestsNavbarUrl}/navbar-search.svg`}
                  alt="search icon"
                  className={style.fm_search_full_icon}
                />
              </div>
              {financeAllFeeStructureLoading && <Loading />}
              {financeAllFeeStructure?.map((structure, index) =>
                financeAllFeeStructure?.length === index + 1 ? (
                  <div key={structure?._id} ref={ref}>
                    <SelectFeeStructureCard
                      structure={structure}
                      selectedStructure={selectedStructure}
                      onSelect={onSelect}
                    />
                  </div>
                ) : (
                  <SelectFeeStructureCard
                    structure={structure}
                    key={structure?._id}
                    selectedStructure={selectedStructure}
                    onSelect={onSelect}
                  />
                )
              )}
            </UserMemberContentWrapper>
          </div>
        </Modal>
      ) : (
        <Modal onClose={onClose}>
          <div className={style.modal_container}>
            <UserMemberContentWrapper>
              <div className={style.modal_container_outer_header}>
                <div className={style.modal_container_header}>
                  <h6>{t("fee_structure")}</h6>
                </div>
                <img
                  src={`${assestsUserFinanceUrl}/close.svg`}
                  alt="close icon"
                  onClick={() => onSelect("")}
                />
              </div>
            </UserMemberContentWrapper>
            <BorderBottom />
            <UserMemberContentWrapper
              customStyle={{
                paddingTop: "0.3rem",
              }}
            >
              <div className={style.fee_middle_section}>
                <p>{t("fee_structure_of_student_is")}</p>
                <h6>{selected?.category_master?.category_name}</h6>
                <p>
                  {" "}
                  {t("total_admission_fees")} {" : "} {t("rs")}{" "}
                  <span
                    style={{
                      fontWeight: "600",
                    }}
                  >
                    {selected?.total_admission_fees ?? 0}
                  </span>
                </p>
                <p>
                  {t("applicable_fees_amount")} {" : "} {t("rs")}{" "}
                  <span
                    style={{
                      fontWeight: "600",
                    }}
                  >
                    {selected?.applicable_fees ?? 0}
                  </span>
                </p>
              </div>
              <CreateButton label="confirm" onAction={onSelectedStrucutre} />
            </UserMemberContentWrapper>
          </div>
        </Modal>
      )}
    </>
  );
};

export default SelectFeeStructure;
