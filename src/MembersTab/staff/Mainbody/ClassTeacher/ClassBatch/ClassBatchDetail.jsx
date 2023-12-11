import React, { useEffect, useState, useCallback, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import style from "../../Hostel/Hostel.module.css";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import { debounce } from "lodash";
import {
  useClassResuffleRearrange,
  useGetClassBatchAllStudent,
} from "../../../../../hooks/member_tab/class-api";
import { useLocation } from "react-router-dom";
import ClassStudentCard from "./ClassStudentCard";
// import AddStudentByClassCatalog from "./AddStudentByClassCatalog";
import AddStudentInBatch from "./AddStudentInBatch";
import QLoader from "../../../../../Loader/QLoader";

const ClassBatchDetail = ({ cid, viewAs, masterBatchId }) => {
  const getQuery = useLocation();
  const { t } = useTranslation();
  const [add, setAdd] = useState(false);
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [studentList, setStudentList] = useState([]);
  const [refetchStatus, setRefetchStatus] = useState(false);
  const [search, setSearch] = useState("");
  const [isDragable, setIsDragable] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const [classResuffleRearrange] = useClassResuffleRearrange();
  const { getClassBatchAllStudent, getClassBatchAllStudentRefetch } =
    useGetClassBatchAllStudent({
      data: {
        bid: getQuery.state?.batchId,
        page: page,
        limit: 10,
        search: search,
      },
      skip: !getQuery.state?.batchId,
    });
  useEffect(() => {
    if (getQuery.state?.batchId) {
      setShowingDataLoading(true);
      getClassBatchAllStudentRefetch();
    }
  }, [getQuery.state?.batchId, page, search, getClassBatchAllStudentRefetch]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (refetchStatus) {
      setStudentList(getClassBatchAllStudent?.all_students);
      setShowingDataLoading(false);
      setRefetchStatus(false);
    } else {
      if (search) {
        setStudentList(getClassBatchAllStudent?.all_students);
        setShowingDataLoading(false);
      } else {
        if (getClassBatchAllStudent?.all_students) {
          setStudentList((prevState) =>
            [
              ...new Set(
                [...prevState, ...getClassBatchAllStudent?.all_students]?.map(
                  JSON.stringify
                )
              ),
            ]?.map(JSON.parse)
          );
          setShowingDataLoading(false);
        } else if (getClassBatchAllStudent?.all_students?.length === 0)
          setShowingDataLoading(false);
        else {
        }
      }
    }
    if (getClassBatchAllStudent?.all_students?.length === 10) setState(true);
    else setState(false);
  }, [getClassBatchAllStudent?.all_students]);

  const onDebounce = useCallback(
    debounce((val) => setSearch(val), 500),
    []
  );

  const onSearchEvent = (e) => {
    onDebounce(e.target.value);
  };

  const onRefetchWhenCreate = () => {
    setPage(1);
    setRefetchStatus(true);
    setShowingDataLoading(true);
    getClassBatchAllStudentRefetch();
  };

  const onClose = () => {
    setAdd((pre) => !pre);
  };

  // for drag evenet
  const dragItem = useRef();
  const dragOverItem = useRef();

  const onDragEventStart = (e, position) => {
    e.stopPropagation();
    dragItem.current = position;
  };

  const onDragEventEnter = (e, position) => {
    e.stopPropagation();
    dragOverItem.current = position;
  };

  const onDropItem = (e) => {
    e.stopPropagation();
    //for only ids
    const studentCopy = [...studentList];
    const dragItemContentCls = studentCopy[dragItem.current];
    studentCopy.splice(dragItem.current, 1);
    studentCopy.splice(dragOverItem.current, 0, dragItemContentCls);

    dragItem.current = null;
    dragOverItem.current = null;
    setStudentList(studentCopy);
  };
  const onSaveResuffle = () => {
    setDisabled((pre) => !pre);
    let arr = [];
    for (let ids of studentList) {
      arr.push(ids?._id);
    }
    classResuffleRearrange({
      suffle: {
        shuffle_arr: arr,
        bid: getQuery.state?.batchId,
        flow: "BATCH_WISE",
      },
    })
      .then(() => {
        onRefetchWhenCreate();
        setIsDragable(false);
        setDisabled((pre) => !pre);
      })
      .catch({});
  };
  return (
    <div
      className={style.hostel_container}
      style={
        viewAs === "INSTITUTE"
          ? {
              border: "none",
            }
          : null
      }
    >
      <div className={style.with_search}>
        <h6>{getQuery.state?.batchName ?? ""}</h6>
        <section className={style.search_container}>
          <div className={style.search_container_input}>
            <img
              className={style.searchIcon}
              alt="search icon"
              src="/images/search-dash-icon.svg"
            />
            <input
              type="text"
              placeholder="Search students..."
              onChange={onSearchEvent}
            />
          </div>
        </section>
      </div>
      <BorderBottom
        customStyle={{
          marginTop: "0.5rem",
          marginBottom: "0.6rem",
          width: "100%",
        }}
      />

      <div
        className={style.add_container}
        style={{
          gap: "1rem",
        }}
      >
        <p className={style.add_new_category} onClick={onClose}>
          {t("add_student")}
        </p>
        {isDragable ? (
          <p className={style.add_new_category} onClick={onSaveResuffle}>
            {t("save")}
          </p>
        ) : (
          <p
            className={style.add_new_category}
            onClick={() => setIsDragable(true)}
          >
            {t("resuffle")}
          </p>
        )}
      </div>

      {studentList?.map((student, index) =>
        studentList?.length === index + 1 ? (
          <div
            ref={ref}
            key={student?._id}
            draggable={isDragable}
            onDragStart={(e) => onDragEventStart(e, index)}
            onDragEnter={(e) => onDragEventEnter(e, index)}
            onDragEnd={onDropItem}
          >
            <ClassStudentCard
              student={student}
              onRefetch={onRefetchWhenCreate}
              batchId={getQuery.state?.batchId}
            />
          </div>
        ) : (
          <div
            draggable={isDragable}
            onDragStart={(e) => onDragEventStart(e, index)}
            onDragEnter={(e) => onDragEventEnter(e, index)}
            onDragEnd={onDropItem}
          >
            <ClassStudentCard
              student={student}
              key={student?._id}
              onRefetch={onRefetchWhenCreate}
              batchId={getQuery.state?.batchId}
            />
          </div>
        )
      )}
      {showingDataLoading && <QvipleLoading status="white" />}
      {add && (
        <AddStudentInBatch
          onClose={onClose}
          cid={cid}
          onRefetch={onRefetchWhenCreate}
          batchId={getQuery.state?.batchId}
          masterBatchId={masterBatchId}
        />
      )}
      {disabled && <QLoader />}
    </div>
  );
};

export default ClassBatchDetail;
