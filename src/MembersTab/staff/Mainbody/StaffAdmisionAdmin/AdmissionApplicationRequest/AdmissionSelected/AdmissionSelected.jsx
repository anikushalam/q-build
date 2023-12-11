import React, { useState, useEffect, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import {
  useEditFeeStructure,
  useGetAllSelect,
} from "../../../../../../hooks/member_tab/admission-api";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";
import { debounce } from "lodash";
import QLoader from "../../../../../../Loader/QLoader";
import { useScrollbar } from "../../../../../../Scroll/use-scroll";
import AdmissionOngoingWrapper from "../OngoingApplication/AdmissionOngoingWrapper";
import AdmissionOneOngoingTab from "../OngoingApplication/AdmissionOneOngoingTab";
import AdmissionSelectCard from "./AdmissionSelectCard";
import NotConfirmApplicant from "./SelectedProcess/NotConfirmApplicant";
import CollectDocs from "./SelectedProcess/CollectDocs";
import SelectFeeStructure from "../AdmssionStructureSelection/SelectFeeStructure";
import CollectFees from "./SelectedProcess/CollectFees";

function AdmissionSelected({
  applicationId,
  applicationDetail,
  carryParentState,
  accessRole,
  accessTpye,
  instituteId,
  applicationDetailApplicablePending,
  pageOpenAs,
}) {
  const [state, setState] = useState(true);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [ref, inView] = useInView();
  const [select, setSelect] = useState([]);
  const [refetchStatus, setRefetchStatus] = useState(false);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [stepOpen, setStepOpen] = useState("");
  const [currentApplicant, setCurrentApplicant] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [editFeeStructure] = useEditFeeStructure();

  const { getAllSelectList, getAllSelectListRefetch } = useGetAllSelect({
    data: {
      id: applicationId,
      page: page,
      limit: 10,
      search: search ? search : "",
    },
    skip: !applicationId,
  });
  const { scrollToTop } = useScrollbar();
  useEffect(() => {
    scrollToTop();
  }, []);
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (applicationId) {
      setShowingDataLoading(true);
      getAllSelectListRefetch();
    }
  }, [page, applicationId, getAllSelectListRefetch, search]);

  useEffect(() => {
    if (search) {
      setSelect(getAllSelectList?.select);
      setShowingDataLoading(false);
    } else {
      if (refetchStatus) {
        setSelect(getAllSelectList?.select);
        setRefetchStatus(false);
        setShowingDataLoading(false);
      } else {
        if (getAllSelectList?.select) {
          setSelect((prevState) =>
            [
              ...new Set(
                [...prevState, ...getAllSelectList?.select]?.map(JSON.stringify)
              ),
            ]?.map(JSON.parse)
          );
          setShowingDataLoading(false);
        } else if (getAllSelectList?.select?.length === 0)
          setShowingDataLoading(false);
        else {
        }
      }
    }

    if (getAllSelectList?.select?.length === 10) setState(true);
    else setState(false);
  }, [getAllSelectList?.select]);

  const onRefetchWhenConfirm = () => {
    setPage(1);
    getAllSelectListRefetch();
    setRefetchStatus(true);
  };

  const deb = useCallback(
    debounce((val) => setSearch(val), 500),
    []
  );

  const onSearchEvent = (e) => {
    deb(e.target.value);
  };
  const onSelectOffileFees = (val) => {
    setCurrentApplicant(val);
    setStepOpen("COLLECT_FEES");
  };
  const onCollectDocs = (val) => {
    setCurrentApplicant(val);
    setStepOpen("COLLECT_DOCS");
  };

  const onEditFee = (val) => {
    setCurrentApplicant(val);
    setStepOpen("EDIT_STRUCTURE");
  };

  const onNotConfirm = (val) => {
    setCurrentApplicant(val);
    setStepOpen("MARK_CONFIRM");
  };
  const onEditFeeStructure = (feeStructureId) => {
    if (currentApplicant !== "" && applicationId !== "") {
      setDisabled((pre) => !pre);
      editFeeStructure({
        sid: currentApplicant,
        aid: applicationId,
        editStructure: {
          fee_struct: feeStructureId,
        },
      })
        .then(() => {
          onRefetchWhenConfirm();
          setDisabled((pre) => !pre);
        })
        .catch(() => {
          setDisabled((pre) => !pre);
        });
    }
  };
  return (
    <>
      <AdmissionOngoingWrapper
        applicationDetail={applicationDetail}
        carryParentState={carryParentState}
        instituteId={instituteId}
        applicationDetailApplicablePending={applicationDetailApplicablePending}
        pageOpenAs={pageOpenAs}
      >
        <input
          type="text"
          placeholder="Search applications..."
          onChange={onSearchEvent}
        />
      </AdmissionOngoingWrapper>
      <AdmissionOneOngoingTab
        carryParentState={carryParentState}
        accessRole={accessRole}
        accessTpye={accessTpye}
        pageOpenAs={pageOpenAs}
      />
      {select?.map((applicant, index) =>
        select?.length === index + 1 ? (
          <div ref={ref} key={index}>
            <AdmissionSelectCard
              applicant={applicant}
              onEditFee={onEditFee}
              onSelectOffileFees={onSelectOffileFees}
              onCollectDocs={onCollectDocs}
              onNotConfirm={onNotConfirm}
              instituteId={instituteId}
              applicationId={applicationId}
              onRefetch={onRefetchWhenConfirm}
            />
          </div>
        ) : (
          <AdmissionSelectCard
            key={index}
            applicant={applicant}
            onEditFee={onEditFee}
            onSelectOffileFees={onSelectOffileFees}
            onCollectDocs={onCollectDocs}
            onNotConfirm={onNotConfirm}
            instituteId={instituteId}
            applicationId={applicationId}
            onRefetch={onRefetchWhenConfirm}
          />
        )
      )}
      {showingDataLoading && <QvipleLoading />}

      {stepOpen === "MARK_CONFIRM" && (
        <NotConfirmApplicant
          currentApplicant={currentApplicant}
          applicationId={applicationId}
          onClose={() => setStepOpen("")}
          onRefetchWhenConfirm={onRefetchWhenConfirm}
        />
      )}
      {stepOpen === "EDIT_STRUCTURE" && (
        <SelectFeeStructure
          departmentId={applicationDetail?.applicationDepartment?._id}
          batchId={applicationDetail?.applicationBatch?._id}
          classMasterId={applicationDetail?.applicationMaster}
          onClose={() => setStepOpen("")}
          onSelectedStudent={onEditFeeStructure}
          asOpen="SELECTED_TAB"
        />
      )}
      {stepOpen === "COLLECT_DOCS" && (
        <CollectDocs
          currentApplicant={currentApplicant}
          applicationId={applicationId}
          onClose={() => setStepOpen("")}
          onRefetchWhenConfirm={onRefetchWhenConfirm}
        />
      )}
      {stepOpen === "COLLECT_FEES" && (
        <CollectFees
          onClose={() => setStepOpen("")}
          currentApplicant={currentApplicant}
          applicationId={applicationId}
          onRefetchWhenConfirm={onRefetchWhenConfirm}
        />
      )}

      {disabled && <QLoader />}
    </>
  );
}

export default AdmissionSelected;
