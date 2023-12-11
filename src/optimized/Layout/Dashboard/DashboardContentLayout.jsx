import FeedQvipleAbout from "@/Feed/FeedQvipleAbout";
import style from "./DashboardLayout.module.css";

const DashboardContentLayout = ({ children }) => {
  return (
    <div className={style.dc_layout}>
      {children}

      <FeedQvipleAbout
        customStyleContainer={{
          marginTop: "3rem",
        }}
      />
    </div>
  );
};

export default DashboardContentLayout;
