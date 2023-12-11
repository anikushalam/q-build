import style from "../PlateformUser/PlateformUser.module.css";
import Modal from "../../Ui/Modal/Modal";
import UserMemberContentWrapper from "../../Ui/UserMember/UserMemberContentWrapper";
import BorderBottom from "../../Ui/Border/BorderBottom";
import {
  assestsNavbarUrl,
  assestsUserFinanceUrl,
} from "../../Services/UrlConfig/AssestsBaseUrl";
import { useTranslation } from "react-i18next";
import { useCallback, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { nextPage } from "../../Utils/Functions/nextPage";
import { customDebounce } from "../../Utils/Functions/debounce";
import { useInstituteAllStaff } from "../../Hooks/ApiHooks/FinanceManager/finance-manager-api";
import InstituteStaffCard from "./InstituteStaffCard";
const InstituteStaff = ({
  onClose,
  selectedId,
  onSelectStaff,
  instituteId,
}) => {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [ref, inView] = useInView({ skip: search });

  const { instituteAllStaff, instituteAllStaffLoading } = useInstituteAllStaff({
    data: {
      id: instituteId,
      page: page,
      limit: 10,
      search: search,
    },
    skip: !instituteId,
  });
  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);
  useEffect(() => {
    if (instituteAllStaff?.length) {
      nextPage(instituteAllStaff?.length, setState);
    }
  }, [instituteAllStaff?.length]);

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
      onSelectStaff(value);
    }
  };
  return (
    <Modal onClose={onClose}>
      <div className={style.modal_container}>
        <UserMemberContentWrapper>
          <div className={style.modal_container_outer_header}>
            <div className={style.modal_container_header}>
              <h6>{t("staff_list")}</h6>
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
            paddingBottom: "1rem",
          }}
        >
          <div
            className={style.assign_search_container}
            style={{
              marginBottom: "1rem",
            }}
          >
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

          {instituteAllStaff?.map((staff, index) =>
            instituteAllStaff?.length === index + 1 ? (
              <div key={staff?._id} ref={ref}>
                <InstituteStaffCard
                  staff={staff}
                  selectedId={selectedId}
                  onSelect={onSelect}
                />
              </div>
            ) : (
              <InstituteStaffCard
                staff={staff}
                key={staff?._id}
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

export default InstituteStaff;
