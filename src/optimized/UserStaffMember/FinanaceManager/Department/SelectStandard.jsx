import { useDepartmentBatchAllClassMaster } from "../../../Hooks/ApiHooks/FinanceManager/finance-manager-api";
import BorderBottom from "../../../Ui/Border/BorderBottom";
import Modal from "../../../Ui/Modal/Modal";
import UserMemberContentWrapper from "../../../Ui/UserMember/UserMemberContentWrapper";
import { customDebounce } from "../../../Utils/Functions/debounce";
import { nextPage } from "../../../Utils/Functions/nextPage";
import { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import SelectStandardCard from "./SelectStandardCard";
import { useTranslation } from "react-i18next";
import style from "../../PlateformUser/PlateformUser.module.css";
import {
  assestsNavbarUrl,
  assestsUserFinanceUrl,
} from "../../../Services/UrlConfig/AssestsBaseUrl";
import AddButton from "../../../Ui/Button/AddButton";
import Loading from "../../../Loader/Loading";

const SelectStandard = ({
  onClose,
  did,
  bid,
  onSave,
  clsListId,
  setClsListId,
}) => {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [ref, inView] = useInView({ skip: search });
  const [selectedId, setSelectedId] = useState(clsListId ?? []);
  const [clsId, setClsId] = useState([]);

  const {
    departmentBatchAllClassMaster,
    departmentBatchAllClassMasterLoading,
  } = useDepartmentBatchAllClassMaster({
    data: {
      did: did,
      bid: bid,
      page: page,
      limit: 10,
      search: search,
    },
    skip: !did ? !bid : !did,
  });
  useEffect(() => {
    if (clsListId?.length) {
      setSelectedId(clsListId);
    }
  }, [clsListId?.length]);
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);
  useEffect(() => {
    if (departmentBatchAllClassMaster?.length) {
      nextPage(departmentBatchAllClassMaster?.length, setState);
    }
  }, [departmentBatchAllClassMaster?.length]);

  const onDebounce = useCallback(
    customDebounce((val) => setSearch(val), 500),
    []
  );

  const onSearchEvent = (e) => {
    onDebounce(e.target.value);
  };

  const onSelect = (data) => {
    if (selectedId?.includes(data?._id)) {
      setSelectedId((prev) => prev?.filter((val) => val !== data?._id));
      setClsListId((prev) => prev?.filter((val) => val !== data?._id));
      setClsId((prev) => prev?.filter((val) => val?._id !== data?._id));
    } else {
      setSelectedId((pre) => [...pre, data?._id]);
      setClsListId((pre) => [...pre, data?._id]);
      setClsId((prev) => [...prev, data]);
    }
  };

  const onSaveFinanceFees = () => {
    let arr = [];
    for (let cv of clsId) {
      for (let dv of cv?.classDivision) {
        arr.push(dv?._id);
      }
    }
    onSave(arr);
  };
  return (
    <Modal onClose={onClose}>
      <div className={style.modal_container}>
        <UserMemberContentWrapper>
          <div className={style.modal_container_outer_header}>
            <div className={style.modal_container_header}>
              <h6>{t("select_standard")}</h6>
            </div>
            <div className={style.modal_container_header_btn}>
              <AddButton label="select" onAction={onSaveFinanceFees} />
              <img
                src={`${assestsUserFinanceUrl}/close.svg`}
                alt="close icon"
                onClick={onClose}
              />
            </div>
          </div>
        </UserMemberContentWrapper>
        <BorderBottom />
        <UserMemberContentWrapper
          customStyle={{
            paddingTop: "0",
            paddingBottom: "1rem",
          }}
        >
          <div
            className={style.assign_search_container}
            style={{
              marginBottom: "0.8rem",
            }}
          >
            <input
              type="text"
              placeholder={t("search")}
              className={style.assign_search_input}
              onChange={onSearchEvent}
            />
            <img
              src={`${assestsNavbarUrl}/navbar-search.svg`}
              alt="search icon"
            />
          </div>

          {departmentBatchAllClassMasterLoading && <Loading />}
          {departmentBatchAllClassMaster?.map((cls, index) =>
            departmentBatchAllClassMaster?.length === index + 1 ? (
              <div key={cls?._id} ref={ref}>
                <SelectStandardCard
                  cls={cls}
                  selectedId={selectedId}
                  onSelect={onSelect}
                />
              </div>
            ) : (
              <SelectStandardCard
                cls={cls}
                key={cls?._id}
                selectedId={selectedId}
                onSelect={onSelect}
              />
            )
          )}
        </UserMemberContentWrapper>
      </div>
    </Modal>
  );
};

export default SelectStandard;
