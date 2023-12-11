import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import CustomSuspense from "../../../Custom/SuspenseLoading/CustomSuspense";
import { useOneDepartmenteEditDetail } from "../../../Department/Institute/Components/DepartmentApi/depart-api";
import { imageShowUrl } from "../../../services/BaseUrl";
import CommonSidebarBackground from "../../CommonSidebarBackground";
import { useTranslation } from "react-i18next";
import CommonSideCard from "../../CommonSideCard";
import Goback from "../../Goback";
import { useParams } from "react-router-dom";
const CreateDepartment = React.lazy(() =>
  import("../../../Dashboard/InsDashboard/Modals/Department/CreateDepartment")
);
const EditDepartment = React.lazy(() =>
  import(
    "../../../Department/InsDepartment/Components/DepartmentTab/EditDepartment"
  )
);
const DepartmentSidebar = ({ department, onReftech, did }) => {
  const { t } = useTranslation();
  const params = useParams();
  const ids = useSelector((state) => state.idChange);
  const [openMenu, setOpenMenu] = React.useState(false);
  const [state, setState] = React.useState(false);
  const [edit, setEdit] = React.useState(false);
  const [editDepartment, setEditDepartment] = React.useState("");

  const { departmentEditDetail, departmentEditDetailRefetch } =
    useOneDepartmenteEditDetail({
      did: editDepartment,
      skip: !editDepartment,
    });
  useEffect(() => {
    if (editDepartment) departmentEditDetailRefetch();
  }, [editDepartment, departmentEditDetailRefetch]);
  const editOneDepartment = (data) => {
    setEditDepartment(data);
    setEdit(true);
    setState(true);
  };

  const onOpenMenu = () => {
    setOpenMenu((pre) => !pre);
  };

  return (
    <>
      <div
        style={{
          position: "sticky",
          top: "77px",
          height: "fit-content",
        }}
      >
        <Goback whichType="PREVIOUS_GO" />
        <CommonSidebarBackground
          dynamicImage={
            department?.cover
              ? `${imageShowUrl}/${department?.cover}`
              : "/images/profileAndCover/department-cover.svg"
          }
          edit={true}
          onEditAction={onOpenMenu}
          isView="DEPARTMENT"
          redirectUrl={`/q/${params.username}/viewdept?a=site`}
          isSiteInfo="DEPARTMENT"
          carryParentState={{
            did: did,
          }}
        />
        <CommonSideCard
          cardAsHead={true}
          heading={`${department?.dTitle || t("designation")}: ${
            department?.dHead?.staffFirstName || ""
          } ${
            department?.dHead?.staffMiddleName
              ? department?.dHead?.staffMiddleName
              : ""
          } ${department?.dHead?.staffLastName || ""}`}
          description={
            department?.departmentSelectBatch?.batchName ||
            t("not_active_batch")
          }
          customStyleCard={{
            borderRadius: "18px 18px 0px 0px",
            border: "none",
            marginTop: "-1.49vw",
            maxWidth: "264px",
          }}
        />
        <CommonSideCard
          cardAsHead={false}
          heading={t("classrooms")}
          description={t("class_in_batch")}
          count={department?.classCount || 0}
        />
        <CommonSideCard
          cardAsHead={false}
          heading={t("total_staffs")}
          description={t("active_staff")}
          count={department?.staffCount || 0}
        />
        <CommonSideCard
          cardAsHead={false}
          heading={t("total_students")}
          description={t("student_studying")}
          count={department?.studentCount || 0}
          customStyleCard={{
            borderRadius: "0 0 12px 12px",
            borderBottom: "0.4px solid rgba(0, 0, 0, 0.15)",
          }}
        />
      </div>
      {openMenu && (
        <CustomSuspense>
          <EditDepartment
            onOpenMenu={onOpenMenu}
            onId={department?._id}
            onReftech={onReftech}
            editOneDepartment={editOneDepartment}
          />
        </CustomSuspense>
      )}
      {state && (
        <CustomSuspense>
          <CreateDepartment
            departmentModal={state}
            hideModal={setState}
            id={ids?.id}
            edit={edit}
            setEdit={setEdit}
            editDepartment={departmentEditDetail?.department}
            onReftech={onReftech}
          />
        </CustomSuspense>
      )}
    </>
  );
};

export default DepartmentSidebar;
