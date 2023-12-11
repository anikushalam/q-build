import { useTranslation } from "react-i18next";
import style from "../../PlateformUser/PlateformUser.module.css";
import Modal from "../../../Ui/Modal/Modal";
import UserMemberContentWrapper from "../../../Ui/UserMember/UserMemberContentWrapper";
import {
  assestsNavbarUrl,
  assestsUserFinanceUrl,
} from "../../../Services/UrlConfig/AssestsBaseUrl";
import BorderBottom from "../../../Ui/Border/BorderBottom";
import { useDepartmentAllBatch } from "../../../Hooks/ApiHooks/FinanceManager/finance-manager-api";
import { useEffect, useState } from "react";
import SelectBatchCard from "./SelectBatchCard";

const SelectBatch = ({ onClose, onSelect, did }) => {
  const { t } = useTranslation();
  const [departmentList, setDepartmentList] = useState([]);
  const { departmentAllBatch, departmentAllBatchLoading } =
    useDepartmentAllBatch({
      did: did,
      skip: !did,
    });
  useEffect(() => {
    if (departmentAllBatch?.length) {
      setDepartmentList(departmentAllBatch);
    }
  }, [departmentAllBatch?.length]);
  const onSearchEvent = (e) => {
    if (e.target.value) {
      let filterData = getFilter(departmentAllBatch, e.target.value);
      setDepartmentList(filterData);
    } else {
      setDepartmentList(departmentAllBatch);
    }
  };

  const onSelectBatch = (value) => {
    onSelect(value);
  };
  return (
    <Modal onClose={onClose}>
      <div className={style.modal_container}>
        <UserMemberContentWrapper>
          <div className={style.modal_container_outer_header}>
            <div className={style.modal_container_header}>
              <h6>{t("select_batch")}</h6>
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

          {departmentList?.map((batch) => (
            <SelectBatchCard
              batch={batch}
              key={batch?._id}
              onSelect={onSelectBatch}
            />
          ))}
        </UserMemberContentWrapper>
      </div>
    </Modal>
  );
};

export default SelectBatch;

const getFilter = (list, search) => {
  return list?.filter((val) => {
    if (val?.batchName?.includes(search)) {
      return val;
    }
    return null;
  });
};
