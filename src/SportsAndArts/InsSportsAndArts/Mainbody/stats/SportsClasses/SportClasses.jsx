import React, { useState } from "react";
import CreatesportClassModal from "./CreatesportClassModal/CreatesportClassModal";
import style from "./Sports.module.css";
import { useTranslation } from "react-i18next";
import { imageShowUrl } from "../../../../../services/BaseUrl";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAllEventClassList } from "../../../../../hooks/sports/sports-api";
import QvipleLoading from "../../../../../Loader/QvipleLoading";

function Item({ sportClass }) {
  const { t } = useTranslation();
  return (
    <div className={style.item}>
      <img
        alt="not found"
        src={
          sportClass?.photoId !== "1"
            ? `${imageShowUrl}/${sportClass?.photo}`
            : "/images/football.svg"
        }
        className={style.stafImg}
      />

      <p>
        {sportClass?.sportClassName} {t("Class")}{" "}
      </p>
    </div>
  );
}

function SportClasses({
  sid,

  sportClassArr,
  fetchSportsArtsRefetch,
  sportDeptId,
}) {
  const [openModal, setOpenModal] = useState(false);
  const { t } = useTranslation();
  const [page, setPage] = useState(1);
  const [classes, setClasses] = useState([]);
  const [ref, inView] = useInView();
  // --------------------------------------
  const [state, setState] = useState(true);
  const [refetchStatus, setRefetchStatus] = useState(false);
  const [editRefetchStatus, setEditRefetchStatus] = useState(false);
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const { AllEventClassList, AllEventClassListRefetch } = useAllEventClassList({
    data: {
      sid: sid,
      page: page,
    },
    skip: !sid,
  });

  useEffect(() => {
    if (inView && state) setPage((page) => page + 1);
  }, [inView, state]);

  useEffect(() => {
    if (sid) {
      setShowingDataLoading(true);
      AllEventClassListRefetch();
    }
  }, [page, sid, AllEventClassListRefetch]);

  useEffect(() => {
    if (refetchStatus) {
      setClasses((prevState) =>
        [
          ...new Set(
            [...AllEventClassList?.classes, ...prevState]?.map(JSON.stringify)
          ),
        ]?.map(JSON.parse)
      );
      setShowingDataLoading(false);
      setRefetchStatus(false);
    } else if (editRefetchStatus) {
      setClasses((prevState) =>
        [...new Set([...AllEventClassList?.classes]?.map(JSON.stringify))]?.map(
          JSON.parse
        )
      );
      setShowingDataLoading(false);
      setEditRefetchStatus(false);
    } else {
      if (AllEventClassList?.classes) {
        setClasses((prevState) =>
          [
            ...new Set(
              [...prevState, ...AllEventClassList?.classes]?.map(JSON.stringify)
            ),
          ]?.map(JSON.parse)
        );
        setShowingDataLoading(false);
      } else if (AllEventClassList?.classes?.length === 0)
        setShowingDataLoading(false);
      else {
      }
    }

    if (AllEventClassList?.classes?.length === 10) setState(true);
    else setState(false);
  }, [AllEventClassList?.classes]);

  const onRefetchWhenClassCreated = () => {
    setPage(1);
    setEditRefetchStatus(true);
    setShowingDataLoading(true);
    AllEventClassListRefetch();
  };

  return (
    <>
      <div className={style.clases} onClick={() => setOpenModal(true)}>
        {t("add_new_class")}
      </div>
      <div className={style.sports}>
        {classes?.map((sport, index) =>
          classes?.length === index + 1 ? (
            <div key={index} ref={ref}>
              <Item sportClass={sport} key={index} />
            </div>
          ) : (
            <div key={index} ref={ref}>
              <Item sportClass={sport} key={index} />
            </div>
          )
        )}
        {showingDataLoading && <QvipleLoading />}
        {!showingDataLoading && AllEventClassList?.classes?.length === 0 && (
          <div className={style.noevent}>
            <h6>{t("no_class_found")}</h6>
          </div>
        )}
      </div>

      {openModal && (
        <CreatesportClassModal
          openModal={openModal}
          hideModal={() => setOpenModal(false)}
          fetchSportsArtsRefetch={fetchSportsArtsRefetch}
          sportDeptId={sportDeptId}
          refetch={onRefetchWhenClassCreated}
        />
      )}
    </>
  );
}

export default SportClasses;
