import { useTranslation } from "react-i18next";
import style from "../../PlateformUser/PlateformUser.module.css";
import Modal from "../../../Ui/Modal/Modal";
import UserMemberContentWrapper from "../../../Ui/UserMember/UserMemberContentWrapper";
import {
  assestsNavbarUrl,
  assestsUserFinanceUrl,
} from "../../../Services/UrlConfig/AssestsBaseUrl";
import BorderBottom from "../../../Ui/Border/BorderBottom";
import { useInstituteAllDepartment } from "../../../Hooks/ApiHooks/FinanceManager/finance-manager-api";
import SelectDepartmentCard from "./SelectDepartmentCard";
import { useEffect, useState } from "react";
import TileWrapper from "../../../Ui/Tab/Tile/TileWrapper";
import TileCard from "../../../Ui/Tab/Tile/TileCard";
import { departmentLabel } from "../../../Constant/Statistics/statistics_constant";
import Loading from "../../../Loader/Loading";

const SelectDepartment = ({ onClose, onSelect, fid, isType }) => {
  const { t } = useTranslation();
  const [departmentList, setDepartmentList] = useState([]);
  const [departmentType, setDepartmentType] = useState("");
  const { instituteAllDepartment, instituteAllDepartmentLoading } =
    useInstituteAllDepartment({
      fid: fid,
      skip: !fid,
    });
  useEffect(() => {
    if (instituteAllDepartment?.length) {
      setDepartmentList(instituteAllDepartment);
    }
  }, [instituteAllDepartment?.length]);
  const onSearchEvent = (e) => {
    if (e.target.value) {
      let filterData = getFilter(instituteAllDepartment, e.target.value);
      setDepartmentList(filterData);
    } else {
      setDepartmentList(instituteAllDepartment);
    }
  };

  const onSelectDept = (value) => {
    onSelect(value);
  };
  const onDepartmentTile = (val) => {
    if (val === "ALL") {
      onSelect(val);
    }
    setDepartmentType(val);
  };
  return (
    <Modal onClose={onClose}>
      <div className={style.modal_container}>
        <UserMemberContentWrapper>
          <div className={style.modal_container_outer_header}>
            <div className={style.modal_container_header}>
              <h6>{t("select_department")}</h6>
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
          {isType && (
            <TileWrapper label="department_type">
              {departmentLabel?.map((tile) => (
                <TileCard
                  key={tile?.key}
                  tile={tile}
                  onTile={onDepartmentTile}
                  activeTile={departmentType}
                />
              ))}
            </TileWrapper>
          )}

          {instituteAllDepartmentLoading && <Loading />}
          {departmentList?.map((department) => (
            <SelectDepartmentCard
              department={department}
              key={department?._id}
              onSelect={onSelectDept}
            />
          ))}
        </UserMemberContentWrapper>
      </div>
    </Modal>
  );
};

export default SelectDepartment;

const getFilter = (list, search) => {
  return list?.filter((val) => {
    if (val?.dName?.includes(search)) {
      return val;
    }
    return null;
  });
};
