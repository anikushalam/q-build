import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useAllDepartment } from "../../../../../Department/Institute/Components/DepartmentApi/depart-api";
import style from "../../../../../MembersTab/staff/Mainbody/Hostel/HostelFeeStructure/HostelFeeStructure.module.css";
import SelectDepartmentCard from "./SelectDepartmentCard";
import PopupWrapper from "../../../../../MembersTab/staff/Mainbody/FinanceManager/FeesStructure/PopupWrapper";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
const SelectSiteDepartment = ({ onClose }) => {
  const { t } = useTranslation();
  const ids = useSelector((state) => state.idChange);
  const [showingDataLoading, setShowingDataLoading] = React.useState(true);
  const { allDepartment, allDepartmentRefetch } = useAllDepartment({
    id: ids?.id,
    skip: !ids?.id,
  });
  React.useEffect(() => {
    if (allDepartment?.institute?.depart) {
      setShowingDataLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allDepartment?.institute?.depart]);
  React.useEffect(() => {
    if (ids?.id) allDepartmentRefetch();
  }, [ids?.id, allDepartmentRefetch]);
  return (
    <PopupWrapper onClose={onClose}>
      <div
        className={style.add_category_modal}
        style={{
          minHeight: "20rem",
          minWidth: "30rem",
          maxWidth: "40rem",
        }}
      >
        <div className={style.add_category_modal_title}>
          <h6>{t("select_department")}</h6>
          <img src="/images/close-post-icon.svg" onClick={onClose} alt="" />
        </div>
        <BorderBottom
          customStyle={{
            width: "100%",
            marginTop: "0.5rem",
            marginBottom: "0.5rem",
          }}
        />
        {allDepartment?.institute?.depart?.map((depart) => (
          <SelectDepartmentCard depart={depart} key={depart?._id} />
        ))}
        {showingDataLoading && <QvipleLoading />}
      </div>
    </PopupWrapper>
  );
};

export default SelectSiteDepartment;
