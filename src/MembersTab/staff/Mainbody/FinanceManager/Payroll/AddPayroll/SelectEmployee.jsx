import React, { useState } from "react";
import { useSelector } from "react-redux";
import { imageShowUrl } from "../../../../../../services/BaseUrl";
import { useGetAllEmployeeStaffQuery } from "../../../../../../services/financeAPI";
import { useAssignSearchStaff } from "../../../../../../Post/Institute/Components/search-api";
import style from "./AddPayroll.module.css";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useCallback } from "react";
import { debounce } from "lodash";

function Item({ val, chooseEmployee, index, setIndex }) {
  return (
    <div
      className={style.item}
      onClick={() => {
        chooseEmployee(val);
        setIndex(1);
      }}
    >
      <img
        alt="staff profile"
        src={
          val?.photoId !== "1"
            ? `${imageShowUrl}/${val?.staffProfilePhoto}`
            : "/images/member_tab/class/default_avatar.svg"
        }
      />
      <div>
        <p>{`${val?.staffFirstName} ${
          val?.staffMiddleName ? val?.staffMiddleName : ""
        } ${val?.staffLastName}`}</p>
        <p className={style.index}>{val?.staffROLLNO}</p>
      </div>
    </div>
  );
}

function SelectEmployee({
  payrollData,
  setPayrollData,
  hideModal,
  setIndex,
  insId,
}) {
  const financeAuthor = useSelector((state) => state.financeChange);
  const { data: allStafff } = useGetAllEmployeeStaffQuery(
    `${financeAuthor?.fid}`
  );

  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [ref, inView] = useInView();
  const [search, setSearch] = useState("");
  const [allStaff, setAllStaff] = React.useState([]);

  const { assignSearchStaff, assignSearchStaffRefetch } = useAssignSearchStaff({
    skip: !insId,
    search: { search: search, page: page, id: insId, limit: 10 },
  });

  React.useEffect(() => {
    if (insId) assignSearchStaffRefetch();
  }, [insId, assignSearchStaffRefetch, page]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  React.useEffect(() => {
    if (assignSearchStaff?.staff) {
      if (search) {
        setAllStaff(assignSearchStaff?.staff);
      } else {
        const uniquePost = [...allStaff, ...assignSearchStaff?.staff];
        const uniqueRefind = [...new Set(uniquePost.map(JSON.stringify))].map(
          JSON.parse
        );
        setAllStaff(uniqueRefind);
      }
    }

    //for next api is call or not dashboard
    if (assignSearchStaff?.staff.length === 10) setState(true);
    else setState(false);
  }, [assignSearchStaff?.staff]);

  const handleSearch = () => {
    assignSearchStaffRefetch();
  };

  useEffect(() => {
    if (search) handleSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const deb = useCallback(
    debounce((val) => setSearch(val), 500),
    []
  );

  const searchHandler = (val) => {
    deb(val);
  };

  return (
    <div className={style.scheduleModal}>
      <div className={style.modalTitle}>
        <img
          src="/images/members/arrow-left.svg"
          alt=""
          onClick={() => hideModal(false)}
        />
        <h6>Staff List</h6>
        <div></div>
      </div>

      <div className={style.assign_search_container}>
        <input
          type="text"
          placeholder="Search"
          className={style.assign_search_input}
          // value={search}
          onChange={(e) => searchHandler(e.target.value)}
        />
        <img src="/images/search-dash-icon.svg" alt="search icon" />
      </div>

      <div className={style.modalBody}>
        {allStaff?.map((e, index) =>
          allStaff?.length === index + 1 ? (
            <Item
              ref={ref}
              key={index}
              index={index + 1}
              val={e}
              chooseEmployee={(val) =>
                setPayrollData({ ...payrollData, staff: val })
              }
              setIndex={setIndex}
            />
          ) : (
            <Item
              key={index}
              index={index + 1}
              val={e}
              chooseEmployee={(val) =>
                setPayrollData({ ...payrollData, staff: val })
              }
              setIndex={setIndex}
            />
          )
        )}
      </div>
    </div>
  );
}

export default SelectEmployee;
