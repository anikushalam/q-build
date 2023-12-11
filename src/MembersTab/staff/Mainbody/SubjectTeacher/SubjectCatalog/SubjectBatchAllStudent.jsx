import React, { useCallback, useEffect, useRef, useState } from "react";
import { useGetClassBatchAllStudent } from "../../../../../hooks/member_tab/class-api";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import style from "../../ClassTeacher/ClassCatalog/Catalog/Catalog.module.css";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import { debounce } from "lodash";

function SubjectBatchAllStudent({ bid, isDepartment, sid }) {
  const dDate = new Date();
  const dates = dDate.toISOString()?.split("-");
  const day = dates[2]?.substring(0, 2);
  const month = dates[1];
  const params = useParams();
  const { t } = useTranslation();
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [studentList, setStudentList] = useState([]);
  const [search, setSearch] = useState("");

  // for drag evenet
  const dragItem = useRef();
  const dragOverItem = useRef();

  const { getClassBatchAllStudent, getClassBatchAllStudentRefetch } =
    useGetClassBatchAllStudent({
      data: {
        bid: bid,
        page: page,
        limit: 10,
        search: search,
        subjectId: sid,
        today: `${day}/${month}/${dates[0]}`,
      },
      skip: !bid,
    });
  useEffect(() => {
    if (bid) {
      setShowingDataLoading(true);
      getClassBatchAllStudentRefetch();
    }
  }, [bid, page, search, getClassBatchAllStudentRefetch]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
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

  return (
    <div
      className={style.catalog}
      style={{
        border: isDepartment ? "none" : "0.5px solid #cacaca",
      }}
    >
      <div className={style.searchContainerr}>
        <div className={style.searchContainer}>
          <img alt="" src="/images/search-dept-icon.svg" />
          <input
            type="text"
            placeholder={t("search-label")}
            onChange={onSearchEvent}
          />
        </div>
        {/* <div className={style.checklistbtn}>Settings</div> */}
      </div>

      <div className={style.itemsContainerr}>
        {studentList?.map((stu, index) =>
          studentList?.length === index + 1 ? (
            <div ref={ref} key={stu?._id}>
              <Link
                to={`/q/${params.username}/student/profile`}
                state={{ sid: stu?._id, viewAs: "SUBJECT_TEACHER" }}
              >
                <div
                  className={style.itemsContaiiner}
                  draggable
                  onDragStart={(e) => onDragEventStart(e, index)}
                  onDragEnter={(e) => onDragEventEnter(e, index)}
                  onDragEnd={onDropItem}
                >
                  <div className={style.item}>
                    <p>{stu?.studentROLLNO}</p>
                    <img
                      alt=""
                      src={
                        stu?.studentProfilePhoto
                          ? `${imageShowUrl}/${stu?.studentProfilePhoto}`
                          : "/images/member_tab/class/default_avatar.svg"
                      }
                    />
                    <div className={style.student_catalog_with_attendance}>
                      <div className={style.student_catalog_name}>
                        <h5>
                          {stu?.studentFirstName ?? ""}{" "}
                          {stu?.studentMiddleName ?? " "}{" "}
                          {stu?.studentLastName ?? ""}
                        </h5>
                        <h6>
                          {t("gr_number")}{" "}
                          <span
                            style={{
                              fontWeight: "500",
                            }}
                          >
                            {stu?.studentGRNO ?? ""}
                          </span>
                          {stu?.class_selected_batch?.map((ba) =>
                            ba?._id === bid ? (
                              <span
                                style={{
                                  fontWeight: "500",
                                }}
                              >
                                {`, ${t("batch")}: ${ba?.batchName}`}
                              </span>
                            ) : null
                          )}
                        </h6>
                      </div>
                      <div
                        className={style.student_catalog_name}
                        style={{
                          alignItems: "flex-end",
                        }}
                      >
                        <h6>
                          {t("today")}
                          {" : "}
                          <span
                            style={{
                              fontWeight: "500",
                              color:
                                stu?.todayStatus === "P"
                                  ? "#20b038"
                                  : "#ee3833",
                            }}
                          >
                            {stu?.todayStatus ?? ""}
                          </span>
                        </h6>
                        <h6>
                          {t("overall_percentage")}
                          {" : "}
                          <span
                            style={{
                              fontWeight: "500",
                              color:
                                stu?.totalPercentage > 75
                                  ? "#20b038"
                                  : "#ee3833",
                            }}
                          >
                            {stu?.totalPercentage ?? ""}
                          </span>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ) : (
            <Link
              to={`/q/${params.username}/student/profile`}
              state={{ sid: stu?._id, viewAs: "SUBJECT_TEACHER" }}
              key={stu?._id}
            >
              <div
                className={style.itemsContaiiner}
                draggable
                onDragStart={(e) => onDragEventStart(e, index)}
                onDragEnter={(e) => onDragEventEnter(e, index)}
                onDragEnd={onDropItem}
              >
                <div className={style.item}>
                  <p>{stu?.studentROLLNO}</p>
                  <img
                    alt=""
                    src={
                      stu?.studentProfilePhoto
                        ? `${imageShowUrl}/${stu?.studentProfilePhoto}`
                        : "/images/member_tab/class/default_avatar.svg"
                    }
                  />
                  <div className={style.student_catalog_with_attendance}>
                    <div className={style.student_catalog_name}>
                      <h5>
                        {stu?.studentFirstName ?? ""}{" "}
                        {stu?.studentMiddleName ?? " "}{" "}
                        {stu?.studentLastName ?? ""}
                      </h5>
                      <h6>
                        {t("gr_number")}{" "}
                        <span
                          style={{
                            fontWeight: "500",
                          }}
                        >
                          {stu?.studentGRNO ?? ""}
                        </span>
                        {stu?.class_selected_batch?.map((ba) =>
                          ba?._id === bid ? (
                            <span
                              style={{
                                fontWeight: "500",
                              }}
                            >
                              {`, ${t("batch")}: ${ba?.batchName}`}
                            </span>
                          ) : null
                        )}
                      </h6>
                    </div>
                    <div
                      className={style.student_catalog_name}
                      style={{
                        alignItems: "flex-end",
                      }}
                    >
                      <h6>
                        {t("today")}
                        {" : "}
                        <span
                          style={{
                            fontWeight: "500",
                            color:
                              stu?.todayStatus === "P" ? "#20b038" : "#ee3833",
                          }}
                        >
                          {stu?.todayStatus ?? ""}
                        </span>
                      </h6>
                      <h6>
                        {t("overall_percentage")}
                        {" : "}
                        <span
                          style={{
                            fontWeight: "500",
                            color:
                              stu?.totalPercentage > 75 ? "#20b038" : "#ee3833",
                          }}
                        >
                          {stu?.totalPercentage ?? ""}
                        </span>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          )
        )}
        {showingDataLoading && <QvipleLoading status="white" />}
      </div>
    </div>
  );
}

export default SubjectBatchAllStudent;
