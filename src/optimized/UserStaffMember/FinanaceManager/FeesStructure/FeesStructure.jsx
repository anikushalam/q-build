import { useSearchParams } from "react-router-dom";
import CategoryCountWithDepartmentList from "./CategoryCountWithDepartmentList";
import FeesCategoryList from "./FeesCategoryList";
import style from "./FeesStructure.module.css";
import FeeStructureConfig from "./Department/FeeStructureConfig";
const FeesStructure = ({ fid, instituteId, categoryCount, masterCount }) => {
  const [searchParams] = useSearchParams();

  return (
    <div className={style.fess_container}>
      {["category", "head"].includes(searchParams.get("n")) ? (
        <FeesCategoryList fid={fid} />
      ) : searchParams.get("n") === "structure" ? (
        <FeeStructureConfig instituteId={instituteId} fid={fid} />
      ) : searchParams.get("type") === "fees" ? (
        <CategoryCountWithDepartmentList
          instituteId={instituteId}
          masterCount={masterCount}
          categoryCount={categoryCount}
          fid={fid}
        />
      ) : null}
    </div>
  );
};

export default FeesStructure;
