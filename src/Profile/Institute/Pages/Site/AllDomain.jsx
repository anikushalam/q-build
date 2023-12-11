import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  useAllDomainPlateform,
  useLinkedInstituteDomain,
} from "../../../../hooks/plateform/plateform-api";
import QLoader from "../../../../Loader/QLoader";
import QvipleLoading from "../../../../Loader/QvipleLoading";
import PopupWrapper from "../../../../MembersTab/staff/Mainbody/FinanceManager/FeesStructure/PopupWrapper";
import style from "./SiteEdit.module.css";

const AllDomain = ({ onClose, instituteId }) => {
  const { t } = useTranslation();
  const [disabled, setDisabled] = useState(false);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [linkedInstituteDomain] = useLinkedInstituteDomain();
  const { allDomainPlateform, allDomainPlateformRefetch } =
    useAllDomainPlateform({
      skip: false,
    });

  useEffect(() => {
    if (
      allDomainPlateform?.all_domain?.length === 0 ||
      allDomainPlateform?.all_domain
    )
      setShowingDataLoading(false);
  }, [allDomainPlateform?.all_domain]);
  const onDomainSelect = (id) => {
    setDisabled((pre) => !pre);
    linkedInstituteDomain({
      subId: id,
      insId: instituteId,
    })
      .then(() => {
        setDisabled((pre) => !pre);
        allDomainPlateformRefetch();
        onClose();
      })
      .catch({});
  };
  return (
    <PopupWrapper onClose={onClose}>
      <div className={style.domain_container}>
        <h6>{t("select_your_fevorite_domain")}</h6>
        {allDomainPlateform?.all_domain?.map((dom) => (
          <h6
            onClick={() => onDomainSelect(dom?._id)}
            className={style.sub_domain}
            title="Select Domain"
          >
            {dom?.sub_domain_path}
          </h6>
        ))}
        {showingDataLoading && <QvipleLoading />}
      </div>
      {disabled && <QLoader />}
    </PopupWrapper>
  );
};

export default AllDomain;
