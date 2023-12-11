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
import { useInstituteAllStudent } from "../../Hooks/ApiHooks/FinanceManager/finance-manager-api";
import InstituteStudentCard from "./InstituteStudentCard";
const InstituteStudent = ({
  onClose,
  selectedId,
  onSelectStudent,
  instituteId,
}) => {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [state, setState] = useState(true);
  const [ref, inView] = useInView({ skip: search });

  const { instituteAllStudent, instituteAllStudentLoading } =
    useInstituteAllStudent({
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
    if (instituteAllStudent?.length) {
      nextPage(instituteAllStudent?.length, setState);
    }
  }, [instituteAllStudent?.length]);

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
      onSelectStudent(value);
    }
  };
  return (
    <Modal onClose={onClose}>
      <div className={style.modal_container}>
        <UserMemberContentWrapper>
          <div className={style.modal_container_outer_header}>
            <div className={style.modal_container_header}>
              <h6>{t("student_list")}</h6>
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

          {instituteAllStudent?.map((student, index) =>
            instituteAllStudent?.length === index + 1 ? (
              <div key={student?._id} ref={ref}>
                <InstituteStudentCard
                  student={student}
                  selectedId={selectedId}
                  onSelect={onSelect}
                />
              </div>
            ) : (
              <InstituteStudentCard
                student={student}
                key={student?._id}
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

export default InstituteStudent;
