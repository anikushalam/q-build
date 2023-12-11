import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useOneDepartmentAllClassMaster } from "../../../../../Department/Institute/Components/DepartmentApi/depart-api";
import { useGetAllStandardInstitute } from "../../../../../hooks/member_tab/finance-api";
import CustomSelectInput from "../../../../../JoiningForm/Student/Form/CustomSelectInput";

const SelectStandard = ({
  instituteId,
  departmentId,
  classMaster,
  onSelectOption,
  filled,
  flowAs,
}) => {
  const { t } = useTranslation();
  const { allClassMaster, allClassMasterRefetch } =
    useOneDepartmentAllClassMaster({
      data: {
        id: instituteId,
        did: departmentId,
      },
      skip:
        flowAs !== "Hostel_Manager"
          ? departmentId && instituteId
            ? false
            : true
          : true,
    });

  useEffect(() => {
    if (instituteId && departmentId && flowAs !== "Hostel_Manager") {
      allClassMasterRefetch();
    }
  }, [departmentId, instituteId, flowAs, allClassMasterRefetch]);
  const { getAllStandardInstitute, getAllStandardInstituteRefetch } =
    useGetAllStandardInstitute({
      id: instituteId,
      skip: flowAs === "Hostel_Manager" ? !instituteId : true,
    });

  useEffect(() => {
    if (instituteId && flowAs === "Hostel_Manager") {
      getAllStandardInstituteRefetch();
    }
  }, [instituteId, flowAs, getAllStandardInstituteRefetch]);
  // console.info("this is masters", allClassMaster);
  return (
    <>
      <CustomSelectInput
        selectLabel={t("select_standard")}
        selectedValue={t("please_select_the_standard_master")}
        value={classMaster}
        onClick={onSelectOption}
        name="classMaster"
        options={
          flowAs === "Hostel_Manager"
            ? getAllStandardInstitute?.all_masters ?? []
            : allClassMaster?.classMaster ?? []
        }
        errorShow={filled["classMaster"]}
        viewAs={flowAs === "Hostel_Manager" ? true : false}
      />
    </>
  );
};

export default SelectStandard;
