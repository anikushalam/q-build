import UserDrawer from "@/Feed/User/UserDrawer";
import style from "./DashboardLayout.module.css";
import { systemMeasure } from "@/Utils/Functions/systemMeasure";

const DashboardLayout = ({ activeTab, children }) => {
  const { width, height } = systemMeasure();
  return (
    <div className={style.dl_user_feed}>
      <div
        className={style.dl_user_feed_drawer}
        style={{
          "--dl-height": `${height - 35}px`,
          width: width < 1280 ? "50px" : "fit-content",
          flex: width < 1280 ? "none" : "0.7 0.7",
        }}
      >
        <UserDrawer activeTab={activeTab} />
      </div>
      {children}
    </div>
  );
};

export default DashboardLayout;
