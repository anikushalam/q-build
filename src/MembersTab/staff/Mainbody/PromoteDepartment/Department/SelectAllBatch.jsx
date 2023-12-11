import React, { useEffect, useState } from "react";
import PopupWrapper from "../../FinanceManager/FeesStructure/PopupWrapper";
import BorderBottom from "../../../../../StaffTab/components/DividerTab/MainContent/StaffAProfile/BorderBottom";
import { useGetOneDepartmentBatchList } from "../../../../../hooks/member_tab/department-api";
import moment from "moment";
import QvipleLoading from "../../../../../Loader/QvipleLoading";
import style from "../../StaffAdmisionAdmin/AdmissionScholarship/AdmissionScholarship.module.css";
import { useTranslation } from "react-i18next";
const SelectAllBatch = ({ onClose, did, onSelectbatch }) => {
  const { t } = useTranslation();
  const [showingDataLoading, setShowingDataLoading] = useState(true);
  const [stopList, setStopList] = useState([]);
  const { getOneDepartmentBatchList, getOneDepartmentBatchListRefetch } =
    useGetOneDepartmentBatchList({
      did: did,
      skip: !did,
    });
  useEffect(() => {
    if (did) {
      setShowingDataLoading(true);
      getOneDepartmentBatchListRefetch();
    }
  }, [did, getOneDepartmentBatchListRefetch]);
  useEffect(() => {
    if (getOneDepartmentBatchList?.allBatch) {
      setStopList((prevState) =>
        [
          ...new Set(
            [...prevState, ...getOneDepartmentBatchList?.allBatch]?.map(
              JSON.stringify
            )
          ),
        ]?.map(JSON.parse)
      );
      setShowingDataLoading(false);
    } else if (getOneDepartmentBatchList?.allBatch?.length === 0)
      setShowingDataLoading(false);
    else {
    }
  }, [getOneDepartmentBatchList?.allBatch]);

  return (
    <PopupWrapper onClose={onClose}>
      <div
        className={style.assign_role_container}
        style={{
          paddingBottom: "1rem",
        }}
      >
        <section className={style.assign_role_title}>
          <img
            src="/images/arrow-left-fees-icon.svg"
            onClick={onClose}
            alt="back icon"
          />

          <h6>{t("select_batch")}</h6>
        </section>
        <BorderBottom
          customStyle={{
            width: "100%",
          }}
        />
        <section
          style={{
            padding: "0 0.8rem",
          }}
        >
          {stopList?.map((stop) => (
            <section
              className={style.route_container}
              key={stop?._id}
              onClick={() => {
                onSelectbatch(stop);
                onClose();
              }}
            >
              <img src="/images/master-24-grey-icon.svg" alt="batch icon" />
              <div className={style.student_container_name}>
                <h6>{`${stop?.batchName ?? ""}`}</h6>
                <p className={style.student_container_gr}>
                  {moment(stop?.batchName?.createdAt).format("DD MMM yyyy")}
                </p>
              </div>
            </section>
          ))}
          {showingDataLoading && <QvipleLoading />}
        </section>
      </div>
    </PopupWrapper>
  );
};

export default SelectAllBatch;
