import React, { useState } from "react";
import style from "./StudentList.module.css";

function Item({ index, setStudentBehaviour, stu, clickedIndex, channgeIndex }) {
  const [clicked, setClick] = useState(false);
  const onClickHandler = (val) => {
    setStudentBehaviour(val);
    setClick(true);
    channgeIndex(index);
  };
  return (
    <div
      onClick={() => onClickHandler(stu)}
      className={
        clickedIndex === index
          ? `${style.box} ${style.green}`
          : clicked && clickedIndex === index
          ? `${style.box} ${style.green}`
          : stu?.studentBehaviour
          ? `${style.box} ${style.purple}`
          : style.box
      }
    >
      {stu?.studentROLLNO > 9 ? stu?.studentROLLNO : `0${stu?.studentROLLNO}`}
    </div>
  );
}

function StudentList({
  behaviourList,
  setStudentBehaviour,
  clickedIndex,
  channgeIndex,
}) {
  return (
    <div className={style.studentList}>
      {behaviourList?.map((stu, index) => (
        <Item
          key={index}
          stu={stu}
          index={index}
          clickedIndex={clickedIndex}
          channgeIndex={channgeIndex}
          setStudentBehaviour={setStudentBehaviour}
        />
      ))}
    </div>
  );
}

export default StudentList;
