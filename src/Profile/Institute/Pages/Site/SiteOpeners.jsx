import React, { useState } from "react";
import { useAllDomainPlateform } from "../../../../hooks/plateform/plateform-api";

const SiteOpeners = () => {
  const [fetchDomain, setFetchDomain] = useState(true);
  const [addDomain, setAddDomain] = useState(false);
  const { allDomainPlateform, allDomainPlateformRefetch } =
    useAllDomainPlateform({
      skip: fetchDomain,
    });

  const onAddDomain = () => {
    setFetchDomain(false);
    setAddDomain(true);
    allDomainPlateformRefetch();
  };
  return (
    <div>
      <h6 onClick={onAddDomain}>Add Domain</h6>
      {addDomain && (
        <div>
          {allDomainPlateform?.all_domain?.map((dom) => (
            <h6>{dom?.sub_domain_path}</h6>
          ))}
        </div>
      )}
    </div>
  );
};

export default SiteOpeners;
