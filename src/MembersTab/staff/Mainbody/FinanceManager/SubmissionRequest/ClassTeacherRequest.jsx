import React, { useEffect } from "react";
import Tabbs from "./Tabs/Tabs";
import Divider from "@mui/material/Divider";
import TotalRequest from "./TotalRequest";
import AcceptedRequest from "./AcceptedRequest";
import RejectedRequest from "./RejectedRequest";
import {
  useAcceptRequestArrayQuery,
  useRejectRequestArrayQuery,
  useSubmissionRequestArrayQuery,
} from "../../../../../services/financeAPI";
import { useSelector } from "react-redux";
import { useState } from "react";
const ClassTeacherRequest = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const financeAuthor = useSelector((state) => state.financeChange);
  const { data: requestQuery, refetch: requestFetch } =
    useSubmissionRequestArrayQuery(`${financeAuthor?.fid}`, {
      skip: !financeAuthor?.fid,
    });
  const { data: acceptQuery, refetch: acceptFetch } =
    useAcceptRequestArrayQuery(`${financeAuthor?.fid}`, {
      skip: !financeAuthor?.fid,
    });
  const { data: rejectQuery, refetch: rejectFetch } =
    useRejectRequestArrayQuery(`${financeAuthor?.fid}`, {
      skip: !financeAuthor?.fid,
    });

  useEffect(() => {
    if (financeAuthor?.fid) {
      requestFetch();
      acceptFetch();
      rejectFetch();
    }
  }, [rejectFetch, acceptFetch, requestFetch]);
  return (
    <>
      <Tabbs activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      <Divider />

      {activeIndex === 0 && (
        <TotalRequest
          request={requestQuery}
          requestCount={requestQuery?.requestCount}
          fetch={requestFetch}
          financeId={financeAuthor?.fid}
          acceptFetch={acceptFetch}
          rejectFetch={rejectFetch}
        />
      )}
      {activeIndex === 1 && (
        <AcceptedRequest
          acceptArray={acceptQuery}
          acceptCount={acceptQuery?.submitCount}
        />
      )}
      {activeIndex === 2 && (
        <RejectedRequest
          rejectArray={rejectQuery}
          rejectCount={rejectQuery?.rejectCount}
        />
      )}
    </>
  );
};

export default ClassTeacherRequest;
