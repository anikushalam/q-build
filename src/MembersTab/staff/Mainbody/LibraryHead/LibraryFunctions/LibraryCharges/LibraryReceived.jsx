import React, { useEffect, useState } from "react";
import style from "../LibraryFunctions.module.css";
import { useInView } from "react-intersection-observer";
import { useLibraryFineCharge } from "../../../../../../hooks/member_tab/library-api";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";
import EmptyInfo from "../../../../../../Loader/EmptyInfo";
import LibraryFineCard from "./LibraryFineCard";
const LibraryReceived = ({ lid }) => {
  const [state, setState] = useState(true);
  const [page, setPage] = useState(1);
  const [ref, inView] = useInView();
  const [allReceived, setAllReceived] = useState([]);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const { libraryFineCharge, libraryFineChargeRefetch } = useLibraryFineCharge({
    data: {
      lid: lid,
      page: page,
      limit: 10,
      flow: "Paid",
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
    if (libraryFineCharge?.all_student) {
      if (page === 1) {
        setAllReceived(libraryFineCharge?.all_student);
      } else {
        setAllReceived((prev) =>
          [
            ...new Set(
              [...prev, ...libraryFineCharge?.all_student].map(JSON.stringify)
            ),
          ].map(JSON.parse)
        );
      }
      setShowingDataLoading(false);
    } else if (libraryFineCharge?.all_student?.length === 0)
      setShowingDataLoading(false);
    else {
    }

    if (libraryFineCharge?.all_student?.length === 10) setState(true);
    else setState(false);
  }, [libraryFineCharge?.all_student]);

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
              }}
            >
              <LibraryFineCard studentFine={studentFine} is_last />
            </div>
          ) : (
            <LibraryFineCard studentFine={studentFine} key={studentFine?._id} />
          )
        )}
        {!showingDataLoading && !allReceived.length && (
          <EmptyInfo
            customStyleContainer={{
              marginTop: "9rem",
            }}
            title={"No received records found."}
          />
        )}
        {showingDataLoading && <QvipleLoading status="white" />}
      </div>
    </div>
  );
};

export default LibraryReceived;
