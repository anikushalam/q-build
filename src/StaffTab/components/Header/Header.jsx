import { display } from "@mui/system";
import { imageShowUrl } from "../../../services/BaseUrl";
import style from "./Header.module.css";

const Header = ({ display }) => {
  return (
    <>
      <div className={style.header}>
        <div className={style.imgContainer}>
          <img
            src={
              display?.photoId !== "1"
                ? `${imageShowUrl}/${display?.insProfilePhoto}`
                : "/images/ins_default_profile.svg"
            }
          />
        </div>
        <div className={style.textContainer}>
          <h5>{display && display.name}</h5>
          <p>{display && display.insName}</p>
          <p>{display && display.insAbout}</p>
        </div>
      </div>
    </>
  );
};

export default Header;
