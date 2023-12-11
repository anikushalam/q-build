import React, { useEffect, useState } from "react";
import style from "../../PromoteDepartment/PromoteDepartment.module.css";
import { useTranslation } from "react-i18next";
import { useUpdateCertificateAuthorityFund } from "../../../../../hooks/member_tab/department-api";
import JoinFormInput from "../../../../../JoiningForm/Student/Form/JoinFormInput";
import QLoader from "../../../../../Loader/QLoader";

const CertificateFund = ({
  instituteId,
  fundCharges,
  onRefetch,
  issuedCOunt,
}) => {
  const { t } = useTranslation();
  const [state, setState] = useState({
    bona_charges: "",
    leaving_charges: "",
    transfer_charges: "",
    migration_charges: "",
  });
  const [disabled, setDisabled] = useState(false);
  const [updateCertificateAuthorityFund] = useUpdateCertificateAuthorityFund();

  useEffect(() => {
    if (fundCharges) {
      setState({
        bona_charges: fundCharges?.bona_charges ?? "",
        leaving_charges: fundCharges?.leaving_charges ?? "",
        transfer_charges: fundCharges?.transfer_charges ?? "",
        migration_charges: fundCharges?.migration_charges ?? "",
      });
    }
  }, [fundCharges]);
  const onUpdate = (e) => {
    setState((prev) => ({
      ...prev,
      [e.target.name]: +e.target.value,
    }));
  };

  const onSave = () => {
    if (instituteId) {
      setDisabled((pre) => !pre);
      updateCertificateAuthorityFund({
        id: instituteId,
        certificateFund: state,
      })
        .then(() => {
          onRefetch();
          setDisabled((pre) => !pre);
        })
        .catch({});
    }
  };
  return (
    <>
      <div
        className={style.with_search}
        style={{
          marginTop: "1rem",
        }}
      >
        <h6>{t("certificate_fund")}</h6>
        <h6
          style={{
            fontWeight: "400",
            fontSize: "13px",
          }}
        >
          {t("total_certificate_issue")} {issuedCOunt}
        </h6>
      </div>

      <JoinFormInput
        labelText={t("bonafide_certificate_charges")}
        placeholder={t("bonafide_certificate_charges_placeholder")}
        name={"bona_charges"}
        value={state?.bona_charges}
        type={"tel"}
        onChange={onUpdate}
      />
      <JoinFormInput
        labelText={t("leaving_certificate_charges")}
        placeholder={t("leaving_certificate_charges_placeholder")}
        name={"leaving_charges"}
        value={state?.leaving_charges}
        type={"tel"}
        onChange={onUpdate}
      />
      <JoinFormInput
        labelText={t("transfer_certificate_charges")}
        placeholder={t("transfer_certificate_charges_placeholder")}
        name={"transfer_charges"}
        value={state?.transfer_charges}
        type={"tel"}
        onChange={onUpdate}
      />
      <JoinFormInput
        labelText={t("migration_certificate_charges")}
        placeholder={t("migration_certificate_charges_placeholder")}
        name={"migration_charges"}
        value={state?.migration_charges}
        type={"tel"}
        onChange={onUpdate}
      />
      <button
        className={style.select_application_btn}
        style={{
          width: "100%",
          justifyContent: "center",
        }}
        onClick={onSave}
      >
        {t("save")}
      </button>
      {disabled && <QLoader />}
    </>
  );
};

export default CertificateFund;
