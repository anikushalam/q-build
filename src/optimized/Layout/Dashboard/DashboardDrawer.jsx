import {
  assestsLogoUrl,
  assestsUserMemberUrl,
} from "@/Services/UrlConfig/AssestsBaseUrl";
import style from "./DashboardLayout.module.css";
import { systemMeasure } from "@/Utils/Functions/systemMeasure";
const DashboardDrawer = ({ children }) => {
  const { width } = systemMeasure();

  return (
    <div
      className={style.dl_dw}
      style={{
        "--dl-width": width < 1280 ? "30px" : "180px",
      }}
    >
      <div className={style.dl_dw_logo}>
        <img
          src={`${assestsUserMemberUrl}/hamburger.svg`}
          alt="go back icon"
          style={{
            height: "0.9rem",
          }}
          // onClick={onSidebarCollaps}
        />
        <img
          className={style.f_right_qviple_logo}
          src={`${assestsLogoUrl}/qviple-text-logo.svg`}
          alt="company logo"
        />
      </div>
      {children}
    </div>
  );
};

export default DashboardDrawer;
