import { assestsLoadingUrl } from "../Services/UrlConfig/AssestsBaseUrl";
import style from "./Loader.module.css";
const Loading = ({ isGrey }) => {
  return (
    <div className={style.q_loading}>
      <img
        src={
          isGrey
            ? `${assestsLoadingUrl}/loading-grey.gif`
            : `${assestsLoadingUrl}/loading.gif`
        }
        alt="loading icon"
      />
    </div>
  );
};

export default Loading;
