import { assestsUserFinanceUrl } from "../../../../Services/UrlConfig/AssestsBaseUrl";
import style from "../FeesStructure.module.css";
import { useState } from "react";
import FeesCategoryMenu from "./FeesCategoryMenu";
const FeesCategoryCard = ({ category, fid }) => {
  const [openCategoryMenu, setOpenCategoryMenu] = useState("");
  const onMenu = () => {
    setOpenCategoryMenu(category?._id);
  };
  const onClose = () => {
    setOpenCategoryMenu("");
  };
  return (
    <>
      <div className={style.category_card}>
        <img src={`${assestsUserFinanceUrl}/category.svg`} alt="categor icon" />
        <h6>
          {category?.category_name ?? ""}{" "}
          {category?.secondary_category?.category_name ? (
            <span
              style={{
                fontSize: "11px",
                fontWeight: "400",
              }}
            >
              ({category?.secondary_category?.category_name ?? ""})
            </span>
          ) : (
            ""
          )}
        </h6>

        <img
          src={`${assestsUserFinanceUrl}/menu.svg`}
          alt="menu icon"
          onClick={onMenu}
          className={style.menu_icon}
          title="Menu"
        />
      </div>
      {openCategoryMenu && (
        <FeesCategoryMenu
          fid={fid}
          onClose={onClose}
          openCategoryMenu={openCategoryMenu}
        />
      )}
    </>
  );
};

export default FeesCategoryCard;
