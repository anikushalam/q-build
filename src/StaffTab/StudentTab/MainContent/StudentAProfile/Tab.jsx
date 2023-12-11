import * as React from "react";
import Box from "@mui/material/Box";
import TabContent from "./TabContent";
import Tabbs from "./Tabs/Tabs";
import { useState } from "react";
import style from "./Tab.module.css";
import QvipleLoading from "../../../../Loader/QvipleLoading";
const FeesData = React.lazy(() => import("./FeesData"));
const StudentReportCardIns = React.lazy(() =>
  import("./StudentReportCardIns/StudentReportCardIns")
);
const ExtraSkills = React.lazy(() =>
  import(
    "../../../../MembersTab/student/Mainbody/ViewProfile/ExtraSkills/ExtraSkills"
  )
);
export default function BasicTabs({
  tabData,
  setReportCard,
  studentId,
  setYearId,
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Box sx={{ width: "100%" }}>
      <div className={style.tabs}>
        <Tabbs activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      </div>

      {activeIndex === 0 && <TabContent tabDetail={tabData && tabData} />}
      {activeIndex === 1 && (
        <QvipleLoading>
          <ExtraSkills sid={studentId} />
        </QvipleLoading>
      )}
      {activeIndex === 2 && (
        <QvipleLoading>
          <FeesData studentId={tabData?._id} />
        </QvipleLoading>
      )}
      {activeIndex === 3 && (
        <QvipleLoading>
          <StudentReportCardIns
            setReportCard={setReportCard}
            studentId={studentId}
            setYearId={setYearId}
          />
        </QvipleLoading>
      )}
    </Box>
  );
}
