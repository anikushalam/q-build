import React, { useState } from "react";
import FeesMenu from "./FeesMenu";
import style from "./List.module.css";

const DepartmentFeesCard = ({ fees, onRefetch, did }) => {
  const [openFeesMenu, setOpenFeesMenu] = useState("");

  return (
    <>
      <div className={style.exam_card_container}>
        <img
          src="/images/members/fees-icon.svg"
          alt="fees icon"
          className={style.fees_image}
        />
        <div className={style.exam_inner_text}>
          <h6>Rs. {fees?.feeAmount ?? 0}/-</h6>
          <p>{fees?.feeName ?? ""} </p>
        </div>
        <img
          src="/images/three-24-dot-icon.svg"
          alt="menu icon"
          onClick={() => setOpenFeesMenu(fees)}
          className={style.menu_icon}
          title="Menu"
        />
      </div>
      {openFeesMenu && (
        <FeesMenu
          did={did}
          onRefetch={onRefetch}
          openFeesMenu={openFeesMenu}
          onClose={() => setOpenFeesMenu("")}
        />
      )}
    </>
  );
};

// function List({ fees, onRefetch, did }) {
//   return (
//     <div className={style.examList}>
//       <div className={style.examListheader}>Previous Fees List</div>

//       <div className={style.examListItems}>
//         {fees?.map((val) => (
//           <Item
//             name={val?.feeName}
//             amount={val?.feeAmount}
//             key={val._id}
//             fees={val}
//             setOpenFeesMenu={setOpenFeesMenu}
//           />
//         ))}
//       </div>

//     </div>
//   );
// }

export default DepartmentFeesCard;
