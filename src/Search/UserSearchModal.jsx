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
import UserConnectionResult from "./UserConnectionResult";
import { useUserAllSearch } from "../Post/Institute/Components/search-api";
import { useGetOneUserProfileQuery } from "../services/qvipleAPI";
import MentorList from "./User/MentorList";
const UserSearchModal = ({ onCloseSearch }) => {
  const { t } = useTranslation();
  // const { hideScrollbar } = useScrollbar();
  // React.useEffect(() => {
  //   hideScrollbar();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const [skip, setSkip] = useState(true);
  const [search, setSearch] = useState("");
  // const searchLength = search.length;
  const ids = useSelector((state) => state.idChange);
  const { userAllSearch, userAllSearchRefetch } = useUserAllSearch({
    skip: skip,
    search: { search: search, page: 1, id: ids?.id, limit: 6, filter: "all" },
  });
  const { data: profileData, refetch } = useGetOneUserProfileQuery(ids?.id, {
    skip: !ids?.id,
  });
  useEffect(() => {
    if (ids.id) refetch();
  }, [ids?.id, refetch]);
  //   const [dyanmicSuggestion, setDyanmicSuggestion] = useState();
  // const [queryValue, setQueryValue] = useState("");
  // const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    if (search) handleSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  //   const SearchQuery = (value) => {
  //     const dyanmic = SearchSuggestion(value);

  //     setDyanmicSuggestion(dyanmic);
  //   };

  const handleSearch = () => {
    setSkip(false);
    userAllSearchRefetch();
  };

  const deb = useCallback(
    debounce((val) => setSearch(val), 500),
    []
  );

  const searchHandler = (val) => {
    deb(val);
  };

  //   console.info("THis is search", search);
  return (
    <>
      <SearchModalBackdrop onClose={onCloseSearch} />
      <SearchCardWrapper>
        <SearchHeader
          setSearchQuery={searchHandler}
          username={profileData?.user?.username}
          onClose={onCloseSearch}
          searchQuery={search}
        />
        <hr className={style.search_hr} />
        <div className={style.search_result_container}>
          <div className={style.search_result_container_heading}>
            <p>{t("search_result")}</p>
            <Link
              to={`/q/${profileData?.user?.username}/search`}
              state={{ search: search }}
              onClick={onCloseSearch}
            >
              <p>{t("view_all")}</p>
            </Link>
          </div>
          {userAllSearch?.universalArrayUser?.map((item, index) =>
            !item?.hashtag_name ? (
              item?.user ? (
                <MentorList staff={item} key={index} />
              ) : (
                <UserConnectionResult
                  item={item}
                  key={index}
                  hideModal={onCloseSearch}
                  userId={ids?.id}
                />
              )
            ) : (
              ""
            )
          )}
        </div>
      </SearchCardWrapper>
    </>
  );
};

export default UserSearchModal;

// this is extra but not know
// filter((val) => {
//   const nameSubstring = val?.userLegalName
//     ? val?.userLegalName
//         ?.substring(0, searchLength)
//         .toLocaleLowerCase()
//     : val?.insName
//     ? val?.insName?.substring(0, searchLength).toLocaleLowerCase()
//     : "";

//   const userNameSubstring = val?.username
//     ? val?.username?.substring(0, searchLength).toLocaleLowerCase()
//     : val?.name
//     ? val?.name?.substring(0, searchLength).toLocaleLowerCase()
//     : "";

//   if (
//     userNameSubstring === search.toLocaleLowerCase() ||
//     nameSubstring === search.toLocaleLowerCase()
//   ) {
//     return val;
//   } else {
//     return "";
//   }
// })
