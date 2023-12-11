import style from "./PlateformUser.module.css";
import Modal from "../..//Ui/Modal/Modal";
import UserMemberContentWrapper from "../..//Ui/UserMember/UserMemberContentWrapper";
import BorderBottom from "../..//Ui/Border/BorderBottom";
import {
  assestsNavbarUrl,
  assestsUserFinanceUrl,
} from "../..//Services/UrlConfig/AssestsBaseUrl";
import { useTranslation } from "react-i18next";
import { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { nextPage } from "../..//Utils/Functions/nextPage";
import { customDebounce } from "../..//Utils/Functions/debounce";
import { useUniversalPlateformUser } from "../..//Hooks/ApiHooks/FinanceManager/finance-manager-api";
import PlateformUserCard from "./PlateformUserCard";
const PlateformUser = ({ onClose, selectedId, onSelectUser }) => {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [ref, inView] = useInView({ skip: search });

  const { universalPlateformUser, universalPlateformUserLoading } =
    useUniversalPlateformUser({
      page: page,
      limit: 10,
      search: search,
    });
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);
  useEffect(() => {
    if (universalPlateformUser?.length) {
      nextPage(universalPlateformUser?.length, setState);
    }
  }, [universalPlateformUser?.length]);

  const onDebounce = useCallback(
    customDebounce((val) => setSearch(val), 500),
    []
  );

  const onSearchEvent = (e) => {
    onDebounce(e.target.value);
  };
  const onSelect = (value) => {
    if (selectedId === value?._id) {
    } else {
      onSelectUser(value);
    }
  };
  return (
    <Modal onClose={onClose}>
      <div className={style.modal_container}>
        <UserMemberContentWrapper>
          <div className={style.modal_container_outer_header}>
            <div className={style.modal_container_header}>
              <h6>{t("search_user")}</h6>
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
            paddingTop: "0.3rem",
          }}
        >
          <div className={style.assign_search_container}>
            <input
              type="text"
              placeholder={t("search")}
              className={style.assign_search_input}
              onChange={onSearchEvent}
            />
            <img
              src={`${assestsNavbarUrl}/navbar-search.svg`}
              alt="search icon"
            />
          </div>

          {universalPlateformUser?.map((user, index) =>
            universalPlateformUser?.length === index + 1 ? (
              <div key={user?._id} ref={ref}>
                <PlateformUserCard
                  user={user}
                  selectedId={selectedId}
                  onSelect={onSelect}
                />
              </div>
            ) : (
              <PlateformUserCard
                user={user}
                key={user?._id}
                selectedId={selectedId}
                onSelect={onSelect}
              />
            )
          )}
        </UserMemberContentWrapper>
      </div>
    </Modal>
  );
};

export default PlateformUser;
