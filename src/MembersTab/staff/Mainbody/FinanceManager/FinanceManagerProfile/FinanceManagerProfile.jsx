import React, { useEffect, useState } from "react";
import MiddleContent from "./MiddleContent/MiddleContent";
import UniversalDepartmentMiddleHead from "../../../../UniversalDepartmentMiddleHead/UniversalDepartmentMiddleHead";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { useFinanceDetailManager } from "../../../../../hooks/member_tab/finance-api";
import PasswordToggle from "../../PasswordManagement/PasswordToggle";
import PasswordProtectionLogin from "../../PasswordManagement/PasswordProtectionLogin";
import { useSelector } from "react-redux";

function FinanceManagerProfile({ onClickValue, carryParentState, role, mid }) {
  const f_password = useSelector(
    (state) => state.idChange.passwordManager.financePassword
  );
  const [activatedRole, setActivatedRole] = useState("");
  const [password, setPassword] = useState(false);
  const [passwordLogin, setPasswordLogin] = useState(false);

  const { t } = useTranslation();
  const getQuery = useLocation();
  const { financeDetailManager, financeDetailManagerRefetch } =
    useFinanceDetailManager({
      data: {
        fid: role ? onClickValue?.finance : `${onClickValue}`,
        mod_id: role ? mid : "",
      },
      skip: onClickValue ? !onClickValue : !onClickValue?.finance,
    });

  useEffect(() => {
    if (onClickValue || onClickValue?.finance) financeDetailManagerRefetch();
  }, [onClickValue, onClickValue?.finance, financeDetailManagerRefetch]);

  useEffect(() => {
    if (financeDetailManager?.roles?.length) {
      if (role) {
        let modId = onClickValue?._id;
        for (let moder of financeDetailManager?.roles) {
          if (modId === moder?._id) {
            setActivatedRole(moder);
            break;
          }
        }
      }
    }
    if (financeDetailManager?.finance?.enable_protection) {
      if (f_password) {
      } else {
        setPasswordLogin(true);
      }
    }
  }, [
    financeDetailManager?.roles,
    financeDetailManager?.finance?.enable_protection,
  ]);
  return (
    <>
      {getQuery?.search?.substring(9) !== "category" &&
        getQuery?.search?.substring(9) !== "structure" && (
          <UniversalDepartmentMiddleHead
            coverKey={financeDetailManager?.finance?.cover}
            coverId={financeDetailManager?.finance?.coverId}
            defaultCover="/images/profileAndCover/finance-cover.png"
            textLarge={t("finace_manager")}
            textSmall={`${financeDetailManager?.finance?.financeHead?.staffFirstName} ${financeDetailManager?.finance?.financeHead?.staffMiddleName} ${financeDetailManager?.finance?.financeHead?.staffLastName}`}
            viewAs={activatedRole?.access_role ? false : true}
            enableLock={financeDetailManager?.finance?.enable_protection}
            setPassword={setPassword}
            openAs="FINANCE_MANAGER"
          />
        )}
      <MiddleContent
        tabData={financeDetailManager?.finance}
        carryParentState={carryParentState}
        accessRole={activatedRole?.access_role}
        callApi={financeDetailManager?.finance?._id ? true : false}
      />
      {password && (
        <PasswordToggle
          onClose={() => setPassword(false)}
          enableLock={financeDetailManager?.finance?.enable_protection}
          faid={financeDetailManager?.finance?._id}
          onRefetch={financeDetailManagerRefetch}
          openAs={"Finance_Login"}
        />
      )}
      {passwordLogin && (
        <PasswordProtectionLogin
          onClose={() => setPasswordLogin(false)}
          faid={financeDetailManager?.finance?._id}
          openAs={"Finance_Login"}
        />
      )}
    </>
  );
}

export default FinanceManagerProfile;
