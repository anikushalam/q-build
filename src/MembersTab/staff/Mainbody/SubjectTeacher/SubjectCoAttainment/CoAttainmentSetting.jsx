import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useGetAllCopoAttainment } from "../../../../../hooks/member_tab/subject-api";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import EmptyInfo from "../../../../../Loader/EmptyInfo";
import style from "../../DepartmentHead/Exminations/Exminations.module.css";
import AddCoAttainmentSetting from "./AddCoAttainmentSetting";
import CoAttainmentSettingCard from "./CoAttainmentSettingCard";
const CoAttainmentSetting = ({ smid }) => {
  const { t } = useTranslation();
  const [add, setAdd] = useState(false);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const { getAllCopoAttainment, getAllCopoAttainmentRefetch } =
    useGetAllCopoAttainment({
      data: {
        smid: smid,
        flow: "VIEWING_COPO",
      },
      skip: !smid,
    });
  useEffect(() => {
    if (smid) getAllCopoAttainmentRefetch();
  }, [smid, getAllCopoAttainmentRefetch]);

  useEffect(() => {
    if (
      getAllCopoAttainment?.attainment?.length ||
      getAllCopoAttainment?.attainment?.length === 0
    ) {
      setShowingDataLoading(false);
    } else {
    }
  }, [getAllCopoAttainment?.attainment]);
  const onToggleAdd = () => {
    setAdd((pre) => !pre);
  };

  return (
    <>
      <div className={style.add_new_container}>
        <p className={style.add_new_exam} onClick={onToggleAdd}>
          {t("create_new_copo")}
        </p>
      </div>
      {getAllCopoAttainment?.attainment?.map((attainment) => (
        <CoAttainmentSettingCard
          attainment={attainment}
          key={attainment?._id}
          onRefetch={getAllCopoAttainmentRefetch}
        />
      ))}
      {!showingDataLoading && !getAllCopoAttainment?.attainment?.length && (
        <EmptyInfo
          customStyleContainer={{
            marginTop: "9rem",
          }}
          title={"No copo found"}
          subtitle={"Please make sure you have created copo."}
        />
      )}
      {add && (
        <AddCoAttainmentSetting
          onClose={onToggleAdd}
          smid={smid}
          onRefetch={getAllCopoAttainmentRefetch}
          count={getAllCopoAttainment?.attainment_count + 1}
          poCount={getAllCopoAttainment?.attainment_po_count + 1}
        />
      )}
      {showingDataLoading && <QvipleLoading />}
    </>
  );
};

export default CoAttainmentSetting;
