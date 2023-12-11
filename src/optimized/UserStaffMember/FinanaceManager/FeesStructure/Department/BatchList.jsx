import style from "./FeesConfig.module.css";
import { useTranslation } from "react-i18next";
import FinanceTabLink from "../../FinanceTabLink";
import { useDepartmentAllBatch } from "../../../../Hooks/ApiHooks/FinanceManager/finance-manager-api";
import { assestsUserFinanceUrl } from "../../../../Services/UrlConfig/AssestsBaseUrl";
import dayjs from "dayjs";
import Loading from "../../../../Loader/Loading";
const BatchList = ({ departmentId, carryParentState }) => {
  const { t } = useTranslation();
  const { departmentAllBatch, departmentAllBatchLoading } =
    useDepartmentAllBatch({
      did: departmentId,
      skip: !departmentId,
    });

  return (
    <>
      {departmentAllBatch?.map((batch) => (
        <FinanceTabLink
          parentState={{
            ...carryParentState,
            batchId: batch?._id,
            batchName: batch?.batchName,
          }}
          activeUrl="type=fees&n=structure&u=standard"
          key={batch?._id}
        >
          <div className={style.class_container}>
            <img
              className={style.oneRowImage}
              src={`${assestsUserFinanceUrl}/class.svg`}
              alt="batch icon"
            />
            <div className={style.class_container_text}>
              <h6>{batch?.batchName}</h6>
              <p>
                {t("created_on")}
                {" : "}
                {dayjs(batch.createdAt).format("DD MMM YYYY")}
              </p>
            </div>
          </div>
        </FinanceTabLink>
      ))}
      {departmentAllBatchLoading && <Loading />}
    </>
  );
};

export default BatchList;
