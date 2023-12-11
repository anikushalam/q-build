import { useFinanceAllFeesCategory } from "../../../../Hooks/ApiHooks/FinanceManager/finance-manager-api";
import { assestsUserFinanceUrl } from "../../../../Services/UrlConfig/AssestsBaseUrl";
import BorderBottom from "../../../../Ui/Border/BorderBottom";
import Modal from "../../../../Ui/Modal/Modal";
import UserMemberContentWrapper from "../../../../Ui/UserMember/UserMemberContentWrapper";
import { useTranslation } from "react-i18next";
import style from "../FeesStructure.module.css";
const SelectFeesCategoryList = ({ fid, selectedId, onSecondary, onClose }) => {
  const { t } = useTranslation();
  const { financeAllFeesCategory, financeAllFeesCategoryLoading } =
    useFinanceAllFeesCategory({
      fid: fid,
      skip: !fid,
    });
  return (
    <Modal onClose={onClose}>
      <div className={style.modal_container}>
        <UserMemberContentWrapper>
          <div className={style.modal_container_outer_header}>
            <div className={style.modal_container_header}>
              <h6>{t("select_secondary_category")}</h6>
            </div>
            <img
              src={`${assestsUserFinanceUrl}/close.svg`}
              alt="close icon"
              onClick={onClose}
            />
          </div>
        </UserMemberContentWrapper>
        <BorderBottom />
        <UserMemberContentWrapper
          customStyle={{
            paddingTop: "0",
          }}
        >
          {financeAllFeesCategory?.map((category) =>
            category?._id === selectedId ? (
              ""
            ) : (
              <div
                className={`${style.category_card} ${style.add_category_modal_title_active}`}
                key={category?._id}
                onClick={() => onSecondary(category?._id)}
              >
                <img
                  src={`${assestsUserFinanceUrl}/category.svg`}
                  alt="categor icon"
                />

                <h6>{category?.category_name ?? ""}</h6>
              </div>
            )
          )}
        </UserMemberContentWrapper>
      </div>
    </Modal>
  );
};

export default SelectFeesCategoryList;
