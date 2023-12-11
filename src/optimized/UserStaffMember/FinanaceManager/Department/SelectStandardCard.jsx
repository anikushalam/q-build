import BorderBottom from "../../../Ui/Border/BorderBottom";
import style from "../../PlateformUser/PlateformUser.module.css";
import { assestsUserFinanceUrl } from "../../../Services/UrlConfig/AssestsBaseUrl";

const SelectStandardCard = ({ cls, onSelect, selectedId }) => {
  const onSelectDept = () => {
    onSelect(cls);
  };
  return (
    <>
      <div
        className={
          selectedId?.includes(cls?._id)
            ? `${style.assign_show_list_each} ${style.assign_show_list_each_active}`
            : style.assign_show_list_each
        }
        onClick={onSelectDept}
      >
        <img
          src={`${assestsUserFinanceUrl}/class.svg`}
          alt="class icon"
          style={{
            borderRadius: "0",
          }}
        />
        <div className={style.assign_each_paragraph}>
          <h6>{cls?.className ?? ""}</h6>
          {/* <p>{`${department?.dHead?.staffFirstName ?? ""} ${
      department?.dHead?.staffMiddleName ?? ""
    } ${department?.dHead?.staffLastName ?? ""}`}</p> */}
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

export default SelectStandardCard;
