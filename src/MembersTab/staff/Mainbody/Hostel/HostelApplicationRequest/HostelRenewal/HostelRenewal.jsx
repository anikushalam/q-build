import React from "react";
import { useLocation } from "react-router-dom";
import HostelRenewalApplication from "./RenewalApplication/HostelRenewalApplication";
import HostelRenewalSelect from "./RenewalSelect/HostelRenewalSelect";
import HostelRenewalRenewed from "./RenewalRenewed/HostelRenewalRenewed";
import RenewalAllotted from "./RenewalAllotted";
import RenewalCancelled from "./RenewalCancelled";

const HostelRenewal = ({ carryParentState, hid }) => {
  const getQuery = useLocation();
  return (
    <>
      {getQuery.search?.substring(19) === "application" && (
        <HostelRenewalApplication
          hostelId={hid}
          carryParentState={carryParentState}
          huid={getQuery.state?.huid}
          unitName={getQuery.state?.unitName}
        />
      )}
      {getQuery.search?.substring(19) === "select" && (
        <HostelRenewalSelect
          hostelId={hid}
          carryParentState={carryParentState}
          huid={getQuery.state?.huid}
          unitName={getQuery.state?.unitName}
        />
      )}
      {getQuery.search?.substring(19) === "renewed" && (
        <HostelRenewalRenewed
          carryParentState={carryParentState}
          huid={getQuery.state?.huid}
          unitName={getQuery.state?.unitName}
        />
      )}
      {getQuery.search?.substring(19) === "allot" && (
        <RenewalAllotted
          carryParentState={carryParentState}
          huid={getQuery.state?.huid}
          unitName={getQuery.state?.unitName}
        />
      )}
      {getQuery.search?.substring(19) === "cancel" && (
        <RenewalCancelled
          carryParentState={carryParentState}
          huid={getQuery.state?.huid}
          unitName={getQuery.state?.unitName}
        />
      )}
    </>
  );
};

export default HostelRenewal;
