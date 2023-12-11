import { useSearchParams } from "react-router-dom";
import OverallFeeStatistics from "./OverallStatistics/OverallFeeStatistics";
import AdmissionFeeStatistics from "./AdmissionStatistics/AdmissionFeeStatistics";

const FeeStatistics = ({ fid, instituteId }) => {
  const [searchParams] = useSearchParams();

  return searchParams.get("n") === "admission" ? (
    <AdmissionFeeStatistics instituteId={instituteId} fid={fid} />
  ) : (
    <OverallFeeStatistics instituteId={instituteId} fid={fid} />
  );
};

export default FeeStatistics;
