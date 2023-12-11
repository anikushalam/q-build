import { assestsUserFinanceUrl } from "../../../../Services/UrlConfig/AssestsBaseUrl";
import style from "../FeesStructure.module.css";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import FeeHeadMenu from "./FeeHeadMenu";
const FeeHeadCard = ({ feeHead, fid }) => {
  const { t } = useTranslation();
  const [openFeeHeadMenu, setOpenFeeHeadMenu] = useState("");
  const onMenu = () => {
    setOpenFeeHeadMenu(feeHead);
  };
  const onClose = () => {
    setOpenFeeHeadMenu("");
  };
  return (
    <>
      <div className={style.category_card} key={feeHead?._id}>
        <img
          style={{
            height: "36px",
            width: "36px",
          }}
          src={`${assestsUserFinanceUrl}/category.svg`}
          alt="categor icon"
        />
        <div className={style.category_card_fee}>
          <h6
            style={{
              marginBottom: "0.3rem",
            }}
          >
            {feeHead?.master_name ?? ""}
          </h6>
          <h6
            style={{
              color: "rgba(18, 18, 18, 0.5)",
            }}
          >
            {t("rs_only")}
            {feeHead?.master_amount ?? 0}
          </h6>
        </div>
        {!["Hostel Linked", "Linked", "Transport Linked"].includes(
          feeHead?.master_status
        ) ? (
          <img
            src={`${assestsUserFinanceUrl}/menu.svg`}
            alt="menu icon"
            onClick={onMenu}
            className={style.menu_icon}
            title="Menu"
          />
        ) : (
          ""
        )}
      </div>
      {openFeeHeadMenu && (
        <FeeHeadMenu
          fid={fid}
          onClose={onClose}
          openFeeHeadMenu={openFeeHeadMenu}
        />
      )}
    </>
  );
};

export default FeeHeadCard;
