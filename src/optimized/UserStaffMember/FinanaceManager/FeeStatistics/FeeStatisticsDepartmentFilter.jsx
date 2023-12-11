import { useInstituteAllDepartment } from "../../../Hooks/ApiHooks/FinanceManager/finance-manager-api";
import CustomSelectDepartment from "../../../Ui/Select/CustomSelectDepartment";
import { useTranslation } from "react-i18next";

const FeeStatisticsDepartmentFilter = ({ fid, onSelect, onlyDepartment }) => {
  const { t } = useTranslation();
  const { instituteAllDepartment } = useInstituteAllDepartment({
    fid: fid,
    skip: !fid,
  });
  return (
    <>
      {onlyDepartment ? (
        <CustomSelectDepartment
          selectLabel={t("select_department")}
          selectedValue={t("select_department_placeholder")}
          options={
            instituteAllDepartment?.length > 0 ? instituteAllDepartment : []
          }
          onClick={onSelect}
          isFull
        />
      ) : (
        <CustomSelectDepartment
          selectLabel={t("select_department")}
          selectedValue={t("select_department_placeholder")}
          options={
            instituteAllDepartment?.length > 0
              ? [
                  "ALL",
                  "By Bank",
                  "Particular Student",
                  ...instituteAllDepartment,
                ]
              : ["ALL", "By Bank", "Particular Student"]
          }
          onClick={onSelect}
          isFull
        />
      )}
    </>
  );
};

export default FeeStatisticsDepartmentFilter;
