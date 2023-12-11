import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import SearchModalBackdrop from "./SearchModalBackdrop";
import SearchHeader from "./SearchHeader";
import SearchCardWrapper from "./SearchCardWrapper";
// import { useScrollbar } from "../Scroll/use-scroll";
import { useSelector } from "react-redux";
import { debounce } from "lodash";
import style from "./SearchStyle.module.css";
import { useInstituteAllSearch } from "../Post/Institute/Components/search-api";
import AllMixinList from "./Institute/AllMixinList";
const InstituteSearchModal = ({ onCloseSearch, username }) => {
  const { t } = useTranslation();
  // const { hideScrollbar } = useScrollbar();

  const [skip, setSkip] = useState(true);
  const [search, setSearch] = useState("");
  const ids = useSelector((state) => state.idChange);
  const { instituteAllSearch, instituteAllSearchRefetch } =
    useInstituteAllSearch({
      skip: skip,
      search: { search: search, page: 1, id: ids?.id, limit: 6, filter: "all" },
    });

  // React.useEffect(() => {
  //   hideScrollbar();
  // }, []);

  useEffect(() => {
    if (search) handleSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const handleSearch = () => {
    setSkip(false);
    instituteAllSearchRefetch();
  };

  const deb = useCallback(
    debounce((val) => setSearch(val), 500),
    []
  );

  const searchHandler = (val) => {
    deb(val);
  };

  // console.info("This is my info", instituteAllSearch);
  return (
    <>
      <SearchModalBackdrop onClose={onCloseSearch} />
      <SearchCardWrapper>
        <SearchHeader
          setSearchQuery={searchHandler}
          username={username}
          searchQuery={search}
          onClose={onCloseSearch}
        />
        <hr className={style.search_hr} />
        <div className={style.search_result_container}>
          <div className={style.search_result_container_heading}>
            <p>{t("search_result")}</p>
            <Link
              to={`/q/${username}/search`}
              state={{ search: search }}
              onClick={onCloseSearch}
            >
              <p>{t("view_all")}</p>
            </Link>
          </div>
          {instituteAllSearch?.universalArray?.map((mixin) => (
            <AllMixinList
              mixin={mixin}
              key={mixin?._id}
              onCloseSearch={onCloseSearch}
              username={username}
            />
          ))}
        </div>
      </SearchCardWrapper>
    </>
  );
};

export default InstituteSearchModal;
