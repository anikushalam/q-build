import React, { useEffect, useState } from "react";
import style from "../LibraryFunctions.module.css";
import { useInView } from "react-intersection-observer";
import { useLibraryFineCharge } from "../../../../../../hooks/member_tab/library-api";
import EmptyInfo from "../../../../../../Loader/EmptyInfo";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";
import LibraryFineCard from "./LibraryFineCard";
const LibraryOutstanding = ({ lid }) => {
  const [state, setState] = useState(true);
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();
  const [allReceived, setAllReceived] = useState([]);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [refetchStatus, setRefetchStatus] = useState(false);
  const { libraryFineCharge, libraryFineChargeRefetch } = useLibraryFineCharge({
    data: {
      lid: lid,
      page: page,
      limit: 10,
      flow: "Remaining",
    },
    skip: !lid,
  });
  useEffect(() => {
    if (lid) {
      setShowingDataLoading(true);
      libraryFineChargeRefetch();
    }
  }, [page, lid, libraryFineChargeRefetch]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (refetchStatus) {
      setAllReceived(libraryFineCharge?.all_student);
      setRefetchStatus(false);
      setShowingDataLoading(false);
    } else {
      if (libraryFineCharge?.all_student) {
        setAllReceived((prev) =>
          [
            ...new Set(
              [...prev, ...libraryFineCharge?.all_student].map(JSON.stringify)
            ),
          ].map(JSON.parse)
        );
        setShowingDataLoading(false);
      } else if (libraryFineCharge?.all_student?.length === 0)
        setShowingDataLoading(false);
      else {
      }
    }

    if (libraryFineCharge?.all_student?.length === 10) setState(true);
    else setState(false);
  }, [libraryFineCharge?.all_student]);

  const onCollectThenRefetch = () => {
    setPage(1);
    setRefetchStatus(true);
    libraryFineChargeRefetch();
  };
  return (
    <div className={style.library_out_container}>
      <div className={style.data_container}>
        {allReceived?.map((studentFine, index) =>
          allReceived?.length === index + 1 ? (
            <div
              ref={ref}
              key={studentFine?._id}
              style={{
                width: "49%",
                marginBottom: "1rem",
              }}
            >
              <LibraryFineCard
                studentFine={studentFine}
                is_last
                lid={lid}
                onRefetch={onCollectThenRefetch}
              />
            </div>
          ) : (
            <LibraryFineCard
              studentFine={studentFine}
              key={studentFine?._id}
              lid={lid}
              onRefetch={onCollectThenRefetch}
            />
          )
        )}
        {!showingDataLoading && !allReceived.length && (
          <EmptyInfo
            customStyleContainer={{
              marginTop: "9rem",
            }}
            title={"No outstanding records found."}
          />
        )}
        {showingDataLoading && <QvipleLoading status="white" />}
      </div>
    </div>
  );
};

export default LibraryOutstanding;
