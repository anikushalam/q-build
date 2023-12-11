import React, { useState, useEffect, useCallback } from "react";
import { useInView } from "react-intersection-observer";
// import { useScrollbar } from "../../../../Scroll/use-scroll";
import { debounce } from "lodash";
import style from "../../../../Department/Institute/AssignStaff/AssignStaffModal.module.css";
import SearchModalWrapper from "../../../../Search/SearchModalWrapper";
import Overlay from "../../../../Search/Overlay";
import { useTranslation } from "react-i18next";
import { useAffiliatedSearch } from "../../../../hooks/plateform/plateform-api";
import { imageShowUrl } from "../../../../services/BaseUrl";
// import { useScrollbar } from "../../../../Scroll/use-scroll";

const SearchAffiliated = ({ onClose, selectMember }) => {
  // const { hideScrollbar, showScrollbar } = useScrollbar();
  // useEffect(() => {
  //   hideScrollbar();
  // }, []);

  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [ref, inView] = useInView();
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const [supportMember, setSupportMember] = React.useState([]);
  const { affiliatedSearch, affiliatedSearchRefetch } = useAffiliatedSearch({
    search: search,
    page: page,
    limit: 10,
  });

  React.useEffect(() => {
    affiliatedSearchRefetch();
  }, [affiliatedSearchRefetch, page]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  React.useEffect(() => {
    if (affiliatedSearch?.manage) {
      if (search) {
        setSupportMember(affiliatedSearch?.manage);
      } else {
        const uniquePost = [...supportMember, ...affiliatedSearch?.manage];
        const uniqueRefind = [...new Set(uniquePost.map(JSON.stringify))].map(
          JSON.parse
        );
        setSupportMember(uniqueRefind);
      }
    }

    //for next api is call or not dashboard
    if (affiliatedSearch?.manage.length === 10) setState(true);
    else setState(false);
  }, [affiliatedSearch?.manage]);

  useEffect(() => {
    if (search) handleSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const handleSearch = () => {
    affiliatedSearchRefetch();
  };

  const deb = useCallback(
    debounce((val) => setSearch(val), 500),
    []
  );

  const searchHandler = (val) => {
    deb(val);
  };

  const selectStaff = (val) => {
    selectMember(val);
    // showScrollbar();
    onClose();
  };

  const onCloseHandler = () => {
    // showScrollbar();
    onClose();
  };
  return (
    <>
      <SearchModalWrapper onClose={onCloseHandler} />
      <Overlay>
        <div style={{ backgroundColor: "#FAFAFA", borderRadius: "10px" }}>
          <div className={style.assign_title}>
            <h5>{t("search_select")}</h5>
            <img
              src="/images/close-post-icon.svg"
              onClick={onClose}
              alt="staff assign pop close icon"
            />
          </div>

          <div className={style.assign_search_container}>
            <input
              type="text"
              placeholder={t("search")}
              className={style.assign_search_input}
              // value={search}
              onChange={(e) => searchHandler(e.target.value)}
            />
            <img src="/images/search-dash-icon.svg" alt="search icon" />
          </div>

          <div className={style.assign_show_list}>
            {supportMember?.map((value, index) =>
              supportMember?.length === index + 1 ? (
                <div key={value._id} ref={ref}>
                  <div
                    className={style.assign_show_list_each}
                    onClick={() => selectStaff(value)}
                  >
                    <img
                      src={
                        value?.photo
                          ? `${imageShowUrl}/${value.photo}`
                          : "/images/member_tab/class/default_avatar.svg"
                      }
                      alt="student profile avatar"
                    />
                    <div className={style.assign_each_paragraph}>
                      <h6>{value?.affiliation_name}</h6>
                      <p>
                        {t("aff_ins")}{" "}
                        {value?.affiliation_institute_approve_count}
                      </p>
                    </div>
                  </div>
                  <hr />
                </div>
              ) : (
                <div key={value._id}>
                  <div
                    className={style.assign_show_list_each}
                    onClick={() => selectStaff(value)}
                  >
                    <img
                      src={
                        value?.photo
                          ? `${imageShowUrl}/${value.photo}`
                          : "/images/member_tab/class/default_avatar.svg"
                      }
                      alt="student profile avatar"
                    />
                    <div className={style.assign_each_paragraph}>
                      <h6>{value?.affiliation_name}</h6>
                      <p>
                        {t("aff_ins")}{" "}
                        {value?.affiliation_institute_approve_count}
                      </p>
                    </div>
                  </div>
                  <hr />
                </div>
              )
            )}
          </div>
        </div>
      </Overlay>
    </>
  );
};

export default SearchAffiliated;
