import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import UniversalTab from "../../../../../../MembersTab/staff/Mainbody/DepartmentHead/Competetions/CompetitionTab/UniversalTab";
import BorderBottom from "../../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import PaymentUser from "./PaymentUser";
import ReceiptUser from "./ReceiptUser";

function PaymentHistory() {
  const { t } = useTranslation();
  const tabList = [
    {
      name: t("payments"),
      id: 0,
    },
    {
      name: t("recipts"),
      id: 1,
    },
  ];
  const [index, setIndex] = useState(0);
  return (
    <>
      <UniversalTab
        tabList={tabList}
        activeIndexTab={index}
        setActiveIndexTab={setIndex}
        customStyleTab={{ width: "50%" }}
      />
      <BorderBottom customStyle={{ width: "100%", marginBottom: "1rem" }} />
      {index === 0 && <PaymentUser />}
      {index === 1 && <ReceiptUser />}
    </>
  );
}

export default PaymentHistory;
