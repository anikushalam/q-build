import React, { useEffect, useState } from "react";
import style from "./Fees.module.css";
import FeesLeft from "./FeesLeft";
import FeesRight from "./FeesRight";
import FeesList from "./FeesList";
import {
  useClassAllFees,
  useClassOneFees,
  useClassOneFeesDetails,
} from "../../../../../../hooks/member_tab/class-api";

function Fees({ cid }) {
  const [index, setIndex] = React.useState(0);
  // const [feesDetailIndex, setFeesDetailIndex] = useState(0);
  const [feesId, setFeesId] = useState("");
  const onClickFeesId = (val) => {
    setFeesId({ _id: val?._id, students: val?.students });
    setIndex(1);
  };

  const { classAllFees, classAllFeesRefetch } = useClassAllFees({
    data: {
      cid: cid,
      page: 1,
      limit: 50,
    },
    skip: !cid,
  });

  useEffect(() => {
    if (cid) classAllFeesRefetch();
  }, [cid, classAllFeesRefetch]);

  const { classOneFeesDetails, classOneFeesDetailsRefetch } =
    useClassOneFeesDetails({
      data: {
        fid: feesId?._id,
        page: 1,
        limit: 50,
      },
      skip: !feesId?._id,
    });
  const { classOneFees, classOneFeesRefetch } = useClassOneFees({
    data: {
      fid: feesId?._id,
      cid: cid,
    },
    skip: !feesId?._id,
  });
  useEffect(() => {
    if (feesId?._id) {
      classOneFeesRefetch();
      classOneFeesDetailsRefetch();
    }
  }, [feesId?._id, classOneFeesRefetch, classOneFeesDetailsRefetch]);
  // console.info("This is all fees of data", classAllFees);
  // console.info("This is all feesId of classOneFees", classOneFees);

  // console.info("This is all fees of data details", classOneFeesDetails);
  return (
    <>
      {index === 1 && (
        <div className={style.fees}>
          <div className={style.feesLeft}>
            <FeesLeft
              feesDetails={classOneFeesDetails?.feeData}
              students={feesId?.students}
              onRefetch={classOneFeesDetailsRefetch}
              cid={cid}
              fid={feesId?._id}
              onRefetchQuery={classOneFeesRefetch}
              setIndex={setIndex}
            />
          </div>
          <div className={style.feesRight}>
            <FeesRight
              feesDetails={classOneFeesDetails?.feeData}
              totalFees={classOneFeesDetails?.onlineOffline}
              classOneFees={classOneFees}
              onRefetchQuery={classOneFeesRefetch}
              cid={cid}
              financeId={
                classAllFees?.classes?.institute?.financeDepart?.[0]?._id
              }
            />
          </div>
        </div>
      )}

      {index === 0 && (
        <FeesList
          onClickFeesId={onClickFeesId}
          feesList={classAllFees?.classes}
        />
      )}
    </>
  );
}

export default Fees;
