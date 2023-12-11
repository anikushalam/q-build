import React, { useState } from "react";
import { useDepartmentAllStaff } from "../../../../../hooks/member_tab/department-api";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import style from "./StaffRoom.module.css";
import { useTranslation } from "react-i18next";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import { Link, useParams } from "react-router-dom";
function StaffRoom({ did }) {
  const { t } = useTranslation();
  const params = useParams();
  const [staffList, setStaffList] = React.useState([]);
  const [showingDataLoading, setShowingDataLoading] = useState(true);

  const { departmentAllStaff, departmentAllStaffRefetch } =
    useDepartmentAllStaff({
      data: {
        did: did,
        page: 1,
        limit: 20,
      },
      skip: !did,
    });

  React.useEffect(() => {
    if (did) {
      setShowingDataLoading(true);
      departmentAllStaffRefetch();
    }
  }, [did, departmentAllStaffRefetch]);

  React.useEffect(() => {
    if (departmentAllStaff?.department?.departmentChatGroup) {
      setStaffList((prevState) =>
        [
          ...new Set(
            [
              ...prevState,
              ...departmentAllStaff?.department?.departmentChatGroup,
            ].map(JSON.stringify)
          ),
        ].map(JSON.parse)
      );
      setShowingDataLoading(false);
    } else if (
      departmentAllStaff?.department?.departmentChatGroup?.length === 0
    )
      setShowingDataLoading(false);
    else {
    }
  }, [departmentAllStaff?.department?.departmentChatGroup]);

  const onSearchStaff = (e) => {
    if (e.target.value) {
      const filterStaff =
        departmentAllStaff?.department?.departmentChatGroup?.filter((staff) => {
          if (
            `${staff?.staffFirstName} ${
              staff?.staffMiddleName ? staff?.staffMiddleName + " " : ""
            }${staff?.staffLastName}`
              ?.toLowerCase()
              ?.includes(e.target.value?.toLowerCase())
          ) {
            return staff;
          } else {
            return null;
          }
        });
      setStaffList(filterStaff);
    } else {
      setStaffList(departmentAllStaff?.department?.departmentChatGroup);
    }
  };
  // console.info("Hi my there", staffList);
  return (
    <div className={style.staffRoom}>
      <div className={style.backFlex}>
        <div className={style.searchContainer}>
          <img src="/images/search-dept-icon.svg" alt="" />
          <input
            type="text"
            placeholder={t("search")}
            onChange={onSearchStaff}
          />
        </div>
      </div>

      <div className={style.itemsContainer}>
        {staffList?.map((staff) => (
          <Link
            key={staff?._id}
            to={`/q/${params.username}/staff/profile`}
            state={{
              sid: staff?._id,
              viewAs: "DEPARTMENT_HEAD",
            }}
          >
            <div className={style.item}>
              <p>{staff?.staffROLLNO}</p>
              <img
                src={
                  staff?.staffProfilePhoto
                    ? `${imageShowUrl}/${staff?.staffProfilePhoto}`
                    : "/images/member_tab/class/default_avatar.svg"
                }
              />
              <p>
                {`${staff?.staffFirstName} ${
                  staff?.staffMiddleName ? staff?.staffMiddleName : ""
                } ${staff?.staffLastName}`}
              </p>
            </div>
          </Link>
        ))}
        {showingDataLoading && <QvipleLoading />}
      </div>
    </div>
  );
}

export default StaffRoom;
