import React, { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import {
  useAddHostilesExcelByHostel,
  useGetHostelHostelitesList,
} from "../../../../../hooks/member_tab/hostel-api";
import { debounce } from "lodash";
import style from "../Hostel.module.css";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import HostelitesCard from "./HostelitesCard";
import { useFileUpload } from "../../../../../hooks/authentication-api";
import QLoader from "../../../../../Loader/QLoader";

const Hostelites = ({ hid, filter_by, viewAs, instituteId }) => {
  const { t } = useTranslation();
  //   const [add, setAdd] = useState(false);
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [hostelitesList, setHostelitesList] = useState([]);
  const [search, setSearch] = useState("");
  const [refetchStatus, setRefetchStatus] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [oneFileUpload] = useFileUpload();
  const [addHostilesExcelByHostel] = useAddHostilesExcelByHostel();

  const { getHostelHostelitesList, getHostelHostelitesListRefetch } =
    useGetHostelHostelitesList({
      data: {
        hid: hid,
        page: page,
        limit: 10,
        search: search,
        filter_by: filter_by,
        id: instituteId ?? "",
      },
      skip: !hid,
    });
  useEffect(() => {
    if (hid) {
      setShowingDataLoading(true);
      getHostelHostelitesListRefetch();
    }
  }, [hid, instituteId, page, search, getHostelHostelitesListRefetch]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (refetchStatus) {
      setHostelitesList(getHostelHostelitesList?.all_hostalities);
      setShowingDataLoading(false);
      setRefetchStatus(false);
    } else {
      if (search) {
        setHostelitesList(getHostelHostelitesList?.all_hostalities);
        setShowingDataLoading(false);
      } else {
        if (getHostelHostelitesList?.all_hostalities) {
          setHostelitesList((prevState) =>
            [
              ...new Set(
                [
                  ...prevState,
                  ...getHostelHostelitesList?.all_hostalities,
                ]?.map(JSON.stringify)
              ),
            ]?.map(JSON.parse)
          );
          setShowingDataLoading(false);
        } else if (getHostelHostelitesList?.all_hostalities?.length === 0)
          setShowingDataLoading(false);
        else {
        }
      }
    }
    if (getHostelHostelitesList?.all_hostalities?.length === 10) setState(true);
    else setState(false);
  }, [getHostelHostelitesList?.all_hostalities]);

  const onDebounce = useCallback(
    debounce((val) => setSearch(val), 500),
    []
  );

  const onSearchEvent = (e) => {
    onDebounce(e.target.value);
  };
  //  const onRefetchWhenCreate = () => {
  //     setPage(1);
  //     setRefetchStatus(true);
  //     setShowingDataLoading(true);
  //     getHostelHostelitesListRefetch();
  //   };
  const onExcelFileUpload = (e) => {
    // console.info("this is excel up,lsd", e.target.files[0]);
    setDisabled((pre) => !pre);
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    oneFileUpload({
      fileUpload: formData,
    })
      .then((res) => {
        if (res.data?.imageKey) {
          addHostilesExcelByHostel({
            hid: hid,
            excelFile: {
              excel_file: res.data?.imageKey,
            },
          })
            .then(() => {
              setDisabled((pre) => !pre);
            })
            .catch({});
        } else {
          setDisabled((pre) => !pre);
        }
      })
      .catch({});
  };
  //   const onClose = () => {
  //     setAdd((pre) => !pre);
  //   };

  return (
    <>
      <div className={style.with_search}>
        <h6>{t("hostelites")}</h6>
        <section
          className={style.search_container}
          style={{
            gap: "1rem",
          }}
        >
          <div className={style.search_container_input}>
            <img
              className={style.searchIcon}
              alt="search icon"
              src="/images/search-dash-icon.svg"
            />
            <input
              type="text"
              placeholder="Search hostelites..."
              onChange={onSearchEvent}
            />
          </div>
          {viewAs === "INSTITUTE" ? (
            ""
          ) : (
            <div
              style={{
                marginRight: "1rem",
              }}
            >
              <label className={style.upload_excel_file} htmlFor="uploadExcel">
                <img
                  src="/images/upload-xslx-icon.svg"
                  alt="add student icon"
                  title="Upload excel file"
                />
              </label>
              <input
                type={"file"}
                id="uploadExcel"
                accept=".xlsx"
                onChange={onExcelFileUpload}
                style={{
                  display: "none",
                }}
              />
            </div>
          )}
        </section>
      </div>
      <BorderBottom
        customStyle={{
          marginTop: "0.5rem",
          marginBottom: "0.6rem",
          width: "100%",
        }}
      />

      {hostelitesList?.map((hostelites, index) =>
        hostelitesList?.length === index + 1 ? (
          <div ref={ref} key={hostelites?._id}>
            <HostelitesCard hostelites={hostelites} />
          </div>
        ) : (
          <HostelitesCard hostelites={hostelites} key={hostelites?._id} />
        )
      )}
      {showingDataLoading && <QvipleLoading />}
      {disabled && <QLoader />}
    </>
  );
};

export default Hostelites;
