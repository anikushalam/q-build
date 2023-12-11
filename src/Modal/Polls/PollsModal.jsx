import React from "react";
import style from "./PollModal.module.css";
import { Dialog } from "@mui/material";
import { useTranslation } from "react-i18next";

const categoryList = [
  "Science & Education",
  "Finanical & Business News",
  "Politics",
  "Sports",
  "Lifstyle (Fashion, Travel, Wellness)",
  "Entertainment & Pop Culture",
  "Food & Drink",
  "Comedy",
  "Automotive",
  "Beauty",
  "Books and Literature",
  "Business",
  "Careers",
  "Education",
  "Events",
  "Family and Parenting",
  "Gaming",
  "Health",
  "Hobbies and Interests",
  "Home and Garden",
  "Law, Government",
  "Life Stages",
  "Movies and Television",
  "Music and Radio",
  "Personal Finance",
  "Pets",
  "Science",
  "Society",
  "Style and Fashion",
  "Technology and Computing",
  "Travel",
];
function PollsModal({ open, setOpen, setTrendCategoryRef }) {
  const selectCategoryHandler = (val) => {
    setTrendCategoryRef(val);
    setOpen(false);
  };
  const { t } = useTranslation();
  return (
    <Dialog open={open}>
      <div className={style.DModal}>
        <div className={style.title}>
          <div></div>
          <h6>{t("choose_category")}</h6>
          {/* 
          <img
            src="/images/close-post-icon.svg"
            onClick={() => setOpen(false)}
            alt="close icon"
          /> */}
        </div>

        <div className={style.content}>
          <div className={style.header}>
            <label>{t("please_select_category")}</label>
          </div>

          <div className={style.items}>
            {categoryList.map((category, index) => (
              <div
                className={style.item}
                key={index}
                onClick={() => selectCategoryHandler(category)}
              >
                {category}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Dialog>
  );
}

export default PollsModal;
