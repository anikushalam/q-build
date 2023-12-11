import { assestsUserFinanceUrl } from "../../../../Services/UrlConfig/AssestsBaseUrl";
import FinanceTabLink from "../../FinanceTabLink";
import style from "./FeesConfig.module.css";
import { useDepartmentAllClassMaster } from "../../../../Hooks/ApiHooks/FinanceManager/finance-manager-api";
import Loading from "../../../../Loader/Loading";
const StandardList = ({ carryParentState, departmentId, instituteId }) => {
  const { departmentAllClassMaster, departmentAllClassMasterLoading } =
    useDepartmentAllClassMaster({
      data: {
        id: instituteId,
        did: departmentId,
      },
      skip: !departmentId
        ? !departmentId
        : !instituteId
        ? !instituteId
        : !instituteId,
    });

  return (
    <>
      {departmentAllClassMaster?.map((cls) => (
        <FinanceTabLink
          parentState={{
            ...carryParentState,
            clsId: cls?._id,
            clsName: cls?.className,
          }}
          activeUrl="type=fees&n=structure"
          key={cls?._id}
        >
          <div className={style.class_container}>
            <img
              className={style.oneRowImage}
              src={`${assestsUserFinanceUrl}/class.svg`}
              alt="batch icon"
            />
            <div className={style.class_container_text}>
              <h6>{cls?.className}</h6>
            </div>
          </div>
        </FinanceTabLink>
      ))}
      {departmentAllClassMasterLoading && <Loading />}
    </>
  );
};

export default StandardList;
