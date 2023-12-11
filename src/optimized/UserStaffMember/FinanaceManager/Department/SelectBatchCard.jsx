import { assestsUserFinanceUrl } from "../../../Services/UrlConfig/AssestsBaseUrl";
import style from "../../PlateformUser/PlateformUser.module.css";
import BorderBottom from "../../../Ui/Border/BorderBottom";

const SelectBatchCard = ({ batch, onSelect }) => {
  const onSelectDept = () => {
    onSelect(batch);
  };
  return (
    <>
      <div className={style.assign_show_list_each} onClick={onSelectDept}>
        <img
          src={`${assestsUserFinanceUrl}/class.svg`}
          style={{
            borderRadius: "0",
          }}
          alt="batch icon"
        />
        <div className={style.assign_each_paragraph}>
          <h6>{batch?.batchName ?? ""}</h6>
        </div>
      </div>
      <BorderBottom
        customStyleBorder={{
          margin: "0",
        }}
      />
    </>
  );
};

export default SelectBatchCard;
