import { useTranslation } from "react-i18next";
import style from "./FeesStructure.module.css";
import FinanceTabLink from "../FinanceTabLink";
import { useInstituteAllDepartment } from "../../../Hooks/ApiHooks/FinanceManager/finance-manager-api";
import { assestsUserFinanceUrl } from "../../../Services/UrlConfig/AssestsBaseUrl";
import Loading from "../../../Loader/Loading";

const DepartmentList = ({
  fid,
  carryParentState,
  accessRole,
  callApi,
  viewAs,
}) => {
  const { t } = useTranslation();
  const { instituteAllDepartment, instituteAllDepartmentLoading } =
    useInstituteAllDepartment({
      fid: fid,
      skip: !fid,
    });
  return (
    <div className={style.department_container}>
      {instituteAllDepartmentLoading && <Loading />}

      {instituteAllDepartment?.map((depart) => (
        <FinanceTabLink
          parentState={{
            ...carryParentState,
            did: depart?._id,
            dName: depart?.dName,
          }}
          activeUrl="type=fees&n=structure&u=batch"
          key={depart?._id}
          accessRole={accessRole}
          callApi={callApi}
        >
          <div className={style.department_card_container}>
            <img
              src={`${assestsUserFinanceUrl}/department.svg`}
              alt="department avatar"
              className={style.department_card_image}
            />
            <div>
              <h6 className={style.department_card_name}>
                {depart?.dName || ""}
              </h6>
              <p
                className={style.department_card_head}
                style={{
                  fontSize: "13px",
                  marginTop: "0.3rem",
                }}
              >
                {t("total_masters")} {" : "} {depart?.classMasterCount ?? 0}
              </p>
            </div>
          </div>
        </FinanceTabLink>
      ))}
    </div>
  );
};

export default DepartmentList;
