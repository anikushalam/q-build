import React, { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";
import { useAssignSearchStaff } from "../../../Post/Institute/Components/search-api";
// import { useScrollbar } from "../../../Scroll/use-scroll";
import { debounce } from "lodash";
import { imageShowUrl } from "../../../services/BaseUrl";
import style from "./AssignStaffModal.module.css";
import { Dialog } from "@mui/material";
import { useTranslation } from "react-i18next";
const modalHeight = window.innerHeight;

const getUniqueList = (current) => {
  for (let i = 0; i < current?.length; i++) {
    for (let j = i + 1; j < current?.length; j++) {
      if (current[i]?._id === current[j]?._id) {
        current?.splice(j, 1);
      }
    }
  }

  return current;
};
const AssignStaffModal = ({
  onClose,
  title,
  headSelect,
  assignHead,
  disabledId,
  instituteId,
  viewAs,
  // isMultiSelect,
  // selectList,
}) => {
  // const { hideScrollbar } = useScrollbar();
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [ref, inView] = useInView();
  const [search, setSearch] = useState("");
  const [allStaff, setAllStaff] = React.useState([]);

  const ids = useSelector((state) => state.idChange);

  const { assignSearchStaff, assignSearchStaffRefetch } = useAssignSearchStaff({
    skip: viewAs === "ADMISSION_ADMIN" ? !instituteId : !ids?.id,
    search: {
      search: search,
      page: page,
      id: viewAs === "ADMISSION_ADMIN" ? instituteId : ids?.id,
      limit: 10,
    },
  });

  // React.useEffect(() => {
  //   hideScrollbar();
  // }, []);

  React.useEffect(() => {
    if (ids?.id) assignSearchStaffRefetch();
  }, [ids?.id, assignSearchStaffRefetch, page]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  React.useEffect(() => {
    if (assignSearchStaff?.staff) {
      if (search) {
        setAllStaff(assignSearchStaff?.staff);
      } else {
        setAllStaff((prevState) =>
          getUniqueList([...prevState, ...assignSearchStaff?.staff])
        );
        // [
        //   ...new Set(
        //     [...prevState, ...assignSearchStaff?.staff]?.map(JSON.stringify)
        //   ),
        // ]?.map(JSON.parse)
      }
    }

    //for next api is call or not dashboard
    if (assignSearchStaff?.staff.length === 10) setState(true);
    else setState(false);
  }, [assignSearchStaff?.staff]);

  useEffect(() => {
    if (search) handleSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const handleSearch = () => {
    assignSearchStaffRefetch();
  };

  const deb = useCallback(
    debounce((val) => setSearch(val), 500),
    []
  );

  const searchHandler = (val) => {
    deb(val);
  };

  const selectStaff = (val) => {
    if (disabledId === val?._id) {
    } else {
      // if (isMultiSelect) {
      // } else {
      headSelect(val);
      if (viewAs === "ADMISSION_ADMIN") {
      } else {
        onClose();
      }
    }
    // }
  };

  return (
    <Dialog open={assignHead} onClose={onClose}>
      <div
        style={{
          backgroundColor: "#FAFAFA",
          width: "35rem",
          height: `${modalHeight - 20}px`,
          overflowX: "hidden",
        }}
      >
        <div
          className={style.assign_title}
          style={{
            width: "100%",
          }}
        >
          <h5>{title}</h5>
          {/* <div className={style.is_mulitselect_container}>
            <h6>{t("select")}</h6> */}
          <img
            src="/images/close-post-icon.svg"
            onClick={onClose}
            alt="staff assign pop close icon"
          />
          {/* </div> */}
        </div>

        <div className={style.assign_search_container}>
          <input
            type="text"
            placeholder={t("search")}
            className={style.assign_search_input}
            // value={search}
            onChange={(e) => searchHandler(e.target.value)}
          />
          <img src="/images/search-dash-icon.svg" alt="search icon" />
        </div>

        <div className={style.assign_show_list}>
          {allStaff?.map((value, index) =>
            allStaff?.length === index + 1 ? (
              <div key={value._id} ref={ref}>
                <div
                  className={style.assign_show_list_each}
                  style={
                    disabledId === value._id
                      ? { backgroundColor: "rgba(75, 26, 133, 0.1)" }
                      : { backgroundColor: "inherit" }
                  }
                  onClick={() => selectStaff(value)}
                >
                  {/* {isMultiSelect ? (
                    selectList?.includes(value?._id) ? (
                      <img
                        src="/images/checkbox-icon.svg"
                        alt="icon"
                        style={{
                          height: "1.3rem",
                          borderRadius: "0",
                          cursor: "pointer",
                        }}
                      />
                    ) : (
                      <img
                        style={{
                          height: "1.3rem",
                          borderRadius: "0",
                          cursor: "pointer",
                        }}
                        src="/images/box-icon.svg"
                        alt="icon"
                      />
                    )
                  ) : (
                    ""
                  )} */}
                  <img
                    src={
                      value?.staffProfilePhoto
                        ? `${imageShowUrl}/${value.staffProfilePhoto}`
                        : "/images/member_tab/class/default_avatar.svg"
                    }
                    alt="staff profile avatar"
                  />
                  <div className={style.assign_each_paragraph}>
                    <h6>{`${value.staffFirstName} ${
                      value?.staffMiddleName ? value?.staffMiddleName : ""
                    } ${value.staffLastName}`}</h6>
                    <p>
                      {" "}
                      {t("index")} {value?.staffROLLNO}
                    </p>
                  </div>
                </div>
                <hr />
              </div>
            ) : (
              <div key={value._id}>
                <div
                  className={style.assign_show_list_each}
                  style={
                    disabledId === value._id
                      ? { backgroundColor: "rgba(75, 26, 133, 0.1)" }
                      : { backgroundColor: "inherit" }
                  }
                  onClick={() => selectStaff(value)}
                >
                  {/* {isMultiSelect ? (
                    selectList?.includes(value?._id) ? (
                      <img
                        style={{
                          height: "1.3rem",
                          borderRadius: "0",
                          cursor: "pointer",
                        }}
                        src="/images/checkbox-icon.svg"
                        alt="icon"
                      />
                    ) : (
                      <img
                        style={{
                          height: "1.3rem",
                          borderRadius: "0",
                          cursor: "pointer",
                        }}
                        src="/images/box-icon.svg"
                        alt="icon"
                      />
                    )
                  ) : (
                    ""
                  )} */}
                  <img
                    src={
                      value?.staffProfilePhoto
                        ? `${imageShowUrl}/${value.staffProfilePhoto}`
                        : "/images/member_tab/class/default_avatar.svg"
                    }
                    alt="staff profile avatar"
                  />
                  <div className={style.assign_each_paragraph}>
                    <h6>{`${value.staffFirstName} ${
                      value?.staffMiddleName ? value?.staffMiddleName : ""
                    } ${value.staffLastName}`}</h6>
                    <p>
                      {" "}
                      {t("index")} {value?.staffROLLNO}
                    </p>
                  </div>
                </div>
                <hr />
              </div>
            )
          )}
        </div>
      </div>
    </Dialog>
  );
};

export default AssignStaffModal;
