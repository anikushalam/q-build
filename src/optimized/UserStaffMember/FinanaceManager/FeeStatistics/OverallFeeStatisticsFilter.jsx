import QvipleLoader from "../../../Loader/QvipleLoader";
import { assestsUserFinanceUrl } from "../../../Services/UrlConfig/AssestsBaseUrl";
import BorderBottom from "../../../Ui/Border/BorderBottom";
import CreateButton from "../../../Ui/Button/CreateButton";
import Modal from "../../../Ui/Modal/Modal";
import UserMemberContentWrapper from "../../../Ui/UserMember/UserMemberContentWrapper";
import style from "../Income/Income.module.css";
import { useCallback, useState } from "react";
import FeeStatisticsDepartmentFilter from "./FeeStatisticsDepartmentFilter";
import FeeStatisticsBatchFilter from "./FeeStatisticsBatchFilter";
import FeeStatisticsStandardFilter from "./FeeStatisticsStandardFilter";
import FeeStatisticsBankFilter from "./FeeStatisticsBankFilter";
import { useTranslation } from "react-i18next";
import { useFinanceFeeStatitics } from "../../../Hooks/ApiHooks/FinanceManager/finance-manager-api";
import TileWrapper from "../../../Ui/Tab/Tile/TileWrapper";
import TileCard from "../../../Ui/Tab/Tile/TileCard";
import {
  activityFilterLabel,
  batchLabel,
  departmentLabel,
} from "../../../Constant/Statistics/statistics_constant";
const OverallFeeStatisticsFilter = ({
  onClose,
  fid,
  instituteId,
  onRefetch,
}) => {
  const { t } = useTranslation();
  const [state, setState] = useState({
    activity_status: "",
    all_depart: "",
    batch_status: "",
    master: [],
    batch: "",
    depart: "",
    bank: "",
    single_student: "",
  });
  const [disabled, setDisabled] = useState(false);

  const [financeFeeStatitics] = useFinanceFeeStatitics();

  const onSelectDepartment = useCallback((value) => {
    if (value?._id) {
      setState((prev) => ({
        ...prev,
        all_depart: "PARTICULAR",
        depart: value?._id,
      }));
    }
  }, []);
  const onSelectBatch = useCallback((value) => {
    if (value?._id) {
      setState((prev) => ({
        ...prev,
        batch_status: "PARTICULAR_BATCH",
        batch: value?._id,
      }));
    } else {
      setState((prev) => ({ ...prev, batch_status: "ALL_BATCH", batch: "" }));
    }
  }, []);

  const onSelectStandard = useCallback((value) => {
    setState((prev) => ({ ...prev, master: [value?._id] }));
  }, []);
  const onSelectBank = useCallback((value) => {
    setState((prev) => ({ ...prev, bank: value?._id }));
  }, []);

  const onFilter = () => {
    if (fid) {
      setDisabled((pre) => !pre);
      financeFeeStatitics({
        fid: fid,
        moduleType: "OVERALL_VIEW",
        statisticsBody: state,
      })
        .then(() => {
          onClose();
          if (onRefetch) {
            onRefetch();
          }
          setDisabled((pre) => !pre);
        })
        .catch({});
    }
  };

  const onActivityTile = (val) => {
    if (val === state.activity_status)
      setState((prev) => ({ ...prev, activity_status: "", batch: "" }));
    else setState((prev) => ({ ...prev, activity_status: val, batch: "" }));
  };
  const onDepartmentTile = (val) => {
    setState((prev) => ({ ...prev, all_depart: val, depart: "" }));
  };
  const onBatchTile = (val) => {
    setState((prev) => ({ ...prev, batch_status: val, batch: "" }));
  };
  return (
    <Modal onClose={onClose}>
      <div className={style.modal_container}>
        <UserMemberContentWrapper>
          <div className={style.modal_container_outer_header}>
            <div className={style.modal_container_header}>
              <h6>{t("overall_fee_statistics_filter")}</h6>
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
            paddingTop: "0",
          }}
        >
          <TileWrapper label="activity_type">
            {activityFilterLabel?.map((tile) => (
              <TileCard
                key={tile?.key}
                tile={tile}
                onTile={onActivityTile}
                activeTile={state.activity_status}
              />
            ))}
          </TileWrapper>
          {state.activity_status ? null : (
            <>
              <TileWrapper label="department_type">
                {departmentLabel?.map((tile) => (
                  <TileCard
                    key={tile?.key}
                    tile={tile}
                    onTile={onDepartmentTile}
                    activeTile={state.all_depart}
                  />
                ))}
              </TileWrapper>

              {state.all_depart === "PARTICULAR" ? (
                <>
                  <FeeStatisticsDepartmentFilter
                    fid={fid}
                    onSelect={onSelectDepartment}
                    onlyDepartment
                  />
                  <TileWrapper label="batch_type">
                    {batchLabel?.map((tile) => (
                      <TileCard
                        key={tile?.key}
                        tile={tile}
                        onTile={onBatchTile}
                        activeTile={state.batch_status}
                      />
                    ))}
                  </TileWrapper>

                  {state.batch_status === "PARTICULAR_BATCH" ? (
                    <FeeStatisticsBatchFilter
                      did={state.depart}
                      onSelect={onSelectBatch}
                      onlyBatch
                    />
                  ) : null}
                  <FeeStatisticsStandardFilter
                    did={state.depart}
                    onSelect={onSelectStandard}
                    instituteId={instituteId}
                  />
                </>
              ) : null}
              <FeeStatisticsBankFilter fid={fid} onSelect={onSelectBank} />
            </>
          )}
          <CreateButton label="filter" onAction={onFilter} />
        </UserMemberContentWrapper>
        {disabled && <QvipleLoader />}
      </div>
    </Modal>
  );
};

export default OverallFeeStatisticsFilter;
