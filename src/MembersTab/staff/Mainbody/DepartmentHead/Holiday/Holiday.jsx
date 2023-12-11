import React, { useEffect } from "react";
import { useState } from "react";
import { useDepartmentAllHoliday } from "../../../../../hooks/member_tab/department-api";
import style from "./Holiday.module.css";
import HolidayForm from "./HolidayForm/HolidayForm";
import HolidayList from "./HolidayList/HolidayList";
function Holiday({ did }) {
  const [allHoliday, setAllHoliday] = useState([]);
  const { departmentAllHoliday, departmentAllHolidayRefetch } =
    useDepartmentAllHoliday({
      did: did,
      page: 1,
      limit: 20,
    });
  // console.info("THis is all holiday", departmentAllHoliday);

  useEffect(() => {
    if (departmentAllHoliday?.depart?.holiday) {
      const arr = [];
      departmentAllHoliday?.depart?.holiday?.map((arrVal) =>
        arrVal?.dDate?.map((dat) => {
          const val = dat?.split("/");
          const day = val[0] > 9 ? val[0] : `${val[0]?.slice(1, 2)}`;
          const month = val[1] > 9 ? val[1] : `${val[1]?.slice(1, 2)}`;
          arr.push(`${day}-${month}-${val[2]}`);
          return "";
        })
      );
      setAllHoliday(arr);
    }
  }, [departmentAllHoliday?.depart?.holiday]);

  return (
    <div className={style.checklistContainer}>
      {/* <div className={style.backFlex}>
        <h6 className={style.backh} onClick={() => setProfile(true)}>
          Back
        </h6>
      </div> */}
      <div className={style.holiday}>
        <div className={style.form}>
          <HolidayForm
            did={did}
            onRefetch={departmentAllHolidayRefetch}
            allHoliday={allHoliday}
          />
        </div>

        <div className={style.list}>
          <HolidayList holiday={departmentAllHoliday?.depart?.holiday} />
        </div>
      </div>
    </div>
  );
}

export default Holiday;
