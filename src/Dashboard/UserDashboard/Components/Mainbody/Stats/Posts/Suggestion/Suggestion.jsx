import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { usePostSuggestionListUser } from "../../../../../../../Post/Institute/Components/post-api";
import CarouselIcon from "./CarouselIcon";
import style from "./Suggestion.module.css";
import SuggestionCard from "./SuggestionCard";
const Suggestion = () => {
  const { t } = useTranslation();
  const id = useSelector((state) => state.idChange.id);
  const { postSuggestionListUser, postSuggestionListUserRefetch } =
    usePostSuggestionListUser({
      data: {
        id: id,
        expand_search: "",
      },
      skip: !id,
    });

  useEffect(() => {
    if (id) {
      postSuggestionListUserRefetch();
    }
  }, [id, postSuggestionListUserRefetch]);

  const onScrollNext = () => {
    const selectId = document.getElementById("viewScroll");
    selectId.scrollLeft += 350;
  };
  const onScrollPrevious = () => {
    const selectId = document.getElementById("viewScroll");
    selectId.scrollLeft -= 350;
  };
  return (
    <div className={style.suggestion}>
      <section className={style.suggestion_header}>
        <h6>{t("suggestion_for_you")}</h6>
        {/* <button>{t("view_all")}</button> */}
      </section>
      <div className={style.suggestion_main}>
        <CarouselIcon onScrollNext={onScrollPrevious} viewAs="PREVIOUS" />
        <section className={style.suggestion_container} id="viewScroll">
          {postSuggestionListUser?.refresh_recommend_user?.map((suggest) => (
            <SuggestionCard suggest={suggest} key={suggest?._id} />
          ))}
        </section>
        <CarouselIcon onScrollNext={onScrollNext} />
      </div>
    </div>
  );
};

export default Suggestion;
