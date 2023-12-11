import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";
import QvipleLoading from "../../../../../../Loader/QvipleLoading";
import { useGetAllEmployeeQuery } from "../../../../../../services/financeAPI";
import style from "../Payroll.module.css";
import AddEmployee from "./AddEmployee";
import EmployeeAccount from "./EmployeeAccount";
import EmployeeStaffCard from "./EmployeeStaffCard";
const Employee = () => {
  const { t } = useTranslation();
  const fid = useSelector((state) => state.financeChange.fid);
  const [openEmployee, setOpenEmployee] = useState(false);
  const [ref, inView] = useInView();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [refetchStatus, setRefetchStatus] = useState(false);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [staffList, setStaffList] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState("");
  const { data: employeeList, refetch: employeeListRefetch } =
    useGetAllEmployeeQuery(
      {
        fid: fid,
        page: page,
        limit: 10,
      },
      { skip: !fid }
    );
  useEffect(() => {
    if (fid) {
      setShowingDataLoading(true);
      employeeListRefetch();
    }
  }, [fid, page, employeeListRefetch]);
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (refetchStatus) {
      setStaffList(employeeList?.allEmp);
      setRefetchStatus(false);
      setShowingDataLoading(false);
    } else {
      if (employeeList?.allEmp) {
        setStaffList((prevState) =>
          [
            ...new Set(
              [...prevState, ...employeeList?.allEmp]?.map(JSON.stringify)
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
      } else if (employeeList?.allEmp?.length === 0)
        setShowingDataLoading(false);
      else {
      }
    }

    if (employeeList?.allEmp?.length === 10) setState(true);
    else setState(false);
  }, [employeeList?.allEmp]);

  const onRefetchWhenAdd = () => {
    setRefetchStatus(true);
    setPage(1);
    setShowingDataLoading(true);
    employeeListRefetch();
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <h6
          className={style.add_new_payroll}
          onClick={() => setOpenEmployee(true)}
        >
          {t("add_new_employess")}
        </h6>
      </div>

      {staffList?.map((staff, index) =>
        staffList?.length === index + 1 ? (
          <div ref={ref} key={staff?.staff?._id}>
            <EmployeeStaffCard
              staff={staff}
              setSelectedEmployee={setSelectedEmployee}
            />
          </div>
        ) : (
          <EmployeeStaffCard
            staff={staff}
            key={staff?.staff?._id}
            setSelectedEmployee={setSelectedEmployee}
          />
        )
      )}
      {openEmployee && (
        <AddEmployee
          onRefetch={onRefetchWhenAdd}
          onClose={() => setOpenEmployee(false)}
          financeId={fid}
        />
      )}
      {selectedEmployee && (
        <EmployeeAccount
          selectedEmployee={selectedEmployee}
          onClose={() => setSelectedEmployee("")}
          financeId={fid}
        />
      )}
      {showingDataLoading && <QvipleLoading />}
    </>
  );
};

export default Employee;
