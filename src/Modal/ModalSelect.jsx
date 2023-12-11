import React from "react";
import style from "./Modal.module.css";
// import Dropdown from "./Dropdown";

const ModalSelect = ({
  selectTitle,
  selectTitlePlaceholder,
  selectOptions,
  switchOption,
  type,
  top,
}) => {
  // const [click, setClick] = React.useState(false);
  return (
    <div className={style.item}>
      <p className={style.itemHeading}>{selectTitle}</p>
      {/* <div
        className={style.select}
        // onClick={() => setClick((ope) => !ope)}
      >
        <p>{selectTitlePlaceholder}</p>
        <img src="/images/select-icon.svg" alt="not found" />
      </div> */}

      {selectOptions?.map((option, index) => (
        <div
          className={style.select_dropdown}
          onClick={() => {
            switchOption(option);
          }}
          key={index}
        >
          {type === "dept" ? (
            <>
              <img src="/images/members/uni-mcq-depart.svg" alt="not found" />
              <p>{option?.dName}</p>
            </>
          ) : type === "cls" ? (
            <>
              <img src="/images/members/uni-mcq-class.svg" alt="not found" />
              <p>{option?.className}</p>
            </>
          ) : (
            <>
              <img src="/images/members/uni-mcq-subject.svg" alt="not found" />
              <p>{option?.subjectName}</p>
            </>
          )}
        </div>
      ))}

      {/* {click && (
        <div className={style.tooltip}>
          <Dropdown
            options={selectOptions}
            switchOption={switchOption}
            type={type}
            setClick={setClick}
            top={top}
          />
        </div>
      )} */}
    </div>
  );
};

export default ModalSelect;
