import React, { useEffect, useState } from "react";
import style from "./MiddleContent.module.css";
import Tabs from "./Tabs";
import { useTranslation } from "react-i18next";
import { useDepartmentBatchAllClass } from "../../../../../../hooks/member_tab/department-api";
import { imageShowUrl } from "../../../../../../services/BaseUrl";
import DepartmentTabChangeLink from "../../DepartmentTabChangeLink";
import CustomSuspense from "../../../../../../Custom/SuspenseLoading/CustomSuspense";
import { useOneClassEditDetail } from "../../../../../../Department/Institute/Components/DepartmentApi/depart-api";
const CreateClass = React.lazy(() =>
  import("../../../../../../Dashboard/InsDashboard/Modals/Class/CreateClass")
);
function MiddleContent({ bid, carryParentState, instituteId }) {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const [edit, setEdit] = useState("");
  const { departmentBatchAllClass, departmentBatchAllClassRefetch } =
    useDepartmentBatchAllClass({
      data: { bid: bid, page: 1, limit: 20 },
      skip: !bid,
    });
  const { classEditDetail, classEditDetailRefetch } = useOneClassEditDetail({
    cid: edit,
    skip: !edit,
  });
  useEffect(() => {
    if (bid) departmentBatchAllClassRefetch();
  }, [bid, departmentBatchAllClassRefetch]);
  useEffect(() => {
    if (edit) classEditDetailRefetch();
  }, [edit, classEditDetailRefetch]);
  const onMenu = (e, value) => {
    e.preventDefault();
    setEdit(value);
  };
  return (
    <>
      <div className={style.MiddleContent}>
        <div className={style.MiddleContentLeft}>
          <div className={style.tabs}>
            <Tabs activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
          </div>

          {activeIndex === 0 && (
            <div className={style.item}>
              <DepartmentTabChangeLink
                carryParentState={carryParentState}
                activeTab="staff"
              >
                <div className={style.itemIcon}>
                  <img
                    src="/images/member_tab/department/department-staff-icon.svg"
                    alt="staff room"
                  />
                  <p>{t("staff_room")}</p>
                </div>
              </DepartmentTabChangeLink>
              <DepartmentTabChangeLink
                carryParentState={carryParentState}
                activeTab="mentor"
              >
                <div className={style.itemIcon}>
                  <img
                    src="/images/member_tab/department/department-mentor-icon.svg"
                    alt="mentor avatar"
                  />
                  <p>{t("mentoring")}</p>
                </div>
              </DepartmentTabChangeLink>
              <DepartmentTabChangeLink
                carryParentState={carryParentState}
                activeTab="fees"
              >
                <div className={style.itemIcon}>
                  <img
                    src="/images/member_tab/department/department-fees-icon.svg"
                    alt="functions"
                  />
                  <p>{t("department_fees")}</p>
                </div>
              </DepartmentTabChangeLink>

              <DepartmentTabChangeLink
                carryParentState={carryParentState}
                activeTab="checklist"
              >
                <div className={style.itemIcon}>
                  <img
                    src="/images/member_tab/department/department-checklist-icon.svg"
                    alt="competitons"
                  />
                  <p>{t("checklist")}</p>
                </div>
              </DepartmentTabChangeLink>
              <DepartmentTabChangeLink
                carryParentState={carryParentState}
                activeTab="exam"
              >
                <div className={style.itemIcon}>
                  <img
                    src="/images/member_tab/department/department-examination-icon.svg"
                    alt="functions"
                  />
                  <p>{t("examinations")}</p>
                </div>
              </DepartmentTabChangeLink>
              <DepartmentTabChangeLink
                carryParentState={carryParentState}
                activeTab="malicious"
              >
                <div className={style.itemIcon}>
                  <img
                    src="/images/member_tab/department/department-malicious-icon.svg"
                    alt="backlogs"
                  />
                  <p>{t("malicious_practices")}</p>
                </div>
              </DepartmentTabChangeLink>
              <DepartmentTabChangeLink
                carryParentState={carryParentState}
                activeTab="backlog&standard"
              >
                <div className={style.itemIcon}>
                  <img
                    src="/images/member_tab/department/department-backlog-icon.svg"
                    alt="backlogs"
                  />
                  <p>{t("backlog")}</p>
                </div>
              </DepartmentTabChangeLink>
              <DepartmentTabChangeLink
                carryParentState={carryParentState}
                activeTab="holiday"
              >
                <div className={style.itemIcon}>
                  <img
                    src="/images/member_tab/department/department-holiday-icon.svg"
                    alt="holiday"
                  />
                  <p>{t("holidays")}</p>
                </div>
              </DepartmentTabChangeLink>

              <DepartmentTabChangeLink
                carryParentState={carryParentState}
                activeTab="complaint"
              >
                <div className={style.itemIcon}>
                  <img
                    src="/images/member_tab/department/department-complaint-icon.svg"
                    alt="settings"
                  />
                  <p>{t("department_complaints")}</p>
                </div>
              </DepartmentTabChangeLink>
              <DepartmentTabChangeLink
                carryParentState={carryParentState}
                activeTab="setting"
              >
                <div className={style.itemIcon}>
                  <img
                    src="/images/member_tab/class/class-setting-icon.svg"
                    alt="settings"
                  />
                  <p>{t("setting")}</p>
                </div>
              </DepartmentTabChangeLink>
            </div>
          )}

          {activeIndex === 1 && (
            <div
              className={style.classList}
              style={{
                position: "relative",
              }}
            >
              {departmentBatchAllClass?.batch?.classroom?.map((cls) => (
                <DepartmentTabChangeLink
                  carryParentState={{
                    ...carryParentState,
                    clsId: cls?._id,
                    clsName: `${cls?.className} - ${cls?.classTitle}`,
                    teacherName: `${cls?.classTeacher?.staffFirstName ?? ""} ${
                      cls?.classTeacher?.staffMiddleName || ""
                    } ${cls?.classTeacher?.staffLastName ?? ""}`,
                  }}
                  activeTab="class-detail"
                  key={cls._id}
                >
                  <div
                    className={style.classListItem}
                    style={{
                      justifyContent: "space-between",
                    }}
                  >
                    <div className={style.class_head_name}>
                      <img
                        src={
                          cls?.classTeacher?.staffProfilePhoto
                            ? `${imageShowUrl}/${cls?.classTeacher?.staffProfilePhoto}`
                            : "/images/classes.svg"
                        }
                        alt="class head avatar"
                        style={{
                          borderRadius: "0",
                        }}
                      />
                      <div>
                        <h6>{cls?.classTitle}</h6>
                        <p>{`${cls?.classTeacher?.staffFirstName ?? ""} ${
                          cls?.classTeacher?.staffMiddleName || ""
                        } ${cls?.classTeacher?.staffLastName ?? ""}`}</p>
                      </div>
                    </div>

                    <img
                      src="/images/three-24-dot-icon.svg"
                      alt="menu icon"
                      onClick={(e) => onMenu(e, cls?._id)}
                      title="Menu"
                      style={{
                        cursor: "pointer",
                        height: "1.5rem",
                      }}
                    />
                  </div>
                </DepartmentTabChangeLink>
              ))}
            </div>
          )}
        </div>
      </div>
      <CustomSuspense>
        {edit && (
          <CreateClass
            departmentModal={edit ? true : false}
            hideModal={() => setEdit("")}
            edit={edit}
            setEdit={setEdit}
            editClass={classEditDetail?.classes}
            onRefetch={classEditDetailRefetch}
            isEditBy="DEPARTMENT_HEAD"
            id={instituteId}
          />
        )}
      </CustomSuspense>
    </>
  );
}

export default MiddleContent;
