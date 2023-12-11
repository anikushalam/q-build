import React, { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useSelector } from "react-redux";
import { debounce } from "lodash";
import style from "./SearchUniversalUser.module.css";
import { Dialog } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useUniversalUser } from "../../../../../Post/Institute/Components/search-api";
import { imageShowUrl } from "../../../../../services/BaseUrl";

const SearchUniversalUser = ({
  onClose,
  title,
  headSelect,
  assignHead,
  disabledId,
}) => {
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [ref, inView] = useInView();
  const [search, setSearch] = useState("");
  const [allStaff, setAllStaff] = React.useState([]);

  const ids = useSelector((state) => state.idChange);

  const { universalUser, universalUserRefetch } = useUniversalUser({
    search: search,
    page: page,
    limit: 10,
  });

  React.useEffect(() => {
    if (ids?.id) universalUserRefetch();
  }, [ids?.id, universalUserRefetch, page]);

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  React.useEffect(() => {
    if (universalUser?.user) {
      if (search) {
        setAllStaff(universalUser?.user);
      } else {
        const uniquePost = [...allStaff, ...universalUser?.user];
        const uniqueRefind = [...new Set(uniquePost.map(JSON.stringify))].map(
          JSON.parse
        );
        setAllStaff(uniqueRefind);
      }
    }

    //for next api is call or not dashboard
    if (universalUser?.user.length === 10) setState(true);
    else setState(false);
  }, [universalUser?.user]);

  useEffect(() => {
    if (search) handleSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const handleSearch = () => {
    universalUserRefetch();
  };

  const deb = useCallback(
    debounce((val) => setSearch(val), 500),
    []
  );

  const searchHandler = (val) => {
    deb(val);
  };

  const selectStaff = (val) => {
    if (disabledId === val?._id) {
    } else {
      headSelect(val);
      onClose();
    }
  };

  return (
    <Dialog open={assignHead} onClose={onClose}>
      <div style={{ backgroundColor: "#FAFAFA" }}>
        <div className={style.assign_title}>
          <h5>{title}</h5>
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
          {allStaff?.map((value, index) =>
            allStaff?.length === index + 1 ? (
              <div key={value._id} ref={ref}>
                <div
                  className={style.assign_show_list_each}
                  style={
                    disabledId === value._id
                      ? { backgroundColor: "rgba(75, 26, 133, 0.1)" }
                      : { backgroundColor: "inherit" }
                  }
                  onClick={() => selectStaff(value)}
                >
                  <img
                    src={
                      value?.profilePhoto
                        ? `${imageShowUrl}/${value.profilePhoto}`
                        : "/images/member_tab/class/default_avatar.svg"
                    }
                    alt="staff profile avatar"
                  />
                  <div className={style.assign_each_paragraph}>
                    <h6>{value?.userLegalName}</h6>
                    <p>{value?.username}</p>
                  </div>
                </div>
                <hr />
              </div>
            ) : (
              <div key={value._id}>
                <div
                  className={style.assign_show_list_each}
                  style={
                    disabledId === value._id
                      ? { backgroundColor: "rgba(75, 26, 133, 0.1)" }
                      : { backgroundColor: "inherit" }
                  }
                  onClick={() => selectStaff(value)}
                >
                  <img
                    src={
                      value?.profilePhoto
                        ? `${imageShowUrl}/${value.profilePhoto}`
                        : "/images/member_tab/class/default_avatar.svg"
                    }
                    alt="staff profile avatar"
                  />
                  <div className={style.assign_each_paragraph}>
                    <h6>{value?.userLegalName}</h6>
                    <p>{value?.username}</p>
                  </div>
                </div>
                <hr />
              </div>
            )
          )}
        </div>
      </div>
    </Dialog>
  );
};

export default SearchUniversalUser;
