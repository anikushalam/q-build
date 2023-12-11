import { assestsUserFinanceUrl } from "../../../Services/UrlConfig/AssestsBaseUrl";
import style from "../../PlateformUser/PlateformUser.module.css";
import BorderBottom from "../../../Ui/Border/BorderBottom";

const SelectDepartmentCard = ({ department, onSelect }) => {
  const onSelectDept = () => {
    onSelect(department);
  };
  return (
    <>
      <div className={style.assign_show_list_each} onClick={onSelectDept}>
        <img
          src={`${assestsUserFinanceUrl}/department.svg`}
          alt="department icon"
        />
        <div className={style.assign_each_paragraph}>
          <h6>{department?.dName ?? ""}</h6>
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

export default SelectDepartmentCard;
