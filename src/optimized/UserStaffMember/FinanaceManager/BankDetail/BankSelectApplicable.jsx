import { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import style from "./BankDetail.module.css";
import BankSelectApplicableModal from "./BankSelectApplicableModal";
import { assestsUserFinanceUrl } from "../../../Services/UrlConfig/AssestsBaseUrl";

const BankSelectApplicable = ({
  errorField,
  applicableFor,
  libraryId,
  transportId,
  hostelId,
  setApplicablFor,
  fid,
}) => {
  const { t } = useTranslation();
  const [openApplicable, setOpenApplicable] = useState(false);
  const onToggle = useCallback(() => {
    setOpenApplicable((pre) => !pre);
  }, []);
  return (
    <>
      <div className={style.applicable_btn_container}>
        <button className={style.applicable_btn} onClick={onToggle}>
          <div>{t("account_applicable_for")}</div>
          <img src={`${assestsUserFinanceUrl}/forward.svg`} alt="next step" />
        </button>
        {applicableFor?.flow_name && (
          <h6 className={style.applicable_text}>
            {applicableFor?.depart_arr?.length > 1
              ? `${applicableFor?.depart_arr?.length} department selected`
              : applicableFor?.flow_name}
          </h6>
        )}
      </div>
      {errorField["flow_id"] && (
        <p className={style.applicable_text_error}>
          * {t("form_require_label")}
        </p>
      )}
      {openApplicable && (
        <BankSelectApplicableModal
          fid={fid}
          onToggle={onToggle}
          libraryId={libraryId}
          transportId={transportId}
          hostelId={hostelId}
          setApplicablFor={setApplicablFor}
        />
      )}
    </>
  );
};

export default memo(BankSelectApplicable);
